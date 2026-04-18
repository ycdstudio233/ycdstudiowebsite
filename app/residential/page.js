import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { allProjects } from "../../lib/site-data";

import { RelatedReading } from "../../components/related-links";
import { FaqAccordion } from "../../components/faq-accordion";
import { residentialFaqs } from "../../lib/service-faqs";
export const metadata = {
  title: "Bay Area Residential Architect — Homes & ADUs",
  description:
    "Bay Area residential architecture firm. Custom homes, ADUs, JADUs, additions, and whole-home remodels across San Francisco, Oakland, the East Bay, and South Bay. Full-service design from feasibility through construction.",
  keywords:
    "residential architect Bay Area, custom home architect San Francisco, ADU architect, JADU California, kitchen remodel Bay Area, home addition architect, Title 24 compliance, residential design Oakland, East Bay architect",
  openGraph: {
    title: "Residential Architect Bay Area — YCD Studio",
    description:
      "Custom homes, ADUs, remodels, and additions across the Bay Area. Full-service architecture from concept through construction.",
    url: "https://ycd.studio/residential",
    siteName: "YCD Studio",
    type: "website",
    images: [
      {
        url: "https://ycd.studio/projects/sonoma-house/Image-1.webp",
        width: 1200,
        height: 630,
        alt: "Residential architecture by YCD Studio",
      },
    ],
  },
};

/* ── Data ── */

const scopeItems = [
  {
    title: "Custom New Construction",
    description:
      "Ground-up homes designed around your site, your program, and California's evolving energy code. We handle massing studies, zoning analysis, Title 24 energy modeling, Cal Green compliance, and full structural and MEP coordination — so the permit set is complete on first submittal.",
    details: [
      "Single-family and multi-family residences",
      "Site analysis, zoning research, and feasibility",
      "Title 24 energy modeling and Cal Green",
      "Structural, MEP, and civil engineering coordination",
      "Interior material and finish specifications",
    ],
  },
  {
    title: "ADUs & JADUs",
    description:
      "California's ADU laws (AB 2221, SB 897) have made accessory dwelling units one of the fastest paths to added living space or rental income. We design detached, attached, and garage-conversion ADUs that maximize livability within state and local code limits — and most jurisdictions waive impact fees on ADUs under 750 sf.",
    details: [
      "Detached ADUs up to 1,200 sf (state preemption)",
      "Garage conversions and JADUs up to 500 sf",
      "Setback and height analysis under current state law",
      "Pre-approved ADU plan programs (select jurisdictions)",
      "Utility separation and sub-metering strategies",
    ],
  },
  {
    title: "Remodels & Additions",
    description:
      "Kitchen and bath renovations, second-story additions, and whole-home remodels that preserve what works and rethink what doesn't. We navigate non-conforming setbacks, historic overlays, and scope creep with equal precision — and we coordinate with your contractor from day one.",
    details: [
      "Kitchen, bathroom, and whole-home remodels",
      "Second-story and rear additions",
      "Open-plan conversions and structural modifications",
      "Accessibility upgrades (ADA-adjacent and aging-in-place)",
      "Historic district and design-review submittals",
    ],
  },
];

const timelineMilestones = [
  {
    phase: "Discovery & Site Analysis",
    duration: "1–2 weeks",
    description:
      "We visit the site, review your zoning (setbacks, FAR, lot coverage, height limits), confirm utility points, and photograph existing conditions. You walk us through how you live, what you need, and what the budget looks like. We leave with a clear project brief and a realistic scope-of-work outline.",
  },
  {
    phase: "Schematic Design",
    duration: "3–4 weeks",
    description:
      "Floor plans, sections, and 3D massing studies that test layout options against your program and zoning envelope. We present two to three directions, refine the preferred scheme, and lock in the design intent before moving into documentation.",
  },
  {
    phase: "Construction Documents",
    duration: "4–8 weeks",
    description:
      "Full architectural drawing sets, structural engineering, Title 24 energy calculations, and Cal Green checklists. We coordinate with structural, mechanical, electrical, and plumbing engineers so the permit set is complete on first submittal.",
  },
  {
    phase: "Permitting",
    duration: "4–12 weeks (city dependent)",
    description:
      "We submit to the local building department, respond to plan-check corrections, and track the application through approval. San Francisco averages 8–12 weeks for a standard residential permit, while some East Bay cities clear ADUs in under 4 weeks.",
  },
  {
    phase: "Construction Administration",
    duration: "Through completion",
    description:
      "Site visits, RFI responses, submittal reviews, and change-order evaluation. We stay involved from groundbreaking through final inspection so what gets built matches what was designed.",
  },
];

