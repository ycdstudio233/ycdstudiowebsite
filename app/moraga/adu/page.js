import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../../components/scroll-reveal";
import { FaqAccordion } from "../../../components/faq-accordion";
import { RelatedReading } from "../../../components/related-links";

export const metadata = {
  title: "Moraga ADU Architect 2026: Custom ADU Design in Lamorinda (East Bay)",
  description:
    "Moraga ADU architects designing custom detached, attached, and garage-conversion ADUs across the Lamorinda foothills. 2026 cost ranges, Moraga-Orinda Fire District requirements, Central San sewer permitting, and hillside / WUI considerations explained from the architect's chair.",
  keywords:
    "Moraga ADU architect, ADU architect Moraga, accessory dwelling unit Moraga, Lamorinda ADU, Contra Costa ADU architect, Moraga ADU permit, Moraga ADU cost, detached ADU Moraga, garage conversion Moraga, ADU plans Moraga, Lafayette ADU architect, Orinda ADU architect, East Bay ADU, ADU cost Moraga 2026, hillside ADU Bay Area, WUI ADU California",
  alternates: {
    canonical: "https://ycd.studio/moraga/adu",
  },
  openGraph: {
    title: "Moraga ADU Architect 2026 — Custom ADU Design | YCD Studio",
    description:
      "Custom ADU architects in Moraga and Lamorinda — detached, attached, and garage-conversion ADUs across the East Bay foothills. 2026 cost ranges, Moraga-Orinda Fire District process, hillside considerations, and real timeline expectations from a Bay Area firm.",
    url: "https://ycd.studio/moraga/adu",
    siteName: "YCD Studio",
    type: "website",
    images: [
      {
        url: "https://ycd.studio/projects/moraga-adu/Image-1.webp",
        width: 1200,
        height: 630,
        alt: "Moraga ADU architecture by YCD Studio — completed Lamorinda foothills accessory dwelling unit",
      },
    ],
  },
};

/* ── Service schema for LocalBusiness+Service signal. Helps Google connect
     this page to "ADU architect Moraga" + related Lamorinda queries.
     areaServed includes the Lamorinda cluster (Lafayette/Moraga/Orinda) plus
     adjacent jurisdictions so the page surfaces for the surrounding market. */
function MoragaAduJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Accessory Dwelling Unit Architecture",
    name: "Moraga ADU Architect",
    description:
      "Custom architecture for detached, attached, and garage-conversion ADUs in Moraga and the Lamorinda foothills. Zoning analysis, Moraga-Orinda Fire District coordination, Central San sewer permitting, Title 24 compliance, and hillside / WUI considerations.",
    provider: {
      "@type": "ArchitecturalFirm",
      name: "YCD Studio",
      url: "https://ycd.studio",
      telephone: "+1-415-300-0057",
      email: "info@ycd.studio",
      areaServed: [
        { "@type": "City", name: "Moraga" },
        { "@type": "City", name: "Lafayette" },
        { "@type": "City", name: "Orinda" },
        { "@type": "City", name: "Walnut Creek" },
        { "@type": "City", name: "Oakland" },
        { "@type": "City", name: "Berkeley" },
        { "@type": "AdministrativeArea", name: "Contra Costa County" },
      ],
    },
    areaServed: {
      "@type": "GeoCircle",
      // Moraga town center coordinates
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 37.8349, longitude: -122.1297 },
      geoRadius: "25000",
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

/* ── Data — Moraga-specific ADU content ──────────────────────────────── */

