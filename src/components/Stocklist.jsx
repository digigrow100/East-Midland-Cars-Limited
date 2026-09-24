"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import peugeot3008Image from "@/assets/images/copper_metallic_suv_at_dealership.webp";
import mercedesAClassImage from "@/assets/images/red_luxury_hatchback_in_modern_showroom.webp";
import bmw2SeriesImage from "@/assets/images/sleek_black_convertible_showroom_display.webp";
import bmw1SeriesImage from "@/assets/images/glossy_black_hatchback_at_dealership.webp";
import audiTTImage from "@/assets/images/sleek_black_coupe_at_the_dealership.webp";
import hondaCivicImage from "@/assets/images/silver_hatchback_at_the_dealership.webp";

const BODY_TYPES = [
  { value: "all", label: "All Bodies", count: 45 },
  { value: "hatchback", label: "Hatchback", count: 24 },
  { value: "suv", label: "SUV", count: 20 },
  { value: "estate", label: "Estate", count: 5 },
  { value: "coupe", label: "Coupe", count: 3 },
  { value: "convertible", label: "Convertible", count: 2 },
  { value: "saloon", label: "Saloon", count: 2 },
];

const MAKES = [
  { value: "all", label: "All Makes (45)" },
  { value: "bmw", label: "BMW (11)" },
  { value: "mercedes", label: "Mercedes-Benz (9)" },
  { value: "audi", label: "Audi (8)" },
  { value: "peugeot", label: "Peugeot (5)" },
  { value: "volkswagen", label: "Volkswagen (4)" },
  { value: "honda", label: "Honda (3)" },
  { value: "land-rover", label: "Land Rover (2)" },
  { value: "nissan", label: "Nissan (2)" },
  { value: "skoda", label: "Skoda (1)" },
];

const CARS = [
  {
    make: "peugeot",
    body: "suv",
    price: 13999,
    monthly: 249,
    year: "2020 (69 REG)",
    trim: "GT LINE PREMIUM",
    title: "Peugeot 3008 1.2 PureTech",
    subtitle: "Pan Roof • 180° Camera • Focal Sound • Half Leather",
    mileage: "47,000 mi",
    gearbox: "Auto",
    fuel: "Petrol",
    photos: 28,
    badges: ["Just Arrived", "1 Owner"],
    img: peugeot3008Image,
    alt: "2020 bronze copper metallic Peugeot 3008 GT Line Premium SUV on the East Midland Cars Leicester forecourt",
  },
  {
    make: "mercedes",
    body: "hatchback",
    price: 12499,
    monthly: 226,
    year: "2016 (66 REG)",
    trim: "AMG LINE PREM",
    title: "Mercedes-Benz A-Class A220d",
    subtitle: "Heated Seats • Reverse Camera • Night Package",
    mileage: "61,200 mi",
    gearbox: "Auto",
    fuel: "Diesel",
    photos: 34,
    badges: ["4MATIC AWD"],
    img: mercedesAClassImage,
    alt: "Bright red Mercedes Benz A Class A220d AMG Line hatchback under East Midland Cars showroom lighting",
  },
  {
    make: "bmw",
    body: "convertible",
    price: 11999,
    monthly: 215,
    year: "2016 (66 REG)",
    trim: "CONVERTIBLE",
    title: "BMW 2 Series 225d M Sport",
    subtitle: "Dakota Leather • Pro Nav • Heated Steering Wheel",
    mileage: "58,400 mi",
    gearbox: "Auto",
    fuel: "Diesel",
    photos: 42,
    badges: ["M Sport", "Harman Kardon"],
    img: bmw2SeriesImage,
    alt: "Metallic sapphire black BMW 2 Series 225d M Sport Convertible with the top down outside a British showroom",
  },
  {
    make: "bmw",
    body: "hatchback",
    price: 11999,
    monthly: 215,
    year: "2019 (19 REG)",
    trim: "118i SPORT",
    title: "BMW 1 Series 118i Sport Hatch",
    subtitle: "Parking Sensors • Cruise Control • DAB Radio • iDrive",
    mileage: "35,000 mi",
    gearbox: "Manual",
    fuel: "Petrol",
    photos: 26,
    badges: ["Low Mileage"],
    img: bmw1SeriesImage,
    alt: "BMW 1 Series 118i Sport hatchback in East Midland Cars Leicester stock",
  },
  {
    make: "audi",
    body: "coupe",
    price: 8499,
    monthly: 165,
    year: "2012 (12 REG)",
    trim: "BLACK EDITION",
    title: "Audi TT 2.0 TFSI Coupe",
    subtitle: "BOSE Premium Sound • Rotor 19\" Alloys • Xenons",
    mileage: "78,000 mi",
    gearbox: "S Tronic",
    fuel: "Petrol",
    photos: 30,
    badges: ["Quattro 4WD"],
    img: audiTTImage,
    alt: "Audi TT Black Edition Coupe with Quattro 4WD badge on East Midland Cars forecourt",
  },
  {
    make: "honda",
    body: "hatchback",
    price: 7999,
    monthly: 149,
    year: "2016 (16 REG)",
    trim: "i-VTEC S",
    title: "Honda Civic 1.4 i-VTEC S",
    subtitle: "Blind Spot Assist • Bluetooth Audio • Magic Seats",
    mileage: "18,732 mi",
    gearbox: "Manual",
    fuel: "Petrol",
    photos: 22,
    badges: ["Only 18k Miles"],
    img: hondaCivicImage,
    alt: "Honda Civic 1.4 i-VTEC S hatchback with ultra low mileage at East Midland Cars Leicester",
  },
];

