import { Resend } from "resend";

// Lazily instantiate so a missing RESEND_API_KEY doesn't crash the build.
// Real requests still require the env var to be set at runtime.
let _resend = null;
function getResend() {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

// ──────────────────────────────────────────────────────────────────────────────
// Spam detection
//
// Layered defense against form-spam bots. Order matters: cheapest checks first
// so we reject obvious garbage without spending CPU on regex evaluation.
// ──────────────────────────────────────────────────────────────────────────────

// 1. Honeypot — invisible field that real users never fill. Bots blindly fill
//    every input they see (including hidden ones), which triggers this trap.
function trippedHoneypot(body) {
  return typeof body.website === "string" && body.website.trim().length > 0;
}

// 2. Submission timing — real users take seconds to fill a form. Bots POST
//    instantly. Anything under 3 s is almost certainly automated.
function tooFast(body) {
  const elapsed = Number(body.elapsedMs);
  return Number.isFinite(elapsed) && elapsed > 0 && elapsed < 3000;
}

// 3. Email format — basic shape check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function badEmailShape(email) {
  return typeof email !== "string" || !EMAIL_RE.test(email.trim());
}

// 4. Gmail dot-trick abuse — gmail.com ignores periods in the local part, so
//    spammers add many dots to make each address look unique while routing all
//    to one inbox. Real Gmail users have 0–2 dots; 4+ is essentially always
//    spam.
function gmailDotAbuse(email) {
  if (typeof email !== "string") return false;
  const at = email.indexOf("@");
  if (at < 0) return false;
  const domain = email.slice(at + 1).toLowerCase();
  if (domain !== "gmail.com" && domain !== "googlemail.com") return false;
  const local = email.slice(0, at);
  const dots = (local.match(/\./g) || []).length;
  return dots >= 4;
}

// 5. Gibberish detection — bots fill required text fields with random
//    alphanumeric strings. Real names and messages have spaces, punctuation,
//    and a vowel ratio close to natural language (~38%). Random strings are
//    long, single-token, and have weird vowel ratios.
//
//    A field is flagged as gibberish if ALL of:
//    - length ≥ 12
//    - contains no whitespace at all
//    - contains no punctuation (just letters and digits)
//    - vowel ratio is far from natural language range (0.20–0.55)
function looksLikeGibberish(input) {
  if (typeof input !== "string") return false;
  const s = input.trim();
  if (s.length < 12) return false;
  if (/\s/.test(s)) return false;
  if (!/^[A-Za-z0-9]+$/.test(s)) return false; // only letters/digits, no punctuation
  const letters = s.match(/[A-Za-z]/g) || [];
  if (letters.length === 0) return false;
  const vowels = s.match(/[aeiouAEIOU]/g) || [];
  const ratio = vowels.length / letters.length;
  return ratio < 0.20 || ratio > 0.55;
}

// 6. Project type allowlist — must match one of the form's actual options.
//    Bots that submit raw JSON sometimes fabricate values.
const ALLOWED_PROJECT_TYPES = new Set([
  "Restaurant / Cafe",
  "Retail / Commercial",
  "Tenant Improvement",
  "Residential Remodel",
  "New Construction",
  "ADU / JADU",
  "Other",
]);

function classifySubmission(body) {
  if (trippedHoneypot(body)) return "honeypot";
  if (tooFast(body)) return "too-fast";

  const { name, email, projectType, message } = body;

  if (!name || !email || !projectType) return "missing-required";
  if (badEmailShape(email)) return "bad-email";
  if (gmailDotAbuse(email)) return "gmail-dot-abuse";
  if (!ALLOWED_PROJECT_TYPES.has(projectType)) return "bad-project-type";
  if (looksLikeGibberish(name)) return "gibberish-name";
  if (message && looksLikeGibberish(message)) return "gibberish-message";

  return "ok";
}

export async function POST(request) {
  try {
    const body = await request.json();
    const verdict = classifySubmission(body);

    // Silent rejection: return success to spam attempts so bots can't probe
    // which check tripped them. This deters iteration on the spam payload.
    // Log server-side so we can monitor the spam rate without surfacing it.
    if (verdict !== "ok") {
      console.log(`[contact] rejected: ${verdict}`, {
        nameLen: body.name?.length,
        emailDomain: body.email?.split("@")[1],
      });
      return Response.json({ success: true });
    }

    const { name, email, projectType, budget, timeline, message } = body;

    const resend = getResend();

    // Send notification to YCD Studio.
    //
    // IMPORTANT: We deliberately do NOT send a confirmation email to the
    // user-supplied address. Doing so turned the form into a spam relay
    // (a bot can put any third-party email in the `email` field and we'd
    // happily mail them from our domain). The success state in the browser
    // is sufficient confirmation for legitimate users; we follow up by hand
    // when responding within 24 hours.
    await resend.emails.send({
      from: "YCD Studio <contact@ycd.studio>",
      to: ["info@ycd.studio"],
      replyTo: email,
      subject: `New Project Inquiry — ${projectType} — ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="border-bottom: 2px solid #0A0A0A; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 20px; font-weight: 600; margin: 0;">New Project Inquiry</h1>
            <p style="color: #666; margin: 4px 0 0;">via ycd.studio contact form</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; vertical-align: top;">Project Type</td>
              <td style="padding: 8px 0;">${projectType}</td>
            </tr>
            ${budget ? `<tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Budget</td><td style="padding: 8px 0;">${budget}</td></tr>` : ""}
            ${timeline ? `<tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Timeline</td><td style="padding: 8px 0;">${timeline}</td></tr>` : ""}
          </table>

          ${
            message
              ? `<div style="background: #F5F5F3; padding: 16px 20px; border-radius: 8px; margin-bottom: 24px;">
                   <p style="color: #888; font-size: 13px; margin: 0 0 8px;">Message</p>
                   <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                 </div>`
              : ""
          }

          <p style="color: #999; font-size: 12px; margin-top: 32px;">
            Reply directly to this email to respond to ${name.split(" ")[0]}.
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