const aduTypes = [
  {
    title: "Detached ADU",
    description:
      "A fully independent unit built separately from the primary residence — up to 1,200 square feet under California's state preemption (AB 2221 / SB 897). Moraga's typically larger residential lots (often a quarter-acre or more) give detached ADUs more siting flexibility than denser Bay Area cities allow. State preemption overrides Moraga's local ADU ordinance on size, setbacks, and parking — meaning the path is well-defined.",
    details: [
      "Up to 1,200 sq ft (state-protected size)",
      "Larger Moraga lots = better siting options",
      "Full kitchen, bath, separate entry, independent utilities",
      "Strongest rental income potential — Lamorinda rental market is strong",
    ],
    cost: "$320–$425/sf",
    timeline: "11–15 months from design to move-in",
  },
  {
    title: "Attached ADU",
    description:
      "A second unit built onto the main house, sharing a wall. Good fit on smaller Moraga lots or where mature landscaping makes detached siting harder. Construction cost is typically lower than detached because foundation and some framing are shared with the existing house.",
    details: [
      "Up to 1,200 sq ft attached to primary dwelling",
      "Lower foundation cost than detached",
      "Shared utility meters or sub-metering",
      "Less disruption to existing landscaping",
    ],
    cost: "$280–$400/sf",
    timeline: "9–13 months from design to move-in",
  },
  {
    title: "Garage Conversion",
    description:
      "Converting an existing garage (attached or detached) into a living unit. Often the fastest and least expensive pathway because the foundation, walls, and roof already exist. California state law protects garage conversions — Moraga cannot prohibit them on eligible parcels, though existing conditions (insulation, slope of slab, utilities) determine the actual conversion scope.",
    details: [
      "Uses existing foundation and structure",
      "Fastest permit pathway",
      "Up to 1,200 sq ft if the garage is that large",
      "Slab leveling typically required (garage slabs slope to the door)",
    ],
    cost: "$220–$320/sf",
    timeline: "7–11 months from design to move-in",
  },
  {
    title: "JADU (Junior ADU)",
    description:
      "A smaller unit carved out of the existing primary dwelling, capped at 500 square feet. Must include an efficiency kitchen and may share a bathroom with the main house. Under AB 1154 (2026), owner-occupancy is no longer required if the JADU has its own private bathroom — a meaningful change for rental flexibility on Moraga properties.",
    details: [
      "Up to 500 sq ft within primary dwelling",
      "Efficiency kitchen required, bathroom can be shared",
      "AB 1154: owner-occupancy waived if JADU has private bath",
      "Least invasive construction; preserves the main house",
    ],
    cost: "$220–$300/sf",
    timeline: "6–9 months from design to move-in",
  },
];

const moragaAdvantages = [
  {
    title: "Larger lots and siting flexibility",
    detail:
      "Moraga's residential zoning typically allows quarter-acre lots and above. That extra ground gives detached ADUs real siting options — you can locate the ADU away from the main house for privacy, capture better views or solar orientation, and preserve mature trees that make Lamorinda properties what they are. On a smaller Oakland or San Francisco lot, you take what setbacks allow. In Moraga, you can actually design.",
  },
  {
    title: "Strong Lamorinda rental market",
    detail:
      "The Lamorinda cluster (Lafayette / Moraga / Orinda) has consistently strong rental demand from families wanting access to top-ranked Acalanes Union High School District. A well-designed Moraga ADU rents at $2,800–$4,500 per month depending on size, which makes the financial math work — even with hillside or WUI construction premiums factored in.",
  },
  {
    title: "Responsive Moraga-Orinda Fire District",
    detail:
      "Moraga and Orinda share fire jurisdiction through the Moraga-Orinda Fire District (MOFD). MOFD is one of the more responsive Bay Area fire districts on ADU plan review — typically a 2–4 week initial review cycle. We've coordinated with their plan checkers on multiple projects and know their preferences (access width, hydrant proximity standards, sprinkler triggers).",
  },
  {
    title: "Custom design fits the market",
    detail:
      "Moraga's housing market values architecture. Pre-approved ADU plans work fine in some markets but rarely fit the conditions Moraga lots present — sloped sites, mature trees, view corridors, fire-resistant material requirements. Custom design becomes the path of least resistance and best long-term value, not an upgrade.",
  },
];

