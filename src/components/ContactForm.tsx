/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { DUBAI_LOCATIONS } from "../data";
import { Phone, Mail, MapPin, Send, MessageSquareCode, CheckCircle2, RefreshCw } from "lucide-react";

interface ContactFormProps {
  externalSelectedStyleId?: string | null;
  externalSizeSqFt?: number | null;
  externalEstimatedCost?: number | null;
}

export default function ContactForm({
  externalSelectedStyleId,
  externalSizeSqFt,
  externalEstimatedCost,
}: ContactFormProps) {
  // Direct client form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState(DUBAI_LOCATIONS[0]);
  const [service, setService] = useState("Full Home Renovation");
  const [size, setSize] = useState(externalSizeSqFt ? String(externalSizeSqFt) : "150");
  const [stylePreset, setStylePreset] = useState(externalSelectedStyleId || "living-kitchen");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [formError, setFormError] = useState("");

  // Update values if external estimate is applied
  useEffect(() => {
    if (externalSizeSqFt) setSize(String(externalSizeSqFt));
    if (externalSelectedStyleId) setStylePreset(externalSelectedStyleId);
  }, [externalSizeSqFt, externalSelectedStyleId]);

  // WhatsApp Pre-filled text URL calculation
  const whatsappUrl = () => {
    const defaultText = `Hello Tabeer Al Tamayoz LLC. I am interested in your Premium Dubai Renovation Services.\n\nMy details:\n- Name: ${
      name || "Customer"
    }\n- Phone: ${phone || "Provided"}\n- Location: ${location}\n- Est. size: ${size} Sq Ft\n- Selected package: ${stylePreset.toUpperCase()}\n- Selected scope: ${service}\n\nLet's coordinate a physical inspection and exact measure. Thank you!`;
    return `https://wa.me/971561014935?text=${encodeURIComponent(defaultText)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name || !phone) {
      setFormError("Please provide your name and UAE mobile number to secure a booking.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API response / store inquiry locally
    setTimeout(() => {
      const randHex = Math.floor(100000 + Math.random() * 900000);
      setVoucherCode(`TAT-EMAAR-${randHex}`);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setLocation(DUBAI_LOCATIONS[0]);
    setService("Full Home Renovation");
    setSize("150");
    setStylePreset("living-kitchen");
    setMessage("");
    setIsSuccess(false);
    setFormError("");
  };

  return (
    <div id="quote-consultation" className="scroll-mt-24">
      {isSuccess ? (
        <div className="bg-brand-charcoal-800 text-white rounded-xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl border border-brand-gold-500/20">
          <div className="w-16 h-16 bg-brand-gold-500/10 text-brand-gold-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-gold-500/30">
            <CheckCircle2 className="w-9 h-9 animate-pulse" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-brand-gold-400 font-bold block mb-2">
            Inquiry Registered Successfully
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 tracking-tight uppercase">
            Consultation Slotted, {name}!
          </h3>
          <p className="text-sm text-brand-sand-300 max-w-md mx-auto mb-8 leading-relaxed font-sans">
            Our direct site engineer will contact you shortly on{" "}
            <span className="text-white font-mono font-bold">{phone}</span> to schedule a precise physical site measurement, 3D floor layout consultations, and sample board presentations.
          </p>

          <div className="bg-brand-charcoal-900 border border-white/5 rounded-lg p-6 mb-8 max-w-sm mx-auto">
            <span className="text-xs text-brand-sand-400 uppercase tracking-widest font-mono block mb-1 font-bold">
              Engineering Booking Voucher
            </span>
            <span className="font-mono text-lg font-bold text-brand-gold-400 tracking-wider">
              {voucherCode}
            </span>
            <p className="text-[10px] text-brand-sand-500 mt-2 leading-snug">
              Share this reference code with the Site Engineer to claim your structural layout priority slot.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquareCode className="w-4 h-4" />
              Notify Coordinator via WhatsApp
            </a>
            <button
              onClick={resetForm}
              type="button"
              className="bg-transparent hover:bg-white/5 border border-white/10 text-brand-sand-300 py-3 px-6 rounded-lg font-display font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Calculate Another Project
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-brand-sand-200/40 grid grid-cols-1 lg:grid-cols-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 bg-brand-charcoal-800 text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="relative z-10">
              <span className="font-mono text-xs text-brand-gold-400 uppercase tracking-widest font-bold block mb-2">
                Get In Touch Today
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-6 leading-none uppercase">
                Premium Fitout HQ
              </h3>
              <p className="text-sm text-brand-sand-300 leading-relaxed mb-8 max-w-sm font-sans">
                Elevating residential properties and villas with absolute masonry mastery, smart German joinery, and turn-key peace of mind.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:0561014935"
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-brand-gold-500/10 text-brand-gold-450 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-gold-500 group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-sand-400 block uppercase tracking-wide font-mono leading-none mb-1">
                      Direct Hotlines
                    </span>
                    <span className="text-base font-bold font-mono tracking-wide block text-white group-hover:text-brand-gold-300 transition-colors">
                      056 101 4935
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:komoriol95@gmail.com"
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-brand-gold-500/10 text-brand-gold-450 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-gold-500 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-sand-400 block uppercase tracking-wide font-mono leading-none mb-1">
                      Design & Tenders Email
                    </span>
                    <span className="text-sm sm:text-base font-medium font-mono block text-white group-hover:text-brand-gold-300 transition-colors break-all">
                      komoriol95@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-lg">
                  <div className="w-10 h-10 bg-brand-gold-500/10 text-brand-gold-450 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-sand-400 block uppercase tracking-wide font-mono leading-none mb-1">
                      Corporate Address
                    </span>
                    <strong className="text-sm sm:text-base font-semibold block text-white">
                      Al Barsha, Dubai, UAE
                    </strong>
                    <span className="text-xs text-brand-sand-450 block leading-tight mt-0.5 font-light">
                      Dedicated engineering across Al Barsha 1, 2, 3, Dubai Hills, Marina, and surrounding luxury estates.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 mt-10">
              <span className="text-xs text-brand-sand-300 font-medium block mb-3 font-sans">
                Need immediate feedback regarding pricing?
              </span>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-display font-semibold transition-all py-3 px-5 rounded-md text-xs uppercase tracking-wider"
              >
                <MessageSquareCode className="w-4 h-4" />
                Chat Direct on WhatsApp
              </a>
            </div>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-charcoal-800 tracking-tight uppercase">
              Schedule Site Audit & Layout Consultancy
            </h3>
            <p className="text-xs sm:text-sm text-brand-sand-600 leading-normal">
              Enter your coordinates. A licensed Site Engineer will connect with you to organize physical measurements, supply material boards, and discuss spatial layout possibilities.
            </p>

            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-sans font-medium">
                ⚠️ {formError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-brand-charcoal-800 block">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Salim Al Suwaidi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-sand-50 border border-brand-sand-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold-500 transition-all font-sans text-brand-charcoal-800"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-brand-charcoal-800 block">
                  UAE Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 056 101 4935"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-brand-sand-50 border border-brand-sand-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold-500 transition-all font-mono text-brand-charcoal-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-brand-charcoal-800 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@domain.ae"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-brand-sand-50 border border-brand-sand-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold-500 transition-all font-sans text-brand-charcoal-800"
                />
              </div>

              {/* Location Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-brand-charcoal-800 block">
                  Project Location in Dubai <span className="text-red-500">*</span>
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-brand-sand-50 border border-brand-sand-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold-500 transition-all font-sans text-brand-charcoal-800"
                >
                  {DUBAI_LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Service Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-brand-charcoal-800 block">
                  Service Scope
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-brand-sand-50 border border-brand-sand-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold-500 transition-all font-sans text-brand-charcoal-800"
                >
                  <option value="Full Home Renovation">Full Home Renovation</option>
                  <option value="Kitchen Modernization">Kitchen Modernization</option>
                  <option value="Luxury Bathroom Design">Luxury Bathroom Design</option>
                  <option value="Joinery & Custom Woodwork">Joinery & Custom Woodwork</option>
                  <option value="Tiling & Luxury Cladding">Tiling & Cladding</option>
                </select>
              </div>

              {/* Size Select or Keyin */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-brand-charcoal-800 block">
                  Floor Size (Sq Ft)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 150"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full bg-brand-sand-50 border border-brand-sand-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold-500 transition-all font-mono text-brand-charcoal-800"
                />
              </div>

              {/* Style tier indicator */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-brand-charcoal-800 block">
                  Finishing Preset
                </label>
                <select
                  value={stylePreset}
                  onChange={(e) => setStylePreset(e.target.value)}
                  className="w-full bg-brand-sand-50 border border-brand-sand-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold-500 transition-all font-sans text-brand-charcoal-800"
                >
                  <option value="living-kitchen">Living & Kitchen Refinement</option>
                  <option value="full-apartment">Executive Apartment Transformation</option>
                  <option value="signature-villa">Signature Custom Villa Suite</option>
                </select>
              </div>
            </div>

            {/* Message Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold uppercase text-brand-charcoal-800 block">
                Additional Requests / Property Notes
              </label>
              <textarea
                rows={3}
                placeholder="Specify key layout changes, timeline requirements, developer association details (Emaar, Nakheel), or premium luxury brands preferred."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-brand-sand-50 border border-brand-sand-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold-500 transition-all font-sans text-brand-charcoal-800 placeholder:opacity-60"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-charcoal-800 hover:bg-brand-charcoal-900 text-white font-display font-medium text-xs uppercase tracking-widest transition-all py-4 px-6 rounded-lg flex items-center justify-center gap-2 group cursor-pointer border border-brand-charcoal-900 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Connecting to Site Engineer...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Register Secured Inspection & Design Slot
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
