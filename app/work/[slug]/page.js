import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "../../../components/project-visual";
import { ScrollReveal } from "../../../components/scroll-reveal";
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

/* ── Build the journey sequence ──
   Interleaves images with text sections so the page
   reads as a paced narrative, not a grid dump.          */
function buildJourney(project) {
  const images = project.gallery?.slice(1) || [];
  const sequence = [];

  // Decide split points based on image count
  const total = images.length;
  const overviewAfter = Math.min(2, total);              // show 2 images, then overview
  const approachAfter = Math.min(overviewAfter + 2, total); // 2 more, then approach
  const detailsAfter = project.details
    ? Math.min(approachAfter + 2, total)                  // 2 more, then details
    : total;

  images.forEach((img, i) => {
    // Add image moment
    sequence.push({ type: img.wide ? "moment" : "moment-contained", image: img });

    // Weave in text at the right points
    if (i + 1 === overviewAfter) {
      sequence.push({
        type: "narrative",
        heading: "Overview",
        body: project.overview,
      });
    } else if (i + 1 === approachAfter) {
      sequence.push({
        type: "narrative-dark",
        heading: "Approach",
        body: project.approach,
      });
    } else if (project.details && i + 1 === detailsAfter && detailsAfter > approachAfter) {
      sequence.push({
        type: "narrative",
        heading: "Details",
        body: project.details,
      });
    }
  });

  // If very few images, ensure all text sections appear at the end
  if (overviewAfter >= total) {
    sequence.push({ type: "narrative", heading: "Overview", body: project.overview });
  }
  if (approachAfter >= total && overviewAfter < total) {
    sequence.push({ type: "narrative-dark", heading: "Approach", body: project.approach });
  }
  if (project.details && detailsAfter >= total && approachAfter < total) {
    sequence.push({ type: "narrative", heading: "Details", body: project.details });
  }

  return sequence;
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectDetails[slug];
  if (!project) notFound();

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const journey = buildJourney(project);

  return (
    <main className="page-shell">
      <ProjectJsonLd project={project} slug={slug} />

      {/* ── LAYER 1: The clean intro — unchanged ── */}
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

        {/* Specs — compact row below hero */}
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
      </section>

      {/* ── LAYER 2: The journey — images and text interleaved ── */}
      <section className="journey">
        {journey.map((block, i) => {
          if (block.type === "moment") {
            return (
              <ScrollReveal key={i} duration={1.2} distance={60} threshold={0.08}>
                <div className="journey__moment">
                  <img
                    src={block.image.image}
                    alt={block.image.label}
                    className="journey__moment-img"
                  />
                  <span className="journey__moment-label">{block.image.label}</span>
                </div>
              </ScrollReveal>
            );
          }

          if (block.type === "moment-contained") {
            return (
              <ScrollReveal key={i} duration={1.2} distance={60} threshold={0.08}>
                <div className="journey__moment journey__moment--contained">
                  <img
                    src={block.image.image}
                    alt={block.image.label}
                    className="journey__moment-img"
                  />
                  <span className="journey__moment-label">{block.image.label}</span>
                </div>
              </ScrollReveal>
            );
          }

          if (block.type === "narrative" || block.type === "narrative-dark") {
            const isDark = block.type === "narrative-dark";
            return (
              <div
                key={i}
                className={`journey__narrative ${isDark ? "journey__narrative--dark" : ""}`}
              >
                <div className="container">
                  <ScrollReveal duration={1} distance={30}>
                    <div className="journey__narrative-inner">
                      <h2 className="journey__narrative-heading">{block.heading}</h2>
                      <p className="journey__narrative-body">{block.body}</p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          }

          return null;
        })}
      </section>

      {/* ── Videos (if any) ── */}
      {project.videos && project.videos.length > 0 && (
        <section className="container" style={{ paddingBottom: 80 }}>
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
        </section>
      )}

      {/* ── Project navigation ── */}
      <section className="container">
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
