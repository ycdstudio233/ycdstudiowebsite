"use client";

import { useEffect, useRef } from "react";

export function TextReveal({ children, className = "", tag: Tag = "h1", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");
    words.forEach((word, i) => {
      word.style.opacity = "0";
      word.style.transform = "translateY(100%)";
      word.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 0.06}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 0.06}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          words.forEach((word) => {
            word.style.opacity = "1";
            word.style.transform = "translateY(0)";
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  // Split text into words
  const text = typeof children === "string" ? children : "";
  const wordElements = text.split(" ").map((word, i) => (
    <span className="word-wrap" key={i}>
      <span className="word">{word}</span>{" "}
    </span>
  ));

  return (
    <Tag ref={ref} className={`text-reveal ${className}`}>
      {wordElements}
    </Tag>
  );
}
