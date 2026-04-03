import Link from "next/link";
import { SectionHeading } from "../../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../../components/scroll-reveal";

export const metadata = {
  title:
    "Retail & Office Tenant Improvement Architect — Bay Area Build-Outs & Permits | YCD Studio",
  description:
    "Retail build-out and office tenant improvement architecture in the San Francisco Bay Area. Storefront renovations, coworking conversions, medical/dental clinics, and commercial office build-outs — designed, documented, and permitted by YCD Studio.",
  keywords:
    "retail build-out architect Bay Area, office tenant improvement San Francisco, commercial renovation architect, storefront renovation Bay Area, coworking space architect, medical office build-out, dental clinic architect, office space planning San Francisco, ADA compliance commercial, tenant improvement permit Bay Area",
  openGraph: {
    title: "Retail & Office Tenant Improvement — YCD Studio",
    description:
      "Office build-outs, storefront refreshes, coworking spaces, and medical/dental clinics — designed and permitted across the San Francisco Bay Area.",
  },
};

/* ── Data ────────────────────────────────────────────────────────── */

const tiTypes = [
  {
    index: "01",
    title: "Office Build-Outs",
    description:
      "Open-plan layouts, private offices, conference rooms, reception areas, and server/IT rooms. We design workspaces that balance collaboration with focus — and pass plan check on the first submission.",
    tags: [
      "Open plan",
      "Private offices",
      "Conference rooms",
      "Reception",
      "IT/server rooms",
    ],
  },
  {
    index: "02",
    title: "Storefront Refreshes",
    description:
      "New facades, signage zones, display areas, fitting rooms, and customer flow optimization. Whether you're taking over an existing retail shell or refreshing a dated storefront, we design spaces that draw people in and keep them moving through your merchandise.",
    tags: [
      "Facade design",
      "Display layout",
      "Fitting rooms",
      "Signage zones",
      "Customer flow",
    ],
  },
  {
    index: "03",
    title: "Coworking & Flex Spaces",
    description:
      "Hot desks, dedicated desks, phone booths, meeting rooms, kitchenettes, and event areas. Coworking spaces need flexible infrastructure — power, data, HVAC zoning — and layouts that can adapt as membership grows.",
    tags: [
      "Hot desks",
      "Phone booths",
      "Meeting rooms",
      "Kitchenette",
      "Flexible infrastructure",
    ],
  },
  {
    index: "04",
    title: "Medical & Dental Clinics",
    description:
      "Exam rooms, treatment areas, sterilization zones, waiting rooms, and specialized MEP. Healthcare spaces have strict ventilation, plumbing, and accessibility requirements that go beyond standard commercial code. We coordinate with your equipment vendors from day one.",
    tags: [
      "Exam rooms",
      "Sterilization",
      "Medical gas",
      "HVAC zoning",
      "OSHPD/HCAi",
    ],
  },
  {
    index: "05",
    title: "Showrooms & Galleries",
    description:
      "Display walls, flexible lighting tracks, storage, and customer circulation paths. Showrooms are about presenting your product at its best while keeping the back-of-house functional and code-compliant.",
    tags: [
      "Display systems",
      "Track lighting",
      "Flexible walls",
      "Storage",
      "ADA circulation",
    ],
  },
];

const scopeItems = [
  {
    title: "Space Planning & Programming",
    description:
      "We start with your headcount, workflow, and growth plan — then translate that into a layout that maximizes every square foot of your lease. Space plans include furniture zones, circulation paths, and adjacency diagrams.",
  },
  {
    title: "ADA Path-of-Travel Upgrades",
    description:
      "California's 20% rule triggers ADA upgrades on most commercial renovations. We design compliant paths of travel, accessible restrooms, door hardware, signage, and ramps — built into the project from day one, not as a plan-check surprise.",
  },
  {
    title: "MEP Coordination",
    description:
      "Mechanical, electrical, and plumbing drawings coordinated with our engineering consultants. Power and data for workstations, HVAC zoning for private offices vs. open areas, plumbing for kitchenettes and restrooms.",
  },
  {
    title: "Signage & Wayfinding",
    description:
      "Exterior signage zones designed within city code and landlord guidelines. Interior wayfinding, ADA-compliant room signs, and branded environmental graphics — all documented in the permit set.",
  },
  {
    title: "Storefront & Facade Modifications",
    description:
      "New storefronts, window replacements, awnings, and entry door upgrades. Exterior work often triggers additional reviews — planning department, design review boards, and sometimes historic preservation. We manage the full approval process.",
  },
  {
    title: "Fire & Life Safety",
    description:
      "Occupancy load calculations, exit path planning, fire-rated assemblies, and fire sprinkler coordination. We ensure your space meets fire code before the fire marshal reviews it — not after.",
  },
];

