import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, projectType, budget, timeline, message } =
      await request.json();

    // Basic validation
    if (!name || !email || !projectType) {
      return Response.json(
        { error: "Name, email, and project type are required." },
        { status: 400 }
      );
    }

    // Send notification to YCD Studio
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

    // Send confirmation to the client
    await resend.emails.send({
      from: "YCD Studio <contact@ycd.studio>",
      to: [email],
      subject: "We received your inquiry — YCD Studio",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="border-bottom: 2px solid #0A0A0A; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 20px; font-weight: 600; margin: 0;">Thanks for reaching out, ${name.split(" ")[0]}.</h1>
          </div>

          <p style="line-height: 1.7; color: #333;">
            We've received your project inquiry and will get back to you within 24 hours.
          </p>

          <p style="line-height: 1.7; color: #333;">
            In the meantime, feel free to explore some of our
            <a href="https://ycd.studio/work" style="color: #2563EB;">recent work</a>.
          </p>

          <p style="line-height: 1.7; color: #333; margin-top: 32px;">
            Best,<br/>
            The YCD Studio Team
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0 16px;" />
          <p style="color: #999; font-size: 12px;">
            YCD Studio &middot; San Francisco Bay Area<br/>
            <a href="https://ycd.studio" style="color: #999;">ycd.studio</a> &middot;
            <a href="tel:+14153000057" style="color: #999;">+1 415-300-0057</a>
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
