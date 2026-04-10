import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "../../../components/project-visual";
import { ScrollReveal, StaggerReveal } from "../../../components/scroll-reveal";
import { projectDetails } from "../../../lib/project-details";
import { allProjects } from "../../../lib/site-data";

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectDetails[slug];
  if (!project) return {};

  const ogImage = project.gallery?.[0]?.image;

  return {
    title: `${project.title} — ${project.category} in ${project.location}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${project.category} | YCD Studio`,
      description: project.summary,
      ...(ogImage && { images: [{ url: ogImage, alt: project.title }] }),
    },
  };
}

function ProjectJsonLd({ project, slug }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `https://ycd.studio/work/${slug}`,
    creator: {
      "@type": "Organization",
      name: "YCD Studio",
      url: "https://ycd.studio",
    },
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
    dateCreated: project.year,
    genre: project.category,
    ...(project.gallery?.[0]?.image && {
      image: `https://ycd.studio${project.gallery[0].image}`,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectDetails[slug];
  if (!project) notFound();

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <main className="page-shell">
      <ProjectJsonLd project={project} slug={slug} />
      <section className="project-detail container">
        <ScrollReveal>
          <div className="project-detail__nav-bar">
            <Link href="/work" className="project-detail__back">
              All projects
            </Link>
            <span className="project-detail__progress">
              {currentIndex + 1} of {allProjects.length}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="project-detail__header">
            <div>
              <div className="project-detail__category">{project.category}</div>
              <h1 className="project-detail__title">{project.title}</h1>
              <p className="project-detail__summary">{project.summary}</p>
            </div>
            <div className="project-detail__meta-grid">
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Location</span>
                <span className="project-detail__meta-value">{project.location}</span>
              </div>
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Year</span>
                <span className="project-detail__meta-value">{project.year}</span>
              </div>
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Status</span>
                <span className="project-detail__meta-value">{project.status}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Hero image */}
        <ScrollReveal delay={0.2}>
          <div className="project-detail__hero-image">
            {project.gallery?.[0]?.image ? (
              <img
                src={project.gallery[0].image}
                alt={project.title}
                className="project-detail__hero-img"
              />
            ) : (
              <ProjectVisual title={project.title} variant={project.variant} />
            )}
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal>
          <div className="project-detail__content">
            <div>
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </div>
            <div>
              <h2>Approach</h2>
              <p>{project.approach}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Specs */}
        <ScrollReveal>
          <div className="project-detail__specs">
            <div className="project-detail__spec">
              <span className="project-detail__spec-label">Area</span>
              <span className="project-detail__spec-value">{project.area}</span>
            </div>
            <div className="project-detail__spec">
              <span className="project-detail__spec-label">Duration</span>
              <span className="project-detail__spec-value">{project.duration}</span>
            </div>
            <div className="project-detail__spec">
              <span className="project-detail__spec-label">Scope</span>
              <span className="project-detail__spec-value">{project.scope}</span>
            </div>
            <div className="project-detail__spec">
              <span className="project-detail__spec-label">Client</span>
              <span className="project-detail__spec-value">{project.client}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Details */}
        {project.details && (
          <ScrollReveal>
            <div className="project-detail__content">
              <div>
                <h2>Details</h2>
                <p>{project.details}</p>
              </div>
              <div />
            </div>
          </ScrollReveal>
        )}

        {/* Videos */}
        {project.videos && project.videos.length > 0 && (
          <ScrollReveal>
            <div className="project-detail__videos">
              {project.videos.map((video) => (
                <div className="project-detail__video-item" key={video.src}>
                  <video
                    className="project-detail__video"
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                  />
                  {video.label && (
                    <div className="project-detail__video-label">{video.label}</div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Gallery — full-width + asymmetric pairs, skip hero (index 0) */}
        <div className="project-detail__gallery-flow">
          {(() => {
            const items = project.gallery?.slice(1) || [];
            const rows = [];
            let i = 0;
            let pairCount = 0;
            while (i < items.length) {
              if (items[i].wide) {
                rows.push({ type: "full", items: [items[i]] });
                i++;
              } else if (i + 1 < items.length && !items[i + 1].wide) {
                // Alternate asymmetric direction
                const type = pairCount % 2 === 0 ? "asym" : "asym-rev";
                rows.push({ type, items: [items[i], items[i + 1]] });
                i += 2;
                pairCount++;
              } else {
                rows.push({ type: "full", items: [items[i]] });
                i++;
              }
            }
            return rows.map((row, ri) => (
              <ScrollReveal key={ri} delay={ri * 0.08}>
                {row.type === "full" ? (
                  <div className="gallery-row gallery-row--full">
                    <div className="gallery-item gallery-item--full">
                      <img
                        src={row.items[0].image}
                        alt={row.items[0].label}
                        className="gallery-item__img"
                      />
                      <span className="gallery-item__label">{row.items[0].label}</span>
                    </div>
                  </div>
                ) : (
                  <div className={`gallery-row gallery-row--${row.type}`}>
                    <div className={`gallery-item gallery-item--${row.type === "asym" ? "major" : "minor"}`}>
                      <img
                        src={row.items[0].image}
                        alt={row.items[0].label}
                        className="gallery-item__img"
                      />
                      <span className="gallery-item__label">{row.items[0].label}</span>
                    </div>
                    <div className={`gallery-item gallery-item--${row.type === "asym" ? "minor" : "major"}`}>
                      <img
                        src={row.items[1].image}
                        alt={row.items[1].label}
                        className="gallery-item__img"
                      />
                      <span className="gallery-item__label">{row.items[1].label}</span>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            ));
          })()}
        </div>

        {/* Project navigation */}
        <nav className="project-nav">
          <div className="project-nav__item">
            {prevProject ? (
              <Link href={`/work/${prevProject.slug}`}>
                <div className="project-nav__label">&larr; Previous</div>
                <div className="project-nav__title">{prevProject.title}</div>
              </Link>
            ) : (
              <Link href="/work">
                <div className="project-nav__label">&larr; Back</div>
                <div className="project-nav__title">All projects</div>
              </Link>
            )}
          </div>
          <div className="project-nav__item">
            {nextProject ? (
              <Link href={`/work/${nextProject.slug}`}>
                <div className="project-nav__label">Next &rarr;</div>
                <div className="project-nav__title">{nextProject.title}</div>
              </Link>
            ) : (
              <Link href="/work">
                <div className="project-nav__label">View all &rarr;</div>
                <div className="project-nav__title">All projects</div>
              </Link>
            )}
          </div>
        </nav>
      </section>

      {/* CTA */}
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
