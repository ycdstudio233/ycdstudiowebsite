"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { useRouter } from "next/navigation";

const allHeroProjects = [
  {
    slug: "market-tower",
    title: "Market Tower",
    category: "Commercial",
    location: "San Francisco, CA",
    image: "/projects/market-tower/Image-1.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    slug: "neighborhood-commons",
    title: "Neighborhood Commons",
    category: "Multi-Family",
    location: "Bay Area, CA",
    image: "/projects/neighborhood-commons/Image-1.webp",
    gradient: "linear-gradient(135deg, #1e272e 0%, #2d3436 50%, #2c3e50 100%)",
  },
  {
    slug: "lady-bird-boardwalk",
    title: "Lady Bird Lake Boardwalk",
    category: "Commercial",
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
    category: "Multi-Family",
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
    category: "Residential",
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
  {
    slug: "holy-cross",
    title: "Holy Cross Church",
    category: "Sacred",
    location: "West Fargo, ND",
    image: "/projects/holy-cross/Image-1.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2a2040 50%, #3a3058 100%)",
  },
  {
    slug: "coastal-house",
    title: "Coastal House",
    category: "Residential",
    location: "Turkey",
    image: "/projects/coastal-house/Image-2.webp",
    gradient: "linear-gradient(135deg, #0a1a2a 0%, #1a2a3a 50%, #2a3a4a 100%)",
  },
  {
    slug: "piddeg-restaurant",
    title: "PiddeG Restaurant",
    category: "Hospitality",
    location: "Bay Area, CA",
    image: "/projects/piddeg-restaurant/Image-2.webp",
    gradient: "linear-gradient(135deg, #1a2a1a 0%, #2a3a2a 50%, #3a4a3a 100%)",
  },
  {
    slug: "alemany-farmers-market",
    title: "Alemany Farmers Market",
    category: "Commercial",
    location: "San Francisco, CA",
    image: "/projects/alemany-farmers-market/Image-3.webp",
    gradient: "linear-gradient(135deg, #1a1a0a 0%, #2d2d1a 50%, #3d3d2a 100%)",
  },
  {
    slug: "moraga-adu",
    title: "Moraga ADU",
    category: "Residential",
    location: "Moraga, CA",
    image: "/projects/moraga-adu/Image-1.webp",
    gradient: "linear-gradient(135deg, #1a2a2a 0%, #2a3a3a 50%, #3a4a4a 100%)",
  },
  {
    slug: "coastline-residence",
    title: "Coastline Residence",
    category: "Residential",
    location: "Turkey",
    image: "/projects/coastline-residence/Image-2.webp",
    gradient: "linear-gradient(135deg, #0a1a1a 0%, #1a2a2a 50%, #2a3a3a 100%)",
  },
  {
    slug: "cyprus-residence",
    title: "Cyprus Residence",
    category: "Residential",
    location: "Cyprus",
    image: "/projects/cyprus-residence/Image-4.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2a2a3e 50%, #3a3a4e 100%)",
  },
  {
    slug: "tabya-restaurant",
    title: "Tabyabasi Balik Restaurant",
    category: "Hospitality",
    location: "Ordu, Turkey",
    image: "/projects/tabya-restaurant/Image-1.webp",
    gradient: "linear-gradient(135deg, #0a1a2a 0%, #1a2a3a 50%, #2a3a4a 100%)",
  },
  {
    slug: "fatsa-ilica",
    title: "Fatsa Ilica Hotel",
    category: "Hospitality",
    location: "Fatsa, Turkey",
    image: "/projects/fatsa-ilica/Image-5.webp",
    gradient: "linear-gradient(135deg, #0a2a1a 0%, #1a3a2a 50%, #2a4a3a 100%)",
  },
  {
    slug: "aurora-residences",
    title: "Aurora Residences",
    category: "Multi-Family",
    location: "Ankara, Turkey",
    image: "/projects/aurora-residences/Image-2.webp",
    gradient: "linear-gradient(135deg, #1a1a2a 0%, #2a2a3a 50%, #3a3a4a 100%)",
  },
  {
    slug: "north-loft-residences",
    title: "North Loft Residences",
    category: "Multi-Family",
    location: "Turkey",
    image: "/projects/north-loft-residences/Image-5.webp",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #3a3a3a 100%)",
  },
  {
    slug: "st-marys-cathedral",
    title: "Cathedral of St. Mary",
    category: "Sacred",
    location: "Fargo, ND",
    image: "/projects/st-marys-cathedral/Image-1.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2a2040 50%, #3a3058 100%)",
  },
  {
    slug: "st-marys-grand-forks",
    title: "St. Mary's Church",
    category: "Sacred",
    location: "Grand Forks, ND",
    image: "/projects/st-marys-grand-forks/Image-9.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2a2a40 50%, #3a3a58 100%)",
  },
];

export function HeroShowcase() {
  const router = useRouter();
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const [projects, setProjects] = useState(() => allHeroProjects);
  const touchStartX = useRef(0);
  const autoplayRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Shuffle on client mount
  useEffect(() => {
    const arr = [...allHeroProjects];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setProjects(arr);
  }, []);

  // Mobile autoplay — cycle every 4s
  useEffect(() => {
    if (!isMobile) return;
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(autoplayRef.current);
  }, [isMobile]);

  // Desktop mouse tracking
  const onMove = useCallback((e) => {
    if (isMobile) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
    const index = Math.min(projects.length - 1, Math.floor(x * projects.length));
    setActiveIndex(index);
  }, [projects, isMobile]);

  // Mobile swipe
  const onTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    // Pause autoplay on touch
    clearInterval(autoplayRef.current);
  }, []);

  const onTouchEnd = useCallback((e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        // Swipe left → next
        setActiveIndex((prev) => Math.min(prev + 1, projects.length - 1));
      } else {
        // Swipe right → prev
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
    }
    // Restart autoplay
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
  }, [projects]);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Preload images
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
    if (e.target.closest("a, button")) return;
    router.push(`/work/${active.slug}`);
  }, [active, router]);

  return (
    <section
      ref={containerRef}
      className={`hero-showcase${isReady ? " hero-showcase--ready" : ""}`}
      onMouseMove={onMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClick={handleClick}
      style={{ cursor: isMobile ? "default" : "pointer" }}
      data-dark
    >
      {/* Background layers */}
      {projects.map((project, i) => (
        <div
          key={project.slug}
          className={`hero-showcase__bg${i === activeIndex ? " hero-showcase__bg--active" : ""}`}
          style={{ background: project.gradient }}
        >
          {/* LCP fix: the FIRST slide always renders an optimized <Image> so
              Next.js can preload a responsive variant. Subsequent slides keep
              the CSS background-image pattern (they load during rotation, not
              at LCP time — so Next.js optimization is less critical there).
              The mouse-move transform still applies to the parent div, so the
              interaction is preserved. */}
          {i === 0 ? (
            <div
              className="hero-showcase__image"
              style={{
                transform: isMobile
                  ? "scale(1.05)"
                  : `scale(1.05) translate(${(mousePos.x - 0.5) * -15}px, ${(mousePos.y - 0.5) * -10}px)`,
              }}
            >
              <NextImage
                src={project.image}
                alt={project.title}
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                quality={80}
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : (
            loadedImages[project.slug] && (
              <div
                className="hero-showcase__image"
                style={{
                  backgroundImage: `url(${project.image})`,
                  transform: isMobile
                    ? "scale(1.05)"
                    : `scale(1.05) translate(${(mousePos.x - 0.5) * -15}px, ${(mousePos.y - 0.5) * -10}px)`,
                }}
              />
            )
          )}
          <div className="hero-showcase__pattern" />
          {/* Skeleton shapes only for slides 2+ while they're still loading.
              First slide uses <Image priority> so it's never in the "still
              loading" state at LCP time. */}
          {i !== 0 && !loadedImages[project.slug] && (
            <>
              <div
                className="hero-showcase__shape"
                style={{
                  transform: isMobile
                    ? "none"
                    : `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -20}px)`,
                }}
              />
              <div
                className="hero-showcase__shape hero-showcase__shape--secondary"
                style={{
                  transform: isMobile
                    ? "none"
                    : `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 15}px)`,
                }}
              />
            </>
          )}
          <div className="hero-showcase__overlay" />
        </div>
      ))}

      {/* Progress bar */}
      <div className="hero-showcase__progress" aria-hidden="true">
        <div
          className="hero-showcase__progress-fill"
          style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
        />
      </div>

      {/* Studio tagline — top center */}
      <div className="hero-showcase__tagline">
        <span className="hero-showcase__tagline-label">YCD Studio</span>
        <span className="hero-showcase__tagline-text">
          Architecture &amp; Design — San Francisco Bay Area
        </span>
      </div>

      {/* Coordinates — desktop only */}
      {!isMobile && (
        <div className="hero-showcase__coords" aria-hidden="true">
          {(mousePos.x * 100).toFixed(1)}° N — {(mousePos.y * 100).toFixed(1)}° W
        </div>
      )}

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
        <h1 className="hero-showcase__title" key={active.slug}>
          {active.title}
        </h1>
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
