"use client";

import { usePathname } from "next/navigation";

// Human-readable label overrides for routes where prettifying the slug is wrong.
const LABEL_OVERRIDES = {
  "": "Home",
  work: "Work",
  studio: "Studio",
  blog: "Blog",
  contact: "Contact",
  "tenant-improvement": "Tenant Improvement",
  "adaptive-reuse": "Adaptive Reuse",
  residential: "Residential",
  hospitality: "Hospitality",
  "multi-family": "Multi-Family",
  commercial: "Commercial",
  sacred: "Sacred",
  "san-francisco": "San Francisco",
  oakland: "Oakland",
  "bay-area": "Bay Area",
  team: "Team",
  retail: "Retail",
  restaurant: "Restaurant",
};

function prettify(segment) {
  if (LABEL_OVERRIDES[segment]) return LABEL_OVERRIDES[segment];
  return segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Emits a BreadcrumbList JSON-LD for the current route.
// Derived from the URL path, so no per-page wiring is needed.
export function BreadcrumbSchema() {
  const pathname = usePathname() || "/";
  if (pathname === "/") return null; // Home needs no breadcrumb

  const segments = pathname.split("/").filter(Boolean);
  const base = "https://ycd.studio";

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: base + "/",
    },
    ...segments.map((seg, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: prettify(seg),
      item: base + "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
