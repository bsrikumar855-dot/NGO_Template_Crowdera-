# Crowdera NGO Website Template System

> A professional, configuration-driven, multi-tenant website template system designed for registered non-profit organizations. Built with Next.js 14 (App Router), TypeScript, and TailwindCSS.

---

## 📖 Table of Contents
1. [Project Overview](#project-overview)
2. [Problem Statement & Solution](#problem-statement--solution)
3. [Architecture Overview](#architecture-overview)
4. [Design System & Theme Tokens](#design-system--theme-tokens)
5. [Template Customization Engine](#template-customization-engine)
6. [Folder Structure](#folder-structure)
7. [Technology Stack](#technology-stack)
8. [Configuration Guides](#configuration-guides)
    * [How to Add New Organizations](#how-to-add-new-organizations)
    * [How to Add New Themes](#how-to-add-new-themes)
    * [How to Add New Templates](#how-to-add-new-templates)
9. [Accessibility & Performance Standards](#accessibility--performance-standards)
10. [Local Development Setup](#local-development-setup)
11. [Deployment Guide](#deployment-guide)
12. [License & Contributors](#license--contributors)

---

## 🌟 Project Overview
This project is a high-performance, responsive, and fully customizable website template engine designed to be integrated directly into **Crowdera's Website Builder Platform**. Rather than hardcoding organisation content or styling configurations, the entire user experience is split into three decoupled, interchangeable layers:

```
    [ Template Layout Layer ] ── (Hope Modern, Unity Clean, Impact Bold)
               ↓
    [ Branding Theme Layer ]  ── (Hope Blue, Forest Green, Healthcare Cyan, etc.)
               ↓
    [ Organization Content ]  ── (Vidyalaya, HealAll, Paws & Claws, EcoShield)
```

By swapping configurations, any NGO can launch a custom, accessibility-compliant web presence instantly.

---

## ⚠️ Problem Statement & Solution
### The Problem
Building individual website instances for thousands of distinct NGOs leads to code duplication, design system violations, maintenance bottlenecks, and inconsistent accessibility support.

### The Solution
A unified core component library that renders layout variations dynamically based solely on a structured configuration API. 
* **Zero Component Duplication**: Layout forms are parsed dynamically (e.g., Carousel vs. Video Hero, Grid vs. Masonry Gallery).
* **Instant Brand Re-skinning**: Scoped HSL variable injection maps color palettes instantly.
* **100% Config-Driven**: All organization titles, campaign tiers, media, and structural variants are loaded from isolated configurations.

---

## 🏛️ Architecture Overview
For detailed documentation on the architecture and core design patterns of this template system, refer to:
* **[Architecture Guide (docs/ARCHITECTURE.md)](./docs/ARCHITECTURE.md)**: Details the design patterns, page wrapper context, and layout lifecycle.
* **[Template Engine (docs/TEMPLATE_ENGINE.md)](./docs/TEMPLATE_ENGINE.md)**: Reviews polymorphic rendering mechanics, layout rules, and selector states.
* **[Theming Guide (docs/THEMING.md)](./docs/THEMING.md)**: Explains HSL variables mapping, dark mode setup, and browser runtime variables.
* **[Design System Guide (docs/DESIGN_SYSTEM.md)](./docs/DESIGN_SYSTEM.md)**: Explores spacing, typography, scale rules, and component tokens.

---

## 🗄️ Folder Structure
```
├── app/                      # Next.js App Router Pages
│   ├── donate/               # Checkout / Payment Simulator Flow
│   ├── programs/             # Program Search, Filters & Slugs Page
│   ├── templates/demo/       # Live Personalization Sandbox / Customizer Panel
│   ├── globals.css           # Global Style Declarations & Base Utility Classes
│   ├── layout.tsx            # Global Shell (Navbar, Footer, Providers)
│   └── page.tsx              # Dynamic Homepage Assembly
├── components/               # Core Component Library
│   ├── core/                 # Design System Primitives (Heading, Section, Breadcrumb, etc.)
│   ├── sections/             # Polymorphic Sections (Hero, About, Gallery, CTA, etc.)
│   ├── navigation/           # Accessible Navbar & Hamburger Drawer
│   └── footer/               # Standardized Multi-Column Footer
├── config/                   # Template Metadata and Registration Configuration
├── content/                  # Organization Content and Presets Configurations
├── types/                    # TypeScript Type Definitions & API Schemas
└── docs/                     # Detailed Engineering Architecture Guides
```

---

## 🛠️ Technology Stack
* **Framework**: Next.js 14 (App Router)
* **Language**: TypeScript (Strict Typings)
* **Styling**: TailwindCSS & CSS Variables (HSL)
* **Icons**: Lucide React
* **Components**: Radix UI primitives / CVA (Class Variance Authority)

---

## ⚙️ Configuration Guides

### How to Add New Organizations
1. Open `content/demo_configs.ts`.
2. Add a new configuration preset matching the `OrgDemoPreset` schema:
```typescript
export const myNewOrg: OrgDemoPreset = {
  id: "org-new",
  name: "My NGO Foundation",
  tagline: "Making a difference",
  causeType: "Community",
  org: { ... },
  homepage: { ... }
};
```
3. Export the organization inside the `demoOrganizations` record map.

### How to Add New Themes
1. Open `content/demo_configs.ts`.
2. Create a new `ThemeConfig` entry defining HSL values for both light and dark modes:
```typescript
export const forestGreenTheme: ThemeConfig = {
  id: "theme-forest",
  name: "Forest Green",
  light: {
    colors: {
      primary: "140 70% 25%",
      primaryForeground: "0 0% 98%",
      // ... rest of tokens ...
    }
  },
  dark: { ... }
};
```
3. Add the theme to the `demoThemes` export list.

### How to Add New Templates
1. Open `content/demo_configs.ts`.
2. Insert a new configuration into `demoTemplates` matching the `TemplatePreset` interface:
```typescript
export const cleanMinimal: TemplatePreset = {
  id: "clean-minimal",
  name: "Clean Minimal Layout",
  typography: { fontDisplay: "Outfit", fontBody: "Inter" },
  radius: { sm: "2px", base: "4px", md: "6px", lg: "8px", xl: "12px" },
  variants: {
    hero: "image",
    about: "text-only",
    gallery: "grid",
    cta: "minimal"
  }
};
```

---

## ♿ Accessibility & Performance Standards
* **WCAG 2.1 AA Compliance**: Built using HTML5 semantic elements, linked labels, minimum 48px touch targets, skip links, and tab key focus outlines.
* **Core Web Vitals**: Memoized style compiling, next/image optimization, and static layout generation support high lighthouse auditing benchmarks.

---

## 💻 Local Development Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/crowdera/ngo-template.git
   cd ngo-template
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the local development server:
   ```bash
   npm run dev
   ```
4. Access the application at `http://localhost:3000`.

---

## 📝 License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.