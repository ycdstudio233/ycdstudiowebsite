import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";

import { RelatedReading } from "../../components/related-links";
export const metadata = {
  title: "Bay Area Commercial Architect — Office & Retail",
  description:
    "Bay Area commercial architecture firm specializing in office buildings, retail centers, civic facilities, and mixed-use developments. Ground-up design, Title 24 compliance, ADA accessibility, and seismic engineering across San Francisco, Oakland, and Silicon Valley.",
  keywords:
    "commercial architect Bay Area, office building architect San Francisco, retail architecture Bay Area, mixed-use development architect, civic building architect California, commercial design Bay Area, Title 24 compliance, ADA commercial architect, LEED architect Bay Area, ground-up commercial construction",
  openGraph: {
    title: "Commercial Architecture — YCD Studio",
    description:
      "Office, retail, civic, and mixed-use commercial architecture across the San Francisco Bay Area.",
  },
};

/* ── Data ────────────────────────────────────────────────────────── */

const scopeCards = [
  {
    index: "01",
    title: "Office & Workplace",
    description:
      "From tech campuses and corporate headquarters to co-working hubs and creative studios. We design workplaces that attract talent, support productivity, and adapt as organizations grow — with smart daylighting, flexible floor plates, and infrastructure that scales.",
    tags: [
      "Tech campuses",
      "Co-working",
      "Corporate HQ",
      "Creative studios",
      "Flex office",
    ],
  },
  {
    index: "02",
    title: "Retail & Storefronts",
    description:
      "Standalone retail buildings, multi-tenant shopping centers, restaurant pads, and branded flagship stores. We design exteriors that draw foot traffic and interiors that convert it — optimizing storefront glazing, signage zones, and customer circulation for Bay Area retail environments.",
    tags: [
      "Shopping centers",
      "Flagship stores",
      "Restaurant pads",
      "Storefront design",
      "Signage zones",
    ],
  },
  {
    index: "03",
    title: "Civic & Community Buildings",
    description:
      "Libraries, community centers, municipal offices, and public-facing facilities. Civic projects demand durability, universal accessibility, and designs that serve diverse communities for decades. We navigate public procurement processes, community input requirements, and agency review timelines.",
    tags: [
      "Libraries",
      "Community centers",
      "Municipal offices",
      "Public assembly",
      "ADA compliance",
    ],
  },
];

const challengeCards = [
  {
    title: "Title 24 Energy Compliance",
    description:
      "California's Title 24 energy code is among the strictest in the nation. Commercial projects must meet prescriptive or performance-based energy budgets covering envelope, HVAC, lighting, and solar-ready requirements. We integrate energy compliance from schematic design — not as a last-minute exercise before permit submittal. For new commercial buildings, this includes mandatory solar photovoltaic and battery storage provisions under the 2025 code cycle.",
  },
  {
    title: "ADA & Accessibility",
    description:
      "The California Building Code (CBC Chapter 11B) exceeds federal ADA standards. Commercial buildings require accessible entrances, paths of travel, restrooms, service counters (34\" max), signage, and parking. New construction must be fully compliant from day one — there is no 20% disproportionate-cost exception for new buildings. We design accessibility as a core feature, not an afterthought.",
  },
  {
    title: "Seismic & Structural",
    description:
      "The Bay Area sits on some of the most active fault lines in North America. Commercial buildings must meet current CBC seismic provisions, which can significantly affect structural systems, foundation design, and construction costs. Steel moment frames, concrete shear walls, and base-isolation systems each have cost and design implications we evaluate early in the process.",
  },
  {
    title: "Sustainability & LEED",
    description:
      "Many Bay Area jurisdictions require or incentivize green building certifications. LEED, GreenPoint Rated, and CALGreen mandatory measures all apply to commercial projects. We design for energy efficiency, water conservation, healthy materials, and occupant wellness — whether you are targeting formal certification or simply building responsibly for the long term.",
  },
];

