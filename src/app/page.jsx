import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/images/audi_rs3_green_front.webp";
import audiRs3Image from "@/assets/images/audi_rs3_green_side_profile.webp";
import bmwX5Image from "@/assets/images/bmw_x5_used_car.webp";
import mercedesC63Image from "@/assets/images/mercedes_amg_c63_rear_view.webp";
import mercedesClaImage from "@/assets/images/mercedes_cla_red_used_car.webp";
import nissanQashqaiImage from "@/assets/images/nissan_qashqai_used_car.webp";
import rangeRoverSportImage from "@/assets/images/range_rover_sport_used_car.webp";
import showroomImage from "@/assets/images/audi_rs6_blue_used_car.webp";

export const metadata = {
  title: "East Midland Cars Limited | Quality Used Cars Leicester",
  description:
    "Handpicked premium used cars in Leicester with tailored HP/PCP finance from 8.9% APR and comprehensive warranty cover on every vehicle.",
};

const CARS = [
  {
    make: "audi",
    body: "hatchback",
    badge: "Featured Stock",
    badgeClass: "bg-secondary text-on-secondary",
    owner: "Quattro AWD",
    title: "Audi RS3 Sportback Quattro",
    subtitle: "2.5 TFSI Quattro S Tronic RS3 Sportback (2023)",
    specs: ["8,500 Miles", "S Tronic Auto", "Bang & Olufsen Sound", "RS Sports Exhaust"],
    desc: "Kyalami Green, showroom condition, full Audi service history, RS Design Package with contrast stitching.",
    img: audiRs3Image,
    alt: "Kyalami Green Audi RS3 Sportback Quattro parked on the East Midland Cars Leicester forecourt",
  },
  {
    make: "mercedes",
    body: "saloon",
    badge: "AMG Performance",
    badgeClass: "bg-secondary-container text-on-secondary-container",
    owner: "AMG Exhaust",
    title: "Mercedes-AMG C63 S Saloon",
    subtitle: "4.0 V8 Biturbo AMG C63 S Premium Saloon (2016)",
    specs: ["45,000 Miles", "Auto", "Alcantara Trim", "Performance Exhaust"],
    desc: "Full AMG Performance styling, Burmester premium sound, heated front seats, comprehensive service history.",
    img: mercedesC63Image,
    alt: "White Mercedes-AMG C63 S saloon on display in Leicester",
  },
  {
    make: "bmw",
    body: "suv",
    badge: "Popular Model",
    badgeClass: "bg-inverse-surface text-on-primary",
    owner: "M Sport",
    title: "BMW X5 xDrive M Sport",
    subtitle: "3.0 xDrive45e M Sport Auto SUV (2022)",
    specs: ["18,000 Miles", "Auto", "Panoramic Sky Lounge Roof", "M Sport Package"],
    desc: "Approved dealer vehicle, adaptive M suspension, heated & ventilated seats, full BMW service history.",
    img: bmwX5Image,
    alt: "Blue BMW X5 xDrive M Sport SUV outside East Midland Cars Leicester",
  },
  {
    make: "land-rover",
    body: "suv",
    badge: "Just Arrived",
    badgeClass: "bg-secondary text-on-secondary",
    owner: "Dynamic Pack",
    title: "Range Rover Sport Autobiography Dynamic",
    subtitle: "3.0 SDV6 Autobiography Dynamic Auto SUV (2016)",
    specs: ["68,000 Miles", "Diesel Auto", "22\" Alloys", "Panoramic Roof"],
    desc: "Autobiography Dynamic specification, adaptive air suspension, heated & cooled leather seats, tow bar fitted.",
    img: rangeRoverSportImage,
    alt: "Black Range Rover Sport Autobiography Dynamic SUV for sale in Leicester",
  },
  {
    make: "mercedes",
    body: "coupe",
    badge: "Sports Coupe",
    badgeClass: "bg-primary-container text-on-primary",
    owner: "AMG Line",
    title: "Mercedes-Benz CLA AMG Line",
    subtitle: "2.0 CLA220 AMG Line Auto Coupe (2019)",
    specs: ["32,000 Miles", "Auto", "Tan Leather Interior", "AMG Styling Pack"],
    desc: "AMG Line specification, ambient interior lighting, reversing camera, full Mercedes-Benz service history.",
    img: mercedesClaImage,
    alt: "Red Mercedes-Benz CLA AMG Line coupe for sale at East Midland Cars Leicester",
  },
  {
    make: "nissan",
    body: "suv",
    badge: "Low Mileage",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed-variant",
    owner: "Approved Dealer",
    title: "Nissan Qashqai N-Connecta",
    subtitle: "1.3 DiG-T N-Connecta Xtronic SUV (2021)",
    specs: ["24,000 Miles", "Xtronic Auto", "Apple CarPlay", "Reverse Camera"],
    desc: "Low mileage family SUV, passed clear vehicle history check, 3-month comprehensive warranty included.",
    img: nissanQashqaiImage,
    alt: "Grey Nissan Qashqai N-Connecta SUV with low mileage for sale in Leicester",
  },
];

