import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "../../../components/scroll-reveal";
import { blogPosts, getBlogPost, getAllSlugs } from "../../../lib/blog-data";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateString) {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const wordCount = post.content.reduce((acc, block) => acc + block.text.split(/\s+/).length, 0);
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  const relatedPosts = blogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  const ctaByCategory = {
    "Tenant Improvement": {
      title: "Navigating a tenant improvement?",
      desc: "We handle design, permitting, and energy code compliance for restaurants, retail, and commercial spaces across the Bay Area. One less thing to worry about.",
    },
    "Residential": {
      title: "Planning a home project?",
      desc: "From ADUs to full remodels, we bring the same clarity and care to residential work. Let\u2019s talk about what you have in mind.",
    },
  };
  const cta = ctaByCategory[post.category] || { title: "Have a project in mind?", desc: "We\u2019d love to hear about it. Start a conversation and let\u2019s explore what\u2019s possible." };

  return (
    <main className="page-shell">
      <article className="blog-post section">
        <ScrollReveal>
          <Link href="/blog" className="blog-post__back">
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
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All posts
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="blog-post__category">{post.category}</div>
          <h1 className="blog-post__title">{post.title}</h1>
          <div className="blog-post__meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="blog-post__reading-time">{readingTime} min read</span>
            <span>YCD Studio</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="blog-post__content">
            {post.content.map((block, index) => {
              if (block.type === "h2") {
                return <h2 key={index}>{block.text}</h2>;
              }
              if (block.type === "p") {
                return <p key={index}>{block.text}</p>;
              }
              return null;
            })}
          </div>
        </ScrollReveal>
      </article>

      {relatedPosts.length > 0 && (
        <section className="section">
          <div className="blog-post" style={{ paddingTop: 0 }}>
            <h3 className="blog-post__related-title">Keep reading</h3>
            <div className="blog-post__related-grid">
              {relatedPosts.map(related => (
                <Link href={`/blog/${related.slug}`} className="blog-post__related-card" key={related.slug}>
                  <span className="blog-post__related-category">{related.category}</span>
                  <span className="blog-post__related-name">{related.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <ScrollReveal>
        <section className="cta">
          <div className="container">
            <h2 className="cta__title">{cta.title}</h2>
            <p className="cta__desc">{cta.desc}</p>
            <div className="cta__actions">
              <Link href="/contact" className="btn btn--primary">
                Start a conversation
              </Link>
              <Link href="/work" className="btn btn--outline">
                View our work
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
