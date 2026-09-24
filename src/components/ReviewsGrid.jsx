"use client";

import { useMemo, useState } from "react";

const FILTERS = [
  { value: "all", label: "All Reviews", count: 82 },
  { value: "prestige", label: "Audi & German Prestige", count: 34 },
  { value: "suv", label: "Family SUVs", count: 25 },
  { value: "hatchback", label: "First Car / Hatchback", count: 18 },
  { value: "finance", label: "Finance Customers", count: 41 },
];

const REVIEWS = [
  {
    initials: "AM",
    name: "Arnold M.",
    location: "Verified Buyer • Nottingham",
    categories: ["prestige"],
    vehicle: "Audi TT Coupe Black Edition",
    body: "Traveled from Nottingham specifically for an Audi TT Black Edition. Pristine condition, exactly as described. The team explained the full service records and warranty options smoothly. 5 stars!",
    date: "12 May 2024",
    tag: "RAC Handover Inspection",
  },
  {
    initials: "CC",
    name: "Charlotte C.",
    location: "Verified Buyer • Leicester",
    categories: ["prestige", "finance"],
    vehicle: "Mercedes-Benz A-Class AMG Line",
    body: "Helped me arrange finance through Finset within an hour! Professional, polite, and completely transparent with no hidden admin fees.",
    date: "28 April 2024",
    tag: "Finset HP Approved",
  },
  {
    initials: "PR",
    name: "Peter Ryan",
    location: "Verified Buyer • Loughborough",
    categories: ["hatchback"],
    vehicle: "Honda Civic VTEC SR",
    body: "Purchased my daughter's first car here. Trustworthy dealer with clear HPI history and zero pressure sales.",
    date: "19 April 2024",
    tag: "HPI Clear Verified",
  },
  {
    initials: "SF",
    name: "Stephen Fitt",
    location: "Verified Buyer • Derby",
    categories: ["suv"],
    vehicle: "Peugeot 3008 GT Line",
    body: "Great selection of executive cars in Leicester. The 128-point RAC inspection gave me total peace of mind.",
    date: "04 April 2024",
    tag: "128-Point RAC Audit",
  },
  {
    initials: "LV",
    name: "Lina D. & Vanessa H.",
    location: "Verified Handover • Coventry",
    categories: ["prestige", "finance"],
    vehicle: "BMW 2 Series Convertible M Sport",
    body: "Outstanding customer service from start to finish. Test drive was arranged promptly and delivery to our door was seamless.",
    date: "22 March 2024",
    tag: "Home Delivery Order",
  },
  {
    initials: "NT",
    name: "Nick Tolliday",
    location: "Verified Buyer • Leicester",
    categories: ["prestige"],
    vehicle: "BMW 3 Series 320d M Sport Touring",
    body: "First class, friendly, and knowledgeable team. They put customer satisfaction first. Best dealership experience in the East Midlands.",
    date: "15 March 2024",
    tag: "Part Exchange Handover",
  },
  {
    initials: "TJ",
    name: "Tyler James",
    location: "Verified Buyer • Birmingham",
    categories: ["hatchback"],
    vehicle: "Volkswagen Polo Match TSI",
    body: "Travelled across from Birmingham and it was 100% worth it. Car was freshly serviced with new brake pads and spotless valet.",
    date: "02 February 2024",
    tag: "Pre-Sale Full Service",
  },
  {
    initials: "LA",
    name: "Lisa Agate",
    location: "Verified Buyer • Northampton",
    categories: ["suv", "finance"],
    vehicle: "Land Rover Discovery Sport HSE",
    body: "Fantastic service and genuine aftercare support with the 12-month extended warranty. Wouldn't buy a car anywhere else.",
    date: "14 January 2024",
    tag: "12M RAC Comprehensive",
  },
  {
    initials: "DH",
    name: "David Harrison",
    location: "Verified Buyer • Market Harborough",
    categories: ["finance", "suv"],
    vehicle: "Nissan Qashqai N-Connecta",
    body: "Honest advice from real motor people. They gave me a fair part exchange valuation within 15 minutes and sorted PCP at competitive rates.",
    date: "08 January 2024",
    tag: "Finset PCP Handover",
  },
];

export default function ReviewsGrid() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => {
    if (filter === "all") return REVIEWS;
    return REVIEWS.filter((review) => review.categories.includes(filter));
  }, [filter]);

  return (
    <div className="space-y-space-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
        <div className="flex items-center gap-space-xs text-on-surface">
          <span className="material-symbols-outlined text-secondary text-[22px]">tune</span>
          <span className="font-headline-sm text-headline-sm">Filter Testimonials</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all min-h-[40px] ${
                filter === f.value
                  ? "bg-primary-container text-on-primary shadow-sm"
                  : "bg-surface-container text-on-surface hover:bg-surface-container-high"
              }`}
            >
              {f.label} <span className="ml-1 opacity-70">({f.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {visible.map((review) => (
          <article
            key={review.name}
            className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
          >
            <div className="space-y-space-md">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-11 h-11 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">{review.name}</h3>
                    <p className="font-legal-fineprint text-legal-fineprint text-outline flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px] text-emerald-600">verified</span> {review.location}
                    </p>
                  </div>
                </div>
                <div className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[16px]">star</span>
                  ))}
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container text-secondary font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[16px]">directions_car</span>
                {review.vehicle}
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">&ldquo;{review.body}&rdquo;</p>
            </div>
            <div className="mt-space-lg pt-space-md flex items-center justify-between text-outline font-legal-fineprint text-legal-fineprint">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span> {review.date}
              </span>
              <span className="text-secondary font-medium">{review.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