const permitSteps = [
  {
    step: "01",
    title: "Pre-Application Research",
    description:
      "We verify zoning, existing permits, and any conditions of approval on the space. For retail and office projects, most locations are already zoned for commercial use — which eliminates the lengthy use-permit process that restaurants face.",
  },
  {
    step: "02",
    title: "Construction Documents",
    description:
      "Architectural drawings, reflected ceiling plans, finish schedules, and MEP plans — all prepared to the specific requirements of your city's building department. Retail and office sets are typically simpler than food-service projects because there's no kitchen exhaust, grease interceptor, or health department review.",
  },
  {
    step: "03",
    title: "Plan Check Submittal",
    description:
      "We submit to the building department and track the review. Most Bay Area cities review standard retail/office TI in 4 to 8 weeks — significantly faster than the 8 to 16 weeks typical for restaurant projects.",
  },
  {
    step: "04",
    title: "Corrections & Permit Issuance",
    description:
      "We respond to plan-check comments (typically one round for retail/office), coordinate any required corrections, and pick up the approved permit. Our 98% first-pass approval rate means fewer delays and faster construction starts.",
  },
];

const costRanges = [
  {
    level: "Cosmetic Refresh",
    range: "$40 -- $80 /sf",
    scope: "Light renovation",
    includes:
      "New paint, flooring, lighting fixtures, minor electrical. No wall moves or plumbing changes. Typical for retail refreshes and office cosmetic updates.",
    timeline: "3 -- 5 weeks design + permit",
    example: "Retail storefront repaint with new flooring and lighting",
  },
  {
    level: "Standard Build-Out",
    range: "$80 -- $160 /sf",
    scope: "Partial renovation",
    includes:
      "New partition walls, ceilings, MEP modifications, ADA upgrades, new finishes. The most common scope for office build-outs and retail conversions.",
    timeline: "6 -- 10 weeks design + permit",
    example: "Office suite with private offices, conference room, and kitchenette",
  },
  {
    level: "Full Build-Out",
    range: "$160 -- $280+ /sf",
    scope: "Gut renovation",
    includes:
      "Complete interior demolition, new layout, full MEP systems, specialty spaces (server rooms, medical exam rooms), storefront replacement. For ground-up commercial interiors.",
    timeline: "10 -- 16 weeks design + permit",
    example: "Medical clinic with specialized ventilation and plumbing",
  },
];

const codeRequirements = [
  {
    title: "Occupancy Classification",
    detail:
      "Most retail spaces are Group M (mercantile) and offices are Group B (business). Medical offices may classify as Group B or I-2 depending on procedures performed. Correct classification determines exiting, fire protection, and ventilation requirements.",
  },
  {
    title: "Exiting & Egress",
    detail:
      "Two exits are required when occupant load exceeds 49 (Group B) or the travel distance exceeds code maximums. We calculate occupant loads early in design to avoid costly exit additions late in the project.",
  },
  {
    title: "ADA & CBC Accessibility",
    detail:
      "California Building Code (CBC) Chapter 11B applies to all commercial spaces. Requirements include accessible entrances, paths of travel, restrooms, service counters (34\" max height), and signage. The 20% disproportionate-cost rule caps required upgrades relative to renovation cost.",
  },
  {
    title: "Energy Code (Title 24)",
    detail:
      "All commercial TI projects must comply with California's Title 24 energy code. This covers lighting power density, HVAC efficiency, envelope insulation (for storefront work), and commissioning requirements for systems over certain thresholds.",
  },
  {
    title: "Fire Sprinklers",
    detail:
      "Existing sprinkler systems must be modified when partition layouts change. New tenant separations and ceiling changes typically trigger sprinkler head relocation. We coordinate with fire sprinkler contractors during the design phase.",
  },
  {
    title: "Ventilation & Indoor Air Quality",
    detail:
      "ASHRAE 62.1 and Title 24 set minimum ventilation rates per occupant and per square foot. Open offices, conference rooms, and medical spaces each have different requirements. Proper HVAC zoning prevents hot/cold complaints after move-in.",
  },
];

/* ── Component ───────────────────────────────────────────────────── */

