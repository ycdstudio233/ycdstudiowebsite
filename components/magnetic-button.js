"use client";

import { useRef } from "react";

export function MagneticButton({ children, className = "", href, ...props }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    const inner = el.querySelector(".magnetic-inner");
    if (inner) inner.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
    const inner = el.querySelector(".magnetic-inner");
    if (inner) inner.style.transform = "translate(0, 0)";
  };

  const Tag = href ? "a" : "button";

  return (
    <Tag
      ref={ref}
      className={`magnetic ${className}`}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      <span className="magnetic-inner">{children}</span>
    </Tag>
  );
}