const costCards = [
  {
    level: "Retail / Storefront",
    range: "$150 -- $350 /sf",
    scope: "Shell + interior fit-out",
    includes:
      "Storefront glazing systems, interior partitions, MEP rough-in, ADA restrooms, basic finishes. Typical for single-tenant retail buildings and multi-tenant shopping center shells with standard landlord delivery.",
    timeline: "8 -- 14 months design through occupancy",
    note: "Bay Area retail construction costs have risen 15--20% since 2021 due to labor and material inflation.",
  },
  {
    level: "Office Buildout",
    range: "$200 -- $450 /sf",
    scope: "Core & shell + tenant improvement",
    includes:
      "Structural systems, curtain wall or storefront facade, elevator cores, mechanical systems, fire protection, and base-building infrastructure. Tenant improvement layers add open-plan workstations, private offices, conference rooms, and specialty spaces.",
    timeline: "12 -- 24 months design through occupancy",
    note: "Class A office in San Francisco and Peninsula markets commands premium finishes that push costs toward the upper range.",
  },
  {
    level: "Ground-Up Commercial",
    range: "$400 -- $800+ /sf",
    scope: "New construction — full building",
    includes:
      "Site work, foundations, structural frame, building envelope, all MEP systems, elevators, parking structures, landscaping, and full interior fit-out. Includes entitlements, environmental review, and utility infrastructure where required.",
    timeline: "18 -- 36+ months entitlements through occupancy",
    note: "Mixed-use projects with below-grade parking and complex entitlements trend toward the upper range.",
  },
];

const featuredProjects = [
  {
    slug: "market-tower",
    title: "Market Tower",
    type: "Mixed-Use Commercial",
    location: "Bay Area, CA",
    description:
      "A multi-story mixed-use tower integrating ground-floor retail with upper-level office and residential. Complex entitlements, seismic design, and urban site constraints.",
    image: "/projects/market-tower/Image-2.webp",
  },
  {
    slug: "lady-bird-boardwalk",
    title: "Lady Bird Boardwalk",
    type: "Commercial / Hospitality",
    location: "Austin, TX",
    description:
      "A waterfront commercial development with retail pavilions, restaurant pads, and public boardwalk. Site-sensitive design responding to flood plain and environmental constraints.",
    image: "/projects/lady-bird-boardwalk/Image-1.webp",
  },
  {
    slug: "hfa-tenant-improvement",
    title: "Hawaii Fluid Art",
    type: "Retail / Creative Commercial",
    location: "San Francisco, CA",
    description:
      "A branded retail and studio space combining gallery, workshop, and retail functions. Custom storefront design with high-visibility glazing and flexible interior zones.",
    image: "/projects/hfa-tenant-improvement/Image-1.webp",
  },
];

/* ── Component ───────────────────────────────────────────────────── */

