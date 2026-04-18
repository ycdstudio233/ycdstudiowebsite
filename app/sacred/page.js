import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";

import { RelatedReading } from "../../components/related-links";
export const metadata = {
  title: "Sacred Architect — Churches, Mosques & Worship Spaces",
  description:
    "Sacred and liturgical architecture by YCD Studio. We design churches, cathedrals, mosques, Islamic centers, synagogues, and meditation spaces that honor tradition while serving contemporary congregations. Bay Area architects with national liturgical design experience.",
  keywords:
    "sacred architecture, liturgical design, church architect, mosque architect, cathedral renovation, meditation space design, synagogue architect, contemplative architecture, worship space design, Bay Area church architect",
  openGraph: {
    title: "Sacred & Liturgical Architecture — YCD Studio",
    description:
      "Architecture in service of the sacred. Churches, mosques, synagogues, and contemplative spaces designed with reverence, craft, and deep respect for tradition.",
  },
};

/* ── Data ── */

const scopeItems = [
  {
    title: "Churches & Cathedrals",
    description:
      "New construction and sensitive renovation of Christian worship spaces — from intimate chapels to full-scale cathedrals. We work within liturgical traditions to shape sanctuaries, narthexes, baptisteries, and gathering halls that support both formal worship and the daily life of a parish community.",
  },
  {
    title: "Mosques & Islamic Centers",
    description:
      "Prayer halls oriented toward the qibla, ablution facilities, gender-considerate circulation, and community spaces that serve beyond the five daily prayers. We design Islamic centers as places of worship, learning, and gathering — rooted in the geometric and spatial traditions of Islamic architecture.",
  },
  {
    title: "Meditation & Contemplative Spaces",
    description:
      "Interfaith chapels, Buddhist meditation halls, yoga retreat centers, and secular spaces for reflection. These projects demand a particular sensitivity to silence, material honesty, and the way light moves through a room. The architecture itself becomes a form of quiet invitation.",
  },
];

const principles = [
  {
    title: "Light as Material",
    description:
      "In sacred architecture, light is not merely illumination — it is presence. We design with natural light as a primary material, shaping clerestories, rose windows, light wells, and apertures that mark the passage of hours and seasons. The quality of light in a worship space can transform stone and wood into something transcendent.",
  },
  {
    title: "Acoustic Design",
    description:
      "Sacred spaces must serve the spoken word, congregational singing, choral music, and silence — often in a single room. We collaborate with acoustic consultants from the earliest design stages to balance reverberation time, speech intelligibility, and the enveloping warmth that makes a worship space feel alive with sound rather than echo.",
  },
  {
    title: "Sacred Geometry & Proportion",
    description:
      "The proportional systems that underlie great sacred buildings are not arbitrary — they carry centuries of symbolic and perceptual meaning. We study and apply these principles: the golden section, harmonic ratios, axial procession, and the relationship between human scale and the aspiration toward something larger than ourselves.",
  },
  {
    title: "Accessibility & Universal Welcome",
    description:
      "A sacred space must welcome every member of its community without distinction. We design full accessibility into every project from the outset — not as an afterthought or code minimum, but as a fundamental expression of the values these buildings represent. Ramps, lifts, assistive listening, and clear wayfinding are woven into the architecture itself.",
  },
];

const featuredProjects = [
  {
    slug: "st-marys-cathedral",
    title: "Cathedral of St. Mary",
    type: "Cathedral",
    image: "/projects/st-marys-cathedral/Image-1.webp",
    description:
      "A landmark of mid-century sacred architecture. Our work on the Cathedral of St. Mary engages with one of San Francisco's most iconic worship spaces — a building where structure, light, and liturgical purpose are inseparable.",
  },
  {
    slug: "holy-cross",
    title: "Holy Cross Church",
    type: "Church",
    image: "/projects/holy-cross/Image-1.webp",
    description:
      "A parish church that balances the solemnity of traditional worship with the warmth of a gathering community. The design centers on a sanctuary that draws the eye upward while keeping the congregation connected to one another.",
  },
  {
    slug: "st-marys-grand-forks",
    title: "St. Mary's Church, Grand Forks",
    type: "Church",
    image: "/projects/st-marys-grand-forks/Image-1.webp",
    description:
      "A renovation and restoration that honors the original character of a beloved parish church while addressing modern liturgical needs, accessibility requirements, and the long-term stewardship of a historic structure.",
  },
];

