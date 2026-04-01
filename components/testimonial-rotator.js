"use client";

import { useState, useEffect, useCallback } from "react";

export function TestimonialRotator({ testimonials }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <div
      className="testimonial-rotator"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="testimonial-rotator__quote-wrap">
        <p className="testimonial-rotator__quote" key={active}>
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>
      <div className="testimonial-rotator__meta">
        <div className="testimonial-rotator__author">
          <span className="testimonial-rotator__name">{t.name}</span>
          <span className="testimonial-rotator__role">{t.role}</span>
        </div>
        <div className="testimonial-rotator__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-rotator__dot${i === active ? " testimonial-rotator__dot--active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
