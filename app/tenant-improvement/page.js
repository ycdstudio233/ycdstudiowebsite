import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { AnimatedCounter } from "../../components/animated-counter";
import { FaqAccordion } from "../../components/faq-accordion";

export const metadata = {
  title: "Tenant Improvement Architect — Bay Area TI Design & Permits | YCD Studio",
  description:
    "Bay Area tenant improvement architecture — restaurant TI, retail build-outs, office renovations, ADA compliance, and permit-ready drawings. YCD Studio designs and permits commercial interior projects across San Francisco, Oakland, and the greater Bay Area.",
  keywords:
    "tenant improvement architect, Bay Area TI, San Francisco tenant improvement, restaurant tenant improvement, commercial renovation architect, ADA compliance architect, permit drawings Bay Area, restaurant design Bay Area, retail build-out San Francisco",
  openGraph: {
    title: "Tenant Improvement Architecture — YCD Studio",
    description:
      "Commercial interior renovation, restaurant TI, and permit-ready design across the San Francisco Bay Area.",
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
    title: "PiddeG Restaurant",
    type: "Restaurant TI",
    location: "Bay Area, CA",
    scope: "Interior renovation — 1,800 SF",
    description: "Fast-casual concept with efficient kitchen layout, branded interior, and ADA-compliant restrooms. Designed and permitted in under 6 weeks.",
    image: "/projects/piddeg-restaurant/Image-4.webp",
  },
  {
    slug: "hfa-tenant-improvement",
    title: "HFA Office",
    type: "Commercial TI",
    location: "San Francisco, CA",
    scope: "Office build-out — 3,200 SF",
    description: "Professional office conversion with conference rooms, open workspace, private offices, and full ADA path-of-travel upgrades.",
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
                    <Image src={project.image} alt={project.title} width={200} height={150} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
              <Link className="btn btn--ghost-light btn--large" href="mailto:hello@ycd.studio?subject=TI%20Pre-Lease%20Walkthrough">
                Book a pre-lease walkthrough
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