const moragaProcess = [
  {
    step: "01",
    title: "Free 30-minute feasibility call",
    duration: "30 min",
    detail:
      "Before any fees, we review your lot on the phone — size, zoning, setbacks, existing structures, hillside conditions, sewer or septic, likely ADU size, rough budget range, and permit pathway. You leave the call knowing whether the project is viable, what it will cost, and how long it will take.",
  },
  {
    step: "02",
    title: "Site visit & zoning analysis",
    duration: "1–2 weeks",
    detail:
      "On-site walkthrough with measurements, photography, utility locations, and slope assessment. We pull zoning data, check Moraga's WUI map for fire-resistant material requirements, locate any septic system components, and confirm whether the project falls under state preemption or local rules. Deliverable: feasibility memo with site plan and ADU siting options.",
  },
  {
    step: "03",
    title: "Schematic design",
    duration: "3–5 weeks",
    detail:
      "Floor plans, sections, and 3D massing for 2–3 design directions. We optimize for your program (bedrooms, office, accessibility), site constraints (slope, solar, privacy from main house, view preservation), and the Lamorinda aesthetic. You pick a direction; we refine.",
  },
  {
    step: "04",
    title: "Construction documents & Title 24",
    duration: "5–7 weeks",
    detail:
      "Full permit-ready drawing set with structural engineering, Title 24 energy modeling, Cal Green compliance, MEP coordination, and WUI-compliant detailing where applicable. Hillside projects also need geotechnical input — we coordinate with a structural and a geotech engineer if the slope or soil conditions warrant.",
  },
  {
    step: "05",
    title: "Outside agency approvals",
    duration: "4–8 weeks (parallel)",
    detail:
      "While zoning review is happening, we coordinate parallel approvals from Moraga-Orinda Fire District (drawings submitted with fire-specific cover sheet) and Central San or local sewer/septic authority (sewer routing plans, contractor info). Running these in parallel rather than sequentially is what keeps a project moving.",
  },
  {
    step: "06",
    title: "Building permit & construction administration",
    duration: "4–8 weeks (permit) + construction",
    detail:
      "Permit set submitted to Contra Costa County or the Town of Moraga building department, with structural calcs, Title 24 NRCC reports, and the recorded ADU Deed Restriction. We respond to plan-check comments via REV submittals, then stay involved through construction — site visits, RFIs, and final inspection coordination.",
  },
];

const moragaAduCosts = [
  {
    type: "Garage Conversion",
    range: "$90,000 – $200,000",
    perSf: "$220–$320/sf",
    includes:
      "Foundation reinforcement (as needed), full insulation upgrade (most Moraga garages were never insulated for habitation), slab leveling, full MEP rough-in, fixtures, finishes, Title 24 compliance. WUI-compliant exterior materials add modestly to cost if the lot is in a fire-prone zone.",
    example: "A 400-sq-ft garage conversion on a flat Moraga lot, fully permitted and finished, typically lands at $130K–$170K.",
  },
  {
    type: "Attached ADU",
    range: "$220,000 – $500,000",
    perSf: "$280–$400/sf",
    includes:
      "Foundation for addition (often leveraging existing house foundation), framing, MEP, kitchen, bathroom, finishes, exterior integration with main house. Plus soft costs (architecture, engineering, permits): ~12–18% on top.",
    example: "A 600-sq-ft attached ADU in central Moraga typically averages $280K–$380K all-in including soft costs.",
  },
  {
    type: "Detached ADU",
    range: "$280,000 – $560,000",
    perSf: "$320–$425/sf",
    includes:
      "New foundation, full framing, roof, siding, windows, doors, full MEP, kitchen, bathroom, finishes, site work. Hillside conditions add foundation cost; WUI conditions add fire-resistant material costs. Mature-tree preservation can add complexity but usually pays back in finished aesthetic and property value.",
    example: "A 640-sq-ft detached ADU in the Moraga foothills — like our recent project in the Lamorinda area — typically runs $340K–$440K all-in including soft costs.",
  },
  {
    type: "JADU",
    range: "$55,000 – $160,000",
    perSf: "$220–$300/sf",
    includes:
      "Interior modification within the existing primary dwelling, limited new plumbing, efficiency kitchen, separate entry. Lowest-cost ADU pathway. Under AB 1154 (2026), owner-occupancy is no longer required if the JADU has its own private bathroom.",
    example: "A 400-sq-ft JADU conversion of an existing room + bathroom + added kitchenette typically runs $80K–$130K in Moraga.",
  },
];

