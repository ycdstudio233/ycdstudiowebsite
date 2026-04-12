"use client";
import { useEffect, useRef } from "react";

/**
 * Scroll-driven progressive reveal for narrative frames.
 *
 * The image is pinned via position:sticky inside a tall runway.
 * This component tracks how far through the runway the user has
 * scrolled and maps that to overlay + text opacity/transform.
 *
 * Sequence: clean image (pinned) → veil fades in → text rises → unpin.
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

    /* On mobile, text flows below image — no scroll-driven animation needed.
       CSS handles layout + visibility via !important overrides. */
    if (window.innerWidth <= 768) return;

    veil.style.willChange = "opacity";
    story.style.willChange = "opacity, transform";

    /* Track the sticky runway wrapper — its rect.top going negative
       tells us how far through the pinned scroll phase we are. */
    const runway = root.closest(".cinema__sticky-runway");
    if (!runway) return;

    /* Find sibling cover image for subtle parallax shift */
    const coverImg = root.closest(".cinema__fill")?.querySelector(".cinema__cover");
    if (coverImg) coverImg.style.willChange = "transform";

    let ticking = false;
    const update = () => {
      const rect = runway.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = -rect.top;                   // how far past the pin point
      const totalScroll = rect.height - vh;          // total scrollable runway
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

      // Veil: fades in from 15% → 55%
      const v = Math.max(0, Math.min(1, (progress - 0.15) / 0.40));
      veil.style.opacity = v;

      // Text: fades in + rises from 40% → 75%
      const t = Math.max(0, Math.min(1, (progress - 0.40) / 0.35));
      story.style.opacity = t;
      story.style.transform = `translateY(${24 * (1 - t)}px)`;

      // Image: subtle upward drift as text reveals (parallax)
      if (coverImg) {
        const imgShift = -20 * v; // tied to veil, max -20px
        coverImg.style.transform = `translateY(${imgShift}px) scale(${1 + 0.02 * (1 - v)})`;
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
