import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { projectDetails } from "../../lib/project-details";
import { allProjects } from "../../lib/site-data";

import { RelatedReading } from "../../components/related-links";
export const metadata = {
  title: "Bay Area Architect — Full-Service Design Firm",
  description:
    "YCD Studio is a Bay Area architecture firm specializing in tenant improvements, restaurant design, residential architecture, and commercial projects across San Francisco, Oakland, and the greater Bay Area.",
  keywords:
    "Bay Area architect, Bay Area architecture firm, San Francisco architect, Oakland architect, tenant improvement Bay Area, restaurant design Bay Area, residential architect Bay Area, ADU architect Bay Area, commercial architect Bay Area",
  openGraph: {
    title: "Bay Area Architect — Full-Service Design Firm | YCD Studio",
    description:
      "YCD Studio is a Bay Area architecture firm specializing in tenant improvements, restaurant design, residential architecture, and commercial projects across San Francisco, Oakland, and the greater Bay Area.",
    url: "https://ycd.studio/bay-area",
    siteName: "YCD Studio",
    type: "website",
    images: [
      {
        url: "https://ycd.studio/projects/the-cottage/Image-1.webp",
        width: 1200,
        height: 630,
        alt: "Bay Area architecture by YCD Studio",
      },
    ],
  },
};

/* ── All Bay Area project slugs ── */
const bayAreaSlugs = [
  "market-tower",
  "neighborhood-commons",
  "the-cottage",
  "pixel-heights",
  "sonoma-residence",
  "bird-residence",
  "alemany-farmers-market",
  "hfa-tenant-improvement",
  "moraga-adu",
  "piddeg-restaurant",
  "pier-41-restaurant",
];

const bayAreaProjects = allProjects.filter((p) => bayAreaSlugs.includes(p.slug));

const featuredWork = [
  {
    slug: "the-cottage",
    title: "The Cottage",
    location: "Bay Area, CA",
    scope: "New construction — single-family home",
    image: "/projects/the-cottage/Image-1.webp",
    description:
      "A modern retreat designed to feel effortless — timber, glass, and stone create a home that is grounded, warm, and connected to its forested lakeside setting. Every major design decision responds to the site.",
    highlights: [
      "Full architectural design and documentation",
      "Title 24 and Cal Green compliance",
      "Seamless indoor-outdoor living",
    ],
  },
  {
    slug: "pier-41-restaurant",
    title: "Pier 41 — Cousins Maine Lobster",
    location: "San Francisco, CA",
    scope: "Restaurant tenant improvement — 1,600 SF",
    image: "/projects/pier-41-restaurant/Image-1.webp",
    description:
      "A waterfront restaurant tenant improvement at Fisherman's Wharf with industrial interiors, branded murals, and a counter-service layout. Complex permit coordination with Port of SF, fire department, and health department.",
    highlights: [
      "Multi-agency permit coordination",
      "High-turnover counter-service layout",
      "Flagship waterfront location",
    ],
  },
  {
    slug: "moraga-adu",
    title: "Moraga ADU",
    location: "Moraga, CA",
    scope: "Detached ADU — 640 SF",
    image: "/projects/moraga-adu/Image-1.webp",
    description:
      "A compact modern accessory dwelling unit with clean lines, clerestory windows, and an open-plan layout. Designed under California's streamlined ADU provisions with zoning analysis and setback optimization.",
    highlights: [
      "Detached ADU under AB 2221 / SB 897",
      "Zoning analysis and setback optimization",
      "Utility separation and sub-meter coordination",
    ],
  },
  {
    slug: "market-tower",
    title: "Market Tower",
    location: "San Francisco, CA",
    scope: "Adaptive reuse — 48,000 SF",
    image: "/projects/market-tower/Image-1.webp",
    description:
      "A facade-led retrofit of a downtown San Francisco high-rise. The project retains the existing concrete frame while introducing a new curtain wall with parametric shading, vertical gardens, and solar elements.",
    highlights: [
      "High-performance facade retrofit",
      "Regenerative design strategy",
      "Ground-floor retail activation",
    ],
  },
];