const costRanges = [
  {
    level: "ADU / JADU",
    range: "$200–$400 /sf",
    scope: "Detached, attached, or garage conversion",
    includes:
      "Foundation, framing, full MEP, finishes, and Title 24 compliance. Detached new-build ADUs typically land at $300–$400/sf; garage conversions and JADUs start closer to $200/sf. Impact fees are waived for ADUs under 750 sf in most California jurisdictions.",
    timeline: "8–14 months design through move-in",
  },
  {
    level: "Kitchen & Bath Remodel",
    range: "$250–$500 /sf",
    scope: "Renovation within existing footprint",
    includes:
      "Mid-range kitchen remodels start around $80K–$120K; high-end kitchens with custom cabinetry and stone run $150K–$250K+. Bathroom renovations range from $40K (standard) to $100K+ (primary suite with wet room). Structural changes, plumbing reroutes, and electrical panel upgrades push costs higher.",
    timeline: "4–10 months design through completion",
  },
  {
    level: "Custom New Construction",
    range: "$400–$800+ /sf",
    scope: "Ground-up single-family home",
    includes:
      "Standard construction with good finishes starts around $400–$500/sf. Architecturally detailed homes with premium materials, complex grading, or hillside sites routinely reach $600–$800+/sf. Soft costs (design, engineering, permits, surveys) typically add 12–18% on top of hard construction costs.",
    timeline: "18–30 months design through move-in",
  },
];

const featuredProjects = [
  {
    slug: "the-cottage",
    title: "The Cottage",
    location: "Bay Area",
    scope: "New construction — single-family home",
    image: "/projects/the-cottage/Image-1.webp",
    description:
      "A high-end but unfussy home where livability, low maintenance, and warmth matter as much as form. Designed to maximize livable area on a constrained Bay Area lot with clean lines, natural materials, and a strong indoor-outdoor connection.",
    highlights: [
      "Full architectural design and documentation",
      "Title 24 and Cal Green compliance",
      "Construction administration through completion",
    ],
  },
  {
    slug: "sonoma-residence",
    title: "Sonoma Residence",
    location: "Sonoma, CA",
    scope: "Ground-up custom home",
    image: "/projects/sonoma-house/Image-1.webp",
    description:
      "A new-construction residence in Sonoma County that leans into indoor-outdoor living, tonal restraint, and a grounded domestic rhythm — drawing on the region's agricultural vernacular while meeting modern energy and comfort standards.",
    highlights: [
      "Site-responsive massing and orientation",
      "Indoor-outdoor living with tonal restraint",
      "Full permit set and engineering coordination",
    ],
  },
  {
    slug: "moraga-adu",
    title: "Moraga ADU",
    location: "Moraga, CA",
    scope: "Detached ADU — state preemption pathway",
    image: "/projects/moraga-adu/Image-1.webp",
    description:
      "A compact modern accessory dwelling unit with clean lines and an open-plan layout. Balances privacy for occupants with visual continuity to the main residence, designed under California's streamlined ADU provisions.",
    highlights: [
      "Detached ADU under AB 2221 / SB 897",
      "Zoning analysis and setback optimization",
      "Utility separation and sub-meter coordination",
    ],
  },
];

const permittingByRegion = [
  {
    region: "San Francisco",
    body: "SF's Department of Building Inspection (DBI) runs a multi-step review: plan intake, routing to assigned plan checker, and often a second review cycle. Standard residential permits average 8–12 weeks. Projects in RH-1/RH-2 zones triggering Section 311 neighborhood notification add 30+ days. ADUs benefit from a dedicated review track but typically still take 6–8 weeks. Historic districts (Article 10/11) require separate Planning review.",
  },
  {
    region: "Oakland",
    body: "Oakland Building permits residential work through its Planning and Building Department. Over-the-counter permits are available for minor interior work; standard plan check runs 4–8 weeks. Oakland has been proactive on ADU policy and offers fee waivers for ADUs under 750 sf. Projects in the Oakland hills may trigger Wildfire Urban Interface (WUI) requirements including enhanced fire-resistive construction and defensible-space landscaping.",
  },
  {
    region: "South Bay",
    body: "San Jose, Palo Alto, Mountain View, and surrounding cities each maintain independent building departments. San Jose's express plan check can clear a residential permit in 3–4 weeks. Palo Alto enforces an individual review process with design review for homes exceeding a floor-area-ratio threshold. Most South Bay cities have adopted the 2022 California Building Code with local amendments — Title 24 energy reports and soils reports are required on virtually every project.",
  },
  {
    region: "East Bay",
    body: "Berkeley, Walnut Creek, Concord, and Contra Costa County jurisdictions range from highly efficient to notably slow. Berkeley's design-review process for visible additions can add months; Walnut Creek and Concord typically process standard residential permits in 4–6 weeks. Contra Costa County unincorporated areas have their own building division with generally faster turnaround. Hillside lots across the East Bay often require geotechnical reports and grading permits.",
  },
];

