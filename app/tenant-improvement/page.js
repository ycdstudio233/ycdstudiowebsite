import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { AnimatedCounter } from "../../components/animated-counter";
import { FaqAccordion } from "../../components/faq-accordion";

import { RelatedReading } from "../../components/related-links";
export const metadata = {
  title: "Bay Area Tenant Improvement Architect",
  description:
    "Tenant improvement architect in the San Francisco Bay Area providing design, permitting, and build-ready drawings for restaurants, retail, clinics, and offices.",
  keywords:
    "tenant improvement architect, Bay Area TI, San Francisco tenant improvement, restaurant tenant improvement, commercial renovation architect, ADA compliance architect, permit drawings Bay Area, restaurant design Bay Area, retail build-out San Francisco",
  openGraph: {
    title: "Bay Area Tenant Improvement Architect & TI Permits — YCD Studio",
    description:
      "Tenant improvement architect in the San Francisco Bay Area providing design, permitting, and build-ready drawings for restaurants, retail, clinics, and offices.",
  },
};

const tiStats = [
  { value: "50+", label: "TI projects completed" },
  { value: "98%", label: "First-pass permit approval" },
  { value: "6", label: "Bay Area cities served" },
  { value: "10+", label: "Years of TI experience" },
];

const tiServices = [
  {
    slug: "restaurant",
    index: "01",
    title: "Restaurant & Food Service TI",
    description:
      "Full-service restaurant design from kitchen to front-of-house. We coordinate exhaust hoods, grease traps, health department requirements, ADA restrooms, and guest flow — so your space works on opening day.",
    tags: ["Kitchen layout", "Type I/II hoods", "Health dept.", "FOH/BOH", "Grease traps", "Bar design"],
    image: "/projects/piddeg-restaurant/Image-2.webp",
    imageAlt: "Restaurant tenant improvement — kitchen and dining layout",
  },
  {
    slug: "retail",
    index: "02",
    title: "Retail & Office Build-Out",
    description:
      "Storefront refreshes, office build-outs, coworking conversions, and medical/dental clinics. We design interiors that maximize your TI allowance and pass plan check on the first try.",
    tags: ["Office layout", "Storefront", "ADA path-of-travel", "MEP coord.", "Coworking", "Medical/dental"],
    image: "/projects/hfa-tenant-improvement/Image-1.webp",
    imageAlt: "Retail tenant improvement — storefront and office layout",
  },
  {
    slug: "adaptive-reuse",
    index: "03",
    title: "Adaptive Reuse & Change of Use",
    description:
      "Converting warehouses to restaurants, offices to retail, or residential to commercial. We navigate zoning changes, structural realities, and complex permit pathways that come with changing a building's purpose.",
    tags: ["Change of use", "Zoning review", "Structural", "Historic", "Mixed-use", "Seismic"],
    image: "/projects/market-tower/Image-1.webp",
    imageAlt: "Adaptive reuse — warehouse to restaurant conversion",
  },
];

const tiProcess = [
  {
    step: "01",
    title: "Pre-Lease Consultation",
    description:
      "Before you sign a lease, we visit the space and assess existing conditions, code requirements, and potential deal-breakers. This 1–2 hour walkthrough can save months of surprises.",
    detail: "Free for qualified projects",
  },
  {
    step: "02",
    title: "Design & Space Planning",
    description:
      "We develop your layout, material palette, and construction documents — all designed to maximize your TI allowance, minimize change orders, and reflect your brand identity.",
    detail: "2–4 weeks typical",
  },
  {
    step: "03",
    title: "Permitting & Approvals",
    description:
      "We prepare and submit permit drawings, respond to plan check comments, and coordinate with MEP engineers, structural consultants, and city reviewers to keep approvals moving.",
    detail: "4–12 weeks depending on city",
  },
  {
    step: "04",
    title: "Construction Administration",
    description:
      "We stay involved through build-out — answering RFIs, reviewing submittals, conducting site visits, and ensuring the built result matches the design intent down to the last detail.",
    detail: "Through final inspection",
  },
];

