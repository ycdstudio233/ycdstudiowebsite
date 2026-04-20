// One-shot: add `sizes` + `fetchPriority` to hero Image components that
// live inside <div className="ti-sub-hero__visual">. These are the big
// above-fold heroes on service/location pages that were all missing
// responsive hints — the direct cause of 4-7s mobile LCP.
// Idempotent: skips files that already have `sizes=`.
import fs from "node:fs/promises";
import path from "node:path";

const files = [
  "app/tenant-improvement/restaurant/page.js",
  "app/tenant-improvement/retail/page.js",
  "app/tenant-improvement/adaptive-reuse/page.js",
  "app/residential/page.js",
  "app/hospitality/page.js",
  "app/commercial/page.js",
  "app/multi-family/page.js",
  "app/sacred/page.js",
  "app/san-francisco/page.js",
  "app/oakland/page.js",
  "app/bay-area/page.js",
];

const HERO_SIZES = '"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"';

const results = [];

for (const rel of files) {
  const full = path.join(process.cwd(), rel);
  let src;
  try {
    src = await fs.readFile(full, "utf8");
  } catch {
    results.push(`MISS ${rel} (file not found)`);
    continue;
  }

  // Find `<Image` blocks inside ti-sub-hero__visual. We only want to touch
  // hero images — skip card/below-fold images which should stay lazy.
  const heroBlockRegex =
    /(<div className="ti-sub-hero__visual">\s*<Image[^>]*?)priority([^>]*?\/>)/s;
  const match = src.match(heroBlockRegex);
  if (!match) {
    // Some pages use priority={true} or priority (boolean) in different
    // positions — try a looser match.
    const altRegex = /(<div className="ti-sub-hero__visual">\s*<Image[^>]*?)(\/>)/s;
    const alt = src.match(altRegex);
    if (!alt) {
      results.push(`SKIP ${rel} (no ti-sub-hero__visual Image found)`);
      continue;
    }
    if (alt[1].includes("sizes=")) {
      results.push(`SKIP ${rel} (already has sizes)`);
      continue;
    }
    const replacement = alt[1] + `sizes=${HERO_SIZES}\n          fetchPriority="high"\n          ` + alt[2];
    src = src.replace(altRegex, replacement);
    await fs.writeFile(full, src, "utf8");
    results.push(`OK  ${rel} (alt pattern — added sizes + fetchPriority)`);
    continue;
  }

  if (match[1].includes("sizes=")) {
    results.push(`SKIP ${rel} (already has sizes)`);
    continue;
  }

  // Rebuild the Image tag: add sizes before priority, fetchPriority after.
  const replacement = `${match[1]}sizes=${HERO_SIZES}\n                  priority\n                  fetchPriority="high"${match[2]}`;
  src = src.replace(heroBlockRegex, replacement);
  await fs.writeFile(full, src, "utf8");
  results.push(`OK  ${rel}`);
}

for (const r of results) console.log(r);
