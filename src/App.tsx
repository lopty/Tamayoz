/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import ServicesGrid from "./components/ServicesGrid";
import PreviousWorks from "./components/PreviousWorks";
import CostEstimator from "./components/CostEstimator";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { VALUE_PROPS } from "./data";
import { Award, Users, Clock, BadgePercent, ShieldCheck } from "lucide-react";

export default function App() {
  // Shared state connecting CostEstimator with ContactForm
  const [stylePreset, setStylePreset] = useState<string | null>(null);
  const [sizeSqFt, setSizeSqFt] = useState<number | null>(null);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const handleEstimateSelect = (styleId: string, size: number, fittingsId: string, cost: number) => {
    setStylePreset(styleId);
    setSizeSqFt(size);
    setEstimatedCost(cost);
  };

  const renderValueIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Award":
        return <Award className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Clock":
        return <Clock className={className} />;
      case "BadgePercent":
        return <BadgePercent className={className} />;
      default:
        return <Award className={className} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-sand-50 selection:bg-brand-gold-300 selection:text-brand-charcoal-900 scroll-smooth antialiasing">
      {/* 1. FLOATING NAVIGATION BAR */}
      <Header />

      <main className="flex-1">
        {/* 2. HERO HEADER ROW */}
        <Hero />

        {/* 3. BEFORE & AFTER TRANSFORMATIONS SHOWCASE */}
        <section id="before-after" className="py-20 sm:py-24 bg-white border-y border-brand-sand-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text context left */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-gold-600 font-bold block">
                  Interactive Showcase
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-charcoal-800 leading-none uppercase">
                  Before & After Renovation
                </h2>
                <p className="font-sans text-sm sm:text-base text-brand-sand-600 leading-relaxed">
                  Select a room tab and slide the divider to compare authentic original properties side-by-side with our completed high-end executive spec.
                </p>

                {/* Staged indicators */}
                <div className="space-y-4 pt-4 border-t border-brand-sand-200">
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded px-2 bg-brand-charcoal-800/5 text-brand-charcoal-800 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      A
                    </div>
                    <div>
                      <strong className="text-sm font-bold text-brand-charcoal-800 block uppercase tracking-wide">
                        Original Layout Limit
                      </strong>
                      <span className="text-xs text-brand-sand-600 font-medium">
                        Worn materials, dated generic carpentry, and mismatched plumbing schemes.
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded px-2 bg-brand-gold-500/10 text-brand-gold-700 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      B
                    </div>
                    <div>
                      <strong className="text-sm font-bold text-brand-charcoal-800 block uppercase tracking-wide">
                        KOF Executive Standard
                      </strong>
                      <span className="text-xs text-brand-sand-600 font-medium">
                        Sleek handle-less wood joinery, seamless stone and travertine cladding, custom linear details, and ambient lighting layouts.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="#estimator"
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-display uppercase tracking-wider text-brand-charcoal-800 hover:text-brand-gold-600 transition-colors"
                  >
                    Estimate remodeling costs now →
                  </a>
                </div>
              </div>

              {/* Interactive Draggable slider right */}
              <div className="lg:col-span-7 flex justify-center w-full">
                <BeforeAfterSlider />
              </div>

            </div>
          </div>
        </section>

        {/* 4. SERVICES DETAIL */}
        <section id="services" className="py-20 sm:py-24 bg-brand-sand-100/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesGrid />
          </div>
        </section>

        {/* 5. PREVIOUS WORKS GALLERY */}
        <section id="previous-works" className="py-20 sm:py-24 bg-white border-y border-brand-sand-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gold-600 font-bold block">
                Real Project Documentation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-charcoal-800 leading-none uppercase">
                Previous Works
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-sand-600 leading-relaxed">
                Straight from our own projects — completed finishes and our engineers on active sites across Dubai.
              </p>
            </div>
            <PreviousWorks />
          </div>
        </section>

        {/* 6. WHY KOF CORE STRENGTHS */}
        <section id="why-tabeer" className="py-20 sm:py-24 bg-brand-charcoal-800 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gold-400 font-bold block">
                Dubai Premium Benchmarks
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-none uppercase">
                Why Property Owners Choose KOF
              </h2>
              <p className="font-sans text-xs sm:text-sm text-brand-sand-300">
                We bridge high-end architectural aesthetics with certified structural execution. No guesswork, no subcontracting.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {VALUE_PROPS.map((prop, idx) => (
                <div
                  key={idx}
                  className="bg-brand-charcoal-900/60 rounded-xl p-6 border border-brand-sand-300/10 space-y-4 hover:border-brand-gold-500/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-gold-500/10 text-brand-gold-400 flex items-center justify-center shrink-0 border border-brand-gold-500/20">
                      {renderValueIcon(prop.icon, "w-6 h-6")}
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {prop.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-brand-sand-300 leading-relaxed font-light">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick action bar */}
            <div className="bg-brand-charcoal-900 border border-brand-sand-400/10 rounded-xl p-5 sm:p-6 mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-gold-400 shrink-0" />
                <span className="font-sans text-xs sm:text-sm text-brand-sand-100 font-medium">
                  We carry fully certified professional liability insurance for all residential remodeling works in Dubai.
                </span>
              </div>
              <a
                href="tel:0561014935"
                className="bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-charcoal-950 font-display font-bold text-[11px] uppercase tracking-widest px-5 py-3 rounded-md text-center shrink-0 transition-colors"
              >
                Call Hotline Now
              </a>
            </div>
          </div>
        </section>

        {/* 7. CALCULATOR ESTIMATIONS INDEX */}
        <section id="estimator" className="py-20 sm:py-24 bg-white border-b border-brand-sand-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CostEstimator onSelectEstimate={handleEstimateSelect} />
          </div>
        </section>

        {/* 8. DETAILED CLIENT INQUIRY FORM */}
        <section id="consultation" className="py-20 sm:py-24 bg-brand-sand-100/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              externalSelectedStyleId={stylePreset}
              externalSizeSqFt={sizeSqFt}
              externalEstimatedCost={estimatedCost}
            />
          </div>
        </section>
      </main>

      {/* 9. MASTER BOTTOM BRAND FOOTER PANEL */}
      <Footer />
    </div>
  );
}
