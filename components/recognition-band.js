"use client";

import { useState } from "react";

const recognitionItems = [
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
  { name: "divider" },
  {
    name: "Archinect",
    detail: "Featured for innovative approach to adaptive reuse and mixed-use residential design.",
  },
  {
    name: "ArchDaily",
    detail: "Published project work reaching ArchDaily's global audience of architects and designers.",
  },
  {
    name: "SCI-Arc",
    detail: "Academic and professional recognition from the Southern California Institute of Architecture.",
  },
  {
    name: "Yanko Design",
    detail: "Featured for experimental and forward-thinking design concepts.",
  },
  {
    name: "Interior Design",
    detail: "Highlighted in one of the industry's leading publications for interior and spatial design.",
  },
  {
    name: "Interesting Engineering",
    detail: "Covered for the intersection of engineering innovation and architectural design.",
  },
  {
    name: "Inhabitat",
    detail: "Featured for sustainable design practices and environmentally conscious architecture.",
  },
  {
    name: "Arkitera",
    detail: "Published in Turkey's largest architecture platform, reaching a wide professional audience.",
  },
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

                {active === i && (
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
