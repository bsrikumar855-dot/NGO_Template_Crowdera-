/**
 * components/sections/AboutSection.tsx
 *
 * About section — 5 layout variants controlled entirely by config.
 * text-image | image-text | text-video | text-only | icon-grid
 *
 * Reuses: Badge, Heading, Text, Button, Section, Container
 * Animation: scroll-triggered reveal via IntersectionObserver
 */
"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Section } from "@/components/core/Section";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { AboutConfig, ImageAsset, VideoAsset, AboutIconItem } from "@/types";

/* ── Type guards ─────────────────────────────────────────────── */
function isImageAsset(m: ImageAsset | VideoAsset | undefined): m is ImageAsset {
  return !!m && "alt" in m;
}

/* ── Dynamic Lucide icon renderer ───────────────────────────── */
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

/* ── Media Column ─────────────────────────────────────────────── */
function MediaColumn({ media }: { media: ImageAsset | VideoAsset }) {
  if (isImageAsset(media)) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-elevation-4">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    );
  }

  // Video
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-elevation-4 bg-neutral-900">
      <video
        src={media.src}
        poster={media.poster}
        autoPlay={media.autoplay !== false}
        loop={media.loop !== false}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="About video"
      />
    </div>
  );
}

/* ── Quick stats row ─────────────────────────────────────────── */
function StatsRow({ stats }: { stats: NonNullable<AboutConfig["stats"]> }) {
  return (
    <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-border">
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col gap-0.5">
          <span className="font-display font-bold text-2xl text-primary tabular-nums">
            {stat.value}
          </span>
          <span className="text-xs text-muted-foreground font-medium">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Icon Grid Items ─────────────────────────────────────────── */
function IconGridItem({ item }: { item: AboutIconItem }) {
  return (
    <div className="flex gap-4 group">
      <div
        className={cn(
          "h-12 w-12 rounded-xl flex-shrink-0",
          "bg-primary/10 flex items-center justify-center",
          "group-hover:bg-primary group-hover:text-primary-foreground",
          "transition-all duration-base"
        )}
      >
        <DynamicIcon name={item.icon} className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground text-base mb-1">{item.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

/* ── Text Column ─────────────────────────────────────────────── */
function TextColumn({ config, isVisible }: { config: AboutConfig; isVisible: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {config.badge && (
        <Badge variant="default" size="md">{config.badge}</Badge>
      )}

      <Heading as="h2" size="2xl">
        {config.headline}
      </Heading>

      <div className="flex flex-col gap-4">
        {config.body.map((paragraph, i) => (
          <Text key={i} as="p" size="base" color="muted" leading="body">
            {paragraph}
          </Text>
        ))}
      </div>

      {config.stats && config.stats.length > 0 && (
        <StatsRow stats={config.stats} />
      )}

      {config.iconItems && config.iconItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
          {config.iconItems.map((item) => (
            <IconGridItem key={item.id} item={item} />
          ))}
        </div>
      )}

      {config.cta && (
        <div className="pt-2">
          <Link href={config.cta.href} target={config.cta.external ? "_blank" : undefined}>
            <Button variant={config.cta.variant ?? "secondary"} size="lg">
              {config.cta.label}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

/* ── Main AboutSection ───────────────────────────────────────── */
export interface AboutSectionProps {
  config: AboutConfig;
}

export function AboutSection({ config }: AboutSectionProps) {
  const { layout } = config;
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  // text-only / icon-grid — single column centered
  if (layout === "text-only" || (layout === "icon-grid" && !config.media)) {
    return (
      <Section surface="default" padding="lg" ariaLabel="About the organization">
        <Container size="lg">
          <div
            ref={sectionRef}
            className={cn(
              "max-w-2xl mx-auto transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <TextColumn config={config} isVisible={isVisible} />
          </div>
        </Container>
      </Section>
    );
  }

  // icon-grid with media — text on right, icons left
  if (layout === "icon-grid" && config.iconItems) {
    return (
      <Section surface="muted" padding="lg" ariaLabel="About the organization">
        <Container>
          <div
            ref={sectionRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Icon grid */}
            <div
              className={cn(
                "grid grid-cols-1 gap-8 transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}
            >
              {config.iconItems.map((item) => (
                <IconGridItem key={item.id} item={item} />
              ))}
            </div>
            {/* Text */}
            <TextColumn config={{ ...config, iconItems: undefined }} isVisible={isVisible} />
          </div>
        </Container>
      </Section>
    );
  }

  // Two-column layouts: text-image | image-text | text-video
  const textFirst = layout === "text-image" || layout === "text-video";

  return (
    <Section surface="default" padding="lg" ariaLabel="About the organization">
      <Container>
        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Column order controlled by layout prop */}
          <div
            className={cn(
              "transition-all duration-700",
              textFirst ? "lg:order-1" : "lg:order-2",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <TextColumn config={config} isVisible={isVisible} />
          </div>

          <div
            className={cn(
              "transition-all duration-700 delay-150",
              textFirst ? "lg:order-2" : "lg:order-1",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {config.media && <MediaColumn media={config.media} />}
          </div>
        </div>
      </Container>
    </Section>
  );
}
