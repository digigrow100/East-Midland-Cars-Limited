import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/east-midland-cars-logo.webp";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-inverse-on-surface pt-space-2xl pb-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
        {/* Trust strip */}
        <div className="bg-inverse-surface rounded-xl p-space-lg mb-space-xl flex flex-wrap items-center justify-between gap-space-md">
          <div className="flex flex-wrap items-center gap-space-lg">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary-container text-[24px]">
                verified_user
              </span>
              <div>
                <p className="font-label-md text-label-md text-on-primary uppercase">
                  RAC &amp; AA Standard
                </p>
                <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim">
                  Approved Dealership Inspection
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary-container text-[24px]">
                lock
              </span>
              <div>
                <p className="font-label-md text-label-md text-on-primary uppercase">
                  SSL 256-Bit Encrypted
                </p>
                <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim">
                  Bank-Grade Data Security
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary-container text-[24px]">
                verified
              </span>
              <div>
                <p className="font-label-md text-label-md text-on-primary uppercase">
                  HPI Clear Verified
                </p>
                <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim">
                  Complete History &amp; Mileage Guaranteed
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-xs text-primary-fixed-dim font-legal-fineprint text-legal-fineprint">
            <span className="material-symbols-outlined text-[16px] text-secondary-container">
              account_balance
            </span>
            <span>FCA Authorised Representative</span>
          </div>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-2xl">
          <div className="space-y-space-sm">
            <div className="inline-flex items-center bg-surface-container-lowest rounded-lg px-3 py-2">
              <Image src={logo} alt="East Midland Cars Limited" className="h-9 w-auto" />
            </div>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim pt-space-xs">
              A prestigious quality used car dealership based in Leicester,
              delivering handpicked executive and performance motor vehicles
              across the Midlands and the UK.
            </p>
            <div className="pt-space-xs font-body-sm text-body-sm text-inverse-on-surface space-y-1">
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-secondary-container">
                  location_on
                </span>
                Unit 38 Oswin Road, Leicester, LE3 1HR
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-secondary-container">
                  call
                </span>
                0116 289 8888 / 07475 248063
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-secondary-container">
                  mail
                </span>
                sales@eastmidlandcars.co.uk
              </p>
            </div>
          </div>

          <div>
            <p className="font-headline-sm text-headline-sm text-on-primary mb-space-md uppercase font-semibold">
              Vehicle Showroom
            </p>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-primary-fixed-dim">
              <li>
                <a
                  className="hover:text-on-primary transition-colors"
                  href="https://www.autotrader.co.uk/dealers/leicestershire/leicester/east-midland-cars-limited-10034803"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Showroom Stocklist
                </a>
              </li>
              <li>
                <Link className="hover:text-on-primary transition-colors" href="/finance-calculator">
                  Finance
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-primary transition-colors" href="/warranty-rac">
                  Warranty &amp; RAC
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-headline-sm text-headline-sm text-on-primary mb-space-md uppercase font-semibold">
              Customer Services
            </p>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-primary-fixed-dim">
              <li>
                <Link className="hover:text-on-primary transition-colors" href="/finance-calculator">
                  PCP &amp; HP Finance
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-primary transition-colors" href="/warranty-rac">
                  Comprehensive RAC Warranties
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-primary transition-colors" href="/customer-reviews">
                  5-Star Verified Reviews
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-primary transition-colors" href="/contact-us-visit">
                  Contact Us / Visit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-headline-sm text-headline-sm text-on-primary mb-space-md uppercase font-semibold">
              Opening Hours
            </p>
            <div className="font-body-sm text-body-sm text-primary-fixed-dim space-y-2 mb-space-md">
              <div className="flex justify-between py-1 bg-surface-container-high/10 px-2 rounded">
                <span className="text-on-primary">Monday - Saturday:</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between py-1 bg-surface-container-high/10 px-2 rounded">
                <span className="text-on-primary">Sunday:</span>
                <span>10:00 - 17:00</span>
              </div>
              <div className="flex justify-between py-1 bg-surface-container-high/10 px-2 rounded">
                <span className="text-on-primary">Bank Holidays:</span>
                <span>By Appointment</span>
              </div>
            </div>
            <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim">
              Appointments outside normal showroom hours available on request.
            </p>
          </div>
        </div>

        {/* FCA regulatory declaration */}
        <div className="pt-space-lg bg-surface-container-high/5 rounded-xl p-space-lg space-y-space-sm">
          <p className="font-headline-sm text-headline-sm text-on-primary uppercase font-semibold">
            FCA Regulatory Declaration &amp; Legal Disclosure
          </p>
          <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim leading-relaxed">
            East Midland Cars Limited is a trading name of East Midland Cars Limited. Company
            Number 14262253. Registered address: Unit 38 Oswin Road, Leicester, LE3 1HR.
          </p>
          <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim leading-relaxed">
            East Midland Cars Limited is an Introducer Appointed Representative of Finset Limited.
            Finset Limited is authorised and regulated by the Financial Conduct Authority under
            reference No. 987805. They act as a credit broker, not a lender. Our FCA Reference
            Number is 1058774.
          </p>
          <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim leading-relaxed">
            For details on the services they provide, please see our{" "}
            <Link className="underline hover:text-on-primary transition-colors" href="/initial-disclosure-document">
              Initial Disclosure Document
            </Link>
            .
          </p>
          <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim leading-relaxed">
            Please note, as an Introducer Appointed Representative, we act as a broker, not a
            lender. We are only able to introduce you to Finset Limited; we are not able to
            discuss any finance application or acceptance in detail. For any questions, we
            recommend contacting Finset Limited directly.
          </p>
          <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim leading-relaxed font-semibold">
            Company Number: 14262253 | FCA FRN: 1058774 | Finset FRN: 987805 | ICO Number:
            ZC152902
          </p>
          <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim leading-relaxed">
            All finance is subject to status. Terms and conditions apply.
          </p>
          <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim leading-relaxed">
            East Midland Cars Limited or Finset Limited are not financial advisors and will not
            provide advice or a recommendation on finance products.
          </p>
          <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim leading-relaxed">
            Finset Limited works with a specific panel of lenders to try to obtain an approval.
            They are only able to offer finance products from lenders on their panel.
          </p>
          <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim leading-relaxed">
            We receive a commission for introducing customers to Finset Limited if they proceed
            with a finance acceptance. This commission is a fixed payment or fixed percentage of
            the amount financed but can vary by partner. This does not impact the rate provided.
            Full information will be provided before completing the finance agreement and further
            information can be requested at any time.
          </p>
          <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim leading-relaxed">
            East Midland Cars Limited or Finset Limited do not charge a fee for the services
            provided.
          </p>
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs font-legal-fineprint text-legal-fineprint text-inverse-on-surface">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">call</span>
              07538 000250
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">mail</span>
              emccars@outlook.com
            </span>
          </div>
          <div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-sm font-legal-fineprint text-legal-fineprint text-primary-fixed-dim">
            <div className="flex flex-wrap gap-space-md">
              <Link className="hover:text-on-primary transition-colors" href="/initial-disclosure-document">
                Initial Disclosure Document
              </Link>
              <a
                className="hover:text-on-primary transition-colors"
                href="https://www.finset.co.uk/complaints"
                target="_blank"
                rel="noopener noreferrer"
              >
                Complaints
              </a>
              <a
                className="hover:text-on-primary transition-colors"
                href="https://www.finset.co.uk/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Finset Privacy Policy
              </a>
              <a
                className="hover:text-on-primary transition-colors"
                href="https://www.finset.co.uk/commission-disclosure-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commission Disclosure
              </a>
              <a
                className="hover:text-on-primary transition-colors"
                href="https://register.fca.org.uk/s/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FCA Register
              </a>
              <a
                className="hover:text-on-primary transition-colors"
                href="https://www.financial-ombudsman.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Financial Ombudsman Service
              </a>
              <a
                className="hover:text-on-primary transition-colors"
                href="https://www.finset.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Finset Limited
              </a>
            </div>
            <p>© 2025 East Midland Cars Limited. All Rights Reserved. Leicester, LE3 1HR.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
