import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { blogPosts as rawPosts } from "../../lib/blog-data";

const blogPosts = [...rawPosts].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

export const metadata = {
  title: "Journal — Field Notes on Building Better",
  description:
    "Insights on tenant improvements, permitting, ADUs, and residential design across the San Francisco Bay Area — from the YCD Studio team.",
  openGraph: {
    title: "Journal — YCD Studio",
    description:
      "Insights on tenant improvements, permitting, ADUs, and residential design across the San Francisco Bay Area.",
  },
};

function formatDate(dateString) {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function readingTime(post) {
  const text = (post.content || [])
    .map((b) => (typeof b === "string" ? b : b.text || ""))
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(3, Math.round(words / 220));
  return `${minutes} min read`;
}

export default function BlogPage() {
  const [lead, ...rest] = blogPosts;
  const grid = rest.slice(0, 4);
  const archive = rest.slice(4);

  return (
    <main className="page-shell blog-page">
      {/* ── Compact header ── */}
      <header className="blog-header">
        <div className="container">
          <ScrollReveal>
            <span className="blog-header__eyebrow">Journal</span>
            <h1 className="blog-header__title">Field notes on building better.</h1>
          </ScrollReveal>
        </div>
      </header>

      {/* ── Lead story — full-width image + overlay ── */}
      {lead && (
        <section className="blog-lead-v2">
          <div className="container">
            <ScrollReveal>
              <Link href={`/blog/${lead.slug}`} className="blog-lead-v2__card">
                {lead.heroImage && (
                  <div className="blog-lead-v2__image">
                    <Image
                      src={lead.heroImage}
                      alt={lead.title}
                      width={1200}
                      height={640}
                      priority
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div className="blog-lead-v2__image-overlay" />
                  </div>
                )}
                <div className="blog-lead-v2__content">
                  <div className="blog-lead-v2__meta">
                    <span className="blog-lead-v2__badge">Latest</span>
                    <span className="blog-lead-v2__category">{lead.category}</span>
                    <span className="blog-lead-v2__dot" />
                    <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                  </div>
                  <h2 className="blog-lead-v2__title">{lead.title}</h2>
                  <p className="blog-lead-v2__excerpt">{lead.excerpt}</p>
                  <span className="blog-lead-v2__cta">
                    Read the full story
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Article grid — image cards ── */}
      {grid.length > 0 && (
        <section className="blog-grid-section">
          <div className="container">
            <div className="blog-grid-section__head">
              <span className="blog-grid-section__rule" />
              <h3 className="blog-grid-section__label">Recent essays</h3>
            </div>
            <StaggerReveal className="blog-grid" staggerDelay={0.08}>
              {grid.map((post) => (
                <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                  {post.heroImage && (
                    <div className="blog-card__image">
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        width={600}
                        height={400}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <div className="blog-card__body">
                    <div className="blog-card__meta">
                      <span className="blog-card__category">{post.category}</span>
                      <span className="blog-card__reading">{readingTime(post)}</span>
                    </div>
                    <h4 className="blog-card__title">{post.title}</h4>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <div className="blog-card__footer">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="blog-card__arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </StaggerReveal>
          </div>
        </section>
      )}

      {/* ── Archive list ── */}
      {archive.length > 0 && (
        <section className="blog-archive-v2">
          <div className="container">
            <div className="blog-grid-section__head">
              <span className="blog-grid-section__rule" />
              <h3 className="blog-grid-section__label">From the archive</h3>
            </div>
            <ul className="blog-archive-v2__list">
              {archive.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="blog-archive-v2__row">
                    {post.heroImage && (
                      <div className="blog-archive-v2__thumb">
                        <Image
                          src={post.heroImage}
                          alt={post.title}
                          width={120}
                          height={80}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    )}
                    <div className="blog-archive-v2__info">
                      <span className="blog-archive-v2__category">{post.category}</span>
                      <h4 className="blog-archive-v2__title">{post.title}</h4>
                    </div>
                    <time className="blog-archive-v2__date" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <span className="blog-archive-v2__arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
