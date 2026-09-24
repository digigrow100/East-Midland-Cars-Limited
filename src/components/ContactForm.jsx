"use client";

import { useState } from "react";

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Book a Viewing / Test Drive",
  "Finance Question",
  "Part Exchange Valuation",
  "Warranty / Aftersales",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  }

  return (
    <form className="space-y-space-md" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="space-y-1">
          <label className="font-label-md text-label-md text-on-surface uppercase font-semibold" htmlFor="contact-name">
            Full Name *
          </label>
          <input
            id="contact-name"
            required
            type="text"
            placeholder="e.g. Sarah Thompson"
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <div className="space-y-1">
          <label className="font-label-md text-label-md text-on-surface uppercase font-semibold" htmlFor="contact-phone">
            Phone Number *
          </label>
          <input
            id="contact-phone"
            required
            type="tel"
            placeholder="07xxx xxxxxx"
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="space-y-1">
          <label className="font-label-md text-label-md text-on-surface uppercase font-semibold" htmlFor="contact-email">
            Email Address *
          </label>
          <input
            id="contact-email"
            required
            type="email"
            placeholder="sarah@example.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <div className="space-y-1">
          <label className="font-label-md text-label-md text-on-surface uppercase font-semibold" htmlFor="contact-reason">
            Reason For Enquiry
          </label>
          <select
            id="contact-reason"
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary appearance-none"
          >
            {ENQUIRY_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="font-label-md text-label-md text-on-surface uppercase font-semibold" htmlFor="contact-message">
          Your Message *
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          placeholder="Let us know which vehicle you're interested in, or what you'd like help with..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
        />
      </div>

      <div className="flex items-center justify-between pt-space-xs">
        <p className="font-legal-fineprint text-legal-fineprint text-outline">
          We&apos;ll never share your details with third parties.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-space-xs px-6 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container hover:text-on-secondary transition-all shadow-md"
        >
          <span>Send Message</span>
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </div>

      {submitted && (
        <div className="p-space-md bg-surface-container rounded-lg font-body-sm text-body-sm text-emerald-800 flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-emerald-600">check_circle</span>
          Thank you! Your message has been received. Our Leicester team will be in touch shortly.
        </div>
      )}
    </form>
  );
}
