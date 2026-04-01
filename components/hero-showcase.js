"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const allHeroProjects = [
  {
    slug: "market-tower",
    title: "Market Tower",
    category: "Commercial / Adaptive Reuse",
    location: "San Francisco, CA",
    image: "/projects/market-tower/Image-1.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    slug: "neighborhood-commons",
    title: "Neighborhood Commons",
    category: "Multi-Family Housing",
    location: "Bay Area, CA",
    image: "/projects/neighborhood-commons/Image-1.webp",
    gradient: "linear-gradient(135deg, #1e272e 0%, #2d3436 50%, #2c3e50 100%)",
  },
  {
    slug: "lady-bird-boardwalk",
    title: "Lady Bird Lake Boardwalk",
    category: "Commercial / Public Realm",
    location: "Austin, TX",
    image: "/projects/lady-bird-boardwalk/Image-1.webp",
    gradient: "linear-gradient(135deg, #0a1628 0%, #0c2461 50%, #1e3799 100%)",
  },
  {
    slug: "the-cottage",
    title: "The Cottage",
    category: "Residential",
    location: "Bay Area, CA",
    image: "/projects/the-cottage/Image-1.webp",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2c2c34 50%, #3d3d3d 100%)",
  },
  {
    slug: "pixel-heights",
    title: "Pixel Heights",
    category: "Mixed-Use Residential",
    location: "San Francisco, CA",
    image: "/projects/pixel-heights/Image-1.webp",
    gradient: "linear-gradient(135deg, #1b1b2f 0%, #2a2a3d 50%, #3e3e52 100%)",
  },
  {
    slug: "sonoma-residence",
    title: "Sonoma Residence",
    category: "Residential",
    location: "Sonoma, CA",
    image: "/projects/sonoma-house/Image-1.webp",
    gradient: "linear-gradient(135deg, #1a2a1a 0%, #2d3a2d 50%, #3d4d3d 100%)",
  },
  {
    slug: "spacearc-pod",
    title: "SpaceArc Pod",
    category: "Experimental",
    location: "Conceptual",
    image: "/projects/spacearc/Image-1.webp",
    gradient: "linear-gradient(135deg, #1e1e2e 0%, #2e2e3e 50%, #4a4a5a 100%)",
  },
  {
    slug: "bird-residence",
    title: "Bird Residence",
    category: "Residential",
    location: "Bay Area, CA",
    image: "/projects/bird-residence/Image-2.webp",
    gradient: "linear-gradient(135deg, #2a1a0a 0%, #3d2e1e 50%, #4a3a2a 100%)",
  },
];

const HERO_COUNT = 5;

export function HeroShowcase() {
  const router = useRouter();
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isReady, setIsReady] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  // Start with first 5 for SSR consistency, then shuffle client-side
  const [projects, setProjects] = useState(() => allHeroProjects.slice(0, HERO_COUNT));

  // Shuffle on client mount only — avoids hydration mismatch
  useEffect(() => {
    const arr = [...allHeroProjects];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setProjects(arr.slice(0, HERO_COUNT));
  }, []);

  const onMove = useCallback((e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });

    const index = Math.min(
      projects.length - 1,
      Math.floor(x * projects.length)
    );
    setActiveIndex(index);
  }, [projects]);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Preload images and track which ones exist
  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [project.slug]: true }));
      };
      img.src = project.image;
    });
  }, [projects]);

  const scrollDown = () => {
    const heroHeight = containerRef.current?.offsetHeight || window.innerHeight;
    window.scrollTo({ top: heroHeight, behavior: "smooth" });
  };

  const active = projects[activeIndex];

  const handleClick = useCallback((e) => {
    // Don't navigate if clicking a link, button, or scroll indicator
    if (e.target.closest("a, button")) return;
    router.push(`/work/${active.slug}`);
  }, [active, router]);

  return (
    <section
      ref={containerRef}
      className={`hero-showcase${isReady ? " hero-showcase--ready" : ""}`}
      onMouseMove={onMove}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      data-dark
    >
      {/* Background layers — one per project */}
      {projects.map((project, i) => (
        <div
          key={project.slug}
          className={`hero-showcase__bg${i === activeIndex ? " hero-showcase__bg--active" : ""}`}
          style={{ background: project.gradient }}
        >
          {/* Project image (if available) */}
          {loadedImages[project.slug] && (
            <div
              className="hero-showcase__image"
              style={{
                backgroundImage: `url(${project.image})`,
                transform: `scale(1.05) translate(${(mousePos.x - 0.5) * -15}px, ${(mousePos.y - 0.5) * -10}px)`,
              }}
            />
          )}
          {/* Architectural grid pattern overlay */}
          <div className="hero-showcase__pattern" />
          {/* Abstract shapes (visible when no image) */}
          {!loadedImages[project.slug] && (
            <>
              <div
                className="hero-showcase__shape"
                style={{
                  transform: `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -20}px)`,
                }}
              />
              <div
                className="hero-showcase__shape hero-showcase__shape--secondary"
                style={{
                  transform: `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 15}px)`,
                }}
              />
            </>
          )}
          {/* Dark overlay for text readability */}
          <div className="hero-showcase__overlay" />
        </div>
      ))}

      {/* Zone indicators */}
      <div className="hero-showcase__zones" aria-hidden="true">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`hero-showcase__zone${i === activeIndex ? " hero-showcase__zone--active" : ""}`}
          />
        ))}
      </div>

      {/* Studio tagline — top center */}
      <div className="hero-showcase__tagline">
        <span className="hero-showcase__tagline-label">YCD Studio</span>
        <span className="hero-showcase__tagline-text">
          Architecture &amp; Design — San Francisco Bay Area
        </span>
      </div>

      {/* Coordinates — top left */}
      <div className="hero-showcase__coords" aria-hidden="true">
        {(mousePos.x * 100).toFixed(1)}° N — {(mousePos.y * 100).toFixed(1)}° W
      </div>

      {/* Counter — top right */}
      <div className="hero-showcase__counter" aria-hidden="true">
        <span className="hero-showcase__counter-current">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="hero-showcase__counter-sep">/</span>
        <span className="hero-showcase__counter-total">
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      {/* Project info — bottom left */}
      <div className="hero-showcase__info">
        <div className="hero-showcase__category">{active.category}</div>
        <h2 className="hero-showcase__title" key={active.slug}>
          {active.title}
        </h2>
        <div className="hero-showcase__location">{active.location}</div>
      </div>

      {/* CTA — bottom right */}
      <div className="hero-showcase__cta">
        <Link href={`/work/${active.slug}`} className="hero-showcase__link">
          View Project
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 10h10M11 6l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Scroll-down indicator */}
      <button
        className="hero-showcase__scroll"
        onClick={scrollDown}
        aria-label="Scroll down"
      >
        <span className="hero-showcase__scroll-line" />
        <span className="hero-showcase__scroll-text">Scroll</span>
      </button>

    </section>
  );
}
