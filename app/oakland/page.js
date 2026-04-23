import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { projectDetails } from "../../lib/project-details";
import { allProjects } from "../../lib/site-data";

import { RelatedReading } from "../../components/related-links";
export const metadata = {
  title: "Oakland & East Bay Architect — ADUs, TI, Homes",
  description:
    "YCD Studio is an architecture firm serving Oakland, Moraga, Danville, and the East Bay. Residential design, ADUs, tenant improvements, and commercial architecture.",
  keywords:
    "Oakland architect, East Bay architecture firm, Moraga ADU architect, residential architect Oakland, tenant improvement Oakland, East Bay commercial architect, ADU architect Contra Costa County",
  openGraph: {
    title: "Oakland & East Bay Architect — ADUs, TI, Homes | YCD Studio",
    description:
      "YCD Studio is an architecture firm serving Oakland, Moraga, Danville, and the East Bay. Residential design, ADUs, tenant improvements, and commercial architecture.",
    url: "https://ycd.studio/oakland",
    siteName: "YCD Studio",
    type: "website",
    images: [
      {
        url: "https://ycd.studio/projects/moraga-adu/Image-1.webp",
        width: 1200,
        height: 630,
        alt: "East Bay architecture by YCD Studio",
      },
    ],
  },
};

/* ── East Bay project slugs ── */
const eastBaySlugs = [
  "moraga-adu",
  "bird-residence",
  "hfa-tenant-improvement",
  "piddeg-restaurant",
];

const eastBayProjects = allProjects.filter((p) => eastBaySlugs.includes(p.slug));

const featuredWork = [
  {
    slug: "moraga-adu",
    title: "Moraga ADU",
    location: "Moraga, CA",
    scope: "Detached ADU — 640 SF",
    image: "/projects/moraga-adu/Image-1.webp",
    description:
      "A compact modern accessory dwelling unit with clean lines, clerestory windows, and an open-plan layout. Designed under California's streamlined ADU provisions with zoning analysis and setback optimization for a Contra Costa County residential property.",
    highlights: [
      "Detached ADU under AB 2221 / SB 897",
      "Zoning analysis and setback optimization",
      "Open-plan living with clerestory light",
    ],
  },
  {
    slug: "bird-residence",
    title: "Bird Residence",
    location: "Bay Area, CA",
    scope: "New residential design — 4,200 SF",
    image: "/projects/bird-residence/Image-2.webp",
    description:
      "A hillside residence blending sleek modular forms with warm natural materials. Two interconnected pavilions step down the terrain, creating a layered relationship between the home, its pool terrace, and the surrounding landscape.",
    highlights: [
      "Hillside site with panoramic valley views",
      "Corten steel, stone, and timber material palette",
      "Infinity-edge pool integrated into the landscape",
    ],
  },
  {
    slug: "hfa-tenant-improvement",
    title: "Hawaii Fluid Art",
    location: "Bay Area, CA",
    scope: "Retail tenant improvement — 1,800 SF",
    image: "/projects/hfa-tenant-improvement/Image-1.webp",
    description:
      "A vibrant retail-to-art-studio tenant improvement that transformed a standard commercial shell into a workshop, gallery, and retail space with bold colors, neon signage, and flexible workshop stations.",
    highlights: [
      "Retail-to-studio conversion",
      "Workshop, gallery, and retail in a single footprint",
      "Storefront design for maximum visibility",
    ],
  },
];

/* ── East Bay cities we serve (distinct to Oakland page) ── */
const eastBayCities = [
  {
    name: "Oakland",
    note: "Adaptive reuse of industrial stock in West Oakland and Jack London Square, residential renovations across Rockridge, Temescal, and Piedmont Avenue, and commercial TI along Telegraph and Broadway. Oakland has one of the most ADU-friendly permit processes in the Bay Area and offers fee waivers for units under 750 sq ft.",
  },
  {
    name: "Berkeley",
    note: "Residential additions in the Berkeley Hills and flats, tenant improvements along Shattuck and College, and sacred architecture work with Berkeley's diverse faith communities. Berkeley's design-review process for visible additions can add months — we manage presentations and revisions.",
  },
  {
    name: "Moraga & Lamorinda",
    note: "Custom homes and detached ADUs across Moraga, Orinda, and Lafayette. Our Moraga ADU project demonstrates our approach: small-lot zoning analysis, setback optimization under California's state ADU preemption, and a clean contemporary design that respects hillside context.",
  },
  {
    name: "Walnut Creek & Contra Costa",
    note: "Commercial TI in downtown Walnut Creek, residential additions in Lafayette and Alamo, and ADU work across Contra Costa County. Most jurisdictions process straightforward residential permits in 4–6 weeks, with dedicated ADU tracks cleared even faster.",
  },
  {
    name: "Concord, Danville & San Ramon",
    note: "Restaurant and retail tenant improvements across the 680 corridor, custom homes in Diablo and Blackhawk, and office build-outs in Bishop Ranch. Contra Costa County jurisdictions vary in speed — we've worked with most and know which have the fastest turnaround.",
  },
  {
    name: "Albany, El Cerrito & Richmond",
    note: "Residential remodels, ADU conversions, and smaller-scale commercial work. These cities have been expanding their ADU policies and offer increasingly streamlined permit pathways, making them productive markets for homeowners looking to add rental income or multi-generational housing.",
  },
];

