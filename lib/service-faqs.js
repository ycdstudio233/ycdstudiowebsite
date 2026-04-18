// Service-page-specific FAQ content. Each question/answer pair doubles as:
// (1) user-facing accordion content
// (2) structured FAQPage JSON-LD emitted by <FaqAccordion>
// Kept here (not inside components) so content is easy to edit without touching JSX.

export const residentialFaqs = [
  {
    question: "Do I need an architect for an ADU in California?",
    answer:
      "For detached ADUs over 500 square feet or any structurally complex project, yes — California requires stamped drawings by a licensed architect or engineer. Even for small attached ADUs or garage conversions, working with an architect helps you navigate zoning setbacks, utility separation, and Title 24 energy compliance. YCD Studio designs ADUs across the Bay Area including Oakland, San Francisco, Moraga, and the greater East Bay.",
  },
  {
    question: "What's the difference between an ADU and a JADU?",
    answer:
      "An ADU (Accessory Dwelling Unit) is a fully independent living unit up to 1,200 sq ft that can be detached, attached, or a garage conversion. A JADU (Junior ADU) is carved out of the existing primary dwelling, capped at 500 sq ft, and must share a bathroom or kitchen with the main house. Both are California state-protected under AB 2221 / SB 897, and most Bay Area jurisdictions waive impact fees on ADUs under 750 sq ft.",
  },
  {
    question: "How long does a custom home project take in the Bay Area?",
    answer:
      "From first meeting to move-in, expect 18–30 months for custom new construction. Design and construction documents take 4–8 months, permitting runs 2–6 months depending on the jurisdiction, and construction typically takes 12–18 months. Hillside sites, historic districts, and Planning Commission review can extend these timelines. We provide a realistic schedule at the start so you can plan accordingly.",
  },
  {
    question: "What does a Bay Area residential remodel cost per square foot?",
    answer:
      "Kitchen and bath remodels range from $250–$500/sf. Full custom new construction ranges from $400–$800+/sf depending on site conditions, material quality, and complexity. Soft costs (architecture, engineering, permits) typically add 12–18% on top of hard construction costs. We give you a realistic budget range at our first meeting so you're not surprised later.",
  },
  {
    question: "Can you handle the full permit process?",
    answer:
      "Yes. We prepare permit drawings, coordinate with structural, mechanical, electrical, and plumbing engineers, submit to the building department, and respond to plan-check corrections. We've worked with San Francisco DBI, Oakland Planning & Building, and most East Bay and Peninsula jurisdictions. Our goal is a permit set that clears review with minimal corrections.",
  },
  {
    question: "Do you work on historic homes?",
    answer:
      "Yes. We have experience with historic district submittals, Section 311 neighbor notifications in San Francisco, and the Secretary of the Interior's Standards for preservation. Renovating a historic home requires careful balance — honoring character-defining features while making the home livable for modern life. We handle landmark preservation review where required.",
  },
];

