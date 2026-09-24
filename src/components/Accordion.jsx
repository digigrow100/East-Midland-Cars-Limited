"use client";

import { useState } from "react";

/**
 * Reusable FAQ / accordion list driven by React state instead of manual
 * classList/hidden toggling. `items` is an array of { question, answer }.
 */
export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-space-sm">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden"
          >
            <button
              type="button"
              className="w-full p-space-md text-left flex justify-between items-center gap-space-md hover:bg-surface-container-low/50 transition-colors"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-headline-sm text-headline-sm text-on-surface">
                {item.question}
              </span>
              <span
                className="material-symbols-outlined text-secondary transition-transform"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
