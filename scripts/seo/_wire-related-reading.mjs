// One-shot helper: inject <RelatedReading servicePath="..." /> before the
// closing CTA on each service page, and add the import. Idempotent.
import fs from "node:fs/promises";
import path from "node:path";

const targets = [
  { file: "app/commercial/page.js", path: "/commercial", depth: 2 },
  { file: "app/hospitality/page.js", path: "/hospitality", depth: 2 },
  { file: "app/residential/page.js", path: "/residential", depth: 2 },
  { file: "app/multi-family/page.js", path: "/multi-family", depth: 2 },
  { file: "app/sacred/page.js", path: "/sacred", depth: 2 },
  { file: "app/tenant-improvement/page.js", path: "/tenant-improvement", depth: 2 },
  { file: "app/tenant-improvement/restaurant/page.js", path: "/tenant-improvement/restaurant", depth: 3 },
  { file: "app/tenant-improvement/retail/page.js", path: "/tenant-improvement/retail", depth: 3 },
  { file: "app/tenant-improvement/adaptive-reuse/page.js", path: "/tenant-improvement/adaptive-reuse", depth: 3 },
  { file: "app/san-francisco/page.js", path: "/san-francisco", depth: 2 },
  { file: "app/oakland/page.js", path: "/oakland", depth: 2 },
  { file: "app/bay-area/page.js", path: "/bay-area", depth: 2 },
];

// Patterns for the closing section opener (different pages use different class names)
const closingMarkers = [
  '<section className="closing">',
  '<section className="ti-sub-closing">',
  '<section className="cta">',
];

const results = [];

for (const t of targets) {
  const full = path.join(process.cwd(), t.file);
  let src = await fs.readFile(full, "utf8");

  // Skip if already wired
  if (src.includes("RelatedReading")) {
    results.push(`SKIP already wired: ${t.file}`);
    continue;
  }

  const importPrefix = "../".repeat(t.depth);
  const importLine = `import { RelatedReading } from "${importPrefix}components/related-links";`;

  // Find last existing import line and insert our import after it
  const importMatches = [...src.matchAll(/^import\s[^\n]+;\s*$/gm)];
  if (!importMatches.length) {
    results.push(`SKIP no imports found: ${t.file}`);
    continue;
  }
  const lastImport = importMatches[importMatches.length - 1];
  const insertAt = lastImport.index + lastImport[0].length;
  src = src.slice(0, insertAt) + "\n" + importLine + src.slice(insertAt);

  // Find the closing section opener; insert RelatedReading before it
  let markerIdx = -1;
  let marker = null;
  for (const m of closingMarkers) {
    const idx = src.indexOf(m);
    if (idx !== -1 && (markerIdx === -1 || idx < markerIdx)) {
      markerIdx = idx;
      marker = m;
    }
  }
  if (markerIdx === -1) {
    results.push(`FAIL no closing marker: ${t.file}`);
    continue;
  }

  // Back up to the start of the line so indentation stays clean
  let lineStart = src.lastIndexOf("\n", markerIdx) + 1;
  const indent = src.slice(lineStart, markerIdx);
  const related = `${indent}{/* Related Reading — cross-linked blog posts for SEO + reader value */}\n${indent}<RelatedReading servicePath="${t.path}" />\n\n${indent}`;
  src = src.slice(0, lineStart) + related + src.slice(lineStart + indent.length);

  await fs.writeFile(full, src, "utf8");
  results.push(`OK ${t.file} (marker: ${marker})`);
}

for (const r of results) console.log(r);
