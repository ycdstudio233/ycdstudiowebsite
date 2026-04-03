import Link from "next/link";
import { SectionHeading } from "../../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../../components/scroll-reveal";

export const metadata = {
  title:
    "Restaurant Tenant Improvement Architect — Bay Area Kitchen Design & Permits | YCD Studio",
  description:
    "Restaurant tenant improvement architecture in the San Francisco Bay Area. Kitchen layout, exhaust hood design, grease traps, health department permits, FOH/BOH flow, bar design, and ADA compliance. From lease signing to opening day.",
  keywords:
    "restaurant tenant improvement Bay Area, restaurant architect San Francisco, kitchen design architect, restaurant build-out Bay Area, commercial kitchen design, exhaust hood design architect, grease trap architect, restaurant permits San Francisco, restaurant renovation Bay Area, health department restaurant permits",
  openGraph: {
    title: "Restaurant Tenant Improvement Architect — YCD Studio",
    description:
      "Bay Area restaurant TI — kitchen layout, exhaust hoods, health department coordination, and permit-ready drawings. We design restaurants that pass inspection on the first try.",
  },
};

/* ── Data ── */

const scopeItems = [
  {
    title: "Commercial Kitchen Layout",
    description:
      "The kitchen is the engine of your restaurant, and its layout determines everything from ticket times to labor costs. We design efficient cook lines, prep stations, dish pits, and dry storage that respect the workflow your chef actually uses — not a generic template. Every inch matters in a Bay Area kitchen where rent runs $4-8/SF/month.",
    details: [
      "Cook line sequencing (grill, saute, fry, expo)",
      "Prep area and cold storage placement",
      "Dish pit location relative to FOH bussing path",
      "Dry storage and walk-in cooler/freezer sizing",
      "Three-compartment sink and handwash sink placement",
    ],
  },
  {
    title: "Exhaust Hood Design (Type I & Type II)",
    description:
      "Type I hoods handle grease-laden vapors from cooking equipment like grills, fryers, and woks. Type II hoods cover heat and steam from dishwashers and ovens. Getting hood type, size, CFM, and makeup air wrong is one of the most expensive mistakes in restaurant TI — it can delay your opening by months and cost $30K-$80K to fix.",
    details: [
      "Type I grease hoods with UL 300 fire suppression",
      "Type II condensate hoods for dishwashers and ovens",
      "CFM calculations based on equipment lineup",
      "Makeup air unit (MAU) sizing to balance exhaust",
      "Roof penetration coordination with landlord",
    ],
  },
  {
    title: "Grease Trap & Interceptor",
    description:
      "Every restaurant with a commercial kitchen needs a grease interceptor. In the Bay Area, most jurisdictions require a gravity grease interceptor (GGI) rather than a point-of-use trap. Sizing depends on your fixture count and menu type. Placement is critical — it needs to be accessible for pumping, upstream of all kitchen fixtures, and compliant with local pretreatment ordinances.",
    details: [
      "Gravity grease interceptor (GGI) sizing per UPC/local code",
      "Location planning for pump truck access",
      "Connection routing from all kitchen fixtures",
      "Interceptor maintenance schedule documentation",
      "Pretreatment permit coordination with sewer district",
    ],
  },
  {
    title: "Health Department Requirements",
    description:
      "Your local health department (county environmental health or city equivalent) reviews your kitchen layout independently from building department plan check. They enforce California Retail Food Code (CalCode) requirements for food flow, handwash access, surface materials, ventilation, and pest control. We submit health department plans in parallel with building permits to avoid sequential delays.",
    details: [
      "Food flow diagram (receiving, storage, prep, cook, serve)",
      "Handwash sink placement per CalCode",
      "Finish schedule (NSF-rated, washable surfaces)",
      "Pest control measures (floor coves, sealed penetrations)",
      "Employee restroom and changing area requirements",
    ],
  },
  {
    title: "Front-of-House / Back-of-House Flow",
    description:
      "The invisible line between FOH and BOH defines your guest experience and your kitchen efficiency. Server pickup stations, POS terminal locations, bussing return paths, and expo windows need to work as a system. We study your service model — full-service, fast-casual, counter-service, or bar-forward — and design circulation that eliminates bottlenecks.",
    details: [
      "Server station and POS terminal placement",
      "Expo window and food pass design",
      "Bussing return path (dirty dishes never cross clean food)",
      "Host stand and wait area sizing",
      "Service aisle widths (36\" minimum, 44\" preferred)",
    ],
  },
  {
    title: "Bar Design & Beverage Program",
    description:
      "Bar layout affects speed of service, ticket averages, and ABC (Alcohol Beverage Control) compliance. We design bar wells, speed rails, glass storage, ice wells, refrigeration, and drain systems. For cocktail-forward concepts, we incorporate prep sinks, cutting boards, and juice stations into the bar plan.",
    details: [
      "Bar well layout and speed rail configuration",
      "Under-bar refrigeration and ice bin placement",
      "Glass washing and storage systems",
      "Draft beer system rough-in (glycol lines, drains)",
      "ABC license compliance (sight lines, separation from dining)",
    ],
  },
  {
    title: "ADA-Compliant Restrooms",
    description:
      "California has the strictest accessibility requirements in the country. Restaurant restrooms must meet both federal ADA and state CBC (California Building Code) Title 24 accessibility standards — which differ in important ways. Door clearances, grab bar placement, lavatory heights, and signage all have specific dimensional requirements we incorporate from day one.",
    details: [
      "Accessible stall layout per CBC Chapter 11B",
      "Door maneuvering clearances (push/pull side)",
      "Grab bar and seat height requirements",
      "Lavatory knee clearance and mirror heights",
      "Tactile and Braille signage placement",
    ],
  },
  {
    title: "Fire Suppression & Life Safety",
    description:
      "Restaurant kitchens require UL 300 wet chemical fire suppression systems over Type I hoods, plus a Class K portable extinguisher. The overall space needs compliant exit paths, exit signage, emergency lighting, and potentially a full fire sprinkler system if one exists in the building. The fire marshal reviews your plans separately and has the authority to stop your opening.",
    details: [
      "UL 300 kitchen hood fire suppression system",
      "Fuel shut-off integration with suppression system",
      "Exit path layout and occupancy load calculations",
      "Emergency lighting and illuminated exit signs",
      "Fire sprinkler modification coordination (if applicable)",
    ],
  },
  {
    title: "HVAC & Ventilation",
    description:
      "Restaurant ventilation is far more complex than office HVAC. Kitchen exhaust hoods pull thousands of CFM out of the building, which must be balanced with makeup air to avoid negative pressure (doors that won't close, drafts, pilot lights blowing out). The dining room needs its own comfort system that accounts for the heat load from the kitchen, solar gain, and occupancy.",
    details: [
      "Makeup air unit (MAU) to balance kitchen exhaust",
      "Dining room HVAC sizing and zoning",
      "Restroom exhaust fans per code",
      "Ductwork routing and ceiling coordination",
      "Energy code compliance (Title 24 Part 6)",
    ],
  },
];

