import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { AnimatedCounter } from "../../components/animated-counter";
import { StudioCredentials } from "../../components/studio-credentials";
import { ServiceReveal } from "../../components/service-reveal";
import {
  studioNotes,
  studioStats,
  teamMembers,
  services,
  locations,
} from "../../lib/site-data";

/* ── How we work (process from the firm's perspective — distinct to /studio) ── */
const engagementPhases = [
  {
    step: "01",
    title: "Fit conversation",
    detail:
      "Before we quote anything, we spend 30 to 45 minutes on a call understanding what you are trying to build, where, by when, and why. Roughly a third of conversations end with a referral to someone better suited — that's the right outcome for both of us.",
  },
  {
    step: "02",
    title: "Feasibility & scoping",
    detail:
      "For projects we are a fit for, we run feasibility analysis — site constraints, zoning envelope, entitlement pathway, realistic budget range — and propose a scope of work. You see the risks up front rather than discovering them in month six.",
  },
  {
    step: "03",
    title: "Design through construction documents",
    detail:
      "Schematic design, design development, construction documents. We coordinate structural, MEP, and civil engineering from early in design rather than bolting them on at the end. The goal is a permit set that clears plan check with minimal corrections.",
  },
  {
    step: "04",
    title: "Permitting & construction administration",
    detail:
      "We submit to the building department, respond to plan check comments within a week, and stay involved through construction — answering RFIs, reviewing submittals, and doing site visits so the built result matches the design intent.",
  },
];

/* ── What differentiates the studio (drives organization-level trust signals) ── */
const differentiators = [
  {
    title: "Permit-ready documentation, not renderings",
    detail:
      "Beautiful renderings are cheap. A construction document set that clears plan check on first submittal and doesn't generate change orders during construction is the actual value. We optimize for the latter.",
  },
  {
    title: "Small team, principal-led",
    detail:
      "Every project gets principal attention from kick-off through final inspection. There is no junior designer handoff. This is deliberate — we keep the studio small to maintain quality at the top of the org chart.",
  },
  {
    title: "We say no",
    detail:
      "We decline projects where we aren't the right fit, where budgets won't support the scope, or where timelines are unrealistic. Taking work we can't execute well hurts everyone.",
  },
  {
    title: "Multi-agency permit coordination",
    detail:
      "Bay Area projects routinely require coordination across DBI, Planning, Health Department, Fire Marshal, ABC, and sometimes Port of San Francisco. We know the sequence, the timing, and the people — and we shepherd each review in parallel rather than sequentially.",
  },
];

export const metadata = {
  title: { absolute: "About YCD Studio — Bay Area Architects" },
  description:
    "YCD Studio is a San Francisco Bay Area design firm specializing in expert restaurant tenant improvements and custom commercial renovations for hospitality.",
  openGraph: {
    title: "About YCD Studio — Bay Area Architects",
    description:
      "YCD Studio is a San Francisco Bay Area design firm specializing in expert restaurant tenant improvements and custom commercial renovations for hospitality.",
  },
};

