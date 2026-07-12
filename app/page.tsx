/**
 * app/page.tsx
 *
 * PLACEHOLDER homepage — renders the app shell only.
 * Full homepage implementation comes in Prompt 2.
 *
 * This page demonstrates the design system foundation is working:
 * - Theme tokens
 * - Typography
 * - Components
 * - Layout
 */
import type { Metadata } from "next";
import Link from "next/link";
import { organization } from "@/content/organization";
import {
  Button,
  Badge,
  Card,
  CardBody,
  CardTitle,
  CardDescription,
  Container,
  Section,
  Heading,
  Text,
  Divider,
} from "@/components/core";

export const metadata: Metadata = {
  title: "Foundation Ready — Prompt 1 Complete",
  description: "Design system and component foundation is ready for section implementation.",
};

/* ── Foundation Preview Page ─────────────────────────────────── */
export default function FoundationPage() {
  return (
    <>
      {/* ── Hero Stub ── */}
      <Section
        padding="xl"
        surface="default"
        className="relative overflow-hidden"
        ariaLabel="Foundation status"
      >
        {/* Background decoration */}
        <div
          className="absolute inset-0 -z-10 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, hsl(var(--color-primary)) 0%, transparent 60%), radial-gradient(circle at 80% 20%, hsl(var(--color-secondary)) 0%, transparent 50%)",
          }}
        />

        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="default" size="md" dot className="mb-6">
              Prompt 1 Complete — Foundation Ready
            </Badge>

            <Heading as="h1" size="3xl" align="center" className="mb-6">
              {organization.name}
            </Heading>

            <Text
              as="p"
              size="md"
              color="muted"
              align="center"
              balance
              className="mb-10"
            >
              {organization.tagline}
            </Text>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg">
                Explore Foundation
              </Button>
              <Button variant="secondary" size="lg">
                View Component System
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      {/* ── Foundation Status ── */}
      <Section padding="lg" surface="muted" ariaLabel="Build status">
        <Container size="xl">
          <div className="text-center mb-12">
            <Badge variant="success" size="md" dot className="mb-4">
              All Systems Go
            </Badge>
            <Heading as="h2" size="2xl" align="center" className="mb-3">
              Foundation Architecture Complete
            </Heading>
            <Text as="p" size="base" color="muted" align="center" balance>
              Everything below is wired up and ready for section implementation in Prompt 2.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDATION_STATUS.map((item) => (
              <Card key={item.title} variant="default">
                <CardBody>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-2xl" role="img" aria-label={item.emoji}>
                      {item.emoji}
                    </span>
                    <Badge
                      variant={item.status === "complete" ? "success" : "warning"}
                      size="sm"
                      dot
                    >
                      {item.status === "complete" ? "Complete" : "Pending"}
                    </Badge>
                  </div>
                  <CardTitle as="h3" className="text-base mb-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {item.description}
                  </CardDescription>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Divider />

      {/* ── Component Preview ── */}
      <Section padding="lg" surface="default" ariaLabel="Component system preview">
        <Container size="xl">
          <div className="text-center mb-12">
            <Heading as="h2" size="2xl" align="center" className="mb-3">
              Component System
            </Heading>
            <Text as="p" size="base" color="muted" align="center">
              Foundation components — all token-driven, no hardcoded values.
            </Text>
          </div>

          {/* Button Variants */}
          <div className="mb-12">
            <Text as="p" weight="semibold" size="sm" className="mb-4 uppercase tracking-wider text-muted-foreground">
              Button Variants
            </Text>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="donate">Donate Now</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="primary" isLoading>Loading</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>

          {/* Badge Variants */}
          <div className="mb-12">
            <Text as="p" weight="semibold" size="sm" className="mb-4 uppercase tracking-wider text-muted-foreground">
              Badge Variants
            </Text>
            <div className="flex flex-wrap gap-3 items-center">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="solid">Solid</Badge>
              <Badge variant="success" dot>Success</Badge>
              <Badge variant="warning" dot>Warning</Badge>
              <Badge variant="error" dot>Error</Badge>
              <Badge variant="muted">Muted</Badge>
            </div>
          </div>

          {/* Typography Scale */}
          <div className="mb-12">
            <Text as="p" weight="semibold" size="sm" className="mb-4 uppercase tracking-wider text-muted-foreground">
              Typography Scale
            </Text>
            <div className="flex flex-col gap-3">
              <Heading as="h3" size="3xl" color="gradient">Display — Gradient Hero Text</Heading>
              <Heading as="h3" size="2xl">Heading 2XL — Section Titles</Heading>
              <Heading as="h4" size="xl">Heading XL — Sub-section</Heading>
              <Heading as="h5" size="lg">Heading LG — Card Titles</Heading>
              <Text size="md" color="default">Body MD — Lead paragraphs and subheadlines.</Text>
              <Text size="base" color="muted">Body Base — Standard body text. Used for descriptions and content. Highly readable at 16px with 1.6 line-height.</Text>
              <Text size="sm" color="muted">Body SM — Secondary labels, captions, metadata.</Text>
            </div>
          </div>

          {/* Color System */}
          <div>
            <Text as="p" weight="semibold" size="sm" className="mb-4 uppercase tracking-wider text-muted-foreground">
              Color Token System
            </Text>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {COLOR_SWATCHES.map((swatch) => (
                <div key={swatch.name} className="flex flex-col gap-2">
                  <div
                    className="h-12 rounded-lg border border-border"
                    style={{ backgroundColor: `hsl(var(${swatch.var}))` }}
                    title={swatch.name}
                  />
                  <Text size="xs" color="muted" className="text-center">
                    {swatch.name}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* ── Static Data ─────────────────────────────────────────────── */
const FOUNDATION_STATUS = [
  {
    title: "Design Token System",
    emoji: "🎨",
    status: "complete",
    description: "CSS variables + Tailwind extensions for color, type, spacing, shadows, motion, breakpoints.",
  },
  {
    title: "Typography System",
    emoji: "✍️",
    status: "complete",
    description: "Plus Jakarta Sans (display) + Inter (body). Fluid clamp() scale with modular 1.25 ratio.",
  },
  {
    title: "Theme Architecture",
    emoji: "🌙",
    status: "complete",
    description: "Light + Dark mode as first-class token sets. Runtime org re-theming via CSS custom properties.",
  },
  {
    title: "Content Config System",
    emoji: "📋",
    status: "complete",
    description: "Typed config objects for every section. All 8 homepage sections configured in content/homepage.ts.",
  },
  {
    title: "Foundation Components",
    emoji: "🧩",
    status: "complete",
    description: "Button, Badge, Card, Container, Section, Heading, Text, Input, Textarea, Select, Divider, Skeleton, Spinner.",
  },
  {
    title: "App Shell",
    emoji: "🏗️",
    status: "complete",
    description: "Root layout, ThemeProvider, NavbarPlaceholder, FooterPlaceholder, PageWrapper with skip-to-content.",
  },
  {
    title: "Accessibility Foundation",
    emoji: "♿",
    status: "complete",
    description: "Semantic HTML, focus-visible states, ARIA patterns, prefers-reduced-motion, skip link, keyboard nav.",
  },
  {
    title: "Performance Config",
    emoji: "⚡",
    status: "complete",
    description: "next/image configured, next/font with preload, font-display: swap, package import optimization.",
  },
  {
    title: "Section Implementation",
    emoji: "📄",
    status: "pending",
    description: "Hero, About, Stats, Programs, Testimonials, Gallery, News, CTA Band — scheduled for Prompt 2.",
  },
] as const;

const COLOR_SWATCHES = [
  { name: "Primary",    var: "--color-primary" },
  { name: "Secondary",  var: "--color-secondary" },
  { name: "Background", var: "--color-background" },
  { name: "Surface",    var: "--color-surface" },
  { name: "Muted",      var: "--color-muted" },
  { name: "Border",     var: "--color-border" },
  { name: "Success",    var: "--color-success" },
  { name: "Warning",    var: "--color-warning" },
  { name: "Error",      var: "--color-error" },
  { name: "Neutral 900", var: "--color-neutral-900" },
  { name: "Neutral 500", var: "--color-neutral-500" },
  { name: "Neutral 100", var: "--color-neutral-100" },
];
