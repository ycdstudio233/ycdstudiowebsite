import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { projectDetails } from "../../lib/project-details";
import { allProjects } from "../../lib/site-data";

import { RelatedReading } from "../../components/related-links";
export const metadata = {
  title: "San Francisco Architect — Restaurants, TI & Homes",
  description:
    "YCD Studio designs restaurants, commercial spaces, and residences across San Francisco. Tenant improvement, hospitality, and residential architecture from concept through construction.",
  keywords:
    "San Francisco architect, SF tenant improvement, restaurant design San Francisco, commercial architect SF, residential architect San Francisco, Fisherman's Wharf restaurant design, San Francisco permit architect",
  openGraph: {
    title: "San Francisco Architect — Restaurants, TI & Homes | YCD Studio",
    description:
      "YCD Studio designs restaurants, commercial spaces, and residences across San Francisco. Tenant improvement, hospitality, and residential architecture.",
    url: "https://ycd.studio/san-francisco",
    siteName: "YCD Studio",
    type: "website",
    images: [
      {
        url: "https://ycd.studio/projects/market-tower/Image-1.webp",
        width: 1200,
        height: 630,
        alt: "Architecture in San Francisco by YCD Studio",
      },
    ],
  },
};

/* ── SF project slugs ── */
const sfSlugs = [
  "market-tower",
  "pixel-heights",
  "alemany-farmers-market",
  "pier-41-restaurant",
  "hfa-tenant-improvement",
];

const sfProjects = allProjects.filter((p) => sfSlugs.includes(p.slug));

const featuredWork = [
  {
    slug: "market-tower",
    title: "Market Tower",
    location: "San Francisco, CA",
    scope: "Adaptive reuse — 48,000 SF commercial retrofit",
    image: "/projects/market-tower/Image-1.webp",
    description:
      "A facade-led retrofit of a downtown San Francisco high-rise, rethinking performance, daylight, and urban presence while preserving the existing concrete frame.",
    highlights: [
      "High-performance facade with parametric shading",
      "Regenerative design and vertical gardens",
      "Ground-floor retail arcade for pedestrian activation",
    ],
  },
  {
    slug: "pier-41-restaurant",
    title: "Pier 41 — Cousins Maine Lobster",
    location: "San Francisco, CA",
    scope: "Restaurant tenant improvement — 1,600 SF",
    image: "/projects/pier-41-restaurant/Image-1.webp",
    description:
      "A waterfront restaurant tenant improvement at Fisherman's Wharf with industrial interiors, branded murals, and a counter-service layout designed for high turnover.",
    highlights: [
      "Complex permit coordination with Port of SF",
      "Counter-service layout for high-volume operation",
      "Branded interior at a flagship waterfront location",
    ],
  },
  {
    slug: "alemany-farmers-market",
    title: "Alemany Farmers Market",
    location: "San Francisco, CA",
    scope: "Public market design — 18,000 SF",
    image: "/projects/alemany-farmers-market/Image-2.webp",
    description:
      "A redesign of San Francisco's oldest farmers market with dramatic angular timber canopies, modular vendor stalls, and flexible public gathering spaces.",
    highlights: [
      "Sculptural timber-and-steel canopy structures",
      "Modular vendor infrastructure for seasonal programming",
      "Improved pedestrian connections and public plaza",
    ],
  },
];

const services = [
  {
    title: "Tenant Improvement",
    description:
      "Restaurant build-outs, office renovations, and retail conversions. We handle design, permitting through SF DBI, and construction administration — from pre-lease walkthrough to opening day.",
    link: "/tenant-improvement",
  },
  {
    title: "Restaurant & Hospitality Design",
    description:
      "Kitchen layout, exhaust hood coordination, health department requirements, and front-of-house design. We have completed restaurant projects across San Francisco, from Fisherman's Wharf to the Mission.",
    link: "/hospitality",
  },
  {
    title: "Commercial Architecture",
    description:
      "Office build-outs, adaptive reuse, and mixed-use development. We navigate San Francisco's planning and building review processes to keep projects moving from concept through permit.",
    link: "/commercial",
  },
  {
    title: "Residential Architecture",
    description:
      "Custom homes, ADUs, and renovations across San Francisco's diverse neighborhoods. We work with DBI's residential review process, Section 311 notifications, and historic district requirements.",
    link: "/residential",
  },
];

