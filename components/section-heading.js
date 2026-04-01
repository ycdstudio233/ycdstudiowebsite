export function SectionHeading({ eyebrow, title, description, centered }) {
  return (
    <div className={`section__header${centered ? " section__header--centered" : ""}`}>
      {eyebrow && (
        <p className="section__eyebrow">{eyebrow}</p>
      )}
      <h2 className="section__title">{title}</h2>
      {description && (
        <p className="section__description">{description}</p>
      )}
    </div>
  );
}
