"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export function RotatingHeroImage({ images, interval = 4000 }) {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return (
    <div className="rotating-hero">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`rotating-hero__slide ${i === active ? "rotating-hero__slide--active" : ""}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={1280}
            height={960}
            // sizes is critical: on mobile the hero fills the viewport, on
            // desktop it's the right column (~50%), and we cap display width.
            // Without this, Next.js serves the largest variant on every device.
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            priority={i === 0}
            // Only preload fetchPriority on the first (LCP) image. Others are
            // rendered but only become visible on rotation, so they shouldn't
            // compete for the critical download budget.
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="rotating-hero__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`rotating-hero__dot ${i === active ? "rotating-hero__dot--active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
