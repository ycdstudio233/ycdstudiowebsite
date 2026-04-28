/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      /* ══════════════════════════════════════════════════════
         WordPress → New Site  (301 permanent redirects)
         Preserves SEO equity from indexed WordPress URLs
         ══════════════════════════════════════════════════════ */

      // ── Blog posts ──
      {
        source: "/title-24-commercial-tenant-improvement-bay-area",
        destination: "/blog/title-24-commercial-tenant-improvement",
        permanent: true,
      },
      {
        source: "/title-24-commercial-tenant-improvement-bay-area/",
        destination: "/blog/title-24-commercial-tenant-improvement",
        permanent: true,
      },
      {
        source: "/commercial-tenant-improvement-lease-questions",
        destination: "/blog/commercial-tenant-improvement-lease-questions",
        permanent: true,
      },
      {
        source: "/commercial-tenant-improvement-lease-questions/",
        destination: "/blog/commercial-tenant-improvement-lease-questions",
        permanent: true,
      },
      {
        source: "/tenant-improvement-bay-area-architect",
        destination: "/blog/tenant-improvement-bay-area-architect",
        permanent: true,
      },
      {
        source: "/tenant-improvement-bay-area-architect/",
        destination: "/blog/tenant-improvement-bay-area-architect",
        permanent: true,
      },
      {
        source: "/adus-backyard-living",
        destination: "/blog/adus-backyard-living",
        permanent: true,
      },
      {
        source: "/adus-backyard-living/",
        destination: "/blog/adus-backyard-living",
        permanent: true,
      },
      {
        source: "/jadus-california",
        destination: "/blog/jadus-california",
        permanent: true,
      },
      {
        source: "/jadus-california/",
        destination: "/blog/jadus-california",
        permanent: true,
      },
      {
        source: "/bathroom-remodel-guide-california",
        destination: "/blog/bathroom-remodel-guide-california",
        permanent: true,
      },
      {
        source: "/bathroom-remodel-guide-california/",
        destination: "/blog/bathroom-remodel-guide-california",
        permanent: true,
      },

      // ── Pages ──
      {
        source: "/about",
        destination: "/studio",
        permanent: true,
      },
      {
        source: "/about/",
        destination: "/studio",
        permanent: true,
      },
      {
        source: "/works",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/works/",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/tenant-improvement-architect-bay-area",
        destination: "/tenant-improvement",
        permanent: true,
      },
      {
        source: "/tenant-improvement-architect-bay-area/",
        destination: "/tenant-improvement",
        permanent: true,
      },
      {
        source: "/burak-celik",
        destination: "/team/burak-celik",
        permanent: true,
      },
      {
        source: "/burak-celik/",
        destination: "/team/burak-celik",
        permanent: true,
      },

      // ── Portfolio projects ──
      {
        source: "/portfolio/sonoma-residence",
        destination: "/work/sonoma-residence",
        permanent: true,
      },
      {
        source: "/portfolio/sonoma-residence/",
        destination: "/work/sonoma-residence",
        permanent: true,
      },
      {
        source: "/portfolio/piddeg-restaurant-tenant-improvement-danville-california",
        destination: "/work/piddeg-restaurant",
        permanent: true,
      },
      {
        source: "/portfolio/piddeg-restaurant-tenant-improvement-danville-california/",
        destination: "/work/piddeg-restaurant",
        permanent: true,
      },
      {
        source: "/portfolio/hawaii-fluid-art-tenant-improvement-danville",
        destination: "/work/hfa-tenant-improvement",
        permanent: true,
      },
      {
        source: "/portfolio/hawaii-fluid-art-tenant-improvement-danville/",
        destination: "/work/hfa-tenant-improvement",
        permanent: true,
      },
      {
        source: "/portfolio/the-cottage",
        destination: "/work/the-cottage",
        permanent: true,
      },
      {
        source: "/portfolio/the-cottage/",
        destination: "/work/the-cottage",
        permanent: true,
      },
      {
        source: "/portfolio/market-tower-commercial-renovation-san-francisco",
        destination: "/work/market-tower",
        permanent: true,
      },
      {
        source: "/portfolio/market-tower-commercial-renovation-san-francisco/",
        destination: "/work/market-tower",
        permanent: true,
      },
      {
        source: "/portfolio/pier-41-restaurant-tenant-improvement-san-francisco",
        destination: "/work/pier-41-restaurant",
        permanent: true,
      },
      {
        source: "/portfolio/pier-41-restaurant-tenant-improvement-san-francisco/",
        destination: "/work/pier-41-restaurant",
        permanent: true,
      },
      {
        source: "/portfolio/bay-area-neighborhood-commons",
        destination: "/work/neighborhood-commons",
        permanent: true,
      },
      {
        source: "/portfolio/bay-area-neighborhood-commons/",
        destination: "/work/neighborhood-commons",
        permanent: true,
      },
      {
        source: "/portfolio/coastline-residence",
        destination: "/work/coastline-residence",
        permanent: true,
      },
      {
        source: "/portfolio/coastline-residence/",
        destination: "/work/coastline-residence",
        permanent: true,
      },
      {
        source: "/portfolio/hampton-by-hilton-ordu",
        destination: "/work/hampton-by-hilton-ordu",
        permanent: true,
      },
      {
        source: "/portfolio/hampton-by-hilton-ordu/",
        destination: "/work/hampton-by-hilton-ordu",
        permanent: true,
      },
      {
        source: "/portfolio/north-loft-residences",
        destination: "/work/north-loft-residences",
        permanent: true,
      },
      {
        source: "/portfolio/north-loft-residences/",
        destination: "/work/north-loft-residences",
        permanent: true,
      },
      {
        source: "/portfolio/alemany-farmers-market",
        destination: "/work/alemany-farmers-market",
        permanent: true,
      },
      {
        source: "/portfolio/alemany-farmers-market/",
        destination: "/work/alemany-farmers-market",
        permanent: true,
      },
      {
        source: "/portfolio/aurora-residences",
        destination: "/work/aurora-residences",
        permanent: true,
      },
      {
        source: "/portfolio/aurora-residences/",
        destination: "/work/aurora-residences",
        permanent: true,
      },
      {
        source: "/portfolio/cappadocia-science-museum",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/cappadocia-science-museum/",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/fatsa-ilica",
        destination: "/work/fatsa-ilica",
        permanent: true,
      },
      {
        source: "/portfolio/fatsa-ilica/",
        destination: "/work/fatsa-ilica",
        permanent: true,
      },
      {
        source: "/portfolio/lady_bird_lake",
        destination: "/work/lady-bird-boardwalk",
        permanent: true,
      },
      {
        source: "/portfolio/lady_bird_lake/",
        destination: "/work/lady-bird-boardwalk",
        permanent: true,
      },
      {
        source: "/portfolio/coastal-house",
        destination: "/work/coastal-house",
        permanent: true,
      },
      {
        source: "/portfolio/coastal-house/",
        destination: "/work/coastal-house",
        permanent: true,
      },
      {
        source: "/portfolio/spacearc-pod",
        destination: "/work/spacearc-pod",
        permanent: true,
      },
      {
        source: "/portfolio/spacearc-pod/",
        destination: "/work/spacearc-pod",
        permanent: true,
      },
      {
        source: "/portfolio/pixel-heights",
        destination: "/work/pixel-heights",
        permanent: true,
      },
      {
        source: "/portfolio/pixel-heights/",
        destination: "/work/pixel-heights",
        permanent: true,
      },
      {
        source: "/portfolio/moraga-adu",
        destination: "/work/moraga-adu",
        permanent: true,
      },
      {
        source: "/portfolio/moraga-adu/",
        destination: "/work/moraga-adu",
        permanent: true,
      },
      {
        source: "/portfolio/cyprus-residence",
        destination: "/work/cyprus-residence",
        permanent: true,
      },
      {
        source: "/portfolio/cyprus-residence/",
        destination: "/work/cyprus-residence",
        permanent: true,
      },
      {
        source: "/portfolio/tabya-restaurant",
        destination: "/work/tabya-restaurant",
        permanent: true,
      },
      {
        source: "/portfolio/tabya-restaurant/",
        destination: "/work/tabya-restaurant",
        permanent: true,
      },
      {
        source: "/portfolio/bird-residence",
        destination: "/work/bird-residence",
        permanent: true,
      },
      {
        source: "/portfolio/bird-residence/",
        destination: "/work/bird-residence",
        permanent: true,
      },

      // ── Catch-all: /portfolio/ index ──
      {
        source: "/portfolio",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/",
        destination: "/work",
        permanent: true,
      },

      // ── Portfolio tag pages (indexed in Search Console) ──
      {
        source: "/portfolio-tags/residential",
        destination: "/residential",
        permanent: true,
      },
      {
        source: "/portfolio-tags/residential/",
        destination: "/residential",
        permanent: true,
      },
      {
        source: "/portfolio-tags/multi-family",
        destination: "/multi-family",
        permanent: true,
      },
      {
        source: "/portfolio-tags/multi-family/",
        destination: "/multi-family",
        permanent: true,
      },
      {
        source: "/portfolio-tags/restaurant",
        destination: "/hospitality",
        permanent: true,
      },
      {
        source: "/portfolio-tags/restaurant/",
        destination: "/hospitality",
        permanent: true,
      },
      {
        source: "/portfolio-tags/hospitality",
        destination: "/hospitality",
        permanent: true,
      },
      {
        source: "/portfolio-tags/hospitality/",
        destination: "/hospitality",
        permanent: true,
      },
      {
        source: "/portfolio-tags/tenant-improvement",
        destination: "/tenant-improvement",
        permanent: true,
      },
      {
        source: "/portfolio-tags/tenant-improvement/",
        destination: "/tenant-improvement",
        permanent: true,
      },
      {
        source: "/portfolio/expanding-digital-boundaries",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/expanding-digital-boundaries/",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/the-endless-pattern-of-innovation",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/the-endless-pattern-of-innovation/",
        destination: "/work",
        permanent: true,
      },

      // ── Paginated archives (both trailing-slash variants) ──
      {
        source: "/works/page/:num",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/works/page/:num/",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/page/:num",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/page/:num/",
        destination: "/work",
        permanent: true,
      },

      // ── WordPress taxonomy pages (catch-all, with trailing-slash variants) ──
      // path-to-regexp's :slug* matches zero+ segments WITHOUT trailing slash,
      // so URLs like /tag/branding/feed/ don't match /tag/:slug*. Adding explicit
      // trailing-slash variants picks them up.
      {
        source: "/category/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/:slug*/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/author/:slug*",
        destination: "/studio",
        permanent: true,
      },
      {
        source: "/author/:slug*/",
        destination: "/studio",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:slug*/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/portfolio-tags/:slug*",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio-tags/:slug*/",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio-categories/:slug*",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio-categories/:slug*/",
        destination: "/work",
        permanent: true,
      },

      // ── Old WordPress RSS feed paths (any */feed/ URL) ──
      // Catches /feed/, /tag/x/feed/, /portfolio-tags/x/feed/, etc.
      {
        source: "/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/feed/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/:path*/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/:path*/feed/",
        destination: "/blog",
        permanent: true,
      },

      // ── Old WordPress search query (?s={term}) ──
      // Old WordPress search form — Google indexed the literal template URL.
      // Any homepage hit with ?s=... query → redirect to /blog (closest equivalent).
      {
        source: "/",
        has: [{ type: "query", key: "s" }],
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
