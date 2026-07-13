/**
 * app/style-guide/page.tsx
 *
 * Living Style Guide & Design System.
 * Renders all core design tokens, colors, typography, buttons, cards, spacing, and forms.
 * Integrates directly with tailwind.config.ts and themes/default.ts.
 */
"use client";
import * as React from "react";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { Heading } from "@/components/core/Heading";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { Card, CardHeader, CardBody, CardTitle, CardDescription, CardFooter } from "@/components/core/Card";
import { Input, Label, FieldError, FieldHint } from "@/components/core/Input";
import { Textarea } from "@/components/core/Textarea";
import { defaultTheme } from "@/themes/default";
import { Palette, Type, Square, Sliders, Layers, Monitor } from "lucide-react";

// Spacing scale from tailwind.config.ts
const SPACING_SCALE = [
  { token: "1", value: "4px", desc: "Base Space Unit" },
  { token: "2", value: "8px", desc: "Grid/Padding Unit" },
  { token: "3", value: "12px", desc: "Small Card Padding" },
  { token: "4", value: "16px", desc: "Standard Component Gap" },
  { token: "5", value: "20px", desc: "Standard Padding" },
  { token: "6", value: "24px", desc: "Container Padding" },
  { token: "8", value: "32px", desc: "Section Small Spacing" },
  { token: "10", value: "40px", desc: "Section Medium Spacing" },
  { token: "12", value: "48px", desc: "Section Large Spacing" },
  { token: "16", value: "64px", desc: "Layout Outer Padding" },
  { token: "20", value: "80px", desc: "Hero/Landing Padding" },
  { token: "24", value: "96px", desc: "Page Block Gap" },
  { token: "32", value: "128px", desc: "Deep Section Gap" },
  { token: "40", value: "160px", desc: "Full Page Bounds" },
  { token: "48", value: "192px", desc: "Extended Bounds" },
  { token: "56", value: "224px", desc: "Extreme Block Spacing" },
  { token: "64", value: "256px", desc: "Footer Top Boundary" },
];

// Breakpoints from tailwind.config.ts
const BREAKPOINTS = [
  { token: "sm", value: "640px", desc: "Mobile to Tablet boundary" },
  { token: "md", value: "768px", desc: "Tablet vertical bounds" },
  { token: "lg", value: "1024px", desc: "Tablet to Desktop boundary" },
  { token: "xl", value: "1280px", desc: "Standard Desktop resolution" },
  { token: "2xl", value: "1440px", desc: "Ultra-wide Desktop screen" },
];

