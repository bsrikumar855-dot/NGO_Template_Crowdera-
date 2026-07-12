/**
 * app/programs/[slug]/page.tsx
 *
 * Dynamic program detail page.
 * Reuses existing Section, ImpactStatsSection, GallerySection,
 * TestimonialsSection, and CallToActionSection.
 */
import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Card, CardImage, CardBody, CardTitle, CardDescription, CardFooter } from "@/components/core/Card";
import { Breadcrumb } from "@/components/core/Breadcrumb";
import {
  ImpactStatsSection,
  GallerySection,
  TestimonialsSection,
  CallToActionSection,
} from "@/components/sections";
import { programsList } from "@/content/programs";
import type { StatsConfig, GalleryConfig, TestimonialsConfig, CtaBandConfig } from "@/types";

interface ProgramPageProps {
  params: {
    slug: string;
  };
}

/* ── Pre-render Slugs (performance) ─────────────────────────── */
export async function generateStaticParams() {
  return programsList.map((prog) => ({
    slug: prog.slug,
  }));
}

/* ── SEO Metadata ───────────────────────────────────────────── */
export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const program = programsList.find((p) => p.slug === params.slug);
  if (!program) return {};

  return {
    title: `${program.title} — Vidyalaya Foundation`,
    description: program.subtitle,
  };
}

/* ── Detail Page Component ───────────────────────────────────── */
export default function ProgramDetailPage({ params }: ProgramPageProps) {
  const program = programsList.find((p) => p.slug === params.slug);
  if (!program) {
    notFound();
  }

  // Filter out current program for related programs (limit to 3)
  const relatedPrograms = programsList
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  // Map Stats Theme for safety
  const mappedStatsConfig: StatsConfig = {
    badge: "Our Impact",
    headline: "Program Results",
    subheadline: "Verified metrics tracking program success.",
    theme: program.stats.theme === "dark" ? "dark" : "light",
    items: program.stats.items,
  };

  // Build Gallery Config
  const mappedGalleryConfig: GalleryConfig = {
    badge: "Field Gallery",
    headline: "Program in Action",
    subheadline: "Captured moments from our centers and classrooms.",
    items: program.gallery.items,
    defaultView: "grid",
    enableLightbox: true,
    categories: ["All"],
  };

  // Build Testimonials Config
  const mappedTestimonialsConfig: TestimonialsConfig = {
    badge: "Stories",
    headline: "Testimonials",
    subheadline: "Hear directly from our program participants.",
    items: program.testimonials.items,
    autoplay: true,
  };

  // Build CTA Config
  const mappedCtaConfig: CtaBandConfig = {
    variant: "centered",
    theme: program.cta.theme === "primary" ? "primary" : "dark",
    badge: program.cta.badge,
    headline: program.cta.headline,
    subheadline: program.cta.subheadline,
    primaryCta: {
      label: program.cta.primaryCta.label,
      href: program.cta.primaryCta.href,
      variant: "donate",
    },
  };

  return (
    <article className="min-h-screen pt-20 font-sans">
      {/* ── Program Hero ────────────────────────────────────────── */}
      <div className="relative bg-neutral-900 text-white min-h-[50vh] flex items-center py-16 overflow-hidden">
        {/* Background Image Backdrop */}
        <div className="absolute inset-0">
          <Image
            src={program.image.src}
            alt={program.image.alt}
            fill
            className="object-cover opacity-35"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
        </div>

        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <Breadcrumb
            items={[
              { label: "Programs", href: "/programs" },
              { label: program.title },
            ]}
            className="mb-8 text-neutral-300 [&_a]:text-neutral-300 hover:[&_a]:text-white [&_span]:text-white"
          />

          <div className="max-w-3xl">
            <Badge variant="secondary" size="md" className="mb-4 shadow">
              {program.category}
            </Badge>
            <Heading as="h1" size="4xl" color="white" className="leading-tight">
              {program.title}
            </Heading>
            <Text size="lg" className="text-white/80 mt-4 leading-relaxed">
              {program.subtitle}
            </Text>
          </div>
        </Container>
      </div>

      {/* ── Overview & Objectives ────────────────────────────────── */}
      <Section padding="lg" surface="default">
        <Container className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Overview text */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Heading as="h2" size="2xl">
              Program Overview
            </Heading>
            {program.overview.map((paragraph, index) => (
              <Text key={index} size="md" className="text-muted-foreground leading-relaxed">
                {paragraph}
              </Text>
            ))}
          </div>

          {/* Objectives Card */}
          <div className="lg:col-span-1">
            <div className="bg-surface border border-border p-6 rounded-3xl shadow-elevation-1">
              <Heading as="h3" size="md" className="mb-4">
                Key Objectives
              </Heading>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                {program.objectives.map((obj, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Impact Statistics Section ────────────────────────────── */}
      <ImpactStatsSection config={mappedStatsConfig} />

      {/* ── Gallery Section ──────────────────────────────────────── */}
      {program.gallery.items.length > 0 && (
        <GallerySection config={mappedGalleryConfig} />
      )}

      {/* ── Testimonials Section ─────────────────────────────────── */}
      {program.testimonials.items.length > 0 && (
        <TestimonialsSection config={mappedTestimonialsConfig} />
      )}

      {/* ── Related Programs ─────────────────────────────────────── */}
      <Section padding="lg" surface="muted">
        <Container>
          <div className="mb-8">
            <Badge variant="primary" size="sm" className="mb-2">More Work</Badge>
            <Heading as="h2" size="2xl">Other Initiatives</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPrograms.map((related) => (
              <Card key={related.id} className="flex flex-col h-full border border-border">
                <CardImage aspectRatio="video" className="relative">
                  <Image
                    src={related.image.src}
                    alt={related.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </CardImage>
                <CardBody className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">
                      {related.category}
                    </span>
                    <CardTitle className="text-base mb-1">{related.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-xs">
                      {related.subtitle}
                    </CardDescription>
                  </div>
                  <CardFooter className="p-0 border-t-0 flex items-center justify-between mt-4">
                    <Link href={`/programs/${related.slug}`}>
                      <Button variant="link" size="sm" className="px-0">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA Section ──────────────────────────────────────────── */}
      <CallToActionSection config={mappedCtaConfig} />
    </article>
  );
}
