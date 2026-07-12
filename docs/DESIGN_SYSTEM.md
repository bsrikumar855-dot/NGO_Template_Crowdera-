# 🎨 Design System Guide — Crowdera NGO Template System

This document outlines the core layout units, font declarations, and border-radius tokens in the Crowdera design system.

---

## 1. Typography Hierarchy
Typography is split into two variable sets:
* **Display Font (`--font-display`)**: Applied to headings (`h1`–`h6`), badge indicators, and navigation links. Configured with readable modern display styles like *Plus Jakarta Sans* or *Outfit*.
* **Body Font (`--font-body`)**: Applied to paragraphs, captions, input forms, and descriptive texts. Default is *Inter*.

### Font Scaling Scales
* **Hero Heading**: `text-[clamp(3rem,8vw+1rem,7rem)]`
* **Large Title**: `text-4xl`
* **Section Title**: `text-2xl`
* **Subtitle / Body Large**: `text-lg`
* **Default Body**: `text-sm` or `text-base`
* **Caption / Label**: `text-xs`

---

## 2. Rounded Borders (Radius Scaling)
Radius tokens adjust dynamically based on the active template preset layout.
* `var(--radius-sm)`: Default small targets (e.g. badges, tooltips).
* `var(--radius-base)`: Default base targets (e.g. cards, checkout form boxes).
* `var(--radius-md)`: Rounded panels (e.g. testimonial elements, buttons).
* `var(--radius-lg)`: Outer layout sections (e.g. hero cards, checkout containers).
* `var(--radius-xl)`: Large background visual bounds.

---

## 3. Shadows & Focus Outlines
* **Focus Outline**: Keyboard navigation highlights elements with `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.
* **Elevation Classes**:
  * `shadow-elevation-1`: Soft card boundaries.
  * `shadow-elevation-3`: Modal popups (e.g. lightbox, builder options drawer).
  * `shadow-elevation-5`: Floating interactive customizer buttons.
