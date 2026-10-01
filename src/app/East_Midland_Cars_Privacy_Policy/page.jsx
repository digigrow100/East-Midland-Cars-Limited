import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | East Midland Cars Limited",
  description:
    "How East Midland Cars Limited collects, uses, stores, protects and shares your personal information, and your rights under UK data protection law.",
};

const NAV_ITEMS = [
  { href: "#section-1", label: "1. Purpose of this Policy" },
  { href: "#section-2", label: "2. Information We Collect" },
  { href: "#section-3", label: "3. Why We Use Your Information" },
  { href: "#section-4", label: "4. Our Lawful Bases" },
  { href: "#section-5", label: "5. Vehicle Finance & Finset Limited" },
  { href: "#section-6", label: "6. Credit Searches" },
  { href: "#section-7", label: "7. Who We Share Data With" },
  { href: "#section-8", label: "8. Special Category Information" },
  { href: "#section-9", label: "9. How Long We Keep Information" },
  { href: "#section-10", label: "10. How We Protect Information" },
  { href: "#section-11", label: "11. Your Data Protection Rights" },
  { href: "#section-12", label: "12. Exercising Your Rights" },
  { href: "#section-13", label: "13. Marketing" },
  { href: "#section-14", label: "14. Cookies & Website Information" },
  { href: "#section-15", label: "15. Complaints" },
  { href: "#section-16", label: "16. Finset Limited" },
  { href: "#section-17", label: "17. Changes to This Policy" },
];

const INFO_WE_COLLECT = [
  "Your name",
  "Address",
  "Email address",
  "Telephone number",
  "Date of birth where required",
  "Driving licence information where required",
  "Vehicle registration and vehicle information",
  "Details relating to a vehicle you purchase, sell, part-exchange or enquire about",
  "Payment and transaction information",
  "Information provided when you make an enquiry",
  "Information required to introduce you to Finset Limited where you request vehicle finance",
  "Correspondence and communications between you and East Midland Cars Limited",
  "Complaints and aftersales information",
  "Website usage, device, IP address and cookie information where applicable",
  "Identification and documentation where required for legal, fraud-prevention or regulatory purposes",
];

const WHY_WE_USE = [
  "Respond to vehicle and service enquiries",
  "Sell vehicles and provide associated dealership services",
  "Purchase or accept vehicles in part exchange",
  "Arrange vehicle collections or deliveries",
  "Process payments and maintain transaction records",
  "Provide aftersales support",
  "Deal with warranties, complaints and customer enquiries",
  "Carry out vehicle, identity or fraud-prevention checks where appropriate",
  "Maintain accounting, taxation and business records",
  "Comply with legal and regulatory obligations",
  "Protect our business and customers against fraud",
  "Introduce customers requesting vehicle finance to Finset Limited",
  "Communicate with you about products or services where permitted by law",
  "Operate and improve our website and services",
];

const LAWFUL_BASES = [
  {
    title: "Contract",
    body: "Where processing is necessary to enter into or perform a contract with you, for example when you purchase a vehicle from us.",
  },
  {
    title: "Legal Obligation",
    body: "Where we are required to process or retain information to comply with the law.",
  },
  {
    title: "Legitimate Interests",
    body: "Where processing is reasonably necessary for the operation and protection of our business, provided those interests are not overridden by your rights.",
  },
  {
    title: "Consent",
    body: "Where we have specifically asked for and obtained your consent, for example for certain types of marketing or other processing where consent is required. Where we rely on consent, you may withdraw it at any time.",
  },
];

const SHARE_WITH = [
  "Finset Limited, where you request a vehicle finance introduction",
  "Vehicle warranty or aftersales providers",
  "Vehicle history and provenance checking providers",
  "Payment processing providers",
  "Delivery, transport or vehicle recovery providers",
  "Accountants, auditors and professional advisers",
  "IT, website, CRM and other service providers",
  "Fraud-prevention and identity-verification services",
  "DVLA or other government bodies where necessary",
  "HM Revenue & Customs",
  "Law enforcement agencies where legally required",
  "Regulators or other public authorities where required by law",
];