export const hospitalityFaqs = [
  {
    question: "What does a Bay Area restaurant build-out cost?",
    answer:
      "Full-service restaurant TI in the Bay Area typically runs $200–$400+/sf, depending on kitchen complexity, finishes, and building condition. A counter-service or fast-casual concept can land closer to $150–$250/sf. Major cost drivers include kitchen exhaust (hoods + makeup air), grease interceptor, ADA restroom reconfiguration, and any structural modifications. We develop a realistic budget with your contractor during design.",
  },
  {
    question: "How do you coordinate with the health department?",
    answer:
      "Bay Area counties enforce the California Retail Food Code (CalCode) independently from building department plan check. We submit health department plans in parallel with the building permit, which shortens the total timeline by 4–6 weeks versus sequential submittal. Our food-flow diagrams, handwash sink placement, and finish specifications are designed to CalCode from day one so reviews are typically first-pass approved.",
  },
  {
    question: "What's the difference between a Type I and Type II exhaust hood?",
    answer:
      "Type I hoods are for grease-producing equipment (grills, fryers, woks) and require UL 300 fire suppression, stainless steel ductwork, and a makeup air unit. Type II hoods are for heat and steam only (dishwashers, ovens) and have fewer requirements. Most commercial kitchens need both. Sizing the hood and ductwork correctly is one of the most consequential decisions in restaurant design — we get this right early to avoid $30K–$80K in late fixes.",
  },
  {
    question: "Do you design hotels and boutique stays?",
    answer:
      "Yes. We've designed boutique hotels in the Bay Area and abroad, including Hampton by Hilton Ordu and the Fatsa Ilica Hotel. Hotel design requires careful attention to guest room planning, ADA accessible room ratios (per California Building Code), fire-rated corridor design, back-of-house service areas, and lobby programming. For Bay Area hotels we also handle planning commission review and parking studies.",
  },
  {
    question: "Can you help with ABC license layout compliance?",
    answer:
      "Yes. California's Department of Alcoholic Beverage Control (ABC) issues licenses based partly on your floor plan. A Type 47 (on-sale general, eating place) requires a bona fide eating area; a Type 48 (public premises) allows bar-only operation under different rules. Your bar location, dining-to-bar ratio, sight lines, and outdoor service areas directly affect your ABC application. We design with your target license type in mind.",
  },
  {
    question: "How long does restaurant permitting take in San Francisco?",
    answer:
      "San Francisco restaurant permitting typically takes 10–16 weeks of review time after initial submittal. Parallel submittal to DBI (building department) and DPH (health department) shortens the total timeline compared to sequential. Projects with ABC licensing, planning variances, or change-of-use trigger additional review periods. We manage all agencies and respond to corrections within one week to keep permits moving.",
  },
];

export const commercialFaqs = [
  {
    question: "What is Title 24 and why does it matter for commercial projects?",
    answer:
      "Title 24 is California's Building Energy Efficiency Standards — one of the strictest energy codes in the nation. Commercial buildings must meet prescriptive or performance-based energy budgets covering envelope, HVAC, lighting, and (under the 2025 code cycle) mandatory solar PV and battery storage for new construction. We integrate Title 24 compliance from schematic design — not as a last-minute exercise before permit submittal.",
  },
  {
    question: "How strict are California's commercial ADA requirements?",
    answer:
      "California's CBC Chapter 11B accessibility requirements exceed federal ADA standards in several critical ways. Commercial buildings require accessible entrances, paths of travel, restrooms, service counters (34\" max), signage, and parking. New construction must be fully compliant from day one — there is no 20% disproportionate-cost exception for new buildings. We design accessibility as a core feature, not an afterthought.",
  },
  {
    question: "Do you handle seismic design for Bay Area commercial projects?",
    answer:
      "Yes. The Bay Area sits on some of the most active fault lines in North America. Commercial buildings must meet current CBC seismic provisions, which significantly affect structural systems, foundation design, and construction costs. We coordinate with structural engineers early in design to evaluate moment frames, shear walls, and base-isolation options — and the cost implications of each — before we lock in the structural system.",
  },
  {
    question: "Can you help with LEED or GreenPoint certification?",
    answer:
      "Yes. Many Bay Area jurisdictions require or incentivize green building certifications. We work with LEED APs and GreenPoint Rated specialists, and we integrate sustainability strategy from schematic design — energy efficiency, water conservation, healthy materials, and occupant wellness. Whether you're targeting formal certification or simply building responsibly, we help you hit those targets without compromising design.",
  },
  {
    question: "What's typical for a Bay Area commercial permit timeline?",
    answer:
      "Ground-up commercial construction in the Bay Area typically takes 6–18 months in entitlements and permitting. Retail TI and office build-outs move faster (6–12 weeks review). Variables include whether your project needs CEQA review, design review board approval, Planning Commission hearings, or requires zoning amendments. We map the permit pathway early so clients know what to expect.",
  },
];

