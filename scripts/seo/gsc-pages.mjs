// Per-page performance — which URLs are actually driving clicks and impressions.
// Usage: node scripts/seo/gsc-pages.mjs [days=90]

import { gscClient, GSC_SITE_URL, daysAgo } from "./_auth.mjs";

const days = Number(process.argv[2] || 90);

async function main() {
  const gsc = gscClient();
  const res = await gsc.searchanalytics.query({
    siteUrl: GSC_SITE_URL,
    requestBody: {
      startDate: daysAgo(days),
      endDate: daysAgo(1),
      dimensions: ["page"],
      rowLimit: 100,
      dataState: "all",
    },
  });

  const rows = res.data.rows || [];
  console.log(`\nTop pages for ${GSC_SITE_URL} (last ${days} days)\n`);
  console.log("Rank  Page".padEnd(52) + "Clicks Impr  CTR    AvgPos");
  console.log("-".repeat(88));

  rows.forEach((r, i) => {
    const p = (r.keys?.[0] || "").replace("https://ycd.studio", "").slice(0, 44) || "/";
    const clicks = String(r.clicks ?? 0).padStart(6);
    const impr = String(r.impressions ?? 0).padStart(5);
    const ctr = ((r.ctr ?? 0) * 100).toFixed(1).padStart(5) + "%";
    const pos = (r.position ?? 0).toFixed(1).padStart(6);
    console.log(
      `${String(i + 1).padStart(4)}. ${p.padEnd(45)} ${clicks} ${impr} ${ctr} ${pos}`
    );
  });

  const totals = rows.reduce(
    (a, r) => ({
      clicks: a.clicks + (r.clicks ?? 0),
      impr: a.impr + (r.impressions ?? 0),
    }),
    { clicks: 0, impr: 0 }
  );
  console.log("-".repeat(88));
  console.log(
    `Total (${rows.length} pages): ${totals.clicks} clicks, ${totals.impr} impressions`
  );
}

main().catch((e) => {
  console.error("GSC query failed:", e.message);
  process.exit(1);
});
