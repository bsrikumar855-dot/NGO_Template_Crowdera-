import * as React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  demoOrganizations,
  demoThemes,
  demoTemplates,
  TemplatePreset,
} from "@/content/demo_configs";
import {
  HeroSection,
  AboutSection,
  ImpactStorySection,
  ImpactStatsSection,
  ProgramsSection,
  TestimonialsSection,
  GallerySection,
  NewsSection,
  CallToActionSection,
} from "@/components/sections";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import type {
  ThemeConfig,
  HeroConfig,
  AboutConfig,
  GalleryConfig,
  CtaBandConfig,
} from "@/types";

/* ── 9 Causes Default Configuration Mapping ─────────────────── */
const defaultConfigs: Record<string, { theme: string; template: string }> = {
  education: { theme: "hope-blue", template: "hope-modern" },
  healthcare: { theme: "healthcare-cyan", template: "unity-clean" },
  animal: { theme: "forest-green", template: "impact-bold" },
  environment: { theme: "forest-green", template: "hope-modern" },
  humanitarian: { theme: "hope-blue", template: "unity-clean" },
  faithBased: { theme: "dark-neutral", template: "hope-modern" },
  communityDevelopment: { theme: "sunrise-orange", template: "unity-clean" },
  artsCulture: { theme: "dark-neutral", template: "impact-bold" },
  disasterRelief: { theme: "sunrise-orange", template: "impact-bold" },
};

/* ── Static Params Generation ───────────────────────────────── */
export async function generateStaticParams() {
  return [
    { cause: "education" },
    { cause: "healthcare" },
    { cause: "animal" },
    { cause: "environment" },
    { cause: "humanitarian" },
    { cause: "faithBased" },
    { cause: "communityDevelopment" },
    { cause: "artsCulture" },
    { cause: "disasterRelief" },
  ];
}

