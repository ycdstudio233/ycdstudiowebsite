import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";

export const metadata = {
  title:
    "Multi-Family Architect — Bay Area Apartments, Condos & Mixed-Use | YCD Studio",
  description:
    "Multi-family architecture in the San Francisco Bay Area. Apartments, condos, townhomes, and mixed-use developments. SB 9, density bonus, CEQA navigation, affordable housing compliance, and entitlement strategy. YCD Studio designs housing that strengthens communities.",
  keywords:
    "multi-family architect Bay Area, apartment architect San Francisco, mixed-use architect Bay Area, condo architect San Francisco, townhome architect Bay Area, SB 9 architect, density bonus architect, CEQA housing Bay Area, affordable housing architect, multi-family housing Bay Area, ADU architect Bay Area, infill housing architect",
  openGraph: {
    title: "Multi-Family Architecture — YCD Studio",
    description:
      "Bay Area multi-family housing design — apartments, condos, mixed-use, and townhomes. From feasibility through construction administration.",
  },
};

/* ── Data ── */

const scopeItems = [
  {
    title: "Apartment Buildings",
    description:
      "Mid-rise and low-rise apartment buildings designed for urban infill sites across the Bay Area. We work with market-rate and affordable housing developers to maximize unit count within zoning envelopes, optimize unit mix, and create buildings that pencil financially while delivering genuine livability. From 8-unit infill projects to 80+ unit developments.",
    tags: [
      "Urban infill",
      "Mid-rise wood-frame",
      "Type III/V construction",
      "Unit mix optimization",
      "Podium parking",
      "Common amenities",
    ],
  },
  {
    title: "Mixed-Use Developments",
    description:
      "Ground-floor retail or commercial with residential above — the building type that makes Bay Area neighborhoods walkable and economically resilient. Mixed-use design requires careful attention to separate entries, fire-rated assemblies between occupancies, acoustic separation, parking allocation, and the distinct needs of commercial tenants and residents sharing one structure.",
    tags: [
      "Ground-floor retail",
      "Residential above",
      "Separate entries",
      "Occupancy separation",
      "Acoustic design",
      "Shared parking",
    ],
  },
  {
    title: "Townhomes & Condos",
    description:
      "Fee-simple townhomes and condominium projects that offer ownership opportunities in a region where detached homes are increasingly out of reach. We design for-sale housing that balances private outdoor space, individual identity, and efficient site planning — with careful attention to CC&R implications, HOA common areas, and the California DRE requirements that govern condo sales.",
    tags: [
      "Fee-simple lots",
      "Private outdoor space",
      "Individual entries",
      "HOA common areas",
      "DRE compliance",
      "Stacked flats",
    ],
  },
];

const challenges = [
  {
    title: "Zoning & Density Bonuses",
    description:
      "California's density bonus law (Government Code 65915) allows developers to build 35-50% more units than base zoning permits in exchange for including affordable units. SB 9 (2022) enables lot splits and duplexes on single-family parcels statewide. SB 35 streamlines approvals for projects with affordable components in cities that haven't met their RHNA housing targets — which includes most Bay Area jurisdictions. We analyze every site for the maximum entitlement pathway, layering state and local incentives to unlock the highest feasible density.",
  },
  {
    title: "Environmental Review (CEQA)",
    description:
      "The California Environmental Quality Act requires environmental review for most multi-family projects that need discretionary approval. A full EIR can take 12-18 months and cost $150K-$500K+. But many housing projects qualify for statutory or categorical exemptions — infill exemptions (Class 32), SB 35 streamlining, or the housing sustainability district framework. We work with environmental consultants from day one to identify the fastest CEQA pathway and structure projects to qualify for exemptions wherever possible.",
  },
  {
    title: "Affordable Housing Requirements",
    description:
      "Most Bay Area cities impose inclusionary zoning requirements — typically 10-20% of units must be affordable to low- or moderate-income households. San Francisco requires 22% on-site affordable units for projects over 10 units. Oakland requires 15%. Some cities allow in-lieu fees as an alternative. The financial modeling of affordable units, area median income (AMI) tiers, and regulatory agreements is critical to project feasibility. We coordinate with housing consultants to structure unit mixes that satisfy inclusionary requirements without killing pro formas.",
  },
  {
    title: "Community Engagement & Design Review",
    description:
      "Multi-family projects in the Bay Area face intense community scrutiny. Neighborhood groups, design review boards, and planning commissions all weigh in — and opposition can add months or years to timelines. We design buildings that respond to neighborhood context, prepare compelling presentation materials, and participate in community meetings alongside our clients. Projects designed with genuine sensitivity to scale, materiality, and neighborhood character move through approvals faster and face less organized opposition.",
  },
];

