/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from "react";
import { SERVICES } from "../data";
import { LayoutGrid, Compass, Wrench, Lightbulb, ClipboardCheck, ArrowRight, CheckCircle, Home } from "lucide-react";

export default function ServicesGrid() {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  // Helper to render matching icon dynamically
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "LayoutGrid":
        return <LayoutGrid className={className} />;
      case "Compass":
        return <Compass className={className} />;
      case "Wrench":
        return <Wrench className={className} />;
      case "Lightbulb":
        return <Lightbulb className={className} />;
      case "ClipboardCheck":
        return <ClipboardCheck className={className} />;
      case "Home":
        return <Home className={className} />;
      default:
        return <LayoutGrid className={className} />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Top Section */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="font-mono text-xs uppercase tracking-widest text-brand-gold-600 font-bold block">
          Comprehensive General Fitout Scope
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-charcoal-800 leading-none uppercase">
          Our Architectural Services
        </h2>
        <p className="font-sans text-sm sm:text-base text-brand-sand-600 leading-relaxed">
          From custom-built spatial joinery and integrated European kitchens to specialized marble laying and wet-zone sealing, we handle your dream villa makeover from A to Z.
        </p>
      </div>

      {/* Grid selector / details split screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left card-button navigation stack */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-3">
          {SERVICES.map((service) => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                type="button"
                className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer flex gap-4 ${
                  isActive
                    ? "bg-brand-charcoal-800 text-white border-brand-charcoal-900 shadow-lg ring-1 ring-brand-gold-500/10"
                    : "bg-white text-brand-charcoal-800 border-brand-sand-200 hover:border-brand-sand-300"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? "bg-brand-gold-500 text-white" : "bg-brand-sand-100 text-brand-gold-600"
                  }`}
                >
                  {renderIcon(service.icon, "w-6 h-6")}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg mb-1 leading-snug">
                    {service.title}
                  </h3>
                  <p className={`text-xs leading-normal line-clamp-2 ${isActive ? "text-brand-sand-200" : "text-brand-sand-600"}`}>
                    {service.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Details Highlight Box - Architectural & clean, no transparent glow balls */}
        <div className="lg:col-span-12 xl:col-span-7 bg-brand-sand-100/30 rounded-2xl p-6 sm:p-8 lg:p-10 border border-brand-sand-300/40 relative overflow-hidden flex flex-col justify-between min-h-[440px]">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-charcoal-800 text-brand-gold-300 rounded-lg flex items-center justify-center">
                {renderIcon(activeService.icon, "w-5 h-5")}
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gold-600 font-bold">
                Detailed Scope of Work
              </span>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-2xl font-extrabold text-brand-charcoal-800 leading-tight">
                {activeService.title}
              </h4>
              <p className="font-sans text-sm sm:text-base text-brand-charcoal-800/85 leading-relaxed">
                {activeService.description}
              </p>
            </div>

            {/* Technical benefits list */}
            <div className="space-y-3 pt-6 border-t border-brand-sand-300">
              <h5 className="font-display font-bold text-xs uppercase tracking-widest text-brand-charcoal-800 mb-4 block">
                Technical standards and milestones:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeService.detailedBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-gold-500 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-brand-sand-600 leading-normal font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-8 mt-8 border-t border-brand-sand-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-brand-sand-500 italic block text-center sm:text-left">
              *All projects delivered under certified engineer oversight with legal structural liability coverage.
            </span>
            <a
              href="#quote-consultation"
              className="inline-flex items-center gap-2 text-xs font-bold font-display uppercase tracking-wider text-brand-charcoal-800 hover:text-brand-gold-600 transition-colors group cursor-pointer"
            >
              Consult On This Service
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