/* ── Page Component ── */

export default function SacredArchitecturePage() {
  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="container">
          <div className="ti-sub-hero__layout">
            <div className="ti-sub-hero__content">
              <ScrollReveal>
                <Link href="/work" className="ti-sub-hero__back">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M15 10H5M9 6l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Our Work
                </Link>
                <div className="ti-sub-hero__eyebrow">Sacred &amp; Liturgical Architecture</div>
                <h1 className="ti-sub-hero__title">
                  Architecture in service<br />
                  of the sacred.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  We design places of worship, contemplation, and gathering —
                  churches, mosques, synagogues, and meditation spaces where
                  architecture serves something greater than itself. Every
                  material, proportion, and beam of light is considered in
                  relation to the community it will hold.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link href="/contact" className="btn btn--primary btn--large">
                    Start a conversation
                  </Link>
                  <Link href="#projects" className="btn btn--secondary btn--large">
                    See our work
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <Image
                  src="/projects/st-marys-cathedral/Image-1.webp"
                  alt="Cathedral of St. Mary — sacred architecture by YCD Studio"
                  width={640}
                  height={480}
                  style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── What We Design ── */}
      <section className="section" id="scope">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Design"
              title="Spaces shaped by faith and intention."
              description="Each tradition carries its own spatial language, liturgical requirements, and relationship between congregation and the divine. We listen before we draw."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.1}>
            {scopeItems.map((item) => (
              <div className="ti-sub-scope-card" key={item.title}>
                <h3 className="ti-sub-scope-card__title">{item.title}</h3>
                <p className="ti-sub-scope-card__desc">{item.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Design Philosophy ── */}
      <section className="section section--dark" id="philosophy">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Design Philosophy"
              title="The principles that guide sacred design."
              description="Sacred architecture carries a responsibility unlike any other building type. These are the commitments we bring to every project."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-challenges" staggerDelay={0.08}>
            {principles.map((principle) => (
              <div className="ti-sub-challenge" key={principle.title}>
                <h3 className="ti-sub-challenge__title">{principle.title}</h3>
                <p className="ti-sub-challenge__desc">{principle.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="section" id="projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Sacred Portfolio"
              title="Recent liturgical projects."
              description="A selection of sacred architecture projects — each one shaped by close collaboration with the communities they serve."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-projects" staggerDelay={0.12}>
            {featuredProjects.map((project) => (
              <div className="ti-sub-project" key={project.slug}>
                <div className="ti-sub-project__visual">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={480}
                    style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                  />
                </div>
                <div className="ti-sub-project__body">
                  <div className="ti-sub-project__meta">
                    <span>{project.type}</span>
                  </div>
                  <h3 className="ti-sub-project__title">{project.title}</h3>
                  <p className="ti-sub-project__desc">{project.description}</p>
                  <Link href={`/work/${project.slug}`} className="ti-sub-project__link">
                    View project
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* Related Reading — cross-linked blog posts for SEO + reader value */}
      <RelatedReading servicePath="/sacred" />

      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Building something sacred?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Let&apos;s talk about how architecture can serve your community&apos;s
              worship and gathering. We approach every sacred project with the
              reverence it deserves — listening first, then designing spaces
              that will endure for generations.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Begin the conversation
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="mailto:info@ycd.studio?subject=Sacred%20Architecture%20Inquiry"
              >
                Email us directly
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
