/**
 * app/templates/demo/page.tsx
 *
 * Interactive Template Engine Showcase.
 * Allows users to toggle between 4 cause configurations (Education, Healthcare, Animal Welfare, Environment)
 * and see the entire theme, metadata, and section variants update dynamically.
 */
"use client";

import * as React from "react";
import {
  GraduationCap,
  HeartPulse,
  PawPrint,
  TreeDeciduous,
  Shield,
  Layers,
  Settings,
  Info,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { causePresets, CausePreset } from "@/content/demo_configs";
import { templateMetadata } from "@/config/template";
import {
  HeroSection,
  AboutSection,
  GallerySection,
  CallToActionSection,
} from "@/components/sections";

export default function TemplateDemoShowcase() {
  const [activePresetKey, setActivePresetKey] = React.useState<string>("education");
  const [previewMode, setPreviewMode] = React.useState<"light" | "dark">("light");

  const activePreset = causePresets[activePresetKey] || causePresets.education;
  const { theme, org, homepage } = activePreset;

  // Helper to build CSS variables scoped to our preview panel
  const buildScopedThemeVars = (preset: CausePreset, mode: "light" | "dark") => {
    const themeConfig = preset.theme;
    const modeConfig = mode === "dark" ? themeConfig.dark ?? themeConfig.light : themeConfig.light;
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

    return `.demo-preview-scope {\n${rules.join("\n")}\n}`;
  };

  const cssVars = buildScopedThemeVars(activePreset, previewMode);

  const presetsList = [
    { key: "education", name: "Education", icon: GraduationCap, color: "text-blue-500 bg-blue-500/10" },
    { key: "healthcare", name: "Healthcare", icon: HeartPulse, color: "text-teal-500 bg-teal-500/10" },
    { key: "animal", name: "Animal Welfare", icon: PawPrint, color: "text-amber-500 bg-amber-500/10" },
    { key: "environment", name: "Environment", icon: TreeDeciduous, color: "text-green-500 bg-green-500/10" },
  ];

  return (
    <>
      {/* Inject colors dynamically for the preview scope */}
      <style dangerouslySetInnerHTML={{ __html: cssVars }} />

      <div className="min-h-screen bg-muted/30 pt-20 pb-16 font-sans">
        <Container size="xl" className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <Badge variant="primary" size="sm">Template Engine Showcase</Badge>
              </div>
              <Heading as="h1" size="3xl">
                Dynamic Theme & Layout Switcher
              </Heading>
              <Text className="text-muted-foreground mt-2 max-w-2xl">
                Experience the absolute flexibility of the Crowdera NGO template. Switch between sample causes to see how branding tokens and section variants update instantly without writing or duplicating a single line of code.
              </Text>
            </div>

            {/* Sandbox Theme Switcher */}
            <div className="flex items-center gap-3 self-start md:self-center bg-surface border border-border p-1.5 rounded-xl shadow-elevation-1">
              <span className="text-xs font-semibold px-2 text-muted-foreground uppercase tracking-wide">
                Preview Mode
              </span>
              <button
                onClick={() => setPreviewMode("light")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                  previewMode === "light"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                Light Theme
              </button>
              <button
                onClick={() => setPreviewMode("dark")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                  previewMode === "dark"
                    ? "bg-neutral-900 text-neutral-100 shadow"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                Dark Theme
              </button>
            </div>
          </div>

          {/* Setup / Config Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Control Sidebar */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Presets Switcher Card */}
              <div className="bg-surface border border-border rounded-2xl p-5 shadow-elevation-1">
                <Heading as="h2" size="sm" className="mb-4 font-bold flex items-center gap-2">
                  <Settings className="h-4 w-4 text-primary" />
                  Select Organization Config
                </Heading>
                <div className="flex flex-col gap-2">
                  {presetsList.map((preset) => {
                    const Icon = preset.icon;
                    const isActive = activePresetKey === preset.key;
                    return (
                      <button
                        key={preset.key}
                        onClick={() => setActivePresetKey(preset.key)}
                        className={cn(
                          "w-full flex items-center gap-3 p-3.5 rounded-xl text-left transition-all duration-base",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-elevation-2 translate-x-1"
                            : "hover:bg-muted text-foreground bg-muted/40"
                        )}
                      >
                        <span
                          className={cn(
                            "h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0",
                            isActive ? "bg-white/20 text-white" : preset.color
                          )}
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <div>
                          <p className="font-semibold text-sm leading-tight">{preset.name}</p>
                          <p className={cn("text-[10px] mt-0.5", isActive ? "text-white/70" : "text-muted-foreground")}>
                            {preset.key === "education"
                              ? "Teal & Gold • Carousel"
                              : preset.key === "healthcare"
                              ? "Teal & Orange • Video"
                              : preset.key === "animal"
                              ? "Olive & Brown • Image"
                              : "Emerald • Image BG"}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Template Registry Metadata Info */}
              <div className="bg-surface border border-border rounded-2xl p-5 shadow-elevation-1 text-xs">
                <Heading as="h3" size="xs" className="mb-3 font-bold flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Template Metadata
                </Heading>
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="text-muted-foreground font-semibold">Active Org</span>
                    <p className="font-semibold text-foreground mt-0.5">{org.name}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-semibold">Active Theme</span>
                    <p className="font-mono text-foreground bg-muted p-1 rounded mt-0.5">{theme.name}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-semibold">Cause Type</span>
                    <p className="font-semibold text-foreground mt-0.5 capitalize">{org.causeType}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-semibold">Template ID</span>
                    <code className="block p-1 bg-muted rounded font-mono text-[10px] mt-0.5">
                      {templateMetadata.id}
                    </code>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-semibold">Version</span>
                    <p className="mt-0.5 text-foreground">{templateMetadata.version}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layout Configuration Table */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div className="bg-surface border border-border rounded-2xl p-6 shadow-elevation-1">
                <Heading as="h2" size="sm" className="mb-4 font-bold flex items-center gap-2 border-b border-border pb-3">
                  <Layers className="h-4.5 w-4.5 text-primary" />
                  Variant Composition Mapping
                </Heading>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="p-3.5 bg-muted/40 rounded-xl border border-border/60">
                    <span className="text-muted-foreground font-semibold block mb-1">Hero Section</span>
                    <Badge variant="primary" size="sm">{homepage.hero.variant || "carousel"}</Badge>
                    <p className="text-[10px] text-muted-foreground mt-1.5">
                      {homepage.hero.variant === "carousel"
                        ? "Horizontal slider with autoplay"
                        : homepage.hero.variant === "video"
                        ? "Rich video backdrop + text overlays"
                        : "Single dramatic static image"}
                    </p>
                  </div>

                  <div className="p-3.5 bg-muted/40 rounded-xl border border-border/60">
                    <span className="text-muted-foreground font-semibold block mb-1">About Section</span>
                    <Badge variant="secondary" size="sm">{homepage.about.variant || "text-image"}</Badge>
                    <p className="text-[10px] text-muted-foreground mt-1.5">
                      {homepage.about.variant === "text-image"
                        ? "Text left, large media card right"
                        : homepage.about.variant === "icon-grid"
                        ? "Core stories + four support icons"
                        : homepage.about.variant === "image-text"
                        ? "Media card left, stories right"
                        : "Simple centered text block"}
                    </p>
                  </div>

                  <div className="p-3.5 bg-muted/40 rounded-xl border border-border/60">
                    <span className="text-muted-foreground font-semibold block mb-1">Gallery Section</span>
                    <Badge variant="outline" size="sm">{homepage.gallery.variant || "masonry"}</Badge>
                    <p className="text-[10px] text-muted-foreground mt-1.5">
                      {homepage.gallery.variant === "masonry"
                        ? "Dynamic variable heights grid"
                        : homepage.gallery.variant === "grid"
                        ? "Equal-sized aspect square grid"
                        : "Horizontal scrolling slides"}
                    </p>
                  </div>

                  <div className="p-3.5 bg-muted/40 rounded-xl border border-border/60">
                    <span className="text-muted-foreground font-semibold block mb-1">CTA Section</span>
                    <Badge variant="success" size="sm">{homepage.ctaBand.variant || "centered"}</Badge>
                    <p className="text-[10px] text-muted-foreground mt-1.5">
                      {homepage.ctaBand.variant === "split"
                        ? "Two-column description and action button"
                        : homepage.ctaBand.variant === "minimal"
                        ? "Compact horizontal navigation row"
                        : homepage.ctaBand.variant === "image-background"
                        ? "Image background with dark overlay"
                        : "Center-aligned large headline action block"}
                    </p>
                  </div>
                </div>

                <div className="mt-5 p-3.5 bg-primary/5 rounded-xl border border-primary/20 flex gap-2 text-xs text-foreground">
                  <Info className="h-4.5 w-4.5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-primary">How this works under the hood</span>
                    <Text size="xs" className="mt-1 text-muted-foreground">
                      Each section component reads a <code>variant</code> property from the active configuration object. By supplying a new config, the layout instantly restructures itself, loads the corresponding media assets, and changes Tailwind theme tokens — achieving a customized appearance in milliseconds.
                    </Text>
                  </div>
                </div>
              </div>

              {/* Live Preview Wrapper */}
              <div className="border border-border rounded-3xl overflow-hidden shadow-elevation-3">
                {/* Sandbox Ribbon */}
                <div className="bg-neutral-900 text-white px-5 py-3 flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Live Interactive Sandbox Container</span>
                  </div>
                  <span className="text-[10px] tracking-wide uppercase px-2 py-0.5 bg-white/10 rounded">
                    Scope: .demo-preview-scope
                  </span>
                </div>

                {/* Scoped Preview Screen */}
                <div className={cn(
                  "demo-preview-scope overflow-hidden transition-colors duration-500",
                  previewMode === "dark" ? "bg-neutral-950 text-neutral-100 dark" : "bg-white text-neutral-900"
                )}>
                  {/* Render Core Sections */}
                  <HeroSection config={homepage.hero} />
                  <AboutSection config={homepage.about} />
                  <GallerySection config={homepage.gallery} />
                  <CallToActionSection config={homepage.ctaBand} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
