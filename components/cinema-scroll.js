"use client";
import { useEffect, useRef } from "react";

/**
 * Continuous scroll-linked animation for cinema frames.
 *
 * Unlike CinematicReveal (one-shot IntersectionObserver), this tracks
 * the element's progress through the viewport on every frame:
 *
 *   Enter  (0 → 0.20)  — fade in + optional directional slide
 *   Active (0.20 → 0.80) — fully visible
 *   Exit   (0.80 → 1.0) — gentle fade out + upward drift
 *
 * Set `noTransform` for frames that contain position:sticky children
 * (transform on an ancestor breaks sticky positioning).
 */
export function CinemaScroll({
  children,
  from = "bottom",
  className = "",
  noTransform = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.willChange = noTransform ? "opacity" : "transform, opacity";

    let ticking = false;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress: 0 = element just entered viewport bottom
      //           1 = element just exited viewport top
      const total = vh + rect.height;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / total));

      const isMobile = vh < 900;
      let opacity = 1;
      let tx = 0;
      let ty = 0;

      // Tighter phases on mobile for less dead space
      const enterEnd = isMobile ? 0.10 : 0.18;
      const exitStart = isMobile ? 0.90 : 0.82;
      const slideDist = isMobile ? 30 : 60;

      if (progress < enterEnd) {
        // ── Enter phase ──
        const t = progress / enterEnd;
        const ease = t * t * (3 - 2 * t); // smoothstep
        opacity = ease;

        if (!noTransform) {
          const slide = slideDist * (1 - ease);
          if (from === "left") tx = -slide;
          else if (from === "right") tx = slide;
          else ty = slide * 0.6;
        }
      } else if (progress > exitStart) {
        // ── Exit phase ── subtle fade, not full disappear
        const t = (progress - exitStart) / (1 - exitStart);
        const ease = t * t * (3 - 2 * t);
        opacity = 1 - ease * 0.5; // max 50% fade on exit

        if (!noTransform) {
          ty = -16 * ease;
        }
      }

      el.style.opacity = opacity;
      if (!noTransform) {
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }

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
  }, [from, noTransform]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
