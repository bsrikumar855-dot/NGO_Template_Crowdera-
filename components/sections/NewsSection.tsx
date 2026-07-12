/**
 * components/sections/NewsSection.tsx
 *
 * News & Updates section — responsive card grid.
 * Image | Category | Date | Title | Summary | Author | Read Time | CTA
 * Reuses: Card, CardImage, CardBody, CardTitle, CardDescription, CardFooter
 */
"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { cn, formatDateShort } from "@/lib/utils";
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
import type { NewsConfig, NewsCard as NewsCardType } from "@/types";

/* ── Single News Card ────────────────────────────────────────── */
function NewsCardItem({ item }: { item: NewsCardType }) {
  return (
    <Link
      href={item.href}
      className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
      aria-label={`Read: ${item.title}`}
    >
      <Card variant="default" interactive className="h-full">
        <CardImage aspectRatio="video">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            className="object-cover transition-transform duration-slow group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {item.category && (
            <div className="absolute top-3 left-3 z-10">
              <Badge variant="solid" size="sm">{item.category}</Badge>
            </div>
          )}
        </CardImage>

        <CardBody>
          {/* Meta row */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              <time dateTime={item.date}>{formatDateShort(item.date)}</time>
            </span>
            {item.readTime && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {item.readTime} min read
              </span>
            )}
            {item.author && (
              <span className="hidden sm:inline">· {item.author}</span>
            )}
          </div>

          <CardTitle
            as="h3"
            className="text-base leading-snug group-hover:text-primary transition-colors duration-fast line-clamp-2"
          >
            {item.title}
          </CardTitle>

          <CardDescription>{item.summary}</CardDescription>
        </CardBody>

        <CardFooter>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-sm font-semibold text-primary",
              "group-hover:gap-2.5 transition-all duration-fast"
            )}
            aria-hidden="true"
          >
            Read more <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}

/* ── Main NewsSection ────────────────────────────────────────── */
export interface NewsSectionProps {
  config: NewsConfig;
}

export function NewsSection({ config }: NewsSectionProps) {
  const {
    badge,
    headline,
    subheadline,
    items,
    cta,
    postsPerRow = 3,
  } = config;

  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.05 });

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <Section surface="muted" padding="lg" ariaLabel="News and updates">
      <Container>
        <div
          ref={sectionRef}
          className={cn(
            "flex flex-col gap-10 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <SectionHeader badge={badge} headline={headline} subheadline={subheadline} />

          {/* Card grid */}
          <div className={cn("grid gap-6", gridCols[postsPerRow] ?? gridCols[3])}>
            {items.map((item, i) => (
              <div
                key={item.id}
                className={cn(
                  "transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <NewsCardItem item={item} />
              </div>
            ))}
          </div>

          {/* Section CTA */}
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