const timelineMilestones = [
  {
    phase: "Pre-Lease Due Diligence",
    duration: "1-2 weeks",
    description:
      "Site visit, existing condition assessment, code review, preliminary budget, and go/no-go recommendation before you sign your lease.",
  },
  {
    phase: "Schematic Design",
    duration: "2-3 weeks",
    description:
      "Kitchen layout, seating plan, bar design, and equipment selection. Health department pre-submission review. Material palette and finish selections.",
  },
  {
    phase: "Construction Documents",
    duration: "3-5 weeks",
    description:
      "Full permit-ready drawings: architectural plans, reflected ceiling plan, finish schedule, equipment plan, and coordination with MEP engineers and structural consultant.",
  },
  {
    phase: "Permit Submission & Plan Check",
    duration: "6-16 weeks",
    description:
      "Varies significantly by city. San Francisco restaurant permits average 10-16 weeks. Oakland and South Bay cities may be 6-10 weeks. We respond to plan check corrections typically within 1 week.",
  },
  {
    phase: "Construction",
    duration: "8-16 weeks",
    description:
      "General contractor builds out the space. We conduct site visits, respond to RFIs, review submittals, and coordinate inspections. Kitchen equipment installation typically happens in the final 2-3 weeks.",
  },
  {
    phase: "Final Inspections & Opening",
    duration: "1-3 weeks",
    description:
      "Building final, fire marshal sign-off, health department inspection, and certificate of occupancy. We coordinate the sequence so you don't have one agency waiting on another.",
  },
];