export default function StudioPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Studio"
        title="A studio built on listening, precision, and follow-through."
        description="YCD Studio is a San Francisco Bay Area design firm specializing in restaurant tenant improvement, commercial design, hospitality spaces, and select residential work. We make the complex feel effortless."
      />

      {/* Stats — immediate credibility */}
      <section className="section studio-stats-section">
        <div className="container">
          <ScrollReveal>
            <div className="studio-stats">
              {studioStats.map((stat) => (
                <div key={stat.label} className="studio-stats__item">
                  <span className="studio-stats__value">
                    <AnimatedCounter
                      value={stat.value.replace(/[+%]/g, "")}
                      suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
                    />
                  </span>
                  <span className="studio-stats__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy — what drives us */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Philosophy"
              title="What drives our work."
              description="Every decision we make is grounded in a simple belief: great architecture starts with understanding people."
            />
          </ScrollReveal>

          <StaggerReveal className="notes-grid" staggerDelay={0.1}>
            {studioNotes.map((note) => (
              <article className="note-card" key={note.title}>
                <h3 className="note-card__title">{note.title}</h3>
                <p className="note-card__desc">{note.description}</p>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* What we design — project types with images */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Design"
              title="From restaurants to residences."
              description="Four areas where we bring the most clarity, creativity, and follow-through."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <ServiceReveal />
          </ScrollReveal>
        </div>
      </section>

      {/* How we work — four-phase client engagement (E-E-A-T + trust signal) */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="How We Work"
              title="Four phases. Clear handoffs."
              description="A deliberate workflow that tells clients what to expect at each stage — and what we're responsible for versus what needs to be decided together."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-timeline" staggerDelay={0.1}>
            {engagementPhases.map((phase, i) => (
              <div className="ti-sub-timeline__step" key={phase.step}>
                <div className="ti-sub-timeline__marker">
                  <span className="ti-sub-timeline__number">{phase.step}</span>
                  {i < engagementPhases.length - 1 && <div className="ti-sub-timeline__line" />}
                </div>
                <div className="ti-sub-timeline__content">
                  <div className="ti-sub-timeline__header">
                    <h3 className="ti-sub-timeline__title">{phase.title}</h3>
                  </div>
                  <p className="ti-sub-timeline__desc">{phase.detail}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* What sets us apart — differentiators */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What Sets Us Apart"
              title="How we think about the work."
              description="A few operating principles that shape how we take on projects — and the ones we decline."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.08}>
            {differentiators.map((d) => (
              <div className="ti-sub-scope-card" key={d.title}>
                <h3 className="ti-sub-scope-card__title">{d.title}</h3>
                <p className="ti-sub-scope-card__desc">{d.detail}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Services — explicit deep links into every service page (internal link equity) */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Practice Areas"
              title="Six practices we lead."
              description="Each has its own regulatory path, design vocabulary, and project rhythm. Click through for deeper detail on any one."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.06}>
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="ti-sub-scope-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div style={{ fontSize: "0.8125rem", opacity: 0.5, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                  {s.index}
                </div>
                <h3 className="ti-sub-scope-card__title">{s.title}</h3>
                <p className="ti-sub-scope-card__desc">{s.description}</p>
              </Link>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.2}>
            <div style={{ marginTop: 40, fontSize: "0.9375rem", opacity: 0.75 }}>
              <strong>Where we work:</strong>{" "}
              {locations.map((loc, i) => (
                <span key={loc.title}>
                  <Link href={loc.href} style={{ textDecoration: "underline" }}>
                    {loc.title}
                  </Link>
                  {i < locations.length - 1 ? " · " : ""}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="section section--subtle">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Team"
              title="The people behind the work."
              description="A small, focused team of architects and designers who care deeply about craft, clarity, and getting things right."
            />
          </ScrollReveal>

          <StaggerReveal className="team-grid" staggerDelay={0.08}>
            {teamMembers.map((member) => {
              const inner = (
                <>
                  <div className="team-member__avatar">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        style={{ objectFit: "cover", borderRadius: "50%" }}
                      />
                    ) : (
                      member.name.split(" ").map(n => n[0]).join("")
                    )}
                  </div>
                  <div className="team-member__name">{member.name}</div>
                  <div className="team-member__role">{member.role}</div>
                </>
              );
              return member.slug ? (
                <Link href={`/team/${member.slug}`} className="team-member team-member--linked" key={member.name}>
                  {inner}
                </Link>
              ) : (
                <div className="team-member" key={member.name}>
                  {inner}
                </div>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* Recognition — interactive credentials */}
      <StudioCredentials />

      {/* CTA */}
      <section className="cta">
        <div className="cta__bg" aria-hidden="true" />
        <div className="container">
          <ScrollReveal>
            <h2 className="cta__title">Let&apos;s build something together.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="cta__desc">
              Whether it&apos;s a restaurant, a home, or a commercial space —
              great work starts with a conversation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="cta__actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Let&apos;s talk
              </Link>
              <Link className="btn btn--ghost-light btn--large" href="/work">
                See our work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
