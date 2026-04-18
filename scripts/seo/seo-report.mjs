// Combined weekly SEO report. Pulls from GSC + GA4 and writes a dated
// markdown file to seo-reports/. Safe to commit to git so progress is
// tracked over time (seo-reports/ IS in .gitignore by default — remove
// that line if you want history in the repo).
//
// Usage: node scripts/seo/seo-report.mjs
//
// Produces: seo-reports/YYYY-MM-DD.md

import fs from "node:fs/promises";
import path from "node:path";
import { gscClient, ga4Client, GSC_SITE_URL, GA4_PROPERTY_ID, daysAgo } from "./_auth.mjs";

const today = new Date().toISOString().slice(0, 10);
const OUT = path.join("seo-reports", `${today}.md`);

async function gscQueries(gsc, days) {
  const res = await gsc.searchanalytics.query({
    siteUrl: GSC_SITE_URL,
    requestBody: {
      startDate: daysAgo(days),
      endDate: daysAgo(1),
      dimensions: ["query"],
      rowLimit: 20,
      dataState: "all",
    },
  });
  return res.data.rows || [];
}

async function gscPages(gsc, days) {
  const res = await gsc.searchanalytics.query({
    siteUrl: GSC_SITE_URL,
    requestBody: {
      startDate: daysAgo(days),
      endDate: daysAgo(1),
      dimensions: ["page"],
      rowLimit: 20,
      dataState: "all",
    },
  });
  return res.data.rows || [];
}

async function gscOpportunities(gsc, days) {
  const res = await gsc.searchanalytics.query({
    siteUrl: GSC_SITE_URL,
    requestBody: {
      startDate: daysAgo(days),
      endDate: daysAgo(1),
      dimensions: ["query", "page"],
      rowLimit: 500,
      dataState: "all",
    },
  });
  return (res.data.rows || [])
    .filter((r) => r.position >= 5 && r.position <= 20 && r.impressions >= 3)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15);
}

async function ga4Summary(ga, days) {
  const res = await ga.properties.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    requestBody: {
      dateRanges: [
        { startDate: daysAgo(days), endDate: "yesterday", name: "current" },
        { startDate: daysAgo(days * 2), endDate: daysAgo(days + 1), name: "previous" },
      ],
      metrics: [
        { name: "activeUsers" },
        { name: "sessions" },
        { name: "engagementRate" },
      ],
    },
  });
  return res.data.rows || [];
}

async function ga4Channels(ga, days) {
  const res = await ga.properties.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate: daysAgo(days), endDate: "yesterday" }],
      dimensions: [{ name: "sessionDefaultChannelGroup" }],
      metrics: [{ name: "sessions" }, { name: "activeUsers" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 10,
    },
  });
  return res.data.rows || [];
}

async function ga4Landing(ga, days) {
  const res = await ga.properties.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate: daysAgo(days), endDate: "yesterday" }],
      dimensions: [{ name: "landingPage" }],
      metrics: [
        { name: "sessions" },
        { name: "engagementRate" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 15,
    },
  });
  return res.data.rows || [];
}

function fmtGSC(rows) {
  const totals = rows.reduce(
    (a, r) => ({
      c: a.c + (r.clicks ?? 0),
      i: a.i + (r.impressions ?? 0),
    }),
    { c: 0, i: 0 }
  );
  return { rows, totals };
}

