"use client";

import { useState, useEffect, useCallback } from "react";

const stats = [
  { value: "100+", label: "Clients" },
  { value: "10+", label: "Years" },
  { value: "12+", label: "Awards" },
];

const quotes = [
  {
    text: "YCD brought a level of polish and warmth to our project that we didn't know was possible within our timeline.",
    name: "Abhi E.",
    role: "Client",
  },
  {
    text: "Both imaginative and dependable — exactly the balance you want from a design partner.",
    name: "Matt Herdman",
    role: "CEO, SpaceArc",
  },
  {
    text: "They made the entire process feel effortless. The result speaks for itself.",
    name: "Tamy V.",
    role: "Client",
  },
];

export function TrustBand() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % quotes.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const q = quotes[active];

  return (
    <section className="trust-band">
      <div className="container">
        <div className="trust-band__inner">
          {/* Stats side */}
          <div className="trust-band__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="trust-band__stat">
                <span className="trust-band__stat-value">{stat.value}</span>
                <span className="trust-band__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="trust-band__divider" />

          {/* Quote side */}
          <div className="trust-band__quote-side">
            <blockquote className="trust-band__quote" key={active}>
              &ldquo;{q.text}&rdquo;
            </blockquote>
            <div className="trust-band__attribution">
              <span className="trust-band__name">{q.name}</span>
              <span className="trust-band__role">{q.role}</span>
              <div className="trust-band__dots">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    className={`trust-band__dot${i === active ? " trust-band__dot--active" : ""}`}
                    onClick={() => setActive(i)}
                    aria-label={`Quote ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
