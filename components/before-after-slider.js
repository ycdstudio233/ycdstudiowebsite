"use client";

/**
 * BeforeAfterSlider — interactive draggable comparison between two images.
 *
 * Convention: BEFORE on the left, AFTER on the right. The slider handle
 * defaults to 50%. Drag right to see more AFTER; drag left to see more BEFORE.
 *
 * Both images are real <img> tags so Google Images and AI engines crawl them
 * normally — the slider is just an interactive viewing surface, not a
 * canvas-based composition.
 *
 * Accessibility:
 * - Keyboard support: arrow keys move the handle in 5% increments
 * - ARIA: role="slider" with aria-valuenow/min/max/label
 * - Both images have proper alt text
 * - Respects prefers-reduced-motion (component still works, just no transition)
 */

import { useState, useRef, useCallback, useEffect } from "react";

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeCaption = "Before",
  afterCaption = "After",
  caption,
  aspectRatio,
}) {
  const [position, setPosition] = useState(50); // percent (0-100)
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  // Mouse handlers
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    updateFromClientX(e.clientX);
    e.preventDefault();
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    isDraggingRef.current = true;
    updateFromClientX(e.touches[0].clientX);
  };

  // Bind window-level move/end so dragging works even if the cursor leaves
  // the slider element (common UX expectation for sliders).
  useEffect(() => {
    const onMove = (e) => {
      if (!isDraggingRef.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromClientX(clientX);
    };
    const onEnd = () => {
      isDraggingRef.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [updateFromClientX]);

  // Keyboard support
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - 5));
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + 5));
      e.preventDefault();
    } else if (e.key === "Home") {
      setPosition(0);
    } else if (e.key === "End") {
      setPosition(100);
    }
  };

  return (
    <figure className="before-after-slider">
      <div
        ref={containerRef}
        className="before-after-slider__container"
        style={aspectRatio ? { aspectRatio } : undefined}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* AFTER image — full size on the bottom layer; always visible. */}
        <img
          src={after}
          alt={afterAlt}
          className="before-after-slider__image"
          draggable="false"
          loading="lazy"
          decoding="async"
        />

        {/* BEFORE image — top layer, clipped from the right based on handle
            position. clipPath inset(top right bottom left): clipping the right
            edge progressively reveals AFTER underneath as the user drags the
            handle to the right. */}
        <div
          className="before-after-slider__before-clip"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={before}
            alt={beforeAlt}
            className="before-after-slider__image"
            draggable="false"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Drag handle: vertical line + grip indicator. Keyboard accessible. */}
        <button
          type="button"
          className="before-after-slider__handle"
          style={{ left: `${position}%` }}
          onKeyDown={handleKeyDown}
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          tabIndex={0}
        >
          <span className="before-after-slider__handle-line" aria-hidden="true" />
          <span className="before-after-slider__handle-grip" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5 L3 10 L7 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M13 5 L17 10 L13 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </span>
        </button>

        {/* Corner labels */}
        <span className="before-after-slider__label before-after-slider__label--before">
          {beforeCaption}
        </span>
        <span className="before-after-slider__label before-after-slider__label--after">
          {afterCaption}
        </span>
      </div>

      {caption && (
        <figcaption className="before-after-slider__caption">{caption}</figcaption>
      )}
    </figure>
  );
}
