import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../../components/scroll-reveal";

export const metadata = {
  title:
    "Adaptive Reuse Architect Bay Area — Warehouse to Restaurant Conversion & Change of Use Permits | YCD Studio",
  description:
    "Bay Area adaptive reuse architecture — warehouse to restaurant conversions, change of use permits, office to retail transformations, and historic building renovations. YCD Studio navigates zoning changes, seismic upgrades, and complex permit pathways in San Francisco, Oakland, and the greater Bay Area.",
  keywords:
    "adaptive reuse architect Bay Area, change of use permit San Francisco, warehouse to restaurant conversion, adaptive reuse San Francisco, office to retail conversion, industrial to mixed-use, historic preservation architect, change of occupancy permit Bay Area, warehouse conversion architect, building repurposing Bay Area",
  openGraph: {
    title: "Adaptive Reuse Architecture — Warehouse Conversions & Change of Use | YCD Studio",
    description:
      "We convert warehouses to restaurants, offices to retail, and industrial buildings to mixed-use. Expert permit navigation for change-of-use projects across the Bay Area.",
  },
};

const commonConversions = [
  {
    index: "01",
    title: "Warehouse to Restaurant",
    from: "Storage / Industrial (S/F occupancy)",
    to: "Assembly / Restaurant (A-2 occupancy)",
    description:
      "The most common adaptive reuse request we see. Converting a warehouse or industrial space into a restaurant triggers a full change of occupancy — from S or F to A-2. This means new requirements for exhaust systems, grease interceptors, accessible restrooms, commercial kitchen infrastructure, and assembly-level fire protection. The raw aesthetic is appealing, but the code path is complex.",
    triggers: [
      "Full sprinkler system (often new installation)",
      "Type I/II hood and exhaust duct to roof",
      "Grease interceptor and FOG compliance",
      "ADA-compliant restrooms and path of travel",
      "Seismic evaluation of unreinforced masonry",
      "Parking study or in-lieu fee",
    ],
  },
  {
    index: "02",
    title: "Office to Retail",
    from: "Business (B occupancy)",
    to: "Mercantile (M occupancy)",
    description:
      "Converting office space to retail often seems straightforward, but the change in occupancy classification triggers code upgrades that surprise many tenants. Retail occupancies have different egress widths, storefront accessibility requirements, and signage regulations. If the building is in a historic district, exterior modifications face additional review.",
    triggers: [
      "Storefront ADA accessibility upgrades",
      "Revised egress calculations for higher occupant load",
      "Signage permits and design review",
      "Mechanical ventilation adjustments",
      "Fire alarm system modifications",
      "Parking ratio changes",
    ],
  },
  {
    index: "03",
    title: "Residential to Commercial",
    from: "Residential (R occupancy)",
    to: "Business / Assembly (B/A occupancy)",
    description:
      "Turning a residential building into a commercial space — a design studio, cafe, or small office — is increasingly common in Bay Area mixed-use neighborhoods. This conversion requires rezoning or conditional use authorization, full ADA compliance, commercial-grade electrical and plumbing, and often seismic upgrades that residential construction never required.",
    triggers: [
      "Conditional use permit or rezoning",
      "Full ADA path-of-travel compliance",
      "Commercial electrical panel upgrade",
      "Plumbing fixture count per occupant load",
      "Noise and odor mitigation for neighbors",
      "Parking and loading zone requirements",
    ],
  },
  {
    index: "04",
    title: "Industrial to Mixed-Use",
    from: "Factory / Industrial (F occupancy)",
    to: "Mixed-Use (B + R / A occupancy)",
    description:
      "Repurposing industrial buildings into mixed-use developments with ground-floor retail or restaurant and upper-floor residential or office is a signature Bay Area trend. These projects are the most complex — they involve multiple occupancy types, separated construction, independent egress paths, and often environmental remediation from prior industrial use.",
    triggers: [
      "Environmental Phase I/II assessment",
      "Separated occupancy construction",
      "Independent egress for each use",
      "Zoning overlay compliance",
      "Shadow studies and neighborhood notification",
      "Full seismic retrofit to current code",
    ],
  },
];

