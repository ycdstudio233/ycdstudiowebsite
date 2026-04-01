import Link from "next/link";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { AnimatedCounter } from "../../components/animated-counter";
import { FaqAccordion } from "../../components/faq-accordion";

export const metadata = {
  title: "Tenant Improvement Architect — Bay Area TI Design & Permits | YCD Studio",
  description:
    "Bay Area tenant improvement architecture — restaurant TI, retail build-outs, office renovations, ADA compliance, and permit-ready drawings. YCD Studio designs and permits commercial interior projects across San Francisco, Oakland, and the greater Bay Area.",
  keywords:
    "tenant improvement architect, Bay Area TI, San Francisco tenant improvement, restaurant tenant improvement, commercial renovation architect, ADA compliance architect, permit drawings Bay Area",
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
    index: "01",
    title: "Restaurant & Food Service",
    description:
      "Kitchen layout, exhaust systems, health department coordination, grease traps, ADA restrooms, and front-of-house design — from fast-casual to fine dining.",
    tags: ["Kitchen design", "Hood systems", "Health dept.", "FOH/BOH flow"],
  },
  {
    index: "02",
    title: "Retail & Commercial",
    description:
      "Storefront renovations, office build-outs, and mixed-use conversions. We design spaces that work for your business and meet code on the first submittal.",
    tags: ["Office build-out", "Retail refresh", "ADA path-of-travel", "Code compliance"],
  },
  {
    index: "03",
    title: "Adaptive Reuse & Conversions",
    description:
      "Transforming existing buildings into new uses — warehouse to restaurant, office to retail, residential to commercial. We navigate zoning, permits, and structural realities.",
    tags: ["Change of use", "Zoning review", "Structural coord.", "Historic sensitivity"],
  },
];

const tiProcess = [
  {
    step: "01",
    title: "Site Assessment",
    description:
      "We visit your space, review the existing conditions, assess code requirements, and identify any red flags before you commit to a lease or a scope.",
  },
  {
    step: "02",
    title: "Design & Documentation",
    description:
      "Space planning, material selection, and construction documents — all designed to maximize your TI allowance and minimize change orders during build-out.",
  },
  {
    step: "03",
    title: "Permitting",
    description:
      "We prepare and submit permit drawings to the city, respond to plan check comments, and coordinate with consultants (MEP, structural) to keep approvals on track.",
  },
  {
    step: "04",
    title: "Construction Support",
    description:
      "We stay involved through construction — answering contractor questions, reviewing submittals, and making sure the built result matches the design intent.",
  },
];

const tiProjects = [
  {
    slug: "tabya-restaurant",
    title: "Tabya Restaurant",
    type: "Restaurant TI",
    location: "Bay Area, CA",
    image: null,
  },
  {
    slug: "piddeg-restaurant",
    title: "PiddeG Restaurant",
    type: "Restaurant TI",
    location: "Bay Area, CA",
    image: null,
  },
  {
    slug: "hfa-tenant-improvement",
    title: "HFA Office",
    type: "Commercial TI",
    location: "San Francisco, CA",
    image: null,
  },
  {
    slug: "pier-41-restaurant",
    title: "Pier 41 Restaurant",
    type: "Restaurant TI",
    location: "San Francisco, CA",
    image: null,
  },
];

export default function TenantImprovementPage() {
  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-hero">
        <div className="container">
          <ScrollReveal>
            <div className="ti-hero__eyebrow">Tenant Improvement Architecture</div>
            <h1 className="ti-hero__title">
              Your space, <br className="ti-hero__br" />
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

      {/* ── What We Do ── */}
      <section className="section" id="ti-services">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="TI Services"
              title="Every type of commercial interior."
              description="Whether you're opening a restaurant, refreshing a retail space, or converting an existing building — we handle design through permits."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-services-grid" staggerDelay={0.1}>
            {tiServices.map((service) => (
              <div className="ti-service" key={service.title}>
                <div className="ti-service__index">{service.index}</div>
                <h3 className="ti-service__title">{service.title}</h3>
                <p className="ti-service__desc">{service.description}</p>
                <div className="ti-service__tags">
                  {service.tags.map((tag) => (
                    <span className="ti-service__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section section--dark" id="ti-process">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Process"
              title="Four steps. No guesswork."
              description="A clear, linear process designed to keep your TI project on budget and on schedule — from lease signing to opening day."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-process-grid" staggerDelay={0.12}>
            {tiProcess.map((step) => (
              <div className="ti-process-step" key={step.title}>
                <div className="ti-process-step__number">{step.step}</div>
                <h3 className="ti-process-step__title">{step.title}</h3>
                <p className="ti-process-step__desc">{step.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── What to Expect — useful info band ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What to Expect"
              title="TI basics every tenant should know."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="ti-info-grid">
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">Permits are required</h3>
                <p className="ti-info-card__text">
                  Nearly all commercial interior work in San Francisco and the Bay Area
                  requires a building permit — even &ldquo;minor&rdquo; changes like moving a wall
                  or adding a sink. We handle the full permit process so you don&apos;t have to.
                </p>
              </div>
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">ADA triggers at renovation</h3>
                <p className="ti-info-card__text">
                  When you renovate a commercial space, ADA compliance is triggered.
                  California&apos;s 20% rule means path-of-travel upgrades may be required.
                  We design compliance into every project from the start — no surprises at plan check.
                </p>
              </div>
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">Maximize your TI allowance</h3>
                <p className="ti-info-card__text">
                  Your landlord&apos;s TI contribution is finite. We design efficiently,
                  prioritize high-impact work, and produce clear documentation that
                  reduces contractor questions and change orders — stretching every dollar.
                </p>
              </div>
              <div className="ti-info-card">
                <h3 className="ti-info-card__title">Timeline depends on scope</h3>
                <p className="ti-info-card__text">
                  Light cosmetic work: 4–6 weeks to permit. Full gut renovation:
                  3–6 months. Restaurant with kitchen exhaust: plan for the longer end.
                  We give you a realistic timeline on day one so you can plan your opening.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured TI Projects ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="TI Portfolio"
              title="Recent tenant improvement projects."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-projects-grid" staggerDelay={0.12}>
            {tiProjects.map((project) => (
              <Link
                href={`/work/${project.slug}`}
                className="ti-project-card"
                key={project.slug}
              >
                <div className="ti-project-card__visual">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="ti-project-card__placeholder">
                      <span>{project.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="ti-project-card__body">
                  <span className="ti-project-card__type">{project.type}</span>
                  <h3 className="ti-project-card__title">{project.title}</h3>
                  <span className="ti-project-card__location">{project.location}</span>
                </div>
              </Link>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.15}>
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <Link href="/work" className="btn btn--ghost-light">
                View all projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" id="ti-faq">
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
            <Link className="btn btn--inverse btn--large" href="/contact">
              Get started
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