/* ── Dynamic SEO Metadata ───────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { cause: string };
}): Promise<Metadata> {
  const { cause } = params;
  const normalizedCause = Object.keys(demoOrganizations).find(
    (k) => k.toLowerCase() === cause.toLowerCase()
  ) || cause;
  const activeOrg = demoOrganizations[normalizedCause];

  if (!activeOrg) {
    return {
      title: "Organization Not Found",
    };
  }

  const seo = activeOrg.homepage.seo;
  const heroImage = activeOrg.homepage.hero.slides[0]?.media;
  const imageUrl =
    heroImage && "src" in heroImage ? heroImage.src : "/images/logo.png";

  return {
    title: `${seo.title || activeOrg.name} | ${activeOrg.causeType} Cause`,
    description:
      seo.description || activeOrg.tagline || activeOrg.org.description,
    openGraph: {
      type: "website",
      title: seo.title || activeOrg.name,
      description:
        seo.description || activeOrg.tagline || activeOrg.org.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: activeOrg.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title || activeOrg.name,
      description:
        seo.description || activeOrg.tagline || activeOrg.org.description,
      images: [imageUrl],
    },
  };
}

/* ── Scoped Theme CSS Variable Builder ──────────────────────── */
function buildThemeVars(
  themeConfig: ThemeConfig,
  templatePreset: TemplatePreset
) {
  const buildRulesForMode = (mode: "light" | "dark") => {
    const modeConfig =
      mode === "dark"
        ? themeConfig.dark ?? themeConfig.light
        : themeConfig.light;
    if (!modeConfig) return "";

    const { colors } = modeConfig;
    const rules: string[] = [];
    const add = (name: string, value: string) => {
      rules.push(`  ${name}: ${value};`);
    };

    add("--color-primary", colors.primary);
    add("--color-primary-foreground", colors.primaryForeground);
    add("--color-primary-subtle", colors.primarySubtle);
    add("--color-secondary", colors.secondary);
    add("--color-secondary-foreground", colors.secondaryForeground);
    add("--color-background", colors.background);
    add("--color-foreground", colors.foreground);
    add("--color-surface", colors.surface);
    add("--color-surface-foreground", colors.foreground);
    add("--color-surface-elevated", colors.surfaceElevated);
    add("--color-surface-elevated-foreground", colors.foreground);
    add("--color-border", colors.border);
    add("--color-muted", colors.muted);
    add("--color-muted-foreground", colors.mutedForeground);
    add("--color-ring", colors.ring);

    if (colors.neutral) {
      const shades = [
        50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
      ] as const;
      shades.forEach((shade) => {
        const val = colors.neutral[shade];
        if (val) add(`--color-neutral-${shade}`, val);
      });
    }

    return rules.join("\n");
  };

  const lightRules = buildRulesForMode("light");
  const darkRules = buildRulesForMode("dark");

  return `
    .site-scope {
      ${lightRules}
      --font-display: var(--font-${templatePreset.typography.fontDisplay
        .toLowerCase()
        .replace(/\s/g, "-")}), system-ui, sans-serif;
      --font-body: var(--font-${templatePreset.typography.fontBody
        .toLowerCase()
        .replace(/\s/g, "-")}), system-ui, sans-serif;
      --radius-sm: ${templatePreset.radius.sm};
      --radius-base: ${templatePreset.radius.base};
      --radius-md: ${templatePreset.radius.md};
      --radius-lg: ${templatePreset.radius.lg};
      --radius-xl: ${templatePreset.radius.xl};
    }
    .dark .site-scope, .site-scope.dark {
      ${darkRules}
    }
    .site-scope .font-display {
      font-family: var(--font-display) !important;
    }
    .site-scope p, 
    .site-scope span, 
    .site-scope a, 
    .site-scope button, 
    .site-scope label, 
    .site-scope input {
      font-family: var(--font-body) !important;
    }
    .site-scope .rounded-sm { border-radius: var(--radius-sm) !important; }
    .site-scope .rounded-md { border-radius: var(--radius-base) !important; }
    .site-scope .rounded-lg { border-radius: var(--radius-md) !important; }
    .site-scope .rounded-xl { border-radius: var(--radius-lg) !important; }
    .site-scope .rounded-2xl { border-radius: var(--radius-lg) !important; }
    .site-scope .rounded-3xl { border-radius: var(--radius-xl) !important; }
  `;
}

/* ── Dynamic Site Page Component ────────────────────────────── */
interface PageProps {
  params: {
    cause: string;
  };
}

