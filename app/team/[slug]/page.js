"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { teamDetails } from "../../../lib/team-data";

/* ═══════════════════════════════════════════════════════════
   TEXT SCRAMBLE — decodes name letter by letter
   ═══════════════════════════════════════════════════════════ */
function TextScramble({ text, className = "", tag: Tag = "span", delay = 0 }) {
  const ref = useRef(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const original = text;
    let frame = 0;
    const totalFrames = 20;
    el.textContent = original.replace(/[^\s]/g, () => chars[Math.floor(Math.random() * chars.length)]);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        el.textContent = original
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i / original.length < progress) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
        if (frame >= totalFrames) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay, chars]);

  return <Tag ref={ref} className={className}>{text}</Tag>;
}

/* ═══════════════════════════════════════════════════════════
   CURSOR SPOTLIGHT — radial glow follows mouse
   ═══════════════════════════════════════════════════════════ */
function CursorSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(87, 0, 239, 0.08), transparent 60%)`;
    };

    parent.addEventListener("mousemove", onMove);
    return () => parent.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className="cursor-spotlight" />;
}

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER — counts up from 0 on scroll
   ═══════════════════════════════════════════════════════════ */
function CountUp({ value, suffix = "", duration = 1.5 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const target = typeof value === "number" ? value : parseInt(value);
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════
   MAGNETIC BUTTON — pulls toward cursor
   ═══════════════════════════════════════════════════════════ */
function MagneticLink({ href, children, className = "" }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <Link
      href={href}
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════
   PARALLAX PORTRAIT
   ═══════════════════════════════════════════════════════════ */
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
      inner.style.transform = `scale(1.1) translate(${x * -20}px, ${y * -20}px)`;
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

/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════════════════════ */
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
      { threshold: 0.1 }
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

/* ═══════════════════════════════════════════════════════════
   JOURNEY MAP — SVG world map with animated path
   ═══════════════════════════════════════════════════════════ */
function JourneyMap({ journey, activeCity }) {
  const pathRef = useRef(null);
  const [pathRevealed, setPathRevealed] = useState(false);

  useEffect(() => {
    const el = pathRef.current?.closest(".person-map");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPathRevealed(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pathD = useMemo(() => {
    if (journey.length < 2) return "";
    return journey
      .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
      .join(" ");
  }, [journey]);

  return (
    <svg className="person-map__svg" viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet">
      {/* Subtle grid */}
      <defs>
        <pattern id="mapGrid" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="100" height="50" fill="url(#mapGrid)" />

      {/* Simplified continent outlines */}
      <g opacity="0.12" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.15">
        {/* North America */}
        <path d="M8,12 Q12,8 20,10 Q25,11 28,16 Q30,20 28,28 Q26,32 22,35 Q18,38 14,40 Q10,38 8,34 Q6,28 8,22 Z" />
        {/* South America */}
        <path d="M22,42 Q26,40 28,44 Q29,48 27,52 Q24,56 20,54 Q18,50 19,46 Z" />
        {/* Europe */}
        <path d="M45,14 Q48,12 52,14 Q54,16 52,20 Q50,22 46,22 Q44,20 45,16 Z" />
        {/* Africa */}
        <path d="M46,26 Q50,24 54,28 Q56,34 54,40 Q50,44 46,42 Q44,36 44,30 Z" />
        {/* Asia */}
        <path d="M54,10 Q62,8 72,12 Q78,16 80,22 Q78,28 72,30 Q66,32 60,28 Q56,24 54,18 Z" />
        {/* Turkey region */}
        <path d="M55,18 Q58,17 62,18 Q60,20 56,20 Z" />
      </g>

      {/* Journey path */}
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="0.2"
        strokeDasharray="200"
        strokeDashoffset={pathRevealed ? "0" : "200"}
        style={{ transition: "stroke-dashoffset 2.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
      />

      {/* City dots */}
      {journey.map((point, i) => (
        <g key={i}>
          {/* Pulse ring */}
          <circle
            cx={point.x}
            cy={point.y}
            r={activeCity === i ? "1.2" : "0.6"}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="0.1"
            opacity={activeCity === i ? "0.5" : "0"}
            style={{ transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {activeCity === i && (
              <animate attributeName="r" values="1.2;2;1.2" dur="2s" repeatCount="indefinite" />
            )}
          </circle>
          {/* Dot */}
          <circle
            cx={point.x}
            cy={point.y}
            r={activeCity === i ? "0.6" : "0.35"}
            fill={activeCity === i ? "var(--accent)" : "rgba(255,255,255,0.6)"}
            style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
          {/* Label */}
          <text
            x={point.x}
            y={point.y - 1.5}
            textAnchor="middle"
            fill={activeCity === i ? "var(--accent)" : "rgba(255,255,255,0.4)"}
            fontSize="1.2"
            fontWeight={activeCity === i ? "700" : "400"}
            fontFamily="inherit"
            style={{ transition: "fill 0.4s", textTransform: "uppercase", letterSpacing: "0.05em" }}
          >
            {point.city}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   HORIZONTAL TIMELINE CARD
   ═══════════════════════════════════════════════════════════ */
function HorizontalCard({ exp, index, isActive, onActivate }) {
  return (
    <div
      className={`htl-card ${isActive ? "htl-card--active" : ""}`}
      onClick={() => onActivate(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onActivate(index)}
    >
      <div className="htl-card__top">
        <span className="htl-card__num">0{index + 1}</span>
        <span className="htl-card__period">{exp.period}</span>
      </div>
      <h3 className="htl-card__company">{exp.company}</h3>
      <p className="htl-card__role">{exp.role}</p>
      <p className="htl-card__location">{exp.location}</p>
      <div className="htl-card__divider" />
      <div className="htl-card__projects">
        {exp.projects.map((p, i) => (
          <div className="htl-card__project" key={i}>
            <span className="htl-card__project-dot" />
            <span>{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════ */
export default function PersonPage() {
  const { slug } = useParams();
  const person = teamDetails[slug];
  const [activeExp, setActiveExp] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const trackRef = useRef(null);

  /* Horizontal scroll on wheel */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e) => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const atStart = scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

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

  /* Map journey index from active experience */
  const journeyCityMap = { 0: 2, 1: 2, 2: 1, 3: 0 }; // HDR→LA, Oyler→LA, Libeskind→NY, MAA→Istanbul
  const activeMapCity = journeyCityMap[activeExp] ?? 0;

  return (
    <main className="person-page">
      {/* ─── HERO (DARK) ─── */}
      <section className="person-hero person-hero--dark">
        <CursorSpotlight />

        {/* Floating architectural grid */}
        <div
          className="person-hero__grid"
          style={{
            transform: `translate(${(mousePos.x - 0.5) * 30}px, ${(mousePos.y - 0.5) * 30}px)`,
          }}
        />

        <div className="person-hero__content">
          <div className="person-hero__text">
            <div className="person-hero__eyebrow">
              <span className="person-hero__dash" />
              <TextScramble text={`${person.title} — ${person.credentials}`} delay={0.3} />
            </div>

            <h1 className="person-hero__name">
              {person.name.split(" ").map((word, i) => (
                <span className="person-hero__name-word" key={i}>
                  <TextScramble text={word} tag="span" delay={0.6 + i * 0.3} className="person-hero__name-inner" />
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

          <div className="person-hero__portrait-wrap">
            <ParallaxPortrait src={person.image} alt={person.name} />
            {/* Orbital ring */}
            <div className="person-hero__orbit" />
          </div>
        </div>

        <div
          className="person-hero__scroll-hint"
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <div className="person-hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="person-stats">
        <div className="person-stats__inner">
          {person.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="person-stats__item">
                <span className="person-stats__value">
                  <CountUp value={stat.value} suffix={stat.suffix || ""} />
                </span>
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

      {/* ─── JOURNEY MAP ─── */}
      <section className="person-map">
        <div className="person-map__container">
          <Reveal>
            <div className="person-map__header">
              <p className="person-map__eyebrow">
                <span className="person-hero__dash" />
                Journey
              </p>
              <h2 className="person-map__title">Three continents. One vision.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <JourneyMap journey={person.journey} activeCity={activeMapCity} />
          </Reveal>
        </div>
      </section>

      {/* ─── HORIZONTAL TIMELINE ─── */}
      <section className="person-htl">
        <div className="person-htl__header">
          <Reveal>
            <p className="person-htl__eyebrow">
              <span className="person-hero__dash" />
              Experience
            </p>
            <h2 className="person-htl__title">A path through world-class studios.</h2>
          </Reveal>
        </div>

        <div className="person-htl__track" ref={trackRef}>
          {person.experiences.map((exp, i) => (
            <HorizontalCard
              key={i}
              exp={exp}
              index={i}
              isActive={activeExp === i}
              onActivate={setActiveExp}
            />
          ))}
        </div>

        {/* Progress dots */}
        <div className="person-htl__dots">
          {person.experiences.map((_, i) => (
            <button
              key={i}
              className={`person-htl__dot ${activeExp === i ? "person-htl__dot--active" : ""}`}
              onClick={() => setActiveExp(i)}
              aria-label={`Experience ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="person-cta person-cta--dark">
        <Reveal>
          <p className="person-cta__text">
            Want to work with {person.name.split(" ")[0]}?
          </p>
          <h2 className="person-cta__title">Let&apos;s start a conversation.</h2>
          <div className="person-cta__actions">
            <MagneticLink href="/contact" className="btn btn--inverse btn--large">
              Get in touch
            </MagneticLink>
            <MagneticLink href="/studio" className="btn btn--ghost-light btn--large">
              Meet the team
            </MagneticLink>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
