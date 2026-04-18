import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { RotatingHeroImage } from "../../components/rotating-hero-image";

import { RelatedReading } from "../../components/related-links";
export const metadata = {
  title: "Bay Area Restaurant & Hotel Architect",
  description:
    "Bay Area hospitality architecture firm specializing in restaurants, hotels, cafes, bars, and food halls. Kitchen design, health department permits, ABC licensing, exhaust systems, and guest-flow planning from concept through certificate of occupancy.",
  keywords:
    "hospitality architecture Bay Area, restaurant architect San Francisco, hotel architect Bay Area, cafe design architect, bar design architect, food hall architect, hospitality design firm, restaurant permits Bay Area, hotel renovation Bay Area, boutique hotel architect California",
  openGraph: {
    title: "Bay Area Restaurant & Hotel Architect | YCD Studio",
    description:
      "Bay Area hospitality design — restaurants, hotels, cafes, bars, and food halls. We handle kitchen layout, exhaust engineering, health department coordination, ABC compliance, and multi-agency permitting.",
  },
};

/* ── Data ── */

const scopeItems = [
  {
    title: "Restaurants & Cafes",
    description:
      "Full-service dining, fast-casual concepts, coffee shops, and bakery cafes. We design every layer — kitchen workflow, exhaust systems, health department-compliant layouts, front-of-house atmosphere, and outdoor dining. Bay Area restaurant permitting involves the building department, environmental health, fire marshal, and often ABC — we coordinate all of them.",
    details: [
      "Full-service, fast-casual, and counter-service layouts",
      "Commercial kitchen design with Type I and Type II hoods",
      "Health department plan review and CalCode compliance",
      "Outdoor dining patios and parklet design",
      "Food hall stall and shared-kitchen configurations",
    ],
  },
  {
    title: "Hotels & Boutique Stays",
    description:
      "Boutique hotels, bed-and-breakfasts, and short-term hospitality spaces. Hotel architecture layers guest room planning, corridor egress, ADA room ratios, fire-rated assemblies, and MEP distribution in ways that differ fundamentally from residential or office work. In the Bay Area, hotel projects also trigger planning commission review, parking studies, and sometimes CEQA.",
    details: [
      "Guest room layout and furniture planning",
      "ADA-accessible room count per California Building Code",
      "Fire-rated corridor and stairwell design",
      "Lobby, reception, and back-of-house service areas",
      "Laundry, housekeeping, and mechanical room planning",
    ],
  },
  {
    title: "Bars, Lounges & Event Spaces",
    description:
      "Cocktail bars, wine bars, taprooms, lounges, and private event venues. Bar-forward spaces have unique code requirements — ABC license types dictate sight lines, separation from dining, and food-service minimums. Occupancy loads are typically high, which triggers more stringent fire exiting, sprinkler, and ventilation requirements.",
    details: [
      "Bar well, speed rail, and under-bar equipment layout",
      "Draft beer and wine system rough-in coordination",
      "ABC Type 47 and Type 48 license layout compliance",
      "High-occupancy exiting and fire sprinkler design",
      "Sound isolation and acoustic treatment",
    ],
  },
];

const challenges = [
  {
    title: "Health Department Compliance",
    description:
      "Bay Area counties enforce the California Retail Food Code (CalCode) independently from building department plan check. Environmental health reviewers evaluate food flow diagrams, handwash sink placement, surface materials, ventilation, pest control, and employee facilities. In San Francisco, the Department of Public Health can take 4-8 weeks for plan review alone. We submit health department plans in parallel with building permits and design to CalCode from day one — eliminating the back-and-forth that delays most restaurant projects by months.",
  },
  {
    title: "Kitchen Exhaust & Ventilation",
    description:
      "Commercial kitchens require Type I hoods over grease-producing equipment and Type II hoods over dishwashers and ovens. A single hood system can exhaust 3,000-6,000 CFM, requiring a rooftop fan, dedicated ductwork through the building, and a makeup air unit to replace the displaced air. In multi-tenant Bay Area buildings, routing exhaust to the roof often means negotiating chase space with the landlord, coordinating structural penetrations, and meeting wind-load requirements for rooftop equipment. Getting this wrong costs $40K-$100K to fix after the fact.",
  },
  {
    title: "Accessibility & Guest Flow",
    description:
      "California accessibility requirements (CBC Title 24 Chapter 11B) exceed federal ADA standards in several critical areas. Hospitality spaces must provide accessible entries, dining surfaces, bar counters with lowered sections, restrooms, and path-of-travel to all public areas. For hotels, a minimum percentage of guest rooms must be fully accessible with roll-in showers, visual alarms, and communication features. We design accessibility into the concept from the start — not as an afterthought that compromises the guest experience.",
  },
  {
    title: "Alcohol License & ABC Requirements",
    description:
      "The California Department of Alcoholic Beverage Control (ABC) issues licenses based partly on your floor plan. A Type 47 (on-sale general, eating place) requires that you serve meals and maintain a bona fide eating area. A Type 48 (on-sale general, public premises) allows bar-only operation but has different rules. Your architectural layout — bar location, dining-to-bar ratio, sight lines, and outdoor service areas — directly affects which license you qualify for and whether ABC will approve your application. We design with your target license type in mind so the floor plan supports your ABC filing.",
  },
];