const weHandleItems = [
  {
    title: "Building Permits",
    description:
      "We prepare and submit full construction document sets to the local building department, respond to plan check corrections, and track review status. Our 98% first-pass approval rate means fewer rounds of corrections and faster timelines.",
  },
  {
    title: "Health Department Coordination",
    description:
      "We submit kitchen plans to environmental health in parallel with building permits. We address food flow, equipment specs, finish materials, handwash access, and all CalCode requirements before the reviewer sees your plans.",
  },
  {
    title: "Fire Marshal Review",
    description:
      "Restaurant occupancy triggers fire department review for exit paths, suppression systems, hood fire protection, and occupancy loads. We prepare fire life safety plans and coordinate directly with the fire marshal's office.",
  },
  {
    title: "ADA & Title 24 Accessibility",
    description:
      "We design full accessibility compliance into every project from the start — restrooms, path-of-travel, parking, signage, and the 20% rule for triggered upgrades. No surprises at plan check.",
  },
  {
    title: "MEP Engineering Coordination",
    description:
      "We coordinate mechanical, electrical, and plumbing engineers for kitchen exhaust, makeup air, electrical panels, gas service, plumbing fixtures, and grease interceptors. All disciplines are integrated into one permit set.",
  },
  {
    title: "Structural Engineering",
    description:
      "Roof-mounted exhaust fans, new openings, and equipment loads may require structural analysis. We engage structural engineers early and coordinate their drawings into the permit package.",
  },
  {
    title: "ABC & Business Licenses",
    description:
      "While we don't file these for you, we design your space to comply with ABC (liquor license) requirements and advise on any layout implications for your business license type.",
  },
];

const costRanges = [
  {
    level: "Fast-Casual / Counter Service",
    range: "$150-$275 /SF",
    scope: "Simplified kitchen, limited seating",
    includes:
      "Basic cook line, Type I hood, point-of-sale counter, simple finishes, ADA restroom, limited bar or no bar. Typically 800-1,500 SF.",
    timeline: "4-6 months lease-to-open",
  },
  {
    level: "Full-Service Restaurant",
    range: "$250-$450 /SF",
    scope: "Complete kitchen, dining room, bar",
    includes:
      "Full cook line with multiple stations, Type I and Type II hoods, walk-in cooler/freezer, bar with draft system, custom finishes, ADA restrooms. Typically 1,500-3,500 SF.",
    timeline: "6-10 months lease-to-open",
  },
  {
    level: "High-End / Complex Build-Out",
    range: "$400-$650+ /SF",
    scope: "Premium finishes, complex systems",
    includes:
      "Open kitchen, custom millwork, extensive bar program, premium materials, complex HVAC, structural modifications, historic building considerations. Often 3,000+ SF.",
    timeline: "10-18 months lease-to-open",
  },
];

const featuredProjects = [
  {
    slug: "tabya-restaurant",
    title: "Tabya Restaurant",
    location: "Bay Area, CA",
    scope: "Full gut renovation — 2,400 SF",
    description:
      "A modern Turkish restaurant with open kitchen, custom bar, and warm material palette. The project required full kitchen exhaust design with rooftop fan installation, a new gravity grease interceptor, health department plan approval, and fire marshal sign-off. Completed permit process in 12 weeks.",
    highlights: [
      "Open kitchen with Type I hood system",
      "Custom bar with draft beer rough-in",
      "New grease interceptor installation",
      "Full ADA restroom renovation",
    ],
  },
  {
    slug: "piddeg-restaurant",
    title: "PiddeG Restaurant",
    location: "Bay Area, CA",
    scope: "Interior renovation — 1,800 SF",
    description:
      "Fast-casual pide (Turkish flatbread) concept with an efficient open kitchen visible to guests. The design centered on a custom stone oven as the focal point, with a streamlined prep-to-serve workflow. Designed and permitted in under 6 weeks — one of our fastest restaurant TI projects.",
    highlights: [
      "Stone oven as design centerpiece",
      "Efficient prep-to-serve workflow",
      "Counter-service FOH design",
      "6-week design-to-permit timeline",
    ],
  },
  {
    slug: "pier-41-restaurant",
    title: "Pier 41 Restaurant",
    location: "San Francisco, CA",
    scope: "Waterfront renovation — 4,100 SF",
    description:
      "High-profile waterfront dining venue at Fisherman's Wharf. This project involved complex multi-agency coordination: Port of San Francisco (as landlord), SF Building Department, SF Fire Department, and SF Environmental Health. The waterfront location added structural and wind-load considerations for rooftop exhaust equipment.",
    highlights: [
      "Multi-agency permit coordination",
      "Port of SF landlord approvals",
      "Wind-rated rooftop exhaust equipment",
      "High-occupancy dining room design",
    ],
  },
];