const YOUR_RIGHTS = [
  { title: "Right of Access", body: "You may request a copy of personal information we hold about you." },
  { title: "Right to Rectification", body: "You may ask us to correct inaccurate or incomplete personal information." },
  { title: "Right to Erasure", body: "In certain circumstances, you may ask us to delete your personal information." },
  { title: "Right to Restrict Processing", body: "In certain circumstances, you may ask us to restrict how your information is processed." },
  { title: "Right to Object", body: "You may have the right to object to certain processing, including processing based on legitimate interests and direct marketing." },
  { title: "Right to Data Portability", body: "In certain circumstances, you may request personal information in a structured, commonly used and machine-readable format." },
  { title: "Rights Relating to Automated Decision-Making", body: "You may have rights where a decision producing legal or similarly significant effects is made solely by automated means." },
];

export default function PrivacyPolicyPage() {
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
                Data Protection &amp; Privacy
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px]">gavel</span>
                Statutory Notice
              </span>
            </div>
            <div className="max-w-4xl space-y-space-sm">
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight uppercase">
                Privacy Policy
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                How East Midland Cars Limited collects, uses, stores, protects and shares your
                personal information, and your rights under UK data protection law.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-space-md font-label-sm text-label-sm text-on-surface-variant">
              <div className="flex flex-wrap items-center gap-space-md">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">calendar_today</span>
                  <span>Last Updated: <strong className="text-on-surface font-semibold">October 2026</strong></span>
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

          {/* Main content + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start mb-space-2xl">
            <div className="lg:col-span-4 space-y-space-md lg:sticky lg:top-32 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto">
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
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Corporate Record</span>
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
                    Registered &amp; Trading Address:
                    <br />
                    Unit 38 Oswin Road, Leicester, LE3 1HR
                    <br />
                    Tel: 07538 000250
                    <br />
                    Email: emccars@outlook.com
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-space-lg">
              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-1">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">01</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Purpose of this Privacy Policy</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  The purpose of this Privacy Policy is to explain how East Midland Cars Limited
                  collects, uses, stores, protects and shares your personal information and to
                  explain your rights under UK data protection law.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  East Midland Cars Limited is a used vehicle dealership and is registered with the{" "}
                  <strong className="text-on-surface">Information Commissioner&rsquo;s Office (ICO)</strong>{" "}
                  under registration number <strong className="text-on-surface">ZC152902</strong>.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  East Midland Cars Limited is also an{" "}
                  <strong className="text-on-surface">Introducer Appointed Representative</strong> of
                  Finset Limited for vehicle finance introductions. Finset Limited is authorised and
                  regulated by the Financial Conduct Authority under Firm Reference Number{" "}
                  <strong className="text-on-surface">987805</strong>.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Where you ask us about vehicle finance, our role is limited to introducing you to
                  Finset Limited. We do not make lending decisions and we do not independently submit
                  applications to lenders on Finset Limited&rsquo;s lender panel.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  If you have any questions about how East Midland Cars Limited uses your personal
                  information, please contact us using the details on this page.
                </p>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-2">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">02</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">What Personal Information Do We Collect?</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Depending on your dealings with us, we may collect information including:
                </p>
                <div className="bg-surface-container-low p-space-md rounded-lg">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-space-md gap-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    {INFO_WE_COLLECT.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We will only collect information that is reasonably necessary for the purpose for
                  which it is required.
                </p>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-3">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">03</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Why Do We Collect and Use Your Personal Information?</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We may process your personal information in order to:
                </p>
                <div className="bg-surface-container-low p-space-md rounded-lg">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-space-md gap-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    {WHY_WE_USE.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-4">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">04</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Our Lawful Bases for Processing</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Depending on why we process your information, we may rely upon one or more lawful
                  bases under UK data protection law. These include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  {LAWFUL_BASES.map((basis) => (
                    <div key={basis.title} className="bg-surface-container-low p-space-md rounded-lg space-y-1">
                      <p className="font-headline-sm text-headline-sm text-on-surface text-base">{basis.title}</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{basis.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-5">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">05</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Vehicle Finance and Finset Limited</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  East Midland Cars Limited is an Introducer Appointed Representative of Finset
                  Limited. If you tell us that you are interested in obtaining vehicle finance, we may
                  collect the information necessary to introduce you to Finset Limited. Where you
                  agree to proceed, relevant information may be passed to Finset Limited so that
                  Finset can deal with your finance enquiry or application.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Finset Limited acts as a <strong className="text-on-surface">credit broker, not a
                  lender</strong>. Finset Limited works with a specific panel of finance providers.
                  Once your information has been provided to Finset Limited, Finset may process and
                  share your information with members of its lender panel, credit reference agencies,
                  fraud-prevention agencies and other relevant organisations in accordance with Finset
                  Limited&rsquo;s own Privacy Policy.
                </p>
                <div className="p-space-md rounded-lg bg-surface-container-high/60 space-y-2">
                  <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md uppercase">
                    <span className="material-symbols-outlined text-secondary text-[18px]">info</span>
                    Important
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    East Midland Cars Limited does not determine which lender accepts your application
                    and does not make credit or lending decisions. Before proceeding with a finance
                    application, you should read Finset Limited&rsquo;s Privacy Policy to understand
                    how Finset will process and share your information.
                  </p>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-6">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">06</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Credit Searches</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  East Midland Cars Limited does not independently conduct lender creditworthiness
                  assessments or make lending decisions. Where you proceed with a finance enquiry or
                  application through Finset Limited, Finset and/or its finance partners may carry out
                  identity, eligibility, affordability, fraud-prevention and creditworthiness checks.
                  These may include soft and/or hard searches of your credit file. Finset Limited will
                  provide further information about the searches that apply to your finance
                  application.
                </p>
                <div className="bg-surface-container-high/40 p-space-md rounded-lg flex items-start gap-space-sm text-on-surface">
                  <span className="material-symbols-outlined text-error text-[24px] shrink-0 mt-0.5">warning</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    A hard credit search may leave a record on your credit file that can be seen by
                    other lenders.
                  </p>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-7">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">07</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Who May We Share Your Information With?</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Where necessary and lawful, East Midland Cars Limited may share relevant personal
                  information with organisations including:
                </p>
                <div className="bg-surface-container-low p-space-md rounded-lg">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-space-md gap-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    {SHARE_WITH.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We will <strong className="text-on-surface">not sell</strong> your personal
                  information. Where information is transferred to Finset Limited following a finance
                  introduction, Finset&rsquo;s subsequent processing and sharing of that information is
                  governed by Finset Limited&rsquo;s own Privacy Policy.
                </p>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-8">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">08</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Special Category and Sensitive Information</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We do not routinely require special category personal information. However, you may
                  sometimes voluntarily provide information relating to matters such as a disability,
                  health condition or vulnerability where it is relevant to the support you require.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Where such information is provided, we will only process it where we have an
                  appropriate lawful basis and condition under applicable data protection law. We will
                  only use this information for appropriate purposes, such as providing reasonable
                  support or adapting how we communicate with you.
                </p>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-9">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">09</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">How Long Do We Keep Your Information?</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We will only retain personal information for as long as reasonably necessary for the
                  purpose for which it was collected and to meet our legal, regulatory, accounting,
                  taxation, contractual and legitimate business obligations. Different types of
                  information may therefore be retained for different periods.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Where records form part of accounting or taxation records, they may need to be
                  retained for the applicable statutory period. Where information relates to a
                  complaint, dispute, vehicle sale, finance introduction or other transaction, we may
                  retain relevant records where reasonably necessary to establish, exercise or defend
                  legal claims or comply with regulatory requirements.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Once information is no longer required, it will be securely deleted, destroyed or
                  anonymised where appropriate.
                </p>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-10">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">10</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">How We Protect Your Information</h2>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-lg flex gap-space-md">
                  <span className="material-symbols-outlined text-secondary text-[24px] shrink-0">enhanced_encryption</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    East Midland Cars Limited takes reasonable organisational and technical measures to
                    protect personal information against unauthorised access, alteration, disclosure,
                    loss or destruction. Access to personal information is limited to people and
                    service providers who require access for legitimate business purposes. Where we
                    use third-party service providers, we take reasonable steps to ensure appropriate
                    data-protection arrangements are in place.
                  </p>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-11">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">11</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Your Data Protection Rights</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Depending on the circumstances, UK data protection law gives you rights including:
                </p>
                <div className="space-y-space-sm">
                  {YOUR_RIGHTS.map((right) => (
                    <div key={right.title} className="flex gap-space-sm items-start">
                      <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">check_circle</span>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        <strong className="text-on-surface">{right.title}:</strong> {right.body}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Some rights are subject to legal exemptions and will not apply in every situation.
                </p>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-12">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">12</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Exercising Your Rights</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  If you wish to exercise any of your data protection rights or have questions
                  regarding your personal information, please contact:
                </p>
                <div className="bg-surface-container-low p-space-md rounded-lg space-y-space-sm">
                  <p className="font-body-sm text-body-sm text-on-surface">
                    <strong className="font-semibold">East Midland Cars Limited</strong>
                    <br />
                    Unit 38 Oswin Road
                    <br />
                    Leicester, LE3 1HR
                  </p>
                  <div className="pt-space-xs border-t border-outline-variant flex flex-wrap items-center gap-space-lg font-body-sm text-body-sm text-on-surface">
                    <a
                      className="flex items-center gap-1.5 text-secondary font-semibold hover:underline"
                      href="mailto:emccars@outlook.com"
                    >
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                      emccars@outlook.com
                    </a>
                    <a
                      className="flex items-center gap-1.5 text-secondary font-semibold hover:underline"
                      href="tel:07538000250"
                    >
                      <span className="material-symbols-outlined text-[18px]">call</span>
                      07538 000250
                    </a>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We may need to verify your identity before responding to a request.
                </p>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-13">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">13</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Marketing</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Where permitted by law, we may contact you about relevant products, vehicles or
                  services. Where consent is required, we will only send marketing communications
                  after obtaining your consent.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  You can ask us to stop sending direct marketing communications at any time by
                  contacting us or using any unsubscribe facility provided in the communication.
                  Withdrawing from marketing will not prevent us from contacting you where necessary
                  regarding an existing transaction, vehicle purchase, complaint, legal obligation or
                  other service you have requested.
                </p>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-14">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">14</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Cookies and Website Information</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our website may use cookies and similar technologies to operate correctly, remember
                  preferences, understand website usage and improve our services. Where legally
                  required, non-essential cookies will not be placed without your consent.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Further information about the cookies used by our website should be provided in our
                  Cookie Policy and cookie consent controls.
                </p>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-15">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">15</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Complaints About Your Personal Information</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  If you have a concern about how East Midland Cars Limited has processed your
                  personal information, please contact us first so that we have an opportunity to
                  investigate your concern.
                </p>
                <div className="bg-primary-container text-inverse-on-surface p-space-lg rounded-xl space-y-space-sm">
                  <div className="flex items-center gap-2 text-secondary-container">
                    <span className="material-symbols-outlined text-[24px]">account_balance</span>
                    <p className="font-headline-sm text-headline-sm text-on-primary uppercase">Information Commissioner&rsquo;s Office (ICO)</p>
                  </div>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                    You also have the right to complain to the Information Commissioner&rsquo;s Office
                    (ICO), the UK&rsquo;s data protection regulator.
                  </p>
                  <div className="bg-inverse-surface p-space-md rounded-lg flex flex-wrap items-center gap-space-lg font-body-sm text-body-sm text-inverse-on-surface">
                    <span className="flex items-center gap-1 text-secondary-container">
                      <span className="material-symbols-outlined text-[16px]">call</span>
                      0303 123 1113
                    </span>
                    <a
                      className="flex items-center gap-1 text-on-primary underline hover:text-secondary-fixed transition-colors"
                      href="https://ico.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ico.org.uk
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-16">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">16</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Finset Limited</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Where you have been introduced to Finset Limited for vehicle finance, you should
                  also read{" "}
                  <a
                    className="text-secondary underline"
                    href="https://www.finset.co.uk/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Finset Limited&rsquo;s Privacy Policy
                  </a>
                  . Finset Limited is responsible for explaining how it processes your information
                  after receiving it, including information about finance applications, credit
                  reference agencies, fraud-prevention agencies and its lender panel.
                </p>
                <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-space-xl space-y-space-md">
                  <div className="flex items-start gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high text-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[24px]">account_balance</span>
                    </div>
                    <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      <p className="font-headline-sm text-headline-sm text-on-surface mb-1">Finset Limited</p>
                      <p>
                        64-66 Burgundy Court
                        <br />
                        Springfield Road
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
                      href="mailto:compliance@finset.co.uk"
                    >
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                      compliance@finset.co.uk
                    </a>
                    <a
                      className="flex items-center gap-1.5 text-secondary font-semibold hover:underline"
                      href="tel:01245967999"
                    >
                      <span className="material-symbols-outlined text-[18px]">call</span>
                      01245 967 999
                    </a>
                  </div>
                  <p className="font-legal-fineprint text-legal-fineprint text-on-surface-variant">
                    FCA FRN: 987805 | ICO Registration Number: ZA768727
                  </p>
                </div>
              </section>

              <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-md scroll-mt-28" id="section-17">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-secondary text-sm">17</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Changes to This Privacy Policy</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We will review this Privacy Policy periodically and update it where necessary to
                  reflect changes to our business practices, legal requirements or regulatory
                  obligations. The latest version will be published on our website.
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Last Updated: October 2026
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
