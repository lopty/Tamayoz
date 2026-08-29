/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

import completed1 from "../assets/images/Screenshot_4.png";
import completed2 from "../assets/images/Screenshot_5.png";
import completed3 from "../assets/images/Screenshot_7.png";

import onsite1 from "../assets/images/Screenshot_1.png";
import onsite2 from "../assets/images/Screenshot_2.png";
import onsite3 from "../assets/images/Screenshot_3.png";
import onsite4 from "../assets/images/Screenshot_6.png";
import onsite5 from "../assets/images/Screenshot_8.png";

import concept1 from "../assets/images/WhatsApp Image 2026-08-29 at 10.54.07.jpeg";
import concept2 from "../assets/images/WhatsApp Image 2026-08-29 at 10.54.07 (1).jpeg";
import concept3 from "../assets/images/WhatsApp Image 2026-08-29 at 10.54.07 (2).jpeg";
import concept4 from "../assets/images/WhatsApp Image 2026-08-29 at 10.54.08.jpeg";
import concept5 from "../assets/images/WhatsApp Image 2026-08-29 at 10.54.08 (1).jpeg";
import concept6 from "../assets/images/WhatsApp Image 2026-08-29 at 10.54.08 (2).jpeg";
import concept7 from "../assets/images/WhatsApp Image 2026-08-29 at 10.54.08 (3).jpeg";
import concept8 from "../assets/images/WhatsApp Image 2026-08-29 at 10.54.09.jpeg";

const COMPLETED_WORK = [
  { src: completed1, caption: "Marble-clad ensuite with backlit stone niche" },
  { src: completed2, caption: "Gold-veined stone powder room finish" },
  { src: completed3, caption: "Finished living space with media console" },
];

const ONSITE_WORK = [
  { src: onsite1, caption: "Villa pool deck & rear elevation under scaffold" },
  { src: onsite2, caption: "Facade scaffolding for exterior finishing works" },
  { src: onsite3, caption: "Site engineers finishing an outdoor water feature" },
  { src: onsite4, caption: "In-house joinery workshop — custom panel fabrication" },
  { src: onsite5, caption: "Structural block work on a live development site" },
];

const DESIGN_CONCEPTS = [
  { src: concept1, caption: "Walk-in wardrobe & hallway concept" },
  { src: concept2, caption: "Living room media wall concept" },
  { src: concept3, caption: "Marble bathroom & tub concept" },
  { src: concept4, caption: "Ensuite vanity concept" },
  { src: concept5, caption: "Bedroom & wardrobe concept" },
  { src: concept6, caption: "Powder room concept" },
  { src: concept7, caption: "Dual-vanity master bath concept" },
  { src: concept8, caption: "Bespoke bookshelf joinery concept" },
];

type TabId = "completed" | "onsite" | "concepts";

const TABS: { id: TabId; label: string; data: { src: string; caption: string }[] }[] = [
  { id: "completed", label: "Completed Work", data: COMPLETED_WORK },
  { id: "onsite", label: "Our Team On-Site", data: ONSITE_WORK },
  { id: "concepts", label: "Design Concepts", data: DESIGN_CONCEPTS },
];

export default function PreviousWorks() {
  const [tab, setTab] = useState<TabId>("completed");
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);
  const active = TABS.find((t) => t.id === tab) ?? TABS[0];

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  return (
    <div className="space-y-10">
      {/* Category Switch */}
      <div className="flex items-center gap-1.5 bg-brand-sand-100 p-1 rounded-xl border border-brand-sand-300/60 w-full max-w-xl mx-auto">
        {TABS.map((t) => {
          const isActive = t.id === tab;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              type="button"
              className={`flex-1 text-center py-2.5 px-3 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                isActive
                  ? "bg-brand-charcoal-800 text-white shadow"
                  : "text-brand-charcoal-800/80 hover:bg-brand-sand-200/50"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tab === "concepts" && (
        <p className="text-center text-xs text-brand-sand-500 italic -mt-6">
          3D design concept renders — not photographs of a completed project.
        </p>
      )}

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {active.data.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setLightbox(item)}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-brand-sand-300/40 aspect-[4/3] group cursor-zoom-in text-left"
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal-900/90 via-brand-charcoal-900/40 to-transparent p-4 pt-10">
              <p className="text-white text-xs font-semibold leading-snug">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-brand-charcoal-900/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close preview"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <p className="text-white text-sm font-semibold text-center">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