export const multiFamilyFaqs = [
  {
    question: "Can I use SB 9 to build a duplex on my single-family lot?",
    answer:
      "In most cases, yes. SB 9 (2022) allows lot splits and duplexes on single-family parcels statewide, bypassing most discretionary review. Eligibility requires the lot to not be in an environmentally sensitive area, the units to be at least 800 sq ft, and the owner to sign an owner-occupancy affidavit for 3 years. We analyze your lot for SB 9 feasibility and design accordingly.",
  },
  {
    question: "How does California's density bonus law work?",
    answer:
      "California Government Code 65915 (density bonus) allows developers to build 35–50% more units than base zoning permits in exchange for including affordable units. Layering this with SB 35 streamlining and local incentives can dramatically increase project feasibility. We analyze every site for the maximum entitlement pathway and present options with realistic pro forma implications.",
  },
  {
    question: "Do multi-family projects require CEQA review?",
    answer:
      "Most multi-family projects needing discretionary approval trigger CEQA (California Environmental Quality Act). A full EIR can take 12–18 months and cost $150K–$500K+. However, many housing projects qualify for statutory or categorical exemptions — infill exemptions (Class 32), SB 35 streamlining, or housing sustainability frameworks. We work with environmental consultants from day one to identify the fastest CEQA pathway.",
  },
  {
    question: "What are the inclusionary zoning requirements in the Bay Area?",
    answer:
      "Most Bay Area cities impose inclusionary zoning — typically 10–20% of units must be affordable to low- or moderate-income households. San Francisco requires 22% on-site affordable units for projects over 10 units. Oakland requires 15%. Some cities allow in-lieu fees as an alternative. We coordinate with housing consultants to structure unit mixes that satisfy inclusionary rules without killing pro formas.",
  },
  {
    question: "How long does entitling a multi-family project take?",
    answer:
      "This is where Bay Area timelines diverge dramatically. Ministerial projects (SB 9, SB 35) can be approved in 60–90 days. Discretionary projects requiring Planning Commission approval, design review, or EIR certification can take 12–18+ months. Community engagement adds time but reduces risk of project-killing opposition. We manage the full entitlement process — planning applications, CEQA documentation, design review, and permits.",
  },
];

export const sacredFaqs = [
  {
    question: "Do you design spaces for multiple faith traditions?",
    answer:
      "Yes. We design churches, cathedrals, mosques, Islamic centers, synagogues, and interfaith chapels. Each tradition has its own liturgical requirements — qibla orientation for mosques, baptistery placement for churches, bimah for synagogues — and we work closely with clergy, liturgical consultants, and congregations to honor each tradition authentically.",
  },
  {
    question: "How do you approach acoustic design for worship spaces?",
    answer:
      "Sacred spaces must serve the spoken word, congregational singing, choral music, and silence — often in a single room. We collaborate with acoustic consultants from schematic design to balance reverberation time, speech intelligibility, and the enveloping warmth that makes a worship space feel alive. Specialized applications like Gregorian chant, amplified preaching, or acoustic chamber music each have different acoustic targets.",
  },
  {
    question: "Can you renovate a historic church while meeting modern code?",
    answer:
      "Yes — renovation and restoration are some of our most meaningful work. We honor the original character and architectural heritage while addressing modern needs: ADA accessibility, updated HVAC, fire and life safety, liturgical updates, and long-term stewardship. This includes navigating historic preservation review, California Historical Building Code provisions, and the Secretary of the Interior's Standards where applicable.",
  },
  {
    question: "How do you handle budgets for sacred architecture?",
    answer:
      "Sacred buildings are typically funded through congregational capital campaigns, grants, and pledged giving rather than commercial financing. We design in phases where appropriate — main sanctuary first, then education building, fellowship hall, etc. — so the congregation can build as funds allow. We also help clients evaluate which material choices and spatial moves have the highest impact per dollar.",
  },
  {
    question: "Where do you work on sacred architecture projects?",
    answer:
      "We're based in the Bay Area but work nationally on sacred architecture. Past and current projects include the Cathedral of St. Mary in San Francisco, Holy Cross Church, and St. Mary's Church in Grand Forks. Sacred architecture is a practice that rewards travel and careful engagement with each place — we welcome conversations about projects in any region.",
  },
];