/* ── ADU policy advantages specific to the East Bay ── */
const eastBayAduAdvantages = [
  {
    title: "Oakland's fee-waived ADU program",
    detail:
      "Oakland waives impact fees on all ADUs under 750 sq ft and has published pre-approved ADU plan sets for detached units — both of which can save homeowners $20K–$40K versus jurisdictions that haven't adopted these measures.",
  },
  {
    title: "Contra Costa County's efficient review cycles",
    detail:
      "Unincorporated Contra Costa County building division consistently clears complete ADU applications in 3–4 weeks. That's among the fastest in the Bay Area and makes the East Bay a genuinely attractive option for owners who want to move quickly.",
  },
  {
    title: "SB 9 lot splits in single-family zones",
    detail:
      "SB 9 (2022) lets homeowners split a single-family lot and build up to 4 units on what was previously a 1-unit parcel. The East Bay has more eligible single-family lots than San Francisco, making SB 9 a more practical tool here than in denser markets.",
  },
  {
    title: "Wildfire Urban Interface (WUI) compliance",
    detail:
      "Oakland hills, Berkeley hills, and Contra Costa hillside lots often fall within WUI zones, which trigger enhanced fire-resistive construction (Class A roofs, ember-resistant vents, tempered glass). We design to these requirements from the outset rather than retrofitting the project after plan check.",
  },
];

const services = [
  {
    title: "Oakland ADU Architect",
    description:
      "Detached, attached, and garage-conversion ADUs across Oakland, Berkeley, Moraga, and Contra Costa County. Oakland's fee-waived permit process, pre-approved plan program, and streamlined review make it California's most ADU-friendly city.",
    link: "/oakland/adu",
  },
  {
    title: "Custom Homes & Remodels",
    description:
      "Ground-up custom homes and whole-home remodels across Oakland and the East Bay. We navigate the region's hillside zoning, WUI requirements, and historic overlays to deliver permit-ready designs on first submittal.",
    link: "/residential",
  },
  {
    title: "Tenant Improvement",
    description:
      "Restaurant, retail, and office build-outs. Oakland has streamlined review for small commercial projects, with full plan check for change-of-use applications. We handle design, documentation, and permit coordination.",
    link: "/tenant-improvement",
  },
  {
    title: "Restaurant & Hospitality",
    description:
      "Full-service restaurant design including kitchen layout, exhaust hood coordination, health department requirements, and guest flow. We have completed hospitality projects across the East Bay market.",
    link: "/hospitality",
  },
  {
    title: "Commercial Architecture",
    description:
      "Office renovations, adaptive reuse, and mixed-use projects across Oakland and the East Bay. We coordinate with local planning departments on zoning, design review, and construction documentation.",
    link: "/commercial",
  },
];

