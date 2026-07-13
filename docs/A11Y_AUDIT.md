# Accessibility (a11y) & Aria Landmark Audit

This document summarizes the accessibility standards, landmark check, heading hierarchies, keyboard focus states, and the results of our accessibility audit for the Crowdera NGO Website Template System.

---

## 1. Landmark Auditing
We verified that every page conforms to semantic HTML5 structure with clear aria landmarks. Assistive technologies (like screen readers) use these landmarks to navigate the pages efficiently.

* **Banner Landmark (`<header>` / `role="banner"`)**: Managed by the global `Navbar` component. It marks the main header of the site.
* **Navigation Landmark (`<nav>`)**: Declared inside the desktop Navbar and mobile drawer component to wrap header navigation links.
* **Main Landmark (`<main>` / `role="main"`)**: Defined in `components/layout/PageWrapper.tsx` (`MainContent`). Wraps all unique page views (homepage, templates, style-guide) and has `id="main-content"` for skip links.
* **Contentinfo Landmark (`<footer>` / `role="contentinfo"`)**: Declared in the `Footer` component to wrap columns of resource directories and social blocks.
* **Section Landmark (`<section>`)**: Used in `components/core/Section.tsx` for all secondary page content sections. Each section receives a descriptive `aria-label` or `aria-labelledby` based on its config (e.g., `aria-label="Programs"`).

---

## 2. Heading Hierarchy Audit
We audited page-level headings to enforce a logical hierarchy (a single `<h1>` per page, followed by sequential `<h2>` and `<h3>` tags):

* **Homepage (`/`)**: 
  - The single `<h1>` resides in the active slide of the `HeroSection`. Inactive slides are hidden with `aria-hidden="true"` and `pointer-events-none` to prevent screen reader noise.
  - Page sections (About, Programs, Gallery, News, etc.) use `<h2>` for their main section headings via the `SectionHeader` component.
  - Core sub-elements (like program titles, stories cards, or testimonial authors) use `<h3>` or `<h4>` elements.
* **Template Gallery Page (`/templates`)**:
  - Contains a single `<h1>` for "Explore NGO Templates" in the main intro container.
  - Organization card grids use `<h3>` for individual causes.
* **Style Guide Page (`/style-guide`)**:
  - Displays a single `<h1>` for "Design System Tokens".
  - Swatch panels and component categories use `<h2>` and `<h3>` elements sequentially.
* **Legal Prose Page (`/legal/[slug]`)**:
  - Single `<h1>` for document title.
  - Sections use `<h2>` and `<h3>`.

---

## 3. Keyboard Focus & Interaction Check
A manual review of keyboard behavior was conducted to ensure keyboard-only users can navigate the templates seamlessly:
* **Skip to Main Content Link**: A hidden anchor at the top of the body (`PageWrapper.tsx`) shifts focus directly to the `#main-content` container when `Tab` is pressed on page load.
* **Focus Outlines**: Styled using Tailwind's `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` utilities, ensuring custom buttons, links, inputs, and tab controllers present a high-visibility ring indicator.
* **Mobile Hamburger Drawer**: Operates with a focus trap on open, and can be dismissed via keyboard action (`Escape` key, click outside, or Close button).
* **Carousel & Lightbox overlays**: Keyboards can browse slide sequences and gallery lightboxes using `ArrowLeft` / `ArrowRight` and dismiss lightboxes using `Escape`.

---

## 4. Identified Gaps & Remediation

During the audit, we identified and successfully resolved the following accessibility gaps:

### Gap 1: Nested Focusable elements (Programs Section)
* **Status**: **Fixed**
* **Issue**: The program cards in `ProgramsSection.tsx` wrapped an active `<Button>` inside an anchor `<Link>` using `tabIndex={-1}` and `aria-hidden="true"`. This hid the action from screen readers while keeping the button focusable, causing a keyboard/screen-reader mismatch.
* **Remediation**: Removed the nested `<Button>` element. Refactored the anchor `<Link>` to be directly focusable and styled it with `buttonVariants({ variant: "secondary", size: "sm" })` from the design system primitives, ensuring both semantic validity and screen reader accessibility.

### Gap 2: Carousel Headings
* **Status**: **Fully Addressed**
* **Issue**: When using carousel sliders, multiple hidden slides contained `<h1>` elements.
* **Remediation**: Verified that the container of every inactive slide correctly maps `aria-hidden="true"` at the slide wrapper element. This successfully instructs screen readers to ignore the nested headings of hidden slides, ensuring only one `<h1>` is discoverable in the active page flow.

---

## 5. Compliance Scorecard
Based on WCAG 2.1 AA benchmarks:

| Standard | Status | Details |
| :--- | :--- | :--- |
| **1.1.1 Non-Text Content** | Pass | Alt text specified for all configured Unsplash assets in presets. |
| **1.3.1 Info and Relationships** | Pass | Clear headings structure and HTML5 semantic sectioning tags. |
| **2.1.1 Keyboard Accessible** | Pass | Direct link styled buttons, active outline states, and skip-link. |
| **2.4.1 Bypass Blocks** | Pass | Skip to Main Content link configured at layout root. |
| **2.4.2 Page Titled** | Pass | Page title configured through Next.js dynamic metadata API. |
| **2.4.4 Link Purpose** | Pass | Descriptive `aria-label` tags on icon links and card detail buttons. |
