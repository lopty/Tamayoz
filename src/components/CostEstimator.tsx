/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { BATHROOM_STYLES, FITTINGS_OPTIONS } from "../data";
import { Ruler, ShieldCheck, ArrowRight, Compass } from "lucide-react";

interface CostEstimatorProps {
  onSelectEstimate: (styleId: string, size: number, fittingsId: string, cost: number) => void;
}

export default function CostEstimator({ onSelectEstimate }: CostEstimatorProps) {
  const [size, setSize] = useState(150); // standard general room size 150 sq.ft
  const [selectedStyleId, setSelectedStyleId] = useState("living-kitchen");
  const [selectedFittingsId, setSelectedFittingsId] = useState("standard");

  const selectedStyle = useMemo(() => {
    return BATHROOM_STYLES.find((s) => s.id === selectedStyleId) || BATHROOM_STYLES[0];
  }, [selectedStyleId]);

  const selectedFittings = useMemo(() => {
    return FITTINGS_OPTIONS.find((f) => f.id === selectedFittingsId) || FITTINGS_OPTIONS[0];
  }, [selectedFittingsId]);

  // Size category description mapping adjusted for general rooms, kitchens, and apartments
  const sizeCategory = useMemo(() => {
    if (size <= 80) return { label: "Luxury Bathroom or En-Suite", desc: "Spa sanctuary or kitchen pantry" };
    if (size <= 180) return { label: "Gourmet Kitchen or Master Bedroom", desc: "Premium custom joinery fitout" };
    if (size <= 300) return { label: "Executive Living Hall & Salon", desc: "Full marble flooring and custom timber panelling" };
    return { label: "Entire Townhouse or Apartment Suite", desc: "Multi-room custom luxury turn-key fitout" };
  }, [size]);

  // Pricing math:
  // pricing = (BasePrice + (size * style.pricePerSqFt)) * fittings.multiplier
  const finalEstimate = useMemo(() => {
    const rawVal = (selectedStyle.basePrice + (size - 100) * selectedStyle.pricePerSqFt) * selectedFittings.multiplier;
    // Starting turnkey offers
    return Math.max(15000, Math.round(rawVal / 100) * 100);
  }, [selectedStyle, size, selectedFittings]);

  const handleApplyEstimate = () => {
    onSelectEstimate(selectedStyleId, size, selectedFittingsId, finalEstimate);
    // Smooth scroll to contact form
    const contactSection = document.getElementById("quote-consultation");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-brand-sand-200/40">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-sand-200 pb-6 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-brand-gold-600 font-bold block mb-1">
            Dynamic Quotation
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-charcoal-800 tracking-tight uppercase">
            Estimate Your Dream Renovation
          </h3>
        </div>
        <div className="bg-brand-sand-100/50 py-1.5 px-3 rounded-lg border border-brand-sand-300/40 flex items-center gap-2 self-start md:self-auto">
          <Compass className="w-4 h-4 text-brand-gold-600" />
          <span className="font-mono text-[10px] text-brand-charcoal-800 font-bold uppercase tracking-wider">
            Realtime Dubai Cost Matrix
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Sliders and Configurations */}
        <div className="lg:col-span-7 space-y-8">
          {/* STEP 1: Dimensions */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="font-display font-semibold text-brand-charcoal-800 text-base sm:text-lg flex items-center gap-2">
                <Ruler className="w-5 h-5 text-brand-gold-500" />
                1. Project Floor Area:{" "}
                <span className="text-brand-gold-600 font-mono font-bold text-xl">{size}</span>{" "}
                <span className="text-brand-sand-500 text-sm font-normal">Sq Ft</span>
              </label>
              <div className="text-right">
                <span className="text-[10px] font-mono font-bold bg-brand-sand-200 text-brand-charcoal-800 px-2 py-0.5 rounded uppercase tracking-wider">
                  {sizeCategory.label}
                </span>
              </div>
            </div>

            <input
              type="range"
              min="40"
              max="600"
              step="10"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full h-2 bg-brand-sand-250 rounded-lg appearance-none cursor-pointer accent-brand-gold-500 focus:outline-none"
            />
            <div className="flex justify-between text-xs text-brand-sand-500 font-mono font-medium leading-none">
              <span>40 Sq Ft (Cozy room)</span>
              <span>300 Sq Ft (Spacious hall)</span>
              <span>600 Sq Ft (Entire Penthouse section)</span>
            </div>
            <p className="text-xs text-brand-sand-600 italic mt-1.5">
              💡 {sizeCategory.desc}. Realized turnkey with bespoke materials and complete site-engineer monitoring on site.
            </p>
          </div>

          {/* STEP 2: Finishing Packages */}
          <div className="space-y-4 pt-4 border-t border-brand-sand-200/50">
            <label className="font-display font-semibold text-brand-charcoal-800 text-base sm:text-lg block">
              2. Transformation Finishing Packages:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {BATHROOM_STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyleId(style.id)}
                  type="button"
                  className={`text-left p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    selectedStyleId === style.id
                      ? "border-brand-gold-500 bg-brand-sand-100/30 ring-1 ring-brand-gold-300/10"
                      : "border-brand-sand-200 hover:border-brand-sand-300 bg-white"
                  }`}
                >
                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider opacity-85 block mb-1 text-brand-sand-600">
                      {style.id === "living-kitchen" ? "Targeted Area" : style.id === "full-apartment" ? "High demand" : "Exclusive Signature"}
                    </span>
                    <h4 className="font-display font-bold text-brand-charcoal-800 text-sm mb-2 leading-snug">
                      {style.name}
                    </h4>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-brand-gold-600 font-bold block leading-tight">
                      Min @ {style.basePrice.toLocaleString()} AED
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-brand-sand-50 p-4 rounded-xl border border-brand-sand-200">
              <h5 className="font-display font-bold text-xs uppercase tracking-wider text-brand-charcoal-800 mb-2">
                Included with {selectedStyle.name}:
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {selectedStyle.features.map((feature, idx) => (
                  <li key={idx} className="font-sans text-xs text-brand-sand-600 flex items-center gap-1.5">
                    <span className="w-1 h-1 shrink-0 rounded-full bg-brand-gold-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* STEP 3: Accent Textures & Materials */}
          <div className="space-y-4 pt-4 border-t border-brand-sand-200/50">
            <label className="font-display font-semibold text-brand-charcoal-800 text-base sm:text-lg block">
              3. Hard Accent Textures & Fixtures Spec:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {FITTINGS_OPTIONS.map((fittings) => (
                <button
                  key={fittings.id}
                  onClick={() => setSelectedFittingsId(fittings.id)}
                  type="button"
                  className={`text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                    selectedFittingsId === fittings.id
                      ? "border-brand-gold-500 bg-brand-sand-100/30"
                      : "border-brand-sand-200 hover:border-brand-sand-300"
                  }`}
                >
                  <h4 className="font-display font-bold text-brand-charcoal-800 text-xs sm:text-sm">
                    {fittings.name}
                  </h4>
                  <p className="text-[11px] text-brand-sand-500 leading-tight mt-1">
                    {fittings.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time calculated quote block - Ultra clean Emaar format */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-brand-charcoal-800 text-white rounded-xl p-6 sm:p-8 flex-1 flex flex-col justify-between border border-brand-charcoal-900 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[9px] font-mono tracking-[0.2em] font-bold text-brand-gold-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md uppercase inline-block mb-6">
                Project Cost Summary
              </span>

              <div className="space-y-1 mb-8">
                <span className="font-sans text-xs text-brand-sand-300 font-medium block uppercase tracking-wider">
                  Turnkey Refinement Cost
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
                    {finalEstimate.toLocaleString()}
                  </span>
                  <span className="font-display text-lg font-bold text-brand-gold-300 font-medium">AED</span>
                </div>
                <span className="text-[11px] text-brand-sand-400 block pt-1.5 border-t border-white/10 leading-normal">
                  *All-Inclusive Fitout: architect drawings, Municipal approvals coordination, luxury materials selection, direct master-mason work, and final industrial cleanup.
                </span>
              </div>

              {/* Estimate Details Breakdown */}
              <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                <div className="flex justify-between text-xs">
                  <span className="text-brand-sand-300">Layout Floor Size</span>
                  <span className="font-mono text-white font-medium">{size} Sq Ft</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-brand-sand-300">Package Chosen</span>
                  <span className="font-sans text-white font-medium">{selectedStyle.name}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-brand-sand-300">Fixtures Accent Spec</span>
                  <span className="font-sans text-white font-medium">{selectedFittings.name}</span>
                </div>
                <div className="flex justify-between text-xs pt-2 border-t border-white/10">
                  <span className="text-brand-sand-300">VAT Status (5% inclusive)</span>
                  <span className="font-mono text-brand-gold-300 font-semibold uppercase">Fully Included</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <button
                type="button"
                onClick={handleApplyEstimate}
                className="w-full bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-charcoal-900 font-display font-bold uppercase tracking-wider text-xs transition-all py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg cursor-pointer"
              >
                Apply Estimations to Consultation
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold-400 shrink-0" />
                <span className="text-[10px] text-brand-sand-300 font-medium">
                  Guaranteed zero hidden charges and absolute transparent billing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
