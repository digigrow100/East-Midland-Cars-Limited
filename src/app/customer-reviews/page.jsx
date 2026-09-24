import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsGrid from "@/components/ReviewsGrid";
import ReviewForm from "@/components/ReviewForm";
import handoverAudiTTImage from "@/assets/images/celebrating_their_new_sports_coupe.webp";
import handoverMercedesImage from "@/assets/images/golden_hour_dealership_confidence.webp";
import handoverBmwImage from "@/assets/images/friends_celebrate_with_a_blue_convertible.webp";

export const metadata = {
  title: "Customer Reviews | East Midland Cars Limited",
  description:
    "Read verified customer reviews of East Midland Cars Limited, Leicester — rated 4.8/5 across Google, AutoTrader and CarGurus.",
};

const HANDOVERS = [
  {
    title: "Audi TT Black Edition Handover",
    body: "Arnold receiving the keys after completing his final check and 12-month RAC warranty activation.",
    location: "Unit 38 Oswin Road, Leicester",
    tag: "Full HPI Pack",
    badge: "Handover Verified",
    corner: "Key Presentation",
    cornerIcon: "key",
    img: handoverAudiTTImage,
    alt: "A proud young British couple in front of a metallic grey Audi TT coupe outside East Midland Cars showroom, holding the keys",
  },
  {
    title: "Mercedes-Benz A-Class Handover",
    body: "Charlotte drive-away ready within 60 minutes via integrated Finset instant credit approval.",
    location: "Leicester Showroom Handover",
    tag: "0% Admin Fee",
    badge: "Handover Verified",
    corner: "Same-Day Finance",
    cornerIcon: "credit_score",
    img: handoverMercedesImage,
    alt: "A professional woman smiling next to an immaculate white Mercedes-Benz A-Class hatchback on the East Midland Cars forecourt",
  },
  {
    title: "BMW 2 Series Doorstep Delivery",
    body: "Lina & Vanessa taking handover directly at home in Coventry with complete RAC pre-delivery certificate.",
    location: "Coventry Direct Handover",
    tag: "Inspected & Cleaned",
    badge: "Nationwide Delivery",
    corner: "Doorstep Arrival",
    cornerIcon: "local_shipping",
    img: handoverBmwImage,
    alt: "Two cheerful friends next to a sporty blue BMW 2 Series Convertible with the roof down in a Coventry driveway",
  },
];

