// PageSpeed Insights monitoring — complements gsc-coverage by catching the OTHER
// dimension that matters for SEO: Core Web Vitals (LCP, CLS, INP) + overall
// Lighthouse performance score. These feed directly into Google's ranking signals
// and into the Core Web Vitals report that showed "No data" in our GSC dashboard.
//
// Public API, no auth required for our volume (~11 URLs × 2 strategies = 22 calls).
// If you want higher limits or CI integration, set PAGESPEED_API_KEY in .env.local.
//
// Usage:   node scripts/seo/pagespeed.mjs
//          node scripts/seo/pagespeed.mjs --strategy=mobile     (just mobile)
//          node scripts/seo/pagespeed.mjs --strategy=desktop
//
// Produces: seo-reports/pagespeed-YYYY-MM-DD.md + pagespeed-state.json
//           Diff-only on subsequent runs, same pattern as gsc-coverage.

import fs from "node:fs/promises";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
dotenv.config();

const API_KEY = process.env.PAGESPEED_API_KEY || "";
const BASE = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

// URLs worth monitoring for CWV regressions. Keep this list tight — each URL
// costs an API call per strategy, and we want the report to stay scannable.
const MONITORED_URLS = [
  "https://ycd.studio/",
  "https://ycd.studio/work",
  "https://ycd.studio/studio",
  "https://ycd.studio/blog",
  "https://ycd.studio/contact",
  "https://ycd.studio/tenant-improvement",
  "https://ycd.studio/residential",
  "https://ycd.studio/hospitality",
  "https://ycd.studio/commercial",
  "https://ycd.studio/san-francisco",
  "https://ycd.studio/oakland",
  "https://ycd.studio/bay-area",
];

const today = new Date().toISOString().slice(0, 10);
const STATE_FILE = path.join("seo-reports", "pagespeed-state.json");
const REPORT_FILE = path.join("seo-reports", `pagespeed-${today}.md`);

const args = process.argv.slice(2);
const strategyArg = args.find((a) => a.startsWith("--strategy="))?.split("=")[1];
const strategies = strategyArg ? [strategyArg] : ["mobile", "desktop"];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function runPSI(url, strategy) {
  const params = new URLSearchParams({
    url,
    strategy,
    category: "PERFORMANCE",
    category_SEO: "SEO",
  });
  if (API_KEY) params.set("key", API_KEY);

  const res = await fetch(`${BASE}?${params.toString()}`);
  if (!res.ok) throw new Error(`PSI ${res.status} for ${url} (${strategy})`);
  const data = await res.json();

  const lh = data.lighthouseResult || {};
  const audits = lh.audits || {};
  const categories = lh.categories || {};

  // CrUX real-user data (if Chrome has enough samples for this origin/URL)
  const cruxUrl = data.loadingExperience?.metrics || {};
  const cruxOrigin = data.originLoadingExperience?.metrics || {};

  return {
    perfScore: Math.round((categories.performance?.score || 0) * 100),
    lcpMs: audits["largest-contentful-paint"]?.numericValue ?? null,
    clsRaw: audits["cumulative-layout-shift"]?.numericValue ?? null,
    inpMs: audits["interaction-to-next-paint"]?.numericValue ?? null,
    tbtMs: audits["total-blocking-time"]?.numericValue ?? null,
    fcpMs: audits["first-contentful-paint"]?.numericValue ?? null,
    ttfbMs: audits["server-response-time"]?.numericValue ?? null,
    // CrUX "field data" percentile buckets (only present when enough real users)
    cruxLcpP75: cruxUrl.LARGEST_CONTENTFUL_PAINT_MS?.percentile ?? cruxOrigin.LARGEST_CONTENTFUL_PAINT_MS?.percentile ?? null,
    cruxCls: cruxUrl.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile ?? cruxOrigin.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile ?? null,
    cruxInpP75: cruxUrl.INTERACTION_TO_NEXT_PAINT?.percentile ?? cruxOrigin.INTERACTION_TO_NEXT_PAINT?.percentile ?? null,
  };
}

