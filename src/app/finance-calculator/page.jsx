import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import heroImage from "@/assets/images/audi_rs3_green_rear_used_car.webp";

export const metadata = {
  title: "Finance | East Midland Cars Limited",
  description:
    "Flexible vehicle finance in Leicester. East Midland Cars Limited can introduce you to Finset Limited, who may be able to help you finance your vehicle through their panel of lenders.",
};

const WHY_FINANCE_WITH_US = [
  {
    icon: "percent",
    title: "Rates From 8.9% APR",
    body: "Competitive representative rates sourced across our panel of prime and specialist lenders, matched to your individual circumstances.",
  },
  {
    icon: "account_balance_wallet",
    title: "Deposits From £0",
    body: "Choose a deposit that suits your budget, from nothing down to a larger sum that lowers your monthly payments further.",
  },
  {
    icon: "diversity_3",
    title: "All Credit Profiles Welcome",
    body: "Whether your credit history is spotless or you have had past difficulties, our broker partnership finds a lender willing to work with you.",
  },
  {
    icon: "bolt",
    title: "Fast, Score-Safe Decisions",
    body: "A soft search gives you an eligibility answer in around a minute, without leaving any mark on your credit file.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can I settle my finance agreement early?",
    answer:
      "Yes, under the Consumer Credit Act 1974, you hold the statutory right to request an early settlement figure from the lender at any point during your term. Early settlement often reduces the total interest payable over the remainder of the loan.",
  },
  {
    question: "What if I have poor, bad, or no credit history?",
    answer:
      "Through our broker partnership with Finset Limited, we work with a dedicated panel of specialist sub-prime lenders who focus on your current affordability rather than historic financial missed payments or low credit scores. A soft credit pre-check will determine your options without risk.",
  },
  {
    question: "Can I use my existing vehicle part-exchange as the deposit?",
    answer:
      "Absolutely. We offer free, accurate market valuations on any make or model. If your part-exchange vehicle has existing finance remaining, we can settle the outstanding balance directly with your lender and apply any remaining positive equity toward your new car's deposit.",
  },
  {
    question: "Will applying online affect my credit file?",
    answer:
      "Our initial eligibility assessment utilizes a soft search. This leaves a neutral footprint visible only to you on your credit report. A full hard search is only recorded after you have reviewed your formal approval quote and explicitly opted to sign the formal agreement.",
  },
  {
    question: "What documents will I need to bring for handover?",
    answer:
      "Generally, you will require a valid Full UK or EU Driving Licence, proof of current address (utility bill or bank statement within 90 days), and proof of income (such as recent payslips or bank statements). Our team will provide an exact tailored checklist upon pre-approval.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose & Set Budget",
    body: "Explore our handpicked Leicester inventory of prestige, executive, and family cars. Establish your target monthly budget and preferred deposit.",
    icon: "manage_search",
    note: "Over 70+ cars in stock",
  },
  {
    step: "02",
    title: "60-Sec Soft Search",
    body: "Complete our rapid online verification. A soft inquiry checks eligibility instantly without marking or reducing your credit score in any way.",
    icon: "verified_user",
    note: "Zero credit score impact",
  },
  {
    step: "03",
    title: "Tailored Lender Matching",
    body: "Through our Finset partnership, your application is dynamically matched with over 20 top tier UK lenders to secure the lowest feasible APR.",
    icon: "hub",
    note: "Prime & Sub-Prime coverage",
  },
  {
    step: "04",
    title: "Leicester Drive Away",
    body: "Sign paperwork electronically or in our Oswin Road showroom. Collect your fully valeted, RAC-inspected vehicle or arrange local delivery.",
    icon: "key",
    note: "Same-day handover possible",
  },
];

