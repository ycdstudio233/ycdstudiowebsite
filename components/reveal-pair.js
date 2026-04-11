"use client";
import { useEffect, useRef } from "react";

/**
 * Progressive diptych — first image visible, second slides in on scroll.
 * Both images end up side-by-side at 50/50.
 */
export function RevealPair({ first, second, from }) {
  const rootRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const secondEl = secondRef.current;
    if (!root || !secondEl) return;

    secondEl.style.willChange = "opacity, transform";

    let ticking = false;
    const update = () => {
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = 1 - rect.bottom / (vh + rect.height);

      // Second image: slides in from 20% → 50%
      const s = Math.max(0, Math.min(1, (progress - 0.20) / 0.30));
      secondEl.style.opacity = s;
      // Slide from off-edge toward resting position
      const slideDir = from === "left" ? 1 : -1;
      secondEl.style.transform = `translateX(${80 * (1 - s) * slideDir}px)`;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [from]);

  /* first image on the 'from' side, second on the opposite */
  const firstSide = from;
  const secondSide = from === "left" ? "right" : "left";

  return (
    <div ref={rootRef} className="cinema__reveal">
      <div className={`cinema__reveal-cell cinema__reveal-cell--${firstSide}`}>
        <img src={first.image} alt={first.label} className="cinema__reveal-img" />
      </div>
      <div
        ref={secondRef}
        className={`cinema__reveal-cell cinema__reveal-cell--${secondSide}`}
        style={{ opacity: 0, transform: `translateX(${from === "left" ? "80px" : "-80px"})` }}
      >
        <img src={second.image} alt={second.label} className="cinema__reveal-img" />
      </div>
    </div>
  );
}