export default function CommercialPage() {
  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="container">
          <div className="ti-sub-hero__layout">
            <div className="ti-sub-hero__content">
              <ScrollReveal>
                <Link href="/work" className="ti-sub-hero__back">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15 10H5M9 6l-4 4 4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Our Work
                </Link>
                <div className="ti-sub-hero__eyebrow">
                  Commercial Architecture
                </div>
                <h1 className="ti-sub-hero__title">
                  Spaces that work
                  <br />
                  as hard as you do.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  We design office buildings, retail centers, civic facilities,
                  and mixed-use commercial projects across the San Francisco Bay
                  Area. From site feasibility through construction
                  administration — architecture that performs for tenants,
                  communities, and investors.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link
                    href="/contact"
                    className="btn btn--primary btn--large"
                  >
                    Start a commercial project
                  </Link>
                  <Link
                    href="#commercial-costs"
                    className="btn btn--secondary btn--large"
                  >
                    Cost guide
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <Image
                  src="/projects/market-tower/Image-1.webp"
                  alt="Market Tower — commercial mixed-use architecture"
                  width={640}
                  height={480}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "16px",
                    objectFit: "cover",
                  }}
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── What We Design ── */}
      <section className="ti-sub-section" id="commercial-scope">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Design"
              title="Commercial architecture for every sector."
              description="Office, retail, civic, and mixed-use — each building type has distinct code requirements, market expectations, and design opportunities. We bring deep experience across all of them."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.1}>
            {scopeCards.map((card) => (
              <div className="ti-sub-scope-card" key={card.title}>
                <div className="ti-sub-scope-card__index">{card.index}</div>
                <h3 className="ti-sub-scope-card__title">{card.title}</h3>
                <p className="ti-sub-scope-card__desc">{card.description}</p>
                <div className="ti-sub-scope-card__tags">
                  {card.tags.map((tag) => (
                    <span className="ti-sub-scope-card__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Design Considerations (dark) ── */}
      <section
        className="ti-sub-section ti-sub-section--dark"
        id="commercial-challenges"
      >
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Design Considerations"
              title="What drives commercial design in the Bay Area."
              description="California's regulatory environment is uniquely demanding. These four factors shape every commercial project we take on — and they need to be addressed from day one, not discovered at plan check."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-challenges" staggerDelay={0.1}>
            {challengeCards.map((card) => (
              <div className="ti-sub-challenge-card" key={card.title}>
                <h3 className="ti-sub-challenge-card__title">{card.title}</h3>
                <p className="ti-sub-challenge-card__desc">
                  {card.description}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Cost Guide (dark) ── */}
      <section
        className="ti-sub-section ti-sub-section--dark"
        id="commercial-costs"
      >
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Cost Guide"
              title="What does commercial construction cost in the Bay Area?"
              description="Bay Area commercial construction is among the most expensive in the country. Labor shortages, seismic requirements, and strict energy codes all contribute. These ranges reflect current market conditions and include architectural fees."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-cost-grid" staggerDelay={0.1}>
            {costCards.map((tier) => (
              <div className="ti-sub-cost-card" key={tier.level}>
                <div className="ti-sub-cost-card__level">{tier.level}</div>
                <div className="ti-sub-cost-card__range">{tier.range}</div>
                <div className="ti-sub-cost-card__scope">{tier.scope}</div>
                <p className="ti-sub-cost-card__includes">{tier.includes}</p>
                <div className="ti-sub-cost-card__timeline">
                  {tier.timeline}
                </div>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.15}>
            <p className="ti-sub-cost-disclaimer">
              Ranges reflect Bay Area commercial projects as of 2025 and include
              design and permit fees. Actual construction costs vary
              significantly by site conditions, building height, parking
              requirements, seismic zone, and jurisdiction. TI allowances
              for commercial leases in San Francisco typically range from $50 to
              $150/sf for shell spaces — negotiate these before signing your
              lease. We provide project-specific cost modeling during the
              feasibility phase.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="ti-sub-section" id="commercial-projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Featured Projects"
              title="Commercial work from our portfolio."
              description="A selection of office, retail, and mixed-use projects that demonstrate our range across building types, scales, and Bay Area jurisdictions."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-projects" staggerDelay={0.1}>
            {featuredProjects.map((project) => (
              <Link
                href={`/work/${project.slug}`}
                className="ti-project-row"
                key={project.slug}
              >
                <div className="ti-project-row__visual">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={150}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="ti-project-row__body">
                  <span className="ti-project-row__type">{project.type}</span>
                  <h3 className="ti-project-row__title">{project.title}</h3>
                  <p className="ti-project-row__desc">{project.description}</p>
                  <div className="ti-project-row__meta">
                    <span>{project.location}</span>
                  </div>
                </div>
                <div className="ti-project-row__arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
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
      {/* Related Reading — cross-linked blog posts for SEO + reader value */}
      <RelatedReading servicePath="/commercial" />

      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Let&apos;s build something that performs.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Whether you&apos;re developing a new office building, repositioning
              a retail center, or planning a civic facility — we&apos;ll start
              with your site, your budget, and your timeline. Send us your
              project details and we&apos;ll respond within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Start a commercial project
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="mailto:info@ycd.studio?subject=Commercial%20Architecture%20Inquiry"
              >
                Email us directly
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="/work"
              >
                View our portfolio
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
