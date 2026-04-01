import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="not-found">
        <div className="container">
          <span className="not-found__code">404</span>
          <h1 className="not-found__title">This page wandered off.</h1>
          <p className="not-found__text">
            It happens. Let&apos;s get you back to something good.
          </p>
          <div className="not-found__actions">
            <Link className="btn btn--primary btn--large" href="/">
              Back to home
            </Link>
            <Link className="btn btn--secondary btn--large" href="/work">
              See our work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
