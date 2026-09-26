import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewForm from "@/components/ReviewForm";
import handoverAudiImage from "@/assets/images/audi_rs3_tail_light_detail.webp";
import handoverMercedesImage from "@/assets/images/mercedes_amg_c63_rear.webp";
import handoverDetailImage from "@/assets/images/audi_rs3_green_side_detail.webp";

export const metadata = {
  title: "Customer Reviews | East Midland Cars Limited",
  description:
    "Read genuine customer reviews of East Midland Cars Limited, Leicester, on Google and AutoTrader.",
};

const HANDOVERS = [
  {
    title: "Showroom Key Handover",
    body: "Every vehicle is prepared and handed over with a completed final check and warranty activation.",
    location: "Unit 38 Oswin Road, Leicester",
    tag: "Full HPI Pack",
    badge: "Showroom Handover",
    corner: "Key Presentation",
    cornerIcon: "key",
    img: handoverAudiImage,
    alt: "Close-up detail of a Kyalami Green Audi RS3 Sportback ready for handover at East Midland Cars showroom",
  },
  {
    title: "Finance-Assisted Handover",
    body: "Where finance is introduced through Finset Limited and approved, vehicles are prepared drive-away ready.",
    location: "Leicester Showroom Handover",
    tag: "0% Admin Fee",
    badge: "Showroom Handover",
    corner: "Finance Assisted",
    cornerIcon: "credit_score",
    img: handoverMercedesImage,
    alt: "White Mercedes-AMG C63 saloon ready for handover on the East Midland Cars forecourt",
  },
  {
    title: "Nationwide Doorstep Delivery",
    body: "Delivered directly to the customer's home with a complete RAC pre-delivery certificate.",
    location: "Nationwide Direct Handover",
    tag: "Inspected & Cleaned",
    badge: "Nationwide Delivery",
    corner: "Doorstep Arrival",
    cornerIcon: "local_shipping",
    img: handoverDetailImage,
    alt: "Close-up detail shot of a freshly prepared vehicle ready for doorstep delivery by East Midland Cars",
  },
];

export default function CustomerReviewsPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-[80px] bg-surface min-h-[calc(100vh-80px)]">
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
                    Customer Reviews &amp; Experiences
                  </h1>
                  <p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed">
                    Read genuine customer feedback about East Midland Cars Limited directly on our
                    Google Business profile and AutoTrader dealer page, or share your own experience
                    below.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-space-sm sm:gap-space-lg bg-inverse-surface/80 p-space-md rounded-xl backdrop-blur-md shadow-xl w-full sm:w-auto self-start lg:self-auto">
                  <div className="space-y-2 min-w-0 text-center sm:text-left">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-space-xs font-label-md text-label-md text-on-primary hover:underline"
                    >
                      <span className="material-symbols-outlined text-[18px] text-amber-400">star</span>
                      Read Our Google Reviews
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                    <a
                      href="https://www.autotrader.co.uk/dealers/leicestershire/leicester/east-midland-cars-limited-10034803"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center justify-center sm:justify-start gap-space-xs font-label-md text-label-md text-on-primary hover:underline"
                    >
                      <span className="material-symbols-outlined text-[18px] text-amber-400">directions_car</span>
                      Read Our AutoTrader Reviews
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
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
                  <h2 className="font-headline-xl text-headline-xl text-on-surface">What Handover Day Looks Like</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                    Every car is handed over with clean RAC checks, comprehensive documentation, and
                    a direct personal handover at our Leicester facility.
                  </p>
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
                  <a
                    href="https://www.autotrader.co.uk/dealers/leicestershire/leicester/east-midland-cars-limited-10034803"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-space-xs px-6 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container hover:text-on-secondary transition-all shadow-md"
                  >
                    <span className="material-symbols-outlined text-[18px]">directions_car</span>
                    Browse Available Stock
                  </a>
                  <a
                    href="tel:01163194784"
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
