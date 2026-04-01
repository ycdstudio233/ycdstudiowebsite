const variantElements = {
  tower: 3,
  commons: 3,
  boardwalk: 3,
  cottage: 3,
  pixel: 3,
  sonoma: 2,
  spacearc: 3,
};

export function ProjectVisual({ title, variant }) {
  const count = variantElements[variant] ?? 3;

  return (
    <div className="project-card__visual" aria-hidden="true">
      <div className={`pv pv--${variant}`}>
        {Array.from({ length: count }, (_, i) => (
          <span className="pv__el" key={i} />
        ))}
      </div>
      <span className="project-card__visual-label">{title}</span>
    </div>
  );
}