export default function ResidentialPage() {
  const residentialProjects = allProjects.filter(
    (p) => p.category === "Residential"
  );

  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="container">
          <div className="ti-sub-hero__layout">
            <div className="ti-sub-hero__content">
              <ScrollReveal>
                <Link href="/work" className="ti-sub-hero__back">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M15 10H5M9 6l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Our Work
                </Link>
                <p className="ti-sub-hero__eyebrow">Residential Architecture</p>
                <h1 className="ti-sub-hero__title">
                  Custom homes, ADUs,<br />
                  and renovations.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  YCD Studio designs homes that respond to the way you actually
                  live — balancing light, privacy, and connection to site. From
                  accessory dwelling units to ground-up custom residences,
                  we guide every project from first sketch through final
                  inspection across the San Francisco Bay Area.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link href="/contact" className="btn btn--primary btn--large">
                    Start a residential project
                  </Link>
                  <Link href="#scope" className="btn btn--secondary btn--large">
                    What we design
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <Image
                  src="/projects/sonoma-house/Image-1.webp"
                  alt="Sonoma Residence by YCD Studio — modern residential architecture in the Bay Area"
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

      {/* ── What We Design ── */}
      <section className="section" id="scope">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Design"
              title="Three practice areas under one roof."
              description="Each one has its own regulatory path, budget logic, and design opportunity. We bring the same level of care to a 400 sf JADU as we do to a ground-up custom home."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.08}>
            {scopeItems.map((item) => (
              <div className="ti-sub-scope-card" key={item.title}>
                <h3 className="ti-sub-scope-card__title">{item.title}</h3>
                <p className="ti-sub-scope-card__desc">{item.description}</p>
                <ul className="ti-sub-scope-card__details">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section section--dark" id="process">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Process"
              title="Five phases. No surprises."
              description="A clear workflow that keeps timelines honest and pulls every consultant in at the right moment."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-timeline" staggerDelay={0.1}>
            {timelineMilestones.map((milestone, i) => (
              <div className="ti-sub-timeline__step" key={milestone.phase}>
                <div className="ti-sub-timeline__marker">
                  <span className="ti-sub-timeline__number">{String(i + 1).padStart(2, "0")}</span>
                  {i < timelineMilestones.length - 1 && <div className="ti-sub-timeline__line" />}
                </div>
                <div className="ti-sub-timeline__content">
                  <div className="ti-sub-timeline__header">
                    <h3 className="ti-sub-timeline__title">{milestone.phase}</h3>
                    <span className="ti-sub-timeline__duration">{milestone.duration}</span>
                  </div>
                  <p className="ti-sub-timeline__desc">{milestone.description}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Cost Guide ── */}
      <section className="section section--dark" id="cost">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Investment"
              title="Bay Area residential cost ranges."
              description="2025 Bay Area construction costs. These ranges cover hard construction; design fees, engineering, and permits are typically 12–18% on top. Actual costs depend on site conditions, finish level, and municipality."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-cost-grid" staggerDelay={0.1}>
            {costRanges.map((tier) => (
              <div className="ti-sub-cost-card" key={tier.level}>
                <div className="ti-sub-cost-card__level">{tier.level}</div>
                <div className="ti-sub-cost-card__range">{tier.range}</div>
                <div className="ti-sub-cost-card__scope">{tier.scope}</div>
                <p className="ti-sub-cost-card__includes">{tier.includes}</p>
                <div className="ti-sub-cost-card__timeline">{tier.timeline}</div>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.15}>
            <p className="ti-sub-cost-disclaimer">
              Ranges reflect Bay Area construction costs as of 2025. Hillside
              lots, structural retrofits, and historic overlays can push costs
              significantly higher. We provide project-specific cost guidance
              during the discovery and feasibility phase.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="section section--dark" id="featured">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Featured Projects"
              title="A closer look at recent residential work."
              description="Three projects across new construction, accessory dwelling units, and custom homes."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-projects" staggerDelay={0.12}>
            {featuredProjects.map((project) => (
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

      {/* ── All Residential Projects Gallery ── */}
      <section className="section" id="all-projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="All residential projects."
              description="Every residential project we've designed — from accessory dwelling units in the East Bay to coastal villas in the Mediterranean."
            />
          </ScrollReveal>

          <StaggerReveal className="project-grid project-grid--three" staggerDelay={0.08}>
            {residentialProjects.map((project) => (
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

      {/* ── Bay Area Permitting ── */}
      <section className="section section--dark" id="permitting">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Permitting"
              title="What to expect by region."
              description="Every Bay Area jurisdiction has its own review process, fee structure, and timeline. Here's a snapshot of the regions we work most."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-challenges" staggerDelay={0.08}>
            {permittingByRegion.map((region) => (
              <div className="ti-sub-challenge" key={region.region}>
                <h3 className="ti-sub-challenge__title">{region.region}</h3>
                <p className="ti-sub-challenge__desc">{region.body}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* ── FAQ (emits FAQPage JSON-LD for rich results) ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about residential architecture."
              description="Everything you need to know before starting a custom home, ADU, or remodel in the Bay Area."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="ti-faq-wrap">
              <FaqAccordion faqs={residentialFaqs} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Reading — cross-linked blog posts for SEO + reader value */}
      <RelatedReading servicePath="/residential" />

      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Ready to start your residential project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Whether you're building an ADU, renovating a kitchen, or designing
              a home from scratch, we'll help you understand costs, timelines,
              and what your site allows — before you commit to anything.
              We respond within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Schedule a consultation
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="mailto:info@ycd.studio?subject=Residential%20Project%20Inquiry"
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
