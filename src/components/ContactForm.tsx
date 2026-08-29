/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { DUBAI_LOCATIONS } from "../data";
import { Phone, Mail, MapPin, Send, MessageSquareCode, CheckCircle2, RefreshCw } from "lucide-react";

// ─── WhatsApp numbers ────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "971563731162"; // WhatsApp line
const CALL_NUMBER_1   = "0586580254";   // Primary call
const CALL_NUMBER_2   = "0561014935";   // Secondary call
const CONTACT_EMAIL   = "contact@koftechnicalservices.com";
// ─────────────────────────────────────────────────────────────────────────────

interface ContactFormProps {
  externalSelectedStyleId?: string | null;
  externalSizeSqFt?: number | null;
  externalEstimatedCost?: number | null;
}

const STYLE_LABELS: Record<string, string> = {
  "living-kitchen":  "Living & Kitchen Refinement (from AED 45,000)",
  "full-apartment":  "Executive Apartment Transformation (from AED 85,000)",
  "signature-villa": "Signature Custom Villa Suite (from AED 155,000)",
};

export default function ContactForm({
  externalSelectedStyleId,
  externalSizeSqFt,
  externalEstimatedCost,
}: ContactFormProps) {
  const [name,        setName]        = useState("");
  const [phone,       setPhone]       = useState("");
  const [email,       setEmail]       = useState("");
  const [location,    setLocation]    = useState(DUBAI_LOCATIONS[0]);
  const [service,     setService]     = useState("Full Home Renovation");
  const [size,        setSize]        = useState(externalSizeSqFt ? String(externalSizeSqFt) : "150");
  const [stylePreset, setStylePreset] = useState(externalSelectedStyleId || "living-kitchen");
  const [message,     setMessage]     = useState("");
  const [formError,   setFormError]   = useState("");

  useEffect(() => {
    if (externalSizeSqFt)       setSize(String(externalSizeSqFt));
    if (externalSelectedStyleId) setStylePreset(externalSelectedStyleId);
  }, [externalSizeSqFt, externalSelectedStyleId]);

  // ── Build the WhatsApp message from all form fields ──────────────────────
  const buildWhatsAppUrl = (forSubmit = false) => {
    const styleLabel = STYLE_LABELS[stylePreset] ?? stylePreset;
    const costLine   = externalEstimatedCost
      ? `\n💰 *Estimated Cost:* AED ${externalEstimatedCost.toLocaleString()}`
      : "";

    const text = forSubmit
      ? [
          `🏠 *NEW RENOVATION ENQUIRY — KOF*`,
          ``,
          `👤 *Client Name:* ${name}`,
          `📱 *Mobile:* ${phone}`,
          `📧 *Email:* ${email || "Not provided"}`,
          ``,
          `📍 *Project Location:* ${location}, Dubai`,
          `🔧 *Service Scope:* ${service}`,
          `📐 *Floor Size:* ${size} Sq Ft`,
          `✨ *Finishing Package:* ${styleLabel}`,
          costLine,
          ``,
          `📝 *Additional Notes:*`,
          message || "None provided.",
          ``,
          `─────────────────────────`,
          `Please arrange a physical site inspection and exact measurement. Thank you!`,
        ].join("\n")
      : `Hello KOF. I am interested in your renovation services. Please get in touch. Name: ${name || "Customer"}, Phone: ${phone || "TBC"}.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // ── Submit: validate → open WhatsApp with the full message ───────────────
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name.trim() || !phone.trim()) {
      setFormError("Please provide your name and UAE mobile number to secure a booking.");
      return;
    }

    // Open WhatsApp directly — no fake delay, no simulation
    window.open(buildWhatsAppUrl(true), "_blank", "noopener,noreferrer");
  };

  return (
    <div id="quote-consultation" className="scroll-mt-24">
      <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-brand-sand-200/40 grid grid-cols-1 lg:grid-cols-12">

        {/* ── Contact Details Column ── */}
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

              {/* Call number 1 */}
              <a href={`tel:${CALL_NUMBER_1}`} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                <div className="w-10 h-10 bg-brand-gold-500/10 text-brand-gold-450 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-gold-500 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-sand-400 block uppercase tracking-wide font-mono leading-none mb-1">
                    Call Hotline
                  </span>
                  <span className="text-base font-bold font-mono tracking-wide block text-white group-hover:text-brand-gold-300 transition-colors">
                    {CALL_NUMBER_1}
                  </span>
                </div>
              </a>

              {/* Call number 2 */}
              <a href={`tel:${CALL_NUMBER_2}`} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                <div className="w-10 h-10 bg-brand-gold-500/10 text-brand-gold-450 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-gold-500 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-sand-400 block uppercase tracking-wide font-mono leading-none mb-1">
                    Direct Line
                  </span>
                  <span className="text-base font-bold font-mono tracking-wide block text-white group-hover:text-brand-gold-300 transition-colors">
                    {CALL_NUMBER_2}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                <div className="w-10 h-10 bg-brand-gold-500/10 text-brand-gold-450 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-gold-500 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-sand-400 block uppercase tracking-wide font-mono leading-none mb-1">
                    Design & Tenders Email
                  </span>
                  <span className="text-sm sm:text-base font-medium font-mono block text-white group-hover:text-brand-gold-300 transition-colors break-all">
                    {CONTACT_EMAIL}
                  </span>
                </div>
              </a>

              {/* Address */}
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

          {/* WhatsApp quick chat */}
          <div className="relative z-10 pt-8 border-t border-white/10 mt-10">
            <span className="text-xs text-brand-sand-300 font-medium block mb-3 font-sans">
              Need immediate feedback regarding pricing?
            </span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-display font-semibold transition-all py-3 px-5 rounded-md text-xs uppercase tracking-wider"
            >
              <MessageSquareCode className="w-4 h-4" />
              Chat Direct on WhatsApp
            </a>
          </div>
        </div>

        {/* ── Form Column ── */}
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
                placeholder="e.g. 056 373 1162"
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

            {/* Location */}
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
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Service */}
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
                <option value="Tiling & Cladding">Tiling & Cladding</option>
              </select>
            </div>

            {/* Size */}
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

            {/* Package */}
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

          {/* Notes */}
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
              className="w-full bg-green-600 hover:bg-green-700 text-white font-display font-medium text-xs uppercase tracking-widest transition-all py-4 px-6 rounded-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <MessageSquareCode className="w-5 h-5" />
              Register Secured Inspection & Design Slot via WhatsApp
            </button>
            <p className="text-center text-[10px] text-brand-sand-400 font-mono mt-3 uppercase tracking-wide">
              Guaranteed zero hidden charges • Absolute transparent billing
            </p>
          </div>
        </form>

      </div>
    </div>
  );
}
