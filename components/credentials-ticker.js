"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { publications } from "../lib/site-data";

const items = [
  // Awards
  { label: "Awards of the Year", sub: "2024", type: "award" },
  { label: "Paul W. Welch Jr. Award", sub: "AIA California, 2023", type: "award" },
  { label: "Gehry Prize", sub: "SCI-Arc, 2021", type: "award" },
  { label: "S.ARCH Conference", sub: "Residential, 2017", type: "award" },
  // Clients
  { label: "Bikanervala", sub: "Restaurant", type: "client" },
  { label: "Hampton Inn", sub: "Hospitality", type: "client" },
  { label: "Benjamin Moore", sub: "Commercial", type: "client" },
  { label: "Tabyabasi Balik", sub: "Restaurant", type: "client" },
  { label: "SpaceArc", sub: "Experimental", type: "client" },
  { label: "Cousins Maine Lobster", sub: "Restaurant", type: "client" },
  // Publications — from centralized data
  ...publications.map((pub) => ({
    label: pub.outlet,
    sub: "Publication",
    type: "press",
  })),
];

function buildTickerItems(source) {
  const buckets = {
    award: source.filter((item) => item.type === "award"),
    client: source.filter((item) => item.type === "client"),
    press: source.filter((item) => item.type === "press"),
  };
  const order = ["award", "client", "press"];
  const mixed = [];
  let index = 0;

  while (
    index < buckets.award.length ||
    index < buckets.client.length ||
    index < buckets.press.length
  ) {
    order.forEach((type) => {
      const item = buckets[type][index];
      if (item) {
        mixed.push(item);
      }
    });
    index += 1;
  }

  return [...mixed, ...mixed];
}

const ticker = buildTickerItems(items);

const typeColors = {
  award: "#5700EF",
  client: "#0A0A0A",
  press: "#2563EB",
};

const typeLabels = {
  award: "Award",
  client: "Client",
  press: "Press",
};

export function CredentialsTicker() {
  const trackRef = useRef(null);
  const scrollX = useRef(0);
  const speedRef = useRef(0.5); // base speed
  const mouseXRef = useRef(0.5);
  const [hovered, setHovered] = useState(null);
  const rafRef = useRef(null);
  const sectionRef = useRef(null);

  const animate = useCallback(() => {
    if (!trackRef.current) return;
    // Speed based on mouse x position: left = slow/reverse, center = pause, right = fast
    const mapped = (mouseXRef.current - 0.5) * 2; // -1 to 1
    const speed = hovered !== null ? 0 : 0.5 + mapped * 1.5;

    scrollX.current -= speed;

    const track = trackRef.current;
    const halfWidth = track.scrollWidth / 2;
    if (Math.abs(scrollX.current) >= halfWidth) {
      scrollX.current = 0;
    }

    track.style.transform = `translateX(${scrollX.current}px)`;
    rafRef.current = requestAnimationFrame(animate);
  }, [hovered]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const onMouseMove = useCallback((e) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    mouseXRef.current = (e.clientX - rect.left) / rect.width;
  }, []);

  return (
    <section
      className="credentials-ticker"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      data-dark
    >
      <div className="credentials-ticker__header">
        <span className="credentials-ticker__legend">
          <span className="credentials-ticker__dot" style={{ background: typeColors.award }} />
          Awards
        </span>
        <span className="credentials-ticker__legend">
          <span className="credentials-ticker__dot" style={{ background: typeColors.client }} />
          Clients
        </span>
        <span className="credentials-ticker__legend">
          <span className="credentials-ticker__dot" style={{ background: typeColors.press }} />
          Press
        </span>
      </div>

      <div className="credentials-ticker__viewport">
        <div className="credentials-ticker__track" ref={trackRef}>
          {ticker.map((item, i) => (
            <div
              key={i}
              className={`credentials-ticker__item${hovered === i ? " credentials-ticker__item--active" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className="credentials-ticker__badge"
                style={{ background: typeColors[item.type] }}
              >
                {item.label.charAt(0)}
              </span>
              <div className="credentials-ticker__text">
                <span className="credentials-ticker__label">{item.label}</span>
                <span className="credentials-ticker__sub">{item.sub}</span>
              </div>
              <span
                className="credentials-ticker__type"
                style={{ color: typeColors[item.type] }}
              >
                {typeLabels[item.type]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
