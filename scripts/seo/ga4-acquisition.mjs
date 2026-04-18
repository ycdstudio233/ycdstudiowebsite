// GA4 traffic source breakdown — where users are actually coming from.
// Helps identify whether SEO work is moving the needle vs other channels.
// Usage: node scripts/seo/ga4-acquisition.mjs [days=30]

import { ga4Client, GA4_PROPERTY_ID, daysAgo } from "./_auth.mjs";

const days = Number(process.argv[2] || 30);

async function main() {
  const ga = ga4Client();
  const res = await ga.properties.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate: daysAgo(days), endDate: "yesterday" }],
      dimensions: [
        { name: "sessionDefaultChannelGroup" },
        { name: "sessionSource" },
      ],
      metrics: [
        { name: "sessions" },
        { name: "activeUsers" },
        { name: "engagementRate" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 30,
    },
  });

  const rows = res.data.rows || [];
  console.log(`\nTraffic sources (last ${days} days)\n`);
  console.log(
    "Rank  Channel".padEnd(28) + "Source".padEnd(30) + "Sess  Users  Engage"
  );
  console.log("-".repeat(84));

  rows.forEach((r, i) => {
    const channel = (r.dimensionValues[0].value || "").slice(0, 22).padEnd(24);
    const source = (r.dimensionValues[1].value || "").slice(0, 26).padEnd(28);
    const sessions = Number(r.metricValues[0].value);
    const users = Number(r.metricValues[1].value);
    const engage = (Number(r.metricValues[2].value) * 100).toFixed(0) + "%";
    console.log(
      `${String(i + 1).padStart(4)}. ${channel} ${source} ${String(sessions).padStart(4)}  ${String(users).padStart(5)}   ${engage.padStart(5)}`
    );
  });

  // Channel-level rollup
  const byChannel = {};
  for (const r of rows) {
    const ch = r.dimensionValues[0].value || "(none)";
    byChannel[ch] = (byChannel[ch] || 0) + Number(r.metricValues[0].value);
  }
  console.log("\n=== CHANNEL ROLLUP ===");
  Object.entries(byChannel)
    .sort((a, b) => b[1] - a[1])
    .forEach(([ch, sess]) => console.log(`  ${ch.padEnd(28)} ${sess} sessions`));
}

main().catch((e) => {
  console.error("GA4 query failed:", e.message);
  process.exit(1);
});
