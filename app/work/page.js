import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { ScrollReveal } from "../../components/scroll-reveal";
import { WorkFilter } from "../../components/work-filter";
import { allProjects } from "../../lib/site-data";

export const metadata = {
  title: "Portfolio — Bay Area Architecture Projects",
  description:
    "Browse YCD Studio's design portfolio across the San Francisco Bay Area, featuring restaurant tenant improvements, retail, and modern residential spaces.",
  openGraph: {
    title: "Portfolio — Bay Area Architecture Projects | YCD Studio",
    description:
      "Browse YCD Studio's design portfolio across the San Francisco Bay Area, featuring restaurant tenant improvements, retail, and modern residential spaces.",
  },
};

export default function WorkPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Work"
        title="Every project is a story of listening, shaping, and building."
        description="A curated selection across commercial, residential, hospitality, and public realm projects — each driven by narrative and built for real outcomes."
      />

      <section className="section work-page__grid">
        <div className="container">
          <WorkFilter projects={allProjects} />
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <ScrollReveal>
            <h2 className="cta__title">See something you like?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="cta__desc">
              We&apos;d love to hear about it. Start a conversation and
              let&apos;s explore what&apos;s possible.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="cta__actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Let&apos;s talk about yours
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
