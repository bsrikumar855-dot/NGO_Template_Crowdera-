import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ─── COLOR TOKENS ─────────────────────────────────── */
      colors: {
        /* Primary brand — override via CSS vars per org */
        primary: {
          DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
          foreground: "hsl(var(--color-primary-foreground) / <alpha-value>)",
          subtle: "hsl(var(--color-primary-subtle) / <alpha-value>)",
        },
        /* Secondary / accent */
        secondary: {
          DEFAULT: "hsl(var(--color-secondary) / <alpha-value>)",
          foreground: "hsl(var(--color-secondary-foreground) / <alpha-value>)",
        },
        /* Neutral scale (6 shades) */
        neutral: {
          50: "hsl(var(--color-neutral-50) / <alpha-value>)",
          100: "hsl(var(--color-neutral-100) / <alpha-value>)",
          200: "hsl(var(--color-neutral-200) / <alpha-value>)",
          300: "hsl(var(--color-neutral-300) / <alpha-value>)",
          400: "hsl(var(--color-neutral-400) / <alpha-value>)",
          500: "hsl(var(--color-neutral-500) / <alpha-value>)",
          600: "hsl(var(--color-neutral-600) / <alpha-value>)",
          700: "hsl(var(--color-neutral-700) / <alpha-value>)",
          800: "hsl(var(--color-neutral-800) / <alpha-value>)",
          900: "hsl(var(--color-neutral-900) / <alpha-value>)",
          950: "hsl(var(--color-neutral-950) / <alpha-value>)",
        },
        /* Semantic */
        success: "hsl(var(--color-success) / <alpha-value>)",
        warning: "hsl(var(--color-warning) / <alpha-value>)",
        error: "hsl(var(--color-error) / <alpha-value>)",
        /* Surfaces */
        background: "hsl(var(--color-background) / <alpha-value>)",
        foreground: "hsl(var(--color-foreground) / <alpha-value>)",
        surface: "hsl(var(--color-surface) / <alpha-value>)",
        "surface-elevated": "hsl(var(--color-surface-elevated) / <alpha-value>)",
        border: "hsl(var(--color-border) / <alpha-value>)",
        muted: "hsl(var(--color-muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--color-muted-foreground) / <alpha-value>)",
        ring: "hsl(var(--color-ring) / <alpha-value>)",
      },

      /* ─── TYPOGRAPHY TOKENS ─────────────────────────────── */
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        /* Modular scale — ratio 1.25 */
        "scale-xs": ["var(--text-xs)", { lineHeight: "var(--leading-body)" }],
        "scale-sm": ["var(--text-sm)", { lineHeight: "var(--leading-body)" }],
        "scale-base": ["var(--text-base)", { lineHeight: "var(--leading-body)" }],
        "scale-md": ["var(--text-md)", { lineHeight: "var(--leading-body)" }],
        "scale-lg": ["var(--text-lg)", { lineHeight: "var(--leading-display)" }],
        "scale-xl": ["var(--text-xl)", { lineHeight: "var(--leading-display)" }],
        "scale-2xl": ["var(--text-2xl)", { lineHeight: "var(--leading-display)" }],
        "scale-3xl": ["var(--text-3xl)", { lineHeight: "var(--leading-display)" }],
        "scale-4xl": ["var(--text-4xl)", { lineHeight: "var(--leading-display)" }],
        "scale-5xl": ["var(--text-5xl)", { lineHeight: "var(--leading-display)" }],
        "scale-hero": ["var(--text-hero)", { lineHeight: "var(--leading-hero)" }],
      },

      /* ─── SPACING TOKENS — 8px base ─────────────────────── */
      spacing: {
        "0": "0px",
        "1": "var(--space-1)",   /* 4px */
        "2": "var(--space-2)",   /* 8px */
        "3": "var(--space-3)",   /* 12px */
        "4": "var(--space-4)",   /* 16px */
        "5": "var(--space-5)",   /* 20px */
        "6": "var(--space-6)",   /* 24px */
        "8": "var(--space-8)",   /* 32px */
        "10": "var(--space-10)", /* 40px */
        "12": "var(--space-12)", /* 48px */
        "16": "var(--space-16)", /* 64px */
        "20": "var(--space-20)", /* 80px */
        "24": "var(--space-24)", /* 96px */
        "32": "var(--space-32)", /* 128px */
        "40": "var(--space-40)", /* 160px */
        "48": "var(--space-48)", /* 192px */
        "56": "var(--space-56)", /* 224px */
        "64": "var(--space-64)", /* 256px */
      },

      /* ─── CONTAINER WIDTHS ───────────────────────────────── */
      maxWidth: {
        container: "var(--container-max)",
        "container-sm": "var(--container-sm)",
        "container-md": "var(--container-md)",
        "container-lg": "var(--container-lg)",
        "container-xl": "var(--container-xl)",
      },

      /* ─── BORDER RADIUS ──────────────────────────────────── */
      borderRadius: {
        none: "0",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-base)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        full: "9999px",
      },

      /* ─── SHADOWS / ELEVATION ────────────────────────────── */
      boxShadow: {
        "elevation-1": "var(--shadow-elevation-1)",
        "elevation-2": "var(--shadow-elevation-2)",
        "elevation-3": "var(--shadow-elevation-3)",
        "elevation-4": "var(--shadow-elevation-4)",
        "elevation-5": "var(--shadow-elevation-5)",
        inner: "var(--shadow-inner)",
        glow: "var(--shadow-glow)",
        "glow-primary": "var(--shadow-glow-primary)",
      },

      /* ─── ANIMATION TOKENS ───────────────────────────────── */
      transitionDuration: {
        instant: "var(--duration-instant)",
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
        slower: "var(--duration-slower)",
      },
      transitionTimingFunction: {
        "ease-spring": "var(--ease-spring)",
        "ease-smooth": "var(--ease-smooth)",
        "ease-bouncy": "var(--ease-bouncy)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drawer-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-in": "fade-in var(--duration-base) var(--ease-smooth) forwards",
        "fade-in-up": "fade-in-up var(--duration-slow) var(--ease-smooth) forwards",
        "slide-in-left": "slide-in-left var(--duration-base) var(--ease-smooth) forwards",
        "slide-in-right": "slide-in-right var(--duration-base) var(--ease-smooth) forwards",
        "scale-in": "scale-in var(--duration-fast) var(--ease-spring) forwards",
        shimmer: "shimmer 2s linear infinite",
        "count-up": "count-up var(--duration-base) var(--ease-smooth) forwards",
        "drawer-in": "drawer-in var(--duration-base) var(--ease-smooth) forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      /* ─── BREAKPOINTS ────────────────────────────────────── */
      screens: {
        sm: "640px",   /* mobile → tablet boundary */
        md: "768px",
        lg: "1024px",  /* tablet → desktop boundary */
        xl: "1280px",
        "2xl": "1440px",
      },

      /* ─── LINE HEIGHTS ───────────────────────────────────── */
      lineHeight: {
        display: "var(--leading-display)",
        hero: "var(--leading-hero)",
        body: "var(--leading-body)",
        tight: "var(--leading-tight)",
      },
    },
  },
  plugins: [],
};

export default config;
