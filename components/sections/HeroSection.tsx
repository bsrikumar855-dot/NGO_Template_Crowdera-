/**
 * components/sections/HeroSection.tsx
 *
 * Hero section — supports image, video, and carousel variants.
 * Full-bleed, min-height 90vh, overlay-controlled contrast.
 * Video auto-pauses on mobile and falls back to poster image.
 * Carousel uses pure CSS transitions — no heavy library.
 */
"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronDown, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/core/Button";
import { motion, useReducedMotion } from "framer-motion";
import type { HeroConfig, HeroSlide, ImageAsset, VideoAsset } from "@/types";

/* ── Type guard helpers ──────────────────────────────────────── */
function isImageAsset(media: ImageAsset | VideoAsset): media is ImageAsset {
  return "alt" in media;
}

/* ── Overlay opacity to Tailwind opacity-class ───────────────── */
function overlayStyle(opacity: number = 0.5): React.CSSProperties {
  return { backgroundColor: `rgba(0,0,0,${opacity})` };
}

/* ── Video Slide Media ───────────────────────────────────────── */
function VideoMedia({
  media,
  isMobile,
  isActive,
}: {
  media: VideoAsset;
  isMobile: boolean;
  isActive: boolean;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = React.useState(true);

  // On mobile: pause video to save bandwidth
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isMobile) {
      v.pause();
    } else if (media.autoplay !== false) {
      v.play().catch(() => {/* autoplay blocked — fine */});
    }
  }, [isMobile, media.autoplay]);

  // Pause when this carousel slide is hidden; resume when active
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v || isMobile) return;
    if (isActive && media.autoplay !== false) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [isActive, isMobile, media.autoplay]);

  if (isMobile && media.poster) {
    return (
      <Image
        src={media.poster}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
    );
  }

  return (
    <>
      <video
        ref={videoRef}
        src={media.src}
        poster={media.poster}
        autoPlay={media.autoplay !== false}
        loop={media.loop !== false}
        muted={muted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      {/* Mute toggle */}
      <button
        onClick={() => setMuted((m) => !m)}
        className={cn(
          "absolute bottom-20 right-6 z-20",
          "h-10 w-10 rounded-full",
          "bg-black/40 hover:bg-black/60 text-white",
          "flex items-center justify-center",
          "transition-colors duration-fast",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        )}
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </>
  );
}

/* ── Motion Variants ────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const containerVariantsReduced = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ctaVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

/* ── Single Slide ────────────────────────────────────────────── */
function HeroSlideContent({
  slide,
  isActive,
  isMobile,
}: {
  slide: HeroSlide;
  isActive: boolean;
  isMobile: boolean;
}) {
  const prefersReduced = useReducedMotion();
  const { media, headline, subheadline, primaryCta, secondaryCta, overlayOpacity } = slide;
  const cV = prefersReduced ? containerVariantsReduced : containerVariants;
  const iV = prefersReduced ? itemVariantsReduced : itemVariants;
  const cta = prefersReduced ? ctaVariantsReduced : ctaVariants;

  return (
    <div
      className={cn(
        "absolute inset-0 transition-all duration-700 ease-smooth",
        isActive
          ? "opacity-100 z-10 pointer-events-auto visible"
          : "opacity-0 z-0 pointer-events-none invisible"
      )}
      aria-hidden={!isActive}
    >
      {/* Media background */}
      {isImageAsset(media) ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          className="object-cover"
          priority={media.priority}
          sizes="100vw"
        />
      ) : (
        <VideoMedia media={media} isMobile={isMobile} isActive={isActive} />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={overlayStyle(overlayOpacity)}
        aria-hidden="true"
      />

      {/* Gradient overlay — bottom fade */}
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 z-[3] flex items-center">
        <div className="w-full max-w-[--container-max] mx-auto px-[--container-padding]">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={cV}
          >
            <motion.h1
              variants={iV}
              className={cn(
                "font-display font-bold text-white text-balance",
                "text-[clamp(2.5rem,8vw,6.5rem)]",
                "leading-[1.05] tracking-tight",
                "mb-6 drop-shadow-sm"
              )}
            >
              {headline}
            </motion.h1>

            {subheadline && (
              <motion.p
                variants={iV}
                className={cn(
                  "text-white/85 text-[clamp(1rem,1.5vw,1.375rem)]",
                  "leading-relaxed mb-8 max-w-xl drop-shadow-sm"
                )}
              >
                {subheadline}
              </motion.p>
            )}

            {(primaryCta || secondaryCta) && (
              <motion.div
                variants={cta}
                className="flex flex-wrap gap-4"
              >
                {primaryCta && (
                  <Link href={primaryCta.href} target={primaryCta.external ? "_blank" : undefined}>
                    <Button variant={primaryCta.variant ?? "donate"} size="xl" rounded>
                      {primaryCta.label}
                    </Button>
                  </Link>
                )}
                {secondaryCta && (
                  <Link href={secondaryCta.href} target={secondaryCta.external ? "_blank" : undefined}>
                    <Button
                      variant="ghost"
                      size="xl"
                      rounded
                      className="text-white border border-white/50 hover:bg-white/15 hover:border-white"
                    >
                      {secondaryCta.label}
                    </Button>
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── Main HeroSection ────────────────────────────────────────── */
export interface HeroSectionProps {
  config: HeroConfig;
}

export function HeroSection({ config }: HeroSectionProps) {
  const {
    variant = "carousel",
    slides,
    autoplay = true,
    autoplayInterval = 6000,
    showScrollIndicator = true,
  } = config;

  const [current, setCurrent] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  
  // Carousel is only active if variant is "carousel" and we have multiple slides
  const isMultiple = variant === "carousel" && slides.length > 1;

  // Filter slides or enforce media based on variant if needed
  // (In practice, config should align, but we fallback gracefully to slides[0] for single image/video)
  const renderedSlides = variant === "carousel" ? slides : [slides[0]];

  // Detect mobile
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Autoplay
  React.useEffect(() => {
    if (!autoplay || !isMultiple) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % renderedSlides.length);
    }, autoplayInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay, autoplayInterval, renderedSlides.length, isMultiple]);

  const go = React.useCallback(
    (index: number) => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCurrent((index + renderedSlides.length) % renderedSlides.length);
    },
    [renderedSlides.length]
  );

  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  // Keyboard on carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section
      aria-label="Hero banner"
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: "100dvh", height: "100dvh" }}
      onKeyDown={isMultiple ? handleKeyDown : undefined}
    >
      {/* Slides */}
      {renderedSlides.map((slide, i) => (
        <HeroSlideContent
          key={slide.id}
          slide={slide}
          isActive={i === current}
          isMobile={isMobile}
        />
      ))}

      {/* Carousel Controls */}
      {isMultiple && (
        <>
          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-20",
              "h-11 w-11 rounded-full",
              "bg-black/40 hover:bg-black/70 text-white",
              "flex items-center justify-center",
              "transition-all duration-fast",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-20",
              "h-11 w-11 rounded-full",
              "bg-black/40 hover:bg-black/70 text-white",
              "flex items-center justify-center",
              "transition-all duration-fast",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dot indicators */}
          <div
            role="tablist"
            aria-label="Slide navigation"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
          >
            {renderedSlides.map((slide, i) => (
              <button
                key={slide.id}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  "h-2 transition-all duration-base rounded-full",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1",
                  i === current
                    ? "w-8 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/70"
                )}
              />
            ))}
          </div>
        </>
      )}

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
          aria-hidden="true"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 text-white/50 motion-safe:animate-bounce" />
        </div>
      )}
    </section>
  );
}