export default function SanFranciscoPage() {
  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="container">
          <div className="ti-sub-hero__layout">
            <div className="ti-sub-hero__content">
              <ScrollReveal>
                <p className="ti-sub-hero__eyebrow">San Francisco</p>
                <h1 className="ti-sub-hero__title">
                  Architecture & Design<br />
                  in San Francisco.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  YCD Studio designs restaurants, commercial interiors, and
                  residences across San Francisco. We handle design, permitting,
                  and construction administration through the city's review
                  process — bringing the same attention to a tenant improvement
                  at Fisherman's Wharf as we do to a ground-up mixed-use
                  project downtown.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link href="/contact" className="btn btn--primary btn--large">
                    Start a project in SF
                  </Link>
                  <Link href="#sf-projects" className="btn btn--secondary btn--large">
                    See our SF work
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <Image
                  src="/projects/market-tower/Image-1.webp"
                  alt="Market Tower — adaptive reuse architecture in San Francisco by YCD Studio"
                  width={720}
                  height={540}
                  priority
                  style={{ width: "100%", height: "100%", borderRadius: "16px", objectFit: "cover" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Services in SF ── */}
      <section className="section" id="sf-services">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Do in San Francisco"
              title="Full-service architecture across the city."
              description="From tenant improvements in SoMa to residential projects in the Richmond, we bring design clarity and permit expertise to every project type."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.08}>
            {services.map((service) => (
              <Link
                href={service.link}
                className="ti-sub-scope-card"
                key={service.title}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3 className="ti-sub-scope-card__title">{service.title}</h3>
                <p className="ti-sub-scope-card__desc">{service.description}</p>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="section section--dark" id="sf-projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="San Francisco Projects"
              title="Recent work across the city."
              description="A selection of completed and in-progress projects in San Francisco — from waterfront restaurants to downtown high-rise retrofits."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-projects" staggerDelay={0.12}>
            {featuredWork.map((project) => (
              <div className="ti-sub-project" key={project.slug}>
                <div className="ti-sub-project__visual">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={480}
                    style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                  />
                </div>
                <div className="ti-sub-project__body">
                  <div className="ti-sub-project__meta">
                    <span>{project.location}</span>
                    <span>{project.scope}</span>
                  </div>
                  <h3 className="ti-sub-project__title">{project.title}</h3>
                  <p className="ti-sub-project__desc">{project.description}</p>
                  <ul className="ti-sub-project__highlights">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <Link href={`/work/${project.slug}`} className="ti-sub-project__link">
                    View project details
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── All SF Projects Gallery ── */}
      <section className="section" id="all-sf-projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="All San Francisco projects."
              description="Every project we have designed or are currently designing in San Francisco."
            />
          </ScrollReveal>

          <StaggerReveal className="project-grid project-grid--three" staggerDelay={0.08}>
            {sfProjects.map((project) => (
              <Link
                href={`/work/${project.slug}`}
                className="project-card"
                key={project.slug}
              >
                {project.image && (
                  <div className="project-card__visual" aria-hidden="true">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-card__img"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="project-card__body">
                  <div className="project-card__category">{project.category}</div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.summary}</p>
                  <div className="project-card__meta">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── SF Permitting Context ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Permitting"
              title="Navigating San Francisco's permit process."
              description="San Francisco's Department of Building Inspection runs a multi-step review that varies by project type, zoning district, and scope. We handle the full process."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-challenges" staggerDelay={0.08}>
            <div className="ti-sub-challenge">
              <h3 className="ti-sub-challenge__title">Commercial & Restaurant TI</h3>
              <p className="ti-sub-challenge__desc">
                Over-the-counter permits are available for minor interior work,
                but full tenant improvements — especially those involving food
                service, hood systems, or change of use — require plan check
                review. Restaurant projects in San Francisco typically take
                8 to 16 weeks through DBI, with additional coordination
                required from the Health Department and Fire Marshal.
              </p>
            </div>
            <div className="ti-sub-challenge">
              <h3 className="ti-sub-challenge__title">Residential Permits</h3>
              <p className="ti-sub-challenge__desc">
                Standard residential permits average 8 to 12 weeks through DBI.
                Projects in RH-1 and RH-2 zones that trigger Section 311
                neighborhood notification add 30 or more days. ADUs benefit
                from a dedicated review track but still typically take 6 to 8
                weeks. Historic districts under Article 10 or Article 11
                require a separate Planning Department review.
              </p>
            </div>
            <div className="ti-sub-challenge">
              <h3 className="ti-sub-challenge__title">Port of San Francisco</h3>
              <p className="ti-sub-challenge__desc">
                Waterfront projects along the Embarcadero and at pier locations
                require coordination with the Port of San Francisco in addition
                to DBI. We have direct experience navigating this dual-review
                process, including our completed restaurant project at Pier 41.
              </p>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* Related Reading — cross-linked blog posts for SEO + reader value */}
      <RelatedReading servicePath="/san-francisco" />

      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Planning a project in San Francisco?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Whether you are opening a restaurant, renovating a commercial
              space, or designing a home, we will help you understand costs,
              timelines, and what San Francisco's review process requires.
              We respond within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Get in touch
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="mailto:info@ycd.studio?subject=San%20Francisco%20Project%20Inquiry"
              >
                Email us directly
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
