/**
 * app/templates/demo/page.tsx
 *
 * Interactive Template Engine Showcase & Live Customizer Panel.
 * Demonstrates total modular separation of Template, Theme, and Organization.
 * Features a floating customizable builder inspector, marketplace spec sheets,
 * responsive switches, and instant client-side token remapping.
 */
"use client";

import * as React from "react";
import {
  Settings,
  Moon,
  Sun,
  Minimize2,
  Sliders,
  Sparkles,
  Eye,
  EyeOff,
  Layout,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { useSearchParams } from "next/navigation";
import {
  demoThemes,
  demoTemplates,
  demoOrganizations,
  TemplatePreset,
} from "@/content/demo_configs";
import {
  HeroSection,
  ImpactStorySection,
  AboutSection,
  GallerySection,
  CallToActionSection,
} from "@/components/sections";
import type { HeroConfig, AboutConfig, GalleryConfig, CtaBandConfig, ThemeConfig } from "@/types";

function TemplateDemoShowcaseContent() {
  const searchParams = useSearchParams();
  const orgParam = searchParams.get("org");
  const themeParam = searchParams.get("theme");
  const templateParam = searchParams.get("template");

  // ── 1. Engine Core States ───────────────────────────────────
  const [selectedOrgKey, setSelectedOrgKey] = React.useState<string>(
    orgParam && demoOrganizations[orgParam] ? orgParam : "education"
  );
  const [selectedThemeKey, setSelectedThemeKey] = React.useState<string>(
    themeParam && demoThemes[themeParam] ? themeParam : "hope-blue"
  );
  const [selectedTemplateKey, setSelectedTemplateKey] = React.useState<string>(
    templateParam && demoTemplates[templateParam] ? templateParam : "hope-modern"
  );

  React.useEffect(() => {
    if (orgParam && demoOrganizations[orgParam]) {
      setSelectedOrgKey(orgParam);
    }
    if (themeParam && demoThemes[themeParam]) {
      setSelectedThemeKey(themeParam);
    }
    if (templateParam && demoTemplates[templateParam]) {
      setSelectedTemplateKey(templateParam);
    }
  }, [orgParam, themeParam, templateParam]);

  // ── 2. Live Layout Overrides ────────────────────────────────
  const [heroVariant, setHeroVariant] = React.useState<"image" | "video" | "carousel" | "default">("default");
  const [aboutVariant, setAboutVariant] = React.useState<"text-image" | "image-text" | "text-only" | "icon-grid" | "default">("default");
  const [galleryVariant, setGalleryVariant] = React.useState<"grid" | "masonry" | "carousel" | "default">("default");
  const [ctaVariant, setCtaVariant] = React.useState<"centered" | "split" | "image-background" | "minimal" | "default">("default");

  // ── 3. Interface Settings ───────────────────────────────────
  const [isPreviewDarkMode, setIsPreviewDarkMode] = React.useState<boolean>(false);
  const [isAnimationEnabled, setIsAnimationEnabled] = React.useState<boolean>(true);
  const [isPanelVisible, setIsPanelVisible] = React.useState<boolean>(true);
  const [isSpecPanelExpanded, setIsSpecPanelExpanded] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [importStatus, setImportStatus] = React.useState<{ type: "success" | "error"; message: string } | null>(null);

  React.useEffect(() => {
    if (importStatus) {
      const timer = setTimeout(() => setImportStatus(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [importStatus]);

  const handleExport = () => {
    const activeOrg = demoOrganizations[selectedOrgKey] || demoOrganizations.education;
    const activeTheme = demoThemes[selectedThemeKey] || demoThemes["hope-blue"];
    const state = {
      org: selectedOrgKey,
      cause: selectedOrgKey,
      structuralTemplate: selectedTemplateKey,
      theme: selectedThemeKey,
      layoutOverrides: {
        heroVariant,
        aboutVariant,
        galleryVariant,
        ctaVariant,
      },
      branding: {
        name: activeOrg.name,
        color: activeTheme.id,
        logo: activeOrg.logo?.src,
      },
      exportedAt: new Date().toISOString(),
      schemaVersion: "1.0",
    };
    const jsonStr = JSON.stringify(state, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${selectedOrgKey}-site-config.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const config = JSON.parse(text);

        if (!config || typeof config !== "object") {
          throw new Error("Invalid configuration format.");
        }

        if (config.schemaVersion !== "1.0") {
          throw new Error(`Unsupported schema version: ${config.schemaVersion || "Unknown"}`);
        }

        // Validate organization key
        if (config.org && demoOrganizations[config.org]) {
          setSelectedOrgKey(config.org);
        } else {
          throw new Error(`Invalid organization key: ${config.org}`);
        }

        // Validate theme key
        if (config.theme && demoThemes[config.theme]) {
          setSelectedThemeKey(config.theme);
        }

        // Validate template key
        if (config.structuralTemplate && demoTemplates[config.structuralTemplate]) {
          setSelectedTemplateKey(config.structuralTemplate);
        }

        // Apply overrides
        if (config.layoutOverrides) {
          const overrides = config.layoutOverrides;
          if (overrides.heroVariant) setHeroVariant(overrides.heroVariant);
          if (overrides.aboutVariant) setAboutVariant(overrides.aboutVariant);
          if (overrides.galleryVariant) setGalleryVariant(overrides.galleryVariant);
          if (overrides.ctaVariant) setCtaVariant(overrides.ctaVariant);
        }

        setImportStatus({ type: "success", message: "Config imported successfully!" });
        e.target.value = "";
      } catch (err: any) {
        setImportStatus({ type: "error", message: err.message || "Failed to parse configuration file." });
      }
    };
    reader.readAsText(file);
  };

  React.useEffect(() => {
    // Detect mobile viewport (lg breakpoint is 1024px, so < 1024px is mobile/tablet for customizer)
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    if (mq.matches) {
      setIsPanelVisible(false); // Default to collapsed on mobile
    }
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      if (e.matches) {
        setIsPanelVisible(false);
      } else {
        setIsPanelVisible(true);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);



  React.useEffect(() => {
    if (isMobile) {
      document.body.classList.toggle("overflow-hidden", isPanelVisible);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isPanelVisible, isMobile]);

  // ── 4. Retrieve Active Config Layers ───────────────────────
  const activeOrg = demoOrganizations[selectedOrgKey] || demoOrganizations.education;
  const activeTheme = demoThemes[selectedThemeKey] || demoThemes["hope-blue"];
  const activeTemplate = demoTemplates[selectedTemplateKey] || demoTemplates["hope-modern"];

  // ── 5. Build Dynamic CSS Variables Injection ───────────────
  const buildScopedThemeVars = (
    themeConfig: ThemeConfig,
    templatePreset: TemplatePreset,
    mode: "light" | "dark",
    animations: boolean
  ) => {
    const modeConfig = mode === "dark" ? themeConfig.dark ?? themeConfig.light : themeConfig.light;
    if (!modeConfig) return "";

    const { colors } = modeConfig;
    const rules: string[] = [];

    const add = (name: string, value: string) => {
      rules.push(`  ${name}: ${value};`);
    };

    // Colors
    add("--color-primary", colors.primary);
    add("--color-primary-foreground", colors.primaryForeground);
    add("--color-primary-subtle", colors.primarySubtle);
    add("--color-secondary", colors.secondary);
    add("--color-secondary-foreground", colors.secondaryForeground);
    add("--color-background", colors.background);
    add("--color-foreground", colors.foreground);
    add("--color-surface", colors.surface);
    add("--color-surface-elevated", colors.surfaceElevated);
    add("--color-border", colors.border);
    add("--color-muted", colors.muted);
    add("--color-muted-foreground", colors.mutedForeground);
    add("--color-ring", colors.ring);

    if (colors.neutral) {
      const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
      shades.forEach((shade) => {
        const val = colors.neutral[shade];
        if (val) add(`--color-neutral-${shade}`, val);
      });
    }

    // Typography
    add("--font-display", `var(--font-${templatePreset.typography.fontDisplay.toLowerCase().replace(/\s/g, "-")}), system-ui, sans-serif`);
    add("--font-body", `var(--font-${templatePreset.typography.fontBody.toLowerCase().replace(/\s/g, "-")}), system-ui, sans-serif`);

    // Border Radius Mapping
    add("--radius-sm", templatePreset.radius.sm);
    add("--radius-base", templatePreset.radius.base);
    add("--radius-md", templatePreset.radius.md);
    add("--radius-lg", templatePreset.radius.lg);
    add("--radius-xl", templatePreset.radius.xl);

    // Animations / Transitions control
    if (!animations) {
      add("--transition-duration-base", "0s");
      add("--transition-duration-slow", "0s");
      add("--transition-duration-fast", "0s");
    }

    return `
      .demo-preview-scope {
        ${rules.join("\n")}
      }
      .demo-preview-scope .font-display {
        font-family: var(--font-display) !important;
      }
      .demo-preview-scope p, 
      .demo-preview-scope span, 
      .demo-preview-scope a, 
      .demo-preview-scope button, 
      .demo-preview-scope label, 
      .demo-preview-scope input {
        font-family: var(--font-body) !important;
      }
      .demo-preview-scope .rounded-sm { border-radius: var(--radius-sm) !important; }
      .demo-preview-scope .rounded-md { border-radius: var(--radius-base) !important; }
      .demo-preview-scope .rounded-lg { border-radius: var(--radius-md) !important; }
      .demo-preview-scope .rounded-xl { border-radius: var(--radius-lg) !important; }
      .demo-preview-scope .rounded-2xl { border-radius: var(--radius-lg) !important; }
      .demo-preview-scope .rounded-3xl { border-radius: var(--radius-xl) !important; }
    `;
  };

  const dynamicCss = React.useMemo(() => {
    return buildScopedThemeVars(
      activeTheme,
      activeTemplate,
      isPreviewDarkMode ? "dark" : "light",
      isAnimationEnabled
    );
  }, [activeTheme, activeTemplate, isPreviewDarkMode, isAnimationEnabled]);

  // ── 6. Assemble Overridden Configs for Live Rendering ──────
  const finalHeroConfig: HeroConfig = {
    ...activeOrg.homepage.hero,
    variant: heroVariant === "default" ? activeTemplate.variants.hero : heroVariant,
  };

  const finalAboutConfig: AboutConfig = {
    ...activeOrg.homepage.about,
    variant: aboutVariant === "default" ? activeTemplate.variants.about : aboutVariant,
  };

  const finalGalleryConfig: GalleryConfig = {
    ...activeOrg.homepage.gallery,
    variant: galleryVariant === "default" ? activeTemplate.variants.gallery : galleryVariant,
  };

  const finalCtaConfig: CtaBandConfig = {
    ...activeOrg.homepage.ctaBand,
    variant: ctaVariant === "default" ? activeTemplate.variants.cta : ctaVariant,
    theme: activeTheme.id === "theme-dark-neutral" ? "dark" : (activeOrg.homepage.ctaBand.theme === "image" ? "image" : "primary"),
  };

  // Helper lists for selectors
  const orgOptions = [
    { key: "education", name: "Vidyalaya (Education)", desc: "Schools & Tech Centers" },
    { key: "healthcare", name: "HealAll (Healthcare)", desc: "Clinics & Camps" },
    { key: "animal", name: "Paws & Claws (Animals)", desc: "Trauma Shelters" },
    { key: "environment", name: "EcoShield (Planet)", desc: "Lakes & Miyawaki" },
    { key: "humanitarian", name: "Bridgeway (Humanitarian)", desc: "Food, Water & Shelter" },
    { key: "faithBased", name: "Grace & Light (Faith-Based)", desc: "Outreach & Support" },
    { key: "communityDevelopment", name: "Forward (Community)", desc: "Infrastructure & Skills" },
    { key: "artsCulture", name: "Canvas (Arts & Culture)", desc: "Preservation & Studios" },
    { key: "disasterRelief", name: "Response Corps (Disaster)", desc: "Search & Rescue" },
  ];

  const themeOptions = [
    { key: "hope-blue", name: "Hope Blue", color: "bg-blue-600 border-blue-400" },
    { key: "forest-green", name: "Forest Green", color: "bg-emerald-800 border-emerald-600" },
    { key: "healthcare-cyan", name: "Healthcare Cyan", color: "bg-cyan-600 border-cyan-400" },
    { key: "sunrise-orange", name: "Sunrise Orange", color: "bg-amber-600 border-amber-400" },
    { key: "dark-neutral", name: "Dark Neutral", color: "bg-neutral-800 border-neutral-600" },
  ];

  const templateOptions = [
    { key: "hope-modern", name: "Hope Modern", desc: "Rounded cards & Jakarta font" },
    { key: "unity-clean", name: "Unity Clean", desc: "Sharp borders & Outfit font" },
    { key: "impact-bold", name: "Impact Bold", desc: "Thick glass shapes & Jakarta font" },
  ];

  // ── 7. Render Builder Panel Form Content ───────────────────
  const builderForm = (
    <>
      {/* 1. SELECT TEMPLATE (Layout & Fonts) */}
      <div className="flex flex-col gap-2.5">
        <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          1. Structural Template
        </label>
        <div className="flex flex-col gap-1.5">
          {templateOptions.map((t) => {
            const isSelected = selectedTemplateKey === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setSelectedTemplateKey(t.key)}
                className={cn(
                  "w-full text-left p-3 rounded-xl border text-xs transition-all duration-base",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
                  isSelected
                    ? "border-primary bg-primary/5 font-semibold text-primary shadow-sm"
                    : "border-border bg-muted/30 text-foreground hover:bg-muted/70"
                )}
              >
                <span className="block font-bold">{t.name}</span>
                <span className="text-[10px] text-muted-foreground block mt-0.5">{t.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. SELECT THEME (HSL Colors) */}
      <div className="flex flex-col gap-2.5">
        <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          2. Branding Theme
        </label>
        <div className="flex flex-wrap gap-2">
          {themeOptions.map((th) => {
            const isSelected = selectedThemeKey === th.key;
            return (
              <button
                key={th.key}
                onClick={() => setSelectedThemeKey(th.key)}
                className={cn(
                  "h-10 w-10 rounded-xl border flex items-center justify-center transition-all",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  isSelected
                    ? "border-primary ring-2 ring-primary/40 scale-105"
                    : "border-border hover:scale-105"
                )}
                title={th.name}
                aria-label={`Select ${th.name} theme`}
              >
                <span className={cn("h-6 w-6 rounded-lg shadow-inner", th.color)} />
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. SELECT ORGANIZATION CONTENT */}
      <div className="flex flex-col gap-2.5">
        <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          3. Organization Copy
        </label>
        <div className="flex flex-col gap-1.5">
          {orgOptions.map((o) => {
            const isSelected = selectedOrgKey === o.key;
            return (
              <button
                key={o.key}
                onClick={() => setSelectedOrgKey(o.key)}
                className={cn(
                  "w-full text-left p-3 rounded-xl border text-xs transition-all duration-base",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
                  isSelected
                    ? "border-primary bg-primary/5 font-semibold text-primary shadow-sm"
                    : "border-border bg-muted/30 text-foreground hover:bg-muted/70"
                )}
              >
                <span className="block font-bold">{o.name}</span>
                <span className="text-[10px] text-muted-foreground block mt-0.5">{o.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. LAYOUT VARIANT OVERRIDES */}
      <div className="flex flex-col gap-3 pt-3 border-t border-border">
        <Heading as="h4" size="xs" className="font-bold text-[10px] text-muted-foreground uppercase tracking-widest">
          4. Layout Overrides
        </Heading>

        {/* Hero Override */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] text-muted-foreground font-semibold">Hero Layout</label>
          <select
            value={heroVariant}
            onChange={(e) => setHeroVariant(e.target.value as any)}
            className="w-full p-2 bg-muted/40 border border-border rounded-lg text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          >
            <option value="default">Use Template Default ({activeTemplate.variants.hero})</option>
            <option value="carousel">Carousel Slider</option>
            <option value="video">Video Background</option>
            <option value="image">Static Hero Image</option>
          </select>
        </div>

        {/* About Override */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] text-muted-foreground font-semibold">About Layout</label>
          <select
            value={aboutVariant}
            onChange={(e) => setAboutVariant(e.target.value as any)}
            className="w-full p-2 bg-muted/40 border border-border rounded-lg text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          >
            <option value="default">Use Template Default ({activeTemplate.variants.about})</option>
            <option value="text-image">Text left, Image right</option>
            <option value="image-text">Image left, Text right</option>
            <option value="text-only">Text Center Only</option>
            <option value="icon-grid">Interactive Icon Grid</option>
          </select>
        </div>

        {/* Gallery Override */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] text-muted-foreground font-semibold">Gallery Layout</label>
          <select
            value={galleryVariant}
            onChange={(e) => setGalleryVariant(e.target.value as any)}
            className="w-full p-2 bg-muted/40 border border-border rounded-lg text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          >
            <option value="default">Use Template Default ({activeTemplate.variants.gallery})</option>
            <option value="masonry">Variable Height Masonry</option>
            <option value="grid">Fixed Aspect Grid</option>
            <option value="carousel">Horizontal Carousel</option>
          </select>
        </div>

        {/* CTA Override */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] text-muted-foreground font-semibold">CTA Band Layout</label>
          <select
            value={ctaVariant}
            onChange={(e) => setCtaVariant(e.target.value as any)}
            className="w-full p-2 bg-muted/40 border border-border rounded-lg text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          >
            <option value="default">Use Template Default ({activeTemplate.variants.cta})</option>
            <option value="split">Two Column Split</option>
            <option value="centered">Center Action Box</option>
            <option value="image-background">Overlay Image BG</option>
            <option value="minimal">Compact Row</option>
          </select>
        </div>
      </div>

      {/* Reset Defaults button */}
      <Button
        variant="outline"
        size="xs"
        onClick={() => {
          setHeroVariant("default");
          setAboutVariant("default");
          setGalleryVariant("default");
          setCtaVariant("default");
        }}
        className="mt-2"
      >
        Reset Variant Overrides
      </Button>

      {/* 5. PORTABLE CONFIG ENGINE (Export/Import) */}
      <div className="flex flex-col gap-3 pt-4 border-t border-border mt-3">
        <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          5. Portable Config Engine
        </label>
        
        <p className="text-[10px] text-muted-foreground leading-normal">
          Export your site as a portable config Crowdera can host and re-render.
        </p>

        <div className="flex gap-2">
          {/* Export Button */}
          <Button
            type="button"
            variant="primary"
            size="xs"
            onClick={handleExport}
            className="flex-1 text-center justify-center font-bold"
          >
            Export Site
          </Button>

          {/* Import Label acting as a button */}
          <label className="flex-1 cursor-pointer">
            <span className="inline-flex w-full items-center justify-center rounded-lg border border-border bg-background hover:bg-muted/50 px-3 py-1.5 text-xs font-bold transition-all text-center h-full">
              Import Config
            </span>
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
        </div>

        {/* Feedback Alert banner */}
        {importStatus && (
          <div className={cn(
            "p-2.5 rounded-lg text-[10px] font-medium border animate-fade-in",
            importStatus.type === "success" 
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400" 
              : "bg-destructive/10 border-destructive/20 text-destructive"
          )}>
            {importStatus.message}
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Inject Scoped Style overrides */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      ` + dynamicCss }} />

      <main className="min-h-screen bg-muted/20 pt-24 pb-16 font-sans relative overflow-x-hidden">
        <Container size="xl" className="flex flex-col gap-8">
          {/* Header Title */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4.5 w-4.5 text-primary" />
                <Badge variant="primary" size="sm">Template Engine v1.0.0</Badge>
              </div>
              <Heading as="h1" size="3xl" className="tracking-tight">
                Branding & Layout Personalization Sandbox
              </Heading>
              <Text className="text-muted-foreground mt-2 max-w-3xl">
                Observe the complete decoupling of structural templates, visual colors, and organization copy. Customize tokens in the floating builder on the right.
              </Text>
            </div>
            <div className="flex gap-2">
              <Button
                variant={isPanelVisible ? "primary" : "outline"}
                size="sm"
                onClick={() => setIsPanelVisible(!isPanelVisible)}
                leadingIcon={isPanelVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              >
                {isPanelVisible ? "Hide Builder" : "Customize Live"}
              </Button>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Column: Spec Registry Cards (Span 3 if panel visible, else 4) */}
            <div className={cn("transition-all duration-300", isPanelVisible ? "lg:col-span-3" : "lg:col-span-4")}>
              <div className="flex flex-col gap-8">
                {/* Marketplace Listing Spec Sheet (Phase 6) */}
                <div className="bg-surface border border-border rounded-3xl p-6 shadow-elevation-1 transition-all">
                  <div className="flex justify-between items-center border-b border-border pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <Layout className="h-5 w-5 text-primary" />
                      <Heading as="h2" size="sm" className="font-bold">
                        Professional Template Metadata Specs
                      </Heading>
                    </div>
                    <button
                      onClick={() => setIsSpecPanelExpanded(!isSpecPanelExpanded)}
                      className="text-xs text-primary font-semibold hover:underline"
                    >
                      {isSpecPanelExpanded ? "Hide Details" : "View Full Spec Sheet"}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div className="p-3 bg-muted/40 rounded-2xl border border-border/40">
                      <span className="text-muted-foreground font-semibold block mb-1">Template Engine</span>
                      <p className="font-bold text-foreground">{activeTemplate.name}</p>
                    </div>
                    <div className="p-3 bg-muted/40 rounded-2xl border border-border/40">
                      <span className="text-muted-foreground font-semibold block mb-1">Active Brand Theme</span>
                      <p className="font-bold text-foreground flex items-center gap-1.5">
                        <span className={cn("h-3 w-3 rounded-full inline-block border", demoThemes[selectedThemeKey]?.light ? "bg-primary" : "bg-neutral-600")} />
                        {activeTheme.name}
                      </p>
                    </div>
                    <div className="p-3 bg-muted/40 rounded-2xl border border-border/40">
                      <span className="text-muted-foreground font-semibold block mb-1">Organization Copy</span>
                      <p className="font-bold text-foreground truncate">{activeOrg.name}</p>
                    </div>
                    <div className="p-3 bg-muted/40 rounded-2xl border border-border/40">
                      <span className="text-muted-foreground font-semibold block mb-1">Production Status</span>
                      <Badge variant="success" size="sm">Ready for Launch</Badge>
                    </div>
                  </div>

                  {/* Expanded specifications table (marketplace style) */}
                  {isSpecPanelExpanded && (
                    <div className="mt-6 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-8 text-xs animate-fade-in">
                      <div>
                        <Heading as="h3" size="xs" className="font-bold mb-3">Core Performance Targets</Heading>
                        <div className="flex flex-col gap-2.5">
                          <div className="flex justify-between border-b border-border/60 pb-1.5">
                            <span className="text-muted-foreground">Lighthouse Speed Index Target</span>
                            <span className="font-semibold text-foreground">&gt; 96%</span>
                          </div>
                          <div className="flex justify-between border-b border-border/60 pb-1.5">
                            <span className="text-muted-foreground">Accessibility Compliance</span>
                            <span className="font-semibold text-foreground">WCAG 2.1 AA Compliant</span>
                          </div>
                          <div className="flex justify-between border-b border-border/60 pb-1.5">
                            <span className="text-muted-foreground">Semantic Validations</span>
                            <span className="font-semibold text-foreground">HTML5 W3C Compliant</span>
                          </div>
                          <div className="flex justify-between pb-1.5">
                            <span className="text-muted-foreground">SEO Index Readiness</span>
                            <span className="font-semibold text-foreground">Static Metatags Ready</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Heading as="h3" size="xs" className="font-bold mb-3">Modular Layout Specifications</Heading>
                        <div className="flex flex-col gap-2.5">
                          <div className="flex justify-between border-b border-border/60 pb-1.5">
                            <span className="text-muted-foreground">Active Hero Layout</span>
                            <span className="font-mono text-primary font-semibold">{finalHeroConfig.variant}</span>
                          </div>
                          <div className="flex justify-between border-b border-border/60 pb-1.5">
                            <span className="text-muted-foreground">Active About Layout</span>
                            <span className="font-mono text-primary font-semibold">{finalAboutConfig.variant}</span>
                          </div>
                          <div className="flex justify-between border-b border-border/60 pb-1.5">
                            <span className="text-muted-foreground">Active Gallery Layout</span>
                            <span className="font-mono text-primary font-semibold">{finalGalleryConfig.variant}</span>
                          </div>
                          <div className="flex justify-between pb-1.5">
                            <span className="text-muted-foreground">Active CTA Layout</span>
                            <span className="font-mono text-primary font-semibold">{finalCtaConfig.variant}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Scoped Preview Screen Container */}
                <div className="border border-border rounded-[32px] overflow-hidden shadow-elevation-3 bg-surface">
                  {/* Sandbox Toolbar */}
                  <div className="bg-neutral-900 text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Render Engine Preview Screen</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] uppercase font-mono ml-2">
                        {isPreviewDarkMode ? "Dark-Mode View" : "Light-Mode View"}
                      </span>
                    </div>

                    {/* Quick Preview Toggles */}
                    <div className="flex items-center gap-3">
                      {/* Light/Dark Toggle */}
                      <button
                        onClick={() => setIsPreviewDarkMode(!isPreviewDarkMode)}
                        className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-1.5"
                        title="Toggle dark mode preview"
                        aria-label="Toggle preview dark mode"
                      >
                        {isPreviewDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        <span>{isPreviewDarkMode ? "Light Mode" : "Dark Mode"}</span>
                      </button>

                      {/* Animation Toggle */}
                      <button
                        onClick={() => setIsAnimationEnabled(!isAnimationEnabled)}
                        className={cn(
                          "px-2.5 py-1.5 rounded-lg transition-colors text-[10px] uppercase font-bold",
                          isAnimationEnabled ? "bg-primary text-primary-foreground" : "bg-white/10 text-neutral-300"
                        )}
                        aria-label="Toggle Animations"
                      >
                        {isAnimationEnabled ? "Motion: On" : "Motion: Off"}
                      </button>
                    </div>
                  </div>

                  {/* Scoped Render Container (Theme HSL color tokens apply inside here) */}
                  <div className={cn(
                    "demo-preview-scope overflow-hidden transition-colors duration-500 min-h-[60vh]",
                    isPreviewDarkMode ? "bg-neutral-950 text-neutral-100 dark" : "bg-white text-neutral-900"
                  )}>
                    {/* Render Core Sections */}
                    <HeroSection config={finalHeroConfig} />
                    <ImpactStorySection config={activeOrg.homepage.impactStory} />
                    <AboutSection config={finalAboutConfig} />
                    <GallerySection config={finalGalleryConfig} />
                    <CallToActionSection config={finalCtaConfig} />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop-only: Floating/Sticky Builder Panel (Phase 5) */}
            {isPanelVisible && (
              <aside className="hidden lg:flex lg:col-span-1 flex-col gap-6 animate-fade-in relative z-20">
                <div className="bg-surface border border-border rounded-3xl p-5 shadow-elevation-3 sticky top-24 flex flex-col gap-6 max-h-[85vh] overflow-y-auto w-full">
                  
                  {/* Panel Title */}
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <div className="flex items-center gap-2">
                      <Settings className="h-4.5 w-4.5 text-primary" />
                      <Heading as="h3" size="xs" className="font-bold">
                        Live Config Customizer
                      </Heading>
                    </div>
                    <button
                      onClick={() => setIsPanelVisible(false)}
                      className="text-xs text-muted-foreground hover:text-foreground p-1"
                      aria-label="Close builder panel"
                    >
                      <Minimize2 className="h-4 w-4" />
                    </button>
                  </div>

                  {builderForm}
                </div>
              </aside>
            )}
          </div>
        </Container>

        {/* Mobile bottom sheet (toggled by panel visibility) */}
        {isPanelVisible && (
          <div className="fixed inset-0 z-50 flex items-end justify-center lg:hidden" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
              onClick={() => setIsPanelVisible(false)}
            />
            
            {/* Drawer Container */}
            <div className="relative w-full md:max-w-xl bg-surface border-t border-border rounded-t-[2rem] shadow-elevation-5 flex flex-col max-h-[80vh] z-10 animate-slide-up">
              {/* Drag Handle Indicator */}
              <button
                className="w-full flex justify-center py-4 cursor-pointer focus:outline-none"
                onClick={() => setIsPanelVisible(false)}
                aria-label="Close customizer bottom sheet"
              >
                <div className="w-16 h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
              </button>
              
              {/* Header Title */}
              <div className="flex justify-between items-center px-6 pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <Settings className="h-4.5 w-4.5 text-primary" />
                  <Heading as="h3" size="xs" className="font-bold">
                    Live Config Customizer
                  </Heading>
                </div>
                <button
                  onClick={() => setIsPanelVisible(false)}
                  className="text-muted-foreground hover:text-foreground p-1 rounded-full hover:bg-muted/40 transition-colors"
                  aria-label="Close builder panel"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Scrollable Form Body */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 pb-12">
                {builderForm}
              </div>
            </div>
          </div>
        )}

        {/* Floating Customizer Button (if panel hidden or always on mobile when hidden) */}
        {!isPanelVisible && (
          <button
            onClick={() => setIsPanelVisible(true)}
            className="fixed bottom-6 right-6 h-12 w-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-elevation-4 border border-primary/20 hover:scale-105 hover:shadow-elevation-5 transition-all z-30 animate-bounce"
            title="Open customization customizer panel"
            aria-label="Open customization customizer panel"
          >
            <Sliders className="h-5 w-5" />
          </button>
        )}
      </main>
    </>
  );
}

export default function TemplateDemoShowcase() {
  return (
    <React.Suspense fallback={
      <div className="flex h-screen w-screen items-center justify-center bg-[hsl(240_14%_9%)] text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading template engine...</p>
        </div>
      </div>
    }>
      <TemplateDemoShowcaseContent />
    </React.Suspense>
  );
}
