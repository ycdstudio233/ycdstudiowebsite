import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "../../../components/project-visual";
import { ScrollReveal } from "../../../components/scroll-reveal";
import { CinematicReveal } from "../../../components/cinematic-reveal";
import { ScrollOverlay } from "../../../components/scroll-overlay";
import { RevealPair } from "../../../components/reveal-pair";
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

/* ── Build cinema frames ──
   Four immersive frame types — each with directional scroll reveals:
   • "immersive"  — wide landscapes fill the viewport, slide from left/right
   • "diptych"    — two portraits enter from opposing sides
   • "float"      — solo portrait floats on dark, offset and scaled
   • "narrative"  — text overlaid on an image with gradient veil

   Narrative placement uses two modes:
   • Explicit — gallery images with an `overlay` property become narrative
     frames with that text, guaranteeing text matches the image.
   • Calculated (fallback) — overview/approach/details are distributed at
     evenly-spaced positions when no overlay data exists.                  */
function buildCinemaFrames(project) {
  const images = project.gallery?.slice(1) || [];
  const frames = [];
  if (images.length === 0) return frames;

  /* Detect explicit overlay mode — if ANY image has overlay, skip calculated */
  const hasExplicitOverlays = images.some(img => img.overlay);

  /* Calculated placement (fallback when no overlays) */
  let narrativeAt = [];
  let narratives = [];

  if (!hasExplicitOverlays) {
    const allTexts = [];
    if (project.overview) allTexts.push({ heading: "Overview", body: project.overview });
    if (project.approach) allTexts.push({ heading: "Approach", body: project.approach });
    if (project.details) allTexts.push({ heading: "Details", body: project.details });

    const maxN = Math.min(allTexts.length, Math.floor(images.length / 2));
    narratives = allTexts.slice(0, maxN);
    for (let t = maxN; t < allTexts.length; t++) {
      if (narratives.length > 0) narratives[narratives.length - 1].body += "\n\n" + allTexts[t].body;
    }

    const step = images.length / (narratives.length + 1);
    for (let ni = 0; ni < narratives.length; ni++) {
      let pos = Math.round((ni + 1) * step);
      if (narrativeAt.length > 0) pos = Math.max(pos, narrativeAt[narrativeAt.length - 1] + 2);
      else pos = Math.max(1, pos);
      narrativeAt.push(Math.min(pos, images.length - 1));
    }
  }

  /* Walk through images and assign frame types */
  let dir = 0;
  let nDir = 0; /* separate counter so narratives alternate left/right independently */
  let nIdx = 0;
  let count = 0;
  let i = 0;

  while (i < images.length) {
    const img = images[i];
    const from = dir % 2 === 0 ? "left" : "right";

    /* Explicit overlay → always becomes a narrative frame */
    if (img.overlay) {
      const nFrom = nDir % 2 === 0 ? "left" : "right";
      frames.push({
        kind: "narrative", image: img,
        heading: img.overlay.heading, body: img.overlay.body,
        from: nFrom, align: nFrom,
      });
      nDir++; dir++; i++; count++;
      continue;
    }

    /* Calculated narrative frame at insertion point (fallback) */
    if (!hasExplicitOverlays && nIdx < narratives.length && count === narrativeAt[nIdx]) {
      const nFrom = nDir % 2 === 0 ? "left" : "right";
      frames.push({
        kind: "narrative", image: img,
        heading: narratives[nIdx].heading, body: narratives[nIdx].body,
        from: nFrom, align: nFrom,
      });
      nIdx++; nDir++; dir++; i++; count++;
      continue;
    }

    /* Solo-flagged image — always gets its own float frame */
    if (img.solo) {
      frames.push({ kind: "float", image: img, from });
      dir++; i++; count++;
      continue;
    }

    /* Visual frames */
    if (img.wide) {
      frames.push({ kind: "immersive", image: img, from });
      dir++;
    } else {
      const next = images[i + 1];
      const nextReserved = !hasExplicitOverlays && nIdx < narratives.length && count + 1 === narrativeAt[nIdx];
      const nextHasOverlay = next?.overlay;
      if (next && !next.wide && !next.solo && !nextReserved && !nextHasOverlay) {
        /* Immediate portrait pair → static diptych */
        frames.push({ kind: "diptych", left: img, right: next });
        dir++; i++; count++;
      } else {
        /* Lone portrait — always float, never crop */
        frames.push({ kind: "float", image: img, from });
        dir++;
      }
    }
    i++; count++;
  }

  /* Fallback for remaining calculated narratives */
  if (!hasExplicitOverlays) {
    while (nIdx < narratives.length) {
      const nFrom = nDir % 2 === 0 ? "left" : "right";
      const bg = images[images.length - 1] || project.gallery?.[0];
      if (bg) {
        frames.push({
          kind: "narrative", image: bg,
          heading: narratives[nIdx].heading, body: narratives[nIdx].body,
          from: nFrom, align: nFrom,
        });
      }
      nIdx++; nDir++; dir++;
    }
  }

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

  const frames = buildCinemaFrames(project);


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

      {/* ── LAYER 2: Cinematic journey ── */}
      <section className="cinema">
        {frames.map((frame, idx) => {
          /* ── Immersive: wide landscape, full bleed ── */
          if (frame.kind === "immersive") {
            const coverCls = frame.image.small ? "cinema__cover cinema__cover--small" : "cinema__cover";
            return (
              <div className="cinema__moment" key={idx}>
                <CinematicReveal from={frame.from} className="cinema__fill">
                  <img src={frame.image.image} alt={frame.image.label} className={coverCls} />
                  <span className="cinema__label">{frame.image.label}</span>
                </CinematicReveal>
              </div>
            );
          }

          /* ── Diptych: two portraits, opposing entry ── */
          if (frame.kind === "diptych") {
            const leftCls = frame.left.small ? "cinema__duo-img cinema__duo-img--small" : "cinema__duo-img";
            const rightCls = frame.right.small ? "cinema__duo-img cinema__duo-img--small" : "cinema__duo-img";
            return (
              <div className="cinema__moment cinema__moment--duo" key={idx}>
                <CinematicReveal from="left" className="cinema__duo-cell">
                  <img src={frame.left.image} alt={frame.left.label} className={leftCls} />
                  <span className="cinema__duo-caption">{frame.left.label}</span>
                </CinematicReveal>
                <CinematicReveal from="right" delay={0.12} className="cinema__duo-cell">
                  <img src={frame.right.image} alt={frame.right.label} className={rightCls} />
                  <span className="cinema__duo-caption">{frame.right.label}</span>
                </CinematicReveal>
              </div>
            );
          }

          /* ── Float: solo portrait on dark, full composition ── */
          if (frame.kind === "float") {
            const side = frame.from === "right" ? "float-right" : "float-left";
            return (
              <div className={`cinema__moment cinema__moment--float cinema__moment--${side}`} key={idx}>
                <CinematicReveal from={frame.from} className="cinema__float-inner">
                  <img src={frame.image.image} alt={frame.image.label} className="cinema__float-img" />
                  <span className="cinema__float-label">{frame.image.label}</span>
                </CinematicReveal>
              </div>
            );
          }

          /* ── Reveal: progressive diptych — second image slides in on scroll ── */
          if (frame.kind === "reveal") {
            return (
              <div className="cinema__moment" key={idx}>
                <RevealPair first={frame.first} second={frame.second} from={frame.from} />
              </div>
            );
          }

          /* ── Narrative: image pins → overlay fades → text rises → move on ── */
          if (frame.kind === "narrative") {
            const narrativeCoverCls = frame.image.small ? "cinema__cover cinema__cover--small" : "cinema__cover";
            return (
              <div className="cinema__moment cinema__moment--narrative" key={idx}>
                <div className="cinema__sticky-runway">
                  <CinematicReveal from={frame.from} scale className="cinema__fill cinema__fill--story cinema__sticky-frame">
                    <img src={frame.image.image} alt={frame.image.label} className={narrativeCoverCls} />
                    <ScrollOverlay align={frame.align} heading={frame.heading} body={frame.body} />
                  </CinematicReveal>
                </div>
              </div>
            );
          }

          return null;
        })}
      </section>

      {/* ── Videos ── */}
      {project.videos && project.videos.length > 0 && (
        <section className="container" style={{ padding: "80px 0" }}>
          <div className="project-detail__videos">
            {project.videos.map((video) => (
              <div className="project-detail__video-item" key={video.src}>
                <video className="project-detail__video" src={video.src} controls preload="metadata" playsInline />
                {video.label && <div className="project-detail__video-label">{video.label}</div>}
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
