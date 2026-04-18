// Curated bidirectional link map between service pages and blog posts.
// Used by <RelatedLinks> to render "Related Reading" on service pages
// and "Related Services" on blog posts.

import { blogPosts } from "./blog-data";

// Service page -> list of blog post slugs
// These render under "Related Reading" at the bottom of service pages.
export const serviceToPosts = {
  "/commercial": [
    "title-24-commercial-tenant-improvement",
    "commercial-buildout-timeline-bay-area",
    "commercial-tenant-improvement-lease-questions",
  ],
  "/hospitality": [
    "restaurant-design-bay-area-guide",
    "commercial-buildout-timeline-bay-area",
  ],
  "/residential": [
    "adu-vs-jadu-california-guide",
    "adus-backyard-living",
    "bathroom-remodel-guide-california",
    "jadus-california",
  ],
  "/multi-family": ["adus-backyard-living", "jadus-california", "adu-vs-jadu-california-guide"],
  "/tenant-improvement": [
    "tenant-improvement-bay-area-architect",
    "title-24-commercial-tenant-improvement",
    "commercial-tenant-improvement-lease-questions",
    "commercial-buildout-timeline-bay-area",
  ],
  "/tenant-improvement/restaurant": [
    "restaurant-design-bay-area-guide",
    "title-24-commercial-tenant-improvement",
    "commercial-buildout-timeline-bay-area",
  ],
  "/tenant-improvement/retail": [
    "title-24-commercial-tenant-improvement",
    "commercial-tenant-improvement-lease-questions",
    "commercial-buildout-timeline-bay-area",
  ],
  "/tenant-improvement/adaptive-reuse": [
    "commercial-buildout-timeline-bay-area",
    "tenant-improvement-bay-area-architect",
  ],
  "/san-francisco": [
    "title-24-commercial-tenant-improvement",
    "restaurant-design-bay-area-guide",
    "commercial-buildout-timeline-bay-area",
  ],
  "/oakland": [
    "adu-vs-jadu-california-guide",
    "adus-backyard-living",
    "jadus-california",
    "bathroom-remodel-guide-california",
  ],
  "/bay-area": [
    "tenant-improvement-bay-area-architect",
    "restaurant-design-bay-area-guide",
    "adu-vs-jadu-california-guide",
    "adus-backyard-living",
  ],
};

// Blog post slug -> list of service page paths + human labels.
// These render under "Related Services" at the bottom of blog posts.
export const postToServices = {
  "title-24-commercial-tenant-improvement": [
    { href: "/tenant-improvement", label: "Bay Area Tenant Improvement" },
    { href: "/tenant-improvement/restaurant", label: "Restaurant TI Architect" },
    { href: "/tenant-improvement/retail", label: "Retail TI Architect" },
    { href: "/commercial", label: "Commercial Architect" },
  ],
  "commercial-tenant-improvement-lease-questions": [
    { href: "/tenant-improvement", label: "Bay Area Tenant Improvement" },
    { href: "/tenant-improvement/retail", label: "Retail TI Architect" },
    { href: "/commercial", label: "Commercial Architect" },
  ],
  "tenant-improvement-bay-area-architect": [
    { href: "/tenant-improvement", label: "Bay Area Tenant Improvement" },
    { href: "/bay-area", label: "Bay Area Design Firm" },
    { href: "/tenant-improvement/restaurant", label: "Restaurant TI Architect" },
    { href: "/tenant-improvement/retail", label: "Retail TI Architect" },
  ],
  "adus-backyard-living": [
    { href: "/residential", label: "Residential Architect" },
    { href: "/oakland", label: "Oakland & East Bay Architect" },
    { href: "/multi-family", label: "Multi-Family Architect" },
  ],
  "bathroom-remodel-guide-california": [
    { href: "/residential", label: "Residential Architect" },
    { href: "/bay-area", label: "Bay Area Design Firm" },
  ],
  "jadus-california": [
    { href: "/residential", label: "Residential Architect" },
    { href: "/oakland", label: "Oakland & East Bay Architect" },
    { href: "/bay-area", label: "Bay Area Design Firm" },
  ],
  "commercial-buildout-timeline-bay-area": [
    { href: "/tenant-improvement", label: "Bay Area Tenant Improvement" },
    { href: "/commercial", label: "Commercial Architect" },
    { href: "/hospitality", label: "Restaurant & Hotel Architect" },
  ],
  "restaurant-design-bay-area-guide": [
    { href: "/hospitality", label: "Restaurant & Hotel Architect" },
    { href: "/tenant-improvement/restaurant", label: "Restaurant TI Architect" },
    { href: "/tenant-improvement", label: "Bay Area Tenant Improvement" },
  ],
  "adu-vs-jadu-california-guide": [
    { href: "/residential", label: "Residential Architect" },
    { href: "/oakland", label: "Oakland & East Bay Architect" },
    { href: "/bay-area", label: "Bay Area Design Firm" },
    { href: "/multi-family", label: "Multi-Family Architect" },
  ],
};

// Helper: resolve blog post slugs into renderable {href, label, excerpt}
export function relatedPostsFor(servicePath) {
  const slugs = serviceToPosts[servicePath] || [];
  return slugs
    .map((slug) => {
      const post = blogPosts.find((p) => p.slug === slug);
      if (!post) return null;
      return {
        href: `/blog/${post.slug}`,
        label: post.title,
        excerpt: post.excerpt,
      };
    })
    .filter(Boolean);
}

export function relatedServicesFor(postSlug) {
  return postToServices[postSlug] || [];
}
