/**
 * lib/fonts.ts
 *
 * Next.js font optimization via next/font/google.
 * Import these into app/layout.tsx and apply CSS variables.
 */
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Display font — Plus Jakarta Sans
 * Used for all headings. Bold, expressive, modern.
 * Supports variable font weights 200-800.
 */
export const fontDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  preload: true,
});

/**
 * Body font — Inter
 * Used for all body text. Highly readable, professional.
 * Loaded as variable font for full weight range.
 */
export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  preload: true,
});

/**
 * Mono font — JetBrains Mono
 * Used for code, registration numbers, IDs.
 */
export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
  preload: false,
});

/**
 * Combined CSS variable string for use in layout className
 */
export const fontVariables = [
  fontDisplay.variable,
  fontBody.variable,
  fontMono.variable,
].join(" ");