export default function OaklandPage() {
  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="container">
          <div className="ti-sub-hero__layout">
            <div className="ti-sub-hero__content">
              <ScrollReveal>
                <p className="ti-sub-hero__eyebrow">Oakland & East Bay</p>
                <h1 className="ti-sub-hero__title">
                  Architecture & Design<br />
                  in the East Bay.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  YCD Studio designs homes, ADUs, restaurants, and commercial
                  spaces across Oakland, Moraga, Walnut Creek, and the greater
                  East Bay. We bring the same design rigor and permit expertise
                  to every project — whether it is a 640 square-foot ADU in
                  Moraga or a full commercial build-out in downtown Oakland.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link href="/contact" className="btn btn--primary btn--large">
                    Start an East Bay project
                  </Link>
                  <Link href="#eb-projects" className="btn btn--secondary btn--large">
                    See our work
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <Image
                  src="/projects/moraga-adu/Image-1.webp"
                  alt="Moraga ADU — residential architecture in the East Bay by YCD Studio"
                  width={720}
                  height={540}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
                  priority
                  fetchPriority="high"
                  style={{ width: "100%", height: "100%", borderRadius: "16px", objectFit: "cover" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section" id="eb-services">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Do in the East Bay"
              title="Design and permit expertise across the region."
              description="From Oakland to Walnut Creek to Contra Costa County, we bring full-service architecture to the East Bay's diverse communities and jurisdictions."
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

      {/* ── East Bay Cities (distinct content for this page only — SEO differentiation) ── */}
      <section className="section section--dark" id="eb-cities">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="East Bay Cities"
              title="Where we work across the East Bay."
              description="Each East Bay jurisdiction has its own permit process, zoning rules, and review timelines. We know the differences and design accordingly."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-challenges" staggerDelay={0.08}>
            {eastBayCities.map((c) => (
              <div className="ti-sub-challenge" key={c.name}>
                <h3 className="ti-sub-challenge__title">{c.name}</h3>
                <p className="ti-sub-challenge__desc">{c.note}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── East Bay ADU Policy Advantages (unique to this page) ── */}
      <section className="section" id="eb-adu">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why East Bay for ADUs"
              title="The East Bay is California's most ADU-friendly region."
              description="California's state-level ADU laws apply everywhere, but the East Bay has layered local policies that make ADU projects dramatically faster and cheaper here than in denser parts of the Bay Area."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.08}>
            {eastBayAduAdvantages.map((a) => (
              <div className="ti-sub-scope-card" key={a.title}>
                <h3 className="ti-sub-scope-card__title">{a.title}</h3>
                <p className="ti-sub-scope-card__desc">{a.detail}</p>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/oakland/adu" className="btn btn--primary btn--large">
                Oakland ADU architect — full details
              </Link>
              <p style={{ fontSize: "0.875rem", opacity: 0.7, marginTop: 12 }}>
                Cost ranges, permit timelines, process, and a free 30-min feasibility call.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="section section--dark" id="eb-projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="East Bay Projects"
              title="Recent work in the East Bay."
              description="A selection of completed and in-progress projects across Oakland, Moraga, and the surrounding communities."
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

      {/* ── All East Bay Projects Gallery ── */}
      <section className="section" id="all-eb-projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="All East Bay projects."
              description="Every project we have designed in Oakland, Moraga, and the surrounding East Bay communities."
            />
          </ScrollReveal>

          <StaggerReveal className="project-grid project-grid--three" staggerDelay={0.08}>
            {eastBayProjects.map((project) => (
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

      {/* ── East Bay Permitting Context ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Permitting"
              title="East Bay permit landscape."
              description="Every East Bay jurisdiction runs its own review process. Here is what to expect across the cities and counties we work in most."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-challenges" staggerDelay={0.08}>
            <div className="ti-sub-challenge">
              <h3 className="ti-sub-challenge__title">Oakland</h3>
              <p className="ti-sub-challenge__desc">
                Oakland permits residential and commercial work through its
                Planning and Building Department. Over-the-counter permits are
                available for minor interior work, with standard plan check
                running 4 to 8 weeks. Oakland has been proactive on ADU policy
                and offers fee waivers for ADUs under 750 square feet. Projects
                in the Oakland hills may trigger Wildfire Urban Interface
                requirements including enhanced fire-resistive construction.
              </p>
            </div>
            <div className="ti-sub-challenge">
              <h3 className="ti-sub-challenge__title">Contra Costa County</h3>
              <p className="ti-sub-challenge__desc">
                Moraga, Walnut Creek, Concord, and surrounding cities each
                maintain their own building departments. Walnut Creek and
                Concord typically process standard residential permits in
                4 to 6 weeks. Contra Costa County unincorporated areas have
                their own building division with generally faster turnaround.
                Hillside lots across the East Bay often require geotechnical
                reports and grading permits.
              </p>
            </div>
            <div className="ti-sub-challenge">
              <h3 className="ti-sub-challenge__title">Berkeley</h3>
              <p className="ti-sub-challenge__desc">
                Berkeley's design-review process for visible additions can add
                months to the timeline. Use permits are required for most
                commercial changes, with additional review for historic
                districts. We help clients navigate these requirements and
                set realistic expectations from the start.
              </p>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* Related Reading — cross-linked blog posts for SEO + reader value */}
      <RelatedReading servicePath="/oakland" />

      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Planning a project in the East Bay?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Whether you are building an ADU in Moraga, renovating a restaurant
              in Oakland, or designing a home in Walnut Creek, we will help you
              understand costs, timelines, and local permit requirements.
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
                href="mailto:info@ycd.studio?subject=East%20Bay%20Project%20Inquiry"
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