async function main() {
  const gsc = gscClient();
  const ga = ga4Client();

  const DAYS = 28; // weekly reports compare 4-week windows

  console.log(`Generating SEO report for ${today} (${DAYS}-day window)...`);

  const [queries, pages, opps, ga4S, ga4C, ga4L] = await Promise.all([
    gscQueries(gsc, DAYS),
    gscPages(gsc, DAYS),
    gscOpportunities(gsc, DAYS),
    ga4Summary(ga, DAYS),
    ga4Channels(ga, DAYS),
    ga4Landing(ga, DAYS),
  ]);

  const q = fmtGSC(queries);
  const p = fmtGSC(pages);

  let md = `# YCD Studio SEO Report — ${today}\n\n`;
  md += `_Window: last ${DAYS} days vs previous ${DAYS} days._\n\n`;

  // GSC summary
  md += `## Search Console — totals\n\n`;
  md += `- **Clicks (top 20 queries):** ${q.totals.c}\n`;
  md += `- **Impressions (top 20 queries):** ${q.totals.i}\n`;
  md += `- **CTR (top 20):** ${q.totals.i ? ((q.totals.c / q.totals.i) * 100).toFixed(2) + "%" : "—"}\n\n`;

  // GA4 summary with WoW change
  if (ga4S.length >= 2) {
    const cur = ga4S.find((r) => r.dimensionValues?.[0]?.value === "current") || ga4S[0];
    const prev = ga4S.find((r) => r.dimensionValues?.[0]?.value === "previous") || ga4S[1];
    const users = Number(cur.metricValues[0].value);
    const pUsers = Number(prev.metricValues[0].value);
    const sessions = Number(cur.metricValues[1].value);
    const pSessions = Number(prev.metricValues[1].value);
    const engage = (Number(cur.metricValues[2].value) * 100).toFixed(1);
    const delta = (a, b) => (b ? (((a - b) / b) * 100).toFixed(1) + "%" : "—");

    md += `## GA4 — totals\n\n`;
    md += `- **Active users:** ${users} (vs ${pUsers}, ${delta(users, pUsers)})\n`;
    md += `- **Sessions:** ${sessions} (vs ${pSessions}, ${delta(sessions, pSessions)})\n`;
    md += `- **Engagement rate:** ${engage}%\n\n`;
  }

  md += `## Traffic channels\n\n`;
  md += `| Channel | Sessions | Users |\n|---|--:|--:|\n`;
  for (const r of ga4C) {
    md += `| ${r.dimensionValues[0].value} | ${r.metricValues[0].value} | ${r.metricValues[1].value} |\n`;
  }
  md += `\n`;

  md += `## Top queries (GSC)\n\n`;
  md += `| Query | Clicks | Impr | CTR | AvgPos |\n|---|--:|--:|--:|--:|\n`;
  for (const r of q.rows) {
    md += `| ${r.keys[0]} | ${r.clicks} | ${r.impressions} | ${((r.ctr || 0) * 100).toFixed(1)}% | ${(r.position || 0).toFixed(1)} |\n`;
  }
  md += `\n`;

  md += `## Top pages (GSC)\n\n`;
  md += `| Page | Clicks | Impr | CTR | AvgPos |\n|---|--:|--:|--:|--:|\n`;
  for (const r of p.rows) {
    md += `| ${(r.keys[0] || "").replace("https://ycd.studio", "")} | ${r.clicks} | ${r.impressions} | ${((r.ctr || 0) * 100).toFixed(1)}% | ${(r.position || 0).toFixed(1)} |\n`;
  }
  md += `\n`;

  md += `## Opportunity keywords (pos 5-20, ≥3 impressions)\n\n`;
  md += `_Optimize these pages — each is one rank bump away from page 1._\n\n`;
  md += `| Query | Page | Impr | Pos |\n|---|---|--:|--:|\n`;
  for (const r of opps) {
    md += `| ${r.keys[0]} | ${(r.keys[1] || "").replace("https://ycd.studio", "")} | ${r.impressions} | ${(r.position || 0).toFixed(1)} |\n`;
  }
  md += `\n`;

  md += `## Top landing pages (GA4)\n\n`;
  md += `| Page | Sessions | Engagement |\n|---|--:|--:|\n`;
  for (const r of ga4L) {
    md += `| ${r.dimensionValues[0].value} | ${r.metricValues[0].value} | ${(Number(r.metricValues[1].value) * 100).toFixed(0)}% |\n`;
  }
  md += `\n`;

  md += `---\n_Generated by \`scripts/seo/seo-report.mjs\` on ${new Date().toISOString()}._\n`;

  await fs.mkdir("seo-reports", { recursive: true });
  await fs.writeFile(OUT, md, "utf8");
  console.log(`Report written to ${OUT}`);
  console.log(`Open it with: code "${OUT}"  (or any markdown viewer)`);
}

main().catch((e) => {
  console.error("Report failed:", e.message);
  if (e.errors) console.error(e.errors);
  process.exit(1);
});
