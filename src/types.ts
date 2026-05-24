/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detailedBenefits: string[];
  icon: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

export interface BathroomStyle {
  id: string;
  name: string;
  pricePerSqFt: number;
  basePrice: number;
  desc: string;
  features: string[];
}

export interface BathroomFittings {
  id: string;
  name: string;
  multiplier: number;
  desc: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  styleId: string;
  sizeSqFt: number;
  message: string;
  estimatedCost: number;
  createdAt: string;
}