export default function StandaloneCausePage({ params }: PageProps) {
  const { cause } = params;
  const normalizedCause = Object.keys(demoOrganizations).find(
    (k) => k.toLowerCase() === cause.toLowerCase()
  ) || cause;
  const activeOrg = demoOrganizations[normalizedCause];

  if (!activeOrg) {
    notFound();
  }

  // 1. Resolve Theme and Template configurations
  const configMap = defaultConfigs[normalizedCause] || defaultConfigs.education;
  const activeTheme = demoThemes[configMap.theme] || demoThemes["hope-blue"];
  const activeTemplate =
    demoTemplates[configMap.template] || demoTemplates["hope-modern"];

  // 2. Build Scoped CSS variables
  const dynamicCss = buildThemeVars(activeTheme, activeTemplate);

  // 3. Assemble components configs
  const heroConfig: HeroConfig = {
    ...activeOrg.homepage.hero,
    variant: activeTemplate.variants.hero,
  };

  const aboutConfig: AboutConfig = {
    ...activeOrg.homepage.about,
    variant: activeTemplate.variants.about,
  };

  const galleryConfig: GalleryConfig = {
    ...activeOrg.homepage.gallery,
    variant: activeTemplate.variants.gallery,
  };

  const ctaConfig: CtaBandConfig = {
    ...activeOrg.homepage.ctaBand,
    variant: activeTemplate.variants.cta,
    theme:
      activeTheme.id === "theme-dark-neutral"
        ? "dark"
        : activeOrg.homepage.ctaBand.theme === "image"
        ? "image"
        : "primary",
  };

  // 4. Construct NavigationConfig
  const navConfig = {
    items: [
      { id: "nav-about", label: "About Us", href: "#about" },
      { id: "nav-programs", label: "Programs", href: "#programs" },
      { id: "nav-impact", label: "Our Impact", href: "#impact" },
      { id: "nav-gallery", label: "Gallery", href: "#gallery" },
      { id: "nav-news", label: "News", href: "#news" },
    ],
    cta: {
      label: "Donate Now",
      href: activeOrg.org.donateUrl || "#",
      variant: "donate" as const,
    },
    showThemeToggle: false,
  };

  // 5. Construct FooterConfig
  const footerConfig = {
    logo: activeOrg.org.logo,
    logoDark: activeOrg.org.logoDark,
    tagline: activeOrg.tagline,
    linkGroups: [
      {
        id: "about",
        heading: "About",
        links: [
          { label: "Our Mission", href: "#about" },
          { label: "Our Impact", href: "#impact" },
          { label: "Field Gallery", href: "#gallery" },
        ],
      },
      {
        id: "programs",
        heading: "Programs",
        links: activeOrg.homepage.programs.items.map((p) => ({
          label: p.title,
          href: "#programs",
        })),
      },
      {
        id: "get-involved",
        heading: "Get Involved",
        links: [
          { label: "Donate", href: activeOrg.org.donateUrl || "#" },
          { label: "Volunteer", href: activeOrg.org.volunteerUrl || "#" },
        ],
      },
    ],
    social: activeOrg.org.social,
    newsletter: {
      enabled: true,
      headline: "Stay updated with our cause",
      placeholder: "Enter your email",
      buttonLabel: "Subscribe",
    },
    legal: {
      copyright: `© {year} ${activeOrg.name}. All rights reserved.`,
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" },
      ],
    },
  };

  return (
    <div className="site-scope min-h-screen bg-background text-foreground transition-colors duration-500 font-sans relative overflow-x-hidden">
      {/* Scope CSS Variable Overrides */}
      <style dangerouslySetInnerHTML={{ __html: dynamicCss }} />

      {/* 1. Custom Standalone Navbar */}
      <Navbar
        nav={navConfig}
        org={{
          name: activeOrg.name,
          logo: activeOrg.org.logo,
          logoDark: activeOrg.org.logoDark,
        }}
      />

      {/* 2. Hero Section */}
      <HeroSection config={heroConfig} />

      {/* 3. About Section */}
      <AboutSection config={aboutConfig} />

      {/* 4. Impact Story Section */}
      {activeOrg.homepage.impactStory && (
        <ImpactStorySection config={activeOrg.homepage.impactStory} />
      )}

      {/* 5. Impact Stats Section */}
      {activeOrg.homepage.stats && (
        <ImpactStatsSection config={activeOrg.homepage.stats} />
      )}

      {/* 6. Programs Section */}
      {activeOrg.homepage.programs && (
        <ProgramsSection config={activeOrg.homepage.programs} />
      )}

      {/* 7. Testimonials Section */}
      {activeOrg.homepage.testimonials && (
        <TestimonialsSection config={activeOrg.homepage.testimonials} />
      )}

      {/* 8. Gallery Section */}
      {activeOrg.homepage.gallery && (
        <GallerySection config={galleryConfig} />
      )}

      {/* 9. News Section */}
      {activeOrg.homepage.news && (
        <NewsSection config={activeOrg.homepage.news} />
      )}

      {/* 10. Call To Action Section */}
      <CallToActionSection config={ctaConfig} />

      {/* 11. Custom Standalone Footer */}
      <Footer
        footer={footerConfig}
        org={{
          name: activeOrg.name,
          tagline: activeOrg.tagline,
          contact: activeOrg.org.contact,
          social: activeOrg.org.social,
        }}
      />
    </div>
  );
}
