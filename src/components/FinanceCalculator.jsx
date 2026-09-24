"use client";

import { useMemo, useState } from "react";

const APR_RATE = 0.089; // 8.9% Representative APR
const TERMS = [24, 36, 48, 60];
const MILEAGES = [6000, 8000, 10000, 12000];

function gbp(amount) {
  return (
    "£" +
    amount.toLocaleString("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

/**
 * Ported faithfully from the source mockup's inline <script>: HP is a
 * standard amortising loan; PCP amortises (borrowed - GFV) over the term
 * and adds interest-only payments on the GFV balloon, with the GFV ratio
 * varying by term length and adjusted for anticipated annual mileage.
 */
function calculate({ mode, carPrice, depositAmount, termMonths, annualMileage }) {
  const netBorrowed = Math.max(0, carPrice - depositAmount);
  const monthlyRate = APR_RATE / 12;

  if (mode === "hp") {
    let monthlyPmt = 0;
    if (netBorrowed > 0) {
      monthlyPmt =
        (netBorrowed * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
    }
    const totalPayable = monthlyPmt * termMonths + depositAmount;
    return {
      netBorrowed,
      monthlyPmt,
      totalPayable,
      gfv: null,
    };
  }

  // PCP with GFV balloon
  let gfvRatio = 0.35;
  if (termMonths === 24) gfvRatio = 0.5;
  else if (termMonths === 36) gfvRatio = 0.42;
  else if (termMonths === 48) gfvRatio = 0.35;
  else if (termMonths === 60) gfvRatio = 0.28;

  if (annualMileage > 10000) gfvRatio -= 0.03;
  if (annualMileage < 8000) gfvRatio += 0.02;

  const gfv = Math.round(carPrice * gfvRatio);
  const principalDepreciation = netBorrowed - gfv;

  let monthlyPmt = 0;
  if (principalDepreciation > 0) {
    const depreciationPmt =
      (principalDepreciation * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -termMonths));
    const balloonInterest = gfv * monthlyRate;
    monthlyPmt = depreciationPmt + balloonInterest;
  } else {
    monthlyPmt = netBorrowed * monthlyRate;
  }
  monthlyPmt = Math.max(monthlyPmt, 20);

  const totalPayable = monthlyPmt * termMonths + depositAmount + gfv;

  return { netBorrowed, monthlyPmt, totalPayable, gfv };
}

export default function FinanceCalculator() {
  const [mode, setMode] = useState("pcp");
  const [carPrice, setCarPrice] = useState(13999);
  const [depositAmount, setDepositAmount] = useState(1500);
  const [termMonths, setTermMonths] = useState(48);
  const [annualMileage, setAnnualMileage] = useState(10000);

  const result = useMemo(
    () => calculate({ mode, carPrice, depositAmount, termMonths, annualMileage }),
    [mode, carPrice, depositAmount, termMonths, annualMileage]
  );

  function handlePriceInput(value) {
    let p = parseFloat(value);
    if (Number.isNaN(p)) p = 13999;
    if (p < 3000) p = 3000;
    if (p > 35000) p = 35000;
    setCarPrice(p);
  }

  function handleDepositInput(value) {
    let d = parseFloat(value);
    if (Number.isNaN(d)) d = 0;
    if (d < 0) d = 0;
    if (d > 10000) d = 10000;
    setDepositAmount(d);
  }

  function setDepositPct(pct) {
    let dep = Math.round(carPrice * pct);
    if (dep > 10000) dep = 10000;
    setDepositAmount(dep);
  }

  return (
    <div className="bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden">
      {/* Mode tabs */}
      <div className="grid grid-cols-2 bg-surface-container-low p-2 gap-2 text-center">
        <button
          type="button"
          onClick={() => setMode("pcp")}
          className={`py-3 px-4 rounded-xl font-label-lg text-label-lg transition-all flex items-center justify-center gap-space-xs ${
            mode === "pcp"
              ? "bg-secondary text-on-secondary shadow-sm"
              : "bg-surface-container text-on-surface-variant hover:text-on-surface"
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">directions_car</span>
          <span>Personal Contract Purchase (PCP)</span>
        </button>
        <button
          type="button"
          onClick={() => setMode("hp")}
          className={`py-3 px-4 rounded-xl font-label-lg text-label-lg transition-all flex items-center justify-center gap-space-xs ${
            mode === "hp"
              ? "bg-secondary text-on-secondary shadow-sm"
              : "bg-surface-container text-on-surface-variant hover:text-on-surface"
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">car_rental</span>
          <span>Hire Purchase (HP)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 p-space-lg lg:p-space-xl gap-space-xl">
        {/* Inputs */}
        <div className="lg:col-span-7 space-y-space-lg">
          {/* Price */}
          <div className="space-y-space-xs">
            <div className="flex justify-between items-baseline">
              <label className="font-label-md text-label-md uppercase text-on-surface-variant" htmlFor="priceInput">
                Vehicle Cash Price
              </label>
              <div className="flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-lg">
                <span className="font-headline-md text-headline-md text-on-surface font-bold">£</span>
                <input
                  id="priceInput"
                  type="number"
                  min={3000}
                  max={35000}
                  step={250}
                  value={carPrice}
                  onChange={(e) => handlePriceInput(e.target.value)}
                  className="w-28 bg-transparent text-right font-headline-md text-headline-md text-on-surface font-bold focus:outline-none"
                />
              </div>
            </div>
            <input
              type="range"
              min={3000}
              max={35000}
              step={250}
              value={carPrice}
              onChange={(e) => setCarPrice(parseFloat(e.target.value))}
              className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between font-label-sm text-label-sm text-outline">
              <span>£3,000</span>
              <span>Midlands Fleet Avg (£14k)</span>
              <span>£35,000</span>
            </div>
          </div>

          {/* Deposit */}
          <div className="space-y-space-xs">
            <div className="flex justify-between items-baseline">
              <div>
                <label className="font-label-md text-label-md uppercase text-on-surface-variant" htmlFor="depositInput">
                  Cash or Part-Exchange Deposit
                </label>
                <p className="font-legal-fineprint text-legal-fineprint text-outline">
                  £0 Deposit available on all stock
                </p>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-lg">
                <span className="font-headline-md text-headline-md text-on-surface font-bold">£</span>
                <input
                  id="depositInput"
                  type="number"
                  min={0}
                  max={10000}
                  step={100}
                  value={depositAmount}
                  onChange={(e) => handleDepositInput(e.target.value)}
                  className="w-24 bg-transparent text-right font-headline-md text-headline-md text-on-surface font-bold focus:outline-none"
                />
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={10000}
              step={100}
              value={depositAmount}
              onChange={(e) => setDepositAmount(parseFloat(e.target.value))}
              className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex items-center gap-space-xs pt-1">
              <span className="font-label-sm text-label-sm text-outline mr-2">Quick:</span>
              {[0, 0.1, 0.2, 0.3].map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => setDepositPct(pct)}
                  className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm"
                >
                  {pct === 0 ? "£0 (None)" : `${pct * 100}%`}
                </button>
              ))}
            </div>
          </div>

          {/* Term */}
          <div className="space-y-space-xs">
            <label className="font-label-md text-label-md uppercase text-on-surface-variant">
              Agreement Term Length
            </label>
            <div className="grid grid-cols-4 gap-space-xs">
              {TERMS.map((months) => (
                <button
                  key={months}
                  type="button"
                  onClick={() => setTermMonths(months)}
                  className={`py-2.5 px-3 rounded-lg font-label-md text-label-md transition-colors text-center ${
                    termMonths === months
                      ? "bg-secondary text-on-secondary shadow-sm"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {months} Mos
                </button>
              ))}
            </div>
          </div>

          {/* Mileage (PCP only) */}
          {mode === "pcp" && (
            <div className="space-y-space-xs">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md uppercase text-on-surface-variant">
                  Anticipated Annual Mileage
                </label>
                <span className="font-label-sm text-label-sm text-secondary bg-surface-container-high px-2 py-0.5 rounded">
                  {annualMileage.toLocaleString()} miles/yr
                </span>
              </div>
              <div className="grid grid-cols-4 gap-space-xs">
                {MILEAGES.map((miles) => (
                  <button
                    key={miles}
                    type="button"
                    onClick={() => setAnnualMileage(miles)}
                    className={`py-2 px-2 rounded-lg font-label-sm text-label-sm transition-colors text-center ${
                      annualMileage === miles
                        ? "bg-secondary text-on-secondary shadow-sm"
                        : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                    }`}
                  >
                    {miles.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[24px] text-secondary">security</span>
              <div>
                <p className="font-label-md text-label-md text-on-surface">
                  No Impact Soft Credit Eligibility Search
                </p>
                <p className="font-legal-fineprint text-legal-fineprint text-on-surface-variant">
                  Get lender approval rates without registering on credit agency records
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0">
              98% Match Rate
            </span>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-primary-container text-on-primary rounded-xl p-space-lg relative overflow-hidden shadow-lg">
          <div className="space-y-space-md relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                  {mode === "pcp" ? "Personal Contract Purchase" : "Hire Purchase"}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-primary">
                  Estimated Monthly Outlay
                </h3>
              </div>
              <div className="px-2.5 py-1 rounded bg-secondary-container/20 text-secondary-fixed font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">lock</span> Fixed Rate
              </div>
            </div>

            <div className="py-space-xs">
              <div className="flex items-baseline gap-1">
                <span className="font-display-hero text-display-hero text-on-primary font-bold">
                  £{result.monthlyPmt.toFixed(2)}
                </span>
                <span className="font-body-md text-body-md text-primary-fixed-dim">/ month</span>
              </div>
              <p className="font-legal-fineprint text-legal-fineprint text-primary-fixed-dim">
                Calculated based on {termMonths} monthly instalments
              </p>
            </div>

            <div className="space-y-2 pt-space-xs text-body-sm font-body-sm">
              <div className="flex justify-between py-1.5 bg-inverse-surface/60 px-3 rounded">
                <span className="text-primary-fixed-dim">Representative APR</span>
                <span className="text-on-primary font-bold">8.9% APR</span>
              </div>
              <div className="flex justify-between py-1.5 bg-inverse-surface/60 px-3 rounded">
                <span className="text-primary-fixed-dim">Fixed Annual Interest</span>
                <span className="text-on-primary">4.65%</span>
              </div>
              <div className="flex justify-between py-1.5 bg-inverse-surface/60 px-3 rounded">
                <span className="text-primary-fixed-dim">Net Total Borrowed</span>
                <span className="text-on-primary">{gbp(result.netBorrowed)}</span>
              </div>
              {mode === "pcp" && (
                <div className="flex justify-between py-1.5 bg-inverse-surface/60 px-3 rounded">
                  <span className="text-primary-fixed-dim">Optional Final Payment (GFV)</span>
                  <span className="text-secondary-fixed font-semibold">{gbp(result.gfv)}</span>
                </div>
              )}
              <div className="flex justify-between py-1.5 bg-inverse-surface/60 px-3 rounded">
                <span className="text-primary-fixed-dim">Total Amount Payable</span>
                <span className="text-on-primary font-bold">{gbp(result.totalPayable)}</span>
              </div>
            </div>
          </div>

          <div className="pt-space-lg space-y-space-xs relative z-10">
            <a
              href="tel:01162898888"
              className="w-full py-3.5 px-4 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all text-center flex items-center justify-center gap-space-xs shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Apply For Pre-Approval (Soft Search)</span>
            </a>
            <a
              href="tel:01162898888"
              className="w-full py-3 px-4 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-surface-container-high/20 transition-all text-center flex items-center justify-center gap-space-xs"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span>Speak to a Leicester Finance Specialist</span>
            </a>
            <p className="font-legal-fineprint text-legal-fineprint text-center text-primary-fixed-dim pt-1">
              Authorised &amp; Regulated by Financial Conduct Authority (FCA). Credit subject to status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
