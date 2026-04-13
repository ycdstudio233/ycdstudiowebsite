"use client";

import { useState } from "react";
import { publications } from "../lib/site-data";

const awards = [
  {
    name: "Gehry Prize",
    detail: "Awarded by SCI-Arc for outstanding design excellence and pushing the boundaries of architectural thinking.",
    year: "2021",
  },
  {
    name: "Paul W. Welch Jr. Award",
    detail: "Recognized by AIA California for advancing the profession through innovative design and commitment to licensure.",
    year: "2023",
  },
  {
    name: "S.ARCH Conference",
    detail: "Presented at the international architecture conference in Hong Kong for the Growing Green Prototype — a mobile greenhouse funded by Butler University.",
    year: "2017",
  },
  {
    name: "Honor of Awards",
    detail: "Selected for design excellence across multiple project categories in the annual awards program.",
    year: "2024",
  },
];

const recognitionItems = [
  ...awards,
  { name: "divider" },
  ...publications.map((pub) => ({
    name: pub.outlet,
    url: pub.url,
  })),
];

export function RecognitionBand() {
  const [active, setActive] = useState(null);

  return (
    <section className="recognition-band" data-dark>
      <div className="recognition-band__inner">
        <span className="recognition-band__label">Awards &amp; Press</span>
        <div className="recognition-band__items">
          {recognitionItems.map((item, i) =>
            item.name === "divider" ? (
              <span key={i} className="recognition-band__divider" />
            ) : item.url ? (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="recognition-band__item"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <span className="recognition-band__name">{item.name}</span>
                {active === i && (
                  <span className="recognition-band__detail recognition-band__detail--link">
                    View article &#8599;
                  </span>
                )}
              </a>
            ) : (
              <button
                key={item.name}
                className={`recognition-band__item${active === i ? " recognition-band__item--active" : ""}${item.year ? " recognition-band__item--award" : ""}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
              >
                {item.year && <span className="recognition-band__year">{item.year}</span>}
                <span className="recognition-band__name">{item.name}</span>
                {active === i && item.detail && (
                  <span className="recognition-band__detail">
                    {item.detail}
                  </span>
                )}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