const moragaFaqs = [
  {
    question: "Do I need an architect for an ADU in Moraga?",
    answer:
      "For any ADU over 500 square feet, or any project with structural modifications, yes — California requires stamped drawings by a licensed architect or engineer. In Moraga specifically, hillside conditions and Wildland-Urban Interface (WUI) requirements make professional design particularly valuable. YCD Studio is a Moraga ADU architect serving Moraga, Lafayette, Orinda, Walnut Creek, and the greater East Bay; permit drawings on our projects are stamped by the project's licensed architect of record.",
  },
  {
    question: "How long does a Moraga ADU take from start to move-in?",
    answer:
      "A typical detached ADU in Moraga takes 11–15 months from first meeting to move-in: design (3–4 months), construction documents (1.5–2 months), outside agency approvals from Moraga-Orinda Fire District and Central San (4–8 weeks, in parallel), building permit review at Contra Costa County or Town of Moraga (4–8 weeks), and construction (5–7 months). Garage conversions and JADUs move faster (6–11 months total). Hillside lots add 2–3 months for geotech and structural coordination.",
  },
  {
    question: "What does a Moraga ADU cost in 2026?",
    answer:
      "Moraga ADU construction costs in 2026 typically run $220–$425 per square foot depending on type. A garage conversion averages $90K–$200K. An attached ADU averages $220K–$500K. A new detached ADU averages $280K–$560K. Soft costs (architecture, structural engineering, Title 24 energy modeling, permits) add 12–18% on top of hard construction. Hillside conditions can add $30K–$80K in additional engineering. WUI fire-resistant material requirements add modestly to exterior costs.",
  },
  {
    question: "What's the Moraga-Orinda Fire District ADU process?",
    answer:
      "Moraga and Orinda share fire jurisdiction through the Moraga-Orinda Fire District (MOFD). MOFD reviews ADU plans for fire access, hydrant proximity, ember-resistant construction in WUI zones, and sprinkler triggers (whether new ADU sprinklers are required typically depends on the existing main house sprinkler status). Initial review is typically 2–4 weeks; conditional approval with required revisions is common; final approval is tracked with date stamps and REV numbers. We submit and coordinate on the architect side.",
  },
  {
    question: "Is my Moraga property in a WUI zone?",
    answer:
      "Many Moraga properties — especially in the foothills and along the Lamorinda ridges — are in a designated Wildland-Urban Interface (WUI) zone, which triggers fire-resistant material requirements under California Building Code Chapter 7A: Class A roof, ember-resistant vents, tempered glass at exposed openings, fire-resistant siding options. We check the WUI status on every Moraga feasibility call. WUI-compliant detailing adds modest cost but is non-negotiable in fire zones; planning for it from schematic design keeps costs predictable.",
  },
  {
    question: "Is my Moraga property on sewer or septic?",
    answer:
      "Most central Moraga properties are on Central Contra Costa Sanitary District (Central San) sewer service. Some outlying or hillside parcels are still on septic. Sewer ADUs follow the Central San approval process — sewer routing plans, two-part fees, contractor licensing including T1 Trenching where applicable. Septic ADUs require evaluating the existing leach field capacity and may require expanded or replaced drain fields, which adds project cost and complexity. We confirm sewer/septic status as part of the feasibility call.",
  },
  {
    question: "Can I rent out my Moraga ADU?",
    answer:
      "Yes. State law protects an owner's right to rent an ADU for stays of 30 days or longer. Moraga's local short-term rental rules apply to ADUs the same as any other dwelling unit — short-term rental (under 30 days) is more restricted than long-term. Most Moraga ADU owners use theirs as long-term rentals or for multigenerational housing. The Lamorinda rental market is strong: a well-designed Moraga ADU typically rents at $2,800–$4,500/month depending on size and finish level.",
  },
  {
    question: "What about hillside ADUs in Moraga?",
    answer:
      "Hillside ADUs are common in Moraga and absolutely doable, but they require additional coordination. Key factors: a geotechnical engineer's report for slope stability (typically $5K–$15K), more substantial structural engineering for foundation design, possible grading permits for cut-and-fill, and WUI-compliant materials if the lot is in a fire-prone zone. Hillside projects add roughly $30K–$80K in soft costs (geotech + structural) and 2–3 months of timeline, but the design opportunities — elevated decks, view orientation, light-filled lower levels — typically justify the investment.",
  },
  {
    question: "Do you work in Lafayette and Orinda too?",
    answer:
      "Yes. We design ADUs across all of Lamorinda — Lafayette, Moraga, and Orinda — plus Walnut Creek, Oakland, Berkeley, and the broader East Bay. Each jurisdiction has its own permit timelines and fee structures; Lafayette and Orinda share many process patterns with Moraga but have their own planning departments. Contra Costa County handles unincorporated parcels. We know the variations and can advise on which path is fastest for your specific lot.",
  },
];

/* ── Page component ──────────────────────────────────────────────────── */

