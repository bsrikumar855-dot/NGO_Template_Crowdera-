# 🏆 Hackathon Submission & Demo Script

This document details the walkthrough script, judge presentations, and demo flows for the Crowdera NGO Website Template System.

---

## 1. Submission Checklist
* [x] **Separation of Concerns**: Verified complete decoupling of Layout structure (Template), Branding colors (Theme), and Copy assets (Organization Content).
* [x] **Live Switcher Sandbox**: Dynamic preview panel at `/templates/demo` supports color re-skinning and layout updates in real-time.
* [x] **Accessibility Standard**: Form-label links, focus visible rings, and prefers-reduced-motion checks validated for WCAG AA criteria.
* [x] **SEO Optimized**: Static metadata, sitemaps, robots rules, and manifest rules pre-configured.

---

## 2. Walkthrough & Presentation Talking Points
* **The "Multi-Tenant" Challenge**: Discuss how hardcoding organisation data creates massive development overhead. Introduce the configuration-driven approach.
* **HSL Color Space Mapping**: Explain how using CSS variables allows swapping light/dark themes instantly without rebuild cycles.
* **Component Polymorphism**: Highlight how section containers render multiple visual layouts automatically by consuming simple configuration keys.

---

## 3. Demo Walkthrough Flows

### 2-Minute Rapid Demo Flow
1. **Load Page**: Navigate directly to `/templates/demo`.
2. **Branding Swap**: Click "Healthcare Cyan" or "Sunrise Orange" color circles. Show the immediate color updates inside the preview scope.
3. **Copy Swap**: Choose "Paws & Claws (Animals)" copy. Show how headers, badges, statistics, and buttons update to animal rescue themes instantly.
4. **Layout Swap**: Choose "Unity Clean Layout" template. Demonstrate how cards and buttons transition from rounded borders to minimal sharp edges.

### 5-Minute Deep-Dive Demo Flow
1. **Explain Engine Goals**: Walk judges through the 3 decoupled configuration layers.
2. **Customize Section Variants**: Scroll down and use the dropdown selectors (e.g. Hero Layout → Video Background, About Layout → Interactive Icon Grid). Discuss how variants compile dynamically.
3. **Verify Dark Mode**: Toggle the preview container dark mode. Show how the cards adjust background layers automatically.
4. **Checkout Simulation**: Navigate to `/donate`. Select a donation tier, show dynamic impact descriptions, enter test donor details, and submit to view the simulated success summary receipt.
5. **Accessibility Check**: Tab through the menu, highlighting visible outline focus rings and keyboard skip links.
