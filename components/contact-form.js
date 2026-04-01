"use client";

import { useState } from "react";
import Link from "next/link";

const projectTypes = [
  "Restaurant / Cafe",
  "Retail / Commercial",
  "Tenant Improvement",
  "Residential Remodel",
  "New Construction",
  "ADU / JADU",
  "Other",
];

const budgetRanges = [
  "Under $50k",
  "$50k – $150k",
  "$150k – $500k",
  "$500k+",
  "Not sure yet",
];

const timelines = [
  "Ready now",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Just exploring",
];

export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Simulate API call (wire to real endpoint later)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="var(--accent)" opacity="0.1" />
            <path d="M16 24l6 6 12-12" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="contact-form__success-title">We&apos;ve got it.</h3>
        <p className="contact-form__success-text">
          Thanks, {formData.name.split(" ")[0]}. We&apos;ll review your project details and get back to you within 24 hours.
        </p>
        <p className="contact-form__success-text">
          In the meantime, feel free to{" "}
          <Link href="/work" className="contact-form__success-link">explore our work</Link>.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-name">Name</label>
          <input
            className="contact-form__input"
            type="text"
            id="cf-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-email">Email</label>
          <input
            className="contact-form__input"
            type="email"
            id="cf-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="contact-form__row contact-form__row--three">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-type">Project type</label>
          <select
            className="contact-form__select"
            id="cf-type"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="" disabled>Select one</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-budget">Budget range</label>
          <select
            className="contact-form__select"
            id="cf-budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="" disabled>Select one</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-timeline">Timeline</label>
          <select
            className="contact-form__select"
            id="cf-timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
          >
            <option value="" disabled>Select one</option>
            {timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="cf-message">
          Message <span className="contact-form__optional">(optional)</span>
        </label>
        <textarea
          className="contact-form__textarea"
          id="cf-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us a bit about your project — the space, the vision, the vibe. Whatever feels right."
        />
      </div>

      {status === "error" && (
        <p className="contact-form__error">
          Something went wrong — try again or email us directly at{" "}
          <a href="mailto:info@ycd.studio">info@ycd.studio</a>.
        </p>
      )}

      <button
        className="btn btn--primary btn--large contact-form__submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send it over"}
      </button>
    </form>
  );
}
