"use client";

import { useEffect, useRef } from "react";

export function CinematicReveal({
  children,
  from = "bottom",
  scale = false,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const transforms = [];
    if (from === "left") transforms.push("translateX(-120px)");
    else if (from === "right") transforms.push("translateX(120px)");
    else transforms.push("translateY(80px)");
    if (scale) transforms.push("scale(0.88)");

    el.style.opacity = "0";
    el.style.transform = transforms.join(" ");
    el.style.transition = `opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
    el.style.willChange = "transform, opacity";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0) scale(1)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, scale, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
