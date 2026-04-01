"use client";

import { useRef } from "react";

export function TiltCard({ children, className = "", intensity = 8 }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.02)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