const services = [
  {
    title: "Tenant Improvement",
    description:
      "Restaurant build-outs, office renovations, and retail conversions across the Bay Area. We handle design, permitting, and construction administration from pre-lease walkthrough to opening day.",
    link: "/tenant-improvement",
  },
  {
    title: "Restaurant & Hospitality",
    description:
      "Full-service restaurant design from kitchen to front-of-house. Kitchen layout, exhaust hood coordination, health department requirements, and guest flow for concepts ranging from fast-casual to fine dining.",
    link: "/hospitality",
  },
  {
    title: "Residential Architecture",
    description:
      "Custom homes, ADUs, JADUs, additions, and whole-home remodels. We navigate Bay Area zoning, Title 24 energy modeling, and local permit processes across San Francisco, Oakland, and surrounding cities.",
    link: "/residential",
  },
  {
    title: "Commercial Architecture",
    description:
      "Office build-outs, adaptive reuse, mixed-use development, and public market design. We bring design clarity and construction-ready documentation to every commercial project.",
    link: "/commercial",
  },
  {
    title: "Multi-Family Housing",
    description:
      "Community-oriented housing designed around daylight, social flow, and urban context. From mid-rise apartments to mixed-use developments with ground-floor retail.",
    link: "/multi-family",
  },
];

/* ── Regional breakdown. /bay-area is the umbrella page; /san-francisco and
   /oakland are child pages that deep-dive into those regions. Peninsula,
   South Bay, and North Bay are covered here for now. ─────────────────── */
const regions = [
  {
    name: "San Francisco",
    scope: "Urban core: 7×7 miles, 850k residents",
    description:
      "Dense urban tenant improvements, restaurant TI, waterfront hospitality at the Embarcadero, and custom residential work across Noe Valley, the Richmond, and the Sunset. We navigate DBI's multi-step plan check, Port of San Francisco review for pier projects, Section 311 neighbor notification, and Article 10/11 historic district review.",
    specialty: "Restaurant TI, adaptive reuse, dense urban infill",
    link: "/san-francisco",
    linkLabel: "Our San Francisco practice →",
  },
  {
    name: "Oakland & East Bay",
    scope: "Oakland, Berkeley, Moraga, Walnut Creek, Contra Costa County",
    description:
      "ADU design is our most active work in the East Bay — California's state-level ADU laws combine with Oakland's fee waivers and Contra Costa County's fast review cycles to make the region dramatically more productive than San Francisco for accessory housing. We also design custom homes in the hills and mixed-use projects along transit corridors.",
    specialty: "ADUs, JADUs, custom homes, adaptive reuse",
    link: "/oakland",
    linkLabel: "Our East Bay practice →",
  },
  {
    name: "Peninsula & Silicon Valley",
    scope: "Palo Alto, Menlo Park, Mountain View, Redwood City, San Mateo",
    description:
      "Custom residential work, office tenant improvements for tech companies, and commercial retrofits in the Peninsula's varied jurisdictions. Palo Alto's Individual Review process for single-family homes adds time but forces a design conversation that typically improves outcomes. San Jose's Express Plan Check clears compliant commercial TI in 3–4 weeks — among the fastest in California.",
    specialty: "Tech office TI, custom homes, Peninsula residential",
  },
  {
    name: "South Bay",
    scope: "San Jose, Santa Clara, Cupertino, Sunnyvale",
    description:
      "Commercial TI for the tech economy, multi-family infill housing along El Camino Real, and custom residential work in the foothills. San Jose has adopted some of the most ambitious housing element goals in the state, making the South Bay one of the most productive markets for SB 9 and density-bonus projects.",
    specialty: "Multi-family, commercial TI, SB 9 entitlements",
  },
  {
    name: "North Bay",
    scope: "Sonoma, Napa, Marin counties",
    description:
      "Wine country custom homes, agricultural tourism hospitality (tasting rooms, hotel concepts in Napa and Sonoma), and coastal residential work. Sonoma and Napa counties have their own distinct review processes, with additional agricultural-overlay and viewshed-protection requirements. Marin enforces some of the strictest hillside design standards in the state.",
    specialty: "Wine country residential, agricultural hospitality",
  },
];

