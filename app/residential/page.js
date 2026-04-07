import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";

export const metadata = {
  title: "Residential Architecture | Custom Homes, ADUs & Remodels | YCD Studio",
  description:
    "Bay Area residential architecture firm specializing in custom homes, ADUs, JADUs, remodels, and additions. Serving San Francisco, Oakland, San Jose, and the greater Bay Area with full-service design through permitting.",
  keywords: [
    "residential architect Bay Area",
    "ADU architect San Francisco",
    "custom home architect Oakland",
    "JADU California",
    "home remodel architect",
    "kitchen remodel Bay Area",
    "bathroom renovation San Francisco",
    "home addition architect",
    "new construction architect Bay Area",
    "accessory dwelling unit California",
    "Title 24 compliance",
    "Bay Area building permits",
    "residential design San Jose",
    "East Bay architect",
    "South Bay residential architect",
  ],
  openGraph: {
    title: "Residential Architecture | YCD Studio",
    description:
      "Custom homes, ADUs, remodels, and additions across the Bay Area. Full-service architecture from concept through construction.",
    url: "https://ycd.studio/residential",
    siteName: "YCD Studio",
    type: "website",
    images: [
      {
        url: "https://ycd.studio/projects/sonoma-house/Image-1.webp",
        width: 1200,
        height: 630,
        alt: "Residential architecture by YCD Studio",
      },
    ],
  },
};

