/**
 * components/sections/GallerySection.tsx
 *
 * Gallery section with Grid / Masonry view toggle, category filter,
 * Lightbox modal, and mixed image + video support.
 * Accessible: focus trap in lightbox, keyboard navigation, ARIA.
 */
"use client";
import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/core/Section";
import { Container } from "@/components/core/Container";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SectionHeader } from "./SectionHeader";
import type { GalleryConfig, GalleryItem, ImageAsset, VideoAsset } from "@/types";

/* ── Type guards ─────────────────────────────────────────────── */
function isImageAsset(m: ImageAsset | VideoAsset): m is ImageAsset {
  return "alt" in m;
}

/* ── Gallery Thumbnail ───────────────────────────────────────── */
function GalleryThumbnail({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: (index: number) => void;
}) {
  const media = item.media;
  const isImg = isImageAsset(media);

  return (
    <button
      onClick={() => onClick(index)}
      aria-label={item.caption ?? `View ${item.type} ${index + 1}`}
      className={cn(
        "group relative w-full overflow-hidden rounded-xl",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "cursor-zoom-in",
        // Masonry heights — alternate tall/short
        index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-video" : "aspect-square"
      )}
    >
      {isImg ? (
        <Image
          src={(media as ImageAsset).src}
          alt={(media as ImageAsset).alt}
          fill
          className="object-cover transition-transform duration-slow group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-neutral-800">
          {(media as VideoAsset).poster ? (
            <Image
              src={(media as VideoAsset).poster!}
              alt={item.caption ?? "Video thumbnail"}
              fill
              className="object-cover transition-transform duration-slow group-hover:scale-105"
              sizes="33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-800" />
          )}
        </div>
      )}

      {/* Hover overlay */}
      <div className={cn(
        "absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/40",
        "flex items-center justify-center",
        "transition-all duration-base"
      )}>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-base">
          {item.type === "video" ? (
            <Play className="h-10 w-10 text-white drop-shadow-lg fill-white" />
          ) : (
            <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
          )}
        </div>
      </div>

      {/* Caption */}
      {item.caption && (
        <div className={cn(
          "absolute inset-x-0 bottom-0 p-3",
          "bg-gradient-to-t from-black/70 to-transparent",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-base"
        )}>
          <p className="text-white text-xs line-clamp-2">{item.caption}</p>
        </div>
      )}
    </button>
  );
}

/* ── Lightbox ─────────────────────────────────────────────────── */
function Lightbox({
  items,
  startIndex,
  onClose,
}: {
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = React.useState(startIndex);
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);

  const go = (i: number) => setCurrent((i + items.length) % items.length);

  // Focus close button on open, handle keyboard
  React.useEffect(() => {
    closeBtnRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go(current - 1);
      if (e.key === "ArrowRight") go(current + 1);
    };
    document.addEventListener("keydown", handler);
    // Prevent body scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [current]); // eslint-disable-line react-hooks/exhaustive-deps

  const item = items[current];
  const media = item.media;
  const isImg = isImageAsset(media);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className={cn(
        "fixed inset-0 z-50",
        "bg-black/95 backdrop-blur-md",
        "flex items-center justify-center",
        "animate-scale-in"
      )}
    >
      {/* Close */}
      <button
        ref={closeBtnRef}
        onClick={onClose}
        aria-label="Close lightbox"
        className={cn(
          "absolute top-4 right-4 z-10",
          "h-10 w-10 rounded-full",
          "bg-white/10 hover:bg-white/20 text-white",
          "flex items-center justify-center",
          "transition-colors duration-fast",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        )}
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev */}
      {items.length > 1 && (
        <button
          onClick={() => go(current - 1)}
          aria-label="Previous image"
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 z-10",
            "h-11 w-11 rounded-full",
            "bg-white/10 hover:bg-white/20 text-white",
            "flex items-center justify-center",
            "transition-colors duration-fast",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          )}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Media */}
      <div className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16 my-8">
        {isImg ? (
          <Image
            src={(media as ImageAsset).src}
            alt={(media as ImageAsset).alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        ) : (
          <video
            src={(media as VideoAsset).src}
            poster={(media as VideoAsset).poster}
            controls
            autoPlay
            className="absolute inset-0 w-full h-full object-contain"
            aria-label={item.caption ?? "Gallery video"}
          />
        )}
      </div>

      {/* Next */}
      {items.length > 1 && (
        <button
          onClick={() => go(current + 1)}
          aria-label="Next image"
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 z-10",
            "h-11 w-11 rounded-full",
            "bg-white/10 hover:bg-white/20 text-white",
            "flex items-center justify-center",
            "transition-colors duration-fast",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          )}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      {/* Caption + counter */}
      <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-1">
        {item.caption && (
          <p className="text-white/80 text-sm text-center max-w-lg px-4">{item.caption}</p>
        )}
        <p className="text-white/40 text-xs">
          {current + 1} / {items.length}
        </p>
      </div>
    </div>
  );
}

/* ── Main GallerySection ─────────────────────────────────────── */
export interface GallerySectionProps {
  config: GalleryConfig;
}

