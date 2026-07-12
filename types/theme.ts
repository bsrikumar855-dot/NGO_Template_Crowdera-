/**
 * THEME TYPES
 *
 * These types define the shape of every configurable token in the
 * Crowdera template system. Organizations provide a ThemeConfig
 * object; the ThemeProvider converts it into CSS custom properties.
 */

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface ColorTokens {
  primary: string;
  primaryForeground: string;
  primarySubtle: string;
  secondary: string;
  secondaryForeground: string;
  neutral: ColorScale;
  success: string;
  warning: string;
  error: string;
  background: string;
  foreground: string;
  surface: string;
  surfaceElevated: string;
  border: string;
  muted: string;
  mutedForeground: string;
  ring: string;
}

export interface TypographyTokens {
  fontDisplay: string;
  fontBody: string;
  fontMono: string;
}

export interface RadiusTokens {
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
}

export interface ShadowTokens {
  elevation1: string;
  elevation2: string;
  elevation3: string;
  elevation4: string;
  elevation5: string;
  inner: string;
  glow: string;
  glowPrimary: string;
}

export interface ThemeMode {
  colors: ColorTokens;
  shadows?: Partial<ShadowTokens>;
}

export interface ThemeConfig {
  id: string;
  name: string;
  description?: string;
  light: ThemeMode;
  dark?: ThemeMode;
  typography?: Partial<TypographyTokens>;
  radius?: Partial<RadiusTokens>;
}