const timelineMilestones = [
  {
    phase: "Pre-Lease Feasibility",
    duration: "1-2 weeks",
    description:
      "Site visit, existing condition assessment, exhaust routing evaluation, utility capacity check, and preliminary code review. We tell you what the space can and cannot support before you sign a lease or purchase agreement.",
  },
  {
    phase: "Concept & Space Planning",
    duration: "3-4 weeks",
    description:
      "Floor plan development, kitchen layout, seating plan, bar design, and material palette. For hotels: guest room mix, corridor layout, and amenity space planning. We present options with realistic cost implications for each.",
  },
  {
    phase: "Construction Documents",
    duration: "4-8 weeks",
    description:
      "Full permit-ready drawing set: architectural plans, reflected ceiling plan, finish schedule, equipment plan, and details. Coordinated with MEP engineers, structural consultant, kitchen equipment vendor, and fire protection contractor.",
  },
  {
    phase: "Multi-Agency Permitting",
    duration: "6-16 weeks",
    description:
      "Building department plan check, health department review, fire marshal review, and any planning or ABC submittals. San Francisco averages 10-16 weeks; Oakland and Peninsula cities 6-10 weeks. We push for parallel review and respond to corrections within one week.",
  },
  {
    phase: "Construction & Opening",
    duration: "Through CO",
    description:
      "Construction administration, site visits, RFI responses, submittal reviews, and inspection coordination. We sequence final inspections — building, fire, health — so one agency is not waiting on another. The goal is certificate of occupancy on your target date.",
  },
];

const costRanges = [
  {
    level: "Fast-Casual / Cafe",
    range: "$150-$300 /SF",
    scope: "Simplified kitchen, counter service, cafe finishes",
    includes:
      "Basic cook line or espresso bar, Type I or Type II hood, point-of-sale counter, standard finishes, ADA restroom. Typically 600-1,500 SF. Lease-to-open in 4-7 months.",
    timeline: "4-7 months lease-to-open",
  },
  {
    level: "Full-Service Restaurant",
    range: "$250-$500 /SF",
    scope: "Complete kitchen, dining room, bar program",
    includes:
      "Full cook line, Type I and Type II hoods, walk-in cooler/freezer, bar with draft system, custom finishes, multiple ADA restrooms. Typically 1,500-4,000 SF. Lease-to-open in 6-12 months.",
    timeline: "6-12 months lease-to-open",
  },
  {
    level: "Hotel / Boutique Stay",
    range: "$350-$700+ /SF",
    scope: "Guest rooms, lobby, back-of-house, amenities",
    includes:
      "Guest room fit-out, fire-rated corridors, ADA rooms, lobby and reception, laundry and housekeeping, MEP distribution, elevator coordination. Project size varies widely. Timeline depends heavily on planning entitlements and structural scope.",
    timeline: "12-30+ months",
  },
];

