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

      slideEls.forEach((el, i) => {
        let opacity = 0;
        const imgEl = el.querySelector(".cinema-film__img");
        const textEl = el.querySelector(".cinema-film__text");
        const labelEl = el.querySelector(".cinema-film__label");

        if (n === 1) {
          opacity = 1;
          if (textEl) {
            textEl.style.opacity = 1;
            textEl.style.transform = "translateY(0)";
          }
        } else {
          /* Sequential fade — mostly interactive, brief peak for text.
             42% fade-in → 15% hold (text appears) → 43% fade-out.
             No image overlap. No image push/transform. */
          const perSlide = 1 / n;
          const slideStart = i * perSlide;
          const slideEnd = (i + 1) * perSlide;

          if (progress >= slideStart && progress < slideEnd) {
            const t = (progress - slideStart) / perSlide;

            if (i === 0 && t < 0.42) {
              opacity = 1; /* first slide starts fully visible */
            } else if (t < 0.42) {
              opacity = t / 0.42; /* fade in */
            } else if (t > 0.57 && i < n - 1) {
              opacity = 1 - (t - 0.57) / 0.43; /* fade out */
            } else {
              opacity = 1; /* brief hold — text appears here */
            }

            /* Label: fades in during hold zone */
            if (labelEl) {
              if (t >= 0.42 && t <= 0.57) {
                labelEl.style.opacity = (t - 0.42) / 0.15;
              } else if (t > 0.57) {
                labelEl.style.opacity = 1;
              } else {
                labelEl.style.opacity = 0;
              }
            }

            /* Narrative text: fades in during hold zone, no image push */
            if (textEl) {
              if (t >= 0.42 && t <= 0.57) {
                const textT = (t - 0.42) / 0.15;
                textEl.style.opacity = textT;
                textEl.style.transform = `translateY(${12 * (1 - textT)}px)`;
              } else if (t > 0.57) {
                textEl.style.opacity = 1;
                textEl.style.transform = "translateY(0)";
              } else {
                textEl.style.opacity = 0;
                textEl.style.transform = "translateY(12px)";
              }
            }
          } else if (i === n - 1 && progress >= slideEnd) {
            opacity = 1;
            if (labelEl) labelEl.style.opacity = 1;
            if (textEl) {
              textEl.style.opacity = 1;
              textEl.style.transform = "translateY(0)";
            }
          } else {
            /* Hidden */
            if (labelEl) labelEl.style.opacity = 0;
            if (textEl) {
              textEl.style.opacity = 0;
              textEl.style.transform = "translateY(20px)";
            }
          }
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

  /* Scroll distance per slide — 150vh with sequential fades gives
     ~75vh per fade (longer than old model's ~88vh effective fade) */
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
                <span className="cinema-film__label" style={{ opacity: 0, transform: "translateY(10px)" }}>{slide.image.label}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
