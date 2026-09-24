"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/assets/images/east-midland-cars-logo.webp";

const AUTOTRADER_URL =
  "https://www.autotrader.co.uk/dealers/leicestershire/leicester/east-midland-cars-limited-10034803";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: AUTOTRADER_URL, label: "Stocklist", external: true },
  { href: "/finance-calculator", label: "Finance" },
  { href: "/warranty-rac", label: "Warranty & RAC" },
  { href: "/customer-reviews", label: "Customer Reviews" },
  { href: "/contact-us-visit", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Main bar */}
      <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <Link href="/" className="flex items-center gap-space-sm">
            <Image
              src={logo}
              alt="East Midland Cars Limited"
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>

        <nav className="hidden xl:flex items-center gap-space-xs p-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="px-3 py-2 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "px-3 py-2 transition-colors bg-surface-container-high text-on-surface font-semibold rounded-lg font-label-md text-label-md whitespace-nowrap"
                    : "px-3 py-2 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm">
          <a
            href={AUTOTRADER_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hidden md:inline-flex items-center px-4 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container hover:text-on-secondary transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
          >
            Browse 45+ Cars
          </a>
          <Link
            href="/finance-calculator"
            className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-inverse-surface hover:text-inverse-on-surface transition-all"
          >
            Get Finance Approved
          </Link>

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
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container min-h-[44px] flex items-center whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "px-3 py-3 rounded-lg bg-surface-container-high text-on-surface font-semibold font-label-md text-label-md min-h-[44px] flex items-center whitespace-nowrap"
                      : "px-3 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container min-h-[44px] flex items-center whitespace-nowrap"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-space-md pt-0 flex flex-col gap-space-sm">
            <a
              href={AUTOTRADER_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md min-h-[44px]"
            >
              Browse 45+ Cars
            </a>
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
