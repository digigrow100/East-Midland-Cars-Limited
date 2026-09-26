import Image from "next/image";
import Link from "next/link";
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
    title: "Finance Through Finset Limited",
    body: "We can introduce you to Finset Limited, who work with a specific panel of lenders to try to obtain you an approval. They are only able to offer finance products from lenders on their panel.",
  },
  {
    icon: "account_balance_wallet",
    title: "Finance Subject to Status",
    body: "All finance is subject to status and terms and conditions apply. The finance options available will depend on your individual circumstances and the products available through Finset Limited.",
  },
  {
    icon: "diversity_3",
    title: "Panel of Lenders",
    body: "Finset Limited works with a specific panel of lenders. Please note they are only able to offer finance products from the lenders on their panel.",
  },
  {
    icon: "bolt",
    title: "Introduced to Finset Limited",
    body: "As an Introducer Appointed Representative, East Midland Cars Limited is only able to introduce you to Finset Limited. We are not able to discuss any finance application or acceptance in detail.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Who provides the vehicle finance?",
    answer:
      "East Midland Cars Limited can introduce you to Finset Limited. Finset Limited acts as a credit broker, not a lender, and works with a specific panel of lenders.",
  },
  {
    question: "Can East Midland Cars advise me which finance product to choose?",
    answer:
      "No. East Midland Cars Limited does not provide financial advice or recommendations. We are only permitted to introduce you to Finset Limited.",
  },
  {
    question: "Who should I contact about my finance application?",
    answer:
      "Questions regarding your finance application, available finance products or acceptance should be directed to Finset Limited.",
  },
  {
    question: "Do East Midland Cars or Finset charge a fee for their services?",
    answer:
      "East Midland Cars Limited and Finset Limited do not charge you a fee for their services. However, the lender may charge interest or fees as part of your finance agreement. These will be set out in the documentation provided by the lender.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose Your Vehicle",
    body: "Browse our available vehicles and choose the car you are interested in purchasing. You can also consider the deposit and monthly budget that may suit your circumstances.",
    icon: "manage_search",
  },
  {
    step: "02",
    title: "Make a Finance Enquiry",
    body: "Once you have chosen a vehicle, you can make a finance enquiry. East Midland Cars Limited can introduce you to Finset Limited for the purpose of arranging vehicle finance.",
    icon: "verified_user",
  },
  {
    step: "03",
    title: "Finset Limited",
    body: "Finset Limited works with a specific panel of lenders to try to obtain you an approval. Please note they are only able to offer you finance products from the lenders on their panel.",
    icon: "hub",
  },
  {
    step: "04",
    title: "Complete Your Purchase",
    body: "If your finance application is accepted and all required documentation and checks have been completed, we can arrange collection of your vehicle from East Midland Cars Limited.",
    icon: "key",
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
                    href="tel:01163194784"
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
                  We keep vehicle finance simple and transparent. East Midland Cars Limited can
                  introduce you to Finset Limited, who may be able to help you explore vehicle
                  finance options from their panel of lenders.
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
                <h2 className="font-headline-xl text-headline-xl text-on-surface">How Vehicle Finance Works</h2>
                <p className="font-body-md text-body-md text-on-surface-variant pt-2">
                  East Midland Cars Limited can introduce you to Finset Limited, who may be able to
                  help you finance your chosen vehicle through their panel of lenders. Finance is
                  subject to status and terms and conditions apply.
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
                    <div className="pt-space-md flex items-center gap-space-xs text-secondary">
                      <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Vehicle finance options */}
          <section className="w-full py-space-2xl px-margin-mobile lg:px-margin-desktop bg-surface">
            <div className="max-w-[1320px] mx-auto">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase mb-space-xs">
                  <span className="material-symbols-outlined text-[16px] text-secondary">compare_arrows</span>
                  Finance Options
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface">Vehicle Finance Options</h2>
                <p className="font-body-md text-body-md text-on-surface-variant pt-2">
                  We can introduce you to Finset Limited, who may be able to help you finance your
                  vehicle through their panel of lenders.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant pt-2">
                  East Midland Cars Limited is only permitted to introduce you to Finset Limited. We
                  do not provide advice or recommendations on finance products.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant pt-2">
                  For further information about the finance products and services available through
                  Finset Limited, please read our Initial Disclosure Document.
                </p>
                <div className="pt-space-md">
                  <Link
                    href="/initial-disclosure-document"
                    className="inline-flex items-center gap-space-xs px-6 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-sm"
                  >
                    <span>Read Our Initial Disclosure Document</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                <p className="font-legal-fineprint text-legal-fineprint text-outline pt-space-md">
                  All finance is subject to status. Terms and conditions apply.
                </p>
              </div>
            </div>
          </section>

          {/* Lender trust grid */}
          <section className="w-full py-space-xl px-margin-mobile lg:px-margin-desktop bg-surface-container-low">
            <div className="max-w-[1320px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {[
                  {
                    icon: "verified",
                    title: "FCA Registered",
                    body: "East Midland Cars Limited is an Introducer Appointed Representative of Finset Limited. Our FCA Reference Number is 1058774. Finset Limited is authorised and regulated by the Financial Conduct Authority under FRN 987805 and acts as a credit broker, not a lender.",
                  },
                  { icon: "lock", title: "256-Bit SSL Encryption", body: "Bank-grade security protocols safeguarding your personal data under strict UK GDPR standards." },
                  {
                    icon: "savings",
                    title: "Finance Subject to Status",
                    body: "All finance is subject to status. Terms and conditions apply.",
                  },
                  {
                    icon: "diversity_3",
                    title: "Panel of Lenders",
                    body: "Finset Limited works with a specific panel of lenders and can only offer finance products from lenders on its panel.",
                  },
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
                  <p className="font-headline-sm text-headline-sm text-on-surface">Have a Finance Question?</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    East Midland Cars Limited can introduce you to Finset Limited for vehicle
                    finance. As an Introducer Appointed Representative, we are not able to discuss
                    finance products or provide financial advice or recommendations.
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    For questions regarding a finance application, finance products or an
                    acceptance, please contact Finset Limited directly.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-space-md">
                <Accordion items={FAQ_ITEMS} />
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
                  <p className="font-legal-fineprint text-legal-fineprint text-outline">
                    All finance is subject to status. Terms and conditions apply.
                  </p>
                  <Link
                    href="/initial-disclosure-document"
                    className="inline-flex items-center gap-space-xs px-5 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-sm shrink-0"
                  >
                    <span>Read Our Initial Disclosure Document</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA strip */}
          <section className="w-full bg-surface-container-highest py-space-xl px-margin-mobile lg:px-margin-desktop">
            <div className="max-w-[1320px] mx-auto rounded-2xl bg-primary-container text-on-primary p-space-xl shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg">
                <div className="space-y-space-xs max-w-2xl">
                  <span className="text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wide">Ready for the road?</span>
                  <h3 className="font-headline-xl text-headline-xl text-on-primary">Apply for Vehicle Finance</h3>
                  <p className="font-body-md text-body-md text-primary-fixed-dim">
                    Interested in financing your vehicle? East Midland Cars Limited can introduce
                    you to Finset Limited, who may be able to help you arrange vehicle finance
                    through their panel of lenders.
                  </p>
                  <p className="font-body-md text-body-md text-primary-fixed-dim">
                    East Midland Cars Limited is an Introducer Appointed Representative of Finset
                    Limited. We are only permitted to introduce you to Finset Limited and are not
                    able to discuss any finance application or acceptance in detail.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-space-sm shrink-0 w-full sm:w-auto">
                  <a href="tel:01163194784" className="px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all text-center shadow-md">
                    Apply for Finance
                  </a>
                  <a href="tel:01163194784" className="px-6 py-3.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-surface-container-high/20 transition-all text-center">
                    0116 319 4784
                  </a>
                </div>
              </div>
              <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim pt-space-md">
                All finance is subject to status. Terms and conditions apply.
              </p>
            </div>
          </section>

          {/* Commission disclosure */}
          <section id="commission-disclosure" className="w-full py-space-2xl px-margin-mobile lg:px-margin-desktop bg-surface-container-low scroll-mt-28">
            <div className="max-w-[1320px] mx-auto">
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-xl space-y-space-lg">
                <div>
                  <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase mb-space-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">request_quote</span>
                    Commission Disclosure
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    We will receive a commission from Finset Limited should you decide to enter into
                    an agreement through them with a lender from their panel and this could be
                    either a fixed fee or a percentage of the amount of finance taken.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-space-sm">
                    The commission payable to Finset Limited by the lender may be a flat fee or a
                    percentage of the amount you borrow.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-space-sm">
                    You can request further information about this commission at any time directly
                    from Finset Limited by contacting them:
                  </p>
                  <div className="flex flex-wrap items-center gap-space-lg pt-space-sm font-body-sm text-body-sm text-on-surface">
                    <a className="flex items-center gap-1.5 text-secondary font-semibold hover:underline" href="mailto:compliance@finset.co.uk">
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                      compliance@finset.co.uk
                    </a>
                    <a className="flex items-center gap-1.5 text-secondary font-semibold hover:underline" href="tel:01245967999">
                      <span className="material-symbols-outlined text-[18px]">call</span>
                      01245 967999
                    </a>
                  </div>
                  <div className="pt-space-md">
                    <a
                      href="https://www.finset.co.uk/commission-disclosure-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-space-xs px-5 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-sm"
                    >
                      <span>View Finset&apos;s Full Commission Disclosure</span>
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </a>
                  </div>
                </div>
                <div className="border-t border-outline-variant pt-space-lg">
                  <p className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Fees</p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Ourselves and Finset Limited do not charge you a fee for our services. However,
                    the lender may charge interest or fees as part of your finance agreement. These
                    will be clearly set out in the documentation provided by the lender to you.
                  </p>
                </div>
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
