# Crowdera Nonprofit Website Template — Build Spec

## 0. Context
Crowdera is a no-code website builder for Registered Non-Profit Organizations (RNPOs).
We are designing ONE production-ready, fully reusable homepage template (+ 1-2 internal
pages) that works for any cause type (education, healthcare, animal welfare, environment,
disaster relief, faith-based, community, arts, humanitarian) without redesign — only
content/token swaps.

Stack: React / Next.js, Tailwind CSS, component-based architecture, MERN-compatible.

## 1. Design Research Findings (informing decisions below)
- **charity: water**: bold single-idea branding, radical transparency (map donors' funds
  to real projects), hopeful/positive imagery over guilt-driven, pyramid IA (light top
  pages, dense subpages).
- **WaterAid / Farm Africa**: hero video + emotional storytelling, scroll-triggered
  reveal of mission statement, content filterable by theme/region.
- **Obama Foundation**: split-screen scroll (fixed text panel, scrolling imagery), tight
  5-item nav even for broad-scope orgs.
- **2026 Awwwards trends**: oversized expressive typography as a hero element,
  scrollytelling (content reveals on scroll), mature/restrained glassmorphism, dark mode
  as a real default (not just a toggle), micro-interactions over heavy motion,
  mobile-first responsive as baseline.

**Design principle for this project**: Emotional storytelling + radical transparency +
clear CTAs, expressed through a bold-but-restrained component system that any RNPO can
re-skin via tokens (color, type, imagery) without touching layout code.

## 2. Design System (tokens — implement as Tailwind config + CSS variables)

### Typography
- Display font: one bold expressive variable font (e.g. for hero headlines,
  oversized, 2026-trend aligned)
- Body font: clean, highly readable sans-serif
- Scale: use a modular scale (e.g. 1.25 ratio), min body 16px, hero headline
  clamp()-based fluid sizing for responsiveness
- Line-height: 1.5 body, 1.1-1.2 display

### Color System (token-based, per-org themeable)
- `--color-primary` (org brand color, donation CTAs)
- `--color-secondary` (accent)
- `--color-neutral-*` (backgrounds, text, borders — 5-6 shades)
- `--color-success` / `--color-warning` (form states)
- Support light AND dark mode as first-class token sets, not just inverted colors
- Contrast: WCAG AA minimum on all text/background pairs (this is judged — 10%)

### Spacing & Grid
- 8px base spacing unit
- 12-column grid desktop, 8-col tablet, 4-col mobile
- Breakpoints: mobile <640px, tablet 640-1024px, desktop >1024px

### Core Components (build as independent, reusable React components)
- Button (primary/secondary/ghost, with hover/focus/active/disabled states)
- Card (image, title, description, CTA slot — used by Programs, News, Testimonials)
- Badge/Tag
- Form input (text, email, select) with validation states
- Carousel (used by Hero, Testimonials, Programs, Gallery)
- Animated counter (Impact Stats)
- Modal / Lightbox (Gallery)
- Navigation (sticky, responsive, mobile drawer)

## 3. Page Sections — Component Specs

For each: build as a standalone component accepting a content/config prop object, so
swapping org content never touches layout code.

1. **Hero Banner** — variants: image, video, carousel. Props: headline, subhead, primary
   CTA, secondary CTA, media, overlay opacity. Mobile: video auto-pauses/replaces with
   static image to protect performance.
2. **Navigation Header** — logo slot, nav items (max 5-6 for scan-ability per Obama
   Foundation pattern), sticky on scroll, Donate button always visually dominant,
   mobile hamburger → full-screen drawer.
3. **About Organization** — flexible layout component supporting text+image,
   text+video, text-only, icon-grid variants via a `layout` prop.
4. **Impact Statistics** — animated counters, trigger on scroll-into-view, config array
   of {value, label, icon}.
5. **Programs** — card grid (≤3 visible) → carousel if >3, each card: image, title,
   short desc, CTA.
6. **Testimonials** — carousel, card: photo, quote, name, role, org, optional rating.
   Quotes should be short (design constraint, not just copy constraint).
7. **Gallery** — grid/masonry toggle, lightbox on click, image+video mixed support.
8. **News & Updates** — card grid: image, date, title, summary, Read More.
9. **CTA Section** — full-width band, single dominant action (Donate/Volunteer/Sponsor),
   config-driven so any CTA type reuses the same component.
10. **Footer** — contact info, social links, newsletter signup, quick links, legal.

## 4. Interaction & Motion Guidelines
- Scroll-triggered reveals for Impact Stats, About, and section entrances (IntersectionObserver-based, not scroll-jacking)
- Micro-interactions on buttons/cards (subtle scale/shadow on hover, not heavy animation)
- Respect `prefers-reduced-motion`
- No motion should block content from loading/being readable without JS (progressive enhancement)

## 5. Accessibility Requirements (non-negotiable, 10% of score)
- Semantic HTML landmarks (nav, main, footer, header)
- All interactive elements keyboard-navigable with visible focus states
- Alt text placeholders on every image slot in the config schema
- Color contrast AA minimum
- Form labels + error messaging associated via aria

## 6. Build Order (for spec-driven agent workflow)
1. Design tokens (Tailwind config, CSS variables) — foundation for everything else
2. Core components (Button, Card, Carousel, Counter, Nav) in isolation (Storybook-style
   or a `/components-preview` route)
3. Section components built from core components
4. Homepage assembly from sections with sample org content (pick one cause type, e.g.
   education NGO, as the demo dataset)
5. Responsive pass: mobile-first, then tablet, then desktop refinements
6. One internal page (e.g. Programs detail or Donate page) reusing the same components
7. Accessibility audit pass
8. Dark mode pass (bonus points)

## 7. Deliverable Checklist
- [ ] Component library (documented, reusable)
- [ ] Style guide (tokens, type scale, color, spacing)
- [ ] Responsive homepage (mobile/tablet/desktop)
- [ ] 1 internal page
- [ ] Design rationale doc (why these choices map to judging criteria)
- [ ] GitHub repo
- [ ] Deployed link
