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

        if (n === 1) {
          opacity = 1;
          if (textEl) {
            textEl.style.opacity = 1;
            textEl.style.transform = "translateY(0)";
          }
        } else {
          /* Continuous crossfade — no dead zones.
             Maps progress [0,1] to n-1 transitions.
             Every scroll pixel changes something on screen. */
          const tp = progress * (n - 1);
          const activeT = Math.min(Math.floor(tp), n - 2);
          const t = Math.min(1, tp - activeT);
          const smooth = t * t * (3 - 2 * t); /* smoothstep */

          if (i === activeT) {
            /* Outgoing slide — fading out */
            opacity = 1 - smooth;
            if (textEl) {
              textEl.style.opacity = 1;
              textEl.style.transform = "translateY(0)";
            }
            if (textEl && imgEl) imgEl.style.transform = "translateY(-30px)";
          } else if (i === activeT + 1) {
            /* Incoming slide — fading in */
            opacity = smooth;
            if (textEl && imgEl) {
              /* Narrative: text rises during second half of crossfade */
              const textT = Math.max(0, Math.min(1, (t - 0.35) / 0.45));
              const ease = textT * textT * (3 - 2 * textT);
              textEl.style.opacity = ease;
              textEl.style.transform = `translateY(${24 * (1 - ease)}px)`;
              imgEl.style.transform = `translateY(${-30 * ease}px)`;
            }
          } else {
            /* Hidden slide */
            if (textEl) {
              textEl.style.opacity = 0;
              textEl.style.transform = "translateY(24px)";
            }
            if (textEl && imgEl) imgEl.style.transform = "translateY(0)";
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

  /* More scroll per slide = slower, more cinematic pace */
  const vhPerSlide = 220;
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
