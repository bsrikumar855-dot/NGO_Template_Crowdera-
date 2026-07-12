# 🦾 Skill: Crowdera NGO Website Template Customization System

This skill file documents the architectural patterns, configurations, and schemas required to deploy and maintain the configuration-driven Crowdera NGO Website Template System.

---

## 1. Architectural Foundations

### The 3-Tier Decoupling
To customize or spin up new instances, maintain strict isolation between:
1. **Layout Structure (Template)**: Maps specific design settings and fonts.
2. **Branding Colors (Theme)**: Maps HSL color keys.
3. **Copy Assets (Organization)**: Contains all textual info, donation levels, and metrics.

```
    [ Organization Copy ] (Text, Assets, Metrics)
               ↓
    [ Branding Theme  ] (HSL variables)
               ↓
    [ Template Layout ] (Variants, Grid)
```

---

## 2. Config Schemas Reference

### ThemeConfig (`types/theme.ts`)
Must map Light and Dark mode options using clean, unit-less HSL color parameters:
```typescript
export interface ColorPalette {
  primary: string;                  // e.g. "220 80% 30%"
  primaryForeground: string;        // e.g. "0 0% 98%"
  primarySubtle: string;
  secondary: string;
  secondaryForeground: string;
  neutral: Record<number, string>;  // Shades 50 - 950
  background: string;
  foreground: string;
  surface: string;
  surfaceElevated: string;
  border: string;
  muted: string;
  mutedForeground: string;
  ring: string;
}
```

### TemplatePreset (`content/demo_configs.ts`)
Declares standard fonts, border-radius sets, and layout defaults:
```typescript
export interface TemplatePreset {
  id: string;
  name: string;
  typography: { fontDisplay: string; fontBody: string; };
  radius: { sm: string; base: string; md: string; lg: string; xl: string; };
  variants: {
    hero: "image" | "video" | "carousel";
    about: "text-image" | "image-text" | "text-only" | "icon-grid";
    gallery: "grid" | "masonry" | "carousel";
    cta: "centered" | "split" | "image-background" | "minimal";
  };
}
```

---

## 3. Scoped Variable Dynamic Injection
Remap branding colors instantly on the client side by compiling configurations into scoped CSS variables within a custom `<style>` block:

```typescript
const buildScopedThemeVars = (themeConfig: ThemeConfig, template: TemplatePreset) => {
  return `
    .demo-preview-scope {
      --color-primary: ${themeConfig.light.colors.primary};
      --font-display: ${template.typography.fontDisplay};
      --radius-md: ${template.radius.md};
      /* ... rest of tokens ... */
    }
  `;
}
```

---

## 4. Accessibility Checklist
* **Visible Outline Focus**: Active buttons must implement `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.
* **Form Association**: Ensure all inputs possess an `id` that links directly to a corresponding `htmlFor` property on the `<label>`.
* **Skip Navigation Links**: Include a dynamic keyboard skip-to-content anchor in layout shells.
