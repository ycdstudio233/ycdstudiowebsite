"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectVisual } from "./project-visual";

const categories = [
  "All",
  "Residential",
  "Hospitality",
  "Multi-Family",
  "Commercial",
  "Sacred",
];

function getCategory(project) {
  const cat = project.category.toLowerCase();
  if (cat.includes("sacred") || cat.includes("liturgical")) return "Sacred";
  if (cat.includes("hospitality") || cat.includes("restaurant") || cat.includes("hotel")) return "Hospitality";
  if (cat.includes("multi-family")) return "Multi-Family";
  if (cat.includes("commercial") || cat.includes("adaptive") || cat.includes("public") || cat.includes("tenant") || cat.includes("market")) return "Commercial";
  if (cat.includes("residential")) return "Residential";
  return "Commercial";
}

export function WorkFilter({ projects }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => getCategory(p) === active);

  return (
    <>
      <div className="work-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`work-filter__btn${active === cat ? " work-filter__btn--active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid project-grid--three work-filter__grid">
        {filtered.map((project) => (
          <Link
            href={`/work/${project.slug}`}
            className="project-card"
            key={project.slug}
          >
            {project.image ? (
              <div className="project-card__visual" aria-hidden="true">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__img"
                  loading="lazy"
                />
              </div>
            ) : (
              <ProjectVisual
                title={project.title}
                variant={project.variant}
              />
            )}
            <div className="project-card__body">
              <div className="project-card__category">
                {project.category}
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.summary}</p>
              <div className="project-card__meta">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="work-filter__empty">No projects in this category yet. Check back soon.</p>
        )}
      </div>
    </>
  );
}
