import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { blogPosts as rawPosts } from "../../lib/blog-data";

const blogPosts = [...rawPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

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
  const featured = rest.slice(0, 2);
  const archive = rest.slice(2);

  return (
    <main className="page-shell blog-index">
      <PageHero
        eyebrow="Journal"
        title="Field notes on building better."
        description="Practical guidance on design, permitting, and construction — drawn from real Bay Area projects."
      />

      {/* ── Lead story ── */}
      {lead && (
        <section className="section blog-lead-section">
          <div className="container">
            <ScrollReveal>
              <Link href={`/blog/${lead.slug}`} className="blog-lead">
                <div className="blog-lead__meta">
                  <span className="blog-lead__tag">Latest</span>
                  <span className="blog-lead__category">{lead.category}</span>
                </div>
                <h2 className="blog-lead__title">{lead.title}</h2>
                <div className="blog-lead__body">
                  <p className="blog-lead__excerpt">{lead.excerpt}</p>
                  <div className="blog-lead__sidebar">
                    <div className="blog-lead__sidebar-row">
                      <span className="blog-lead__sidebar-label">Published</span>
                      <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                    </div>
                    <div className="blog-lead__sidebar-row">
                      <span className="blog-lead__sidebar-label">Reading</span>
                      <span>{readingTime(lead)}</span>
                    </div>
                    <span className="blog-lead__cta">
                      Read the full story
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Featured row ── */}
      {featured.length > 0 && (
        <section className="section blog-featured-section">
          <div className="container">
            <div className="blog-section-head">
              <span className="blog-section-head__rule" />
              <h3 className="blog-section-head__title">Recent essays</h3>
            </div>
            <StaggerReveal className="blog-featured" staggerDelay={0.1}>
              {featured.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  className="blog-feature-card"
                  key={post.slug}
                >
                  <div className="blog-feature-card__top">
                    <span className="blog-feature-card__category">{post.category}</span>
                    <span className="blog-feature-card__dot" />
                    <time
                      className="blog-feature-card__date"
                      dateTime={post.date}
                    >
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h4 className="blog-feature-card__title">{post.title}</h4>
                  <p className="blog-feature-card__excerpt">{post.excerpt}</p>
                  <div className="blog-feature-card__footer">
                    <span className="blog-feature-card__read">{readingTime(post)}</span>
                    <span className="blog-feature-card__link">
                      Read
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </StaggerReveal>
          </div>
        </section>
      )}

      {/* ── Archive ── */}
      {archive.length > 0 && (
        <section className="section blog-archive-section">
          <div className="container">
            <div className="blog-section-head">
              <span className="blog-section-head__rule" />
              <h3 className="blog-section-head__title">From the archive</h3>
            </div>
            <ul className="blog-archive">
              {archive.map((post) => (
                <li className="blog-archive__item" key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-archive__link"
                  >
                    <time
                      className="blog-archive__date"
                      dateTime={post.date}
                    >
                      {formatDate(post.date)}
                    </time>
                    <span className="blog-archive__category">{post.category}</span>
                    <span className="blog-archive__title">{post.title}</span>
                    <span className="blog-archive__arrow" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
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
