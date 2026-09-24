import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stocklist from "@/components/Stocklist";

export const metadata = {
  title: "Showroom Stocklist | East Midland Cars Limited",
  description:
    "Browse the full Leicester showroom stocklist: handpicked executive and quality used cars, all RAC & AA inspected with clear HPI history.",
};

export default function ShowroomStocklistPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
        <div className="flex flex-col w-full">
          {/* Hero / overview bar */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="space-y-space-xs max-w-3xl">
                  <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded bg-secondary/10 text-secondary font-label-sm text-label-sm tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    Leicester Premier Pre-Owned Collection
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                    Handpicked Executive &amp; Quality Used Cars
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant flex flex-wrap items-center gap-x-space-md gap-y-1">
                    <span className="inline-flex items-center gap-1 font-semibold text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-secondary">pin_drop</span>
                      Unit 38 Oswin Road, Leicester, LE3 1HR
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="inline-flex items-center gap-1 text-on-surface font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-secondary">garage</span>
                      45+ Vehicles In Stock
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="inline-flex items-center gap-1 text-on-surface font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
                      AA / RAC Approved Multi-Point Inspected
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                  {[
                    { icon: "shield", title: "HPI Verified", sub: "100% Guaranteed" },
                    { icon: "workspace_premium", title: "3M Free Warranty", sub: "Extendable to 36M" },
                    { icon: "account_balance", title: "FCA Regulated", sub: "Competitive HP/PCP" },
                  ].map((badge) => (
                    <div key={badge.title} className="px-space-md py-1.5 flex items-center gap-space-xs bg-surface-container-low rounded-lg">
                      <span className="material-symbols-outlined text-secondary text-[20px]">{badge.icon}</span>
                      <div>
                        <p className="font-label-sm text-label-sm uppercase font-bold text-on-surface">{badge.title}</p>
                        <p className="font-legal-fineprint text-legal-fineprint text-on-surface-variant">{badge.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Main content: filters + grid (client component) */}
          <div className="max-w-[1320px] mx-auto w-full px-margin-mobile lg:px-margin-desktop py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <Stocklist />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
