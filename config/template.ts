/**
 * config/template.ts
 *
 * Registration metadata for the Crowdera NGO template.
 * Defines template features, options, and support parameters.
 */

export interface TemplateMetadata {
  id: string;
  name: string;
  description: string;
  category: string;
  supportedCauses: string[];
  supportedLayouts: string[];
  supportedThemes: string[];
  supportsDarkMode: boolean;
  supportsRTL: boolean;
  supportsVideoHero: boolean;
  supportsGallery: boolean;
  supportsAnimations: boolean;
  version: string;
  author: string;
  license: string;
  tags: string[];
}

export const templateMetadata: TemplateMetadata = {
  id: "crowdera-ngo-premium-v1",
  name: "Crowdera Premium NGO & Non-Profit Template",
  description: "A highly customizable, responsive, accessibility-first template for Registered Non-Profit Organizations. Driven entirely by configuration with multiple layout variants per section.",
  category: "Non-Profit / Fundraising",
  supportedCauses: [
    "education",
    "healthcare",
    "environment",
    "animal-welfare",
    "disaster-relief",
    "faith-based",
    "community",
    "arts",
    "humanitarian"
  ],
  supportedLayouts: [
    "single-page-anchor",
    "multi-page-dynamic"
  ],
  supportedThemes: [
    "warm-terracotta",
    "forest-green",
    "ocean-breeze",
    "royal-purple",
    "slate-gray"
  ],
  supportsDarkMode: true,
  supportsRTL: false,
  supportsVideoHero: true,
  supportsGallery: true,
  supportsAnimations: true,
  version: "1.0.0",
  author: "Crowdera Engineering & Design System Team",
  license: "MIT",
  tags: [
    "ngo",
    "nonprofit",
    "fundraising",
    "donations",
    "causes",
    "configurable",
    "accessibility-first",
    "tailwind"
  ]
};
