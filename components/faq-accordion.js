"use client";

import { useState, useCallback } from "react";

const faqData = [
  {
    question: "What is a tenant improvement (TI)?",
    answer:
      "A tenant improvement is any modification made to a leased commercial space to suit a new tenant's needs — from minor cosmetic updates to full gut renovations. This includes new layouts, plumbing, electrical, HVAC modifications, ADA compliance upgrades, and finish work. TI projects are common in restaurants, retail, offices, and mixed-use buildings throughout the Bay Area.",
  },
  {
    question: "How long does a typical TI project take?",
    answer:
      "Timeline varies by scope. A straightforward cosmetic refresh (paint, flooring, lighting) can be designed and permitted in 4–6 weeks. A full gut renovation with new plumbing, kitchen exhaust, or structural modifications typically takes 3–6 months from design through permit approval. Construction duration depends on your contractor and scope — we coordinate closely to keep things moving.",
  },
  {
    question: "Do I need a permit for tenant improvements in San Francisco?",
    answer:
      "Almost always, yes. San Francisco requires permits for most interior alterations — especially changes to walls, plumbing, electrical, or mechanical systems. Even \"minor\" work like adding a sink or relocating a door often triggers permit review. We handle the full permit process, including plan preparation, agency submittals, and any required corrections.",
  },
  {
    question: "What does ADA compliance involve for my space?",
    answer:
      "When you renovate a commercial space, ADA (Americans with Disabilities Act) requirements are triggered. This typically includes accessible restrooms, clearances for wheelchair access, compliant door hardware, signage, and path-of-travel upgrades. The scope depends on your renovation budget — California uses a 20% threshold rule. We design ADA compliance into every project from day one, so there are no surprises during plan check.",
  },
  {
    question: "How much do tenant improvements cost?",
    answer:
      "Costs depend heavily on scope, location, and building condition. In the Bay Area, light TI work (cosmetic upgrades, paint, flooring) runs $50–$100/sq ft. Mid-range renovations (new layout, some MEP work) typically fall between $100–$200/sq ft. Full gut renovations with new kitchens or specialized systems can exceed $250/sq ft. We provide detailed cost guidance early so you can plan with confidence.",
  },
  {
    question: "What's the difference between a TI allowance and out-of-pocket cost?",
    answer:
      "A TI allowance is the dollar amount your landlord contributes toward improving the space — it's negotiated in your lease. Anything beyond that allowance is your out-of-pocket cost. We help you maximize your TI allowance by designing efficiently, prioritizing high-impact improvements, and producing clear documentation that landlords and contractors can work from without ambiguity.",
  },
  {
    question: "Can you help with restaurant-specific tenant improvements?",
    answer:
      "Absolutely — restaurant TI is one of our core specialties. We handle kitchen layout, exhaust hood design coordination, grease trap placement, health department requirements, Type I and Type II hood specifications, ADA-compliant restrooms, and front-of-house design. We've completed restaurant TI projects across the Bay Area for concepts ranging from fast-casual to fine dining.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in the San Francisco Bay Area and serve clients across San Francisco, Oakland, San Jose, Palo Alto, Berkeley, and surrounding cities. We also take on select projects in other California markets and nationally for the right fit.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = useCallback((i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">
      {faqData.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`faq-item${isOpen ? " faq-item--open" : ""}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              className="faq-item__trigger"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className="faq-item__question" itemProp="name">
                {item.question}
              </span>
              <span className="faq-item__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 8l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className="faq-item__body"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p className="faq-item__answer" itemProp="text">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
