"use client";
import { useEffect, useRef } from "react";

/**
 * CinemaFilm — Mobile pinned crossfade gallery.
 *
 * Pins a 100vh screen to the viewport. All slides stack absolutely.
 * Scroll position controls crossfade between slides.
 * When all slides are done, the section unpins and page continues.
 */
export function CinemaFilm({ frames }) {
  const runwayRef = useRef(null);
  const screenRef = useRef(null);

  /* Flatten frames into simple slides for mobile */
  const slides = [];
  for (const frame of frames) {
    if (frame.kind === "diptych") {
      slides.push({ kind: "image", image: frame.left });
      slides.push({ kind: "image", image: frame.right });
    } else if (frame.kind === "reveal") {
      slides.push({ kind: "image", image: frame.first });
      slides.push({ kind: "image", image: frame.second });
    } else if (frame.kind === "narrative") {
      slides.push({
        kind: "narrative",
        image: frame.image,
        heading: frame.heading,
        body: frame.body,
      });
    } else {
      slides.push({ kind: "image", image: frame.image });
    }
  }

  useEffect(() => {
    const runway = runwayRef.current;
    const screen = screenRef.current;
    if (!runway || !screen) return;

    const slideEls = screen.querySelectorAll(".cinema-film__slide");
    const n = slideEls.length;
    if (n === 0) return;

    let ticking = false;

    const update = () => {
      const rect = runway.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const totalScroll = rect.height - vh;
      if (totalScroll <= 0) { ticking = false; return; }
      const progress = Math.min(1, scrolled / totalScroll);

      const perSlide = 1 / n;

      slideEls.forEach((el, i) => {
        const slideStart = i * perSlide;
        const slideEnd = (i + 1) * perSlide;

        let opacity = 0;
        const imgEl = el.querySelector(".cinema-film__img");
        const textEl = el.querySelector(".cinema-film__text");

        if (progress >= slideStart && progress < slideEnd) {
          const t = (progress - slideStart) / perSlide;

          /* Crossfade: 25% fade-in, 50% hold, 25% fade-out */
          if (i === 0 && t < 0.25) {
            opacity = 1; /* first slide starts fully visible */
          } else if (t < 0.25) {
            const fadeIn = t / 0.25;
            opacity = fadeIn * fadeIn * (3 - 2 * fadeIn); /* smoothstep */
          } else if (t > 0.75 && i < n - 1) {
            const fadeOut = (t - 0.75) / 0.25;
            opacity = 1 - fadeOut * fadeOut * (3 - 2 * fadeOut);
          } else {
            opacity = 1;
          }

          /* Narrative: text rises + image slides up (slower reveal) */
          if (textEl && imgEl) {
            const textT = Math.max(0, Math.min(1, (t - 0.15) / 0.35));
            const ease = textT * textT * (3 - 2 * textT);
            textEl.style.opacity = ease;
            textEl.style.transform = `translateY(${24 * (1 - ease)}px)`;
            imgEl.style.transform = `translateY(${-30 * ease}px)`;
          }
        } else if (i === n - 1 && progress >= slideEnd) {
          opacity = 1;
          if (textEl) {
            textEl.style.opacity = 1;
            textEl.style.transform = "translateY(0)";
          }
        } else {
          if (textEl) {
            textEl.style.opacity = 0;
            textEl.style.transform = "translateY(20px)";
          }
          if (imgEl) imgEl.style.transform = "translateY(0)";
        }

        el.style.opacity = opacity;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [slides.length]);

  /* More scroll per slide = slower, more cinematic pace */
  const vhPerSlide = 150;
  const runwayVh = slides.length * vhPerSlide + 50;

  return (
    <div
      ref={runwayRef}
      className="cinema-film"
      style={{ height: `${runwayVh}vh` }}
    >
      <div ref={screenRef} className="cinema-film__screen">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="cinema-film__slide"
            style={{ opacity: idx === 0 ? 1 : 0 }}
          >
            {slide.kind === "narrative" ? (
              <>
                <img
                  src={slide.image.image}
                  alt={slide.image.label}
                  className="cinema-film__img cinema-film__img--narrative"
                  loading={idx < 2 ? "eager" : "lazy"}
                />
                <div
                  className="cinema-film__text"
                  style={{ opacity: 0, transform: "translateY(20px)" }}
                >
                  <span className="cinema-film__tag">{slide.heading}</span>
                  <p className="cinema-film__body">{slide.body}</p>
                </div>
              </>
            ) : (
              <>
                <img
                  src={slide.image.image}
                  alt={slide.image.label}
                  className="cinema-film__img"
                  loading={idx < 2 ? "eager" : "lazy"}
                />
                <span className="cinema-film__label">{slide.image.label}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
