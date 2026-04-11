import Link from "next/link";
import { ScrollReveal } from "../../../components/scroll-reveal";
import { projectDetails } from "../../../lib/project-details";
import { allProjects } from "../../../lib/site-data";

const slug = "coastal-house";
const project = projectDetails[slug];

export const metadata = {
  title: `${project.title} — ${project.category} in ${project.location}`,
  description: project.summary,
  openGraph: {
    title: `${project.title} — ${project.category} | YCD Studio`,
    description: project.summary,
    images: [{ url: project.gallery[0].image, alt: project.title }],
  },
};

function ProjectJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `https://ycd.studio/work/${slug}`,
    creator: { "@type": "Organization", name: "YCD Studio", url: "https://ycd.studio" },
    locationCreated: { "@type": "Place", name: project.location },
    dateCreated: project.year,
    genre: project.category,
    image: `https://ycd.studio${project.gallery[0].image}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function CoastalHouseEditorial() {
  const g = project.gallery;
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <main>
      <ProjectJsonLd />

      {/* ── Full-bleed hero ── */}
      <section className="ed-hero">
        <img
          src={g[0].image}
          alt={project.title}
          className="ed-hero__img"
        />
        <div className="ed-hero__overlay">
          <div className="ed-hero__content">
            <span className="ed-hero__category">{project.category}</span>
            <h1 className="ed-hero__title">{project.title}</h1>
            <p className="ed-hero__location">{project.location}</p>
          </div>
        </div>
      </section>

      {/* ── Intro section — summary + meta sidebar ── */}
      <section className="ed-intro">
        <div className="container">
          <ScrollReveal>
            <div className="ed-intro__grid">
              <div className="ed-intro__text">
                <p className="ed-intro__summary">{project.summary}</p>
              </div>
              <div className="ed-intro__meta">
                <div className="ed-intro__meta-item">
                  <span className="ed-intro__meta-label">Location</span>
                  <span className="ed-intro__meta-value">{project.location}</span>
                </div>
                <div className="ed-intro__meta-item">
                  <span className="ed-intro__meta-label">Year</span>
                  <span className="ed-intro__meta-value">{project.year}</span>
                </div>
                <div className="ed-intro__meta-item">
                  <span className="ed-intro__meta-label">Status</span>
                  <span className="ed-intro__meta-value">{project.status}</span>
                </div>
                <div className="ed-intro__meta-item">
                  <span className="ed-intro__meta-label">Area</span>
                  <span className="ed-intro__meta-value">{project.area}</span>
                </div>
                <div className="ed-intro__meta-item">
                  <span className="ed-intro__meta-label">Scope</span>
                  <span className="ed-intro__meta-value">{project.scope}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Full-width image break ── */}
      <ScrollReveal>
        <div className="ed-full-image">
          <img src={g[1].image} alt={g[1].label} className="ed-full-image__img" />
        </div>
      </ScrollReveal>

      {/* ── Editorial split: Overview text + image ── */}
      <section className="ed-split">
        <div className="container">
          <ScrollReveal>
            <div className="ed-split__grid">
              <div className="ed-split__text">
                <h2 className="ed-split__heading">Overview</h2>
                <p className="ed-split__body">{project.overview}</p>
              </div>
              <div className="ed-split__image">
                <img src={g[2].image} alt={g[2].label} className="ed-split__img" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Full-width image break ── */}
      <ScrollReveal>
        <div className="ed-full-image">
          <img src={g[3].image} alt={g[3].label} className="ed-full-image__img" />
        </div>
      </ScrollReveal>

      {/* ── Editorial split (reversed): image + Approach text ── */}
      <section className="ed-split ed-split--dark">
        <div className="container">
          <ScrollReveal>
            <div className="ed-split__grid ed-split__grid--reverse">
              <div className="ed-split__image">
                <img src={g[4].image} alt={g[4].label} className="ed-split__img" />
              </div>
              <div className="ed-split__text">
                <h2 className="ed-split__heading">Approach</h2>
                <p className="ed-split__body">{project.approach}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Full-width image — hamam ── */}
      <ScrollReveal>
        <div className="ed-full-image">
          <img src={g[5].image} alt={g[5].label} className="ed-full-image__img" />
          <span className="ed-full-image__caption">{g[5].label}</span>
        </div>
      </ScrollReveal>

      {/* ── Editorial split: Details text + image ── */}
      <section className="ed-split">
        <div className="container">
          <ScrollReveal>
            <div className="ed-split__grid">
              <div className="ed-split__text">
                <h2 className="ed-split__heading">Details</h2>
                <p className="ed-split__body">{project.details}</p>
              </div>
              <div className="ed-split__image">
                <img src={g[6].image} alt={g[6].label} className="ed-split__img" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Remaining gallery — asymmetric pairs ── */}
      <section className="ed-gallery">
        <div className="container">
          <ScrollReveal>
            <div className="ed-gallery__row ed-gallery__row--asym">
              <div className="ed-gallery__item ed-gallery__item--major">
                <img src={g[7].image} alt={g[7].label} className="ed-gallery__img" />
                <span className="ed-gallery__label">{g[7].label}</span>
              </div>
              <div className="ed-gallery__item ed-gallery__item--minor">
                <img src={g[8].image} alt={g[8].label} className="ed-gallery__img" />
                <span className="ed-gallery__label">{g[8].label}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Closing full-bleed image ── */}
      <ScrollReveal>
        <div className="ed-full-image">
          <img src={g[9].image} alt={g[9].label} className="ed-full-image__img" />
          <span className="ed-full-image__caption">{g[9].label}</span>
        </div>
      </ScrollReveal>

      {/* ── Project navigation with thumbnails ── */}
      <section className="ed-nav">
        <div className="container">
          <nav className="ed-nav__grid">
            <div className="ed-nav__item">
              {prevProject ? (
                <Link href={`/work/${prevProject.slug}`} className="ed-nav__link">
                  <span className="ed-nav__direction">&larr; Previous</span>
                  <span className="ed-nav__title">{prevProject.title}</span>
                </Link>
              ) : (
                <Link href="/work" className="ed-nav__link">
                  <span className="ed-nav__direction">&larr; Back</span>
                  <span className="ed-nav__title">All projects</span>
                </Link>
              )}
            </div>
            <div className="ed-nav__item ed-nav__item--center">
              <Link href="/work" className="ed-nav__link">
                <span className="ed-nav__direction">All Projects</span>
              </Link>
            </div>
            <div className="ed-nav__item ed-nav__item--right">
              {nextProject ? (
                <Link href={`/work/${nextProject.slug}`} className="ed-nav__link">
                  <span className="ed-nav__direction">Next &rarr;</span>
                  <span className="ed-nav__title">{nextProject.title}</span>
                </Link>
              ) : (
                <Link href="/work" className="ed-nav__link">
                  <span className="ed-nav__direction">View all &rarr;</span>
                  <span className="ed-nav__title">All projects</span>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <div className="container">
          <ScrollReveal>
            <h2 className="cta__title">Like what you see?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="cta__desc">
              Every project starts with a conversation. We&apos;d love to hear about yours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="cta__actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Let&apos;s talk
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
