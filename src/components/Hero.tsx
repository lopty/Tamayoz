/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Calendar, ArrowUpRight, Award, ShieldCheck, Check, Compass } from "lucide-react";
import heroImg from "../assets/images/living_after_1779434242063.png";

export default function Hero() {

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-brand-sand-100/15">
      {/* Editorial layout grids */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-6 space-y-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              {/* Spectacular Emaar-style Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-extrabold text-brand-charcoal-800 tracking-tight leading-[1.08] uppercase">
                HOME <br className="hidden sm:inline" />
                <span className="text-brand-gold-500">RENOVATION</span> <br />
                & FITOUTS
              </h1>

              {/* Sub-headline */}
              <p className="font-sans text-base sm:text-lg text-brand-sand-600 font-medium leading-relaxed max-w-lg">
                Transform your residential space with absolute architectural symmetry, premium European materials, and flawless turn-key project management. Custom craft for premium property owners.
              </p>
            </div>

            {/* Direct Core CTA Triggers */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#estimator"
                className="bg-brand-charcoal-800 hover:bg-brand-charcoal-900 text-white font-display font-semibold transition-all py-4 px-8 rounded-xl flex items-center justify-center gap-2 text-sm hover:shadow-xl group cursor-pointer"
              >
                Cost Calculator
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#quote-consultation"
                className="bg-white hover:bg-brand-sand-100 text-brand-charcoal-800 font-display font-semibold border border-brand-sand-300 transition-all py-4 px-8 rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-brand-gold-500" />
                Book Site Survey
              </a>
            </div>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 pt-4 border-t border-brand-sand-300/40">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-brand-gold-500/10 text-brand-gold-600 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="font-sans text-xs font-semibold text-brand-charcoal-800">
                  Licensed Engineers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-brand-gold-500/10 text-brand-gold-600 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="font-sans text-xs font-semibold text-brand-charcoal-800">
                  No Sub-Contractors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-brand-gold-500/10 text-brand-gold-600 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="font-sans text-xs font-semibold text-brand-charcoal-800">
                  Hassle-Free Turnkey
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Display Block */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Elegant architectural double border framing */}
            <div className="absolute -inset-4 border border-brand-charcoal-800/10 rounded-[2.5rem] pointer-events-none scale-95" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src={heroImg}
                alt="Tabeer Al Tamayoz renovated premium Dubai home living interior design"
                className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Corner Coordinate Accent Block */}
              <div className="absolute bottom-4 left-4 z-20 bg-brand-charcoal-900/90 backdrop-blur-md px-4 py-2 text-white border border-white/10 rounded-xl">
                <span className="font-mono text-[9px] text-brand-gold-300 uppercase tracking-widest block leading-none mb-0.5 font-bold">
                  SIGNATURE PROJECTS
                </span>
                <span className="font-sans text-xs font-bold font-display block leading-none">
                  Dubai Hills Living Suite
                </span>
              </div>
            </div>

            {/* Flyer badges strip sitting nicely overlayed on desktop grid */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl py-4 px-6 shadow-xl border border-brand-sand-300/40 flex items-center gap-4 sm:gap-6 divide-x divide-brand-sand-200 hidden sm:flex whitespace-nowrap z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-[11px] font-extrabold text-brand-charcoal-800 uppercase tracking-wider block leading-none">
                    Emaar Fitout Standard
                  </span>
                  <span className="text-[9px] text-brand-sand-500 block leading-none mt-0.5">
                    Highest tier finishing
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pl-4 sm:pl-6">
                <div className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-[11px] font-extrabold text-brand-charcoal-800 uppercase tracking-wider block leading-none">
                    Direct Site Engineers
                  </span>
                  <span className="text-[9px] text-brand-sand-500 block leading-none mt-0.5">
                    Continuous feedback via WhatsApp
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
