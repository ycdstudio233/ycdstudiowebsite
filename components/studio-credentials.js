"use client";

import { useState } from "react";
import Image from "next/image";
import { awards } from "../lib/site-data";
import { teamDetails } from "../lib/team-data";

const publications = teamDetails["burak-celik"].publications;

const clients = [
  { name: "Bikanervala", tag: "Restaurant", image: null },
  {
    name: "Hampton Inn",
    tag: "Hospitality",
    image: "/projects/hampton-by-hilton-ordu/Image-1.webp",
  },
  { name: "Benjamin Moore", tag: "Commercial", image: null },
  {
    name: "Tabyabasi Balik",
    tag: "Restaurant",
    image: "/projects/tabya-restaurant/Image-1.webp",
  },
  {
    name: "SpaceArc",
    tag: "Experimental",
    image: "/projects/spacearc-pod/Image-1.webp",
  },
  { name: "Cousins Maine Lobster", tag: "Restaurant", image: null },
];

export function StudioCredentials() {
  const [hoveredPress, setHoveredPress] = useState(null);
  const [hoveredAward, setHoveredAward] = useState(null);
  const [hoveredClient, setHoveredClient] = useState(null);

  return (
    <section className="studio-cred">
      <div className="container">
        <div className="studio-cred__grid">
          {/* Press column */}
          <div className="studio-cred__col">
            <span className="studio-cred__label">Press</span>
            <div className="studio-cred__press-list">
              {publications.map((pub, i) => (
                <a
                  key={pub.outlet}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`studio-cred__press-item${
                    hoveredPress === i ? " studio-cred__press-item--active" : ""
                  }`}
                  onMouseEnter={() => setHoveredPress(i)}
                  onMouseLeave={() => setHoveredPress(null)}
                >
                  <span className="studio-cred__press-outlet">
                    {pub.outlet}
                  </span>
                  <div className="studio-cred__press-reveal">
                    <span className="studio-cred__press-title">
                      {pub.title}
                    </span>
                    <span className="studio-cred__press-link">
                      Read article
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 12L12 4M12 4H5M12 4v7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Awards column */}
          <div className="studio-cred__col">
            <span className="studio-cred__label">Awards</span>
            <div className="studio-cred__awards-list">
              {awards.map((award, i) => (
                <div
                  key={award.title}
                  className={`studio-cred__award-item${
                    hoveredAward === i
                      ? " studio-cred__award-item--active"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredAward(i)}
                  onMouseLeave={() => setHoveredAward(null)}
                >
                  <span className="studio-cred__award-year">
                    {award.year}
                  </span>
                  <span className="studio-cred__award-title">
                    {award.title}
                  </span>
                  <div className="studio-cred__award-reveal">
                    <span className="studio-cred__award-note">
                      {award.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clients column */}
          <div className="studio-cred__col">
            <span className="studio-cred__label">Clients</span>
            <div className="studio-cred__clients-list">
              {clients.map((client, i) => (
                <div
                  key={client.name}
                  className={`studio-cred__client-item${
                    hoveredClient === i
                      ? " studio-cred__client-item--active"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredClient(i)}
                  onMouseLeave={() => setHoveredClient(null)}
                >
                  <div className="studio-cred__client-row">
                    <span className="studio-cred__client-name">
                      {client.name}
                    </span>
                    <span className="studio-cred__client-tag">
                      {client.tag}
                    </span>
                  </div>
                  {client.image && (
                    <div className="studio-cred__client-thumb">
                      <Image
                        src={client.image}
                        alt={client.name}
                        width={120}
                        height={80}
                        style={{ objectFit: "cover", borderRadius: "4px" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
