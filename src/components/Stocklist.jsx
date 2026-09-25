"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import audiRs3Image from "@/assets/images/audi_rs3_green_side_profile.webp";
import audiRs6Image from "@/assets/images/audi_rs6_blue_used_car.webp";
import bmwX5Image from "@/assets/images/bmw_x5_used_car.webp";
import mercedesC63Image from "@/assets/images/mercedes_amg_c63_rear_view.webp";
import mercedesClaImage from "@/assets/images/mercedes_cla_red_used_car.webp";
import nissanQashqaiImage from "@/assets/images/nissan_qashqai_used_car.webp";
import rangeRoverSportImage from "@/assets/images/range_rover_sport_used_car.webp";
import volkswagenGolfRImage from "@/assets/images/volkswagen_golf_r_blue_used_car.webp";

const BODY_TYPES = [
  { value: "all", label: "All Bodies", count: 8 },
  { value: "hatchback", label: "Hatchback", count: 2 },
  { value: "suv", label: "SUV", count: 3 },
  { value: "estate", label: "Estate", count: 1 },
  { value: "coupe", label: "Coupe", count: 1 },
  { value: "saloon", label: "Saloon", count: 1 },
];

const MAKES = [
  { value: "all", label: "All Makes (8)" },
  { value: "audi", label: "Audi (2)" },
  { value: "bmw", label: "BMW (1)" },
  { value: "mercedes", label: "Mercedes-Benz (2)" },
  { value: "nissan", label: "Nissan (1)" },
  { value: "land-rover", label: "Land Rover (1)" },
  { value: "volkswagen", label: "Volkswagen (1)" },
];

const CARS = [
  {
    make: "audi",
    body: "hatchback",
    year: "2023 (23 REG)",
    trim: "RS3 QUATTRO",
    title: "Audi RS3 Sportback Quattro",
    subtitle: "Kyalami Green • RS Sports Exhaust • Bang & Olufsen Sound",
    mileage: "8,500 mi",
    gearbox: "S Tronic",
    fuel: "Petrol",
    photos: 6,
    badges: ["Showroom Condition", "Quattro AWD"],
    img: audiRs3Image,
    alt: "Kyalami Green Audi RS3 Sportback Quattro parked in the East Midland Cars Leicester showroom",
  },
  {
    make: "audi",
    body: "estate",
    year: "2016 (16 REG)",
    trim: "RS6 AVANT",
    title: "Audi RS6 Avant Quattro",
    subtitle: "Panoramic Roof • Tan Leather Interior • Full Service History",
    mileage: "52,000 mi",
    gearbox: "Tiptronic",
    fuel: "Petrol",
    photos: 1,
    badges: ["Quattro AWD"],
    img: audiRs6Image,
    alt: "Blue Audi RS6 Avant Quattro estate in the East Midland Cars Leicester showroom",
  },
  {
    make: "bmw",
    body: "suv",
    year: "2022 (72 REG)",
    trim: "X5 M SPORT",
    title: "BMW X5 xDrive M Sport",
    subtitle: "Panoramic Sky Lounge Roof • M Sport Package • Approved Dealer",
    mileage: "18,000 mi",
    gearbox: "Auto",
    fuel: "Petrol",
    photos: 1,
    badges: ["M Sport"],
    img: bmwX5Image,
    alt: "Blue BMW X5 M Sport SUV in the East Midland Cars Leicester showroom",
  },
  {
    make: "mercedes",
    body: "saloon",
    year: "2016 (16 REG)",
    trim: "AMG C63 S",
    title: "Mercedes-AMG C63 S Saloon",
    subtitle: "AMG Performance Exhaust • Alcantara Trim • Approved Dealer",
    mileage: "45,000 mi",
    gearbox: "Auto",
    fuel: "Petrol",
    photos: 2,
    badges: ["AMG Performance"],
    img: mercedesC63Image,
    alt: "White Mercedes-AMG C63 S saloon in the East Midland Cars Leicester showroom",
  },
  {
    make: "mercedes",
    body: "coupe",
    year: "2019 (69 REG)",
    trim: "CLA AMG LINE",
    title: "Mercedes-Benz CLA AMG Line",
    subtitle: "AMG Styling Pack • Tan Leather Interior • Approved Dealer",
    mileage: "32,000 mi",
    gearbox: "Auto",
    fuel: "Petrol",
    photos: 1,
    badges: ["AMG Line"],
    img: mercedesClaImage,
    alt: "Red Mercedes-Benz CLA AMG Line coupe in the East Midland Cars Leicester showroom",
  },
  {
    make: "nissan",
    body: "suv",
    year: "2021 (71 REG)",
    trim: "N-CONNECTA",
    title: "Nissan Qashqai N-Connecta",
    subtitle: "Reverse Camera • Apple CarPlay • Approved Dealer",
    mileage: "24,000 mi",
    gearbox: "Auto",
    fuel: "Petrol",
    photos: 1,
    badges: ["Low Mileage"],
    img: nissanQashqaiImage,
    alt: "Grey Nissan Qashqai N-Connecta SUV in the East Midland Cars Leicester showroom",
  },
  {
    make: "land-rover",
    body: "suv",
    year: "2016 (16 REG)",
    trim: "AUTOBIOGRAPHY DYNAMIC",
    title: "Range Rover Sport Autobiography Dynamic",
    subtitle: "Panoramic Roof • 22\" Alloys • Approved Dealer",
    mileage: "68,000 mi",
    gearbox: "Auto",
    fuel: "Diesel",
    photos: 1,
    badges: ["Dynamic Pack"],
    img: rangeRoverSportImage,
    alt: "Black Range Rover Sport Autobiography Dynamic SUV in the East Midland Cars Leicester showroom",
  },
  {
    make: "volkswagen",
    body: "hatchback",
    year: "2015 (64 REG)",
    trim: "GOLF R",
    title: "Volkswagen Golf R",
    subtitle: "4MOTION AWD • DCC Adaptive Chassis • Approved Dealer",
    mileage: "54,000 mi",
    gearbox: "DSG Auto",
    fuel: "Petrol",
    photos: 1,
    badges: ["4MOTION AWD"],
    img: volkswagenGolfRImage,
    alt: "Blue Volkswagen Golf R hatchback in the East Midland Cars Leicester showroom",
  },
];

