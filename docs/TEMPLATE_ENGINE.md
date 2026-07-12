# ⚙️ Template Customization Engine Guide

This document explains the dynamic layout rendering, configuration selectors, and customization architecture.

---

## 1. Customization Engine Lifecycle
The system acts as a sandbox builder. Toggling presets dynamically alters:
1. The **Organization Config** (changes titles, stats, programs data, media files).
2. The **Theme Config** (recompiles HSL values).
3. The **Template Layout** (updates core layout choices like Video Hero, Grid Gallery, or Centered CTA).

---

## 2. Layout Overrides Mapping
The template engine maps section layouts to explicit component variations:

### HeroSection Variants
* `carousel`: Standard slide indicators with image media.
* `video`: Background video clip looping under an overlay.
* `image`: Static container optimized for quick loading speeds.

### AboutSection Variants
* `text-image`: Text block on the left, media on the right.
* `image-text`: Media block on the left, text on the right.
* `text-only`: Fully centered text and statistics.
* `icon-grid`: Interactive icon grid showcasing cause pillars.

### GallerySection Variants
* `grid`: Aspect-locked grid with lightboxes.
* `masonry`: Variable-height columns.
* `carousel`: Slideshow with filter controls.

### CallToActionSection Variants
* `split`: Two-column action panel.
* `centered`: Main title and dual buttons.
* `image-background`: Dark image overlay.
* `minimal`: Single row action band.

---

## 3. Selector Controls & Sandbox
The builder panel `/templates/demo` provides sandbox configuration inputs. Developers and judges can override specific layout variants, toggle dark mode, or disable motion to verify performance compliance.
