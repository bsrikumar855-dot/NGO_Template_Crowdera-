/**
 * components/sections/ProgramsSection.tsx
 *
 * Programs section — responsive card grid.
 * Auto-switches to horizontal carousel when items > carouselThreshold (default 3).
 * Reuses: Card, CardImage, CardBody, CardTitle, CardDescription, CardFooter
 * Reuses: Badge, Button, Section, Container, SectionHeader
 */
"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/core/Card";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Section } from "@/components/core/Section";
import { Container } from "@/components/core/Container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SectionHeader } from "./SectionHeader";
import type { ProgramsConfig, ProgramCard as ProgramCardType } from "@/types";

/* ── Single Program Card ─────────────────────────────────────── */
function ProgramCardItem({ program }: { program: ProgramCardType }) {
  return (
    <Card variant="default" interactive className="group h-full">
      <CardImage aspectRatio="video">
        <Image
          src={program.image.src}
          alt={program.image.alt}
          fill
          className="object-cover transition-transform duration-slow group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {program.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="solid" size="sm">
              {program.badge}
            </Badge>
          </div>
        )}
        {program.featured && (
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="secondary" size="sm">Featured</Badge>
          </div>
        )}
      </CardImage>

      <CardBody>
        <CardTitle as="h3" className="text-base leading-snug group-hover:text-primary transition-colors">
          {program.title}
        </CardTitle>
        <CardDescription>{program.description}</CardDescription>

        {program.tags && program.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {program.tags.map((tag) => (
              <Badge key={tag} variant="muted" size="sm">{tag}</Badge>
            ))}
          </div>
        )}
      </CardBody>

      <CardFooter>
        <Link href={program.cta.href} tabIndex={-1} aria-hidden="true">
          <Button
            variant="secondary"
            size="sm"
            trailingIcon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            {program.cta.label}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

/* ── Carousel wrapper for > threshold items ──────────────────── */
function ProgramsCarousel({ items }: { items: ProgramCardType[] }) {
  const [index, setIndex] = React.useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, items.length - visibleCount);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <div className="relative" onKeyDown={handleKeyDown}>
      {/* Overflow container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-base ease-smooth"
          style={{
            transform: `translateX(calc(-${index} * (100% / ${visibleCount}) - ${index} * 24px / ${visibleCount}))`,
          }}
        >
          {items.map((program) => (
            <div
              key={program.id}
              className="flex-shrink-0"
              style={{ width: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})` }}
            >
              <ProgramCardItem program={program} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous programs"
          leadingIcon={<ChevronLeft className="h-4 w-4" />}
          srLabel="Previous"
        />

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to group ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-base",
                i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={next}
          disabled={index === maxIndex}
          aria-label="Next programs"
          leadingIcon={<ChevronRight className="h-4 w-4" />}
          srLabel="Next"
        />
      </div>
    </div>
  );
}

/* ── Main ProgramsSection ────────────────────────────────────── */
export interface ProgramsSectionProps {
  config: ProgramsConfig;
}

export function ProgramsSection({ config }: ProgramsSectionProps) {
  const {
    variant,
    badge,
    headline,
    subheadline,
    items,
    cta,
    carouselThreshold = 3,
  } = config;

  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.05 });
  const useCarousel = variant === "carousel" || (variant !== "grid" && items.length > carouselThreshold);

  return (
    <Section surface="muted" padding="lg" ariaLabel="Programs">
      <Container>
        <div
          ref={sectionRef}
          className={cn(
            "flex flex-col gap-10 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <SectionHeader badge={badge} headline={headline} subheadline={subheadline} />

          {/* Grid (≤ threshold) or Carousel (> threshold) */}
          {useCarousel ? (
            <ProgramsCarousel items={items} />
          ) : (
            <div
              className={cn(
                "grid gap-6",
                items.length === 1 && "grid-cols-1 max-w-sm mx-auto",
                items.length === 2 && "grid-cols-1 sm:grid-cols-2",
                items.length === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {items.map((program) => (
                <ProgramCardItem key={program.id} program={program} />
              ))}
            </div>
          )}

          {/* Section-level CTA */}
          {cta && (
            <div className="flex justify-center">
              <Link href={cta.href}>
                <Button
                  variant={cta.variant ?? "secondary"}
                  size="lg"
                  trailingIcon={<ArrowRight className="h-4 w-4" />}
                >
                  {cta.label}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