const challenges = [
  {
    title: "Zoning & Entitlements",
    description:
      "A change of use often requires a conditional use authorization (CUA) or variance from the planning department — a public hearing process that can add 3 to 6 months. We prepare use applications, attend hearings, and work with planning staff to build a strong case for approval.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 10h22M10 10v15M18 10v15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Seismic Upgrades",
    description:
      "Many Bay Area warehouses and industrial buildings are unreinforced masonry (URM) or soft-story structures. A change of occupancy to assembly or residential triggers mandatory seismic evaluation and likely retrofit — steel moment frames, shotcrete walls, or foundation bolting. We coordinate structural engineers early to avoid budget surprises.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M2 20l4-6 3 4 5-10 4 8 3-4 5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 24v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Historic Preservation",
    description:
      "San Francisco, Oakland, and Berkeley have extensive historic districts and landmark buildings. Adaptive reuse within these contexts requires compliance with the Secretary of the Interior's Standards, historic preservation commission review, and careful documentation of existing character-defining features. We have experience working within these constraints while still creating functional modern spaces.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l10 6v4H4V9l10-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 13v9M11 13v9M17 13v9M21 13v9M4 22h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fire & Life Safety Code Changes",
    description:
      "Changing a building's occupancy classification resets fire and life safety requirements to current code. This often means new fire sprinkler systems, fire alarm upgrades, rated corridor walls, emergency lighting, and revised exit configurations. For assembly occupancies (restaurants, event spaces), the requirements are significantly more stringent than the prior use.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3c0 5-6 8-6 14a6 6 0 1012 0c0-6-6-9-6-14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Parking & Transportation",
    description:
      "Different occupancy types have different parking ratios. A warehouse might require 1 space per 1,000 SF, while a restaurant needs 1 per 200 SF. In San Francisco, in-lieu fees or transportation demand management (TDM) plans can substitute, but in suburban Bay Area cities, meeting parking minimums is often the single biggest obstacle to change-of-use approval.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="22" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="22" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 14h20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const permitSteps = [
  {
    step: "01",
    title: "Feasibility Assessment",
    description:
      "We evaluate the existing building, current zoning, and desired use to identify permit requirements, potential deal-breakers, and realistic timelines before you commit to a lease or purchase.",
    timeline: "1-2 weeks",
  },
  {
    step: "02",
    title: "Zoning & Planning Review",
    description:
      "We determine whether the proposed use is permitted by right or requires a conditional use authorization, variance, or rezoning. If a hearing is needed, we prepare the application, supporting materials, and attend on your behalf.",
    timeline: "1-6 months (if CUA required)",
  },
  {
    step: "03",
    title: "Building Permit Documents",
    description:
      "We produce full construction documents — architectural, structural, mechanical, electrical, plumbing, and fire protection — that address the change of occupancy requirements. All plans are coordinated with specialty consultants before submission.",
    timeline: "4-8 weeks",
  },
  {
    step: "04",
    title: "Plan Check & Revisions",
    description:
      "Change-of-use projects receive more scrutiny than standard TI permits. Plans are routed to building, fire, planning, and sometimes health department reviewers. We respond to all plan check comments and coordinate corrections across disciplines.",
    timeline: "8-20 weeks (city dependent)",
  },
  {
    step: "05",
    title: "Construction & Final Inspection",
    description:
      "We provide construction administration through the build-out, including RFI responses, site visits, and coordination with inspectors. Change-of-use projects require a final Certificate of Occupancy reflecting the new use classification.",
    timeline: "Through CO issuance",
  },
];

const costConsiderations = [
  {
    title: "Structural & Seismic Retrofit",
    range: "$30 - $80+ /sf",
    description:
      "Unreinforced masonry, soft-story, or non-ductile concrete buildings may require significant structural work to meet current seismic code for the new occupancy. This is often the largest variable cost in adaptive reuse.",
  },
  {
    title: "Fire Protection Systems",
    range: "$8 - $20 /sf",
    description:
      "New or upgraded fire sprinkler system, fire alarm, rated walls and ceilings. Assembly and residential occupancies have the most stringent requirements. Existing buildings with no sprinklers face the highest costs.",
  },
  {
    title: "Mechanical & Ventilation",
    range: "$15 - $45 /sf",
    description:
      "Restaurant conversions require Type I/II exhaust hoods, makeup air units, and ductwork routed to the roof. Office and retail conversions need commercial HVAC that the original building likely never had.",
  },
  {
    title: "ADA & Accessibility",
    range: "$10 - $30 /sf",
    description:
      "Full ADA path-of-travel compliance — accessible entrances, restrooms, counters, and signage. California has stricter accessibility standards than federal ADA. Older buildings often need ramps, lifts, or restroom reconstructions.",
  },
  {
    title: "Environmental Remediation",
    range: "Varies widely",
    description:
      "Industrial and warehouse buildings may have contaminated soil, lead paint, asbestos insulation, or underground storage tanks. Phase I and Phase II assessments are required before permits are issued for change of use.",
  },
  {
    title: "Entitlement & Permit Fees",
    range: "$15K - $60K+",
    description:
      "CUA application fees, building permit fees, plan check fees, school impact fees, and transit impact development fees. Bay Area jurisdictions have some of the highest permit fees in the country.",
  },
];

const featuredProjects = [
  {
    title: "Warehouse to Full-Service Restaurant",
    type: "Adaptive Reuse",
    location: "Bay Area, CA",
    scope: "Change of use: S to A-2 — 3,200 SF",
    description:
      "Converted a 1960s light-industrial warehouse into a full-service restaurant with open kitchen, 120-seat dining room, and outdoor patio. Scope included seismic evaluation, new fire sprinkler system, full commercial kitchen infrastructure, and ADA-compliant restrooms.",
    image: null,
  },
  {
    title: "Office Building to Retail + Cafe",
    type: "Adaptive Reuse",
    location: "San Francisco, CA",
    scope: "Change of use: B to M/A-2 — 4,800 SF",
    description:
      "Ground-floor office space transformed into a specialty retail store with integrated cafe. Required conditional use authorization, new storefront entry for ADA compliance, and kitchen exhaust installation in a building with no existing roof penetrations.",
    image: null,
  },
  {
    title: "Industrial Shop to Community Event Space",
    type: "Adaptive Reuse",
    location: "Oakland, CA",
    scope: "Change of use: F to A-3 — 5,500 SF",
    description:
      "A former metalworking shop converted into a community event and performance space. Environmental remediation of shop floor, full seismic retrofit of unreinforced masonry walls, new accessible entry and egress, and assembly-level fire alarm and sprinkler systems.",
    image: null,
  },
];

const sustainabilityPoints = [
  {
    title: "Embodied Carbon Savings",
    description:
      "Demolishing a building and rebuilding wastes the embodied carbon locked in existing materials — concrete, steel, masonry. Adaptive reuse retains 50-75% of a building's structure, avoiding thousands of tons of CO2 emissions compared to new construction. In an era of carbon accountability, reuse is the most sustainable choice.",
  },
  {
    title: "Reduced Construction Waste",
    description:
      "New construction generates 25-30 pounds of waste per square foot. Adaptive reuse dramatically reduces this by retaining walls, foundations, and structural systems. Less demolition means less landfill and less material extraction.",
  },
  {
    title: "Neighborhood Character & History",
    description:
      "Warehouses, factories, and historic commercial buildings give Bay Area neighborhoods their identity. Adaptive reuse preserves the architectural texture and cultural memory of a place while introducing new economic activity. The result is neighborhoods that evolve without losing what makes them distinctive.",
  },
  {
    title: "Economic Revitalization",
    description:
      "Adaptive reuse brings new businesses, jobs, and foot traffic to underutilized areas. Converting a vacant warehouse into a restaurant or market creates a neighborhood anchor that attracts further investment — without the displacement concerns of large-scale new development.",
  },
];

export default function AdaptiveReusePage() {
  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="container">
          <div className="ti-sub-hero__layout">
            <div className="ti-sub-hero__content">
              <ScrollReveal>
                <Link href="/tenant-improvement" className="ti-sub-hero__back">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M15 10H5M9 6l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  All TI Services
                </Link>
                <div className="ti-sub-hero__eyebrow">Adaptive Reuse Architecture</div>
                <h1 className="ti-sub-hero__title">
                  New purpose for<br />
                  existing buildings.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  We convert warehouses to restaurants, offices to retail, and industrial
                  buildings to mixed-use spaces across the San Francisco Bay Area. Adaptive reuse
                  is the most complex type of tenant improvement — requiring zoning changes,
                  structural analysis, and multi-department permit coordination. We handle all of it.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link href="/contact" className="btn btn--primary btn--large">
                    Discuss your conversion project
                  </Link>
                  <Link href="#ar-permit-pathway" className="btn btn--secondary btn--large">
                    See the permit process
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <Image
                  src="/projects/market-tower/Image-1.webp"
                  alt="Market Tower — facade-led adaptive reuse retrofit"
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

      {/* ── Common Conversions ── */}
      <section className="ti-sub-section" id="ar-conversions">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Common Conversions"
              title="The building changes, and so does the code."
              description="Every change of use triggers a new set of building code, zoning, and fire safety requirements. Here are the four conversions we handle most often in the Bay Area."
            />
          </ScrollReveal>

          <div className="ti-sub-conversions">
            {commonConversions.map((conv, i) => (
              <ScrollReveal key={conv.title} delay={i * 0.08}>
                <div className="ti-sub-conversion">
                  <div className="ti-sub-conversion__header">
                    <span className="ti-sub-conversion__index">{conv.index}</span>
                    <div>
                      <h3 className="ti-sub-conversion__title">{conv.title}</h3>
                      <div className="ti-sub-conversion__occupancy">
                        <span className="ti-sub-conversion__from">{conv.from}</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="ti-sub-conversion__to">{conv.to}</span>
                      </div>
                    </div>
                  </div>
                  <p className="ti-sub-conversion__desc">{conv.description}</p>
                  <div className="ti-sub-conversion__triggers">
                    <h4 className="ti-sub-conversion__triggers-label">What this triggers:</h4>
                    <ul className="ti-sub-conversion__trigger-list">
                      {conv.triggers.map((trigger) => (
                        <li key={trigger}>{trigger}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Unique Challenges ── */}
      <section className="ti-sub-section ti-sub-section--dark" id="ar-challenges">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why It's Different"
              title="Challenges unique to adaptive reuse."
              description="A standard tenant improvement works within an existing occupancy classification. Adaptive reuse changes the classification itself — and that changes everything."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-challenges-grid" staggerDelay={0.1}>
            {challenges.map((challenge) => (
              <div className="ti-sub-challenge" key={challenge.title}>
                <div className="ti-sub-challenge__icon">{challenge.icon}</div>
                <h3 className="ti-sub-challenge__title">{challenge.title}</h3>
                <p className="ti-sub-challenge__desc">{challenge.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Permit Pathway ── */}
      <section className="ti-sub-section" id="ar-permit-pathway">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Permit Pathway"
              title="Change of use is a longer road. Here's the map."
              description="Unlike a standard TI permit, change-of-use projects may require planning entitlements before you can even apply for a building permit. The timeline is longer and the review is more rigorous. Here's how we navigate it."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-permit-timeline" staggerDelay={0.12}>
            {permitSteps.map((step, i) => (
              <div className="ti-sub-permit-step" key={step.title}>
                <div className="ti-sub-permit-step__marker">
                  <span className="ti-sub-permit-step__number">{step.step}</span>
                  {i < permitSteps.length - 1 && <div className="ti-sub-permit-step__line" />}
                </div>
                <div className="ti-sub-permit-step__content">
                  <h3 className="ti-sub-permit-step__title">{step.title}</h3>
                  <p className="ti-sub-permit-step__desc">{step.description}</p>
                  <span className="ti-sub-permit-step__timeline">{step.timeline}</span>
                </div>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.15}>
            <div className="ti-sub-permit-note">
              <strong>Total timeline estimate:</strong> 6 to 18 months from feasibility assessment
              to Certificate of Occupancy — depending on whether a conditional use hearing is
              required and the complexity of structural and environmental work. We provide a
              detailed timeline specific to your project at the feasibility stage.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Cost Considerations ── */}
      <section className="ti-sub-section ti-sub-section--dark" id="ar-costs">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Cost Guide"
              title="Adaptive reuse costs more — here's where the money goes."
              description="Standard TI budgets don't account for the structural, environmental, and entitlement costs that come with changing a building's purpose. Plan for these line items on top of your interior build-out budget."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-cost-grid" staggerDelay={0.1}>
            {costConsiderations.map((cost) => (
              <div className="ti-sub-cost-card" key={cost.title}>
                <div className="ti-sub-cost-card__header">
                  <h3 className="ti-sub-cost-card__title">{cost.title}</h3>
                  <span className="ti-sub-cost-card__range">{cost.range}</span>
                </div>
                <p className="ti-sub-cost-card__desc">{cost.description}</p>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.15}>
            <p className="ti-sub-cost-disclaimer">
              Cost ranges reflect Bay Area pricing as of 2024-2025. Actual costs depend on building
              condition, jurisdiction, and scope of work. We provide project-specific cost guidance
              during the feasibility assessment so you can make informed decisions before committing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="ti-sub-section" id="ar-projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Adaptive Reuse Portfolio"
              title="Buildings we've given new life."
              description="A selection of completed and in-progress adaptive reuse projects across the Bay Area."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-projects-list" staggerDelay={0.1}>
            {featuredProjects.map((project) => (
              <div className="ti-sub-project-card" key={project.title}>
                <div className="ti-sub-project-card__visual">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <Image
                      src="/projects/market-tower/Image-3.webp"
                      alt="Market Tower — facade detail"
                      width={600}
                      height={400}
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
                    />
                  )}
                </div>
                <div className="ti-sub-project-card__body">
                  <span className="ti-sub-project-card__type">{project.type}</span>
                  <h3 className="ti-sub-project-card__title">{project.title}</h3>
                  <p className="ti-sub-project-card__desc">{project.description}</p>
                  <div className="ti-sub-project-card__meta">
                    <span>{project.location}</span>
                    <span>{project.scope}</span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Why Adaptive Reuse Matters ── */}
      <section className="ti-sub-section ti-sub-section--dark" id="ar-sustainability">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why It Matters"
              title="The greenest building is the one already built."
              description="Adaptive reuse is not just a design trend. It is the most effective way to reduce construction's environmental impact while preserving the fabric of Bay Area neighborhoods."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-sustainability-grid" staggerDelay={0.1}>
            {sustainabilityPoints.map((point) => (
              <div className="ti-sub-sustainability-card" key={point.title}>
                <h3 className="ti-sub-sustainability-card__title">{point.title}</h3>
                <p className="ti-sub-sustainability-card__desc">{point.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Have a building that needs a new purpose?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Tell us about the building and your intended use. We will assess feasibility,
              identify the permit pathway, and give you a realistic timeline and budget
              range — before you commit to a lease or purchase.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Start an adaptive reuse project
              </Link>
              <Link className="btn btn--ghost-light btn--large" href="mailto:hello@ycd.studio?subject=Adaptive%20Reuse%20Feasibility%20Assessment">
                Request a feasibility assessment
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
