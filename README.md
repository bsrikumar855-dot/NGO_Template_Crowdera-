# Crowdera NGO Website Template System

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c8a1492-dce9-40de-a5d6-848e65abde04/deploy-status)](https://crowdera-ngo-templates.netlify.app)
**Live Demo:** [https://crowdera-ngo-templates.netlify.app](https://crowdera-ngo-templates.netlify.app)

> A professional, configuration-driven, multi-tenant website template system designed for registered non-profit organizations. Built with Next.js 14 (App Router), TypeScript, and TailwindCSS.

---

## 📖 Table of Contents
1. [Project Overview](#project-overview)
2. [Problem Statement & Solution](#problem-statement--solution)
3. [Screenshots](#-screenshots)
4. [Architecture Overview & Design Rationale](#-architecture-overview--design-rationale)
5. [Design System & Theme Tokens](#design-system--theme-tokens)
6. [Template Customization Engine](#template-customization-engine)
7. [Cause Presets & Default Themes](#-cause-presets--default-themes)
8. [Folder Structure](#folder-structure)
9. [Technology Stack](#-technology-stack)
10. [Configuration Guides](#configuration-guides)
    * [How to Add New Organizations](#how-to-add-new-organizations)
    * [How to Add New Themes](#how-to-add-new-themes)
    * [How to Add New Templates](#how-to-add-new-templates)
11. [Accessibility & Performance Standards](#accessibility--performance-standards)
12. [Local Development Setup](#-local-development-setup)
13. [Deployment Guide](#deployment-guide)
14. [License & Contributors](#license--contributors)

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

## 📸 Screenshots

The template engine is responsive across desktop (1440px), tablet (768px), and mobile (375px) viewports:

### Homepage Layouts
* **Desktop (1440px)**
  ![Homepage Desktop](./docs/screenshots/homepage-desktop.png)
  *Full-bleed header and hero carousel, side-by-side about elements, and news cards.*

* **Tablet (768px)**
  ![Homepage Tablet](./docs/screenshots/homepage-tablet.png)
  *Wrapped column metrics, adjusted spacing grids, and tab navigation layout.*

* **Mobile (375px)**
  ![Homepage Mobile](./docs/screenshots/homepage-mobile.png)
  *Single-column visual hierarchy with responsive touch controls.*

### Template Gallery Layouts
* **Desktop (1440px)**
  ![Gallery Desktop](./docs/screenshots/gallery-desktop.png)
  *Grid profile with 3 columns showcasing presets with direct customize action buttons.*

* **Tablet (768px)**
  ![Gallery Tablet](./docs/screenshots/gallery-tablet.png)
  *2-column grid wrapping cause badges and Unsplash thumbnails.*

* **Mobile (375px)**
  ![Gallery Mobile](./docs/screenshots/gallery-mobile.png)
  *Standardized single column preview card stream.*

> [!NOTE]
> If these screenshot files are missing in your local directory, run `node copy_screenshots.js` to transfer the captured browser assets to your workspace folder.

---

## 🏛️ Architecture Overview & Design Rationale
For detailed documentation on the architecture, engineering principles, and core design patterns of this template system, refer to:
* **[Design Rationale Guide (docs/DESIGN_RATIONALE.md)](./docs/DESIGN_RATIONALE.md)**: Reviews the problem, decoupled architecture details, accessibility compliance, and design decisions.
* **[Accessibility & Landmark Audit (docs/A11Y_AUDIT.md)](./docs/A11Y_AUDIT.md)**: Detailing headings structure, landmarks, focus outlines, and WCAG AA checklist.
* **[Architecture Guide (docs/ARCHITECTURE.md)](./docs/ARCHITECTURE.md)**: Details the design patterns, page wrapper context, and layout lifecycle.
* **[Template Engine (docs/TEMPLATE_ENGINE.md)](./docs/TEMPLATE_ENGINE.md)**: Reviews polymorphic rendering mechanics, layout rules, and selector states.
* **[Theming Guide (docs/THEMING.md)](./docs/THEMING.md)**: Explains HSL variables mapping, dark mode setup, and browser runtime variables.
* **[Design System Guide (docs/DESIGN_SYSTEM.md)](./docs/DESIGN_SYSTEM.md)**: Explores spacing, typography, scale rules, and component tokens.

---

## 📋 Cause Presets & Default Themes

The template system bundles 9 production-ready cause presets, configured with cause-appropriate copy, statistics, media, and default themes:

| Preset ID | Cause Name | Primary Organization | Default Theme | Font Preset |
| :--- | :--- | :--- | :--- | :--- |
| `education` | Education | Vidyalaya Foundation | Hope Blue (`hope-blue`) | Plus Jakarta Sans / Inter |
| `healthcare` | Healthcare | HealAll Foundation | Healthcare Cyan (`healthcare-cyan`) | Plus Jakarta Sans / Inter |
| `animal` | Animal Welfare | Paws & Claws | Sunrise Orange (`sunrise-orange`) | Plus Jakarta Sans / Inter |
| `environment` | Environment | EcoShield | Forest Green (`forest-green`) | Plus Jakarta Sans / Inter |
| `humanitarian` | Humanitarian | Bridgeway Relief | Hope Blue (`hope-blue`) | Plus Jakarta Sans / Inter |
| `faithBased` | Faith-Based | Grace & Light | Hope Blue (`hope-blue`) | Plus Jakarta Sans / Inter |
| `communityDevelopment` | Community | Forward Community | Forest Green (`forest-green`) | Plus Jakarta Sans / Inter |
| `artsCulture` | Arts & Culture | Canvas Collective | Sunrise Orange (`sunrise-orange`) | Plus Jakarta Sans / Inter |
| `disasterRelief` | Disaster Relief | Rapid Response Corps | Dark Neutral (`dark-neutral`) | Plus Jakarta Sans / Inter |

---

## 🗄️ Folder Structure
```
├── app/                      # Next.js App Router Pages
│   ├── donate/               # Checkout / Payment Simulator Flow
│   ├── programs/             # Program Search, Filters & Slugs Page
│   ├── templates/demo/       # Live Personalization Sandbox / Customizer Panel
│   ├── legal/[slug]/         # Reusable Legal Prose Template
│   ├── style-guide/          # Interactive Design System Token Inspector
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
* **Animations**: Framer Motion (Scroll reveal and hover scaling)
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

### Prerequisites
- Node.js version 18.x or 20.x
- npm version 9.x or higher

### Installation
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
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the templates.

---

## 📝 License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.