const tiProjects = [
  {
    slug: "tabya-restaurant",
    title: "Tabya Restaurant",
    type: "Restaurant TI",
    location: "Bay Area, CA",
    scope: "Full gut renovation — 2,400 SF",
    description: "A modern Turkish restaurant with open kitchen, custom bar, and warm material palette. Full permit coordination with health department and fire marshal.",
    image: "/projects/tabya-restaurant/Image-3.webp",
  },
  {
    slug: "piddeg-restaurant",
    title: "PiddeG Mediterranean Eatery — Walnut Creek",
    type: "Restaurant TI",
    location: "Walnut Creek, CA",
    scope: "Interior renovation — 2,200 SF",
    description: "Walnut Creek Turkish-Mediterranean restaurant at the Encina Grande center. Efficient kitchen layout, branded interior, pide oven as focal point, and ADA-compliant restrooms. Designed and permitted in under 6 weeks. 4.8 stars / 160+ Google reviews post-opening.",
    image: "/projects/piddeg-restaurant/Image-4.webp",
  },
  {
    slug: "hfa-tenant-improvement",
    title: "Hawaii Fluid Art",
    type: "Retail / Art Studio TI",
    location: "Bay Area, CA",
    scope: "Retail-to-art-studio conversion — 1,800 SF (franchise location)",
    description: "Tenant improvement for the Hawaii Fluid Art franchise — workshop for pour-painting classes, retail shop for art supplies, and gallery for completed works in one vibrant 1,800 SF footprint. Brand-standard hot pink and teal palette, neon signage, illuminated storefront.",
    image: "/projects/hfa-tenant-improvement/Image-1.webp",
  },
  {
    slug: "pier-41-restaurant",
    title: "Pier 41 Restaurant",
    type: "Restaurant TI",
    location: "San Francisco, CA",
    scope: "Waterfront renovation — 4,100 SF",
    description: "High-profile waterfront dining venue. Complex permit coordination with Port of SF, fire department, and health department.",
    image: "/projects/pier-41-restaurant/Image-1.webp",
  },
];

const costRanges = [
  {
    level: "Light",
    range: "$50–$100 /sf",
    scope: "Cosmetic refresh",
    includes: "Paint, flooring, lighting, minor fixture updates. No wall moves or plumbing changes.",
    timeline: "4–6 weeks to permit",
  },
  {
    level: "Mid-Range",
    range: "$100–$200 /sf",
    scope: "Partial renovation",
    includes: "New layout, some MEP modifications, ADA upgrades, new finishes throughout.",
    timeline: "8–12 weeks to permit",
  },
  {
    level: "Full Build-Out",
    range: "$200–$350+ /sf",
    scope: "Gut renovation",
    includes: "Complete interior demo, new walls, full MEP, kitchen exhaust, structural modifications.",
    timeline: "12–24 weeks to permit",
  },
];

const bayAreaCities = [
  {
    city: "San Francisco",
    note: "Over-the-counter permits for minor work. Plan check for full TI. Expect 8–16 week review for restaurant projects.",
    link: "/tenant-improvement/san-francisco",
  },
  {
    city: "Oakland",
    note: "Streamlined review for small commercial. Full plan check for change-of-use. Typical review: 6–12 weeks.",
    link: "/tenant-improvement/oakland",
  },
  {
    city: "San Jose",
    note: "Express permits available for basic TI. Full review for food service and assembly occupancies.",
    link: "/tenant-improvement/san-jose",
  },
  {
    city: "Palo Alto",
    note: "Design review required in downtown zone. Architectural review board for visible exterior changes.",
    link: "/tenant-improvement/palo-alto",
  },
  {
    city: "Berkeley",
    note: "Use permit required for most commercial changes. Additional review for historic districts.",
    link: "/tenant-improvement/berkeley",
  },
  {
    city: "Walnut Creek",
    note: "Efficient permit process for standard TI. Design review for downtown core projects.",
    link: "/tenant-improvement/walnut-creek",
  },
];

const checklist = [
  "Lease agreement (or LOI) with TI allowance details",
  "Existing floor plan or as-built drawings (if available)",
  "Photos of the current space — all walls, ceiling, floor, restrooms",
  "Desired layout changes or space requirements",
  "Equipment list (kitchen equipment, specialty items)",
  "Brand guidelines (logo, colors, signage preferences)",
  "Target opening date or move-in deadline",
  "Budget range or TI allowance amount",
  "Landlord contact information for coordination",
  "Any prior permit history or known code issues",
];

