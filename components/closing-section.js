import Link from "next/link";

export function ClosingSection() {
  return (
    <section className="closing">
      <div className="container closing__container">
        <p className="closing__eyebrow">Ready?</p>
        <h2 className="closing__title">
          Tell us what you&apos;re planning.
        </h2>
        <p className="closing__desc">
          We&apos;ll respond within 24 hours.
        </p>
        <Link className="btn btn--inverse btn--large" href="/contact">
          Start a project
        </Link>
      </div>
    </section>
  );
}
