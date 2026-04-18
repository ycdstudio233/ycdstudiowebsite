import Link from "next/link";
import { relatedPostsFor, relatedServicesFor } from "../lib/related-links";

// Renders at the bottom of a service page: "Related Reading" with links to curated blog posts.
export function RelatedReading({ servicePath }) {
  const posts = relatedPostsFor(servicePath);
  if (!posts.length) return null;

  return (
    <section className="section related-links related-links--reading">
      <div className="container">
        <div className="related-links__header">
          <span className="related-links__eyebrow">Related Reading</span>
          <h2 className="related-links__title">Dig deeper on this topic.</h2>
        </div>
        <div className="related-links__grid">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="related-links__card">
              <h3 className="related-links__card-title">{post.label}</h3>
              <p className="related-links__card-excerpt">{post.excerpt}</p>
              <span className="related-links__card-arrow">Read article →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Renders at the bottom of a blog post: "Related Services" with links to relevant service pages.
export function RelatedServices({ postSlug }) {
  const services = relatedServicesFor(postSlug);
  if (!services.length) return null;

  return (
    <section className="related-links related-links--services">
      <div className="container">
        <div className="related-links__header">
          <span className="related-links__eyebrow">Related Services</span>
          <h2 className="related-links__title">How YCD Studio can help.</h2>
        </div>
        <div className="related-links__service-list">
          {services.map((svc) => (
            <Link key={svc.href} href={svc.href} className="related-links__service-pill">
              {svc.label}
              <span aria-hidden="true"> →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