const challenges = [
  {
    title: "Exhaust Routing in Multi-Tenant Buildings",
    description:
      "In multi-tenant buildings — especially older Bay Area commercial strips and mixed-use buildings — routing a kitchen exhaust duct from your hood to the roof can be the single biggest challenge. You may need to run ductwork through another tenant's space, negotiate a dedicated chase with the landlord, or find an exterior route that satisfies both code and aesthetics. We assess exhaust routing feasibility during pre-lease due diligence so you know the cost and complexity before signing.",
  },
  {
    title: "Grease Interceptor Sizing & Placement",
    description:
      "Bay Area sewer districts (EBMUD, SFPUC, San Jose WPCP) have specific pretreatment requirements for grease interceptors. An undersized interceptor means frequent pumping and potential sewer blockages. An oversized one wastes space and money. Placement matters too — the interceptor needs gravity flow from kitchen fixtures and vehicle access for pump trucks. In some older buildings, there's no space inside for a GGI, requiring exterior installation or a variance.",
  },
  {
    title: "Hood Fire Suppression System",
    description:
      "Every Type I exhaust hood requires a UL 300 wet chemical fire suppression system (commonly Ansul or similar). The system must be designed by a licensed fire protection contractor, integrated with your fuel gas shut-off, and inspected by the fire marshal before you can open. If your building has an existing fire sprinkler system, hood installation may trigger modifications to the sprinkler layout — adding cost and time.",
  },
  {
    title: "Makeup Air Balancing",
    description:
      "Kitchen exhaust hoods can pull 2,000-6,000+ CFM out of your restaurant. That air has to be replaced, or you'll have doors that are hard to open, uncomfortable drafts, and pilot lights that won't stay lit. A properly sized makeup air unit (MAU) is required by code and essential for comfort. In Bay Area buildings with limited roof space, finding room for both the exhaust fan and the MAU can be a significant design challenge.",
  },
  {
    title: "Existing Building Conditions",
    description:
      "Many Bay Area restaurant spaces are in buildings built before 1970. Common surprises include: asbestos in flooring or pipe insulation, inadequate electrical service (restaurants need significant amperage), undersized gas lines, cast iron drain pipes that are corroded through, and structural limitations that affect equipment placement. A thorough pre-lease assessment catches these issues before they become budget-busting change orders.",
  },
  {
    title: "Permit Timeline Variability",
    description:
      "Restaurant permits in San Francisco can take 10-16 weeks for plan check alone. Oakland is typically faster at 6-10 weeks. Some smaller cities offer expedited review for a fee. The health department, fire department, and building department often review sequentially rather than in parallel — unless you know how to structure submissions to run concurrently. We manage this timeline actively and push for parallel review wherever possible.",
  },
];

const checklist = [
  "Lease agreement or LOI — including TI allowance, landlord work, and delivery condition",
  "Menu concept — even a draft helps us size the kitchen correctly",
  "Service model — full-service, fast-casual, counter-service, bar-forward, or hybrid",
  "Target seat count and expected covers per service",
  "Equipment list or preferred equipment vendors (if you have them)",
  "Existing floor plan or as-built drawings from the landlord",
  "Photos of the current space — kitchen area, dining room, restrooms, exterior, roof",
  "Liquor license type — beer/wine, full bar, or no alcohol",
  "Budget range for the total build-out (construction + equipment + soft costs)",
  "Target opening date or lease commencement date",
  "Landlord and property manager contact information",
  "Any prior permit history, health department violations, or known code issues with the space",
];

/* ── Page Component ── */