// Google's Core Web Vitals thresholds. "good / needs improvement / poor".
function rateLcp(ms) {
  if (ms == null) return "—";
  if (ms <= 2500) return "🟢";
  if (ms <= 4000) return "🟡";
  return "🔴";
}
function rateCls(raw) {
  if (raw == null) return "—";
  if (raw <= 0.1) return "🟢";
  if (raw <= 0.25) return "🟡";
  return "🔴";
}
function rateInp(ms) {
  if (ms == null) return "—";
  if (ms <= 200) return "🟢";
  if (ms <= 500) return "🟡";
  return "🔴";
}
function ratePerf(score) {
  if (score >= 90) return "🟢";
  if (score >= 50) return "🟡";
  return "🔴";
}

function fmtMs(ms) {
  if (ms == null) return "—";
  return ms < 1000 ? `${Math.round(ms)}ms` : `${(ms / 1000).toFixed(2)}s`;
}
function fmtCls(raw) {
  if (raw == null) return "—";
  // CrUX returns CLS * 100 as an integer percentile; Lighthouse returns raw 0-1
  return typeof raw === "number" && raw < 10 ? raw.toFixed(3) : (raw / 100).toFixed(3);
}

async function loadState() {
  try {
    return JSON.parse(await fs.readFile(STATE_FILE, "utf8"));
  } catch {
    return null;
  }
}

function diff(prev, cur, key, unit) {
  if (prev?.[key] == null || cur?.[key] == null) return "";
  const d = cur[key] - prev[key];
  if (Math.abs(d) < (unit === "ms" ? 50 : unit === "score" ? 2 : 0.005)) return "";
  const arrow = d > 0 ? (unit === "score" ? "↑" : "↓ worse") : (unit === "score" ? "↓" : "↑ better");
  const sign = d > 0 ? "+" : "";
  if (unit === "ms") return ` (${sign}${Math.round(d)}ms ${d > 0 ? "↓" : "↑"})`;
  if (unit === "score") return ` (${sign}${Math.round(d)})`;
  return ` (${sign}${d.toFixed(3)})`;
}

