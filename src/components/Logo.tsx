/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "gold";
  showText?: boolean;
}

export default function Logo({ className = "", variant = "dark", showText = true }: LogoProps) {
  // Select color styles
  const mainColor =
    variant === "light"
      ? "text-brand-sand-50"
      : variant === "gold"
      ? "text-brand-gold-500"
      : "text-brand-charcoal-800";

  const subColor =
    variant === "light"
      ? "text-brand-sand-300"
      : variant === "gold"
      ? "text-brand-gold-300"
      : "text-brand-sand-500";

  const pathFill =
    variant === "light"
      ? "#FCFAF6"
      : variant === "gold"
      ? "#BF9C60"
      : "#292826";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Skyscrapers T Logo */}
      <svg
        width="46"
        height="38"
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        {/* Base horizontal line */}
        <line x1="15" y1="72" x2="85" y2="72" stroke={pathFill} strokeWidth="2.5" strokeLinecap="round" />

        {/* Skyscrapers layout */}
        {/* Leftmost short skyscraper */}
        <path d="M22 72 V55 H27 V72 Z" fill={pathFill} opacity="0.65" />
        <path d="M27 72 V42 H32 v30 Z" fill={pathFill} opacity="0.8" />

        {/* Main Left Tall Skyscraper (with technical measurement marks) */}
        <path d="M32 72 V18 H41 V72 Z" fill={pathFill} />
        {/* Measurement notches details on the tall tower left edge */}
        <path d="M32.5 22 h3" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />
        <path d="M32.5 26 h5" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />
        <path d="M32.5 30 h3" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />
        <path d="M32.5 34 h5" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />
        <path d="M32.5 38 h3" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />
        <path d="M32.5 42 h5" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />
        <path d="M32.5 46 h3" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />
        <path d="M32.5 50 h5" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />
        <path d="M32.5 54 h3" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />
        <path d="M32.5 58 h5" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />
        <path d="M32.5 62 h3" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />
        <path d="M32.5 66 h5" stroke={variant === "light" ? "#1B1A19" : "#FCFAF6"} strokeWidth="1" />

        {/* Medium Right Twin Skyscraper (behind) */}
        <path d="M50 72 V24 H64 V72 Z" fill={pathFill} opacity="0.5" />

        {/* Outer Right Skyscraper */}
        <path d="M64 72 V40 H74 V72 Z" fill={pathFill} opacity="0.8" />
        <path d="M74 72 V50 H78 V72 Z" fill={pathFill} opacity="0.65" />

        {/* Bold structural Letter "T" overlapping the center */}
        {/* T-Horizontal bar with elegant structural angled cut */}
        <path d="M41 33 L71 43 V49 L41 39 Z" fill={pathFill} />
        {/* T-Vertical Column body */}
        <path d="M51 37 H60 V72 H51 Z" fill={pathFill} />
      </svg>

      {showText && (
        <div className="text-left flex flex-col justify-center">
          <span
            className={`font-display text-[12px] sm:text-[13px] font-bold tracking-[0.24em] uppercase transition-colors duration-300 leading-none ${mainColor}`}
          >
            KOF
          </span>
          <span
            className={`font-sans text-[7px] sm:text-[8px] font-medium tracking-[0.38em] uppercase opacity-90 transition-colors duration-300 mt-1.5 leading-none ${subColor}`}
          >
            Technical Services LLC
          </span>
        </div>
      )}
    </div>
  );
}