const tiTestimonials = [
  {
    quote: "YCD helped us navigate a nightmare permit situation in SF. We were open within 4 months of signing our lease.",
    name: "Restaurant Owner",
    project: "Bay Area Restaurant TI",
  },
  {
    quote: "They maximized our TI allowance and delivered drawings that the contractor could actually build from without constant questions.",
    name: "Commercial Tenant",
    project: "Office Build-Out, San Francisco",
  },
  {
    quote: "The pre-lease walkthrough saved us from signing a space that would have needed $80K in structural work we hadn't budgeted for.",
    name: "Retail Business Owner",
    project: "Retail TI, Oakland",
  },
];

// NOTE: FAQPage JSON-LD used to live here as an inline schema block. It's been
// removed — the <FaqAccordion /> component below now emits the single canonical
// FAQPage JSON-LD for this page, and having two caused Google Search Console to
// flag "Duplicate field FAQPage" and disqualify the rich result.

export default function TenantImprovementPage() {
  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-hero">
        <div className="container">
          <div className="ti-hero__layout">
            <div className="ti-hero__content">
              <ScrollReveal>
                <div className="ti-hero__eyebrow">Tenant Improvement Architecture</div>
                <h1 className="ti-hero__title">
                  Your space,<br />
                  designed to perform.
                </h1>
                <p className="ti-hero__subtitle">
                  We design, document, and permit commercial interior renovations
                  across the San Francisco Bay Area — restaurants, retail, offices,
                  and adaptive reuse. From first walkthrough to final inspection.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-hero__actions">
                  <Link href="/contact" className="btn btn--primary btn--large">
                    Start your TI project
                  </Link>
                  <Link href="#ti-process" className="btn btn--secondary btn--large">
                    See how it works
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="ti-hero__visual">
                {/* Placeholder for hero image — replace with actual project photo */}
                <Image
                  src="/projects/piddeg-restaurant/Image-2.webp"
                  alt="PiddeG Restaurant — completed tenant improvement"
                  width={1280}
                  height={960}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
                  style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                  priority
                  fetchPriority="high"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="ti-stats">
        <div className="container">
          <ScrollReveal>
            <div className="ti-stats__grid">
              {tiStats.map((stat) => (
                <div key={stat.label} className="ti-stats__item">
                  <span className="ti-stats__value">
                    <AnimatedCounter
                      value={stat.value.replace(/[+%]/g, "")}
                      suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
                    />
                  </span>
                  <span className="ti-stats__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service Types — each links to dedicated sub-page ── */}
      <section className="section" id="ti-services">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="TI Services"
              title="Every type of commercial interior."
              description="Each project type has its own requirements, timelines, and permit pathways. We specialize in all of them."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-services-grid" staggerDelay={0.1}>
            {tiServices.map((service) => (
              <Link
                href={`/tenant-improvement/${service.slug}`}
                className="ti-service ti-service--link"
                key={service.title}
              >
                <div className="ti-service__image">
                  {service.image ? (
                    <Image src={service.image} alt={service.imageAlt} width={600} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <div className="ti-service__image-placeholder">
                      <span>{service.index}</span>
                    </div>
                  )}
                </div>
                <div className="ti-service__body">
                  <h3 className="ti-service__title">{service.title}</h3>
                  <p className="ti-service__desc">{service.description}</p>
                  <div className="ti-service__tags">
                    {service.tags.map((tag) => (
                      <span className="ti-service__tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="ti-service__cta">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Types of TI — Detailed ── */}
      <section className="section section--dark" id="ti-types">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Project Types"
              title="What each type of TI involves."
              description="Different businesses face different design, code, and permitting challenges. Here is what to expect for the most common tenant improvement categories we handle."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="ti-info-grid">
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">Restaurant and food service tenant improvements</h3>
                <p className="ti-info-card__text">
                  Restaurant TI is the most complex category of commercial interior work.
                  Beyond standard architectural design, a restaurant build-out involves
                  commercial kitchen layout, exhaust hood specification (Type I for
                  grease-laden cooking, Type II for heat and steam), grease interceptor
                  sizing and placement, health department plan review, and fire suppression
                  coordination. The kitchen layout must balance operational efficiency with
                  code-mandated clearances, and the front-of-house must deliver the brand
                  experience while meeting occupancy limits, accessibility requirements,
                  and egress paths. We coordinate with kitchen equipment vendors, MEP
                  engineers, and health department reviewers simultaneously to keep the
                  project moving. Our restaurant TI experience spans fast-casual concepts,
                  full-service dining, bars, cafes, and ghost kitchens.
                </p>
                <Link href="/tenant-improvement/restaurant" className="ti-info-card__link">
                  Restaurant TI details
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">Retail tenant improvements</h3>
                <p className="ti-info-card__text">
                  Retail TI projects center on customer experience, brand identity, and
                  efficient merchandising. Design priorities include storefront presentation,
                  interior circulation, display fixture integration, point-of-sale placement,
                  and back-of-house storage. Code requirements for retail spaces focus on
                  occupancy classification, accessible path of travel from the public way
                  through the sales floor to fitting rooms and restrooms, and energy-compliant
                  lighting that also serves the merchandising strategy. For multi-tenant
                  retail buildings, we coordinate with the landlord on storefront standards,
                  sign criteria, and shared utility infrastructure. Retail build-outs are
                  often on tight timelines driven by lease commencement dates or seasonal
                  openings, so we design for efficient permitting and straightforward
                  construction.
                </p>
                <Link href="/tenant-improvement/retail" className="ti-info-card__link">
                  Retail TI details
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">Office tenant improvements</h3>
                <p className="ti-info-card__text">
                  Office TI ranges from basic demising walls and carpet to full build-outs
                  with private offices, conference rooms, break rooms, server rooms, and
                  reception areas. The key design decisions involve balancing open workspace
                  with private space, acoustic separation between meeting rooms and work
                  areas, HVAC zoning for comfort and energy efficiency, and electrical and
                  data infrastructure to support modern technology needs. ADA compliance in
                  office spaces includes accessible routes throughout, compliant restrooms,
                  proper door clearances and hardware, and accessible common areas. For
                  coworking conversions, we also address higher plumbing fixture counts,
                  shared kitchen facilities, and assembly occupancy requirements for event
                  spaces. We design offices that function well on day one and accommodate
                  growth without requiring another round of construction.
                </p>
              </div>
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">Adaptive reuse and change of use</h3>
                <p className="ti-info-card__text">
                  Adaptive reuse projects convert existing buildings to new purposes —
                  warehouses to restaurants, offices to retail, industrial spaces to creative
                  studios, or residential to commercial. These projects involve the most complex
                  code analysis because changing a building&apos;s occupancy classification triggers
                  a cascade of requirements: structural evaluation for new loads, seismic
                  upgrade assessment, new fire and life safety systems, full accessibility
                  upgrades, and zoning confirmation. In the Bay Area, adaptive reuse is
                  increasingly common as tenants seek unique, character-rich spaces in
                  converted industrial buildings and historic structures. We navigate the
                  additional regulatory layers — zoning variances, conditional use permits,
                  historic preservation review — that make these projects viable. The reward
                  is a space with authenticity and character that no ground-up build can match.
                </p>
                <Link href="/tenant-improvement/adaptive-reuse" className="ti-info-card__link">
                  Adaptive reuse details
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Before / After Showcase ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Transformations"
              title="Before and after."
              description="Every TI project starts with an empty or outdated space. Here's what we turn them into."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="ti-showcase">
              <div className="ti-showcase__item">
                <div className="ti-showcase__before">
                  <Image src="/projects/hfa-tenant-improvement/Image-7.webp" alt="Before — existing condition" width={600} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span className="ti-showcase__label">Before</span>
                </div>
                <div className="ti-showcase__after">
                  <Image src="/projects/hfa-tenant-improvement/Image-1.webp" alt="After — completed renovation" width={600} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span className="ti-showcase__label">After</span>
                </div>
              </div>
              <div className="ti-showcase__caption">
                <h3>Placeholder Project Name</h3>
                <p>Restaurant TI — 2,400 SF gut renovation in San Francisco. Completed in 4 months from lease signing to opening day.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section" id="ti-process">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="How It Works"
              title="Four steps. No guesswork."
              description="A clear, linear process designed to keep your TI project on budget and on schedule — from lease signing to opening day."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-process-timeline" staggerDelay={0.12}>
            {tiProcess.map((step, i) => (
              <div className="ti-timeline-step" key={step.title}>
                <div className="ti-timeline-step__marker">
                  <span className="ti-timeline-step__number">{step.step}</span>
                  {i < tiProcess.length - 1 && <div className="ti-timeline-step__line" />}
                </div>
                <div className="ti-timeline-step__content">
                  <h3 className="ti-timeline-step__title">{step.title}</h3>
                  <p className="ti-timeline-step__desc">{step.description}</p>
                  <span className="ti-timeline-step__detail">{step.detail}</span>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Process Deep Dive ── */}
      <section className="section section--dark" id="ti-process-detail">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Inside the Process"
              title="What actually happens at each stage."
              description="A tenant improvement is a coordinated effort between architect, tenant, landlord, contractor, engineers, and city agencies. Here is what each phase involves and why it matters."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="ti-info-grid">
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">Initial consultation and space assessment</h3>
                <p className="ti-info-card__text">
                  Every TI project starts with understanding the space as it exists today. We conduct
                  a thorough site visit to document existing conditions — wall locations, ceiling
                  heights, structural elements, mechanical systems, plumbing routing, and electrical
                  capacity. For restaurant projects, we evaluate whether the space has adequate gas
                  service, grease interceptor capacity, and roof access for exhaust penetrations.
                  For office and retail work, we assess floor loading, HVAC zoning, and
                  accessibility paths. This assessment is the foundation for every decision that
                  follows. We also review your lease to understand TI allowance terms, landlord
                  approval requirements, and any restrictions on modifications. If you have not
                  signed a lease yet, this is the ideal time to involve us — a pre-lease walkthrough
                  can identify deal-breakers before you commit.
                </p>
              </div>
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">Design development and construction documents</h3>
                <p className="ti-info-card__text">
                  With site conditions documented, we move into design. This phase produces
                  the drawings your contractor will build from and the city will review for
                  permit approval. For most TI projects, our deliverables include architectural
                  floor plans, reflected ceiling plans, interior elevations, finish schedules,
                  door and hardware schedules, and construction details. We coordinate with
                  MEP engineers (mechanical, electrical, plumbing) to integrate their systems
                  into the design. Structural engineering is brought in when walls are being
                  removed, new openings are cut, or equipment loads require it. For restaurant
                  projects, we also prepare kitchen equipment plans, hood schedules, and plumbing
                  fixture diagrams. The goal of this phase is a complete, coordinated set of
                  documents that answers every question before construction begins — reducing
                  RFIs, change orders, and delays during build-out.
                </p>
              </div>
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">Permit coordination with the city</h3>
                <p className="ti-info-card__text">
                  Permitting is where many TI projects stall. Each Bay Area jurisdiction has
                  its own submission requirements, review timelines, and plan check priorities.
                  We prepare the full permit application package — drawings, calculations,
                  energy compliance forms (Title 24), and agency-specific cover sheets. We
                  submit to the building department and track the review through each discipline:
                  architectural, structural, mechanical, electrical, plumbing, fire, and
                  accessibility. When plan check comments come back, we respond promptly with
                  revised drawings and written responses that address each comment directly.
                  For restaurant projects, we also coordinate parallel reviews with the health
                  department, fire department, and sometimes the local sewer district for
                  grease interceptor permits. Our 98% first-pass approval rate comes from
                  submitting thorough, code-compliant documents — not from shortcuts.
                </p>
              </div>
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">Construction administration and close-out</h3>
                <p className="ti-info-card__text">
                  Once the permit is issued and your contractor begins work, our role shifts
                  to construction administration. We review contractor submittals to confirm
                  materials and equipment match the specifications. We respond to RFIs
                  (requests for information) when field conditions differ from what the
                  drawings anticipated. We conduct periodic site visits to verify the work
                  matches the design intent — checking everything from wall framing locations
                  to finish installations. For complex projects, we attend progress meetings
                  with the contractor and owner to resolve issues in real time. At project
                  completion, we assist with final inspection coordination, helping ensure
                  the space passes all city inspections and receives its certificate of
                  occupancy. For restaurants, this includes health department final inspection
                  and fire department sign-off. The project is not done until you have the
                  approvals you need to open your doors.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Cost Guide ── */}
      <section className="section section--dark" id="ti-costs">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Budget Planning"
              title="What does a TI project cost?"
              description="Bay Area construction costs vary by scope, location, and building condition. Here are realistic ranges to help you plan."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-cost-grid" staggerDelay={0.1}>
            {costRanges.map((tier) => (
              <div className="ti-cost-card" key={tier.level}>
                <div className="ti-cost-card__level">{tier.level}</div>
                <div className="ti-cost-card__range">{tier.range}</div>
                <div className="ti-cost-card__scope">{tier.scope}</div>
                <p className="ti-cost-card__includes">{tier.includes}</p>
                <div className="ti-cost-card__timeline">{tier.timeline}</div>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.15}>
            <p className="ti-cost-disclaimer">
              Ranges are for Bay Area projects as of 2024 and include design and permit fees.
              Actual construction costs depend on contractor, materials, and site conditions.
              We provide detailed cost guidance specific to your project during the design phase.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Cost Factors ── */}
      <section className="section" id="ti-cost-factors">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Understanding Costs"
              title="What drives tenant improvement costs."
              description="Price per square foot is a starting point, not an answer. Here are the factors that actually determine what your project will cost."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="ti-info-grid">
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">Scope of work: cosmetic vs. structural</h3>
                <p className="ti-info-card__text">
                  The single largest cost driver is how deep the renovation goes. A cosmetic
                  refresh — new paint, flooring, lighting, and minor fixture updates — requires
                  minimal engineering and can often be permitted with a simplified plan set. A
                  partial renovation that involves moving walls, adding plumbing fixtures, or
                  modifying HVAC zones requires full engineering coordination and more detailed
                  construction documents. A gut renovation that strips the space to its shell
                  and rebuilds everything — new walls, full MEP systems, structural modifications —
                  is the most document-intensive and construction-costly scope. Understanding
                  where your project falls on this spectrum is the first step in realistic
                  budgeting.
                </p>
              </div>
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">Building code compliance</h3>
                <p className="ti-info-card__text">
                  California&apos;s building codes add layers of requirements that directly affect
                  cost. Title 24 energy compliance means new lighting must meet strict efficiency
                  standards, HVAC systems must be properly sized and controlled, and building
                  envelope performance may need upgrading. ADA and CBC accessibility requirements
                  trigger path-of-travel upgrades when renovation costs exceed thresholds — this
                  can mean new restrooms, ramps, door hardware, and signage that were not in your
                  original scope. Seismic bracing requirements for suspended ceilings, mechanical
                  equipment, and piping add cost in older buildings. Fire sprinkler modifications
                  are triggered by changes in occupancy or layout. These are not optional line
                  items — they are code requirements that affect every commercial renovation in
                  the state.
                </p>
              </div>
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">Mechanical, electrical, and plumbing</h3>
                <p className="ti-info-card__text">
                  MEP work is often the largest portion of construction cost in a TI project,
                  especially for restaurants and medical facilities. Adding new plumbing fixtures
                  means routing waste and supply lines, sometimes through concrete slabs. HVAC
                  modifications — new ductwork, additional zones, exhaust systems — require
                  engineering calculations and coordination with the building&apos;s existing systems.
                  Electrical work includes not just outlets and lighting but also panel capacity,
                  which in older buildings may require a service upgrade from the utility. For
                  restaurant projects, kitchen exhaust hoods, makeup air systems, and grease
                  interceptors represent significant MEP cost centers. We coordinate all MEP
                  engineering early in design so there are no surprises when bids come in.
                </p>
              </div>
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">Permits, timeline, and material selections</h3>
                <p className="ti-info-card__text">
                  Permit fees vary significantly across Bay Area cities — San Francisco
                  charges fees based on project valuation that can run into thousands of dollars
                  for larger projects. Permit review timelines directly affect your carrying costs:
                  every month you are paying rent without operating is money spent. Expedited
                  review is available in some jurisdictions for an additional fee. Material
                  selections also drive cost in both directions. Luxury finishes, custom
                  millwork, and imported tile increase budgets. But thoughtful material choices
                  can reduce cost without reducing quality — we help clients identify where to
                  invest and where to save, ensuring the TI allowance goes as far as possible.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured TI Projects ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="TI Portfolio"
              title="Recent tenant improvement projects."
              description="A selection of completed and in-progress TI work across the Bay Area."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-projects-list" staggerDelay={0.1}>
            {tiProjects.map((project) => (
              <Link
                href={`/work/${project.slug}`}
                className="ti-project-row"
                key={project.slug}
              >
                <div className="ti-project-row__visual">
                  {project.image ? (
                    <Image src={project.image} alt={project.imageAlt || project.title} width={200} height={150} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <div className="ti-project-row__placeholder">
                      <span>{project.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="ti-project-row__body">
                  <span className="ti-project-row__type">{project.type}</span>
                  <h3 className="ti-project-row__title">{project.title}</h3>
                  <p className="ti-project-row__desc">{project.description}</p>
                  <div className="ti-project-row__meta">
                    <span>{project.location}</span>
                    <span>{project.scope}</span>
                  </div>
                </div>
                <div className="ti-project-row__arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* ── Testimonials ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Client Stories"
              title="What TI clients say."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-testimonials" staggerDelay={0.1}>
            {tiTestimonials.map((t) => (
              <div className="ti-testimonial" key={t.name}>
                <p className="ti-testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="ti-testimonial__author">
                  <span className="ti-testimonial__name">{t.name}</span>
                  <span className="ti-testimonial__project">{t.project}</span>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Bay Area Context ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Local Expertise"
              title="Tenant improvements in the Bay Area."
              description="The Bay Area is one of the most complex markets for commercial renovation. Here is what makes it different and why local experience matters."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="ti-info-grid">
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">Navigating Bay Area permitting</h3>
                <p className="ti-info-card__text">
                  The San Francisco Bay Area is not a single permit jurisdiction — it is
                  dozens of cities, each with its own building department, review process,
                  and interpretation of the California Building Code. San Francisco&apos;s DBI
                  (Department of Building Inspection) processes thousands of commercial permits
                  annually, with review timelines ranging from over-the-counter approval for
                  minor work to 16 or more weeks for full restaurant build-outs. Oakland&apos;s
                  Planning and Building Department has streamlined review for small commercial
                  projects but requires full plan check for change-of-use applications. Palo
                  Alto adds architectural review board oversight for projects in its downtown
                  zone. We have submitted permits in every major Bay Area jurisdiction, and
                  we understand the specific requirements, reviewer expectations, and procedural
                  nuances that affect approval timelines. This local knowledge directly
                  translates to faster permits and fewer correction cycles.
                </p>
              </div>
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">Working with landlords on tenant improvements</h3>
                <p className="ti-info-card__text">
                  In most commercial leases, the landlord retains approval authority over
                  tenant improvements. This means your design needs to satisfy not just the
                  city&apos;s code requirements but also the landlord&apos;s building standards, insurance
                  requirements, and long-term property concerns. We coordinate with landlord
                  representatives throughout the design process — submitting drawings for
                  review, addressing their comments, and ensuring our work aligns with the
                  building&apos;s base systems. Common landlord concerns include roof penetrations
                  for exhaust systems, structural modifications, storefront changes, and
                  mechanical equipment placement. Proactive landlord coordination prevents
                  redesign after permits are already in review. For multi-tenant buildings,
                  we also coordinate with the building&apos;s property management to schedule work
                  around other tenants&apos; operations.
                </p>
              </div>
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">Common Bay Area building types</h3>
                <p className="ti-info-card__text">
                  The Bay Area&apos;s commercial building stock spans more than a century of
                  construction. We regularly work with Type III (wood-frame over retail
                  podium) mixed-use buildings, Type V wood-frame commercial strips, Type I
                  and II steel and concrete high-rises, unreinforced masonry buildings in
                  historic districts, and converted warehouse and industrial spaces. Each
                  building type presents specific challenges: older masonry buildings may
                  require seismic upgrades when occupancy changes, wood-frame buildings have
                  fire separation requirements between tenants, and concrete structures
                  complicate plumbing and electrical routing. Understanding the structural
                  and code implications of your building type is essential before design
                  begins — it affects layout options, construction cost, and permit pathway.
                </p>
              </div>
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">Local code requirements</h3>
                <p className="ti-info-card__text">
                  Beyond the California Building Code, Bay Area jurisdictions enforce local
                  amendments and additional requirements. San Francisco&apos;s Green Building
                  Ordinance mandates specific sustainability measures for commercial interiors.
                  Several cities require separate water efficiency calculations. Seismic
                  retrofit ordinances in San Francisco and Oakland can be triggered by
                  certain change-of-use applications. The Bay Area Air Quality Management
                  District (BAAQMD) has authority over commercial kitchen exhaust systems.
                  Local fire departments enforce specific occupancy and egress requirements
                  that may differ from the base code. Health departments in each county have
                  their own plan review process for food service establishments. Navigating
                  these overlapping authorities is a core part of what we do — and it is the
                  reason local experience is not optional for Bay Area tenant improvements.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Bay Area City Guides ── */}
      <section className="section" id="ti-cities">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Where We Work"
              title="Bay Area city permit guides."
              description="Every city has different permit timelines, fees, and review processes. Here's what to expect."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-cities-grid" staggerDelay={0.08}>
            {bayAreaCities.map((c) => (
              <div className="ti-city-card" key={c.city}>
                <h3 className="ti-city-card__name">{c.city}</h3>
                <p className="ti-city-card__note">{c.note}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── What to Expect — useful info ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Before You Start"
              title="TI basics every tenant should know."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="ti-info-grid">
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">Permits are almost always required</h3>
                <p className="ti-info-card__text">
                  Nearly all commercial interior work in the Bay Area requires a building permit —
                  even &ldquo;minor&rdquo; changes like moving a wall or adding a sink. Unpermitted work
                  risks fines, forced removal, and lease complications. We handle the full permit
                  process so you stay compliant from day one.
                </p>
              </div>
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">ADA compliance triggers at renovation</h3>
                <p className="ti-info-card__text">
                  When you renovate a commercial space in California, ADA upgrades are triggered.
                  The state&apos;s 20% rule means if your renovation costs exceed 20% of the building&apos;s
                  assessed value, path-of-travel upgrades (restrooms, ramps, signage) are required.
                  We design compliance in from the start — no surprises at plan check.
                </p>
              </div>
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">Maximize your TI allowance</h3>
                <p className="ti-info-card__text">
                  Your landlord&apos;s TI contribution is negotiated in your lease and finite. We design
                  efficiently, prioritize high-impact work, and produce clear documentation that reduces
                  contractor questions and change orders. Every dollar of your allowance should go toward
                  what actually matters for your business.
                </p>
              </div>
              <div className="ti-info-card ti-info-card--dark">
                <h3 className="ti-info-card__title">Don&apos;t sign a lease without a walkthrough</h3>
                <p className="ti-info-card__text">
                  Hidden conditions — structural deficiencies, asbestos, inadequate electrical, missing
                  grease interceptors — can add tens of thousands to your budget. A pre-lease walkthrough
                  with an architect takes 1–2 hours and can save months of surprises. We offer this as a
                  standalone service for any Bay Area commercial space.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Checklist ── */}
      <section className="section">
        <div className="container">
          <div className="ti-checklist-layout">
            <ScrollReveal>
              <div className="ti-checklist__header">
                <SectionHeading
                  eyebrow="Get Ready"
                  title="Your TI project checklist."
                  description="Bring these to your first meeting with us and we'll hit the ground running."
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="ti-checklist__list">
                {checklist.map((item, i) => (
                  <div className="ti-checklist__item" key={i}>
                    <span className="ti-checklist__check">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <rect x="1" y="1" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                    <span className="ti-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section--dark" id="ti-faq">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about tenant improvements."
              description="Everything you need to know before starting a TI project in the Bay Area."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="ti-faq-wrap">
              <FaqAccordion />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* Related Reading — cross-linked blog posts for SEO + reader value */}
      <RelatedReading servicePath="/tenant-improvement" />

      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Ready to start your tenant improvement?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Send us your space details and timeline. We&apos;ll respond within
              24 hours with next steps and a realistic scope assessment.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Start a TI project
              </Link>
              <Link className="btn btn--ghost-light btn--large" href="mailto:info@ycd.studio?subject=TI%20Pre-Lease%20Walkthrough">
                Book a pre-lease walkthrough
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
