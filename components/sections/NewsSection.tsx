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
    variant = "cards",
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

  const renderContent = () => {
    if (variant === "magazine") {
      const featuredItem = items[0];
      const otherItems = items.slice(1, 4);

      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Featured Big News */}
          {featuredItem && (
            <div className="lg:col-span-2">
              <Link
                href={featuredItem.href}
                className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl overflow-hidden bg-surface border border-border hover:shadow-elevation-3 transition-all duration-base"
                aria-label={`Featured article: ${featuredItem.title}`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={featuredItem.image.src}
                    alt={featuredItem.image.alt}
                    fill
                    className="object-cover transition-transform duration-slow group-hover:scale-103"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  {featuredItem.category && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="solid" size="md">{featuredItem.category}</Badge>
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      <time dateTime={featuredItem.date}>{formatDateShort(featuredItem.date)}</time>
                    </span>
                    {featuredItem.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {featuredItem.readTime} min read
                      </span>
                    )}
                    {featuredItem.author && <span>· {featuredItem.author}</span>}
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {featuredItem.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
                    {featuredItem.summary}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                      Read Full Article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Magazine Sidebar */}
          <div className="flex flex-col gap-6">
            {otherItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl bg-surface border border-border p-4 hover:shadow-elevation-2 transition-all"
                aria-label={`Read sidebar item: ${item.title}`}
              >
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-base"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <span>{formatDateShort(item.date)}</span>
                      {item.category && (
                        <span className="px-1.5 py-0.5 rounded bg-muted font-medium">{item.category}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    if (variant === "timeline") {
      return (
        <div className="relative max-w-3xl mx-auto pl-6 md:pl-0">
          {/* Vertical Center Line */}
          <div
            className="absolute left-[9px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Circle dot on line */}
                  <div
                    className="absolute left-[9px] md:left-1/2 top-2 md:top-1/2 h-4 w-4 rounded-full border-4 border-muted bg-primary -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-elevation-1"
                    aria-hidden="true"
                  />

                  {/* Date column */}
                  <div
                    className={cn(
                      "w-full md:w-1/2 flex mb-2 md:mb-0",
                      isLeft ? "md:justify-end md:pr-10" : "md:order-2 md:justify-start md:pl-10"
                    )}
                  >
                    <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-primary">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <time dateTime={item.date}>{formatDateShort(item.date)}</time>
                      {item.category && (
                        <Badge variant="secondary" size="sm" className="ml-2">
                          {item.category}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Article brief */}
                  <div
                    className={cn(
                      "w-full md:w-1/2 pl-6 md:pl-0",
                      isLeft ? "md:order-2 md:pl-10" : "md:pr-10"
                    )}
                  >
                    <Link
                      href={item.href}
                      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl bg-surface border border-border hover:border-primary hover:shadow-elevation-2 transition-all p-5"
                      aria-label={`Read: ${item.title}`}
                    >
                      <h4 className="font-display font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
                        {item.summary}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                        Read article <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Default: cards grid
    return (
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
    );
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
          {renderContent()}

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
