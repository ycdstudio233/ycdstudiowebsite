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
    creator: { "@type": "Organization", name: "YCD Studio", url: "https://ycd.studio" },
    locationCreated: { "@type": "Place", name: project.location },
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

/* ── Build the journey frames ──
   Every image and text block becomes a full-viewport sticky frame.
   As you scroll, each frame slides up and covers the previous one —
   like a deck of cards being revealed.                                */
function buildFrames(project) {
  const images = project.gallery?.slice(1) || [];
  const frames = [];
  const total = images.length;

  // Split points for weaving text between images
  const overviewAt = Math.min(2, total);
  const approachAt = Math.min(overviewAt + 2, total);
  const detailsAt = project.details ? Math.min(approachAt + 2, total) : -1;

  images.forEach((img, i) => {
    frames.push({ kind: "image", image: img });

    const pos = i + 1;
    if (pos === overviewAt) {
      frames.push({ kind: "text", heading: "Overview", body: project.overview });
    } else if (pos === approachAt) {
      frames.push({ kind: "text-dark", heading: "Approach", body: project.approach });
    } else if (pos === detailsAt) {
      frames.push({ kind: "text", heading: "Details", body: project.details });
    }
  });

  // Ensure text appears even if very few images
  const hasOverview = frames.some((f) => f.heading === "Overview");
  const hasApproach = frames.some((f) => f.heading === "Approach");
  const hasDetails = frames.some((f) => f.heading === "Details");
  if (!hasOverview) frames.push({ kind: "text", heading: "Overview", body: project.overview });
  if (!hasApproach) frames.push({ kind: "text-dark", heading: "Approach", body: project.approach });
  if (project.details && !hasDetails) frames.push({ kind: "text", heading: "Details", body: project.details });

  return frames;
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectDetails[slug];
  if (!project) notFound();

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const frames = buildFrames(project);

  return (
    <main className="page-shell">
      <ProjectJsonLd project={project} slug={slug} />

      {/* ── LAYER 1: Clean intro ── */}
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

      {/* ── LAYER 2: The immersive journey — sticky card stack ── */}
      <section className="jstack">
        {frames.map((frame, i) => {
          if (frame.kind === "image") {
            return (
              <div className="jf jf--image" key={i}>
                <img
                  src={frame.image.image}
                  alt={frame.image.label}
                  className="jf__img"
                />
                <span className="jf__label">{frame.image.label}</span>
              </div>
            );
          }

          const isDark = frame.kind === "text-dark";
          return (
            <div className={`jf jf--text ${isDark ? "jf--dark" : ""}`} key={i}>
              <div className="jf__text-inner">
                <h2 className="jf__heading">{frame.heading}</h2>
                <p className="jf__body">{frame.body}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── Videos ── */}
      {project.videos && project.videos.length > 0 && (
        <section className="container" style={{ padding: "80px 0" }}>
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
        </section>
      )}

      {/* ── Navigation ── */}
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
