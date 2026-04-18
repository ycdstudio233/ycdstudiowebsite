// One-shot helper: inject an FAQ section (with service-specific FAQs + FAQPage
// JSON-LD via <FaqAccordion>) into the 5 service pages that don't have one.
// Inserts immediately before the <RelatedReading> that Wave 3 added. Idempotent.
import fs from "node:fs/promises";
import path from "node:path";

const targets = [
  {
    file: "app/residential/page.js",
    depth: 2,
    faqsImport: "residentialFaqs",
    title: "Common questions about residential architecture.",
    description:
      "Everything you need to know before starting a custom home, ADU, or remodel in the Bay Area.",
  },
  {
    file: "app/hospitality/page.js",
    depth: 2,
    faqsImport: "hospitalityFaqs",
    title: "Common questions about restaurant & hotel design.",
    description:
      "Health department, ABC licensing, kitchen exhaust, and Bay Area hospitality permitting — answered.",
  },
  {
    file: "app/commercial/page.js",
    depth: 2,
    faqsImport: "commercialFaqs",
    title: "Common questions about commercial architecture.",
    description:
      "Title 24, ADA, seismic, and Bay Area commercial permit timelines — answered.",
  },
  {
    file: "app/multi-family/page.js",
    depth: 2,
    faqsImport: "multiFamilyFaqs",
    title: "Common questions about multi-family development.",
    description:
      "SB 9, density bonus, CEQA, and Bay Area entitlement timelines — answered for developers and property owners.",
  },
  {
    file: "app/sacred/page.js",
    depth: 2,
    faqsImport: "sacredFaqs",
    title: "Common questions about sacred architecture.",
    description:
      "Acoustics, historic preservation, liturgical design, and how we work with congregations of any faith.",
  },
];

const results = [];

for (const t of targets) {
  const full = path.join(process.cwd(), t.file);
  let src = await fs.readFile(full, "utf8");

  if (src.includes("FaqAccordion")) {
    results.push(`SKIP already has FAQ: ${t.file}`);
    continue;
  }

  const up = "../".repeat(t.depth);
  const faqImport = `import { FaqAccordion } from "${up}components/faq-accordion";`;
  const faqsImport = `import { ${t.faqsImport} } from "${up}lib/service-faqs";`;

  // Add imports after last existing import
  const importMatches = [...src.matchAll(/^import\s[^\n]+;\s*$/gm)];
  const lastImport = importMatches[importMatches.length - 1];
  const insertAt = lastImport.index + lastImport[0].length;
  src =
    src.slice(0, insertAt) +
    "\n" +
    faqImport +
    "\n" +
    faqsImport +
    src.slice(insertAt);

  // Find the RelatedReading marker and insert FAQ section before it
  const marker = "{/* Related Reading";
  const idx = src.indexOf(marker);
  if (idx === -1) {
    results.push(`FAIL no RelatedReading marker: ${t.file}`);
    continue;
  }
  const lineStart = src.lastIndexOf("\n", idx) + 1;
  const indent = src.slice(lineStart, idx);

  const faqSection =
    `${indent}{/* ── FAQ (emits FAQPage JSON-LD for rich results) ── */}\n` +
    `${indent}<section className="section section--dark">\n` +
    `${indent}  <div className="container">\n` +
    `${indent}    <ScrollReveal>\n` +
    `${indent}      <SectionHeading\n` +
    `${indent}        eyebrow="FAQ"\n` +
    `${indent}        title=${JSON.stringify(t.title)}\n` +
    `${indent}        description=${JSON.stringify(t.description)}\n` +
    `${indent}      />\n` +
    `${indent}    </ScrollReveal>\n` +
    `${indent}    <ScrollReveal delay={0.1}>\n` +
    `${indent}      <div className="ti-faq-wrap">\n` +
    `${indent}        <FaqAccordion faqs={${t.faqsImport}} />\n` +
    `${indent}      </div>\n` +
    `${indent}    </ScrollReveal>\n` +
    `${indent}  </div>\n` +
    `${indent}</section>\n\n${indent}`;

  src =
    src.slice(0, lineStart) +
    faqSection +
    src.slice(lineStart + indent.length);

  await fs.writeFile(full, src, "utf8");
  results.push(`OK ${t.file}`);
}

for (const r of results) console.log(r);