const PILLARS = [
  {
    icon: "build_circle",
    title: "128-Point Inspection",
    desc: "Every vehicle is fully evaluated by qualified automotive technicians.",
  },
  {
    icon: "history_edu",
    title: "Clear HPI & Mileage",
    desc: "Guaranteed no outstanding finance, total loss, or unrecorded damage.",
  },
  {
    icon: "payments",
    title: "Finset Partner Finance",
    desc: "FCA regulated credit broker status (FRN 1058774 / 987805) with 20+ lenders.",
  },
  {
    icon: "sync_alt",
    title: "Fair Part Exchange",
    desc: "Instant valuations using live market data with no hidden admin deduction fees.",
  },
];

const REVIEWS = [
  {
    title: '"Traveled from Nottingham for an Audi RS3"',
    body: "Absolutely exceptional service, no pushy tactics, and the car was immaculate. The staff explained the service records in complete detail and arranged an extended warranty smoothly. Highly recommend!",
    author: "Arnold M.",
    meta: "Verified Buyer • Audi RS3 Sportback",
  },
  {
    title: '"Finance Arranged Within an Hour"',
    body: "Helped me arrange finance through Finset within an hour. Professional, polite, and reassuring from start to finish. Everything was transparent with no sudden fees. First-class customer service.",
    author: "Charlotte C.",
    meta: "Verified Buyer • Mercedes-AMG C63",
  },
  {
    title: '"Family SUV - Outstanding Trust"',
    body: "Purchased a reliable family SUV here. Trustworthy dealer with clear history check, 3-month warranty, and zero sales pressure. The team went above and beyond to make us feel confident.",
    author: "Peter R.",
    meta: "Verified Buyer • Nissan Qashqai",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-[80px] bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* Hero */}
          <section className="relative w-full overflow-hidden bg-primary-container text-on-primary">
            <div className="absolute -top-32 right-10 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-xl lg:py-space-2xl relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-7 space-y-space-lg">
                  <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container-high/15 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                      Leicester Showroom Now Open • Unit 38 Oswin Road
                    </span>
                  </div>
                  <div className="space-y-space-sm">
                    <h1 className="font-headline-xl text-headline-xl lg:text-display-hero font-bold tracking-tight text-on-primary uppercase leading-[1.08]">
                      Leicester&apos;s Premier Destination for{" "}
                      <span className="text-secondary-container">Quality Used Cars</span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-inverse-on-surface max-w-2xl leading-relaxed">
                      Handpicked premium vehicles, competitive tailored finance packages from{" "}
                      <strong className="text-on-primary">8.9% APR</strong>, and comprehensive
                      warranty protection standard with every vehicle.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
                    {[
                      {
                        icon: "star",
                        label: "4.8 / 5",
                        sub: "AutoTrader & Google",
                        href: "https://www.autotrader.co.uk/dealers/leicestershire/leicester/east-midland-cars-limited-10034803",
                      },
                      { icon: "verified_user", label: "HPI Clear", sub: "100% History Verified" },
                      { icon: "account_balance", label: "Finset", sub: "FCA FRN 1058774 Partner" },
                      { icon: "shield", label: "3M Warranty", sub: "Extendable to 36 Months" },
                    ].map((b) => {
                      const Tag = b.href ? "a" : "div";
                      return (
                        <Tag
                          key={b.label}
                          {...(b.href ? { href: b.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="p-3 rounded-lg bg-surface-container-high/10 backdrop-blur-sm hover:bg-surface-container-high/20 transition-colors"
                        >
                          <div className="flex items-center gap-1.5 text-secondary-container font-headline-sm text-headline-sm">
                            <span className="material-symbols-outlined text-[20px]">{b.icon}</span>
                            <span className="font-bold">{b.label}</span>
                          </div>
                          <p className="font-label-sm text-label-sm text-primary-fixed-dim mt-0.5">{b.sub}</p>
                        </Tag>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <a
                      href="#inventory"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary-container hover:text-on-secondary-container transition-all"
                    >
                      <span>Explore Current Stock (45+ Available)</span>
                      <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                    </a>
                    <a
                      href="#finance-section"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-high/20 text-on-primary font-label-lg text-label-lg hover:bg-surface-container-high/30 transition-all"
                    >
                      <span className="material-symbols-outlined text-[20px] text-secondary-container">credit_score</span>
                      <span>Apply for Low Rate Finance</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-inverse-surface group">
                    <Image
                      src={heroImage}
                      alt="Kyalami Green Audi RS3 Sportback Quattro at the East Midland Cars Leicester showroom"
                      width={640}
                      height={440}
                      priority
                      className="w-full h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-90" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-md bg-secondary text-on-secondary font-label-sm text-label-sm tracking-wide font-bold uppercase shadow-sm">
                        Featured Showroom Arrival
                      </span>
                      <span className="px-3 py-1 rounded-md bg-primary-container/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" /> Available Today
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-primary-container/90 backdrop-blur-md shadow-lg">
                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                        Handpicked Performance Series
                      </p>
                      <h2 className="font-headline-sm text-headline-sm text-on-primary font-bold">
                        Audi RS3 Sportback Quattro
                      </h2>
                      <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim">
                        Euro 6 • Verified Provenance • Low Mileage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Floating vehicle finder */}
          <section className="relative z-20 -mt-8 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop w-full">
            <div className="bg-primary-container text-on-primary rounded-xl p-space-lg shadow-xl">
              <div className="flex items-center justify-between gap-space-md pb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-[24px]">tune</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-primary uppercase font-bold tracking-tight">
                    Interactive Vehicle Finder
                  </h2>
                </div>
                <span className="font-label-md text-label-md text-primary-fixed-dim hidden sm:inline">
                  Unit 38 Oswin Road • Showing 45 Ready to Drive Cars
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm pt-space-xs">
                <div>
                  <label className="block font-label-sm text-label-sm text-primary-fixed-dim uppercase mb-1">Make</label>
                  <div className="relative">
                    <select className="w-full bg-inverse-surface text-on-primary font-body-sm text-body-sm rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer">
                      <option>All Makes (45 In Stock)</option>
                      <option>Audi (7)</option>
                      <option>BMW (7)</option>
                      <option>Mercedes-Benz (4)</option>
                      <option>Peugeot (2)</option>
                      <option>Land Rover (4)</option>
                      <option>Volkswagen (5)</option>
                      <option>Skoda (2)</option>
                      <option>Honda (3)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-3 text-[18px] text-primary-fixed-dim pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-primary-fixed-dim uppercase mb-1">Model Series</label>
                  <div className="relative">
                    <select className="w-full bg-inverse-surface text-on-primary font-body-sm text-body-sm rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer">
                      <option>All Models</option>
                      <option>3008 GT Line</option>
                      <option>A Class AMG Line</option>
                      <option>1 Series Sport</option>
                      <option>2 Series M Sport</option>
                      <option>TT Coupe</option>
                      <option>Civic i-VTEC</option>
                      <option>Discovery 4 HSE</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-3 text-[18px] text-primary-fixed-dim pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-primary-fixed-dim uppercase mb-1">Gearbox</label>
                  <div className="relative">
                    <select className="w-full bg-inverse-surface text-on-primary font-body-sm text-body-sm rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer">
                      <option>Any Gearbox</option>
                      <option>Automatic Only</option>
                      <option>Manual Only</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-3 text-[18px] text-primary-fixed-dim pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="flex items-end">
                  <a
                    href="https://www.autotrader.co.uk/dealers/leicestershire/leicester/east-midland-cars-limited-10034803"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full h-[44px] bg-secondary hover:bg-secondary-container hover:text-on-secondary-container text-on-secondary font-label-md text-label-md uppercase tracking-wider font-bold rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span className="material-symbols-outlined text-[20px]">search</span>
                    <span>Search 45 Vehicles</span>
                  </a>
                </div>
              </div>
              <div className="pt-space-md flex flex-wrap items-center gap-2">
                <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase mr-1">Quick Bodytype:</span>
                {[
                  { label: "All Stock (45)", icon: null },
                  { label: "Hatchback (24)", icon: "directions_car" },
                  { label: "SUV & 4x4 (20)", icon: "minor_crash" },
                  { label: "Estate (5)", icon: "airport_shuttle" },
                  { label: "Coupe (3)", icon: "sports_score" },
                  { label: "Convertible (2)", icon: "wb_sunny" },
                ].map((chip, i) => (
                  <button
                    key={chip.label}
                    type="button"
                    className={`px-3 py-1.5 rounded-lg font-label-sm text-label-sm transition-colors flex items-center gap-1.5 ${
                      i === 0
                        ? "bg-secondary text-on-secondary"
                        : "bg-inverse-surface hover:bg-secondary-container hover:text-on-secondary-container text-on-primary"
                    }`}
                  >
                    {chip.icon && <span className="material-symbols-outlined text-[16px]">{chip.icon}</span>}
                    <span>{chip.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured inventory */}
          <section className="w-full max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl" id="inventory">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    Leicester Certified Inventory
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl font-bold uppercase tracking-tight text-on-surface">
                  Featured Showroom Stock
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-1">
                  Every vehicle is RAC &amp; AA road-tested, mechanically verified with a full
                  128-point workshop report, and provided with complete provenance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {CARS.map((car, index) => (
                <article
                  key={car.title}
                  className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-surface-container">
                    <Image
                      src={car.img}
                      alt={car.alt}
                      width={480}
                      height={300}
                      priority={index === 0}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wide shadow-sm ${car.badgeClass}`}>
                      {car.badge}
                    </span>
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-primary-container/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-emerald-400">check_circle</span> {car.owner}
                    </span>
                  </div>
                  <div className="p-space-lg flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-secondary transition-colors">
                        {car.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{car.subtitle}</p>
                      <div className="flex flex-wrap gap-1.5 my-space-sm">
                        {car.specs.map((spec) => (
                          <span key={spec} className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                            {spec}
                          </span>
                        ))}
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-md">{car.desc}</p>
                    </div>
                    <div className="pt-space-sm bg-surface-container-low p-space-sm rounded-lg flex items-center justify-end">
                      <a
                        href="tel:01162898888"
                        className="px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-secondary transition-colors font-label-md text-label-md font-semibold inline-flex items-center gap-1"
                      >
                        <span>Enquire</span>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container flex flex-col md:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">garage</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Can&apos;t Find Your Exact Specification?
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    We source 20+ custom executive models every week directly from accredited UK dealer networks.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm w-full md:w-auto">
                <Link
                  href="/contact-us-visit"
                  className="w-full md:w-auto text-center px-5 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors shadow-sm"
                >
                  Request Specific Vehicle
                </Link>
                <a
                  href="https://www.autotrader.co.uk/dealers/leicestershire/leicester/east-midland-cars-limited-10034803"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-full md:w-auto text-center px-5 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold hover:bg-on-secondary-container transition-colors shadow-sm"
                >
                  View All 45+ Cars
                </a>
              </div>
            </div>
          </section>

          {/* Welcome / standard */}
          <section className="w-full bg-surface-container-low py-space-2xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-7 space-y-space-md">
                  <div className="inline-flex items-center gap-1.5 text-secondary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>The East Midland Cars Standard</span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl font-bold uppercase tracking-tight text-on-surface">
                    A Fresh, Transparent Approach to Used Car Buying in Leicester
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    At East Midland Cars Limited, we believe purchasing a car should be simple,
                    welcoming, and completely stress-free. Located at{" "}
                    <strong className="text-on-surface">Unit 38 Oswin Road, Leicester, LE3 1HR</strong>,
                    our team brings decades of combined automotive expertise. Every vehicle is
                    handpicked, undergoing rigorous mechanical inspections, HPI checks, and a full
                    valet before entering our indoor and outdoor showroom display.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                    {PILLARS.map((pillar) => (
                      <div key={pillar.title} className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex gap-space-sm">
                        <span className="material-symbols-outlined text-secondary text-[28px] shrink-0">{pillar.icon}</span>
                        <div>
                          <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">{pillar.title}</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{pillar.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-primary-container text-on-primary rounded-2xl p-space-xl shadow-xl relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 space-y-space-md">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-bold">
                        Instant Valuation
                      </div>
                      <div>
                        <h3 className="font-headline-lg text-headline-lg font-bold text-on-primary uppercase">
                          Value Your Part Exchange
                        </h3>
                        <p className="font-body-sm text-body-sm text-inverse-on-surface mt-1">
                          Enter your vehicle registration &amp; mileage to receive a fast,
                          transparent market appraisal towards your next vehicle.
                        </p>
                      </div>
                      <form className="space-y-space-sm pt-space-xs" action="tel:01162898888">
                        <div>
                          <label className="block font-label-sm text-label-sm text-primary-fixed-dim uppercase mb-1">
                            Vehicle Registration
                          </label>
                          <div className="flex items-center rounded-lg bg-surface-container-lowest overflow-hidden shadow-inner">
                            <div className="bg-blue-700 text-white font-bold px-3 py-2.5 text-xs flex flex-col items-center justify-center shrink-0">
                              <span>GB</span>
                            </div>
                            <input
                              className="w-full bg-surface-container-lowest text-primary font-display-hero text-headline-sm uppercase px-3 py-2 font-bold tracking-widest focus:outline-none"
                              placeholder="e.g. GV69 YYK"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-space-sm">
                          <div>
                            <label className="block font-label-sm text-label-sm text-primary-fixed-dim uppercase mb-1">
                              Current Mileage
                            </label>
                            <input
                              className="w-full bg-inverse-surface text-on-primary rounded-lg px-3 py-2.5 font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                              placeholder="e.g. 45000"
                              type="number"
                            />
                          </div>
                          <div>
                            <label className="block font-label-sm text-label-sm text-primary-fixed-dim uppercase mb-1">
                              Contact Phone
                            </label>
                            <input
                              className="w-full bg-inverse-surface text-on-primary rounded-lg px-3 py-2.5 font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                              placeholder="07475 248063"
                              type="tel"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block font-label-sm text-label-sm text-primary-fixed-dim uppercase mb-1">
                            Your Full Name &amp; Postcode
                          </label>
                          <input
                            className="w-full bg-inverse-surface text-on-primary rounded-lg px-3 py-2.5 font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                            placeholder="e.g. David Smith - LE3 1HR"
                            type="text"
                          />
                        </div>
                        <a
                          href="tel:01162898888"
                          className="w-full py-3.5 rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container font-label-lg text-label-lg font-bold uppercase tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                        >
                          <span className="material-symbols-outlined text-[20px]">price_check</span>
                          <span>Call to Get Your Valuation Now</span>
                        </a>
                      </form>
                      <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim text-center">
                        No obligation. Valuations backed by live Cap-HPI trade and retail market algorithms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Finance teaser */}
          <section className="w-full max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl" id="finance-section">
            <div className="rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden p-space-lg lg:p-space-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
                <div className="lg:col-span-7 space-y-space-md">
                  <span className="font-label-sm text-label-sm uppercase font-bold text-secondary tracking-widest">
                    Transparent Motor Finance
                  </span>
                  <h2 className="font-headline-xl text-headline-xl font-bold uppercase tracking-tight text-on-surface">
                    Simple, Straightforward Finance
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Flexible HP &amp; PCP packages with rates from 8.9% APR representative, matched
                    to your deposit, budget and circumstances by our FCA-regulated finance team.
                  </p>
                  <Link
                    href="/finance-calculator"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-bold hover:bg-on-secondary-container transition-all shadow-sm"
                  >
                    <span>See Finance Options</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                <div className="lg:col-span-5 bg-primary-container text-on-primary rounded-xl p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[26px]">flash_on</span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg font-bold text-on-primary uppercase leading-tight">
                      Pre-Approve in 60 Seconds with Zero Footprint
                    </h3>
                    <ul className="space-y-2.5 font-body-sm text-body-sm text-primary-fixed-dim">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span>
                        <span>Rates starting from an attractive 8.9% Representative APR</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span>
                        <span>Zero deposit options available on all eligible stock</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span>
                        <span>Introducer Appointed Representative of Finset Limited (FRN 987805)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-space-md">
                    <a
                      href="tel:01162898888"
                      className="w-full py-3.5 rounded-lg bg-surface-container-lowest text-primary-container hover:bg-secondary-fixed font-label-md text-label-md font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[20px]">speed</span>
                      <span>Start Soft Finance Eligibility</span>
                    </a>
                    <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim text-center mt-2">
                      We act as a credit broker not a lender. All finance is subject to status and income.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials teaser */}
          <section className="w-full bg-surface-container-low py-space-2xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-secondary text-[20px]">stars</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                      Real Customer Feedback
                    </span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl font-bold uppercase tracking-tight text-on-surface">
                    Rated 4.8 / 5 Across Verified Platforms
                  </h2>
                </div>
                <Link
                  href="/customer-reviews"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors shadow-sm"
                >
                  Read All Verified Reviews
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {REVIEWS.map((review) => (
                  <div key={review.author} className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                    <div className="space-y-space-sm">
                      <div className="flex text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[20px]">star</span>
                        ))}
                      </div>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">{review.title}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{review.body}</p>
                    </div>
                    <div className="pt-space-md flex items-center justify-between">
                      <div>
                        <p className="font-label-md text-label-md font-bold text-on-surface">{review.author}</p>
                        <p className="font-legal-fineprint text-legal-fineprint text-on-surface-variant">{review.meta}</p>
                      </div>
                      <span className="material-symbols-outlined text-surface-tint/40 text-[28px]">format_quote</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Visit us */}
          <section className="w-full max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl">
            <div className="bg-surface-container-lowest rounded-2xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-6 p-space-lg lg:p-space-2xl space-y-space-md flex flex-col justify-between">
                  <div className="space-y-space-md">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase font-bold text-secondary tracking-widest">
                        Showroom Location
                      </span>
                      <h2 className="font-headline-xl text-headline-xl font-bold uppercase tracking-tight text-on-surface mt-1">
                        Visit Us in Leicester
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Located conveniently at Oswin Road, minutes from the M1 and Leicester ring
                        road with dedicated customer parking.
                      </p>
                    </div>
                    <div className="space-y-space-sm">
                      <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                        <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">location_on</span>
                        <div>
                          <h4 className="font-label-md text-label-md font-bold text-on-surface">Dealership Address</h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            Unit 38 Oswin Road, Leicester, LE3 1HR
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                        <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">call</span>
                        <div>
                          <h4 className="font-label-md text-label-md font-bold text-on-surface">Direct Sales Lines</h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            <a className="text-secondary font-bold hover:underline" href="tel:01162898888">0116 289 8888</a> /{" "}
                            <a className="text-secondary font-bold hover:underline" href="tel:07475248063">07475 248063</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-sm flex flex-wrap gap-space-sm">
                    <a
                      className="px-5 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold hover:bg-inverse-surface transition-colors inline-flex items-center gap-2"
                      href="https://maps.google.com/?q=Unit+38+Oswin+Road+Leicester+LE3+1HR"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-[18px]">directions</span>
                      <span>Get Directions</span>
                    </a>
                    <a
                      className="px-5 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-bold hover:bg-on-secondary-container transition-colors inline-flex items-center gap-2"
                      href="tel:01162898888"
                    >
                      <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                      <span>Book Showroom Test Drive</span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full bg-surface-container">
                  <Image
                    src={showroomImage}
                    alt="Blue Audi RS6 Avant Quattro parked inside the East Midland Cars Leicester showroom"
                    width={700}
                    height={480}
                    className="w-full h-full min-h-[380px] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-primary-container/90 backdrop-blur-md text-on-primary shadow-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary-container text-[28px]">pin_drop</span>
                      <div>
                        <p className="font-label-sm text-label-sm uppercase text-secondary-fixed font-bold">Leicester Showroom Ground</p>
                        <p className="font-headline-sm text-headline-sm font-bold">East Midland Cars Limited</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
                      Free Parking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statutory disclosure */}
          <section className="w-full bg-surface-container-high/30 py-space-xl text-on-surface-variant">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-sm">
                <div className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[22px]">policy</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold uppercase tracking-tight">
                    Statutory Governance &amp; Regulatory Disclosure
                  </h3>
                </div>
                <div className="space-y-2 font-legal-fineprint text-legal-fineprint text-on-surface-variant leading-relaxed">
                  <p>
                    <strong className="text-on-surface font-semibold">East Midland Cars Limited</strong> is
                    registered on the Financial Services Register under Firm Reference Number (FRN){" "}
                    <strong>1058774</strong> as an Appointed Representative of{" "}
                    <strong>Finset Limited</strong> (FRN <strong>987805</strong>).
                  </p>
                  <p>
                    <strong className="text-on-surface font-semibold">Finset Limited</strong> is
                    authorised and regulated by the Financial Conduct Authority (FCA). They act as a
                    credit broker, not a lender. We do not provide financial advice or personal
                    recommendations on motor finance products.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1 font-semibold text-on-surface">
                    <div>• Company Number: 14262253</div>
                    <div>• FCA Firm FRN: 1058774</div>
                    <div>• Finset Principal FRN: 987805</div>
                    <div>• ICO Registration: ZC152902</div>
                  </div>
                  <p className="pt-1">
                    <strong className="text-on-surface font-semibold">Registered Address:</strong> Unit
                    38 Oswin Road, Leicester, England, LE3 1HR. All motor finance is strictly subject to
                    applicant status, credit scoring, and income verification. We receive a fixed
                    commission or percentage fee for introducing you to Finset Limited if you proceed
                    with an agreement; this does not alter the APR or finance interest rate offered to
                    you.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