export default function RestaurantTenantImprovementPage() {
  return (
    <main className="page-shell">
      {/* ── Hero ── */}
      <section className="ti-sub-hero">
        <div className="container">
          <div className="ti-sub-hero__layout">
            <div className="ti-sub-hero__content">
              <ScrollReveal>
                <Link href="/tenant-improvement" className="ti-sub-hero__back">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M15 10H5M9 6l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  All TI Services
                </Link>
                <h1 className="ti-sub-hero__title">
                  Restaurant tenant improvement,<br />
                  from kitchen to front door.
                </h1>
                <p className="ti-sub-hero__subtitle">
                  We design, permit, and oversee restaurant build-outs across the
                  San Francisco Bay Area. Kitchen layout, exhaust systems, health
                  department approvals, fire marshal coordination, and ADA
                  compliance — handled as one integrated project so you open on
                  time and on budget.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="ti-sub-hero__actions">
                  <Link href="/contact" className="btn btn--primary btn--large">
                    Start your restaurant project
                  </Link>
                  <Link href="#scope" className="btn btn--secondary btn--large">
                    What&apos;s involved
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="ti-sub-hero__visual">
                <div className="ti-sub-hero__image-placeholder">
                  <span className="ti-sub-hero__image-label">Restaurant Project Photo</span>
                  <span className="ti-sub-hero__image-sub">
                    Replace with completed restaurant interior or kitchen layout photo
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── What's Involved — Scope Breakdown ── */}
      <section className="section" id="scope">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What's Involved"
              title="The anatomy of a restaurant build-out."
              description="Restaurant TI is the most complex type of commercial interior renovation. Here's every major system we design and coordinate — and why each one matters."
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

      {/* ── Typical Timeline ── */}
      <section className="section section--dark" id="timeline">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Typical Timeline"
              title="Lease to opening day: 6-14 months."
              description="Every restaurant project is different, but here's a realistic timeline for a full-service Bay Area restaurant TI. Fast-casual concepts can compress this significantly."
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

      {/* ── What We Handle ── */}
      <section className="section" id="we-handle">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Handle"
              title="Permits, agencies, and coordination."
              description="Restaurant permitting involves multiple agencies reviewing your project simultaneously. We manage the full process so you deal with one point of contact — not five."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-handle-grid" staggerDelay={0.08}>
            {weHandleItems.map((item) => (
              <div className="ti-sub-handle-card" key={item.title}>
                <h3 className="ti-sub-handle-card__title">{item.title}</h3>
                <p className="ti-sub-handle-card__desc">{item.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Cost Ranges ── */}
      <section className="section section--dark" id="costs">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Budget Planning"
              title="What does a restaurant build-out cost in the Bay Area?"
              description="These ranges include design fees, permit fees, construction, and equipment. Actual costs depend on your specific space, concept, and equipment choices."
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
              Ranges reflect Bay Area restaurant construction costs as of 2025 and
              are all-in estimates (architecture, engineering, permits, construction,
              and equipment). Actual costs vary by building condition, city, and
              concept complexity. We provide detailed cost guidance specific to your
              project during schematic design.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Restaurant Projects ── */}
      <section className="section" id="projects">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Restaurant Portfolio"
              title="Recent restaurant TI projects."
              description="A selection of restaurant tenant improvement projects we've designed and permitted across the Bay Area."
            />
          </ScrollReveal>

          <StaggerReveal className="ti-sub-projects" staggerDelay={0.12}>
            {featuredProjects.map((project) => (
              <div className="ti-sub-project" key={project.slug}>
                <div className="ti-sub-project__visual">
                  <div className="ti-sub-project__placeholder">
                    <span className="ti-sub-project__placeholder-label">
                      Replace with {project.title} project photo
                    </span>
                  </div>
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

      {/* ── Common Challenges ── */}
      <section className="section section--dark" id="challenges">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Common Challenges"
              title="Problems we solve before they cost you money."
              description="These are the issues that derail restaurant projects when they aren't anticipated. We've dealt with all of them — usually multiple times."
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

      {/* ── Checklist ── */}
      <section className="section" id="checklist">
        <div className="container">
          <div className="ti-sub-checklist-layout">
            <ScrollReveal>
              <div className="ti-sub-checklist__header">
                <SectionHeading
                  eyebrow="First Meeting Prep"
                  title="What to bring to your restaurant TI consultation."
                  description="The more you bring to the first meeting, the faster we can give you a realistic scope, budget, and timeline. Don't worry if you don't have everything — we'll help you figure out what's missing."
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="ti-sub-checklist__list">
                {checklist.map((item, i) => (
                  <div className="ti-sub-checklist__item" key={i}>
                    <span className="ti-sub-checklist__check">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <rect x="1" y="1" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                    <span className="ti-sub-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="closing">
        <div className="container closing__container">
          <ScrollReveal>
            <h2 className="closing__title">
              Ready to start your restaurant build-out?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="closing__desc">
              Tell us about your concept, your space, and your timeline. We&apos;ll
              respond within 24 hours with an honest assessment of scope, budget
              range, and next steps.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="ti-sub-cta-actions">
              <Link className="btn btn--inverse btn--large" href="/contact">
                Start a restaurant TI project
              </Link>
              <Link
                className="btn btn--ghost-light btn--large"
                href="mailto:hello@ycd.studio?subject=Restaurant%20TI%20Pre-Lease%20Walkthrough"
              >
                Book a pre-lease walkthrough
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
