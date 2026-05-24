/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Phone, MessageSquareCode, Menu, X, Check } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Transformation", href: "#before-after" },
    { label: "Services", href: "#services" },
    { label: "Why Tabeer", href: "#why-tabeer" },
    { label: "Cost Estimator", href: "#estimator" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3.5 border-b border-brand-sand-200/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Left Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <Logo variant="dark" showText={true} className="scale-90 sm:scale-100 origin-left" />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-[13px] font-bold uppercase tracking-wider text-brand-charcoal-800 hover:text-brand-gold-500 transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA links */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:0561014935"
            className="flex items-center gap-2 font-mono text-[13px] font-bold text-brand-charcoal-800/80 hover:text-brand-gold-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-brand-sand-100"
          >
            <Phone className="w-4 h-4 text-brand-gold-500" />
            056 101 4935
          </a>
          <a
            href="#quote-consultation"
            className="bg-brand-charcoal-800 hover:bg-brand-charcoal-900 text-white font-display font-bold text-xs uppercase tracking-widest py-3 px-5 rounded-lg border border-brand-charcoal-900 transition-all hover:shadow-lg cursor-pointer"
          >
            Free Quote
          </a>
        </div>

        {/* Mobile Toggle Trigger */}
        <div className="flex items-center md:hidden gap-2">
          <a
            href="tel:0561014935"
            className="w-9 h-9 bg-brand-sand-100 border border-brand-sand-200 rounded-lg flex items-center justify-center text-brand-charcoal-800 shrink-0"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="w-9 h-9 bg-brand-charcoal-800 text-white rounded-lg flex items-center justify-center cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Modal Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-b border-brand-sand-200 px-6 py-8 flex flex-col md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="font-display text-base font-bold text-brand-charcoal-800 py-2 border-b border-brand-sand-50 hover:text-brand-gold-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:0561014935"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-3 bg-brand-sand-100 font-mono text-sm font-bold py-3.5 px-4 rounded-xl text-brand-charcoal-800 border border-brand-sand-200"
              >
                <Phone className="w-4 h-4 text-brand-gold-500" />
                Call Hotline: 056 101 4935
              </a>
              <a
                href="#quote-consultation"
                onClick={handleNavClick}
                className="block text-center bg-brand-charcoal-900 text-white font-display font-semibold text-sm py-4 rounded-xl cursor-pointer"
              >
                Request Free Inspection & Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
