import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { ScrollReveal, StaggerReveal } from "../../components/scroll-reveal";
import { ContactForm } from "../../components/contact-form";
import { contactOptions } from "../../lib/site-data";

export const metadata = {
  title: "Contact",
  description:
    "Start a project conversation with YCD Studio. Architecture, interiors, and tenant improvement design in the San Francisco Bay Area.",
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Whether you have a detailed brief or just an idea, we're here to listen. Fill out the form and we'll get back to you within 24 hours."
      />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Start Here"
              title="Tell us what you're thinking."
              description="Just the basics — we'll figure out the rest together."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Prefer something different?"
              title="Other ways to reach us."
            />
          </ScrollReveal>
          <StaggerReveal className="contact-grid" staggerDelay={0.15}>
            {contactOptions.map((option) => (
              <article className="contact-card" key={option.title}>
                <div className="contact-card__label">{option.label}</div>
                <h3 className="contact-card__title">{option.title}</h3>
                <p className="contact-card__desc">{option.description}</p>
                <a className="contact-card__link" href={option.href}>
                  {option.cta}
                </a>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="cta">
        <div className="cta__bg" aria-hidden="true" />
        <div className="container">
          <ScrollReveal>
            <h2 className="cta__title">We&apos;re just a conversation away.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="cta__desc">
              Call us at +1 415-300-0057 or email info@ycd.studio.
              <br />
              However you reach out, we&apos;ll respond within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="cta__actions">
              <a
                className="btn btn--inverse btn--large"
                href="mailto:info@ycd.studio?subject=Project%20Inquiry"
              >
                Send an email
              </a>
              <a
                className="btn btn--ghost-light btn--large"
                href="tel:+14153000057"
              >
                Call us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
