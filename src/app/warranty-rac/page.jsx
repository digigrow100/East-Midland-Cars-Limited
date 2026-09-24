import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoverageExplorer from "@/components/CoverageExplorer";
import heroImage from "@/assets/images/audi_rs3_quattro_detail.webp";

export const metadata = {
  title: "Warranty & RAC | East Midland Cars Limited",
  description:
    "Every East Midland Cars vehicle includes a complimentary warranty, a 128-point pre-delivery inspection and 24/7 RAC roadside assistance.",
};

const PILLARS = [
  {
    icon: "checklist_rtl",
    title: "128-Point Inspection",
    body: "Full workshop sign-off by certified technicians covering engine compression, hydraulic fluid integrity, underbody chassis, and road dynamics.",
    note: "Technician Certified",
  },
  {
    icon: "policy",
    title: "RAC & AA Standards",
    body: "Strict adherence to Trading Standards Institute approved codes of practice, guaranteeing vehicle safety, transparency, and mechanical hygiene.",
    note: "Charter Approved",
  },
  {
    icon: "home_repair_service",
    title: "Nationwide Garages",
    body: "Repairs carried out at any VAT-registered garage across the UK. You are never obligated to return the car to our Leicester showroom for authorized work.",
    note: "5,000+ UK Centers",
  },
  {
    icon: "car_repair",
    title: "24/7 RAC Breakdown",
    body: "Roadside rescue, home-start assistance, nationwide relay recovery, and onward journey provisions available 365 days a year.",
    note: "24/7 Emergency Line",
  },
];

const RAC_ITEMS = [
  { icon: "local_shipping", title: "Roadside Repair", body: "Average 30-minute roadside repair rate. RAC patrols fix 4 out of 5 vehicles at the roadside." },
  { icon: "car_tag", title: "Towing to Local Garage", body: "If immediate repair is unfeasible, your vehicle will be transported to the nearest approved RAC repairer." },
  { icon: "home", title: "At-Home Assistance", body: "Flat battery or startup failure on your driveway? RAC sends a mobile specialist directly to your home." },
  { icon: "commute", title: "Onward Travel", body: "Guaranteed onward destination transfer for driver and passengers via rail, courtesy hire, or overnight lodgings." },
];

const CLAIM_STEPS = [
  {
    step: "1",
    icon: "phone_in_talk",
    title: "Call The Claims Line",
    body: "Contact our warranty claims team with your registration and mileage. An advisor will register the event and assign your claim reference in under 5 minutes.",
    note: ["Claims Hotline: ", "0116 289 8888"],
  },
  {
    step: "2",
    icon: "garage",
    title: "Visit Any VAT Garage",
    body: "Take your vehicle to your preferred local VAT-registered garage or franchise dealer. They provide an itemised diagnostic report directly to the warranty assessor.",
    note: ["Coverage: ", "Any UK VAT-registered workshop"],
  },
  {
    step: "3",
    icon: "price_check",
    title: "Direct Settled Payment",
    body: "Once authorised, parts and labour costs are disbursed directly to the repairer. Collect your vehicle ready to drive with zero bureaucratic friction.",
    note: ["Settlement: ", "Direct to garage BACS"],
  },
];

