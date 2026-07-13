# Information Architecture — Decoupled NGO Template Engine

This document details the Information Architecture (IA), configuration schemas, routing structure, and component data flows of the Crowdera NGO template engine.

---

## 1. Directory Structure & Layout Map

The project is structured to enforce strict separation of concerns between content, configuration, reusable design primitives, and route handlers.

```
NGO_Template_Crowdera/
├── app/                        # Next.js App Router root
│   ├── layout.tsx              # Global layout with font providers & HTML structure
│   ├── page.tsx                # Crowdera Gallery landing page (index)
│   ├── templates/              # Landing page for templates
│   │   ├── page.tsx            # Visual grid of the 9 NGO cause templates
│   │   └── demo/               # Live Template Builder/Customizer
│   │       └── page.tsx        # Interactive customizer panel & preview iframe
│   └── sites/                  # Multi-tenant sub-site handler
│       └── [cause]/            # Dynamic route segment (e.g. /sites/healthcare)
│           ├── page.tsx        # Render page for standalone cause site
│           └── layout.tsx      # Scoped layout ensuring standalone navigation
├── components/                 # React UI components
│   ├── core/                   # Design Primitives (design system tokens)
│   │   ├── Badge.tsx           # Accessible pills/status tokens
│   │   ├── Button.tsx          # Focus-trapped, polymorphic button primitive
│   │   ├── Card.tsx            # Flexbox container primitive with hover effects
│   │   └── Section.tsx         # Semantic layout section container
│   ├── sections/               # Polymorphic template sections
│   │   ├── HeroSection.tsx     # Morphic hero slider / static split screen
│   │   ├── AboutSection.tsx    # Text-image / grid about section
│   │   ├── GallerySection.tsx  # Lightbox-integrated grid / masonry / carousel
│   │   └── ...                 # Other section renderers (Stats, Programs, Testimonials, News, CTA)
│   └── customizer/             # Layout & Style customizer components
├── content/                    # Data Configurations (the database layer)
│   ├── demo_configs.ts         # The 9 NGO presets (primary configurations)
│   └── default_themes.ts       # Branding HSL color presets
├── docs/                       # Technical and design documentation
├── public/                     # Static assets (images/orgs, videos, icons)
└── scripts/                    # Utilities (downloaders, checkers)
```

---

## 2. Dynamic Routing & Rendering Pipeline

The system renders sites in two distinct modes: **Standalone Cause Sites** (read-only for production deploy) and the **Live Customizer Demo** (interactive client-side builder).

### Dynamic URL Resolution Pipeline

```mermaid
graph TD
    A[User requests /sites/healthcare] --> B(app/sites/[cause]/page.tsx)
    B --> C{cause parameter exists in demoOrganizations?}
    C -- Yes --> D[Load Organization Configuration]
    C -- No --> E[Render 404 Page]
    D --> F[Inject Scoped Navigation & Global Theme HSL variables]
    F --> G[Iterate over Section Configs & Render Polymorphic Components]
    
    H[User requests /templates/demo] --> I(app/templates/demo/page.tsx)
    I --> J[Initialize React State with Selected Preset]
    J --> K[Render Customizer Panel left + Live Preview iframe right]
    K --> L[PostMessage communication synchronizes State changes to iframe]
```

---

## 3. Configuration & Data Model Schema

All cause variations are governed by a unified TypeScript schema. By editing a single config file (`content/demo_configs.ts`), developers can reshape the styling, structure, and text of any NGO template.

### Data Types Overview

The following interfaces govern the layout engine:

```typescript
export interface OrgDemoPreset {
  id: string;
  name: string;
  cause: string;
  description: string;
  theme: BrandingTheme;
  layout: LayoutConfig;
  content: OrgContent;
}

export interface BrandingTheme {
  primary: string;         // HSL: "210 100% 50%"
  secondary: string;
  accent: string;
  radius: "none" | "sm" | "md" | "lg" | "full";
  fontFamily: "sans" | "serif" | "mono" | "outfit" | "inter";
}

export interface LayoutConfig {
  navigation: {
    sticky: boolean;
    style: "classic" | "centered" | "minimal";
  };
  hero: {
    variant: "slider" | "split" | "centered";
  };
  programs: {
    variant: "grid" | "carousel" | "list";
  };
  gallery: {
    variant: "grid" | "masonry" | "carousel";
  };
  testimonials: {
    variant: "grid" | "carousel" | "masonry" | "featured";
  };
  news: {
    variant: "grid" | "list" | "timeline" | "magazine" | "cards";
  };
}
```

---

## 4. Decoupled Design Engine and State Propagation

### Root Variable Theming
Rather than writing CSS override sheets for each organization, the customizer and dynamic renderer apply Tailwind theme values dynamically by appending HSL CSS variables directly to the root element:

```html
<style>
  :root {
    --primary: 142.1 70.6% 45.3%;
    --primary-foreground: 144 100% 97%;
    --secondary: 138 24% 90%;
    --radius: 0.5rem;
    --font-family: 'Outfit', sans-serif;
  }
</style>
```

Tailwind handles the rest by mapping these variables to classes like `bg-primary`, `text-primary-foreground`, and `rounded-lg`.

---

## 5. SEO & Metadata Strategy

To ensure optimal search visibility and indexability, each dynamic site dynamically constructs its SEO tags based on its cause config:

- **Dynamic Head Generation**: The page `app/sites/[cause]/page.tsx` utilizes `generateMetadata()` to query `content/demo_configs.ts` and fetch custom titles and descriptions (e.g., `"HealAll NGO — Medical Outreach Camps for Rural Families"`).
- **Semantic DOM Headers**: The dynamic layouts strictly restrict headers to a single `<h1>` tag inside the hero component, forcing lower-level program cards and news feeds to use `<h2>` and `<h3>` tags in order.
