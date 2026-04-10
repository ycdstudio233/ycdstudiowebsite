import Link from "next/link";
import Image from "next/image";
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
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: `${post.seoTitle || post.title} | YCD Studio`,
      description: post.seoDescription || post.excerpt,
      ...(post.heroImage && { images: [{ url: post.heroImage, alt: post.title }] }),
    },
  };
}

function formatDate(dateString) {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ContentBlock({ block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "p":
      return <p>{block.text}</p>;
    case "image":
      return (
        <figure className="blog-post__figure">
          <Image
            src={block.src}
            alt={block.alt}
            width={960}
            height={540}
            style={{ width: "100%", height: "auto", borderRadius: "12px" }}
          />
          {block.caption && (
            <figcaption className="blog-post__caption">{block.caption}</figcaption>
          )}
        </figure>
      );
    case "quote":
      return (
        <blockquote className="blog-post__quote">
          <p>{block.text}</p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="blog-post__list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "link":
      return block.internal ? (
        <div className="blog-post__cta-link">
          <Link href={block.href}>{block.text}</Link>
        </div>
      ) : (
        <div className="blog-post__cta-link">
          <a href={block.href} target="_blank" rel="noopener noreferrer">
            {block.text}
            <span className="blog-post__external-icon">↗</span>
          </a>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const wordCount = post.content.reduce((acc, block) => {
    const text = block.text || block.items?.join(" ") || "";
    return acc + text.split(/\s+/).length;
  }, 0);
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const ctaByCategory = {
    "Tenant Improvement": {
      title: "Navigating a tenant improvement?",
      desc: "We handle design, permitting, and energy code compliance for restaurants, retail, and commercial spaces across the Bay Area.",
    },
    Residential: {
      title: "Planning a home project?",
      desc: "From ADUs to full remodels, we bring the same clarity and care to residential work. Let\u2019s talk about what you have in mind.",
    },
  };
  const cta = ctaByCategory[post.category] || {
    title: "Have a project in mind?",
    desc: "We\u2019d love to hear about it. Start a conversation and let\u2019s explore what\u2019s possible.",
  };

  return (
    <main className="page-shell">
      <article className="blog-article">
        {/* Hero */}
        <div className="blog-article__hero">
          <div className="container">
            <ScrollReveal>
              <Link href="/blog" className="blog-article__back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                All posts
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="blog-article__category">{post.category}</div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="blog-article__title">{post.title}</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="blog-article__meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="blog-article__dot" />
                <span>{readingTime} min read</span>
                <span className="blog-article__dot" />
                <span>YCD Studio</span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Hero Image */}
        {post.heroImage && (
          <ScrollReveal delay={0.2}>
            <div className="blog-article__hero-image">
              <div className="container">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  width={1200}
                  height={600}
                  priority
                  style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                />
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Content + Sidebar */}
        <div className="blog-article__body">
          <div className="container">
            <div className="blog-article__grid">
              {/* Main Content */}
              <ScrollReveal delay={0.2} threshold={0}>
                <div className="blog-article__content">
                  {post.content.map((block, index) => (
                    <ContentBlock key={index} block={block} />
                  ))}

                  {/* Article footer */}
                  <div className="blog-article__footer">
                    <div className="blog-article__footer-line" />
                    <div className="blog-article__footer-meta">
                      <span>Published {formatDate(post.date)}</span>
                      <span className="blog-article__dot" />
                      <span>{readingTime} min read</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Sidebar */}
              <aside className="blog-article__sidebar">
                <ScrollReveal delay={0.3}>
                  <div className="blog-article__sidebar-sticky">
                    {/* Author */}
                    <div className="blog-article__author-card">
                      <div className="blog-article__logo-mark" aria-hidden="true" />
                      <div>
                        <div className="blog-article__author-name">YCD Studio</div>
                        <div className="blog-article__author-role">Bay Area Architecture & Design</div>
                      </div>
                    </div>

                    {/* Related */}
                    {relatedPosts.length > 0 && (
                      <div className="blog-article__related">
                        <h4 className="blog-article__related-label">Related Articles</h4>
                        {relatedPosts.map((related) => (
                          <Link
                            href={`/blog/${related.slug}`}
                            className="blog-article__related-item"
                            key={related.slug}
                          >
                            <span className="blog-article__related-cat">{related.category}</span>
                            <span className="blog-article__related-name">{related.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Quick CTA */}
                    <div className="blog-article__sidebar-cta">
                      <p>Have a similar project?</p>
                      <Link href="/contact" className="btn btn--primary btn--small">
                        Get in touch
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {/* Bottom CTA */}
      <ScrollReveal>
        <section className="cta">
          <div className="container">
            <h2 className="cta__title">{cta.title}</h2>
            <p className="cta__desc">{cta.desc}</p>
            <div className="cta__actions">
              <Link href="/contact" className="btn btn--inverse">
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
