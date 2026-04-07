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
            width={640}
            height={480}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            priority={i === 0}
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
