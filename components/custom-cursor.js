"use client";

import { useEffect, useRef } from "react";

// Selectors hoisted out of the render/effect path — created once, reused forever.
const DARK_SELECTOR =
  ".section--dark, .cta, .closing, .credentials, .studio-cred, .mobile-nav--open, [data-dark], .hero-showcase, .cinema, .cinema-film, .ti-sub-section--dark, .credentials-ticker, .recognition-band, .trust-band, .person-hero--dark, .person-stats, .person-map, .person-cta--dark";

const INTERACTIVE_SELECTOR =
  "a, button, .project-card, .service-item, .testimonial, .contact-card, .note-card, .btn";

// Run the expensive elementFromPoint / closest() check at most every N rAF ticks.
// At 60fps, DARK_CHECK_INTERVAL=3 -> ~20Hz. Plenty for the visual flip, cheap enough
// to never cause cursor lag.
const DARK_CHECK_INTERVAL = 3;

export function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window) return;

    document.documentElement.classList.add("custom-cursor-active");

    // Hot-path state lives on refs; we mutate classNames directly to avoid
    // React re-renders on every frame.
    const pos = { x: -100, y: -100 };
    const smoothPos = { x: -100, y: -100 };
    let hovering = false;
    let clicking = false;
    let onDark = false;
    let frameCount = 0;

    // ── Mouse position: cheapest possible handler ──
    // Just record x/y. Everything else happens in the rAF loop.
    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const onDown = () => {
      clicking = true;
      applyClasses();
    };
    const onUp = () => {
      clicking = false;
      applyClasses();
    };

    // ── Event delegation for hover ──
    // ONE listener on document instead of N per-element listeners.
    // Replaces both the querySelectorAll loop AND the MutationObserver.
    const onOver = (e) => {
      const t = e.target;
      if (t && t.closest && t.closest(INTERACTIVE_SELECTOR)) {
        if (!hovering) {
          hovering = true;
          applyClasses();
        }
      } else if (hovering) {
        hovering = false;
        applyClasses();
      }
    };

    const applyClasses = () => {
      if (!cursorRef.current) return;
      const classes = ["cursor-crosshair"];
      if (hovering) classes.push("cursor-crosshair--hover");
      if (clicking) classes.push("cursor-crosshair--click");
      if (onDark) classes.push("cursor-crosshair--light");
      cursorRef.current.className = classes.join(" ");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    // ── rAF loop: position + throttled dark-detection ──
    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      smoothPos.x = lerp(smoothPos.x, pos.x, 0.2);
      smoothPos.y = lerp(smoothPos.y, pos.y, 0.2);
      if (cursorRef.current) {
        // translate3d forces GPU compositing — smoother than plain translate.
        cursorRef.current.style.transform = `translate3d(${smoothPos.x}px, ${smoothPos.y}px, 0)`;
      }

      // Expensive check throttled to ~20Hz (every 3rd frame at 60fps).
      frameCount++;
      if (frameCount % DARK_CHECK_INTERVAL === 0) {
        const el = document.elementFromPoint(pos.x, pos.y);
        const isDark = !!(el && el.closest && el.closest(DARK_SELECTOR));
        if (isDark !== onDark) {
          onDark = isDark;
          applyClasses();
        }
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Set initial className
    applyClasses();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor-crosshair" aria-hidden="true">
      <span className="cursor-crosshair__v" />
      <span className="cursor-crosshair__h" />
      <span className="cursor-crosshair__dot" />
    </div>
  );
}
