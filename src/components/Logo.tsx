/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import logoImg from "../assets/images/logo.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div
      className={`inline-flex items-center bg-brand-charcoal-900 rounded-lg px-3.5 py-2 select-none ${className}`}
    >
      <img
        src={logoImg}
        alt="KOF Technical Services LLC"
        className="h-8 sm:h-9 w-auto object-contain"
      />
    </div>
  );
}
