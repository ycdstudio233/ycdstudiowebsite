// Diagnose which URLs from the sitemap are not indexed, and why.
// Uses GSC URL Inspection API — rate-limited to ~2000/day, so we throttle.
// Usage: node scripts/seo/gsc-not-indexed.mjs

import { gscClient, GSC_SITE_URL } from "./_auth.mjs";

// Fetch list of URLs to inspect — pulled straight from the live sitemap.
async function getSitemapUrls() {
  const sitemapUrl = new URL("/sitemap.xml", GSC_SITE_URL).toString();
  const res = await fetch(sitemapUrl);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return urls;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const gsc = gscClient();
  const urls = await getSitemapUrls();
  console.log(`\nInspecting ${urls.length} URLs from ${GSC_SITE_URL}sitemap.xml\n`);

  const results = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      const res = await gsc.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl: GSC_SITE_URL },
      });
      const idx = res.data.inspectionResult?.indexStatusResult || {};
      results.push({
        url,
        verdict: idx.verdict || "UNKNOWN",
        coverage: idx.coverageState || "",
        crawledAs: idx.crawledAs || "",
        lastCrawl: idx.lastCrawlTime || "",
        robotsTxt: idx.robotsTxtState || "",
        indexingState: idx.indexingState || "",
        pageFetch: idx.pageFetchState || "",
        referring: (idx.referringUrls || []).length,
      });
      process.stdout.write(
        `[${i + 1}/${urls.length}] ${idx.verdict === "PASS" ? "✓" : "✗"} ${url.replace(GSC_SITE_URL, "/")}\n`
      );
    } catch (e) {
      results.push({ url, error: e.message });
      process.stdout.write(`[${i + 1}/${urls.length}] ERR ${url}: ${e.message}\n`);
    }
    // Throttle: ~600ms between calls = ~100/min, well under GSC's 2000/day cap
    await sleep(600);
  }

  // Group by coverage state
  const groups = {};
  for (const r of results) {
    const key = r.error ? `ERROR: ${r.error}` : r.coverage || r.verdict;
    (groups[key] ||= []).push(r);
  }

  console.log("\n\n=== SUMMARY BY COVERAGE STATE ===\n");
  const sorted = Object.entries(groups).sort((a, b) => b[1].length - a[1].length);
  for (const [state, items] of sorted) {
    console.log(`\n[${items.length}] ${state}`);
    items.forEach((r) => {
      const path = r.url.replace(GSC_SITE_URL, "/");
      const ref = r.referring ? ` (${r.referring} internal links)` : " (0 internal links!)";
      console.log(`    ${path}${ref}`);
    });
  }

  // Save JSON for further processing
  const fs = await import("node:fs/promises");
  const date = new Date().toISOString().slice(0, 10);
  const outPath = `seo-reports/not-indexed-${date}.json`;
  await fs.mkdir("seo-reports", { recursive: true });
  await fs.writeFile(outPath, JSON.stringify({ date, results, groups: Object.fromEntries(sorted.map(([k, v]) => [k, v.length])) }, null, 2));
  console.log(`\nFull results saved to ${outPath}`);

  // Actionable next-step hints
  console.log("\n=== NEXT STEPS ===");
  const notIndexed = results.filter((r) => r.verdict && r.verdict !== "PASS");
  const crawledNotIndexed = notIndexed.filter((r) => /Crawled.*not indexed/i.test(r.coverage));
  const discoveredNotIndexed = notIndexed.filter((r) => /Discovered.*not indexed/i.test(r.coverage));
  const duplicate = notIndexed.filter((r) => /Duplicate/i.test(r.coverage));
  const zeroLinks = notIndexed.filter((r) => r.referring === 0);

  if (crawledNotIndexed.length)
    console.log(`• ${crawledNotIndexed.length} "Crawled - not indexed" → Google thinks content is low value. Strengthen uniqueness, add internal links, improve E-E-A-T signals.`);
  if (discoveredNotIndexed.length)
    console.log(`• ${discoveredNotIndexed.length} "Discovered - not indexed" → Google hasn't crawled yet. Request indexing manually or improve internal linking.`);
  if (duplicate.length)
    console.log(`• ${duplicate.length} "Duplicate" → Canonical mismatch. Check canonical tags and content differentiation.`);
  if (zeroLinks.length)
    console.log(`• ${zeroLinks.length} pages have ZERO internal links pointing to them. Highest priority — add navigation/contextual links.`);
}

main().catch((e) => {
  console.error("Inspection failed:", e.message);
  process.exit(1);
});
