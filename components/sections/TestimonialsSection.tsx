/**
 * components/sections/TestimonialsSection.tsx
 *
 * Testimonials carousel section.
 * Quote | Photo | Name | Role | Organization | Rating (optional)
 * Keyboard navigable, ARIA live region, autoplay with pause-on-focus.
 */
"use client";
import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/core/Section";
import { Container } from "@/components/core/Container";
import { Button } from "@/components/core/Button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SectionHeader } from "./SectionHeader";
import type { TestimonialsConfig, TestimonialCard } from "@/types";

/* ── Star Rating ─────────────────────────────────────────────── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "h-4 w-4",
            star <= rating ? "text-warning fill-warning" : "text-border fill-border"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/* ── Single Testimonial Card ─────────────────────────────────── */
function TestimonialSlide({
  item,
  isActive,
}: {
  item: TestimonialCard;
  isActive: boolean;
}) {
  return (
    <div
      role="group"
      aria-label={`Testimonial from ${item.authorName}`}
      className={cn(
        "flex flex-col gap-6 p-8 md:p-10 rounded-2xl",
        "bg-surface border border-border shadow-elevation-2",
        "transition-all duration-500",
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-[0.98] pointer-events-none"
      )}
    >
      {/* Quote icon + rating */}
      <div className="flex items-start justify-between gap-4">
        <Quote className="h-10 w-10 text-primary/30 flex-shrink-0 -scale-x-100" aria-hidden="true" />
        {item.rating && <StarRating rating={item.rating} />}
      </div>

      {/* Quote text */}
      <blockquote
        className={cn(
          "font-display text-foreground",
          "text-[clamp(1.1rem,2vw,1.375rem)]",
          "leading-relaxed italic",
          "flex-1"
        )}
      >
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-4 pt-4 border-t border-border">
        {item.authorImage ? (
          <div className="relative h-14 w-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
            <Image
              src={item.authorImage.src}
              alt={item.authorImage.alt}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
        ) : (
          <div
            className="h-14 w-14 rounded-full flex-shrink-0 bg-primary/10 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="font-display font-bold text-primary text-xl">
              {item.authorName[0]}
            </span>
          </div>
        )}

        <div>
          <p className="font-semibold text-foreground text-base">{item.authorName}</p>
          {item.authorRole && (
            <p className="text-sm text-muted-foreground">{item.authorRole}</p>
          )}
          {item.authorOrg && (
            <p className="text-xs text-muted-foreground mt-0.5">{item.authorOrg}</p>
          )}
        </div>
      </footer>
    </div>
  );
}

/* ── Main TestimonialsSection ────────────────────────────────── */
export interface TestimonialsSectionProps {
  config: TestimonialsConfig;
}

export function TestimonialsSection({ config }: TestimonialsSectionProps) {
  const {
    badge,
    headline,
    subheadline,
    items,
    autoplay = true,
    autoplayInterval = 7000,
  } = config;

  const [current, setCurrent] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  // Autoplay
  React.useEffect(() => {
    if (!autoplay || isPaused || items.length < 2) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length);
    }, autoplayInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay, autoplayInterval, items.length, isPaused]);

  const go = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent((index + items.length) % items.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(current - 1);
    if (e.key === "ArrowRight") go(current + 1);
  };

  return (
    <Section surface="default" padding="lg" ariaLabel="Testimonials">
      <Container size="xl">
        <div
          ref={sectionRef}
          className={cn(
            "flex flex-col gap-10 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <SectionHeader badge={badge} headline={headline} subheadline={subheadline} />

          {/* Carousel region */}
          <div
            role="region"
            aria-label="Testimonials carousel"
            aria-live="polite"
            aria-roledescription="carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            className="relative"
          >
            {/* Slides — absolutely stacked */}
            <div className="relative" style={{ minHeight: "320px" }}>
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className={cn(
                    "transition-all duration-500",
                    i === current ? "relative opacity-100 z-10" : "absolute inset-0 opacity-0 z-0 pointer-events-none"
                  )}
                  aria-hidden={i !== current}
                >
                  <TestimonialSlide item={item} isActive={i === current} />
                </div>
              ))}
            </div>

            {/* Controls row */}
            {items.length > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => go(current - 1)}
                  aria-label="Previous testimonial"
                  leadingIcon={<ChevronLeft className="h-4 w-4" />}
                  srLabel="Previous"
                />

                {/* Dots */}
                <div role="tablist" aria-label="Testimonial navigation" className="flex items-center gap-2">
                  {items.map((item, i) => (
                    <button
                      key={item.id}
                      role="tab"
                      aria-selected={i === current}
                      aria-label={`View testimonial from ${item.authorName}`}
                      onClick={() => go(i)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-base",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                        i === current ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                      )}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => go(current + 1)}
                  aria-label="Next testimonial"
                  leadingIcon={<ChevronRight className="h-4 w-4" />}
                  srLabel="Next"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
