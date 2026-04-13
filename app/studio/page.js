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
} from "../../lib/site-data";

export const metadata = {
  title: "About YCD Studio — Bay Area Architects and Designers",
  description:
    "YCD Studio is a San Francisco Bay Area design firm specializing in expert restaurant tenant improvements and custom commercial renovations for hospitality.",
  openGraph: {
    title: "About YCD Studio — Bay Area Architects and Designers",
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