export default function Stocklist() {
  const [bodyType, setBodyType] = useState("all");
  const [make, setMake] = useState("all");
  const [maxPrice, setMaxPrice] = useState(25000);
  const [maxMonthly, setMaxMonthly] = useState(450);
  const [keyword, setKeyword] = useState("");
  const [ulezOnly, setUlezOnly] = useState(true);

  const filtered = useMemo(() => {
    return CARS.filter((car) => {
      if (bodyType !== "all" && car.body !== bodyType) return false;
      if (make !== "all" && car.make !== make) return false;
      if (car.price > maxPrice) return false;
      if (car.monthly > maxMonthly) return false;
      if (keyword && !`${car.title} ${car.subtitle} ${car.trim}`.toLowerCase().includes(keyword.toLowerCase())) {
        return false;
      }
      return true;
    });
    // ULEZ toggle is visual only in this dataset: every current car is
    // ULEZ compliant, so it never removes results — real inventory data
    // would need a per-vehicle ULEZ flag to filter on.
  }, [bodyType, make, maxPrice, maxMonthly, keyword]);

  function resetFilters() {
    setBodyType("all");
    setMake("all");
    setMaxPrice(25000);
    setMaxMonthly(450);
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

          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between font-label-sm text-label-sm">
              <span className="text-on-surface-variant uppercase font-semibold">Cash Budget</span>
              <span className="text-secondary font-bold">Up to £{maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={5000}
              max={25000}
              step={500}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-secondary bg-surface-container-high rounded h-1.5 cursor-pointer"
            />
            <div className="flex justify-between font-legal-fineprint text-legal-fineprint text-outline">
              <span>£5,000</span>
              <span>£15,000</span>
              <span>£25,000+</span>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between font-label-sm text-label-sm">
              <span className="text-on-surface-variant uppercase font-semibold">Monthly Finance</span>
              <span className="text-secondary font-bold">Up to £{maxMonthly}/mo</span>
            </div>
            <input
              type="range"
              min={150}
              max={450}
              step={10}
              value={maxMonthly}
              onChange={(e) => setMaxMonthly(Number(e.target.value))}
              className="w-full accent-secondary bg-surface-container-high rounded h-1.5 cursor-pointer"
            />
            <div className="flex justify-between font-legal-fineprint text-legal-fineprint text-outline">
              <span>£150/mo</span>
              <span>£300/mo</span>
              <span>£450/mo+</span>
            </div>
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
            <a className="inline-flex items-center gap-space-xs text-secondary-fixed font-bold font-body-sm text-body-sm hover:underline" href="tel:01162898888">
              <span className="material-symbols-outlined text-[18px]">call</span>
              0116 289 8888
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
            or call us on <a className="text-secondary font-semibold" href="tel:01162898888">0116 289 8888</a> and
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
                  <div className="pt-space-xs flex items-baseline justify-between bg-surface-container-low/70 p-2.5 rounded-lg">
                    <div>
                      <p className="font-headline-md text-headline-md text-on-surface font-bold tabular-nums">
                        £{car.price.toLocaleString()}
                      </p>
                      <p className="font-legal-fineprint text-legal-fineprint text-outline">Fair Market Valuation</p>
                    </div>
                    <div className="text-right">
                      <p className="font-headline-sm text-headline-sm text-secondary font-bold tabular-nums">
                        £{car.monthly} <span className="font-label-sm text-label-sm font-normal text-on-surface-variant">/mo</span>
                      </p>
                      <p className="font-legal-fineprint text-legal-fineprint text-secondary font-semibold">9.9% APR Rep</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-space-xs pt-1">
                    <a href="tel:01162898888" className="w-full py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm font-semibold transition-colors text-center">
                      Reserve £99
                    </a>
                    <a href="tel:01162898888" className="w-full py-2 rounded-lg bg-primary hover:bg-inverse-surface text-on-primary font-label-sm text-label-sm font-semibold transition-colors text-center">
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
            <a href="tel:01162898888" className="px-5 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-all flex items-center justify-center gap-2 shadow-sm font-semibold">
              <span className="material-symbols-outlined text-[18px]">travel_explore</span>
              Request Custom Sourcing
            </a>
            <a href="tel:01162898888" className="px-5 py-3 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-surface-container-high hover:text-on-surface transition-all flex items-center justify-center gap-2 font-semibold">
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call Sales Desk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