export default function BayAreaPage() {
  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="container">
          <div className="ti-sub-hero__layout">
            <div className="ti-sub-hero__content">
              <ScrollReveal>
                <p className="ti-sub-hero__eyebrow">Bay Area</p>
                <h1 className="ti-sub-hero__title">
                  Architecture & Design<br />
                  across the Bay Area.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  YCD Studio is a Bay Area architecture firm with over a decade
                  of experience designing restaurants, commercial interiors,
                  homes, and public spaces across San Francisco, Oakland, the
                  East Bay, and the greater Bay Area. We bring full-service
                  design and permit expertise to every project — from a 640
                  square-foot ADU to a 48,000 square-foot adaptive reuse.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link href="/contact" className="btn btn--primary btn--large">
                    Start a Bay Area project
                  </Link>
                  <Link href="#ba-projects" className="btn btn--secondary btn--large">
                    See our work
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <Image
                  src="/projects/the-cottage/Image-1.webp"
                  alt="The Cottage — residential architecture in the Bay Area by YCD Studio"
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

      {/* ── Services ── */}
      <section className="section" id="ba-services">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Full-service architecture across the Bay Area."
              description="From tenant improvements to ground-up construction, we bring design clarity and construction-ready documentation to every project type across the region."
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
      <section className="section section--dark" id="ba-projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Bay Area Projects"
              title="Recent work across the region."
              description="A selection of completed and in-progress projects across San Francisco, the East Bay, and beyond."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-projects" staggerDelay={0.12}>
            {featuredWork.map((project) => (
              <div className="ti-sub-project" key={project.slug}>
                <div className="ti-sub-project__visual">
                  <Image
                    src={project.image}
                    alt={project.imageAlt || project.title}
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

      {/* ── All Bay Area Projects Gallery ── */}
      <section className="section" id="all-ba-projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="All Bay Area projects."
              description="Every project we have designed across San Francisco, Oakland, and the greater Bay Area."
            />
          </ScrollReveal>

          <StaggerReveal className="project-grid project-grid--three" staggerDelay={0.08}>
            {bayAreaProjects.map((project) => (
              <Link
                href={`/work/${project.slug}`}
                className="project-card"
                key={project.slug}
              >
                {project.image && (
                  <div className="project-card__visual" aria-hidden="true">
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
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

      {/* ── Regions We Serve ── */}
      <section className="section section--dark" id="ba-regions">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Where We Work"
              title="Across the Bay Area and beyond."
              description="We serve clients throughout the San Francisco Bay Area, with deep experience in each sub-region's permit process, zoning rules, and design review requirements."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-challenges" staggerDelay={0.08}>
            {regions.map((region) => (
              <div className="ti-sub-challenge" key={region.name}>
                <h3 className="ti-sub-challenge__title">
                  {region.link ? (
                    <Link href={region.link} style={{ color: "inherit", textDecoration: "none" }}>
                      {region.name}
                    </Link>
                  ) : (
                    region.name
                  )}
                </h3>
                {region.scope && (
                  <p style={{ fontSize: "0.8125rem", opacity: 0.6, margin: "0 0 8px", letterSpacing: "0.02em" }}>
                    {region.scope}
                  </p>
                )}
                <p className="ti-sub-challenge__desc">{region.description}</p>
                {region.specialty && (
                  <p style={{ fontSize: "0.8125rem", fontWeight: 500, margin: "12px 0 0", opacity: 0.85 }}>
                    Specialty: <span style={{ opacity: 0.75, fontWeight: 400 }}>{region.specialty}</span>
                  </p>
                )}
                {region.link && (
                  <Link href={region.link} className="ti-sub-project__link" style={{ marginTop: "12px", display: "inline-flex" }}>
                    {region.linkLabel || `View ${region.name} projects`}
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* Related Reading — cross-linked blog posts for SEO + reader value */}
      <RelatedReading servicePath="/bay-area" />

      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Planning a project in the Bay Area?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Whether you are opening a restaurant in San Francisco, building an
              ADU in the East Bay, or renovating a home in Sonoma, we will help
              you understand costs, timelines, and what your local jurisdiction
              requires. We respond within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Get in touch
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="mailto:info@ycd.studio?subject=Bay%20Area%20Project%20Inquiry"
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
