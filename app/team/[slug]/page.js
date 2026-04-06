"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { teamDetails } from "../../../lib/team-data";

/* ─── Horizontal scroll helper ─── */
function useHorizontalScroll(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [ref]);
}

/* ─── Magnetic element ─── */
function Magnetic({ children, className = "", strength = 0.3 }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
}

/* ─── Parallax image on mouse move ─── */
function ParallaxPortrait({ src, alt }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const inner = el.querySelector(".person-hero__img");
    if (inner) {
      inner.style.transform = `scale(1.08) translate(${x * -15}px, ${y * -15}px)`;
    }
  }, []);

  const onLeave = useCallback(() => {
    const inner = ref.current?.querySelector(".person-hero__img");
    if (inner) inner.style.transform = "scale(1.05) translate(0, 0)";
  }, []);

  return (
    <div
      ref={ref}
      className={`person-hero__portrait ${loaded ? "person-hero__portrait--loaded" : ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <Image
        src={src}
        alt={alt}
        width={480}
        height={480}
        priority
        className="person-hero__img"
        onLoad={() => setLoaded(true)}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

/* ─── Scroll-triggered reveal ─── */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─── Timeline experience card ─── */
function TimelineCard({ exp, index, isActive, onActivate }) {
  return (
    <div
      className={`tl-card ${isActive ? "tl-card--active" : ""}`}
      onClick={() => onActivate(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onActivate(index)}
    >
      <div className="tl-card__index">0{index + 1}</div>
      <h3 className="tl-card__company">{exp.company}</h3>
      <p className="tl-card__role">{exp.role}</p>
      <p className="tl-card__period">{exp.period}</p>
      <p className="tl-card__location">{exp.location}</p>
      <div className={`tl-card__projects ${isActive ? "tl-card__projects--visible" : ""}`}>
        {exp.projects.map((p, i) => (
          <div className="tl-card__project" key={i}>
            <span className="tl-card__project-name">{p.name}</span>
            {p.note && <span className="tl-card__project-note">{p.note}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function PersonPage() {
  const { slug } = useParams();
  const person = teamDetails[slug];
  const [activeExp, setActiveExp] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const timelineRef = useRef(null);

  useHorizontalScroll(timelineRef);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMouse = (e) =>
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  if (!person) {
    return (
      <main className="page-shell">
        <section className="section" style={{ textAlign: "center", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div>
            <h1 style={{ fontSize: "2rem", marginBottom: 16 }}>Team member not found</h1>
            <Link href="/studio" className="btn btn--primary">Back to Studio</Link>
          </div>
        </section>
      </main>
    );
  }

  const bgParallax = scrollY * 0.3;

  return (
    <main className="person-page">
      {/* ─── HERO ─── */}
      <section className="person-hero">
        {/* Floating grid lines */}
        <div
          className="person-hero__grid"
          style={{
            transform: `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)`,
          }}
        />

        <div className="person-hero__content">
          <div className="person-hero__text">
            <div className="person-hero__eyebrow">
              <span className="person-hero__dash" />
              <span>{person.title} — {person.credentials}</span>
            </div>

            <h1 className="person-hero__name">
              {person.name.split(" ").map((word, i) => (
                <span className="person-hero__name-word" key={i}>
                  {word}
                </span>
              ))}
            </h1>

            <p className="person-hero__tagline">{person.tagline}</p>

            <div className="person-hero__meta">
              <span className="person-hero__meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {person.location}
              </span>
            </div>
          </div>

          <Magnetic className="person-hero__portrait-wrap" strength={0.1}>
            <ParallaxPortrait src={person.image} alt={person.name} />
          </Magnetic>
        </div>

        <div
          className="person-hero__scroll-hint"
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <div className="person-hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ─── STATS RIBBON ─── */}
      <section className="person-stats">
        <div className="person-stats__inner">
          {person.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="person-stats__item">
                <span className="person-stats__value">{stat.value}</span>
                <span className="person-stats__label">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── BIO ─── */}
      <section className="person-bio">
        <div className="person-bio__container">
          <Reveal>
            <div className="person-bio__grid">
              <div className="person-bio__col">
                <p className="person-bio__eyebrow">About</p>
                <h2 className="person-bio__heading">Background</h2>
                <p className="person-bio__text">{person.bio}</p>
              </div>
              <div className="person-bio__col">
                <p className="person-bio__eyebrow">Philosophy</p>
                <h2 className="person-bio__heading">Approach</h2>
                <p className="person-bio__text person-bio__text--quote">
                  &ldquo;{person.philosophy}&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── EXPERIENCE TIMELINE ─── */}
      <section className="person-timeline">
        <div className="person-timeline__header">
          <Reveal>
            <p className="person-timeline__eyebrow">
              <span className="person-hero__dash" />
              Experience
            </p>
            <h2 className="person-timeline__title">A path through world-class studios.</h2>
          </Reveal>
        </div>

        <div className="person-timeline__track" ref={timelineRef}>
          <div className="person-timeline__line" />
          {person.experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 0.12} className="tl-card-wrap">
              <TimelineCard
                exp={exp}
                index={i}
                isActive={activeExp === i}
                onActivate={setActiveExp}
              />
            </Reveal>
          ))}
        </div>

        {/* Expanded project detail */}
        <div className="person-timeline__detail">
          <Reveal>
            <div className="person-timeline__detail-inner">
              <div className="person-timeline__detail-header">
                <span className="person-timeline__detail-num">0{activeExp + 1}</span>
                <div>
                  <h3 className="person-timeline__detail-company">
                    {person.experiences[activeExp].company}
                  </h3>
                  <p className="person-timeline__detail-meta">
                    {person.experiences[activeExp].role} &middot; {person.experiences[activeExp].period}
                  </p>
                </div>
              </div>
              <div className="person-timeline__project-grid">
                {person.experiences[activeExp].projects.map((p, i) => (
                  <div className="person-timeline__project-card" key={i}>
                    <span className="person-timeline__project-idx">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="person-timeline__project-name">{p.name}</p>
                      {p.note && (
                        <p className="person-timeline__project-note">{p.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="person-cta">
        <Reveal>
          <p className="person-cta__text">
            Want to work with {person.name.split(" ")[0]}?
          </p>
          <h2 className="person-cta__title">Let&apos;s start a conversation.</h2>
          <div className="person-cta__actions">
            <Link href="/contact" className="btn btn--primary btn--large">
              Get in touch
            </Link>
            <Link href="/studio" className="btn btn--ghost btn--large">
              Meet the team
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
