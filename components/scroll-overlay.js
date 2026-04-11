"use client";
import { useEffect, useRef } from "react";

/**
 * Scroll-driven progressive reveal for narrative frames.
 * Sequence: clean image → gradient veil fades in → text rises into view.
 *
 * Uses requestAnimationFrame-throttled scroll listener to map the
 * element's viewport position to opacity/transform values.
 */
export function ScrollOverlay({ align, heading, body }) {
  const rootRef = useRef(null);
  const veilRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const veil = veilRef.current;
    const story = storyRef.current;
    if (!root || !veil || !story) return;

    veil.style.willChange = "opacity";
    story.style.willChange = "opacity, transform";

    const moment = root.closest(".cinema__moment");
    if (!moment) return;

    let ticking = false;
    const update = () => {
      const rect = moment.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = 1 - rect.bottom / (vh + rect.height);

      // Veil: fades in from 30% → 55%
      const v = Math.max(0, Math.min(1, (progress - 0.30) / 0.25));
      veil.style.opacity = v;

      // Text: fades in + rises from 42% → 65%
      const t = Math.max(0, Math.min(1, (progress - 0.42) / 0.23));
      story.style.opacity = t;
      story.style.transform = `translateY(${24 * (1 - t)}px)`;

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
  }, []);

  return (
    <div ref={rootRef} className="cinema__overlay-root">
      <div
        ref={veilRef}
        className={`cinema__veil cinema__veil--${align}`}
        style={{ opacity: 0 }}
      />
      <div
        ref={storyRef}
        className={`cinema__story cinema__story--${align}`}
        style={{ opacity: 0, transform: "translateY(24px)" }}
      >
        <span className="cinema__story-tag">{heading}</span>
        <p className="cinema__story-body">{body}</p>
      </div>
    </div>
  );
}
