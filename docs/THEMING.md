# 🎨 Theming Guide — Crowdera NGO Template System

This document outlines the HSL color token mapping and light/dark theme system.

---

## 1. Color Tokens & HSL Variables
Colors are stored as HSL coordinates (e.g. `220 80% 30%`), allowing the theme customizer to compute overlays and opacity variables dynamically:
* `--color-primary`: Main branding tone.
* `--color-secondary`: Accents and CTA highlights.
* `--color-background`: Main container background.
* `--color-foreground`: Main text color.
* `--color-surface`: Card container backgrounds.
* `--color-border`: Borders and dividers.

---

## 2. Dynamic client-side variables injection
In `/templates/demo`, switching themes compiles HSL values in a React string variable and injects them directly into a CSS wrapper block:
```typescript
const buildScopedThemeVars = (themeConfig: ThemeConfig, ...) => {
  return `
    .demo-preview-scope {
      --color-primary: ${colors.primary};
      --color-secondary: ${colors.secondary};
      /* ... */
    }
  `;
}
```
This enables real-time color styling changes inside the preview container without full page reloads or style collisions on the builder dashboard itself.

---

## 3. Dark Mode Configuration
Dark themes are declared inside the `ThemeConfig` under the `dark` block. The system matches classes like `.dark` on outer elements, swapping background levels, surface levels, and text colors automatically.
