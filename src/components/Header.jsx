"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida/AEtjO1X5NRTkbtrcHJBFGfU18aS03L1zZvzszyYp2mKDSbpm1YDiA8qF_b_vUhyykvsKVJY-3aN8V4C-ippbRfDn2Qc7Y5129cxFY0wuvFDUTKKF72VPf1ysKL1ylngk-ylOQ3-lwTFNbvMDiYf7kqEFAuFTeG_Jpo36OONw3FIO8GCPVShsB-ccG3wB-JXQhPk_QdjCZWGPnsFehtk1PDxVVGys68YW0ELDENKpxR-y-Egz";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/showroom-stocklist", label: "Showroom / Stocklist" },
  { href: "/finance-calculator", label: "Finance & Calculator" },
  { href: "/sell-your-car", label: "Sell Your Car" },
  { href: "/request-a-car", label: "Request a Car" },
  { href: "/warranty-rac", label: "Warranty & RAC" },
  { href: "/customer-reviews", label: "Customer Reviews" },
  { href: "/contact-us-visit", label: "Contact Us / Visit" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top slim utility bar */}
      <div className="bg-primary-container text-on-primary">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop h-10 flex items-center justify-between font-body-sm text-body-sm">
          <div className="flex items-center gap-space-md overflow-x-auto py-1">
            <a
              className="flex items-center gap-space-xs text-inverse-on-surface hover:text-secondary-fixed transition-colors whitespace-nowrap"
              href="https://maps.google.com/?q=Unit+38+Oswin+Road+Leicester+LE3+1HR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>Unit 38 Oswin Road, Leicester, LE3 1HR</span>
            </a>
            <span className="hidden xl:inline text-outline">|</span>
            <a
              className="hidden md:flex items-center gap-space-xs text-inverse-on-surface hover:text-secondary-fixed transition-colors whitespace-nowrap"
              href="tel:01162898888"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>0116 289 8888 / 07475 248063</span>
            </a>
            <span className="hidden xl:inline text-outline">|</span>
            <a
              className="hidden lg:flex items-center gap-space-xs text-inverse-on-surface hover:text-secondary-fixed transition-colors whitespace-nowrap"
              href="mailto:sales@eastmidlandcars.co.uk"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>sales@eastmidlandcars.co.uk</span>
            </a>
          </div>
          <div className="flex items-center gap-space-md whitespace-nowrap font-label-sm text-label-sm text-inverse-on-surface">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">
                schedule
              </span>
              <span>Mon-Sat 09:00-18:00 | Sun 10:00-17:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <Link href="/" className="flex items-center gap-space-sm">
            <Image
              src={LOGO_SRC}
              alt="East Midland Cars Limited Logo"
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
            <span className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-tight font-bold hidden sm:inline">
              East Midland Cars
            </span>
          </Link>
        </div>

        <nav className="hidden xl:flex items-center gap-space-xs p-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "px-3 py-2 transition-colors bg-surface-container-high text-on-surface font-semibold rounded-lg font-label-md text-label-md"
                    : "px-3 py-2 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm">
          <Link
            href="/showroom-stocklist"
            className="hidden md:inline-flex items-center px-4 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container hover:text-on-secondary transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
          >
            Browse 45+ Cars
          </Link>
          <Link
            href="/finance-calculator"
            className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-inverse-surface hover:text-inverse-on-surface transition-all"
          >
            Get Finance Approved
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 ml-1">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>

          {/* Mobile hamburger toggle: the source mockups hide the nav below
              xl with no mobile menu at all. This adds a working toggle so
              every nav link and CTA stays reachable on small screens. */}
          <button
            type="button"
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container-high text-on-surface"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined text-[24px]">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile slide-down nav panel */}
      {menuOpen && (
        <div
          id="mobile-nav-panel"
          className="xl:hidden bg-surface-container-lowest border-t border-outline-variant shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <nav className="flex flex-col p-space-md gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "px-3 py-3 rounded-lg bg-surface-container-high text-on-surface font-semibold font-label-md text-label-md min-h-[44px] flex items-center"
                      : "px-3 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container min-h-[44px] flex items-center"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-space-md pt-0 flex flex-col gap-space-sm">
            <Link
              href="/showroom-stocklist"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md min-h-[44px]"
            >
              Browse 45+ Cars
            </Link>
            <Link
              href="/finance-calculator"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md min-h-[44px]"
            >
              Get Finance Approved
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