export default function FinanceCalculatorPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-[80px] bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* Trust pill banner */}
          <section className="w-full bg-surface-container-low py-space-md px-margin-mobile lg:px-margin-desktop">
            <div className="max-w-[1320px] mx-auto flex flex-wrap items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
              <span className="flex items-center gap-space-xs text-secondary font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                FCA Regulated Representative (FRN: 1058774)
              </span>
            </div>
          </section>

          {/* Hero */}
          <section className="relative w-full bg-primary-container text-on-primary py-space-2xl px-margin-mobile lg:px-margin-desktop overflow-hidden">
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />
            <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
              <div className="lg:col-span-7 space-y-space-md">
                <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high/15 backdrop-blur-md text-secondary-fixed font-label-sm text-label-sm tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-secondary-container" />
                  Midlands Premier Automotive Finance
                </div>
                <h1 className="font-display-hero text-headline-xl lg:text-display-hero tracking-tight text-on-primary">
                  Flexible Vehicle Finance
                </h1>
                <p className="font-body-lg text-body-lg text-inverse-on-surface/90 max-w-2xl leading-relaxed">
                  We can introduce you to Finset Limited, who may be able to help you finance your
                  vehicle through their specific panel of lenders.
                </p>
                <p className="font-body-md text-body-md text-inverse-on-surface/80 max-w-2xl leading-relaxed">
                  East Midland Cars Limited is an Introducer Appointed Representative of Finset
                  Limited. Finset Limited acts as a credit broker, not a lender.
                </p>
                <div className="max-w-2xl bg-inverse-surface/60 rounded-xl p-space-md backdrop-blur-sm space-y-2">
                  <p className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wide font-semibold">
                    Representative HP Example
                  </p>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                    Finset act as a Broker, not a Lender. A Representative HP Example: borrowing
                    £10,000 over 60 Months with a representative of 15.98% APR, an annual interest
                    rate of 15.98% (fixed) and a deposit of £0.00, the amount payable would be 59
                    repayments of £237.46 per month, with one final repayment of £247.46 (which
                    includes the option to purchase fee of £10.00), with a total cost of credit of
                    £4,247.60 and a total amount payable of £14,257.60.
                  </p>
                  <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim leading-relaxed">
                    Finset Finance is a broker, not a lender. This means that they may offer
                    different rates and the above is for illustrative purposes only and is not a
                    quote or an offer of finance.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                  <a
                    href="tel:01162898888"
                    className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-md"
                  >
                    <span>Apply for Finance</span>
                    <span className="material-symbols-outlined text-[18px]">call</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="bg-inverse-surface rounded-2xl p-space-md shadow-2xl relative overflow-hidden group">
                  <div className="aspect-[16/10] w-full rounded-xl overflow-hidden relative">
                    <Image
                      src={heroImage}
                      alt="Kyalami Green Audi RS3 Sportback Quattro rear three-quarter view in the East Midland Cars Leicester showroom"
                      width={640}
                      height={400}
                      priority
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 left-3 bg-primary-container/80 backdrop-blur-md px-3 py-1 rounded-full text-secondary-fixed font-label-sm text-label-sm">
                      Featured Stock Finance
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="font-headline-sm text-headline-sm text-on-primary">Audi RS3 Sportback Quattro</p>
                      <p className="font-body-sm text-body-sm text-primary-fixed-dim">S Tronic Auto • 8,500 Miles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why finance with us */}
          <section className="w-full py-space-2xl px-margin-mobile lg:px-margin-desktop bg-surface">
            <div className="max-w-[1320px] mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-space-xl">
                <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase mb-space-xs">
                  <span className="material-symbols-outlined text-[16px] text-secondary">thumb_up</span>
                  Why Finance With Us
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface">Straightforward Car Finance, No Surprises</h2>
                <p className="font-body-md text-body-md text-on-surface-variant pt-2">
                  We keep motor finance simple: clear rates, honest advice, and a team on hand to
                  talk you through your options in plain English.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
                {WHY_FINANCE_WITH_US.map((item) => (
                  <div key={item.title} className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high text-secondary flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{item.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="w-full py-space-2xl px-margin-mobile lg:px-margin-desktop bg-surface-container-low" id="how-it-works">
            <div className="max-w-[1320px] mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-space-2xl">
                <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase mb-space-xs">
                  <span className="material-symbols-outlined text-[16px] text-secondary">approval</span>
                  Straightforward 4-Step Process
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface">How Car Finance Works at East Midland Cars</h2>
                <p className="font-body-md text-body-md text-on-surface-variant pt-2">
                  Experience frictionless automotive finance. From digital pre-approval to driving
                  away from our Leicester showroom within 24 hours.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
                {HOW_IT_WORKS.map((item) => (
                  <div key={item.step} className="bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-surface-container-high text-secondary flex items-center justify-center font-headline-md text-headline-md mb-space-md">
                        {item.step}
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{item.title}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.body}</p>
                    </div>
                    <div className="pt-space-md flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                      <span>{item.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HP vs PCP comparison */}
          <section className="w-full py-space-2xl px-margin-mobile lg:px-margin-desktop bg-surface">
            <div className="max-w-[1320px] mx-auto">
              <div className="max-w-2xl mb-space-xl">
                <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase mb-space-xs">
                  <span className="material-symbols-outlined text-[16px] text-secondary">compare_arrows</span>
                  Package Breakdown
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface">PCP vs HP: Selecting Your Finance Path</h2>
                <p className="font-body-md text-body-md text-on-surface-variant pt-2">
                  Compare key features between Personal Contract Purchase and Hire Purchase to
                  choose the solution aligned with your ownership intentions.
                </p>
              </div>
              <div className="overflow-x-auto">
                <div className="min-w-[720px] bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
                  <div className="grid grid-cols-12 bg-primary-container text-on-primary p-space-md font-headline-sm text-headline-sm">
                    <div className="col-span-4 text-primary-fixed-dim">Core Characteristic</div>
                    <div className="col-span-4 text-secondary-fixed">Personal Contract Purchase (PCP)</div>
                    <div className="col-span-4 text-on-primary">Hire Purchase (HP)</div>
                  </div>
                  {[
                    {
                      label: "Vehicle Ownership",
                      pcp: "Optional at term end. You can hand the vehicle back, part-exchange, or pay the final Guaranteed Future Value (GFV) balloon.",
                      hp: "Guaranteed ownership. Once all payments plus the nominal option-to-purchase fee are settled, the vehicle is 100% yours.",
                    },
                    {
                      label: "Monthly Payments",
                      pcp: "Significantly Lower because repayment covers the vehicle depreciation during the term rather than the total cash value.",
                      hp: "Higher monthly installments because the entire balance of the vehicle is amortized across the chosen loan duration.",
                    },
                    {
                      label: "Deposit Requirements",
                      pcp: "Flexible: from £0 deposit up to 35% of vehicle value. Part exchange can also serve as full down payment.",
                      hp: "Flexible: £0 deposit available, with higher deposits significantly dropping total monthly liability and total interest paid.",
                    },
                    {
                      label: "Annual Mileage Cap",
                      pcp: "Agreed at start (e.g. 6k to 15k miles). Excess mileage charges only apply if you decide to return the car at the end.",
                      hp: "No mileage limits. Drive as much as you require with zero excess mileage penalties.",
                    },
                    {
                      label: "Ideal For Driver Profile",
                      pcp: "Motorists who enjoy changing cars every 2 to 4 years and desire maximum vehicle for a lower monthly outlay.",
                      hp: "Drivers keeping their car long-term, high-mileage commuters, or buyers prioritizing full vehicle equity and asset ownership.",
                    },
                  ].map((row, index) => (
                    <div
                      key={row.label}
                      className={`grid grid-cols-12 p-space-md items-center font-body-md text-body-md ${
                        index % 2 === 0 ? "bg-surface-container-lowest" : "bg-surface-container-low"
                      }`}
                    >
                      <div className="col-span-4 font-bold text-on-surface">{row.label}</div>
                      <div className="col-span-4 text-on-surface-variant pr-space-md">{row.pcp}</div>
                      <div className="col-span-4 text-on-surface-variant">{row.hp}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Lender trust grid */}
          <section className="w-full py-space-xl px-margin-mobile lg:px-margin-desktop bg-surface-container-low">
            <div className="max-w-[1320px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {[
                  { icon: "verified", title: "FCA Regulated Partner", body: "Finset Limited FRN: 987805. East Midland Cars Limited FRN: 1058774. Compliant ethical broker." },
                  { icon: "lock", title: "256-Bit SSL Encryption", body: "Bank-grade security protocols safeguarding your personal data under strict UK GDPR standards." },
                  { icon: "savings", title: "£0 Deposit Available", body: "Drive away without upfront cash commitments. Subject to status and income assessment." },
                  { icon: "diversity_3", title: "Prime & Sub-Prime Panel", body: "Specialized lending programs assisting clients with diverse financial circumstances and credit ratings." },
                ].map((card) => (
                  <div key={card.title} className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm">
                    <div className="p-2.5 rounded-lg bg-surface-container-high text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">{card.title}</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">{card.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="w-full py-space-2xl px-margin-mobile lg:px-margin-desktop bg-surface">
            <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              <div className="lg:col-span-4 space-y-space-md">
                <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase">
                  <span className="material-symbols-outlined text-[16px] text-secondary">help</span>
                  Common Inquiries
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface">Frequently Asked Questions</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Clear, honest information regarding vehicle financing, credit evaluations, and
                  settlement options at our Leicester dealership.
                </p>
                <div className="p-space-md rounded-xl bg-surface-container-low space-y-2">
                  <p className="font-headline-sm text-headline-sm text-on-surface">Need individual advice?</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Our certified finance team is on site 6 days a week to review options with zero
                    sales pressure.
                  </p>
                  <a className="inline-flex items-center gap-space-xs text-secondary font-label-md text-label-md pt-2" href="tel:01162898888">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <span>Call 0116 289 8888</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-8">
                <Accordion items={FAQ_ITEMS} />
              </div>
            </div>
          </section>

          {/* CTA strip */}
          <section className="w-full bg-surface-container-highest py-space-xl px-margin-mobile lg:px-margin-desktop">
            <div className="max-w-[1320px] mx-auto rounded-2xl bg-primary-container text-on-primary p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-xl">
              <div className="space-y-space-xs max-w-2xl">
                <span className="text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wide">Ready for the road?</span>
                <h3 className="font-headline-xl text-headline-xl text-on-primary">Get Pre-Approved for Your Car in Leicester</h3>
                <p className="font-body-md text-body-md text-primary-fixed-dim">
                  Join hundreds of Leicester drivers who secured competitive, transparent finance
                  through East Midland Cars. Zero obligation and zero risk to your credit record.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-space-sm shrink-0 w-full sm:w-auto">
                <a href="tel:01162898888" className="px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all text-center shadow-md">
                  Start Soft Search Application
                </a>
                <a href="tel:01162898888" className="px-6 py-3.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-surface-container-high/20 transition-all text-center">
                  0116 289 8888
                </a>
              </div>
            </div>
          </section>

          {/* Statutory notice */}
          <section className="w-full bg-primary-container text-inverse-on-surface py-space-md px-margin-mobile lg:px-margin-desktop">
            <div className="max-w-[1320px] mx-auto space-y-2">
              <div className="flex flex-wrap items-center gap-space-md text-legal-fineprint font-legal-fineprint text-primary-fixed-dim">
                <span className="font-bold text-on-primary uppercase">Financial Conduct Authority (FCA) Regulatory Notice:</span>
                <span>
                  East Midland Cars Limited is registered on the Financial Services Register under
                  Firm Reference Number (FRN) 1058774 as an Appointed Representative of Finset
                  Limited (FRN 987805).
                </span>
              </div>
              <p className="text-legal-fineprint font-legal-fineprint text-primary-fixed-dim leading-relaxed">
                East Midland Cars Limited is a credit broker and not a lender. We can introduce you
                to a limited number of finance providers. We do not charge fees for our consumer
                credit services. We will receive a commission from the lender which will either be
                a fixed amount or a percentage of the amount you borrow. This commission does not
                alter the rate of interest you pay. All finance offers are subject to applicant
                status, income, and vehicle criteria. Terms and Conditions Apply. Unit 38 Oswin
                Road, Leicester, LE3 1HR.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
