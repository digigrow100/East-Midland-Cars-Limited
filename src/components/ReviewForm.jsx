"use client";

import { useState } from "react";

const RATING_LABELS = {
  1: "1.0 / 5.0 (Needs Improvement)",
  2: "2.0 / 5.0 (Fair)",
  3: "3.0 / 5.0 (Good)",
  4: "4.0 / 5.0 (Very Good)",
  5: "5.0 / 5.0 (Excellent)",
};

export default function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
    setRating(5);
  }

  return (
    <form className="space-y-space-md" onSubmit={handleSubmit}>
      <div className="space-y-1">
        <label className="font-label-md text-label-md text-on-surface uppercase font-semibold">
          Select Overall Rating
        </label>
        <div className="flex items-center gap-2 pt-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              className={`focus:outline-none ${value <= rating ? "text-amber-400" : "text-outline"}`}
              aria-label={`${value} star${value > 1 ? "s" : ""}`}
            >
              <span className="material-symbols-outlined text-[32px]">star</span>
            </button>
          ))}
          <span className="ml-2 font-label-md text-label-md text-on-surface font-semibold">
            {RATING_LABELS[rating]}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="space-y-1">
          <label className="font-label-md text-label-md text-on-surface uppercase font-semibold" htmlFor="rev-name">
            Full Name *
          </label>
          <input
            id="rev-name"
            required
            type="text"
            placeholder="e.g. David Clarke"
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <div className="space-y-1">
          <label className="font-label-md text-label-md text-on-surface uppercase font-semibold" htmlFor="rev-email">
            Email Address (Verification Only) *
          </label>
          <input
            id="rev-email"
            required
            type="email"
            placeholder="david@example.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="space-y-1">
          <label className="font-label-md text-label-md text-on-surface uppercase font-semibold" htmlFor="rev-car">
            Vehicle Purchased / Inquired *
          </label>
          <input
            id="rev-car"
            required
            type="text"
            placeholder="e.g. 2019 Audi A4 S Line"
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <div className="space-y-1">
          <label className="font-label-md text-label-md text-on-surface uppercase font-semibold" htmlFor="rev-location">
            Your Town / City
          </label>
          <input
            id="rev-location"
            type="text"
            placeholder="e.g. Leicester / Loughborough"
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="font-label-md text-label-md text-on-surface uppercase font-semibold" htmlFor="rev-message">
          Your Detailed Feedback *
        </label>
        <textarea
          id="rev-message"
          required
          rows={4}
          placeholder="Tell us about the vehicle condition, staff assistance, handover quality, or finance process..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
        />
      </div>

      <div className="flex items-center justify-between pt-space-xs">
        <p className="font-legal-fineprint text-legal-fineprint text-outline">
          By submitting, you agree to our verified customer publication guidelines.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-space-xs px-6 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container hover:text-on-secondary transition-all shadow-md"
        >
          <span>Submit Experience</span>
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </div>

      {submitted && (
        <div className="p-space-md bg-surface-container rounded-lg font-body-sm text-body-sm text-emerald-800 flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-emerald-600">check_circle</span>
          Thank you! Your testimonial has been received and logged for audit verification.
        </div>
      )}
    </form>
  );
}
