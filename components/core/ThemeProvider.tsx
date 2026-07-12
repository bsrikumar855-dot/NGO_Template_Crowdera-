"use client";

/**
 * components/core/ThemeProvider.tsx
 *
 * Wraps the app in next-themes for dark/light mode support.
 * Also accepts an optional ThemeConfig to inject org-specific
 * CSS custom properties at runtime — enabling full re-theming
 * without redeployment.
 */
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeConfig } from "@/types";

/* ── Prop Types ─────────────────────────────────────────────── */
interface ThemeProviderProps {
  children: React.ReactNode;
  /** Organization theme config — optional, falls back to default */
  themeConfig?: ThemeConfig;
  /** Default mode: 'light' | 'dark' | 'system' */
  defaultTheme?: string;
}

/* ── Helper: convert ThemeConfig to CSS vars ─────────────────── */
function buildCSSVars(config: ThemeConfig, mode: "light" | "dark"): string {
  const theme = mode === "dark" ? config.dark ?? config.light : config.light;
  if (!theme) return "";

  const { colors } = theme;
  const lines: string[] = [];

  const set = (varName: string, value: string | undefined) => {
    if (value) lines.push(`  ${varName}: ${value};`);
  };

  set("--color-primary", colors.primary);
  set("--color-primary-foreground", colors.primaryForeground);
  set("--color-primary-subtle", colors.primarySubtle);
  set("--color-secondary", colors.secondary);
  set("--color-secondary-foreground", colors.secondaryForeground);
  set("--color-background", colors.background);
  set("--color-foreground", colors.foreground);
  set("--color-surface", colors.surface);
  set("--color-surface-elevated", colors.surfaceElevated);
  set("--color-border", colors.border);
  set("--color-muted", colors.muted);
  set("--color-muted-foreground", colors.mutedForeground);
  set("--color-ring", colors.ring);
  set("--color-success", colors.success);
  set("--color-warning", colors.warning);
  set("--color-error", colors.error);

  // Neutral scale
  if (colors.neutral) {
    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
    shades.forEach((shade) => {
      const val = colors.neutral[shade];
      if (val) set(`--color-neutral-${shade}`, val);
    });
  }

  // Typography
  if (config.typography) {
    if (config.typography.fontDisplay) set("--font-display", `"${config.typography.fontDisplay}", system-ui, sans-serif`);
    if (config.typography.fontBody) set("--font-body", `"${config.typography.fontBody}", system-ui, sans-serif`);
  }

  // Radius
  if (config.radius) {
    const r = config.radius;
    if (r.sm) set("--radius-sm", r.sm);
    if (r.base) set("--radius-base", r.base);
    if (r.md) set("--radius-md", r.md);
    if (r.lg) set("--radius-lg", r.lg);
    if (r.xl) set("--radius-xl", r.xl);
  }

  return lines.length > 0
    ? `:root {\n${lines.join("\n")}\n}`
    : "";
}

/* ── Component ──────────────────────────────────────────────── */
export function ThemeProvider({
  children,
  themeConfig,
  defaultTheme = "system",
}: ThemeProviderProps) {
  // Inject org-specific CSS vars as a style tag
  const lightVars = themeConfig ? buildCSSVars(themeConfig, "light") : null;
  const darkVars = themeConfig?.dark
    ? buildCSSVars(themeConfig, "dark")
    : null;

  return (
    <>
      {/* Org theme override styles */}
      {(lightVars || darkVars) && (
        <style
          id="org-theme-vars"
          dangerouslySetInnerHTML={{
            __html: [
              lightVars,
              darkVars ? `.dark {\n${darkVars}\n}` : "",
            ]
              .filter(Boolean)
              .join("\n\n"),
          }}
        />
      )}

      <NextThemesProvider
        attribute="class"
        defaultTheme={defaultTheme}
        enableSystem
        disableTransitionOnChange={false}
      >
        {children}
      </NextThemesProvider>
    </>
  );
}
