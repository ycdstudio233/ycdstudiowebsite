"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "Restaurant & Hospitality",
    href: "/hospitality",
    description:
      "Guest flow, atmosphere, and operational logic — designed to land at once. We handle everything from initial concept through permitting, so your space opens on time and on brand.",
    image: "/projects/lady-bird-boardwalk/Image-4.webp",
    tags: ["Guest experience", "Operational flow", "Permitting"],
  },
  {
    title: "Commercial & Tenant Improvement",
    href: "/commercial",
    description:
      "Feasibility-led upgrades, permit-ready drawings, and creative problem-solving for Bay Area commercial spaces. We navigate Title 24, accessibility, and city review so you don't have to.",
    image: "/projects/neighborhood-commons/Image-1.webp",
    tags: ["Feasibility", "Code compliance", "Permit coordination"],
  },
  {
    title: "Residential",
    href: "/residential",
    description:
      "Homes and remodels shaped around lifestyle, site, and a cleaner line between beautiful ideas and buildable sets. From ADUs to ground-up — designed to feel like you from day one.",
    image: "/projects/sonoma-house/Image-1.webp",
    tags: ["New construction", "Remodels", "ADUs"],
  },
  {
    title: "Multi-Family & Mixed-Use",
    href: "/multi-family",
    description:
      "Housing that strengthens communities — from urban infill apartments to mixed-use developments with ground-floor retail. We navigate density bonuses, CEQA, and community review.",
    image: "/projects/neighborhood-commons/Image-1.webp",
    tags: ["Apartments", "Mixed-use", "Urban infill"],
  },
];

export function ServiceReveal() {
  const [active, setActive] = useState(0);

  return (
    <div className="service-reveal">
      <div className="service-reveal__list" role="tablist">
        {services.map((service, i) => (
          <button
            key={service.title}
            role="tab"
            aria-selected={active === i}
            className={`service-reveal__tab${active === i ? " service-reveal__tab--active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span className="service-reveal__index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="service-reveal__title">{service.title}</span>
            <svg
              className="service-reveal__arrow"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 10h10M11 6l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>

      <div className="service-reveal__panel" role="tabpanel">
        <div className="service-reveal__image-wrap">
          {services.map((service, i) => (
            <img
              key={service.title}
              src={service.image}
              alt={service.title}
              className={`service-reveal__image${active === i ? " service-reveal__image--active" : ""}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        <div className="service-reveal__detail">
          <p className="service-reveal__desc">{services[active].description}</p>
          <div className="service-reveal__tags">
            {services[active].tags.map((tag) => (
              <span className="service-reveal__tag" key={tag}>{tag}</span>
            ))}
          </div>
          <Link href={services[active].href} className="service-reveal__link">
            Learn more
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
