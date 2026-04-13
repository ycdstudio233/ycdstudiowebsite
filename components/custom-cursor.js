"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const smoothPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if ("ontouchstart" in window) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Detect dark background under cursor
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const isDark = el.closest(
          ".section--dark, .cta, .closing, .credentials, .studio-cred, .mobile-nav--open, [data-dark], .hero-showcase, .cinema, .cinema-film, .ti-sub-section--dark, .credentials-ticker, .recognition-band, .trust-band, .person-hero--dark, .person-stats, .person-map, .person-cta--dark"
        );
        setOnDark(!!isDark);
      }
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onEnterInteractive = () => setHovering(true);
    const onLeaveInteractive = () => setHovering(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const attachListeners = () => {
      const targets = document.querySelectorAll(
        "a, button, .project-card, .service-item, .testimonial, .contact-card, .note-card, .btn"
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    };

    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      smoothPos.current.x = lerp(smoothPos.current.x, pos.current.x, 0.15);
      smoothPos.current.y = lerp(smoothPos.current.y, pos.current.y, 0.15);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${smoothPos.current.x}px, ${smoothPos.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  const classes = [
    "cursor-crosshair",
    hovering ? "cursor-crosshair--hover" : "",
    clicking ? "cursor-crosshair--click" : "",
    onDark ? "cursor-crosshair--light" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={cursorRef} className={classes} aria-hidden="true">
      <span className="cursor-crosshair__v" />
      <span className="cursor-crosshair__h" />
      <span className="cursor-crosshair__dot" />
    </div>
  );
}
