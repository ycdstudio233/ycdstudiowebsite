import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { blogPosts } from "../../lib/blog-data";

export const metadata = {
  title: "Blog",
  description:
    "Insights on tenant improvements, permitting, ADUs, and residential design across the San Francisco Bay Area — from the YCD Studio team.",
};

function formatDate(dateString) {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Blog"
        title="Insights for building better."
        description="Practical guidance on design, permitting, and construction — drawn from real Bay Area projects."
      />

      <section className="section">
        <div className="container">
          <StaggerReveal className="blog-grid" staggerDelay={0.1}>
            {blogPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                className="blog-card"
                key={post.slug}
              >
                <span className="blog-card__category">{post.category}</span>
                <h2 className="blog-card__title">{post.title}</h2>
                <time className="blog-card__date" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <span className="blog-card__link">
                  Read more
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
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </main>
  );
}
