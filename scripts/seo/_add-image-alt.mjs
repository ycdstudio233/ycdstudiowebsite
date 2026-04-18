// Add SEO-optimized imageAlt field to each project in lib/site-data.js.
// Uses the slug as a stable key to map the right alt text to each project.
// Idempotent: skips any project that already has imageAlt.
import fs from "node:fs/promises";
import path from "node:path";

// Curated alt text for each project. Target ~10-18 words, keyword-rich,
// descriptive of what's actually in the image + architecture category +
// location when meaningful for local SEO.
const altBySlug = {
  "market-tower":
    "Market Tower adaptive reuse commercial architecture in San Francisco — YCD Studio facade retrofit with parametric shading",
  "neighborhood-commons":
    "Neighborhood Commons multi-family housing in the Bay Area — community-oriented architecture by YCD Studio",
  "lady-bird-boardwalk":
    "Lady Bird Lake Boardwalk commercial architecture in Austin Texas — civic waterfront design by YCD Studio",
  "the-cottage":
    "The Cottage Bay Area residential architecture — modern custom home with warm natural materials by YCD Studio",
  "pixel-heights":
    "Pixel Heights multi-family mixed-use architecture in San Francisco — stacked volumes and street activation by YCD Studio",
  "sonoma-residence":
    "Sonoma Residence — contemporary custom home in Sonoma County with indoor-outdoor living, designed by YCD Studio",
  "spacearc-pod":
    "SpaceArc Pod — compact futuristic residential prototype by YCD Studio",
  "bird-residence":
    "Bird Residence Bay Area custom home — hillside residential architecture with panoramic views by YCD Studio",
  "hfa-tenant-improvement":
    "Hawaii Fluid Art retail tenant improvement in the Bay Area — storefront and workshop design by YCD Studio",
  "piddeg-restaurant":
    "PiddeG Restaurant Bay Area tenant improvement — branded interior with stone oven and warm dining atmosphere",
  "pier-41-restaurant":
    "Pier 41 Cousins Maine Lobster restaurant at Fisherman's Wharf San Francisco — waterfront TI by YCD Studio",
  "alemany-farmers-market":
    "Alemany Farmers Market San Francisco — angular timber canopies and public market architecture by YCD Studio",
  "moraga-adu":
    "Moraga ADU East Bay — detached accessory dwelling unit with clean modern lines, designed by YCD Studio",
  "coastal-house":
    "Coastal House Mediterranean villa — custom residential architecture with private pool and sea views by YCD Studio",
  "coastline-residence":
    "Coastline Residence Mediterranean villa renovation — custom millwork and pool terrace by YCD Studio",
  "cyprus-residence":
    "Cyprus Residence modern luxury villa — sculptural residential architecture with indoor-outdoor flow by YCD Studio",
  "tabya-restaurant":
    "Tabyabasi Balik fish restaurant — glass-enclosed waterfront hospitality architecture with retractable roof",
  "hampton-by-hilton-ordu":
    "Hampton by Hilton Ordu — full-service hotel architecture on the Black Sea coast, designed by YCD Studio",
  "fatsa-ilica":
    "Fatsa Ilica Hotel — mountain valley hotel architecture with marble reception, designed by YCD Studio",
  "aurora-residences":
    "Aurora Residences Ankara — modern mid-rise multi-family architecture with curved balconies by YCD Studio",
  "north-loft-residences":
    "North Loft Residences — mixed-use residential complex with ground-floor retail, designed by YCD Studio",
  "st-marys-cathedral":
    "Cathedral of St. Mary — sanctuary transformation with integrated finishes and sacred art by YCD Studio",
  "holy-cross":
    "Holy Cross Church — Romanesque-inspired sacred architecture with timber trusses and celestial apse by YCD Studio",
  "st-marys-grand-forks":
    "St. Mary's Church Grand Forks — Gothic Revival sacred interior with vaulted ceilings and stained glass by YCD Studio",
};

const file = path.join(process.cwd(), "lib/site-data.js");
let src = await fs.readFile(file, "utf8");

let added = 0;
let skipped = 0;
let missing = [];

for (const [slug, alt] of Object.entries(altBySlug)) {
  // Locate the project block by its slug and check if it already has imageAlt
  const slugRegex = new RegExp(
    `(slug:\\s*"${slug}",[\\s\\S]*?)(\\n\\s*\\},)`,
    ""
  );
  const match = src.match(slugRegex);
  if (!match) {
    missing.push(slug);
    continue;
  }
  if (match[1].includes("imageAlt:")) {
    skipped++;
    continue;
  }
  // Insert imageAlt right after the `image:` line
  const inserted = match[1].replace(
    /(image:\s*"[^"]+",)/,
    `$1\n    imageAlt:\n      ${JSON.stringify(alt)},`
  );
  src = src.replace(match[1], inserted);
  added++;
}

await fs.writeFile(file, src, "utf8");
console.log(`Added imageAlt to ${added} projects`);
console.log(`Skipped (already had imageAlt): ${skipped}`);
if (missing.length)
  console.log(`MISSING slugs (not found in file): ${missing.join(", ")}`);
