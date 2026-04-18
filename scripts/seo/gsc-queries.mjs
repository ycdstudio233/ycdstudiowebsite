// Top search queries driving clicks/impressions to ycd.studio.
// Usage: node scripts/seo/gsc-queries.mjs [days=90]

import { gscClient, GSC_SITE_URL, daysAgo } from "./_auth.mjs";

const days = Number(process.argv[2] || 90);

async function main() {
  const gsc = gscClient();
  const res = await gsc.searchanalytics.query({
    siteUrl: GSC_SITE_URL,
    requestBody: {
      startDate: daysAgo(days),
      endDate: daysAgo(1),
      dimensions: ["query"],
      rowLimit: 50,
      dataState: "all",
    },
  });

  const rows = res.data.rows || [];
  console.log(`\nTop queries for ${GSC_SITE_URL} (last ${days} days)`);
  console.log(`Pulled ${rows.length} rows.\n`);
  console.log(
    "Rank | Query".padEnd(60) + "Clicks  Impr   CTR    AvgPos"
  );
  console.log("-".repeat(92));

  rows.forEach((r, i) => {
    const q = (r.keys?.[0] || "").slice(0, 50).padEnd(52);
    const clicks = String(r.clicks ?? 0).padStart(6);
    const impr = String(r.impressions ?? 0).padStart(6);
    const ctr = ((r.ctr ?? 0) * 100).toFixed(1).padStart(5) + "%";
    const pos = (r.position ?? 0).toFixed(1).padStart(6);
    console.log(
      `${String(i + 1).padStart(3)}. ${q} ${clicks} ${impr} ${ctr} ${pos}`
    );
  });

  const totals = rows.reduce(
    (a, r) => {
      a.clicks += r.clicks ?? 0;
      a.impr += r.impressions ?? 0;
      return a;
    },
    { clicks: 0, impr: 0 }
  );
  console.log("-".repeat(92));
  console.log(
    `Totals (top ${rows.length}): ${totals.clicks} clicks, ${totals.impr} impressions`
  );
}

main().catch((e) => {
  console.error("GSC query failed:", e.message);
  if (e.response?.data) console.error(e.response.data);
  process.exit(1);
});