const featuredProjects = [
  {
    slug: "hampton-by-hilton-ordu",
    title: "Hampton by Hilton Ordu",
    location: "Ordu, Turkey",
    scope: "Full-service hotel — guest rooms, lobby, restaurant, pool",
    image: "/projects/hampton-by-hilton-ordu/Image-1.webp",
    description:
      "A 35,000 sq ft Hampton by Hilton hotel on the Black Sea coast — designed within Hilton's brand framework while introducing local material and spatial character. Guest rooms, ground-floor restaurant, outdoor pool, lobby lounge, and bar coordinated as one cohesive guest experience from arrival to departure.",
    highlights: [
      "Branded hotel meeting Hilton design standards",
      "Guest rooms, lobby, restaurant, lounge, and bar",
      "Outdoor pool integrated with dining and lounge",
      "Coastal context with regional material identity",
    ],
  },
  {
    slug: "fatsa-ilica",
    title: "Fatsa Ilica Hotel",
    location: "Fatsa, Turkey",
    scope: "Boutique hotel — marble reception, valley setting",
    image: "/projects/fatsa-ilica/Image-1.webp",
    description:
      "A 28,000 sq ft mountain valley hotel with marble reception, warm guest rooms, and a deep connection to its forested riverside setting. Lobby, lounge, and dining spaces are designed as extensions of the landscape, with natural materials and generous glazing throughout.",
    highlights: [
      "Boutique hotel in dramatic valley setting",
      "Marble reception with geometric inlay",
      "Guest rooms framing the forested landscape",
      "Public spaces designed as landscape extensions",
    ],
  },
  {
    slug: "pier-41-restaurant",
    title: "Pier 41 — Cousins Maine Lobster",
    location: "San Francisco, CA",
    scope: "Waterfront restaurant — multi-agency permit coordination",
    image: "/projects/pier-41-restaurant/Image-1.webp",
    description:
      "High-profile waterfront tenant improvement at Fisherman's Wharf requiring coordination with the Port of San Francisco, SF Building Department, Fire Department, and Environmental Health. The waterfront location added structural and wind-load considerations for all rooftop equipment.",
    highlights: [
      "Port of SF landlord coordination",
      "Multi-agency permit management",
      "Wind-rated rooftop exhaust systems",
      "High-occupancy waterfront dining",
    ],
  },
  {
    slug: "piddeg-restaurant",
    title: "PiddeG Restaurant",
    location: "Bay Area, CA",
    scope: "Fast-casual restaurant — interior renovation",
    image: "/projects/piddeg-restaurant/Image-4.webp",
    description:
      "Fast-casual pide (Turkish flatbread) concept centered on a custom stone oven as the focal point. Efficient open kitchen visible to guests, streamlined prep-to-serve workflow, and a warm material palette. Designed and permitted in under 6 weeks.",
    highlights: [
      "Stone oven as design centerpiece",
      "Open kitchen with guest visibility",
      "Counter-service FOH design",
      "6-week design-to-permit timeline",
    ],
  },
];

/* ── Page Component ── */