export default function MoragaAduPage() {
  return (
    <main className="page-shell">
      <MoragaAduJsonLd />

      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="container">
          <div className="ti-sub-hero__layout">
            <div className="ti-sub-hero__content">
              <ScrollReveal>
                <Link href="/bay-area" className="ti-sub-hero__back">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M15 10H5M9 6l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Bay Area &amp; East Bay
                </Link>
                <p className="ti-sub-hero__eyebrow">Moraga ADU Architect</p>
                <h1 className="ti-sub-hero__title">
                  ADU design &amp; permits<br />
                  for Moraga and Lamorinda.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  YCD Studio is a Moraga ADU architect designing detached,
                  attached, and garage-conversion accessory dwelling units
                  across Moraga, Lafayette, Orinda, Walnut Creek, and the
                  broader Lamorinda foothills. Larger lots, hillside conditions,
                  Moraga-Orinda Fire District, Central San sewer — we know
                  the specifics.
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
                  alt="Moraga ADU — completed detached accessory dwelling unit in the Lamorinda foothills by YCD Studio"
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

      {/* ── Why Moraga for ADUs ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Moraga"
              title="Moraga is one of the strongest ADU markets in the Bay Area."
              description="Larger lots, strong Lamorinda rental demand, and a responsive fire district combine to make Moraga an unusually rewarding place to build a custom ADU — if the design responds to the specifics of the site."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.08}>
            {moragaAdvantages.map((a) => (
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
              title="Four ADU pathways in Moraga."
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

      {/* ── Moraga ADU Cost ── */}
      <section className="section" id="adu-cost">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Investment"
              title="Moraga ADU cost ranges, 2026."
              description="2026 Moraga construction cost ranges. Ranges cover hard construction; soft costs (design, structural and energy engineering, permits) typically add 12–18% on top. Hillside conditions can add $30K–$80K in engineering; WUI fire-resistant detailing adds modestly to exterior costs."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-cost-grid" staggerDelay={0.1}>
            {moragaAduCosts.map((c) => (
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
              Ranges reflect 2026 Moraga construction costs for standard site
              conditions. Hillside lots, WUI zones, septic systems, or
              mature-tree preservation considerations can push costs higher.
              We provide project-specific cost guidance in the free 30-minute
              consultation.
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
              description="A deliberate workflow with clear handoffs. The Moraga-specific variation is in Phase 5 — parallel outside agency approvals from Moraga-Orinda Fire District and Central San — which is where most Bay Area firms slow projects down by running them sequentially instead."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-timeline" staggerDelay={0.08}>
            {moragaProcess.map((p, i) => (
              <div className="ti-sub-timeline__step" key={p.step}>
                <div className="ti-sub-timeline__marker">
                  <span className="ti-sub-timeline__number">{p.step}</span>
                  {i < moragaProcess.length - 1 && <div className="ti-sub-timeline__line" />}
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

      {/* ── Featured case study — Moraga ADU ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Recent Work"
              title="Moraga ADU: 640 sq ft detached dwelling."
              description="A recently completed ADU in the Lamorinda foothills — a stucco volume under a cantilevered shed roof with exposed wood soffit, opening to a landscaped garden through clerestory glazing. Designed for the specific conditions of the site, the homeowner's brief, and a deep indoor–outdoor connection."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="ti-sub-project">
              <div className="ti-sub-project__visual">
                <Image
                  src="/projects/moraga-adu/Image-1.webp"
                  alt="Moraga ADU — 640 sq ft detached accessory dwelling unit by YCD Studio, photographed by Clay Lancaster"
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
                  A compact, modern accessory dwelling unit on a wooded
                  Lamorinda lot. Designed and permitted as a custom build — a
                  stucco volume under a cantilevered shed roof with exposed
                  wood soffit, opening to a landscaped garden through
                  clerestory glazing. Photographed by Clay Lancaster.
                </p>
                <ul className="ti-sub-project__highlights">
                  <li>Detached ADU on a wooded Lamorinda foothills lot</li>
                  <li>Cantilevered shed roof with exposed wood soffit</li>
                  <li>Clerestory daylight + wide sliding glass to patio</li>
                  <li>One open-plan volume with private bedroom and bath</li>
                </ul>
                <Link href="/work/moraga-adu" className="ti-sub-project__link">
                  View full project gallery
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
              title="Common questions about Moraga ADUs."
              description="What to expect before, during, and after a Moraga ADU project — including the Lamorinda-specific variations on fire district, sewer, hillside, and WUI."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="ti-faq-wrap">
              <FaqAccordion faqs={moragaFaqs} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Reading */}
      <RelatedReading servicePath="/moraga/adu" />

      {/* CTA */}
      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">Start your Moraga ADU project.</h2>
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
                href="mailto:info@ycd.studio?subject=Moraga%20ADU%20Project%20Inquiry"
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
