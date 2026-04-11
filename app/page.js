import Link from "next/link";
import { HeroShowcase } from "../components/hero-showcase";
import { SectionHeading } from "../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../components/scroll-reveal";
import { AnimatedCounter } from "../components/animated-counter";
import { CredentialsTicker } from "../components/credentials-ticker";
import {
  featuredProjects,
  heroStats,
  services,
  testimonials,
} from "../lib/site-data";

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <HeroShowcase />

      {/* ── Intro bridge ── */}
      <section className="intro">
        <div className="container">
          <ScrollReveal>
            <div className="intro__content">
              <h2 className="intro__heading">
                Spaces that feel right — not just look right.
              </h2>
              <p className="intro__text">
                YCD Studio designs restaurants, retail, hospitality, residential,
                and adaptive reuse projects across the Bay Area and beyond —
                from first sketch through construction.
              </p>
              <div className="intro__actions">
                <Link className="btn btn--primary btn--large" href="/contact">
                  Start a project
                </Link>
                <Link className="btn btn--secondary btn--large" href="/work">
                  See our work
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="intro__stats">
              {heroStats.map((stat) => (
                <div key={stat.label} className="intro__stat">
                  <span className="intro__stat-value">
                    <AnimatedCounter
                      value={stat.value.replace("+", "")}
                      suffix={stat.value.includes("+") ? "+" : ""}
                    />
                  </span>
                  <span className="intro__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section className="section section--dark" id="work">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Recent Projects"
              title="See what we've been working on."
            />
          </ScrollReveal>

          <StaggerReveal className="project-grid" staggerDelay={0.12}>
            {featuredProjects.map((project) => (
              <Link
                href={`/work/${project.slug}`}
                className="project-card"
                key={project.slug}
              >
                {project.image && (
                  <div className="project-card__visual" aria-hidden="true">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-card__img"
                    />
                  </div>
                )}
                <div className="project-card__body">
                  <div className="project-card__category">
                    {project.category}
                  </div>
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

          <ScrollReveal delay={0.15}>
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <Link href="/work" className="btn btn--ghost-light">
                View all projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Three things, done well."
              description="Every project type gets the same level of care — from feasibility through construction."
            />
          </ScrollReveal>

          <StaggerReveal className="services-grid" staggerDelay={0.1}>
            {services.map((service) => (
              <Link href={service.href} className="service-item service-item--link" key={service.title}>
                <div className="service-item__index">{service.index}</div>
                <h3 className="service-item__title">{service.title}</h3>
                <p className="service-item__desc">{service.description}</p>
                <div className="service-item__tags">
                  {service.points.map((point) => (
                    <span className="service-item__tag" key={point}>{point}</span>
                  ))}
                </div>
                <span className="service-item__bubble" aria-hidden="true">
                  Explore
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Clients"
              title="What people say."
            />
          </ScrollReveal>

          <StaggerReveal className="testimonials-grid" staggerDelay={0.1}>
            {testimonials.map((t) => (
              <div className="testimonial" key={t.name}>
                <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial__author">
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__role">{t.role}</span>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Credentials — awards, clients, press in one interactive band ── */}
      <CredentialsTicker />

      {/* ── CTA ── */}
      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Tell us what you&apos;re planning.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Design, permitting, and construction — guided from start to
              finish. We respond within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link className="btn btn--inverse btn--large" href="/contact">
              Start a project
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