export default function StyleGuidePage() {
  const [activeTab, setActiveTab] = React.useState<"colors" | "typography" | "components" | "layout">("colors");

  return (
    <Section padding="xl" className="pt-24 min-h-screen bg-[hsl(240_20%_4%)] text-white">
      <Container>
        {/* Header Block */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10">
            System Spec v1.0
          </Badge>
          <h1 className="font-display font-bold text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-tight tracking-tight">
            Design <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">System Tokens</span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            Explore the active token schema, color variables, UI components, typography scales, and responsive layout rules in real time.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center border-b border-neutral-800 mb-12">
          <div className="flex gap-8 overflow-x-auto pb-4">
            {(["colors", "typography", "components", "layout"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 text-sm font-semibold capitalize transition-all border-b-2 px-1 py-2 -mb-5 ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-neutral-400 hover:text-white"
                }`}
              >
                {tab === "colors" && <Palette className="h-4 w-4" />}
                {tab === "typography" && <Type className="h-4 w-4" />}
                {tab === "components" && <Sliders className="h-4 w-4" />}
                {tab === "layout" && <Layers className="h-4 w-4" />}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ─── COLOR PALETTE TAB ─── */}
        {activeTab === "colors" && (
          <div className="space-y-12 animate-fade-in">
            {/* Light Mode Palette */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Palette className="h-6 w-6 text-primary" />
                <Heading as="h2" size="lg" className="text-white">
                  Light Theme Color Tokens
                </Heading>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Object.entries(defaultTheme.light.colors).map(([key, val]) => {
                  if (typeof val === "string") {
                    return (
                      <div key={key} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 flex flex-col gap-4">
                        <div
                          className="h-16 rounded-xl border border-white/10"
                          style={{ backgroundColor: `hsl(${val})` }}
                        />
                        <div>
                          <p className="font-semibold text-sm text-white">{key}</p>
                          <p className="text-xs text-neutral-500 font-mono mt-1">hsl({val})</p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Dark Mode Palette */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Palette className="h-6 w-6 text-amber-500" />
                <Heading as="h2" size="lg" className="text-white">
                  Dark Theme Color Tokens
                </Heading>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Object.entries(defaultTheme.dark.colors).map(([key, val]) => {
                  if (typeof val === "string") {
                    return (
                      <div key={key} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 flex flex-col gap-4">
                        <div
                          className="h-16 rounded-xl border border-white/10"
                          style={{ backgroundColor: `hsl(${val})` }}
                        />
                        <div>
                          <p className="font-semibold text-sm text-white">{key}</p>
                          <p className="text-xs text-neutral-500 font-mono mt-1">hsl({val})</p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        )}

        {/* ─── TYPOGRAPHY TAB ─── */}
        {activeTab === "typography" && (
          <div className="space-y-12 animate-fade-in">
            {/* Fonts */}
            <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Type className="h-6 w-6 text-primary" />
                <Heading as="h2" size="lg" className="text-white">
                  Active Font Families
                </Heading>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                    Display Typography
                  </span>
                  <p className="font-display font-bold text-3xl sm:text-4xl text-white">
                    Plus Jakarta Sans / Outfit
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Used for large headings, page headers, sliders, hero titles, and impactful call-to-actions.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                    Body Typography
                  </span>
                  <p className="font-body text-3xl sm:text-4xl text-neutral-200">
                    Inter / Plus Jakarta Sans
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Used for description texts, cards body, news, forms input, labels, footer, and utility texts.
                  </p>
                </div>
              </div>
            </div>

            {/* Type Scale */}
            <div>
              <Heading as="h2" size="lg" className="text-white mb-6">
                Modular Type Scale
              </Heading>
              <div className="space-y-6">
                {[
                  { tag: "h1 (Hero)", cls: "text-[clamp(2.5rem,8vw,6.5rem)] font-bold font-display", label: "Hero Title Sample" },
                  { tag: "h1 (Default)", cls: "text-[clamp(2rem,5vw,3.75rem)] font-bold font-display", label: "Primary Heading Sample" },
                  { tag: "h2 (Section)", cls: "text-3xl sm:text-4xl font-bold font-display", label: "Section Headline Example" },
                  { tag: "h3 (Card)", cls: "text-xl font-bold", label: "Card Subtitle Text" },
                  { tag: "Body (Lead)", cls: "text-lg text-neutral-300 leading-relaxed", label: "Large lead paragraph containing core page insights and contextual flow." },
                  { tag: "Body (Base)", cls: "text-base text-neutral-400 leading-relaxed", label: "Standard body text used across paragraphs, card summaries, and story segments." },
                  { tag: "Body (Small)", cls: "text-sm text-neutral-400", label: "Metadata and small descriptions." },
                  { tag: "Caption / Hint", cls: "text-xs text-neutral-500 uppercase tracking-widest font-semibold", label: "Tag or Eyebrow Label" },
                ].map((scale, idx) => (
                  <div key={idx} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="md:w-1/4">
                      <p className="font-bold text-sm text-white">{scale.tag}</p>
                      <p className="text-xs text-neutral-500 font-mono mt-1">{scale.cls}</p>
                    </div>
                    <div className="md:w-3/4">
                      <p className={scale.cls}>{scale.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── UI COMPONENTS TAB ─── */}
        {activeTab === "components" && (
          <div className="space-y-12 animate-fade-in">
            {/* Buttons Grid */}
            <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 sm:p-12">
              <Heading as="h2" size="lg" className="text-white mb-8">
                Button Variant Framework
              </Heading>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Primary Brand</span>
                  <div>
                    <Button variant="primary">Primary Action</Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Secondary Outlined</span>
                  <div>
                    <Button variant="secondary">Secondary Link</Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Ghost Minimal</span>
                  <div>
                    <Button variant="ghost">Ghost Button</Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Donate CTA</span>
                  <div>
                    <Button variant="donate">Donate Now</Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Neutral Outlined</span>
                  <div>
                    <Button variant="outline">Customize Live</Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Destructive Action</span>
                  <div>
                    <Button variant="destructive">Delete Project</Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Loading State</span>
                  <div>
                    <Button variant="primary" isLoading>Submitting</Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Disabled State</span>
                  <div>
                    <Button variant="primary" disabled>Locked Option</Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Sizes</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button variant="primary" size="xs">XS</Button>
                    <Button variant="primary" size="sm">SM</Button>
                    <Button variant="primary" size="base">Base</Button>
                    <Button variant="primary" size="md">MD</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div>
              <Heading as="h2" size="lg" className="text-white mb-6">
                Card Layout Variants
              </Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="default" interactive>
                  <CardHeader>
                    <Badge variant="default" className="w-fit">Default Variant</Badge>
                  </CardHeader>
                  <CardBody>
                    <CardTitle>Interactive Hover Card</CardTitle>
                    <CardDescription>
                      Scales subtly to 1.025 on hover with a lifting shadow transition for premium micro-interaction.
                    </CardDescription>
                  </CardBody>
                  <CardFooter>
                    <Button variant="secondary" size="sm">Read More</Button>
                  </CardFooter>
                </Card>

                <Card variant="elevated">
                  <CardHeader>
                    <Badge variant="solid" className="w-fit">Elevated Variant</Badge>
                  </CardHeader>
                  <CardBody>
                    <CardTitle>Deep Shadow Card</CardTitle>
                    <CardDescription>
                      Applies a deep structural shadow (elevation-3) perfect for panels that need high separation from surface.
                    </CardDescription>
                  </CardBody>
                  <CardFooter>
                    <Button variant="ghost" size="sm">Action</Button>
                  </CardFooter>
                </Card>

                <Card variant="glass">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit border-white/30 text-white">Glassmorphism</Badge>
                  </CardHeader>
                  <CardBody>
                    <CardTitle>Frosted Glass Card</CardTitle>
                    <CardDescription>
                      Applies a dynamic backdrop blur effect overlay that blends seamlessly into colorful backgrounds.
                    </CardDescription>
                  </CardBody>
                  <CardFooter>
                    <Button variant="outline" size="sm">View Detail</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Forms Inputs */}
            <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 sm:p-12">
              <Heading as="h2" size="lg" className="text-white mb-8">
                Form Inputs & validation
              </Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                <div className="space-y-2">
                  <Label htmlFor="standard-input">Input (Default State)</Label>
                  <Input id="standard-input" placeholder="Enter your full name" />
                  <FieldHint>Hint: Type your name as it appears on official docs</FieldHint>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="error-input">Input (Error Validation)</Label>
                  <Input id="error-input" placeholder="your-email@domain.com" defaultValue="invalid-email" className="border-error focus:ring-error" />
                  <FieldError>Error: Please enter a valid email format</FieldError>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="textbox">Textarea Element</Label>
                  <Textarea id="textbox" placeholder="Describe your volunteer proposal..." rows={4} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── SPACING & LAYOUT TAB ─── */}
        {activeTab === "layout" && (
          <div className="space-y-12 animate-fade-in">
            {/* Spacing Grid */}
            <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Square className="h-6 w-6 text-primary" />
                <Heading as="h2" size="lg" className="text-white">
                  Design Spacing Scale (8px Grid)
                </Heading>
              </div>
              <div className="space-y-6">
                {SPACING_SCALE.slice(0, 10).map((space) => (
                  <div key={space.token} className="flex items-center gap-6">
                    <div className="w-24 text-sm font-semibold text-neutral-400">
                      space-{space.token} ({space.value})
                    </div>
                    <div className="flex-1 bg-neutral-950 rounded-md overflow-hidden h-4 relative">
                      <div
                        className="bg-primary h-full rounded-r-sm"
                        style={{ width: space.value === "4px" ? "4px" : space.value === "8px" ? "8px" : space.value === "12px" ? "12px" : space.value === "16px" ? "16px" : space.value === "20px" ? "20px" : space.value === "24px" ? "24px" : space.value === "32px" ? "32px" : space.value === "40px" ? "40px" : space.value === "48px" ? "48px" : "64px" }}
                      />
                    </div>
                    <div className="w-48 text-xs text-neutral-500">{space.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Breakpoints */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="h-6 w-6 text-primary" />
                <Heading as="h2" size="lg" className="text-white">
                  Responsive Media Breakpoints
                </Heading>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {BREAKPOINTS.map((bp) => (
                  <div key={bp.token} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4 text-center">
                    <Badge variant="outline" className="mx-auto w-fit border-primary/20 text-primary">
                      {bp.token}
                    </Badge>
                    <div>
                      <p className="font-bold text-xl text-white">{bp.value}</p>
                      <p className="text-xs text-neutral-500 mt-2">{bp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