export default function CustomerReviewsPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
        <div className="flex flex-col w-full">
          {/* Hero */}
          <section className="relative w-full bg-primary-container text-on-primary py-space-2xl overflow-hidden">
            <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-xl">
                <div className="max-w-3xl space-y-space-sm">
                  <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container-high/10 text-secondary-fixed font-label-md text-label-md uppercase tracking-wider backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[16px] text-secondary-container">verified</span>
                    Independent Motor Retailer Audit
                  </div>
                  <h1 className="font-headline-xl text-headline-xl tracking-tight text-on-primary">
                    Verified Customer Reviews &amp; Experiences
                  </h1>
                  <p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed">
                    Authentic feedback from over 80 verified motorists across Leicestershire, the
                    Midlands, and nationwide. Every testimonial reflects real purchase records,
                    certified provenance, and genuine handover experiences at Unit 38 Oswin Road.
                  </p>
                </div>
                <div className="flex items-center gap-space-lg bg-inverse-surface/80 p-space-md rounded-xl backdrop-blur-md shadow-xl self-start lg:self-auto">
                  <div className="flex flex-col items-center justify-center pr-space-md bg-surface-container-high/5 rounded-lg py-2 px-3">
                    <span className="font-display-hero text-display-hero-mobile text-on-primary leading-none">4.8</span>
                    <div className="flex items-center text-amber-400 mt-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                      ))}
                      <span className="material-symbols-outlined text-[18px]">star_half</span>
                    </div>
                    <span className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim mt-1">Out of 5.0 Stars</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-primary">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      82 Verified Handovers
                    </div>
                    <p className="font-body-sm text-body-sm text-primary-fixed-dim">
                      100% Recommendation rate for vehicle accuracy &amp; zero hidden fees.
                    </p>
                    <div className="flex items-center gap-space-xs text-secondary-fixed font-label-sm text-label-sm pt-1">
                      <span className="material-symbols-outlined text-[16px]">verified_user</span>
                      FCA Approved Reference #1058774
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ratings strip */}
          <section className="w-full bg-surface-container-low py-space-lg shadow-sm">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-center gap-space-md shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined text-[28px]">reviews</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-headline-sm text-headline-sm text-on-surface">4.8</span>
                      <div className="flex text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[14px]">star</span>
                        ))}
                      </div>
                    </div>
                    <p className="font-label-md text-label-md text-on-surface-variant font-medium">Google Reviews</p>
                    <p className="font-legal-fineprint text-legal-fineprint text-outline">60+ Direct Customer Ratings</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-center gap-space-md shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined text-[28px]">workspace_premium</span>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold uppercase">2024 Winner</span>
                    <p className="font-label-md text-label-md text-on-surface font-semibold">AutoTrader Highly Rated</p>
                    <p className="font-legal-fineprint text-legal-fineprint text-outline">Exemplary Client Experience</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-center gap-space-md shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined text-[28px]">military_tech</span>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold uppercase">Certified</span>
                    <p className="font-label-md text-label-md text-on-surface font-semibold">CarGurus Top Rated</p>
                    <p className="font-legal-fineprint text-legal-fineprint text-outline">Transparent Dealership Pricing</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-center gap-space-md shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined text-[28px]">check_circle</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface">100%</span>
                    <p className="font-label-md text-label-md text-on-surface-variant font-medium">HPI Clean &amp; Audited</p>
                    <p className="font-legal-fineprint text-legal-fineprint text-outline">Verified Mileage Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Review grid with filters */}
          <section className="w-full py-space-2xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <ReviewsGrid />
            </div>
          </section>

          {/* Handover archive */}
          <section className="w-full bg-surface-container-low py-space-2xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop space-y-space-xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div>
                  <div className="inline-flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase tracking-wider mb-2">
                    <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                    Handover Archive
                  </div>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface">Recent Delivery Moments</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                    Every car handed over with clean RAC checks, comprehensive documentation, and
                    direct personal handover at our Leicester facility.
                  </p>
                </div>
                <div className="flex items-center gap-space-xs text-outline font-label-md text-label-md">
                  <span className="material-symbols-outlined text-secondary text-[20px]">thumb_up</span>
                  100% On-Time Delivery Track Record
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {HANDOVERS.map((h) => (
                  <div key={h.title} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all">
                    <div className="relative w-full h-64 overflow-hidden bg-surface-container">
                      <Image
                        src={h.img}
                        alt={h.alt}
                        width={420}
                        height={256}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-primary-container/90 text-on-primary px-3 py-1 rounded font-label-sm text-label-sm uppercase backdrop-blur-sm">
                        {h.badge}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-secondary text-on-secondary px-2.5 py-1 rounded font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-md">
                        <span className="material-symbols-outlined text-[14px]">{h.cornerIcon}</span> {h.corner}
                      </div>
                    </div>
                    <div className="p-space-md flex-1 flex flex-col justify-between space-y-space-sm">
                      <div>
                        <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">{h.title}</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">{h.body}</p>
                      </div>
                      <div className="flex items-center justify-between text-outline font-legal-fineprint text-legal-fineprint pt-space-xs">
                        <span>{h.location}</span>
                        <span className="text-secondary font-semibold">{h.tag}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Review form */}
          <section className="w-full py-space-2xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl bg-surface-container-lowest p-space-xl rounded-xl shadow-md">
                <div className="lg:col-span-5 space-y-space-md">
                  <div className="inline-flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[18px]">rate_review</span>
                    Your Voice Matters
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Share Your East Midland Cars Experience</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Did you recently collect a vehicle or arrange finance through our Oswin Road
                    showroom? We welcome transparent, unfiltered feedback to continually refine our
                    customer experience.
                  </p>
                  <div className="bg-surface-container p-space-md rounded-xl space-y-space-sm">
                    <p className="font-headline-sm text-headline-sm text-on-surface">Prefer leaving a direct public review?</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Post directly to our verified Google Business profile to help fellow drivers
                      find vetted used vehicles in Leicester.
                    </p>
                    <a
                      className="inline-flex items-center gap-space-xs px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-inverse-surface transition-all shadow-sm"
                      href="https://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-[18px] text-amber-400">star</span>
                      Write a Google Review
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  </div>
                  <div className="pt-space-xs space-y-2 text-outline font-body-sm text-body-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[18px] text-emerald-600">check</span>
                      <span>All reviews verified against genuine invoice &amp; registration data.</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[18px] text-emerald-600">check</span>
                      <span>Published transparently with no automated filtering.</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-surface-container-low p-space-lg rounded-xl">
                  <ReviewForm />
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="w-full pb-space-2xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="bg-primary-container text-on-primary rounded-xl p-space-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl shadow-xl relative overflow-hidden">
                <div className="space-y-space-sm max-w-2xl relative z-10">
                  <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded bg-surface-container-high/10 text-secondary-fixed font-label-sm text-label-sm uppercase">
                    <span className="material-symbols-outlined text-[16px] text-secondary-container">location_on</span>
                    Unit 38 Oswin Road, Leicester, LE3 1HR
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-primary">Experience the East Midland Cars Standard in Person</h2>
                  <p className="font-body-md text-body-md text-primary-fixed-dim">
                    Visit our dedicated showroom to inspect our prestige inventory under workshop
                    conditions, review documented histories, and discuss flexible finance structures
                    with FCA-regulated advisors.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-space-sm w-full lg:w-auto relative z-10 shrink-0">
                  <Link
                    href="/showroom-stocklist"
                    className="inline-flex items-center justify-center gap-space-xs px-6 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container hover:text-on-secondary transition-all shadow-md"
                  >
                    <span className="material-symbols-outlined text-[18px]">directions_car</span>
                    Browse Available Stock
                  </Link>
                  <a
                    href="tel:01162898888"
                    className="inline-flex items-center justify-center gap-space-xs px-6 py-3 rounded-lg bg-inverse-surface text-on-primary font-label-md text-label-md hover:bg-surface-container-high/20 transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    Speak with Handover Specialist
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
