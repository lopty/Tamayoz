/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { Eye, ArrowLeftRight, Paintbrush, Compass, Layout } from "lucide-react";

import bathroomBefore from "../assets/images/bathroom_before_1779433554549.png";
import bathroomAfter from "../assets/images/bathroom_after_1779433572382.png";
import kitchenBefore from "../assets/images/before.png";
import kitchenAfter from "../assets/images/after.png";
import livingBefore from "../assets/images/living room before.png";
import livingAfter from "../assets/images/living room after.png";

const PROJECT_ROOMS = [
  {
    id: "living",
    label: "Living Rooms",
    before: livingBefore,
    after: livingAfter,
    desc: "Backlit stone accents, bespoke wood slat paneling, herringbone oak flooring, and framed glass partitions."
  },
  {
    id: "bathroom",
    label: "Spa Bathrooms",
    before: bathroomBefore,
    after: bathroomAfter,
    desc: "Bespoke stone cladding, Geberit concealed water closet, custom backlit mirror, and linear floor drains."
  },
  {
    id: "kitchen",
    label: "German Kitchens",
    before: kitchenBefore,
    after: kitchenAfter,
    desc: "Seamless handle-less oak cabinetry, waterfall quartz counters, and floor-to-ceiling glazing framing the skyline."
  }
];

export default function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState("living");
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Find active room data
  const currentRoom = PROJECT_ROOMS.find((r) => r.id === activeTab) || PROJECT_ROOMS[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col items-center w-full max-w-2xl space-y-6">
      {/* Pristine Emaar Minimalist Selection Tabs */}
      <div className="flex items-center gap-1.5 bg-brand-sand-100 p-1 rounded-xl border border-brand-sand-300/60 w-full">
        {PROJECT_ROOMS.map((room) => {
          const isActive = room.id === activeTab;
          return (
            <button
              key={room.id}
              onClick={() => {
                setActiveTab(room.id);
                setSliderPosition(50); // reset position style
              }}
              type="button"
              className={`flex-1 text-center py-2.5 px-3 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                isActive
                  ? "bg-brand-charcoal-800 text-white shadow"
                  : "text-brand-charcoal-800/80 hover:bg-brand-sand-200/50"
              }`}
            >
              {room.label}
            </button>
          );
        })}
      </div>

      <p className="text-xs text-brand-sand-600 italic text-center leading-normal max-w-lg">
        {currentRoom.desc}
      </p>

      {/* Container holding images and control */}
      <div
        id="before-after-container"
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-brand-sand-300 cursor-ew-resize select-none bg-brand-sand-100"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Before Image (Background) */}
        <img
          src={currentRoom.before}
          alt={`Original outdated ${currentRoom.label} before renovation`}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Before Title Overlay */}
        <div className="absolute top-4 left-4 z-20 bg-brand-charcoal-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          <span className="font-mono text-[10px] text-brand-sand-350 uppercase tracking-widest font-semibold flex items-center gap-1.5 text-brand-sand-200">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
            Original Layout
          </span>
        </div>

        {/* After Image (Clipped overlay) */}
        <div
          className="absolute inset-0 w-full h-full object-cover overflow-hidden transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={currentRoom.after}
            alt={`Newly renovated modern deluxe ${currentRoom.label}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current?.getBoundingClientRect().width || "650px", maxWidth: "none" }}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* After Title Overlay */}
        <div className="absolute top-4 right-4 z-20 bg-brand-gold-600/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brand-gold-400/25">
          <span className="font-mono text-[10px] text-white uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            KOF Deluxe Spec
          </span>
        </div>

        {/* Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-brand-gold-500 z-30 transition-all duration-75 shadow-[0_0_10px_rgba(191,156,96,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Drag Handle Knob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-charcoal-800 text-brand-gold-400 border border-brand-gold-500 shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>

        {/* Informative Slider Guide */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-brand-charcoal-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-brand-sand-400/10 flex items-center gap-2 pointer-events-none">
          <Eye className="w-3.5 h-3.5 text-brand-gold-400" />
          <span className="font-sans text-[10px] text-brand-sand-100 font-semibold uppercase tracking-wider">
            Drag bar to compare
          </span>
        </div>
      </div>
    </div>
  );
}