export default function RetailOfficeTIPage() {
  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="container">
          <div className="ti-sub-hero__layout">
            <div className="ti-sub-hero__content">
              <ScrollReveal>
                <Link
                  href="/tenant-improvement"
                  className="ti-sub-hero__back"
                >
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
                  All TI Services
                </Link>
                <h1 className="ti-sub-hero__title">
                  Retail &amp; Office
                  <br />
                  Tenant Improvement
                </h1>
                <p className="ti-sub-hero__subtitle">
                  We design, document, and permit office build-outs, retail
                  storefronts, coworking spaces, medical clinics, and showrooms
                  across the San Francisco Bay Area. From space planning to final
                  inspection — your commercial interior, handled.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link
                    href="/contact"
                    className="btn btn--primary btn--large"
                  >
                    Start your build-out
                  </Link>
                  <Link
                    href="#ti-sub-permit"
                    className="btn btn--secondary btn--large"
                  >
                    Permit process
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <div className="ti-sub-hero__image-placeholder">
                  <span className="ti-sub-hero__image-label">
                    Retail / Office TI Hero Photo
                  </span>
                  <span className="ti-sub-hero__image-sub">
                    Replace with completed office build-out or storefront
                    renovation image
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Types of Retail & Office TI ── */}
      <section className="ti-sub-section" id="ti-sub-types">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Project Types"
              title="Every kind of retail and office build-out."
              description="Each commercial space has unique requirements. We specialize in all of them — from a single-room office to a multi-suite medical clinic."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-types-grid" staggerDelay={0.1}>
            {tiTypes.map((type) => (
              <div className="ti-sub-type-card" key={type.title}>
                <div className="ti-sub-type-card__index">{type.index}</div>
                <h3 className="ti-sub-type-card__title">{type.title}</h3>
                <p className="ti-sub-type-card__desc">{type.description}</p>
                <div className="ti-sub-type-card__tags">
                  {type.tags.map((tag) => (
                    <span className="ti-sub-type-card__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── What's Typically Included ── */}
      <section className="ti-sub-section ti-sub-section--dark" id="ti-sub-scope">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Scope of Work"
              title="What&rsquo;s included in a retail or office TI."
              description="A typical project touches architecture, MEP, accessibility, and code compliance. Here's what we coordinate on every build-out."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.08}>
            {scopeItems.map((item) => (
              <div className="ti-sub-scope-card" key={item.title}>
                <h3 className="ti-sub-scope-card__title">{item.title}</h3>
                <p className="ti-sub-scope-card__desc">{item.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Permit Process ── */}
      <section className="ti-sub-section" id="ti-sub-permit">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Permit Process"
              title="Simpler than restaurant TI — but still required."
              description="Retail and office projects skip the health department and exhaust reviews that slow down restaurant permits. Here's how the process works for commercial build-outs."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="ti-sub-permit-compare">
              <div className="ti-sub-permit-compare__item ti-sub-permit-compare__item--highlight">
                <h4 className="ti-sub-permit-compare__label">
                  Retail / Office TI
                </h4>
                <ul className="ti-sub-permit-compare__list">
                  <li>Building department review only</li>
                  <li>No health department approval needed</li>
                  <li>No kitchen exhaust or grease trap review</li>
                  <li>4 -- 8 week typical plan check</li>
                  <li>1 round of corrections typical</li>
                  <li>Over-the-counter possible for minor work</li>
                </ul>
              </div>
              <div className="ti-sub-permit-compare__item">
                <h4 className="ti-sub-permit-compare__label">
                  Restaurant TI (for comparison)
                </h4>
                <ul className="ti-sub-permit-compare__list">
                  <li>Building dept. + health dept. + fire dept.</li>
                  <li>Health department plan review required</li>
                  <li>Type I/II hood and grease interceptor review</li>
                  <li>8 -- 16 week typical plan check</li>
                  <li>2 -- 3 rounds of corrections typical</li>
                  <li>Over-the-counter rarely available</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <StaggerReveal className="ti-sub-permit-steps" staggerDelay={0.12}>
            {permitSteps.map((step, i) => (
              <div className="ti-sub-permit-step" key={step.title}>
                <div className="ti-sub-permit-step__marker">
                  <span className="ti-sub-permit-step__number">
                    {step.step}
                  </span>
                  {i < permitSteps.length - 1 && (
                    <div className="ti-sub-permit-step__line" />
                  )}
                </div>
                <div className="ti-sub-permit-step__content">
                  <h3 className="ti-sub-permit-step__title">{step.title}</h3>
                  <p className="ti-sub-permit-step__desc">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Cost Ranges ── */}
      <section
        className="ti-sub-section ti-sub-section--dark"
        id="ti-sub-costs"
      >
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Budget Planning"
              title="What does a retail or office build-out cost?"
              description="Bay Area costs for retail and office TI are generally lower than restaurant projects because there's no commercial kitchen. Here are realistic ranges."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-cost-grid" staggerDelay={0.1}>
            {costRanges.map((tier) => (
              <div className="ti-sub-cost-card" key={tier.level}>
                <div className="ti-sub-cost-card__level">{tier.level}</div>
                <div className="ti-sub-cost-card__range">{tier.range}</div>
                <div className="ti-sub-cost-card__scope">{tier.scope}</div>
                <p className="ti-sub-cost-card__includes">{tier.includes}</p>
                <div className="ti-sub-cost-card__example">
                  <strong>Example:</strong> {tier.example}
                </div>
                <div className="ti-sub-cost-card__timeline">
                  {tier.timeline}
                </div>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.15}>
            <p className="ti-sub-cost-disclaimer">
              Ranges reflect Bay Area projects as of 2025 and include
              architectural design and permit fees. Actual construction costs
              vary by contractor, materials, building condition, and city.
              Medical/dental projects typically fall in the upper range due to
              specialized MEP requirements. We provide project-specific cost
              guidance during design.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Project: HFA Office ── */}
      <section className="ti-sub-section" id="ti-sub-featured">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Featured Project"
              title="HFA Office — San Francisco"
              description="A 3,200 SF professional office build-out with conference rooms, open workspace, private offices, and full ADA path-of-travel upgrades."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="ti-sub-featured">
              <div className="ti-sub-featured__gallery">
                <div className="ti-sub-featured__image-placeholder ti-sub-featured__image-placeholder--large">
                  <span>HFA Office — Main View</span>
                  <small>
                    Replace with primary project photo showing open workspace and
                    reception area
                  </small>
                </div>
                <div className="ti-sub-featured__image-row">
                  <div className="ti-sub-featured__image-placeholder">
                    <span>Conference Room</span>
                    <small>Replace with conference room photo</small>
                  </div>
                  <div className="ti-sub-featured__image-placeholder">
                    <span>Private Office</span>
                    <small>Replace with private office photo</small>
                  </div>
                  <div className="ti-sub-featured__image-placeholder">
                    <span>Floor Plan</span>
                    <small>Replace with architectural floor plan</small>
                  </div>
                </div>
              </div>

              <div className="ti-sub-featured__details">
                <div className="ti-sub-featured__meta">
                  <div className="ti-sub-featured__meta-item">
                    <span className="ti-sub-featured__meta-label">
                      Project Type
                    </span>
                    <span className="ti-sub-featured__meta-value">
                      Office Build-Out
                    </span>
                  </div>
                  <div className="ti-sub-featured__meta-item">
                    <span className="ti-sub-featured__meta-label">
                      Location
                    </span>
                    <span className="ti-sub-featured__meta-value">
                      San Francisco, CA
                    </span>
                  </div>
                  <div className="ti-sub-featured__meta-item">
                    <span className="ti-sub-featured__meta-label">Size</span>
                    <span className="ti-sub-featured__meta-value">
                      3,200 SF
                    </span>
                  </div>
                  <div className="ti-sub-featured__meta-item">
                    <span className="ti-sub-featured__meta-label">Scope</span>
                    <span className="ti-sub-featured__meta-value">
                      Full interior build-out
                    </span>
                  </div>
                </div>

                <div className="ti-sub-featured__scope">
                  <h4>What we delivered</h4>
                  <ul>
                    <li>Space programming and layout optimization</li>
                    <li>
                      4 private offices, 2 conference rooms, open workspace for
                      16
                    </li>
                    <li>Kitchenette and break area design</li>
                    <li>Full ADA path-of-travel upgrades including restrooms</li>
                    <li>MEP coordination with mechanical and electrical engineers</li>
                    <li>
                      Title 24 energy compliance documentation
                    </li>
                    <li>Permit drawings and plan-check response</li>
                    <li>Construction administration through final inspection</li>
                  </ul>
                </div>

                <Link
                  href="/work/hfa-tenant-improvement"
                  className="btn btn--primary"
                >
                  View full project
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Code Requirements ── */}
      <section
        className="ti-sub-section ti-sub-section--dark"
        id="ti-sub-code"
      >
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Code & Compliance"
              title="Common code requirements for commercial spaces."
              description="Understanding these requirements early prevents costly redesigns during plan check. We build compliance into every project from the start."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-code-grid" staggerDelay={0.08}>
            {codeRequirements.map((req) => (
              <div className="ti-sub-code-card" key={req.title}>
                <h3 className="ti-sub-code-card__title">{req.title}</h3>
                <p className="ti-sub-code-card__detail">{req.detail}</p>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.15}>
            <div className="ti-sub-code-note">
              <p>
                <strong>Note:</strong> Code requirements vary by jurisdiction.
                San Francisco, Oakland, Berkeley, and other Bay Area cities
                each have local amendments to the California Building Code.
                We stay current with local requirements across every city we
                work in.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Ready to start your retail or office build-out?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Send us your lease details, space photos, and timeline. We&apos;ll
              respond within 24 hours with a realistic scope assessment and next
              steps — no obligation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Start a build-out project
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="mailto:hello@ycd.studio?subject=Retail%20/%20Office%20TI%20Inquiry"
              >
                Email us directly
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="/tenant-improvement"
              >
                View all TI services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
