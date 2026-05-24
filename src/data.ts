/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ValueProp, BathroomStyle, BathroomFittings } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "living-remodel",
    title: "Living Spaces & Premium Carpentry",
    description: "Architectural wall paneling, false-ceiling acoustic planning, customized media centers, and seamless flooring transitions. We elevate your main reception halls to five-star hotel aesthetics.",
    detailedBenefits: [
      "Custom timber acoustic fluted panels and brass trims",
      "Emaar-level warm concealed indirect LED cove lighting profiles",
      "High-end Italian micro-cement or micro-level marble flooring",
      "Precision structural dry-lining and double-glazed soundproof partitions"
    ],
    icon: "LayoutGrid"
  },
  {
    id: "kitchen-remodel",
    title: "Sleek Modern Kitchen Fitout",
    description: "Immaculate handle-less German cabinet designs, scratch-proof Quartz stone countertops, customized kitchen islands, and smart built-in appliance integrations.",
    detailedBenefits: [
      "High-gloss and seamless matte anti-fingerprint wood joinery",
      "Premium Quartz or sintered Calacatta stone waterfall countertops",
      "Bespoke modular drawers featuring BLUM Blumotion soft-close technology",
      "Integrated technical setups for built-in high-end ovens, wine fridges, and hobs"
    ],
    icon: "Home"
  },
  {
    id: "luxury-bathroom",
    title: "Luxury Bathroom Sanctuary",
    description: "Flawless room layout redesigns, frameless heavy-duty glass shower enclosures, wall-hung toilets with concealed Swiss-made water tanks, and luxury rain-showers.",
    detailedBenefits: [
      "Concealed cistern installations (Geberit flushing technology)",
      "Book-matched large-format porcelain slabs laying (up to 240x120cm)",
      "Rust-proof copper or multilayered leakproof PEX pipe networking",
      "Zoned IP65 waterproof ambient lighting inside recessed shower niches"
    ],
    icon: "Wrench"
  },
  {
    id: "tiling-cladding",
    title: "Bespoke Tiling & Stone Cladding",
    description: "Laser-aligned level masonry, precision book-matching for natural marbles, high-traffic porcelain laying, and heavy-duty wet area waterproofing.",
    detailedBenefits: [
      "State-of-the-art layout surveying to avoid thin sliver tiles at corners",
      "Epoxy grout matching exact tile shades for non-absorbent, forever-clean joints",
      "Premium floor leveling systems ensuring absolute flush zero-lip walk surfaces",
      "Waterproofing membranes with multi-layer elastic backing cords"
    ],
    icon: "Compass"
  },
  {
    id: "turnkey-management",
    title: "Turnkey Project Management A-Z",
    description: "Enjoy zero stress while a dedicated Site Engineer manages all materials delivery, daily photo/video reports on WhatsApp, and municipal/developer approvals.",
    detailedBenefits: [
      "Smooth coordination for developer fitout approvals (Emaar, Nakheel, DLD)",
      "Strict schedule tracking with guaranteed milestone handover dates",
      "All-inclusive cleanups: deep industrial sanitation before keys are returned",
      "Hassle-free garbage removal and structural compliance checks"
    ],
    icon: "ClipboardCheck"
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Unmatched Craft",
    description: "We work with top-tier, licensed stonemasons and plumbers on our direct payroll. Zero third-party sub-contracting risks.",
    icon: "Award"
  },
  {
    title: "Dedicated Engineers",
    description: "Each residential project is overseen by a dedicated Site Engineer providing transparent, continuous daily WhatsApp updates.",
    icon: "Users"
  },
  {
    title: "Milestone Guarantee",
    description: "We honor your calendar. If we miss the agreed-upon handover deadline, we pay penalty compensations.",
    icon: "Clock"
  },
  {
    title: "Transparent Pricing",
    description: "Itemized material lists and exact cost metrics. No estimated estimates or hidden surcharges in final bills.",
    icon: "BadgePercent"
  }
];

export const BATHROOM_STYLES: BathroomStyle[] = [
  {
    id: "living-kitchen",
    name: "Living & Kitchen Refinement",
    pricePerSqFt: 350,
    basePrice: 45000,
    desc: "Complete joinery refinement, modern layout planning, and premium material cladding across your living reception and kitchen spaces.",
    features: [
      "Premium handleless kitchen cabinets",
      "Luxury engineered quartz stone countertops",
      "Concealed LED strip profiles in living area cove",
      "Bespoke TV-wall acoustic paneling installation",
      "On-Time completion in 14-20 days"
    ]
  },
  {
    id: "full-apartment",
    name: "Executive Apartment Transformation",
    pricePerSqFt: 480,
    basePrice: 85000,
    desc: "The ultimate transformation for luxury residential properties. Full kitchen, master bathroom, structural plastering, and custom marble floors.",
    features: [
      "Complete German kitchen with waterfall main island",
      "Porcelain stone floor cladding with micro-grouts",
      "Fully renovated modern bathroom fit-out",
      "New luxury doors, hidden door frames, and smart lock",
      "Zoned dimmable lighting and high-air ventilation integration",
      "On-Time completion in 21-28 days"
    ]
  },
  {
    id: "signature-villa",
    name: "Signature Custom Villa Suite",
    pricePerSqFt: 620,
    basePrice: 155000,
    desc: "Our most exclusive architectural remodeling tier for villas in Arabian Ranches, Dubai Hills, and Palm Jumeirah. Massive slabs & turnkey fitout.",
    features: [
      "Book-matched natural marble floor slabs (2.4m x 1.2m)",
      "Custom floor-to-ceiling walk-in wardrobes with leather accents",
      "Bespoke smart-home automated lutron lighting relays",
      "Sleek architectural sliding doors and glass partitions",
      "Professional 3D renderings and comprehensive scale walkthroughs"
    ]
  }
];

export const FITTINGS_OPTIONS: BathroomFittings[] = [
  {
    id: "standard",
    name: "Brushed Graphite",
    multiplier: 1.0,
    desc: "Sleek, fingerprint-free textured metal surfaces that match luxury modern design lines."
  },
  {
    id: "designer",
    name: "Midnight Bronze",
    multiplier: 1.12,
    desc: "Deep rich bronze texture providing high-contrast warmth to marble backdrops."
  },
  {
    id: "royal",
    name: "Champagne Brushed Gold",
    multiplier: 1.25,
    desc: "Satin metallic gold applied via architectural PVD coatings for absolute luxury."
  }
];

export const DUBAI_LOCATIONS = [
  "Al Barsha 1",
  "Al Barsha 2",
  "Al Barsha 3",
  "Al Barsha Heights / Tecom",
  "Dubai Hills Estate",
  "Arabian Ranches",
  "Dubai Marina",
  "Downtown Dubai",
  "Palm Jumeirah",
  "Jumeirah (1, 2, 3)",
  "Business Bay",
  "Jumeirah Beach Residence (JBR)",
  "Jumeirah Lake Towers (JLT)",
  "The Greens / Views",
  "Other Dubai Area"
];