export default function Stocklist() {
  const [bodyType, setBodyType] = useState("all");
  const [make, setMake] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [ulezOnly, setUlezOnly] = useState(true);

  const filtered = useMemo(() => {
    return CARS.filter((car) => {
      if (bodyType !== "all" && car.body !== bodyType) return false;
      if (make !== "all" && car.make !== make) return false;
      if (keyword && !`${car.title} ${car.subtitle} ${car.trim}`.toLowerCase().includes(keyword.toLowerCase())) {
        return false;
      }
      return true;
    });
    // ULEZ toggle is visual only in this dataset: every current car is
    // ULEZ compliant, so it never removes results — real inventory data
    // would need a per-vehicle ULEZ flag to filter on.
  }, [bodyType, make, keyword]);

  function resetFilters() {
    setBodyType("all");
    setMake("all");
    setKeyword("");
    setUlezOnly(true);
  }

  return (
    <>
      {/* Body type quick selector pills */}
      <div className="lg:col-span-12 -mt-1 mb-1">
        <div className="w-full bg-surface-container-lowest py-space-md shadow-sm rounded-xl overflow-x-auto">
          <div className="flex items-center gap-space-xs min-w-max px-space-md">
            <span className="font-label-md text-label-md text-on-surface-variant mr-space-xs uppercase tracking-wider">
              Body Style:
            </span>
            {BODY_TYPES.map((bt) => (
              <button
                key={bt.value}
                type="button"
                onClick={() => setBodyType(bt.value)}
                className={`px-3.5 py-1.5 rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-all min-h-[40px] ${
                  bodyType === bt.value
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                }`}
              >
                <span>{bt.label}</span>
                <span className="bg-surface-variant text-on-surface px-1.5 py-0.5 rounded text-[10px]">
                  {bt.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter sidebar */}
      <aside className="lg:col-span-3 space-y-space-md">
        <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md lg:sticky lg:top-32">
          <div className="flex items-center justify-between pb-space-sm bg-surface-container-low px-3 py-2 rounded-lg">
            <div className="flex items-center gap-space-xs text-on-surface">
              <span className="material-symbols-outlined text-[20px] text-secondary">tune</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-tight">Refine Stock</span>
            </div>
            <button type="button" onClick={resetFilters} className="text-secondary font-label-sm text-label-sm hover:underline">
              Reset All
            </button>
          </div>

          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
              Vehicle Search
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-[18px] text-outline">search</span>
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:shadow-sm"
                placeholder="e.g. AMG, M Sport, Panoramic..."
                type="text"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
              Make / Marque
            </label>
            <select
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className="w-full px-3 py-2 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm focus:outline-none"
            >
              {MAKES.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1 pt-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Gearbox</label>
            <div className="grid grid-cols-2 gap-space-xs">
              <button type="button" className="py-1.5 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold text-center min-h-[40px]">
                Automatic (29)
              </button>
              <button type="button" className="py-1.5 px-3 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm text-center hover:bg-surface-container min-h-[40px]">
                Manual (16)
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Fuel Type</label>
            <div className="grid grid-cols-3 gap-1">
              <button type="button" className="py-1.5 px-2 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm text-center min-h-[40px]">
                Petrol
              </button>
              <button type="button" className="py-1.5 px-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm text-center min-h-[40px]">
                Diesel
              </button>
              <button type="button" className="py-1.5 px-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm text-center min-h-[40px]">
                Hybrid
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Max Mileage</label>
            <div className="flex items-center gap-1.5">
              <button type="button" className="flex-1 py-1.5 px-1 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm text-center hover:bg-surface-container min-h-[40px]">
                Under 30k
              </button>
              <button type="button" className="flex-1 py-1.5 px-1 rounded-lg bg-surface-container-high font-semibold text-on-surface font-label-sm text-label-sm text-center min-h-[40px]">
                Under 60k
              </button>
              <button type="button" className="flex-1 py-1.5 px-1 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm text-center hover:bg-surface-container min-h-[40px]">
                100k
              </button>
            </div>
          </div>

          <div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[20px] text-secondary">eco</span>
              <div>
                <p className="font-label-sm text-label-sm font-bold text-on-surface">ULEZ Compliant</p>
                <p className="font-legal-fineprint text-legal-fineprint text-on-surface-variant">Zero CAZ charges</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={ulezOnly}
                onChange={(e) => setUlezOnly(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary" />
            </label>
          </div>

          <div className="p-space-md bg-primary-container text-on-primary rounded-xl space-y-space-xs shadow-sm">
            <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container">
              Leicester Specialist Help
            </p>
            <p className="font-headline-sm text-headline-sm">Speak with our sales team today</p>
            <a className="inline-flex items-center gap-space-xs text-secondary-fixed font-bold font-body-sm text-body-sm hover:underline" href="tel:01163194785">
              <span className="material-symbols-outlined text-[18px]">call</span>
              0116 319 4785
            </a>
          </div>
        </div>
      </aside>

      {/* Vehicle catalog */}
      <section className="lg:col-span-9 space-y-space-md">
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm text-on-surface">
            <span className="font-headline-sm text-headline-sm font-bold">
              Showing {filtered.length} of {CARS.length} vehicles
            </span>
            <span className="hidden md:inline px-2 py-0.5 rounded bg-surface-container-high text-on-secondary-container font-label-sm text-label-sm">
              Leicester Stock
            </span>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm text-center text-on-surface-variant font-body-md text-body-md">
            No vehicles match those filters right now — try widening your budget or body style,
            or call us on <a className="text-secondary font-semibold" href="tel:01163194785">0116 319 4785</a> and
            our team will find something close.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-md">
            {filtered.map((car, index) => (
              <div key={car.title} className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                  <Image
                    src={car.img}
                    alt={car.alt}
                    width={480}
                    height={360}
                    priority={index === 0}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                    {car.badges.map((b) => (
                      <span key={b} className="bg-secondary text-on-secondary px-2 py-0.5 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider">
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-surface/90 backdrop-blur-md px-2 py-0.5 rounded font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[14px]">photo_camera</span> {car.photos} Photos
                  </div>
                </div>
                <div className="p-space-md flex-1 flex flex-col justify-between space-y-space-sm">
                  <div>
                    <div className="flex items-center justify-between text-outline text-legal-fineprint font-bold uppercase tracking-wider mb-1">
                      <span>{car.year}</span>
                      <span className="text-secondary font-bold">{car.trim}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                      {car.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{car.subtitle}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-1 py-1 bg-surface-container-low rounded-lg p-1.5 text-center font-label-sm text-label-sm text-on-surface">
                    <div className="flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">speed</span>
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">settings</span>
                      <span>{car.gearbox}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">local_gas_station</span>
                      <span>{car.fuel}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between font-legal-fineprint text-legal-fineprint text-on-surface-variant pt-1">
                    <span className="inline-flex items-center gap-0.5 text-secondary font-semibold">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span> ULEZ Compliant
                    </span>
                    <span className="inline-flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px] text-outline">verified</span> RAC Inspected
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-space-xs pt-1">
                    <a href="tel:01163194785" className="w-full py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm font-semibold transition-colors text-center">
                      Enquire Now
                    </a>
                    <a href="tel:01163194785" className="w-full py-2 rounded-lg bg-primary hover:bg-inverse-surface text-on-primary font-label-sm text-label-sm font-semibold transition-colors text-center">
                      View Vehicle
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-primary-container text-on-primary p-space-lg rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="space-y-space-xs max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-secondary-container font-label-sm text-label-sm uppercase font-bold tracking-wider">
              <span className="material-symbols-outlined text-[18px]">find_in_page</span>
              Bespoke Vehicle Sourcing Service
            </div>
            <h3 className="font-headline-lg text-headline-lg font-bold">Can&apos;t find your exact specification?</h3>
            <p className="font-body-md text-body-md text-inverse-on-surface">
              We source 20+ pristine executive, performance, and everyday quality vehicles weekly
              across the UK. Tell us your ideal make, mileage, trim, and budget.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-space-xs w-full md:w-auto shrink-0">
            <a href="tel:01163194785" className="px-5 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-all flex items-center justify-center gap-2 shadow-sm font-semibold">
              <span className="material-symbols-outlined text-[18px]">travel_explore</span>
              Request Custom Sourcing
            </a>
            <a href="tel:01163194785" className="px-5 py-3 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-surface-container-high hover:text-on-surface transition-all flex items-center justify-center gap-2 font-semibold">
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call Sales Desk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
