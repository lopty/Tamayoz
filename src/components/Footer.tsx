/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Logo from "./Logo";
import { Phone, Mail, MapPin, ArrowUpCircle, MessageSquareCode } from "lucide-react";

// ─── Contact constants ────────────────────────────────────────────────────────
const CALL_NUMBER_1_DISPLAY = "058 658 0254";
const CALL_NUMBER_1_HREF    = "0586580254";
const CALL_NUMBER_2_DISPLAY = "056 101 4935";
const CALL_NUMBER_2_HREF    = "0561014935";
const WHATSAPP_NUMBER       = "971563731162";
const WHATSAPP_DISPLAY      = "056 373 1162";
const CONTACT_EMAIL         = "contact@koftechnicalservices.com";
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-charcoal-900 border-t border-brand-charcoal-800 text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-brand-charcoal-800">

          {/* Logo & Corporate Summary */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-start">
              <Logo className="scale-95 origin-left" />
            </div>
            <p className="text-xs sm:text-sm text-brand-sand-300 leading-relaxed max-w-sm">
              KOF Technical Services LLC is a premier licensed contractor based in Al Barsha, Dubai. We specialize in luxury residential makeovers, elegant German kitchen fitouts, bespoke joinery, and premium stonemasonry.
            </p>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-[11px] text-brand-sand-300 uppercase tracking-wider font-semibold">
                Licensed Dubai Contractor • Al Barsha
              </span>
            </div>
          </div>

          {/* Directory */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-gold-400">
              Quick Directory
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#hero" className="font-sans text-xs text-brand-sand-300 hover:text-brand-gold-300 transition-colors">
                Hero Showcase
              </a>
              <a href="#before-after" className="font-sans text-xs text-brand-sand-300 hover:text-brand-gold-300 transition-colors">
                Before & After slider
              </a>
              <a href="#services" className="font-sans text-xs text-brand-sand-300 hover:text-brand-gold-400 transition-colors">
                Renovation Services
              </a>
              <a href="#previous-works" className="font-sans text-xs text-brand-sand-300 hover:text-brand-gold-400 transition-colors">
                Previous Works
              </a>
              <a href="#why-tabeer" className="font-sans text-xs text-brand-sand-300 hover:text-brand-gold-400 transition-colors">
                Corporate Core Strengths
              </a>
              <a href="#estimator" className="font-sans text-xs text-brand-sand-300 hover:text-brand-gold-400 transition-colors">
                Cost Calculator
              </a>
              <a href="#quote-consultation" className="font-sans text-xs text-brand-sand-300 hover:text-brand-gold-400 transition-colors">
                Direct Consultations
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-gold-400">
              Contact Channels
            </h4>
            <div className="space-y-4">

              {/* Call — primary */}
              <a
                href={`tel:${CALL_NUMBER_1_HREF}`}
                className="flex items-center gap-3.5 group text-brand-sand-300 hover:text-brand-gold-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-charcoal-800 text-brand-gold-400 flex items-center justify-center border border-brand-charcoal-900 group-hover:bg-brand-gold-500 group-hover:text-white transition-all shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-brand-sand-400 block font-mono uppercase tracking-wider leading-none mb-1">
                    Call Hotline
                  </span>
                  <span className="text-sm font-bold font-mono">{CALL_NUMBER_1_DISPLAY}</span>
                </div>
              </a>

              {/* Call — secondary */}
              <a
                href={`tel:${CALL_NUMBER_2_HREF}`}
                className="flex items-center gap-3.5 group text-brand-sand-300 hover:text-brand-gold-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-charcoal-800 text-brand-gold-400 flex items-center justify-center border border-brand-charcoal-900 group-hover:bg-brand-gold-500 group-hover:text-white transition-all shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-brand-sand-400 block font-mono uppercase tracking-wider leading-none mb-1">
                    Direct Line
                  </span>
                  <span className="text-sm font-bold font-mono">{CALL_NUMBER_2_DISPLAY}</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group text-brand-sand-300 hover:text-green-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-charcoal-800 text-green-500 flex items-center justify-center border border-brand-charcoal-900 group-hover:bg-green-600 group-hover:text-white transition-all shrink-0">
                  <MessageSquareCode className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-brand-sand-400 block font-mono uppercase tracking-wider leading-none mb-1">
                    WhatsApp
                  </span>
                  <span className="text-sm font-bold font-mono">{WHATSAPP_DISPLAY}</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3.5 group text-brand-sand-300 hover:text-brand-gold-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-charcoal-800 text-brand-gold-400 flex items-center justify-center border border-brand-charcoal-900 group-hover:bg-brand-gold-500 group-hover:text-white transition-all shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-brand-sand-400 block font-mono uppercase tracking-wider leading-none mb-1">
                    Corporate Email
                  </span>
                  <span className="text-xs sm:text-sm font-medium font-mono break-all">{CONTACT_EMAIL}</span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-3.5 text-brand-sand-300">
                <div className="w-8 h-8 rounded-lg bg-brand-charcoal-800 text-brand-gold-400 flex items-center justify-center border border-brand-charcoal-900 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-brand-sand-400 block font-mono uppercase tracking-wider leading-none mb-1">
                    Headquartered
                  </span>
                  <span className="text-xs sm:text-sm font-bold font-sans text-white">Al Barsha, Dubai, UAE</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Base */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p className="font-sans text-[11px] text-brand-sand-400">
              © {new Date().getFullYear()} KOF Technical Services LLC. All Rights Reserved.
            </p>
            <p className="font-sans text-[10px] text-brand-sand-500">
              Luxury Architectural Fitout Standards, Al Barsha, Dubai. Registered Licensed Entity.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider hover:text-brand-gold-400 text-brand-sand-400 transition-colors group cursor-pointer"
          >
            Scroll to Top
            <ArrowUpCircle className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
