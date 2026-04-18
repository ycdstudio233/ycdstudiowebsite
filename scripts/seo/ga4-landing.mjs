// GA4 landing page performance — which pages first see users land on them,
// how long they stay, and engagement rate. Complements GSC (which only shows
// search traffic) with a picture of all-source landing behavior.
// Usage: node scripts/seo/ga4-landing.mjs [days=30]

import { ga4Client, GA4_PROPERTY_ID, daysAgo } from "./_auth.mjs";

const days = Number(process.argv[2] || 30);

async function main() {
  const ga = ga4Client();
  const res = await ga.properties.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate: daysAgo(days), endDate: "yesterday" }],
      dimensions: [{ name: "landingPage" }],
      metrics: [
        { name: "sessions" },
        { name: "activeUsers" },
        { name: "engagementRate" },
        { name: "averageSessionDuration" },
        { name: "bounceRate" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 50,
    },
  });

  const rows = res.data.rows || [];
  console.log(`\nLanding page performance (last ${days} days)\n`);
  console.log(
    "Rank Page".padEnd(48) + "Sess  Users  Engage  AvgDur  Bounce"
  );
  console.log("-".repeat(98));

  rows.forEach((r, i) => {
    const page = (r.dimensionValues[0].value || "").slice(0, 42).padEnd(44);
    const sessions = Number(r.metricValues[0].value);
    const users = Number(r.metricValues[1].value);
    const engage = (Number(r.metricValues[2].value) * 100).toFixed(0) + "%";
    const avgDur = Number(r.metricValues[3].value).toFixed(0) + "s";
    const bounce = (Number(r.metricValues[4].value) * 100).toFixed(0) + "%";
    console.log(
      `${String(i + 1).padStart(3)}. ${page} ${String(sessions).padStart(4)}  ${String(users).padStart(5)}   ${engage.padStart(5)}   ${avgDur.padStart(5)}    ${bounce.padStart(4)}`
    );
  });

  const totalSessions = rows.reduce((a, r) => a + Number(r.metricValues[0].value), 0);
  const totalUsers = rows.reduce((a, r) => a + Number(r.metricValues[1].value), 0);
  console.log("-".repeat(98));
  console.log(`Totals: ${totalSessions} sessions, ${totalUsers} users`);
}

main().catch((e) => {
  console.error("GA4 query failed:", e.message);
  if (e.errors) console.error(e.errors);
  process.exit(1);
});
