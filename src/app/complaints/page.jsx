import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Complaints | East Midland Cars Limited",
  description:
    "How to make a complaint about vehicle finance services introduced through East Midland Cars Limited, and how to refer a complaint to the Financial Ombudsman Service.",
};

export default function ComplaintsPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-[80px] bg-surface min-h-[calc(100vh-80px)]">
        <div className="max-w-[900px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl">
          <div className="space-y-space-sm mb-space-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              Customer Support
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Complaints Process
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              If you wish to make a complaint regarding the services provided, please contact
              Finset Limited using the following details:
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-xl space-y-space-md mb-space-xl">
            <div className="flex items-start gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
              <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <p className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Joanne Mowatt-Morris
                </p>
                <p>Compliance Manager</p>
                <p>Finset Limited</p>
                <p>
                  Burgundy Court
                  <br />
                  64-66 Springfield Road
                  <br />
                  Chelmsford
                  <br />
                  Essex
                  <br />
                  CM2 6JY
                </p>
              </div>
            </div>
            <div className="pt-space-sm border-t border-outline-variant flex flex-wrap items-center gap-space-lg font-body-sm text-body-sm text-on-surface">
              <a
                className="flex items-center gap-1.5 text-secondary font-semibold hover:underline"
                href="mailto:resolutions@finset.co.uk"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                resolutions@finset.co.uk
              </a>
              <a
                className="flex items-center gap-1.5 text-secondary font-semibold hover:underline"
                href="tel:01245967999"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                01245 967999
              </a>
            </div>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
            If your complaint cannot be resolved, you may be entitled to refer your complaint to
            the Financial Ombudsman Service.
          </p>

          <div className="bg-primary-container text-inverse-on-surface rounded-2xl p-space-xl space-y-space-sm">
            <div className="flex items-center gap-space-xs text-secondary-container">
              <span className="material-symbols-outlined text-[24px]">account_balance</span>
              <p className="font-headline-sm text-headline-sm text-on-primary uppercase">
                Financial Ombudsman Service
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-lg font-body-sm text-body-sm text-primary-fixed-dim">
              <a
                className="flex items-center gap-1.5 text-on-primary underline hover:text-secondary-fixed transition-colors"
                href="https://www.financial-ombudsman.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                financial-ombudsman.org.uk
              </a>
              <a
                className="flex items-center gap-1.5 text-on-primary hover:text-secondary-fixed transition-colors"
                href="tel:08000234567"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                0800 023 4567
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