const timelineMilestones = [
  {
    phase: "Feasibility & Entitlement Strategy",
    duration: "2-4 weeks",
    description:
      "Site analysis, zoning review, density bonus calculations, CEQA pathway assessment, and preliminary unit count/mix. We evaluate whether SB 9, SB 35, density bonus, or standard entitlements offer the best path. Deliverable: feasibility memo with recommended entitlement strategy and preliminary pro forma inputs.",
  },
  {
    phase: "Schematic Design",
    duration: "6-10 weeks",
    description:
      "Building massing, site plan, unit layouts, parking strategy, and exterior design language. This phase establishes the project's density, unit mix, and architectural character. We test multiple configurations to optimize unit count, livability, and construction efficiency before locking in a direction.",
  },
  {
    phase: "Design Development & Construction Documents",
    duration: "12-20 weeks",
    description:
      "Detailed architectural drawings, structural coordination, MEP systems, Title 24 energy compliance, accessibility design, and interior finish specifications. Construction documents are produced to a level of detail that minimizes RFIs and change orders during construction. Coordinated with civil, landscape, structural, and MEP consultants.",
  },
  {
    phase: "Entitlements & Permitting",
    duration: "6-18 months",
    description:
      "This is where Bay Area timelines diverge dramatically. Ministerial projects (SB 9, SB 35) can be approved in 60-90 days. Discretionary projects requiring planning commission approval, design review, or EIR certification can take 12-18+ months. We manage the full entitlement process: planning applications, CEQA documentation, design review presentations, and building permit submissions.",
  },
  {
    phase: "Construction Administration",
    duration: "Through completion",
    description:
      "Site visits, RFI responses, submittal reviews, change order evaluation, and substantial completion inspections. Multi-family construction typically runs 14-24 months depending on building size and construction type. We stay involved through certificate of occupancy to ensure the built result matches the design intent.",
  },
];

const featuredProjects = [
  {
    slug: "neighborhood-commons",
    title: "Neighborhood Commons",
    location: "Bay Area, CA",
    type: "Multi-Family Residential",
    image: "/projects/neighborhood-commons/Image-2.webp",
    description:
      "A community-oriented residential development designed to foster neighborhood connection through shared courtyards, ground-level gathering spaces, and a material palette that responds to the surrounding context.",
  },
  {
    slug: "pixel-heights",
    title: "Pixel Heights",
    location: "Bay Area, CA",
    type: "Mixed-Use Development",
    image: "/projects/pixel-heights/Image-1.webp",
    description:
      "A contemporary mixed-use building combining ground-floor commercial space with residential units above. The design emphasizes vertical rhythm, generous balconies, and an articulated facade that breaks down the building's scale.",
  },
  {
    slug: "aurora-residences",
    title: "Aurora Residences",
    location: "Bay Area, CA",
    type: "Multi-Family Residential",
    image: "/projects/aurora-residences/Image-1.webp",
    description:
      "Modern apartment residences with a focus on natural light, cross-ventilation, and durable materials. The building steps back at upper floors to maintain neighborhood scale and maximize daylight to adjacent properties.",
  },
];

/* ── Page Component ── */

export default function MultiFamilyPage() {
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
                <div className="ti-sub-hero__eyebrow">Multi-Family Architecture</div>
                <h1 className="ti-sub-hero__title">
                  Housing that strengthens<br />
                  communities.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  We design multi-family housing across the San Francisco Bay
                  Area — apartments, condominiums, townhomes, and mixed-use
                  developments. From feasibility analysis and entitlement
                  strategy through construction administration, we help
                  developers and property owners navigate the Bay Area&apos;s
                  complex regulatory landscape to deliver housing that works
                  financially and enriches neighborhoods.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link href="/contact" className="btn btn--primary btn--large">
                    Start a housing project
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
                  src="/projects/neighborhood-commons/Image-1.webp"
                  alt="Neighborhood Commons — multi-family residential development"
                  width={640}
                  height={480}
                  style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                  priority
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
              title="Housing at every scale."
              description="From 8-unit infill buildings to large mixed-use developments, we design multi-family projects that respond to site, market, and community."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.1}>
            {scopeItems.map((item) => (
              <div className="ti-sub-scope-card" key={item.title}>
                <h3 className="ti-sub-scope-card__title">{item.title}</h3>
                <p className="ti-sub-scope-card__desc">{item.description}</p>
                <div className="ti-sub-scope-card__tags">
                  {item.tags.map((tag) => (
                    <span className="ti-sub-scope-card__tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Regulatory Landscape ── */}
      <section className="section section--dark" id="challenges">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Regulatory Landscape"
              title="Bay Area housing is a policy maze. We know the way through."
              description="California housing policy is among the most complex in the nation. State mandates, local zoning, environmental law, and affordable housing requirements intersect on every project. Here's what shapes multi-family development in the Bay Area."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-challenges" staggerDelay={0.08}>
            {challenges.map((challenge) => (
              <div className="ti-sub-challenge" key={challenge.title}>
                <h3 className="ti-sub-challenge__title">{challenge.title}</h3>
                <p className="ti-sub-challenge__desc">{challenge.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="section section--dark" id="process">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Process"
              title="From site analysis to certificate of occupancy."
              description="Multi-family projects demand a structured process that accounts for long entitlement timelines, multiple consultant disciplines, and evolving regulatory requirements."
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

      {/* ── Featured Projects ── */}
      <section className="section" id="projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Multi-Family Portfolio"
              title="Recent multi-family projects."
              description="A selection of multi-family and mixed-use housing projects designed by YCD Studio across the Bay Area."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-projects" staggerDelay={0.12}>
            {featuredProjects.map((project) => (
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
                    <span>{project.type}</span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="ti-sub-project__title">{project.title}</h3>
                  <p className="ti-sub-project__desc">{project.description}</p>
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

          <ScrollReveal delay={0.15}>
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <Link href="/work" className="btn btn--primary">
                View all projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Let&apos;s build housing the Bay Area needs.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Whether you&apos;re exploring a site&apos;s development potential,
              navigating entitlements, or ready to start design — we&apos;re here
              to help. Tell us about your project and we&apos;ll respond within
              24 hours with an initial assessment.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Start a multi-family project
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="mailto:hello@ycd.studio?subject=Multi-Family%20Project%20Inquiry"
              >
                Request a feasibility review
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
