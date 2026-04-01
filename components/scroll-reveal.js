"use client";

import { useEffect, useRef } from "react";

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.8,
  threshold = 0.15,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const translate =
      direction === "up"
        ? `translateY(${distance}px)`
        : direction === "down"
        ? `translateY(-${distance}px)`
        : direction === "left"
        ? `translateX(${distance}px)`
        : `translateX(-${distance}px)`;

    el.style.opacity = "0";
    el.style.transform = translate;
    el.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0)";
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, distance, duration, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerReveal({ children, className = "", staggerDelay = 0.1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(container.children);
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(30px)";
      item.style.transition = `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item) => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerDelay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
