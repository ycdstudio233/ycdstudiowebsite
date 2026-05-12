import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../../components/scroll-reveal";
import { FaqAccordion } from "../../../components/faq-accordion";
import { RelatedReading } from "../../../components/related-links";

export const metadata = {
  title: "Walnut Creek Restaurant Architect 2026 — TI Design, Permits & Build-Out",
  description:
    "Walnut Creek restaurant architects designing custom tenant improvements across the East Bay. Kitchen design, Type I/II hood and grease interceptor coordination, Contra Costa Environmental Health permits, ABC licensing, and multi-agency build-outs. Recent: PiddeG Mediterranean Eatery (4.8 stars, 160+ reviews).",
  keywords:
    "Walnut Creek restaurant architect, restaurant architect Walnut Creek, Walnut Creek tenant improvement, cafe architect Walnut Creek, Mediterranean restaurant designer Walnut Creek, Contra Costa restaurant permits, Walnut Creek TI architect, restaurant build-out Walnut Creek, East Bay restaurant architect, restaurant kitchen design Bay Area, ABC license Walnut Creek, Encina Grande restaurant",
  alternates: {
    canonical: "https://ycd.studio/walnut-creek/restaurant",
  },
  openGraph: {
    title: "Walnut Creek Restaurant Architect 2026 — TI Design & Permits | YCD Studio",
    description:
      "Restaurant tenant improvement design in Walnut Creek — kitchen layout, exhaust engineering, Contra Costa Environmental Health permits, ABC compliance, and multi-agency build-outs. Recent project: PiddeG Mediterranean Eatery (4.8 stars on Google).",
    url: "https://ycd.studio/walnut-creek/restaurant",
    siteName: "YCD Studio",
    type: "website",
    images: [
      {
        url: "https://ycd.studio/projects/piddeg-restaurant/Image-2.webp",
        width: 1200,
        height: 630,
        alt: "PiddeG Mediterranean Eatery — Walnut Creek restaurant tenant improvement by YCD Studio",
      },
    ],
  },
};

/* ── Service schema for LocalBusiness+Service signal. Helps Google connect
     this page to "restaurant architect Walnut Creek" + related Tri-Valley
     queries. areaServed covers the Walnut Creek + central Contra Costa
     cluster that this page targets. */
function WalnutCreekRestaurantJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Restaurant Tenant Improvement Architecture",
    name: "Walnut Creek Restaurant Architect",
    description:
      "Restaurant, cafe, and bar tenant improvement architecture in Walnut Creek and central Contra Costa County. Kitchen design, Type I/II hood coordination, grease interceptor sizing, Contra Costa Environmental Health permitting, ABC licensing, and multi-agency build-outs.",
    provider: {
      "@type": "ArchitecturalFirm",
      name: "YCD Studio",
      url: "https://ycd.studio",
      telephone: "+1-415-300-0057",
      email: "info@ycd.studio",
      areaServed: [
        { "@type": "City", name: "Walnut Creek" },
        { "@type": "City", name: "Lafayette" },
        { "@type": "City", name: "Moraga" },
        { "@type": "City", name: "Orinda" },
        { "@type": "City", name: "Concord" },
        { "@type": "City", name: "Pleasant Hill" },
        { "@type": "City", name: "Danville" },
        { "@type": "AdministrativeArea", name: "Contra Costa County" },
      ],
    },
    areaServed: {
      "@type": "GeoCircle",
      // Walnut Creek city center coordinates
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 37.9101, longitude: -122.0652 },
      geoRadius: "25000",
    },
    offers: {
      "@type": "Offer",
      description: "Free pre-lease site walk and tenant improvement feasibility assessment",
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

/* ── Data — Walnut Creek restaurant TI content ──────────────────────── */

const projectTypes = [
  {
    title: "Full-Service Restaurants",
    description:
      "Dining-room restaurants with full kitchens, ABC licensing, and on-site cooking. The most complex restaurant TI category — Type I exhaust hoods, grease interceptors sized to fixture count, separate hand-wash and prep sinks, and full multi-agency review. Walnut Creek's central restaurant zones (Broadway Plaza, downtown, North Main) all have specific design-review overlays that affect storefront and signage scope.",
    details: [
      "Type I hood and grease trap coordination",
      "Health department plan review (Contra Costa EH)",
      "ABC license coordination",
      "Multi-agency permit cycle (Planning, Building, Fire, Health)",
    ],
    cost: "$180–$320/sf",
    timeline: "10–16 weeks design + permit",
  },
  {
    title: "Cafes & Coffee Shops",
    description:
      "Espresso and limited-prep concepts. Often qualify for Type II hoods (cold equipment, simple panini-grade prep) rather than full Type I — meaningfully lower mechanical and permitting cost. Walnut Creek has a strong cafe market in Locust Street, downtown, and the Iron Horse Trail corridor.",
    details: [
      "Type II hood scope (limited prep)",
      "Simpler grease interceptor or none",
      "Faster Environmental Health review",
      "Lower MEP cost vs full-service",
    ],
    cost: "$140–$250/sf",
    timeline: "8–12 weeks design + permit",
  },
  {
    title: "Bars & Wine Bars",
    description:
      "Beverage-focused concepts with limited food service. ABC license type (Type 48 vs Type 41 vs Type 23) drives kitchen scope — Type 48 (full bar without food) has the lightest kitchen requirement; Type 41 (beer/wine with bona-fide meals) requires kitchen capacity matching food sales thresholds.",
    details: [
      "ABC license type drives kitchen scope",
      "Sound attenuation often required (adjacent residential)",
      "Patio/outdoor seating coordination with city",
      "Specific occupancy load thresholds (49 vs 50+)",
    ],
    cost: "$160–$280/sf",
    timeline: "9–14 weeks design + permit",
  },
  {
    title: "Bakeries & Mediterranean",
    description:
      "Counter-service, deli-style, and Mediterranean concepts (a category Walnut Creek has grown meaningfully — including our PiddeG project at Encina Grande). Often combine retail/grab-and-go with limited dine-in seating, which simplifies occupancy load and exit requirements compared to full-service.",
    details: [
      "Counter-service + limited seating",
      "Occupancy load typically under 49",
      "Display case + bakery equipment coordination",
      "Generally faster permit path than full-service",
    ],
    cost: "$150–$260/sf",
    timeline: "8–12 weeks design + permit",
  },
];

const walnutCreekAdvantages = [
  {
    title: "Active dining scene + growing market",
    detail:
      "Walnut Creek has one of the East Bay's most dynamic restaurant markets — Broadway Plaza, North Main Street, downtown's Locust corridor, and the Encina Grande and South Main centers all support meaningful dining counts. Lamorinda customers regularly drive in to Walnut Creek for dinner. New concepts have a real shot at sustained occupancy if the operations are tuned.",
  },
  {
    title: "Contra Costa Environmental Health is responsive",
    detail:
      "Contra Costa County Environmental Health (CCEH) is the health department reviewing restaurant plans for Walnut Creek. Their plan-check turnaround is generally faster than SF or Alameda — typically 3–5 weeks for initial review with one round of corrections, versus 5–8 weeks for SF DPH on comparable projects. Faster review = lower carrying costs.",
  },
  {
    title: "Walnut Creek Building works with you",
    detail:
      "The City of Walnut Creek's Building Division is one of the more architect-friendly building departments in the East Bay — clear plan-check comments, accessible plan checkers, and consistent application of CBC and Cal Green requirements. Knowing how to write the plan-check response is what keeps projects from REV-cycling for months.",
  },
  {
    title: "Strong long-term restaurant tenancy",
    detail:
      "Walnut Creek restaurant tenancy is meaningfully longer than San Francisco or Oakland — operators who get the concept right stay. That means TI buildouts have longer amortization horizons and operators tend to invest in better mechanical and finish quality. Designing for that horizon, rather than for a 3-year cheap-out, is where the work matters.",
  },
];

const walnutCreekProcess = [
  {
    step: "01",
    title: "Free pre-lease site walk",
    duration: "1 hr",
    detail:
      "Before you sign the lease, we walk the shell with you and identify the deal-breakers — exhaust path, electrical service capacity, ADA path-of-travel, sprinkler triggers, possible change-of-use issues. A pre-lease walk that takes an hour can save $30K-$50K of mid-design surprises. We do this at no cost for clients we expect to engage.",
  },
  {
    step: "02",
    title: "Feasibility + concept design",
    duration: "2–4 weeks",
    detail:
      "Test fits of your menu, equipment, and seating against the actual lease space. Occupancy load, kitchen flow, FOH circulation, ADA, exit requirements. Deliverable: feasibility memo + concept plans showing whether the program actually fits and what the realistic build cost is.",
  },
  {
    step: "03",
    title: "Construction documents",
    duration: "4–7 weeks",
    detail:
      "Full architectural drawings, MEP coordination (often subbed to engineering consultants), kitchen equipment schedule with hood and grease interceptor sizing, Title 24 energy modeling, signage and storefront drawings if applicable. Cal Green, accessibility, and Environmental Health requirements all integrated from the start.",
  },
  {
    step: "04",
    title: "Multi-agency permit submittal",
    duration: "5–10 weeks (parallel)",
    detail:
      "Walnut Creek Planning (if signage / storefront), Walnut Creek Building (architectural / structural / Title 24), Contra Costa Environmental Health (kitchen / food service), Walnut Creek Fire Department (exhaust, sprinklers, occupancy), and ABC if applicable. Running these in parallel rather than sequentially is the difference between a 12-week and 20-week permit phase.",
  },
  {
    step: "05",
    title: "Plan-check response + permit issuance",
    duration: "2–4 weeks per REV",
    detail:
      "We respond to plan-check comments from each agency, coordinate any required revisions, and track approvals to permit issuance. Walnut Creek typically clears restaurant TI in one or two REV cycles on well-documented submittals.",
  },
  {
    step: "06",
    title: "Construction administration",
    duration: "Through opening",
    detail:
      "Site visits, RFI responses, submittal reviews, change-order evaluation. Restaurant TI construction in Walnut Creek typically runs 14-22 weeks. We stay involved through final inspections and Certificate of Occupancy — the document that lets you open.",
  },
];

const walnutCreekTiCosts = [
  {
    type: "Cosmetic Refresh",
    range: "$40 – $90/sf",
    perSf: "Light renovation",
    includes:
      "New paint, flooring, lighting fixtures, FOH refresh, minor electrical. No new kitchen equipment, no hood replacement, no plumbing changes. Typical for cafe refreshes or rebrand projects taking over an already-equipped restaurant shell.",
    example: "A 1,200-sq-ft Walnut Creek cafe refresh typically lands $60K–$100K all-in.",
  },
  {
    type: "Partial Build-Out",
    range: "$120 – $200/sf",
    perSf: "Standard tenant improvement",
    includes:
      "Kitchen layout updates, equipment additions, exhaust hood coordination, partition wall changes, ADA upgrades, new finishes. The most common scope for restaurant TI projects taking over a shell or a non-restaurant space.",
    example: "A 2,200-sq-ft Walnut Creek Mediterranean concept (similar scope to PiddeG) typically runs $260K–$440K including soft costs.",
  },
  {
    type: "Full Build-Out",
    range: "$200 – $320/sf",
    perSf: "Gut renovation",
    includes:
      "Full kitchen design from scratch, new MEP systems, all hoods + grease interceptor, new FOH, full ADA path of travel, new storefront, possibly seismic upgrades. For full-service restaurants opening in raw shell or warm shell with significant change of use.",
    example: "A 3,500-sq-ft full-service restaurant in Walnut Creek typically runs $700K–$1.1M all-in.",
  },
  {
    type: "Adaptive Reuse",
    range: "$200 – $350/sf",
    perSf: "Change of use",
    includes:
      "Converting a non-restaurant building (retail, office, warehouse) into a restaurant. Triggers full change-of-occupancy review, often seismic upgrade requirements, full MEP system replacement, possible parking and accessibility upgrades, and full Environmental Health review. Highest-cost path but unlocks unique spaces.",
    example: "An 1,800-sq-ft Walnut Creek warehouse-to-restaurant conversion typically runs $500K–$700K all-in.",
  },
];

const walnutCreekFaqs = [
  {
    question: "Do I need an architect for a Walnut Creek restaurant TI?",
    answer:
      "Yes — Walnut Creek requires stamped architectural drawings for any restaurant tenant improvement. Even cosmetic projects involving electrical, plumbing, or accessibility changes require permit drawings. Beyond the legal requirement, restaurant TI involves coordinated review across Walnut Creek Building, Contra Costa Environmental Health, Walnut Creek Fire, and often Walnut Creek Planning — running those reviews in parallel is what keeps projects on schedule. YCD Studio designs restaurant TI projects in Walnut Creek and across central Contra Costa County; permit drawings are stamped by the project's licensed architect of record.",
  },
  {
    question: "How long does restaurant TI permitting take in Walnut Creek?",
    answer:
      "A typical Walnut Creek restaurant TI permit cycle runs 8–16 weeks from initial submittal to permit issuance, depending on scope. Cafe TI with limited prep can clear in 8–10 weeks. Full-service restaurants with Type I hood, grease interceptor, and ABC coordination typically run 12–16 weeks across the four-agency review (Building, Environmental Health, Fire, Planning). Adaptive reuse (change of use) adds 4–8 weeks for the additional change-of-occupancy review. Contra Costa Environmental Health is generally faster than SF DPH or Alameda; Walnut Creek Building is responsive on architect submissions.",
  },
  {
    question: "What does a Walnut Creek restaurant TI cost in 2026?",
    answer:
      "Walnut Creek restaurant TI costs in 2026 typically run $120–$320 per square foot depending on scope. A cosmetic refresh averages $40–$90/sf. A standard tenant improvement (partial build-out) averages $120–$200/sf. A full build-out averages $200–$320/sf. Adaptive reuse (change of use from non-restaurant) averages $200–$350/sf. Soft costs (architecture, MEP engineering, structural if needed, Title 24, permits) typically add 12–18% on top of hard construction.",
  },
  {
    question: "What's the difference between Type I and Type II hoods?",
    answer:
      "Type I exhaust hoods are required over cooking equipment that produces grease-laden vapors — fryers, charbroilers, griddles, ranges with open flame. They include fire suppression systems, ducted ventilation to roof level, and grease filtration. Type II hoods are for cold equipment or limited-prep operations (espresso machines, panini grills, low-temperature ovens) and have simpler ductwork without grease handling. Type I is significantly more expensive — $25K–$75K vs $5K–$15K for Type II — and triggers additional fire department review. Cafe and bar concepts often qualify for Type II only; full-service restaurants almost always need Type I.",
  },
  {
    question: "Does Walnut Creek require a CASp inspection?",
    answer:
      "Walnut Creek lease space ADA compliance is governed by California's CASp (Certified Access Specialist) program. While not strictly required, many landlords include CASp inspections in the lease, and the tenant is generally responsible for accessibility upgrades within their leasehold. ADA's 20% disproportionate-cost rule typically applies — meaning the tenant has to make 20% of project value worth of accessibility improvements on the path of travel from the public right-of-way to the building entrance, to restrooms, drinking fountains, and signage. Plan for this from feasibility; surprises during permit cost more.",
  },
  {
    question: "What if I'm converting a non-restaurant space to a restaurant?",
    answer:
      "Converting an existing retail, office, or warehouse space to a restaurant triggers a change-of-occupancy review under the California Building Code. New use class typically goes from B (business) or M (mercantile) to A-2 (assembly — restaurants) which has stricter occupancy, exit, fire separation, and sprinkler requirements. Common surprises: seismic upgrade triggers (especially for older buildings), full ADA path-of-travel upgrades, new sprinkler system if existing was inadequate for A-2 occupancy. Adaptive reuse is rewarding but front-load the feasibility — discovering these mid-design adds $50K–$200K and 3–6 months.",
  },
  {
    question: "Can you handle the ABC license coordination?",
    answer:
      "We coordinate ABC (Alcoholic Beverage Control) licensing as part of the design process — typically working with the operator's chosen ABC consultant or attorney to make sure the architectural layout matches the license type's requirements (Type 41 vs Type 47 vs Type 48 etc.) and the food service ratios required for the chosen license. We don't file the ABC application ourselves (that's typically done by the operator or their ABC consultant), but we make sure the drawings support what's being applied for.",
  },
  {
    question: "Do you work outside Walnut Creek?",
    answer:
      "Yes. We design restaurant TI projects across Contra Costa County and the wider Bay Area — Lafayette, Moraga, Orinda, Concord, Pleasant Hill, Danville, San Ramon, Oakland, Berkeley, and San Francisco. Each jurisdiction has its own permit timelines, health department, and fire district. Walnut Creek and central Contra Costa County have some of the fastest permit cycles in the region; San Francisco is the slowest. We've worked across most of these and know which paths are fastest.",
  },
];

/* ── Page component ──────────────────────────────────────────────────── */

export default function WalnutCreekRestaurantPage() {
  return (
    <main className="page-shell">
      <WalnutCreekRestaurantJsonLd />

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
                <p className="ti-sub-hero__eyebrow">Walnut Creek Restaurant Architect</p>
                <h1 className="ti-sub-hero__title">
                  Restaurant design &amp; permits<br />
                  for Walnut Creek and central Contra Costa.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  YCD Studio is a Walnut Creek restaurant architect designing
                  full-service restaurants, cafes, bars, and Mediterranean
                  concepts across Walnut Creek, Lafayette, Moraga, Concord, and
                  the central Contra Costa cluster. Recent work includes PiddeG
                  Mediterranean Eatery at Encina Grande — now 4.8 stars on
                  Google with 160+ reviews.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link href="/contact?type=restaurant" className="btn btn--primary btn--large">
                    Free pre-lease site walk
                  </Link>
                  <Link href="#project-types" className="btn btn--secondary btn--large">
                    Restaurant types we design
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <Image
                  src="/projects/piddeg-restaurant/Image-2.webp"
                  alt="PiddeG Mediterranean Eatery — Walnut Creek restaurant tenant improvement designed by YCD Studio"
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

      {/* ── Why Walnut Creek ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Walnut Creek"
              title="Walnut Creek is one of the strongest restaurant markets in the East Bay."
              description="A dynamic dining scene, responsive plan-check agencies, and meaningfully longer tenant retention than the bigger Bay Area markets — Walnut Creek rewards restaurants that get the operations and the design right."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.08}>
            {walnutCreekAdvantages.map((a) => (
              <div className="ti-sub-scope-card" key={a.title}>
                <h3 className="ti-sub-scope-card__title">{a.title}</h3>
                <p className="ti-sub-scope-card__desc">{a.detail}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Restaurant Types ── */}
      <section className="section section--dark" id="project-types">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Restaurant Types"
              title="Four restaurant TI categories in Walnut Creek."
              description="Each has a different cost, timeline, and permit pathway. We help operators choose the right scope based on menu, equipment, ABC license type, and lease terms."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.08}>
            {projectTypes.map((t) => (
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

      {/* ── Cost ranges ── */}
      <section className="section" id="ti-cost">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Investment"
              title="Walnut Creek restaurant TI cost ranges, 2026."
              description="2026 Walnut Creek tenant improvement cost ranges. Ranges cover hard construction; soft costs (architecture, MEP and structural engineering, Title 24, permits) typically add 12–18% on top."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-cost-grid" staggerDelay={0.1}>
            {walnutCreekTiCosts.map((c) => (
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
              Ranges reflect 2026 Walnut Creek and central Contra Costa
              construction costs for standard site conditions. Change-of-use
              conversions, seismic upgrades, or full kitchen build-outs can
              push costs higher. We provide project-specific cost guidance
              after the pre-lease site walk.
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
              title="Six phases from pre-lease walk to opening day."
              description="Restaurant TI is a multi-agency exercise — Walnut Creek Building, Contra Costa Environmental Health, Walnut Creek Fire, and sometimes ABC and Planning. The Walnut Creek-specific edge is running these reviews in parallel rather than sequentially."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-timeline" staggerDelay={0.08}>
            {walnutCreekProcess.map((p, i) => (
              <div className="ti-sub-timeline__step" key={p.step}>
                <div className="ti-sub-timeline__marker">
                  <span className="ti-sub-timeline__number">{p.step}</span>
                  {i < walnutCreekProcess.length - 1 && <div className="ti-sub-timeline__line" />}
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

      {/* ── Featured case study — PiddeG ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Recent Work"
              title="PiddeG Mediterranean Eatery — Walnut Creek."
              description="A 2,200 sq ft Turkish-Mediterranean restaurant TI at Walnut Creek's Encina Grande center. YCD Studio handled the full design and project delivery — the layout, finishes, branded wall treatments, and operational flow that became the space PiddeG opens to today. Since opening, PiddeG has earned 4.8 stars across 160+ Google reviews."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="ti-sub-project">
              <div className="ti-sub-project__visual">
                <Image
                  src="/projects/piddeg-restaurant/Image-2.webp"
                  alt="PiddeG Mediterranean Eatery — Walnut Creek restaurant tenant improvement by YCD Studio, interior with green accent walls and gold details"
                  width={1280}
                  height={960}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                  style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                />
              </div>
              <div className="ti-sub-project__body">
                <div className="ti-sub-project__meta">
                  <span>Walnut Creek, CA</span>
                  <span>Restaurant TI — 2,200 SF</span>
                </div>
                <h3 className="ti-sub-project__title">PiddeG Mediterranean Eatery</h3>
                <p className="ti-sub-project__desc">
                  A fast-casual Turkish-Mediterranean restaurant at 2979 Ygnacio
                  Valley Rd, in Walnut Creek's Encina Grande shopping center.
                  Green accent walls, gold decorative elements, wood slat
                  branding wall, pide oven as design centerpiece. Designed and
                  permitted in under 6 weeks — one of our fastest restaurant TI
                  cycles. Now a Walnut Creek dining destination with 160+ five-
                  star Google reviews.
                </p>
                <ul className="ti-sub-project__highlights">
                  <li>Walnut Creek Mediterranean destination at Encina Grande</li>
                  <li>4.8 stars / 160+ Google reviews post-opening</li>
                  <li>Pide oven as design focal point + open kitchen</li>
                  <li>6-week design-to-permit timeline</li>
                </ul>
                <Link href="/work/piddeg-restaurant" className="ti-sub-project__link">
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

      {/* ── FAQ ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about Walnut Creek restaurant TI."
              description="Permits, costs, hoods, ABC, change of use, and the four-agency review path — answered for operators."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="ti-faq-wrap">
              <FaqAccordion faqs={walnutCreekFaqs} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Reading */}
      <RelatedReading servicePath="/walnut-creek/restaurant" />

      {/* CTA */}
      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">Start your Walnut Creek restaurant project.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Book a free pre-lease site walk. We review the shell, identify
              the deal-breakers, and tell you whether the lease pencils — all
              before you commit. We respond within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact?type=restaurant">
                Book free pre-lease walk
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="mailto:info@ycd.studio?subject=Walnut%20Creek%20Restaurant%20Project%20Inquiry"
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
