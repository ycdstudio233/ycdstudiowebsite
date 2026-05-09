"use client";
import { useEffect, useRef } from "react";

/**
 * Continuous scroll-linked animation for cinema frames.
 *
 * Unlike CinematicReveal (one-shot IntersectionObserver), this tracks
 * the element's progress through the viewport on every frame.
 *
 * TIMING TUNED FOR SNAP (May 2026): the enter phase used to run from
 * 0 → 0.18 of progress (~32 vh of scroll distance to fully fade in),
 * which left visitors mid-scroll looking at a half-faded image and
 * wondering if anything was happening. Compressed to 0 → 0.08 so the
 * image is fully solid by the time it's a third of the way into view.
 * Exit also tightened so the image holds full opacity until it's
 * almost gone.
 *
 *   Enter  (0 → 0.08)  — quick fade in + small directional slide
 *   Active (0.08 → 0.92) — fully visible, no motion
 *   Exit   (0.92 → 1.0) — short fade out + tiny upward drift
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

      // Tightened May 2026 to remove the "gap of action" hesitation users
      // were reporting. Image now reaches full opacity quickly after entering,
      // holds solid through most of its visible life, and only fades on
      // actual exit. Mobile values further tightened on user request — small
      // touch screens need motion to feel even snappier.
      const enterEnd = isMobile ? 0.03 : 0.08;
      const exitStart = isMobile ? 0.97 : 0.92;
      const slideDist = isMobile ? 12 : 32;

      if (progress < enterEnd) {
        // ── Enter phase ──
        const t = progress / enterEnd;
        const ease = t * t * (3 - 2 * t); // smoothstep
        opacity = ease;

        if (!noTransform) {
          const slide = slideDist * (1 - ease);
          if (from === "left") tx = -slide;
          else if (from === "right") tx = slide;
          else ty = slide * 0.5; // reduced from 0.6 — less vertical drift
        }
      } else if (progress > exitStart) {
        // ── Exit phase ── short, subtle fade, not full disappear
        const t = (progress - exitStart) / (1 - exitStart);
        const ease = t * t * (3 - 2 * t);
        opacity = 1 - ease * 0.35; // reduced from 0.5 — less mid-exit dimming

        if (!noTransform) {
          ty = -10 * ease; // reduced from -16 — smaller upward drift
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