async function main() {
  const previous = await loadState();
  const isFirstRun = !previous;

  console.log(`PageSpeed Insights — ${MONITORED_URLS.length} URLs × ${strategies.join(", ")}`);
  console.log(isFirstRun ? "(First run — establishing baseline)" : `(Comparing against ${previous.generatedAt.slice(0, 10)})`);
  console.log(API_KEY ? "(using PAGESPEED_API_KEY)" : "(no API key — throttling to 1 req/sec)");
  console.log("");

  const current = { generatedAt: new Date().toISOString(), results: {} };
  const regressions = [];
  const wins = [];

  for (const url of MONITORED_URLS) {
    current.results[url] = {};
    for (const strategy of strategies) {
      const short = url.replace("https://ycd.studio", "") || "/";
      try {
        const m = await runPSI(url, strategy);
        current.results[url][strategy] = m;
        const prev = previous?.results?.[url]?.[strategy];

        process.stdout.write(
          `${ratePerf(m.perfScore)} ${short} [${strategy.padEnd(7)}] ` +
            `perf=${m.perfScore} ` +
            `LCP=${fmtMs(m.lcpMs)}${rateLcp(m.lcpMs)} ` +
            `CLS=${fmtCls(m.clsRaw)}${rateCls(m.clsRaw)} ` +
            `INP=${fmtMs(m.inpMs)}${rateInp(m.inpMs)}\n`
        );

        if (!isFirstRun && prev) {
          // Flag meaningful regressions: perf score drop > 5, or LCP/CLS/INP threshold crossed
          if (m.perfScore < prev.perfScore - 5) {
            regressions.push({ url: short, strategy, kind: "perf-score", detail: `${prev.perfScore} → ${m.perfScore}` });
          }
          if (rateLcp(m.lcpMs) !== rateLcp(prev.lcpMs) && rateLcp(m.lcpMs) === "🔴") {
            regressions.push({ url: short, strategy, kind: "lcp-poor", detail: `${fmtMs(prev.lcpMs)} → ${fmtMs(m.lcpMs)}` });
          }
          if (rateCls(m.clsRaw) !== rateCls(prev.clsRaw) && rateCls(m.clsRaw) === "🔴") {
            regressions.push({ url: short, strategy, kind: "cls-poor", detail: `${fmtCls(prev.clsRaw)} → ${fmtCls(m.clsRaw)}` });
          }
          if (rateInp(m.inpMs) !== rateInp(prev.inpMs) && rateInp(m.inpMs) === "🔴") {
            regressions.push({ url: short, strategy, kind: "inp-poor", detail: `${fmtMs(prev.inpMs)} → ${fmtMs(m.inpMs)}` });
          }

          // Wins: perf score up > 5
          if (m.perfScore > prev.perfScore + 5) {
            wins.push({ url: short, strategy, kind: "perf-score", detail: `${prev.perfScore} → ${m.perfScore}` });
          }
        }
      } catch (e) {
        process.stdout.write(`ERR ${short} [${strategy}]: ${e.message}\n`);
        current.results[url][strategy] = { error: e.message };
      }
      // Throttle: 1 call per second is safe without an API key
      if (!API_KEY) await sleep(1100);
      else await sleep(150);
    }
  }

  // Write markdown report
  let md = `# PageSpeed Insights Report — ${today}\n\n`;
  md += `Strategies: ${strategies.join(", ")}. ${isFirstRun ? "Baseline run." : `Comparison vs ${previous.generatedAt.slice(0, 10)}.`}\n\n`;

  if (!isFirstRun) {
    if (regressions.length) {
      md += `## 🔴 Regressions (${regressions.length})\n\n`;
      for (const r of regressions) md += `- \`${r.url}\` (${r.strategy}) — **${r.kind}** — ${r.detail}\n`;
      md += `\n`;
    }
    if (wins.length) {
      md += `## 🟢 Wins (${wins.length})\n\n`;
      for (const w of wins) md += `- \`${w.url}\` (${w.strategy}) — **${w.kind}** — ${w.detail}\n`;
      md += `\n`;
    }
    if (!regressions.length && !wins.length) {
      md += `_No meaningful changes since last run (all deltas within noise thresholds)._\n\n`;
    }
  }

  for (const strategy of strategies) {
    md += `## ${strategy === "mobile" ? "📱 Mobile" : "🖥️ Desktop"} — ${today}\n\n`;
    md += `| Page | Perf | LCP | CLS | INP | TBT | TTFB |\n`;
    md += `|---|--:|--:|--:|--:|--:|--:|\n`;
    for (const url of MONITORED_URLS) {
      const m = current.results[url]?.[strategy];
      if (!m || m.error) {
        md += `| ${url.replace("https://ycd.studio", "") || "/"} | — | — | — | — | — | — |\n`;
        continue;
      }
      const short = url.replace("https://ycd.studio", "") || "/";
      const prev = previous?.results?.[url]?.[strategy];
      md += `| ${short} `;
      md += `| ${ratePerf(m.perfScore)} ${m.perfScore}${diff(prev, m, "perfScore", "score")} `;
      md += `| ${rateLcp(m.lcpMs)} ${fmtMs(m.lcpMs)}${diff(prev, m, "lcpMs", "ms")} `;
      md += `| ${rateCls(m.clsRaw)} ${fmtCls(m.clsRaw)}${diff(prev, m, "clsRaw", "")} `;
      md += `| ${rateInp(m.inpMs)} ${fmtMs(m.inpMs)}${diff(prev, m, "inpMs", "ms")} `;
      md += `| ${fmtMs(m.tbtMs)} `;
      md += `| ${fmtMs(m.ttfbMs)} |\n`;
    }
    md += `\n`;
  }

  md += `## Thresholds used\n\n`;
  md += `- **LCP**: 🟢 ≤2.5s · 🟡 ≤4s · 🔴 >4s\n`;
  md += `- **CLS**: 🟢 ≤0.1 · 🟡 ≤0.25 · 🔴 >0.25\n`;
  md += `- **INP**: 🟢 ≤200ms · 🟡 ≤500ms · 🔴 >500ms\n`;
  md += `- **Perf score**: 🟢 ≥90 · 🟡 ≥50 · 🔴 <50\n\n`;
  md += `---\n_Generated by \`scripts/seo/pagespeed.mjs\` on ${new Date().toISOString()}._\n`;

  await fs.mkdir("seo-reports", { recursive: true });
  await fs.writeFile(REPORT_FILE, md, "utf8");
  await fs.writeFile(STATE_FILE, JSON.stringify(current, null, 2), "utf8");

  console.log(`\nReport: ${REPORT_FILE}`);
  if (!isFirstRun) {
    console.log(`Regressions: ${regressions.length} · Wins: ${wins.length}`);
  }

  // Non-zero exit if we saw real regressions — lets this run in CI or a cron
  // and fail loudly when performance degrades.
  if (regressions.length > 0) process.exit(1);
}

main().catch((e) => {
  console.error("PageSpeed run failed:", e.message);
  process.exit(2);
});
