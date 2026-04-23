import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../../components/scroll-reveal";
import { FaqAccordion } from "../../../components/faq-accordion";
import { RelatedReading } from "../../../components/related-links";
import { relatedPostsFor } from "../../../lib/related-links";

export const metadata = {
  title: "Oakland ADU Architect — Design, Permits & Cost",
  description:
    "Oakland ADU architect specializing in detached, attached, and garage-conversion ADUs. Oakland's fee-waived permit process, streamlined review, and 2026 cost ranges. Serving Oakland, Berkeley, Moraga, and the greater East Bay.",
  keywords:
    "Oakland ADU architect, ADU architect Oakland, accessory dwelling unit Oakland, East Bay ADU, Oakland ADU permit, Oakland ADU cost, detached ADU Oakland, garage conversion Oakland, ADU plans Oakland, Berkeley ADU architect, Moraga ADU architect, Contra Costa ADU architect",
  alternates: {
    canonical: "https://ycd.studio/oakland/adu",
  },
  openGraph: {
    title: "Oakland ADU Architect — Design, Permits & Cost | YCD Studio",
    description:
      "Oakland ADU architect specializing in detached, attached, and garage-conversion ADUs. Oakland's fee-waived permit process, streamlined review, and 2026 cost ranges.",
    url: "https://ycd.studio/oakland/adu",
    siteName: "YCD Studio",
    type: "website",
    images: [
      {
        url: "https://ycd.studio/projects/moraga-adu/Image-1.webp",
        width: 1200,
        height: 630,
        alt: "Oakland ADU architecture by YCD Studio",
      },
    ],
  },
};

/* ── Service schema for LocalBusiness+Service signal. Helps Google connect
     this page to "ADU architect Oakland" + related local queries. */
function OaklandAduJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Accessory Dwelling Unit Architecture",
    name: "Oakland ADU Architect",
    description:
      "Full-service architecture for detached, attached, and garage-conversion ADUs in Oakland and the greater East Bay. Zoning analysis, permit coordination, Title 24 compliance, and construction administration.",
    provider: {
      "@type": "ArchitecturalFirm",
      name: "YCD Studio",
      url: "https://ycd.studio",
      telephone: "+1-415-300-0057",
      email: "info@ycd.studio",
      areaServed: [
        { "@type": "City", name: "Oakland" },
        { "@type": "City", name: "Berkeley" },
        { "@type": "City", name: "Moraga" },
        { "@type": "City", name: "Walnut Creek" },
        { "@type": "City", name: "Concord" },
        { "@type": "AdministrativeArea", name: "Contra Costa County" },
      ],
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 37.8044, longitude: -122.2711 },
      geoRadius: "40000",
    },
    offers: {
      "@type": "Offer",
      description: "Free 30-minute ADU feasibility consultation",
      price: "0",
      priceCurrency: "USD",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── Data — Oakland-specific ADU content ─────────────────────────────── */

const aduTypes = [
  {
    title: "Detached ADU",
    description:
      "A fully independent unit built separately from the primary residence — up to 1,200 square feet under California's state preemption (AB 2221 / SB 897). Most private, most flexible, typically the highest market rent. Oakland's streamlined review process clears detached ADU permits faster than most Bay Area jurisdictions.",
    details: [
      "Up to 1,200 sq ft (state-protected size)",
      "Full kitchen, bathroom, private entry",
      "Independent utilities and address",
      "Strongest rental income potential",
    ],
    cost: "$300–$400/sf",
    timeline: "10–14 months from design to move-in",
  },
  {
    title: "Attached ADU",
    description:
      "A second unit built onto the main house, sharing a wall or connected by breezeway. Good option when lot size is constrained or when zoning setbacks limit where a detached unit can sit. Construction cost is typically lower than detached because foundation and some framing are shared.",
    details: [
      "Up to 1,200 sq ft attached to primary dwelling",
      "Lower foundation cost than detached",
      "Shared utility meters or sub-metering",
      "Good for smaller lots",
    ],
    cost: "$250–$375/sf",
    timeline: "8–12 months from design to move-in",
  },
  {
    title: "Garage Conversion",
    description:
      "Converting an existing garage (attached or detached) into a living unit. The fastest and cheapest ADU pathway because the foundation, walls, and roof already exist. California state law protects garage conversions — local jurisdictions cannot prohibit them on eligible parcels.",
    details: [
      "Uses existing foundation and structure",
      "Fastest permit pathway",
      "Up to 1,200 sq ft if the garage is that large",
      "Loss of dedicated parking (but typically not required)",
    ],
    cost: "$200–$300/sf",
    timeline: "6–10 months from design to move-in",
  },
  {
    title: "JADU (Junior ADU)",
    description:
      "A smaller unit carved out of the existing primary dwelling, capped at 500 square feet. Must share a bathroom or kitchen with the main house. The lowest-cost path to adding a rental unit — no foundation work, limited plumbing changes, and minimal permitting friction.",
    details: [
      "Up to 500 sq ft within primary dwelling",
      "Shared bathroom or kitchen required",
      "Owner-occupancy typically required",
      "Least invasive construction",
    ],
    cost: "$200–$280/sf",
    timeline: "5–8 months from design to move-in",
  },
];

const oaklandAdvantages = [
  {
    title: "Fee-waived impact fees",
    detail:
      "Oakland waives impact fees on all ADUs under 750 square feet — saving $15,000 to $25,000 compared to jurisdictions that charge full fees. Even over 750 sq ft, Oakland's fee structure is lower than San Francisco's. This alone can make the difference between a project that pencils and one that doesn't.",
  },
  {
    title: "Pre-approved plan program",
    detail:
      "Oakland publishes a library of pre-approved ADU plan sets. Building from a pre-approved plan can cut your permit review timeline from 6–8 weeks to 2–3 weeks. We work with both the pre-approved library and fully custom designs — and help clients evaluate which path fits their site and budget.",
  },
  {
    title: "Streamlined review for small commercial",
    detail:
      "Oakland Building's staff has historically been among the most responsive in the Bay Area for ADU-scale projects. Simple ADU applications with complete drawings are typically reviewed in 4–6 weeks versus 8–12 weeks in San Francisco. Faster review = lower carrying costs = higher project ROI.",
  },
  {
    title: "No owner-occupancy requirement (in most cases)",
    detail:
      "Unlike some Bay Area cities, Oakland does not require owner-occupancy for detached ADUs on most parcels. This flexibility means an Oakland ADU can be a pure rental income asset without restricting how you use the primary dwelling.",
  },
];

const oaklandProcess = [
  {
    step: "01",
    title: "Free 30-minute feasibility call",
    duration: "30 min",
    detail:
      "Before any fees, we review your lot on the phone — size, zoning, setbacks, existing structures, likely ADU size, rough budget range, and permit pathway (state preemption vs. local ordinance). You leave the call knowing whether the project is viable, what it will cost, and how long it will take.",
  },
  {
    step: "02",
    title: "Site visit & zoning analysis",
    duration: "1–2 weeks",
    detail:
      "On-site walkthrough with measurements, photography, and utility locations. We pull zoning data from Oakland's GIS portal, identify setback envelopes, check tree ordinance implications, and confirm whether the project falls under state preemption or local rules. Deliverable: feasibility memo with site plan and ADU siting options.",
  },
  {
    step: "03",
    title: "Schematic design",
    duration: "2–4 weeks",
    detail:
      "Floor plans, sections, and 3D massing for 2–3 design directions. We optimize for your program (how many bedrooms, separate office, accessibility), site constraints (solar, privacy from main house), and budget. You pick a direction; we refine.",
  },
  {
    step: "04",
    title: "Construction documents & Title 24",
    duration: "4–6 weeks",
    detail:
      "Full permit-ready drawing set with structural engineering, Title 24 energy modeling, Cal Green compliance, and MEP coordination. Every Oakland ADU must meet current California energy code — we integrate compliance from schematic design so there are no surprises at plan check.",
  },
  {
    step: "05",
    title: "Permit submittal & approval",
    duration: "4–8 weeks (Oakland)",
    detail:
      "We submit to Oakland Building, respond to plan-check comments within one week, and track the application to permit issuance. Standard Oakland ADUs clear in 4–6 weeks; pre-approved plans can clear in 2–3 weeks. We manage the full review cycle.",
  },
  {
    step: "06",
    title: "Construction administration",
    duration: "Through completion",
    detail:
      "Site visits, RFI responses, submittal reviews, and final inspection coordination. We stay involved from groundbreaking through certificate of occupancy so the built result matches the permit drawings and the design intent.",
  },
];

const oaklandAduCosts = [
  {
    type: "Garage Conversion",
    range: "$80,000 – $180,000",
    perSf: "$200–$300/sf",
    includes:
      "Foundation reinforcement (as needed), insulation, full MEP rough-in, fixtures, finishes, Title 24 compliance. Oakland fee waiver for units under 750 sq ft typically saves $15K–$25K.",
    example: "A 400-sq-ft garage conversion in West Oakland, fully permitted and finished, typically lands at $120K–$140K.",
  },
  {
    type: "Attached ADU",
    range: "$200,000 – $450,000",
    perSf: "$250–$375/sf",
    includes:
      "Foundation for addition (often leveraging existing), framing, MEP, kitchen, bathroom, finishes, exterior integration with main house. Plus soft costs (architecture, engineering, permits): ~12–18% on top.",
    example: "A 600-sq-ft attached ADU in Rockridge averages $250K–$320K all-in including soft costs.",
  },
  {
    type: "Detached ADU",
    range: "$250,000 – $500,000",
    perSf: "$300–$400/sf",
    includes:
      "New foundation, full framing, roof, siding, windows, doors, full MEP, kitchen, bathroom, finishes, exterior site work. Oakland fee waiver saves $15K–$25K on units under 750 sq ft.",
    example: "A 700-sq-ft detached ADU in the Oakland hills typically runs $300K–$400K all-in including soft costs.",
  },
  {
    type: "JADU",
    range: "$50,000 – $140,000",
    perSf: "$200–$280/sf",
    includes:
      "Interior modification within the existing primary dwelling, limited new plumbing, kitchenette or shared kitchen, separate entry. Lowest-cost ADU pathway.",
    example: "A 400-sq-ft JADU conversion of an existing bedroom + bathroom + added kitchenette typically runs $70K–$110K.",
  },
];

const oaklandFaqs = [
  {
    question: "Do I need an architect for an ADU in Oakland?",
    answer:
      "For any ADU over 500 square feet, or any project with structural modifications, yes — California requires stamped drawings by a licensed architect or engineer. Even for smaller projects, working with an architect helps you navigate Oakland's zoning rules, utility separation, Title 24 compliance, and Oakland-specific permit process. YCD Studio is an Oakland ADU architect serving Oakland, Berkeley, Moraga, Walnut Creek, and the greater East Bay.",
  },
  {
    question: "How long does an Oakland ADU take from start to move-in?",
    answer:
      "A typical detached ADU takes 10–14 months from first meeting to move-in: design (2–3 months), construction documents (1–2 months), permitting (4–8 weeks in Oakland), and construction (4–7 months). Garage conversions and JADUs can move faster (6–10 months total). Pre-approved plans through Oakland's library can shave 4–6 weeks off the permit phase.",
  },
  {
    question: "What does an Oakland ADU cost in 2026?",
    answer:
      "Oakland ADU construction costs in 2026 typically run $200–$400 per square foot. A garage conversion averages $80K–$180K. An attached ADU averages $200K–$450K. A new detached ADU averages $250K–$500K. Soft costs (architecture, engineering, permits) add 12–18% on top of hard construction. Oakland's fee waiver on units under 750 sq ft saves $15K–$25K relative to cities that charge full impact fees.",
  },
  {
    question: "Does Oakland have a pre-approved ADU plan program?",
    answer:
      "Yes. Oakland publishes a library of pre-approved ADU plans that can move through building review in 2–3 weeks versus 6–8 weeks for custom designs. We help clients evaluate whether a pre-approved plan fits their lot and program, or whether a custom design is worth the additional permit time. Pre-approved plans work best on level lots with standard setbacks; hillside or unusual lots typically need custom design.",
  },
  {
    question: "Can I rent out my Oakland ADU on Airbnb?",
    answer:
      "Oakland's short-term rental rules apply to ADUs the same as any other dwelling unit — generally, hosts must register with the city and comply with Oakland's short-term rental ordinance. Many Oakland ADU owners use theirs as long-term rentals (which have no special registration) or as multigenerational housing for family members. We can walk you through the short-term rental compliance question during the feasibility call.",
  },
  {
    question: "What if my lot is in the Oakland hills and on a slope?",
    answer:
      "Hillside ADUs are more complex but very doable. Key factors: Wildfire Urban Interface (WUI) requirements (Class A roofs, ember-resistant vents, tempered glass), geotechnical report for slope stability, and sometimes grading permits for cut-and-fill. Hillside projects add $30K–$80K in soft costs (geotech, structural engineering) and 2–3 months of timeline, but open up options for elevated ADUs with better views than a flat-lot equivalent.",
  },
  {
    question: "Do you work outside of Oakland proper?",
    answer:
      "Yes. We design ADUs across the East Bay — Berkeley, Moraga, Walnut Creek, Concord, Lafayette, Orinda, Albany, El Cerrito, Richmond, and Contra Costa County unincorporated areas. Each jurisdiction has its own permit timelines and fee structures; we've worked with most of them and know which are fastest. Contra Costa County's review cycles are among the fastest in the region — often 3–4 weeks for complete ADU applications.",
  },
  {
    question: "Can I use SB 9 to add more units than a single ADU?",
    answer:
      "Possibly. SB 9 (2022) lets owners of single-family lots split the lot and build up to 4 total units where zoning previously allowed only 1. Eligibility requires the lot to not be in a high-fire-risk area, environmentally sensitive zone, or historic district. If your lot qualifies, SB 9 is often a better financial outcome than a single ADU. We run SB 9 feasibility as part of the free consultation.",
  },
];

/* ── Page component ──────────────────────────────────────────────────── */

export default function OaklandAduPage() {
  return (
    <main className="page-shell">
      <OaklandAduJsonLd />

      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="container">
          <div className="ti-sub-hero__layout">
            <div className="ti-sub-hero__content">
              <ScrollReveal>
                <Link href="/oakland" className="ti-sub-hero__back">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M15 10H5M9 6l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Oakland & East Bay
                </Link>
                <p className="ti-sub-hero__eyebrow">Oakland ADU Architect</p>
                <h1 className="ti-sub-hero__title">
                  ADU design & permits<br />
                  for Oakland and the East Bay.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  YCD Studio is an Oakland ADU architect designing detached,
                  attached, and garage-conversion accessory dwelling units
                  across Oakland, Berkeley, Moraga, Walnut Creek, and the
                  greater East Bay. Oakland has one of the fastest ADU permit
                  processes in California — we know it well.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link href="/contact?type=adu" className="btn btn--primary btn--large">
                    Free 30-min ADU call
                  </Link>
                  <Link href="#adu-types" className="btn btn--secondary btn--large">
                    ADU types we design
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <Image
                  src="/projects/moraga-adu/Image-1.webp"
                  alt="Moraga ADU — detached accessory dwelling unit architecture in the East Bay by YCD Studio"
                  width={1280}
                  height={960}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
                  priority
                  fetchPriority="high"
                  style={{ width: "100%", height: "100%", borderRadius: "16px", objectFit: "cover" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Why Oakland for ADUs ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Oakland"
              title="Oakland is California's most ADU-friendly city."
              description="California's state-level ADU laws apply everywhere, but Oakland's local policies make it dramatically more productive than most Bay Area cities for accessory housing."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.08}>
            {oaklandAdvantages.map((a) => (
              <div className="ti-sub-scope-card" key={a.title}>
                <h3 className="ti-sub-scope-card__title">{a.title}</h3>
                <p className="ti-sub-scope-card__desc">{a.detail}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── ADU Types ── */}
      <section className="section section--dark" id="adu-types">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="ADU Types"
              title="Four ADU pathways in Oakland."
              description="Each type has a different cost, timeline, and permit pathway. We help clients choose the right one based on site, budget, and long-term goals."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.08}>
            {aduTypes.map((t) => (
              <div className="ti-sub-scope-card" key={t.title}>
                <h3 className="ti-sub-scope-card__title">{t.title}</h3>
                <p className="ti-sub-scope-card__desc">{t.description}</p>
                <ul className="ti-sub-scope-card__details">
                  {t.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--line)", fontSize: "0.875rem", display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <span><strong>Cost:</strong> {t.cost}</span>
                  <span><strong>Timeline:</strong> {t.timeline}</span>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Oakland ADU Cost ── */}
      <section className="section" id="adu-cost">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Investment"
              title="Oakland ADU cost ranges, 2026."
              description="2026 Oakland construction costs. Ranges cover hard construction; soft costs (design, engineering, permits) typically add 12–18% on top. Oakland's fee waiver on units under 750 sq ft saves $15K–$25K relative to cities that charge full impact fees."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-cost-grid" staggerDelay={0.1}>
            {oaklandAduCosts.map((c) => (
              <div className="ti-sub-cost-card" key={c.type}>
                <div className="ti-sub-cost-card__level">{c.type}</div>
                <div className="ti-sub-cost-card__range">{c.range}</div>
                <div className="ti-sub-cost-card__scope">{c.perSf}</div>
                <p className="ti-sub-cost-card__includes">{c.includes}</p>
                <div className="ti-sub-cost-card__timeline">{c.example}</div>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.15}>
            <p className="ti-sub-cost-disclaimer">
              Ranges reflect 2026 Oakland construction costs for standard site
              conditions. Hillside lots, WUI zones, or historic districts can
              push costs higher. We provide project-specific cost guidance in
              the free 30-minute consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Process"
              title="Six phases from first call to move-in."
              description="A deliberate workflow with clear handoffs. You always know what's next, what we're responsible for, and what needs to be decided together."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-timeline" staggerDelay={0.08}>
            {oaklandProcess.map((p, i) => (
              <div className="ti-sub-timeline__step" key={p.step}>
                <div className="ti-sub-timeline__marker">
                  <span className="ti-sub-timeline__number">{p.step}</span>
                  {i < oaklandProcess.length - 1 && <div className="ti-sub-timeline__line" />}
                </div>
                <div className="ti-sub-timeline__content">
                  <div className="ti-sub-timeline__header">
                    <h3 className="ti-sub-timeline__title">{p.title}</h3>
                    <span className="ti-sub-timeline__duration">{p.duration}</span>
                  </div>
                  <p className="ti-sub-timeline__desc">{p.detail}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Featured case study ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Case Study"
              title="Moraga ADU: 640 SF detached dwelling."
              description="A recent ADU project that shows our approach — clean modern design, state preemption pathway, setback optimization on a small lot."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="ti-sub-project">
              <div className="ti-sub-project__visual">
                <Image
                  src="/projects/moraga-adu/Image-1.webp"
                  alt="Moraga ADU — 640 sq ft detached accessory dwelling unit by YCD Studio"
                  width={1280}
                  height={960}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                  style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                />
              </div>
              <div className="ti-sub-project__body">
                <div className="ti-sub-project__meta">
                  <span>Moraga, CA</span>
                  <span>Detached ADU — 640 SF</span>
                </div>
                <h3 className="ti-sub-project__title">Moraga ADU</h3>
                <p className="ti-sub-project__desc">
                  A compact modern accessory dwelling unit on a Contra Costa
                  County residential lot. Zoning analysis identified the
                  optimal setback envelope; the final design maximizes
                  livable area within state-preemption size limits while
                  preserving the existing backyard. Clerestory windows and an
                  open-plan layout keep the interior light-filled despite the
                  compact footprint.
                </p>
                <ul className="ti-sub-project__highlights">
                  <li>Detached ADU under AB 2221 / SB 897 (state preemption)</li>
                  <li>Zoning analysis and setback optimization</li>
                  <li>Open-plan living with clerestory light</li>
                  <li>Utility separation and sub-meter coordination</li>
                </ul>
                <Link href="/work/moraga-adu" className="ti-sub-project__link">
                  View project details
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ (FAQPage schema via FaqAccordion) ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about Oakland ADUs."
              description="What to expect before, during, and after an Oakland ADU project."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="ti-faq-wrap">
              <FaqAccordion faqs={oaklandFaqs} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Reading */}
      <RelatedReading servicePath="/oakland/adu" />

      {/* CTA */}
      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">Start your Oakland ADU project.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Book a free 30-minute feasibility call. We review your lot,
              discuss goals and budget, and tell you whether the project
              pencils — all before you commit to anything. We respond within
              24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact?type=adu">
                Book free ADU feasibility call
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="mailto:info@ycd.studio?subject=Oakland%20ADU%20Project%20Inquiry"
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