export default function WarrantyRacPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-[80px] bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* Hero */}
          <section className="relative w-full bg-primary-container text-inverse-on-surface overflow-hidden py-space-2xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-7 space-y-space-md">
                  <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>RAC &amp; Trading Standards Certified Dealer</span>
                  </div>
                  <h1 className="font-display-hero text-headline-xl lg:text-display-hero text-on-primary">
                    Drive Away With <br />
                    <span className="text-secondary-container">Complete Peace</span> Of Mind.
                  </h1>
                  <p className="font-body-lg text-body-lg text-inverse-on-surface/85 max-w-xl">
                    Every vehicle leaving our Leicester showroom includes a complimentary
                    comprehensive warranty, backed by an uncompromising 128-point pre-delivery
                    inspection and 24/7 RAC Roadside Assistance.
                  </p>
                  <div className="pt-space-sm flex flex-wrap items-center gap-space-md">
                    <a href="#tier-comparison" className="inline-flex items-center gap-space-xs px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-all shadow-md">
                      <span>Compare Warranty Tiers</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                    </a>
                    <a href="#claim-process" className="inline-flex items-center gap-space-xs px-6 py-3.5 rounded-lg bg-surface-container-high/15 hover:bg-surface-container-high/25 text-on-primary font-label-md text-label-md transition-all">
                      <span className="material-symbols-outlined text-[18px]">build_circle</span>
                      <span>How To Make A Claim</span>
                    </a>
                  </div>
                  <div className="pt-space-md flex flex-wrap items-center gap-space-xl text-primary-fixed-dim font-body-sm text-body-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-container text-[20px]">check_circle</span>
                      <span>Zero Excess Options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-container text-[20px]">check_circle</span>
                      <span>Nationwide Coverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-container text-[20px]">check_circle</span>
                      <span>Fast Track Claims</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative bg-inverse-surface rounded-xl p-space-lg shadow-xl text-on-primary space-y-space-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container">Standard Inclusions</span>
                        <h3 className="font-headline-md text-headline-md font-bold">128-Point Audit Score</h3>
                      </div>
                      <div className="h-14 w-14 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary-container text-[30px]">health_and_safety</span>
                      </div>
                    </div>
                    <div className="bg-surface-container-high/10 rounded-lg p-space-md space-y-3">
                      {["Mechanical & Transmission", "Electrical, ECU & Harness", "Safety, Steering & Braking"].map((label) => (
                        <div key={label}>
                          <div className="flex justify-between items-center font-label-sm text-label-sm">
                            <span className="text-inverse-on-surface">{label}</span>
                            <span className="text-secondary-container font-bold">100% Passed</span>
                          </div>
                          <div className="w-full bg-inverse-surface h-2 rounded-full overflow-hidden mt-1">
                            <div className="bg-secondary-container h-full rounded-full w-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-space-xs font-body-sm text-body-sm text-primary-fixed-dim">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span>
                        Signed off by Master Technician
                      </span>
                      <span className="font-semibold text-on-primary">Leicester Depot LE3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4 pillars */}
          <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl w-full">
            <div className="mb-space-xl max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">The East Midland Cars Standard</span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">Four Pillars of Total Assurance</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                We eliminate used-car anxiety through stringent multi-stage inspections, industry
                certifications, and seamless customer support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-space-md">
                      <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">{pillar.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.body}</p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center text-secondary font-label-sm text-label-sm gap-1">
                    <span>{pillar.note}</span>
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Coverage explorer */}
          <section className="w-full bg-surface-container-low py-space-2xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Technical Specifications</span>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">Interactive Coverage Explorer</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
                    Select a system component below to review protected sub-assemblies and labor
                    authorizations.
                  </p>
                </div>
              </div>
              <CoverageExplorer />
            </div>
          </section>

          {/* Tier comparison */}
          <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl w-full" id="tier-comparison">
            <div className="text-center max-w-2xl mx-auto mb-space-xl">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Transparent Plans</span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">Select Your Protection Level</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Every vehicle includes our complimentary 3-month dealer warranty. Upgrade at
                purchase to lock in up to 3 years of seamless mechanical and electrical cover.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
              {/* Standard */}
              <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Standard Cover</span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">Included Free</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface mt-space-sm font-bold">3-Month Guarantee</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Essential mechanical protection supplied with every purchased vehicle.</p>
                  <div className="my-space-lg">
                    <span className="font-headline-xl text-headline-xl font-bold text-on-surface">£0</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant"> / complimentary</span>
                  </div>
                  <div className="space-y-space-sm font-body-sm text-body-sm text-on-surface">
                    {["Major Engine Components", "Manual & Automatic Gearbox", "Drive Axle & Differential", "Primary Braking System"].map((item) => (
                      <div key={item} className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[20px]">check</span>
                        <span>{item}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-space-xs text-outline opacity-60">
                      <span className="material-symbols-outlined text-[20px]">close</span>
                      <span>Electrical &amp; Multimedia</span>
                    </div>
                  </div>
                </div>
                <div className="pt-space-xl">
                  <a href="tel:01162898888" className="block w-full text-center py-3.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all">
                    Included With Every Vehicle
                  </a>
                </div>
              </div>

              {/* Gold */}
              <div className="bg-primary-container text-inverse-on-surface rounded-xl p-space-xl shadow-xl flex flex-col justify-between relative lg:-translate-y-2">
                <div className="absolute -top-3.5 right-6 px-3 py-1 bg-secondary text-on-secondary rounded-full font-label-sm text-label-sm font-bold shadow-sm uppercase tracking-wider">
                  Most Popular Choice
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container font-bold">Executive Tier</span>
                    <span className="px-2.5 py-1 rounded bg-inverse-surface text-secondary-container font-label-sm text-label-sm">12 Months</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-on-primary mt-space-sm font-bold">12-Month Gold Cover</h3>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-1">Recommended for modern executive vehicles with sophisticated electronics.</p>
                  <div className="my-space-lg">
                    <span className="font-headline-xl text-headline-xl font-bold text-on-primary">£299</span>
                    <span className="font-body-sm text-body-sm text-primary-fixed-dim"> / one-off or £24.90/mo</span>
                  </div>
                  <div className="space-y-space-sm font-body-sm text-body-sm text-inverse-on-surface">
                    {[
                      "All 3-Month Standard Inclusions",
                      "Full Electrical System & Alternator",
                      "Multimedia, Infotainment & Sat-Nav",
                      "Turbocharger & Intercooler Units",
                      "Air Conditioning Compressor & Condenser",
                      "ECU, Modules & Ignition System",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary-container text-[20px]">check</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-space-xl">
                  <a href="tel:01162898888" className="block w-full text-center py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-md">
                    Upgrade to Gold Cover
                  </a>
                </div>
              </div>

              {/* Platinum */}
              <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Ultimate Protection</span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">24 or 36 Months</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface mt-space-sm font-bold">Platinum Total Cover</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Total bumper-to-bumper vehicle security with premium travel allowance.</p>
                  <div className="my-space-lg">
                    <span className="font-headline-xl text-headline-xl font-bold text-on-surface">£499</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant"> / 24mo or £19.90/mo finance</span>
                  </div>
                  <div className="space-y-space-sm font-body-sm text-body-sm text-on-surface">
                    {[
                      "All Gold Tier Protections Included",
                      "Bumper-to-Bumper Mechanical & Electrical",
                      "Selected Wear & Tear Component Allowance",
                      "Car Hire Contribution (£50/day up to 7 days)",
                      "Hotel Accommodation During Repairs",
                      "£0 Excess on All Approved Claims",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[20px]">check</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-space-xl">
                  <a href="tel:01162898888" className="block w-full text-center py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-inverse-surface transition-all">
                    Inquire for Platinum
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* RAC breakdown */}
          <section className="w-full bg-surface-container py-space-2xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-5 space-y-space-md">
                  <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>RAC Partner Dealership</span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface">RAC Breakdown &amp; Recovery Service</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    No motorist should ever feel stranded. Our partnership with the RAC ensures
                    assistance is always only a phone call away, across the length and breadth of
                    Great Britain.
                  </p>
                  <div className="space-y-space-sm pt-space-xs">
                    {RAC_ITEMS.map((item) => (
                      <div key={item.title} className="flex items-start gap-space-sm bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-headline-sm text-headline-sm text-on-surface">{item.title}</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col gap-space-lg">
                  <div className="relative rounded-xl overflow-hidden shadow-lg h-80 w-full">
                    <Image
                      src={heroImage}
                      alt="Close-up detail of the Quattro badge and sill trim on a Kyalami Green Audi RS3 at the East Midland Cars Leicester workshop"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent flex flex-col justify-end p-space-lg text-on-primary">
                      <span className="font-label-sm text-label-sm uppercase text-secondary-container">Leicester Technical Facility</span>
                      <h3 className="font-headline-md text-headline-md font-bold">128-Point Master Inspection Bay</h3>
                      <p className="font-body-sm text-body-sm text-primary-fixed-dim">Every car receives an in-depth computerised diagnostic check before key handover.</p>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-md">
                      <div className="h-12 w-12 rounded-full bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                        <span className="material-symbols-outlined text-[28px]">support_agent</span>
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface-variant uppercase">Emergency RAC Line (24/7)</p>
                        <p className="font-headline-sm text-headline-sm font-bold text-on-surface">0330 159 0360</p>
                      </div>
                    </div>
                    <a href="tel:03301590360" className="px-5 py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-all">
                      Save To Phone
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Claim process */}
          <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl w-full" id="claim-process">
            <div className="text-center max-w-2xl mx-auto mb-space-xl">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Transparent Procedure</span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">Claiming Is Completely Effortless</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                We understand car troubles are stressful. Our digital claim approval guarantees
                direct payment to the garage so you aren&apos;t left out of pocket.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {CLAIM_STEPS.map((step) => (
                <div key={step.step} className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[28px]">{step.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">{step.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{step.body}</p>
                  <div className="bg-surface-container-low p-2.5 rounded font-label-sm text-label-sm text-on-surface-variant">
                    {step.note[0]}
                    <span className="font-bold text-on-surface">{step.note[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop pb-space-2xl w-full">
            <div className="bg-inverse-surface rounded-xl p-space-xl text-on-primary shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                <div className="lg:col-span-8 space-y-space-sm">
                  <div className="inline-flex items-center gap-space-xs text-secondary-container font-label-sm text-label-sm uppercase font-semibold">
                    <span className="material-symbols-outlined text-[18px]">place</span>
                    <span>Leicester Dedicated Showroom &amp; Support Hub</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold">Have Questions About Warranty or Upgrades?</h2>
                  <p className="font-body-md text-body-md text-primary-fixed-dim max-w-2xl">
                    Our warranty specialists at Unit 38 Oswin Road, Leicester, LE3 1HR are available
                    7 days a week to review your policy details, arrange vehicle delivery
                    warranties, or assist with active claims.
                  </p>
                  <div className="pt-space-xs flex flex-wrap gap-space-md font-body-sm text-body-sm text-inverse-on-surface">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary-container text-[18px]">call</span>
                      <strong>0116 289 8888</strong> / 07475 248063
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary-container text-[18px]">mail</span>
                      sales@eastmidlandcars.co.uk
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-end">
                  <a href="tel:01162898888" className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-md">
                    <span className="material-symbols-outlined text-[18px]">phone_enabled</span>
                    <span>Call Leicester Team</span>
                  </a>
                  <a href="mailto:sales@eastmidlandcars.co.uk" className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-lg bg-surface-container-high/15 hover:bg-surface-container-high/25 text-on-primary font-label-md text-label-md transition-all">
                    <span className="material-symbols-outlined text-[18px]">drafts</span>
                    <span>Email Warranty Desk</span>
                  </a>
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
