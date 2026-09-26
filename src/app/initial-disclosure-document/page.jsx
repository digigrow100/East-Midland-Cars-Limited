import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Initial Disclosure Document | East Midland Cars Limited",
  description:
    "FCA regulatory disclosures for East Midland Cars Limited: identity and status, commission, credit searches, data privacy and complaints procedure.",
};

const NAV_ITEMS = [
  { href: "#section-1", label: "1. Identity & FCA Status" },
  { href: "#section-2", label: "2. Scope of Services" },
  { href: "#section-3", label: "3. Commission & Remuneration" },
  { href: "#section-4", label: "4. Credit Searches & Checks" },
  { href: "#section-5", label: "5. Data Privacy (ICO ZC152902)" },
  { href: "#section-6", label: "6. Treating Customers Fairly (TCF)" },
  { href: "#section-7", label: "7. Complaints & Ombudsman" },
];

const PILLARS = [
  {
    icon: "verified_user",
    label: "Authorised Status",
    title: "FCA Regulated",
    body: "Appointed Representative of Finset Limited (FRN: 987805). East Midland Cars holds FRN: 1058774.",
  },
  {
    icon: "account_balance_wallet",
    label: "Credit Intermediary",
    title: "Broker, Not Lender",
    body: "We partner with Finset Limited's extensive panel of tier-one & sub-prime lenders to deliver bespoke HP & PCP terms.",
  },
  {
    icon: "money_off",
    label: "Fee Transparency",
    title: "Zero Broker Fees",
    body: "We do not levy any direct charge or broking administration fee to retail consumers for accessing finance solutions.",
  },
  {
    icon: "shield",
    label: "Data Integrity",
    title: "ICO & UK GDPR",
    body: "Certified data controller (Registration ZC152902). Transmissions are encrypted using enterprise 256-bit SSL protocols.",
  },
];

export default function InitialDisclosureDocumentPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-[80px] bg-surface min-h-[calc(100vh-80px)]">
        <div className="relative w-full max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-xl">
          {/* Header */}
          <div className="flex flex-col space-y-space-md mb-space-2xl">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high text-on-secondary-container font-label-sm text-label-sm tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                FCA Compliance &amp; Consumer Transparency
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px]">gavel</span>
                Statutory Notice
              </span>
            </div>
            <div className="max-w-4xl space-y-space-sm">
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight uppercase">
                Initial Disclosure Document &amp; Regulatory Policy
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Clear, transparent regulatory information detailing East Midland Cars Limited, our
                Financial Conduct Authority (FCA) permissions, credit broking status, commission
                arrangements, and statutory consumer rights.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-space-md font-label-sm text-label-sm text-on-surface-variant">
              <div className="flex flex-wrap items-center gap-space-md">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">calendar_today</span>
                  <span>Last Updated: <strong className="text-on-surface font-semibold">October 2024</strong></span>
                </div>
                <span className="text-outline-variant">/</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">rule</span>
                  <span>Version: <strong className="text-on-surface font-semibold">2.4 (Consumer Duty Compliant)</strong></span>
                </div>
                <span className="text-outline-variant">/</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">public</span>
                  <span>Jurisdiction: <strong className="text-on-surface font-semibold">England &amp; Wales</strong></span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-secondary-fixed-variant font-mono text-[11px]">ICO: ZC152902</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-secondary-fixed-variant font-mono text-[11px]">FCA FRN: 1058774</span>
              </div>
            </div>
          </div>

          {/* 4 pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-2xl">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">{pillar.icon}</span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{pillar.label}</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2">{pillar.title}</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main content + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start mb-space-2xl">
            <div className="lg:col-span-4 space-y-space-md lg:sticky lg:top-32">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                  <span className="font-headline-sm text-headline-sm text-on-surface uppercase">Document Index</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">list_alt</span>
                </div>
                <nav className="flex flex-col space-y-1 font-label-md text-label-md">
                  {NAV_ITEMS.map((item, i) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={
                        i === 0
                          ? "px-3 py-2 rounded-lg bg-surface-container text-on-surface font-semibold transition-colors flex items-center justify-between"
                          : "px-3 py-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-between"
                      }
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-outline text-xs">{String(i + 1).padStart(2, "0")}</span>
                    </a>
                  ))}
                </nav>
              </div>
              <div className="bg-primary-container text-inverse-on-surface p-space-lg rounded-xl shadow-sm space-y-space-sm">
                <div className="flex items-center gap-space-xs text-secondary-container">
                  <span className="material-symbols-outlined text-[20px]">assured_workload</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Corporate Audit Record</span>
                </div>
                <div className="space-y-2 font-body-sm text-body-sm text-primary-fixed-dim">
                  <div>
                    <p className="text-on-primary font-semibold">East Midland Cars Limited</p>
                    <p>Registered in England &amp; Wales</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                    <div className="bg-inverse-surface p-2 rounded">
                      <span className="text-outline-variant block text-[10px]">COMPANY NO:</span>
                      <span className="text-on-primary">14262253</span>
                    </div>
                    <div className="bg-inverse-surface p-2 rounded">
                      <span className="text-outline-variant block text-[10px]">FCA FRN:</span>
                      <span className="text-on-primary">1058774</span>
                    </div>
                    <div className="bg-inverse-surface p-2 rounded">
                      <span className="text-outline-variant block text-[10px]">PRINCIPAL FRN:</span>
                      <span className="text-on-primary">987805</span>
                    </div>
                    <div className="bg-inverse-surface p-2 rounded">
                      <span className="text-outline-variant block text-[10px]">ICO REG:</span>
                      <span className="text-on-primary">ZC152902</span>
                    </div>
                  </div>
                  <p className="pt-2 text-primary-fixed-dim text-xs leading-normal">
                    Showroom &amp; Registered Office:
                    <br />
                    Unit 38 Oswin Road, Leicester, LE3 1HR
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-space-lg">
              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-1">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">01</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Who We Are &amp; Regulatory Status</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  This document outlines the regulatory status and services provided by{" "}
                  <strong className="text-on-surface">East Midland Cars Limited</strong>, trading as an
                  executive automotive retailer situated in Leicester.
                </p>
                <div className="bg-surface-container-low p-space-md rounded-lg space-y-2">
                  <p className="font-body-sm text-body-sm text-on-surface">
                    <strong className="font-semibold">Company Name:</strong> East Midland Cars Limited
                    <br />
                    <strong className="font-semibold">Company Registration Number:</strong> 14262253
                    (Incorporated in England and Wales)
                    <br />
                    <strong className="font-semibold">Registered Office &amp; Showroom Address:</strong>{" "}
                    Unit 38 Oswin Road, Leicester, LE3 1HR
                    <br />
                    <strong className="font-semibold">FCA Firm Reference Number (FRN):</strong> 1058774
                  </p>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  East Midland Cars Limited is an <strong className="text-on-surface">Introducer
                  Appointed Representative (IAR)</strong> of <strong className="text-on-surface">Finset
                  Limited</strong>, which is fully authorised and regulated by the Financial Conduct
                  Authority (FCA) under Firm Reference Number <strong>987805</strong>. As our regulatory
                  principal, Finset Limited oversees our credit broking introductions, ensuring all
                  actions comply with FCA handbook rules, Consumer Credit regulations, and the FCA
                  Consumer Duty.
                </p>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-2">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">02</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">What Services Do We Provide?</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We operate strictly as a <strong className="text-on-surface">credit broker, not a
                  lender</strong>. We introduce retail and commercial customers seeking vehicular
                  financing to Finset Limited and their regulated panel of high-quality motor finance
                  lenders.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md my-space-sm">
                  <div className="p-space-md rounded-lg bg-surface-container-low space-y-1">
                    <div className="flex items-center gap-2 text-on-surface font-headline-sm text-headline-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">directions_car</span>
                      Hire Purchase (HP)
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Direct route to ownership. Equal monthly repayments spread over terms from 12 to
                      60 months with an optional nominal option-to-purchase fee at conclusion.
                    </p>
                  </div>
                  <div className="p-space-md rounded-lg bg-surface-container-low space-y-1">
                    <div className="flex items-center gap-2 text-on-surface font-headline-sm text-headline-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">calendar_month</span>
                      Personal Contract Purchase (PCP)
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Lower monthly payments deferring a guaranteed minimum future value (GMFV /
                      balloon) to the term end, offering options to return, part-exchange, or purchase.
                    </p>
                  </div>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-high/60 space-y-2">
                  <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md uppercase">
                    <span className="material-symbols-outlined text-secondary text-[18px]">info</span>
                    Important Statement Regarding Financial Advice
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    We do <strong className="text-on-surface">not</strong> provide financial advice or
                    personal financial recommendations. We provide clear, objective product information
                    to enable you to make your own informed decision regarding which finance package
                    fits your requirements and affordability criteria.
                  </p>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-3">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">03</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Commission &amp; Remuneration Disclosure</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  In accordance with FCA rules, CONC guidelines, and Consumer Duty requirements, East
                  Midland Cars Limited operates on a principle of total transparency regarding business
                  commercial relationships.
                </p>
                <div className="space-y-space-sm">
                  <div className="flex gap-space-sm items-start">
                    <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">check_circle</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      <strong className="text-on-surface">Zero Customer Surcharges:</strong> We do not
                      charge you any upfront fee or broking retainer for our credit broking services.
                    </p>
                  </div>
                  <div className="flex gap-space-sm items-start">
                    <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">check_circle</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      <strong className="text-on-surface">Broker Commission:</strong> As a credit broker,
                      we may receive a commission or referral fee from Finset Limited or the chosen
                      lender should you proceed to enter into a credit agreement. This remuneration
                      model is typically structured as a fixed sum per transaction or a fixed percentage
                      relative to the capital amount borrowed.
                    </p>
                  </div>
                  <div className="flex gap-space-sm items-start">
                    <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">check_circle</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      <strong className="text-on-surface">Rate Discretion Prohibited:</strong> The
                      commission we receive does not determine or artificially inflate your interest
                      rate (APR) or the total cost of credit. Under FCA rules on discretionary
                      commission models, we have no ability or incentive to adjust your rate to increase
                      dealership remuneration.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-md">
                  <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-1">request_quote</span>
                  <div className="space-y-1">
                    <p className="font-headline-sm text-headline-sm text-on-surface">Statutory Right to Request Exact Commission</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Under FCA regulations, you possess the definitive right to request disclosure of
                      the monetary amount or percentage of commission we will receive prior to
                      concluding your credit contract. You may ask your sales representative at any
                      point or submit a request directly in writing to{" "}
                      <a className="text-secondary underline" href="mailto:sales@eastmidlandcars.co.uk">
                        sales@eastmidlandcars.co.uk
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-4">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">04</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Affordability &amp; Credit Assessments</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  All credit applications are subject to status, terms, and individual creditworthiness
                  evaluations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="bg-surface-container-low p-space-md rounded-lg space-y-2">
                    <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md uppercase">
                      <span className="material-symbols-outlined text-secondary text-[18px]">travel_explore</span>
                      Initial Eligibility: Soft Search
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      When using our finance qualification tools or initial pre-approval check, a
                      &lsquo;soft search&rsquo; is performed. This check is visible only to you on your
                      credit file and has zero influence on your credit scoring.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-lg space-y-2">
                    <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md uppercase">
                      <span className="material-symbols-outlined text-secondary text-[18px]">fingerprint</span>
                      Formal Submission: Hard Search
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Upon submitting a formal proposal to the selected finance lender, a comprehensive
                      credit check (hard search) will be logged on your credit profile, alongside
                      identity, residency, and affordability verification.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-high/40 p-space-md rounded-lg flex items-start gap-space-sm text-on-surface">
                  <span className="material-symbols-outlined text-error text-[24px] shrink-0 mt-0.5">warning</span>
                  <div className="space-y-1">
                    <p className="font-label-md text-label-md uppercase font-bold text-on-surface">Crucial Consumer Warning</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Late or missed payments can lead to severe consequences for your credit profile,
                      make obtaining future credit more costly or inaccessible, and could ultimately
                      result in the repossession of the vehicle. Only commit to finance agreements you
                      can comfortably afford throughout the term.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-5">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">05</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Data Protection &amp; Privacy (ICO: ZC152902)</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  East Midland Cars Limited is formally registered with the{" "}
                  <strong className="text-on-surface">Information Commissioner&rsquo;s Office (ICO)</strong>{" "}
                  under Registration Reference <strong className="text-on-surface">ZC152902</strong>. We
                  process customer personal data in strict compliance with the UK General Data
                  Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
                <div className="space-y-space-sm">
                  <div className="bg-surface-container-low p-space-md rounded-lg flex gap-space-md">
                    <span className="material-symbols-outlined text-secondary text-[24px] shrink-0">enhanced_encryption</span>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface text-base mb-1">Encrypted Infrastructure</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        All customer application records, financial documentation, and proof of address
                        data transmitted via our web forms utilize 256-bit SSL certificate security
                        protocols.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-lg flex gap-space-md">
                    <span className="material-symbols-outlined text-secondary text-[24px] shrink-0">share</span>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface text-base mb-1">Restricted Data Sharing</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        We only disclose personal data to Finset Limited and their regulated panel of
                        lenders for the express purpose of evaluating eligibility and underwriting
                        finance contracts. We will never monetize or sell personal data to
                        non-affiliated marketing entities.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-6">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">06</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Treating Customers Fairly &amp; Vulnerable Customers</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  East Midland Cars Limited is dedicated to upholding the FCA&rsquo;s{" "}
                  <strong className="text-on-surface">Consumer Duty</strong> and longstanding{" "}
                  <strong className="text-on-surface">Treating Customers Fairly (TCF)</strong> imperatives.
                  Our core commitment is to ensure good financial and retail outcomes for all consumers
                  across every stage of the automotive acquisition cycle.
                </p>
                <div className="bg-surface-container p-space-md rounded-lg space-y-2">
                  <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-on-surface text-base">
                    <span className="material-symbols-outlined text-secondary text-[20px]">support_agent</span>
                    Vulnerable Customer Support &amp; Accessibility
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    We acknowledge that personal circumstances—such as health issues, bereavement,
                    financial fragility, or language barriers—may affect a customer&rsquo;s
                    decision-making process. If you require tailored communication formats (such as
                    large font, translated summaries, or a designated third-party representative
                    present), please inform our team so we can adapt our service appropriately.
                  </p>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-7">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">07</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Complaints Procedure &amp; Dispute Resolution</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our objective is consistently exceptional service. However, if any aspect of our
                  vehicle sale or credit broking arrangement fails to meet your expectations, we
                  maintain a formalized, transparent dispute resolution process.
                </p>
                <div className="bg-surface-container-low p-space-md rounded-lg space-y-space-sm">
                  <p className="font-headline-sm text-headline-sm text-on-surface text-base uppercase">How to Lodge a Complaint</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                    <div className="p-3 bg-surface-container-lowest rounded">
                      <span className="font-semibold text-on-surface block mb-1">By Post:</span>
                      Complaints Officer
                      <br />
                      East Midland Cars Limited
                      <br />
                      Unit 38 Oswin Road
                      <br />
                      Leicester, LE3 1HR
                    </div>
                    <div className="p-3 bg-surface-container-lowest rounded">
                      <span className="font-semibold text-on-surface block mb-1">By Telephone:</span>
                      0116 319 4784
                      <br />
                      07538 000250
                      <br />
                      Mon-Sat 09:00 - 18:00
                    </div>
                    <div className="p-3 bg-surface-container-lowest rounded">
                      <span className="font-semibold text-on-surface block mb-1">By Electronic Mail:</span>
                      <a className="text-secondary underline" href="mailto:sales@eastmidlandcars.co.uk">
                        sales@eastmidlandcars.co.uk
                      </a>
                      <br />
                      Subject: Formal Dispute
                    </div>
                  </div>
                </div>
                <div className="space-y-space-xs pt-space-xs">
                  <p className="font-headline-sm text-headline-sm text-on-surface text-base">Resolution Milestones</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    <div className="p-space-sm bg-surface-container-low rounded flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[24px]">mark_email_read</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        <strong className="text-on-surface">5 Business Days:</strong> Written acknowledgement of receipt.
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container-low rounded flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[24px]">fact_check</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        <strong className="text-on-surface">8 Calendar Weeks:</strong> Final definitive written response.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-container text-inverse-on-surface p-space-lg rounded-xl space-y-space-sm">
                  <div className="flex items-center gap-2 text-secondary-container">
                    <span className="material-symbols-outlined text-[24px]">account_balance</span>
                    <p className="font-headline-sm text-headline-sm text-on-primary uppercase">Financial Ombudsman Service (FOS)</p>
                  </div>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                    If your complaint concerns regulated credit broking activities and we cannot reach
                    an agreeable resolution within 8 weeks, or if you remain dissatisfied with our final
                    outcome, you possess the statutory right to refer the matter free of charge to the
                    Financial Ombudsman Service within 6 months of our final notice.
                  </p>
                  <div className="bg-inverse-surface p-space-md rounded-lg flex flex-wrap items-center justify-between gap-space-md font-body-sm text-body-sm text-inverse-on-surface">
                    <div>
                      <p className="font-semibold text-on-primary">The Financial Ombudsman Service</p>
                      <p className="text-primary-fixed-dim text-xs">Exchange Tower, Harbour Exchange, London, E14 9SR</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm">
                      <span className="flex items-center gap-1 text-secondary-container">
                        <span className="material-symbols-outlined text-[16px]">call</span>
                        0800 023 4567
                      </span>
                      <a
                        className="flex items-center gap-1 text-on-primary underline hover:text-secondary-fixed transition-colors"
                        href="https://www.financial-ombudsman.org.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        financial-ombudsman.org.uk
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