export default function ResidentialPage() {
  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="ti-sub-hero__back">
          <Link href="/work">&larr; Work</Link>
        </div>
        <div className="ti-sub-hero__text">
          <span className="ti-sub-hero__eyebrow">Residential Architecture</span>
          <h1 className="ti-sub-hero__title">
            Custom homes, ADUs, and renovations.
          </h1>
          <p className="ti-sub-hero__desc">
            YCD Studio designs homes that respond to the way you actually live
            &mdash; balancing light, privacy, and connection to site. From
            accessory dwelling units to ground-up custom residences, we guide
            every project from first sketch through final inspection.
          </p>
        </div>
        <div className="ti-sub-hero__visual">
          <Image
            src="/projects/sonoma-house/Image-1.webp"
            alt="Sonoma Residence by YCD Studio — modern residential architecture in the Bay Area"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* ── What We Design ── */}
      <section className="ti-sub-section">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Scope"
            title="What We Design"
            description="Three practice areas under one roof — each with its own regulatory path, budget logic, and design opportunity."
          />
        </ScrollReveal>

        <StaggerReveal className="ti-sub-scope-grid">
          <div className="ti-sub-scope-card">
            <h3 className="ti-sub-scope-card__title">New Construction</h3>
            <p className="ti-sub-scope-card__desc">
              Ground-up custom homes designed around your site, your program, and
              California&rsquo;s evolving energy code. We handle everything from
              massing studies to Title 24 energy compliance and Cal Green
              documentation.
            </p>
            <ul className="ti-sub-scope-card__details">
              <li>Single-family and multi-family residences</li>
              <li>Site analysis, zoning research &amp; feasibility studies</li>
              <li>Full Title 24 energy modeling and Cal Green compliance</li>
              <li>Structural, MEP, and civil engineering coordination</li>
              <li>Interior material and finish specifications</li>
            </ul>
          </div>

          <div className="ti-sub-scope-card">
            <h3 className="ti-sub-scope-card__title">ADUs &amp; JADUs</h3>
            <p className="ti-sub-scope-card__desc">
              California&rsquo;s ADU laws (AB 2221, SB 897) have made accessory
              dwelling units one of the fastest paths to added living space or
              rental income. We design detached, attached, and garage-conversion
              ADUs that maximize livability within code limits.
            </p>
            <ul className="ti-sub-scope-card__details">
              <li>Detached ADUs up to 1,200 sf (state preemption)</li>
              <li>Garage conversions and JADUs up to 500 sf</li>
              <li>Setback and height analysis under current state law</li>
              <li>Pre-approved ADU plan programs (select jurisdictions)</li>
              <li>Utility separation and sub-metering strategies</li>
            </ul>
          </div>

          <div className="ti-sub-scope-card">
            <h3 className="ti-sub-scope-card__title">
              Remodels &amp; Additions
            </h3>
            <p className="ti-sub-scope-card__desc">
              Kitchen and bath renovations, second-story additions, and
              whole-home remodels that preserve what works and rethink what
              doesn&rsquo;t. We navigate non-conforming setbacks, historic
              overlays, and scope-creep with equal precision.
            </p>
            <ul className="ti-sub-scope-card__details">
              <li>Kitchen, bathroom, and whole-home remodels</li>
              <li>Second-story and rear additions</li>
              <li>Open-plan conversions and structural modifications</li>
              <li>Accessibility upgrades (ADA-adjacent and aging-in-place)</li>
              <li>Historic district and design-review submittals</li>
            </ul>
          </div>
        </StaggerReveal>
      </section>

      {/* ── Our Process ── */}
      <section className="ti-sub-section ti-sub-section--dark">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Process"
            title="Our Process"
            description="A clear, five-phase workflow that keeps timelines honest and surprises to a minimum."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="ti-sub-timeline">
            <div className="ti-sub-timeline__step">
              <span className="ti-sub-timeline__number">01</span>
              <h3 className="ti-sub-timeline__title">
                Discovery &amp; Site Analysis
              </h3>
              <p className="ti-sub-timeline__duration">1 &ndash; 2 weeks</p>
              <p className="ti-sub-timeline__desc">
                We visit the site, review your zoning (setbacks, FAR, lot
                coverage, height limits), confirm utility points, and
                photograph existing conditions. You walk us through how you
                live, what you need, and what the budget looks like. We leave
                with a clear project brief and a realistic scope-of-work
                outline.
              </p>
            </div>

            <div className="ti-sub-timeline__step">
              <span className="ti-sub-timeline__number">02</span>
              <h3 className="ti-sub-timeline__title">Schematic Design</h3>
              <p className="ti-sub-timeline__duration">3 &ndash; 4 weeks</p>
              <p className="ti-sub-timeline__desc">
                Floor plans, sections, and 3D massing studies that test layout
                options against your program and zoning envelope. We present
                two to three directions, refine the preferred scheme, and lock
                in the design intent before moving into documentation.
              </p>
            </div>

            <div className="ti-sub-timeline__step">
              <span className="ti-sub-timeline__number">03</span>
              <h3 className="ti-sub-timeline__title">
                Construction Documents
              </h3>
              <p className="ti-sub-timeline__duration">4 &ndash; 8 weeks</p>
              <p className="ti-sub-timeline__desc">
                Full architectural drawing sets, structural engineering,
                Title 24 energy calculations, and Cal Green checklists.
                We coordinate with structural, mechanical, electrical, and
                plumbing engineers so the permit set is complete on first
                submittal.
              </p>
            </div>

            <div className="ti-sub-timeline__step">
              <span className="ti-sub-timeline__number">04</span>
              <h3 className="ti-sub-timeline__title">Permitting</h3>
              <p className="ti-sub-timeline__duration">
                4 &ndash; 12 weeks (city dependent)
              </p>
              <p className="ti-sub-timeline__desc">
                We submit to the local building department, respond to
                plan-check corrections, and track the application through
                approval. Timeline varies widely: San Francisco averages 8-12
                weeks for a standard residential permit, while some East Bay
                cities clear ADUs in under 4 weeks.
              </p>
            </div>

            <div className="ti-sub-timeline__step">
              <span className="ti-sub-timeline__number">05</span>
              <h3 className="ti-sub-timeline__title">
                Construction Administration
              </h3>
              <p className="ti-sub-timeline__duration">Through completion</p>
              <p className="ti-sub-timeline__desc">
                Site visits, RFI responses, submittal reviews, and change-order
                evaluation. We stay involved from groundbreaking through final
                inspection to make sure what gets built matches what was
                designed.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Cost Guide ── */}
      <section className="ti-sub-section ti-sub-section--dark">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Investment"
            title="Cost Guide"
            description="Bay Area construction costs as of 2025. These ranges cover design fees, engineering, permitting, and construction. Actual costs depend on site conditions, finish level, and municipality."
          />
        </ScrollReveal>

        <StaggerReveal className="ti-sub-cost-grid">
          <div className="ti-sub-cost-card">
            <span className="ti-sub-cost-card__level">ADU / JADU</span>
            <span className="ti-sub-cost-card__range">$200 &ndash; $400 / sf</span>
            <p className="ti-sub-cost-card__includes">
              Detached new-build ADUs typically land at $300-$400/sf; garage
              conversions and JADUs start closer to $200/sf. Includes
              foundation, framing, full MEP, finishes, and Title 24 compliance.
              Impact fees are waived for ADUs under 750 sf in most California
              jurisdictions.
            </p>
            <p className="ti-sub-cost-card__timeline">
              Design through move-in: 8 &ndash; 14 months
            </p>
          </div>

          <div className="ti-sub-cost-card">
            <span className="ti-sub-cost-card__level">
              Kitchen &amp; Bath Remodel
            </span>
            <span className="ti-sub-cost-card__range">$250 &ndash; $500 / sf</span>
            <p className="ti-sub-cost-card__includes">
              Mid-range kitchen remodels start around $80K-$120K; high-end
              kitchens with custom cabinetry and stone run $150K-$250K+.
              Bathroom renovations range from $40K (standard) to $100K+
              (primary suite with wet room). Structural changes, plumbing
              re-routes, and electrical panel upgrades push costs higher.
            </p>
            <p className="ti-sub-cost-card__timeline">
              Design through completion: 4 &ndash; 10 months
            </p>
          </div>

          <div className="ti-sub-cost-card">
            <span className="ti-sub-cost-card__level">
              Custom New Construction
            </span>
            <span className="ti-sub-cost-card__range">
              $400 &ndash; $800+ / sf
            </span>
            <p className="ti-sub-cost-card__includes">
              Ground-up single-family homes in the Bay Area. Standard
              construction with good finishes starts around $400-$500/sf.
              Architecturally detailed homes with premium materials, complex
              grading, or hillside sites routinely reach $600-$800+/sf.
              Soft costs (design, engineering, permits, surveys) typically add
              12-18% on top of hard construction costs.
            </p>
            <p className="ti-sub-cost-card__timeline">
              Design through move-in: 18 &ndash; 30 months
            </p>
          </div>
        </StaggerReveal>
      </section>

      {/* ── Featured Projects ── */}
      <section className="ti-sub-section">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Projects"
            description="Recent residential work across the Bay Area."
          />
        </ScrollReveal>

        <StaggerReveal className="ti-sub-projects">
          <div className="ti-sub-project">
            <div className="ti-sub-project__visual">
              <Image
                src="/projects/the-cottage/Image-1.webp"
                alt="The Cottage — residential project by YCD Studio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="ti-sub-project__meta">
              <h3>The Cottage</h3>
              <p>
                A compact, light-filled dwelling designed to maximize livable
                area on a constrained Bay Area lot. Clean lines, natural
                materials, and a strong indoor-outdoor connection.
              </p>
              <ul>
                <li>Full architectural design &amp; documentation</li>
                <li>Title 24 and Cal Green compliance</li>
                <li>Construction administration through completion</li>
              </ul>
              <Link href="/work/the-cottage">View project &rarr;</Link>
            </div>
          </div>

          <div className="ti-sub-project">
            <div className="ti-sub-project__visual">
              <Image
                src="/projects/sonoma-house/Image-2.webp"
                alt="Sonoma Residence — modern home designed by YCD Studio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="ti-sub-project__meta">
              <h3>Sonoma Residence</h3>
              <p>
                A new-construction residence in Sonoma County that draws on the
                region&rsquo;s agricultural vernacular while meeting modern
                energy and comfort standards.
              </p>
              <ul>
                <li>Ground-up custom home design</li>
                <li>Site-responsive massing and orientation</li>
                <li>Full permit set and engineering coordination</li>
              </ul>
              <Link href="/work/sonoma-house">View project &rarr;</Link>
            </div>
          </div>

          <div className="ti-sub-project">
            <div className="ti-sub-project__visual">
              <Image
                src="/projects/moraga-adu/Image-1.webp"
                alt="Moraga ADU — accessory dwelling unit by YCD Studio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="ti-sub-project__meta">
              <h3>Moraga ADU</h3>
              <p>
                A detached accessory dwelling unit in Moraga that balances
                privacy for occupants with visual continuity to the main
                residence. Designed under California&rsquo;s streamlined ADU
                provisions.
              </p>
              <ul>
                <li>Detached ADU — state preemption pathway</li>
                <li>Zoning analysis and setback optimization</li>
                <li>Utility separation and sub-meter coordination</li>
              </ul>
              <Link href="/work/moraga-adu">View project &rarr;</Link>
            </div>
          </div>
        </StaggerReveal>
      </section>

      {/* ── Bay Area Permitting ── */}
      <section className="ti-sub-section">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Permitting"
            title="Bay Area Permitting"
            description="Every jurisdiction has its own review process, fee structure, and timeline. Here's what to expect in the regions we work most."
          />
        </ScrollReveal>

        <StaggerReveal className="ti-sub-handle-grid">
          <div className="ti-sub-handle-card">
            <h3>San Francisco</h3>
            <p>
              SF&rsquo;s Department of Building Inspection (DBI) runs a
              multi-step review: plan intake, routing to assigned plan checker,
              and often a second review cycle. Standard residential permits
              average 8-12 weeks. Projects in RH-1/RH-2 zones triggering
              Section 311 neighborhood notification add 30+ days. ADUs benefit
              from a dedicated review track, but even streamlined ADU permits
              typically take 6-8 weeks. Historic districts (Article 10/11)
              require separate Planning review.
            </p>
          </div>

          <div className="ti-sub-handle-card">
            <h3>Oakland</h3>
            <p>
              Oakland Building permits residential work through its Planning
              and Building Department. Over-the-counter permits are available
              for minor interior work; standard plan check runs 4-8 weeks.
              Oakland has been proactive on ADU policy and offers fee waivers
              for ADUs under 750 sf. Projects near the Oakland hills may
              trigger Wildfire Urban Interface (WUI) requirements including
              enhanced fire-resistive construction and defensible-space
              landscaping.
            </p>
          </div>

          <div className="ti-sub-handle-card">
            <h3>South Bay</h3>
            <p>
              San Jose, Palo Alto, Mountain View, and surrounding cities each
              maintain independent building departments. San Jose&rsquo;s
              express plan check can clear a residential permit in 3-4 weeks.
              Palo Alto enforces an individual review process with design review
              for homes exceeding a floor-area ratio threshold. Most South Bay
              cities have adopted the 2022 California Building Code with local
              amendments &mdash; Title 24 energy reports and soil reports are
              required on virtually every project.
            </p>
          </div>

          <div className="ti-sub-handle-card">
            <h3>East Bay</h3>
            <p>
              Berkeley, Walnut Creek, Concord, and Contra Costa County
              jurisdictions range from highly efficient to notably slow.
              Berkeley&rsquo;s design-review process for visible additions can
              add months; Walnut Creek and Concord typically process standard
              residential permits in 4-6 weeks. Contra Costa County
              unincorporated areas have their own building division with
              generally faster turnaround. Hillside lots across the East Bay
              often require geotechnical reports and grading permits.
            </p>
          </div>
        </StaggerReveal>
      </section>

      {/* ── CTA ── */}
      <section className="closing">
        <div className="closing__container">
          <ScrollReveal>
            <h2 className="closing__title">Start your residential project</h2>
            <p className="closing__desc">
              Whether you&rsquo;re building an ADU, renovating a kitchen, or
              designing a home from scratch, we&rsquo;ll help you understand
              costs, timelines, and what your site allows &mdash; before you
              commit to anything.
            </p>
            <div className="ti-sub-cta-actions">
              <Link href="/contact" className="btn btn--primary">
                Schedule a consultation
              </Link>
              <Link href="/work" className="btn btn--outline">
                View all projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
