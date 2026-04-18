// Identify "opportunity keywords": queries ranking 5-20 with meaningful
// impressions. These are the fastest ranking wins — one push each and they
// land on page 1.
// Usage: node scripts/seo/gsc-opportunities.mjs [days=90]

import { gscClient, GSC_SITE_URL, daysAgo } from "./_auth.mjs";

const days = Number(process.argv[2] || 90);

async function main() {
  const gsc = gscClient();
  // Pull up to 500 query/page pairs so we see the long tail
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

  const rows = res.data.rows || [];
  // Filter: position between 5 and 20, at least 3 impressions
  const opps = rows
    .filter((r) => r.position >= 5 && r.position <= 20 && r.impressions >= 3)
    .sort((a, b) => b.impressions - a.impressions);

  console.log(`\nOpportunity keywords for ${GSC_SITE_URL} (last ${days} days)`);
  console.log(`${opps.length} queries ranking pos 5-20 with >=3 impressions\n`);

  if (!opps.length) {
    console.log("(No opportunities yet — check back once more pages are indexed.)");
    return;
  }

  console.log(
    "Query".padEnd(42) + "Page".padEnd(38) + "Impr  Pos   CTR"
  );
  console.log("-".repeat(100));

  for (const r of opps.slice(0, 40)) {
    const q = (r.keys?.[0] || "").slice(0, 40).padEnd(42);
    const p = (r.keys?.[1] || "").replace("https://ycd.studio", "").slice(0, 36).padEnd(38);
    const i = String(r.impressions ?? 0).padStart(4);
    const pos = (r.position ?? 0).toFixed(1).padStart(5);
    const ctr = ((r.ctr ?? 0) * 100).toFixed(1).padStart(4) + "%";
    console.log(`${q}${p}${i}  ${pos}  ${ctr}`);
  }

  console.log("\n=== ACTIONABLE ===");
  console.log("For each query above:");
  console.log("1. Pull up the ranking page");
  console.log("2. Make sure the query phrase appears in H1, first paragraph, and at least one H2");
  console.log("3. Check that there's at least one internal link TO the page using the query phrase as anchor text");
  console.log("4. Re-request indexing in GSC after edits");
}

main().catch((e) => {
  console.error("GSC query failed:", e.message);
  process.exit(1);
});