export default function HospitalityPage() {
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
                <p className="ti-sub-hero__eyebrow">Hospitality Architecture</p>
                <h1 className="ti-sub-hero__title">
                  Restaurants, hotels, and<br />
                  gathering places.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  We design hospitality spaces across the San Francisco Bay
                  Area — restaurants, cafes, hotels, bars, and food halls.
                  Kitchen engineering, health department permits, ABC
                  compliance, fire and life safety, and guest-flow
                  planning, handled as one integrated project from concept
                  through opening day.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link href="/contact" className="btn btn--primary btn--large">
                    Start a hospitality project
                  </Link>
                  <Link href="#scope" className="btn btn--secondary btn--large">
                    What we design
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <RotatingHeroImage
                  interval={4500}
                  images={[
                    { src: "/projects/fatsa-ilica/Image-1.webp", alt: "Fatsa Ilica Hotel — exterior in mountain valley setting" },
                    { src: "/projects/hampton-by-hilton-ordu/Image-1.webp", alt: "Hampton by Hilton Ordu — exterior with pool and restaurant at night" },
                    { src: "/projects/fatsa-ilica/Image-2.webp", alt: "Fatsa Ilica Hotel — marble lobby with globe pendants" },
                    { src: "/projects/hampton-by-hilton-ordu/Image-2.webp", alt: "Hampton by Hilton Ordu — lounge dining area overlooking pool" },
                    { src: "/projects/piddeg-restaurant/Image-2.webp", alt: "PiddeG Restaurant — interior dining space with green accent wall" },
                    { src: "/projects/tabya-restaurant/Image-1.webp", alt: "Tabya Restaurant — interior dining with retractable roof" },
                  ]}
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
              title="Hospitality spaces that work as hard as you do."
              description="Every hospitality typology has its own code requirements, operational workflows, and design challenges. Here is how we approach each one."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-scope-grid" staggerDelay={0.08}>
            {scopeItems.map((item) => (
              <div className="ti-sub-scope-card" key={item.title}>
                <h3 className="ti-sub-scope-card__title">{item.title}</h3>
                <p className="ti-sub-scope-card__desc">{item.description}</p>
                <ul className="ti-sub-scope-card__details">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Why Hospitality Is Different ── */}
      <section className="section section--dark" id="challenges">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Hospitality Is Different"
              title="The regulatory complexity most firms underestimate."
              description="Hospitality projects involve more agencies, more code sections, and more coordination than any other building type. These are the areas where experience saves you time and money."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-challenges" staggerDelay={0.08}>
            {challenges.map((challenge) => (
              <div className="ti-sub-challenge" key={challenge.title}>
                <h3 className="ti-sub-challenge__title">{challenge.title}</h3>
                <p className="ti-sub-challenge__desc">{challenge.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="section section--dark" id="process">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Process"
              title="From feasibility to certificate of occupancy."
              description="A realistic timeline for hospitality projects in the Bay Area. Restaurant and cafe projects can move faster; hotel projects typically require more time for planning entitlements."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-timeline" staggerDelay={0.1}>
            {timelineMilestones.map((milestone, i) => (
              <div className="ti-sub-timeline__step" key={milestone.phase}>
                <div className="ti-sub-timeline__marker">
                  <span className="ti-sub-timeline__number">{String(i + 1).padStart(2, "0")}</span>
                  {i < timelineMilestones.length - 1 && <div className="ti-sub-timeline__line" />}
                </div>
                <div className="ti-sub-timeline__content">
                  <div className="ti-sub-timeline__header">
                    <h3 className="ti-sub-timeline__title">{milestone.phase}</h3>
                    <span className="ti-sub-timeline__duration">{milestone.duration}</span>
                  </div>
                  <p className="ti-sub-timeline__desc">{milestone.description}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Cost Guide ── */}
      <section className="section section--dark" id="costs">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Cost Guide"
              title="What hospitality projects cost in the Bay Area."
              description="All-in ranges including design, engineering, permits, construction, and equipment. Actual costs depend on building condition, city, concept complexity, and finish level."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-cost-grid" staggerDelay={0.1}>
            {costRanges.map((tier) => (
              <div className="ti-sub-cost-card" key={tier.level}>
                <div className="ti-sub-cost-card__level">{tier.level}</div>
                <div className="ti-sub-cost-card__range">{tier.range}</div>
                <div className="ti-sub-cost-card__scope">{tier.scope}</div>
                <p className="ti-sub-cost-card__includes">{tier.includes}</p>
                <div className="ti-sub-cost-card__timeline">{tier.timeline}</div>
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.15}>
            <p className="ti-sub-cost-disclaimer">
              Ranges reflect Bay Area construction costs as of 2025. Hotel and
              boutique stay costs vary significantly based on structural scope,
              number of guest rooms, and level of finish. We provide project-specific
              cost guidance during the concept and space planning phase.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="section" id="projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Featured Projects"
              title="Hospitality spaces we have designed."
              description="A selection of restaurant and hospitality projects across the Bay Area."
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
                    <span>{project.location}</span>
                    <span>{project.scope}</span>
                  </div>
                  <h3 className="ti-sub-project__title">{project.title}</h3>
                  <p className="ti-sub-project__desc">{project.description}</p>
                  <ul className="ti-sub-project__highlights">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <Link href={`/work/${project.slug}`} className="ti-sub-project__link">
                    View project details
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
      <RelatedReading servicePath="/hospitality" />

      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Ready to bring your hospitality concept to life?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Tell us about your concept, your space, and your timeline. We&apos;ll
              respond within 24 hours with an honest assessment of scope, budget
              range, and next steps — whether you&apos;re opening a cafe or developing
              a boutique hotel.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Start a hospitality project
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="mailto:info@ycd.studio?subject=Hospitality%20Project%20Inquiry"
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