/* ── Gallery Carousel layout variant ─────────────────────────── */
function GalleryCarousel({
  items,
  onItemClick,
}: {
  items: GalleryItem[];
  onItemClick: (index: number) => void;
}) {
  const [index, setIndex] = React.useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, items.length - visibleCount);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-base ease-smooth animate-fade-in"
          style={{
            transform: `translateX(calc(-${index} * (100% / ${visibleCount}) - ${index} * 16px / ${visibleCount}))`,
          }}
        >
          {items.map((item, i) => {
            const media = item.media;
            const isImg = isImageAsset(media);
            return (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: `calc((100% - ${(visibleCount - 1) * 16}px) / ${visibleCount})` }}
              >
                <button
                  onClick={() => onItemClick(i)}
                  aria-label={item.caption ?? `View ${item.type} ${i + 1}`}
                  className={cn(
                    "group relative w-full overflow-hidden rounded-xl",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    "cursor-zoom-in aspect-video block"
                  )}
                >
                  {isImg ? (
                    <Image
                      src={(media as ImageAsset).src}
                      alt={(media as ImageAsset).alt}
                      fill
                      className="object-cover transition-transform duration-slow group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-800">
                      {(media as VideoAsset).poster ? (
                        <Image
                          src={(media as VideoAsset).poster!}
                          alt={item.caption ?? "Video thumbnail"}
                          fill
                          className="object-cover transition-transform duration-slow group-hover:scale-105"
                          sizes="33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-800" />
                      )}
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/40 flex items-center justify-center transition-all duration-base">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-base">
                      {item.type === "video" ? (
                        <Play className="h-10 w-10 text-white drop-shadow-lg fill-white" />
                      ) : (
                        <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
                      )}
                    </div>
                  </div>

                  {item.caption && (
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base">
                      <p className="text-white text-xs line-clamp-1">{item.caption}</p>
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {items.length > visibleCount && (
        <div className="flex items-center justify-center gap-3 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous gallery items"
            leadingIcon={<ChevronLeft className="h-4 w-4" />}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            disabled={index === maxIndex}
            aria-label="Next gallery items"
            leadingIcon={<ChevronRight className="h-4 w-4" />}
          />
        </div>
      )}
    </div>
  );
}

/* ── Main GallerySection ─────────────────────────────────────── */
export interface GallerySectionProps {
  config: GalleryConfig;
}

export function GallerySection({ config }: GallerySectionProps) {
  const {
    variant,
    badge,
    headline,
    subheadline,
    items,
    defaultView = "masonry",
    enableLightbox = true,
    categories = [],
  } = config;

  // If variant is set, use it. Otherwise, use view state toggled by user.
  const isCarousel = variant === "carousel";
  const [view, setView] = React.useState<"grid" | "masonry">(
    (variant === "grid" || variant === "masonry") ? variant : defaultView
  );

  const [activeCategory, setActiveCategory] = React.useState("All");
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.05 });

  const allCategories = categories.length > 0 ? categories : ["All"];

  const filteredItems = activeCategory === "All"
    ? items
    : items.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    if (enableLightbox) setLightboxIndex(index);
  };

  return (
    <>
      <Section surface="default" padding="lg" ariaLabel="Gallery">
        <Container>
          <div
            ref={sectionRef}
            className={cn(
              "flex flex-col gap-10 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <SectionHeader badge={badge} headline={headline} subheadline={subheadline} />

            {/* Controls row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Category filters */}
              {allCategories.length > 1 && (
                <div role="group" aria-label="Filter gallery by category" className="flex flex-wrap gap-2">
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      aria-pressed={activeCategory === cat}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm font-medium",
                        "transition-all duration-fast",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                        activeCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-700"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              {/* View toggle (hidden if carousel variant is forced) */}
              {!isCarousel && (
                <div className="flex items-center gap-1 bg-muted rounded-lg p-1 ml-auto">
                  {(["grid", "masonry"] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setView(v)}
                      aria-pressed={view === v}
                      aria-label={`${v} view`}
                      className={cn(
                        "px-3 py-1.5 rounded-md text-sm font-medium capitalize",
                        "transition-all duration-fast",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        view === v
                          ? "bg-surface shadow-elevation-1 text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Gallery Content */}
            {isCarousel ? (
              <GalleryCarousel items={filteredItems} onItemClick={openLightbox} />
            ) : (
              <div
                className={cn(
                  view === "grid"
                    ? "grid grid-cols-2 md:grid-cols-3 gap-4"
                    : "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
                )}
              >
                {filteredItems.map((item, i) => (
                  <div
                    key={item.id}
                    className={cn(
                      "transition-all duration-700",
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6",
                      view === "masonry" ? "break-inside-avoid" : ""
                    )}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <GalleryThumbnail
                      item={item}
                      index={i}
                      onClick={openLightbox}
                    />
                  </div>
                ))}
              </div>
            )}

            {filteredItems.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                No items in this category.
              </p>
            )}
          </div>
        </Container>
      </Section>

      {/* Lightbox portal */}
      {enableLightbox && lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
