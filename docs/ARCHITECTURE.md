# 🏛️ Architecture Overview — Crowdera NGO Template System

This document outlines the core architectural patterns and design principles governing the Crowdera NGO Website Template System.

---

## 1. Core Architectural Pillars
The architecture decouples content, branding, and layout styles entirely. No organization-specific values or stylistic overrides are hardcoded into components.

```
                  ┌──────────────────────┐
                  │  Organization Copy  │ (Text, Assets, Metrics)
                  └──────────┬───────────┘
                             │
                             ▼
┌──────────────────┐    ┌──────────┐    ┌─────────────────┐
│ Template Layout  │───►│ Page Shell│◄───│ Branding Theme  │
│ (Variants, Grid) │    │ (Client) │    │ (HSL variables) │
└──────────────────┘    └──────────┘    └─────────────────┘
```

1. **Copy Decoupling**: Headings, media, donation goals, and metadata live in `content/` configurations.
2. **Dynamic Branding**: Colors and border-radii are represented as CSS custom properties mapped via HSL ranges.
3. **Polymorphic Rendering**: Layout grids change shape (e.g. Masonry, Fixed Grid, Carousel) by switching a `variant` property inside the section configuration objects.

---

## 2. Shell & Context Life Cycle
* **PageWrapper (`components/layout/PageWrapper.tsx`)**: Wraps page content. It implements keyboard skip-to-content links and core body overflow handling.
* **ThemeProvider (`components/core/ThemeProvider.tsx`)**: Implements CSS variables injection and supports dark/light mode state syncing.
* **Navbar & Scroll Observer**: Employs an IntersectionObserver to detect which section of the page is active, auto-updating navigation link states.

---

## 3. Dynamic Rendering Workflow
When a page loads:
1. **Config Resolver**: Next.js parses the metadata and cause presets.
2. **Style Injector**: CSS HSL colors and template layout dimensions are mapped to custom CSS variables.
3. **Section Composer**: The main page maps configurations to core section components (`HeroSection`, `AboutSection`, etc.), which select layouts dynamically based on `config.variant`.

---

## 4. Next.js App Router Integrations
* **Static Generation**: Dynamic pages like `/programs/[slug]` implement `generateStaticParams` to build static HTML pages ahead of time, optimizing loading speeds and SEO.
* **SEO Metadata**: Static metadata objects are exported on each page, using dynamic values parsed from `organization` configuration files.
