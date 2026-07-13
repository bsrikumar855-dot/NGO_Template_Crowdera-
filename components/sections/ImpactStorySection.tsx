/**
 * components/sections/ImpactStorySection.tsx
 *
 * Awwwards-grade scroll-scrubbed narrative sequence.
 * Features fade/scale transitions linked to scroll position via native CSS.
 * Degrades gracefully on mobile/Safari using IntersectionObserver fallback.
 * Respects prefers-reduced-motion.
 */
"use client";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section } from "@/components/core/Section";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Badge } from "@/components/core/Badge";
import type { ImpactStoryConfig } from "@/types";

export interface ImpactStorySectionProps {
  config: ImpactStoryConfig;
}

export function ImpactStorySection({ config }: ImpactStorySectionProps) {
  const [hasScrollTimeline, setHasScrollTimeline] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const panelRefs = React.useRef<Array<HTMLDivElement | null>>([]);

  // Detect support for native CSS Scroll-Driven Animations
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const supportsScrollTimeline =
        CSS.supports("animation-timeline", "scroll()") ||
        CSS.supports("animation-timeline", "view()");
      setHasScrollTimeline(supportsScrollTimeline);
    }
  }, []);

  // Simple IntersectionObserver fallback for Safari / browsers without scroll-driven animations
  React.useEffect(() => {
    if (hasScrollTimeline) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("narrative-panel-active");
          } else {
            entry.target.classList.remove("narrative-panel-active");
          }
        });
      },
      { threshold: 0.25 }
    );

    panelRefs.current.forEach((panel) => {
      if (panel) observer.observe(panel);
    });

    return () => {
      observer.disconnect();
    };
  }, [hasScrollTimeline, config.panels]);

  return (
    <Section
      surface="dark"
      padding="none"
      className="relative bg-black text-neutral-100 overflow-hidden"
      ariaLabel="Our Impact Story"
    >
      {/* Dynamic style injection for native CSS scroll timeline if supported */}
      {hasScrollTimeline && (
        <style dangerouslySetInnerHTML={{
          __html: `
            @supports (animation-timeline: view()) {
              @media (prefers-reduced-motion: no-preference) {
                .scroll-scrub-media {
                  animation: scrub-scale linear both;
                  animation-timeline: view(block);
                  animation-range: entry 10% exit 90%;
                }
                .scroll-scrub-text {
                  animation: scrub-slide linear both;
                  animation-timeline: view(block);
                  animation-range: entry 20% exit 80%;
                }
              }
            }
            @keyframes scrub-scale {
              entry 0% { opacity: 0.2; transform: scale(1.08); }
              entry 100% { opacity: 1; transform: scale(1); }
              exit 0% { opacity: 1; transform: scale(1); }
              exit 100% { opacity: 0.2; transform: scale(0.95); }
            }
            @keyframes scrub-slide {
              entry 0% { opacity: 0; transform: translateY(30px); }
              entry 100% { opacity: 1; transform: translateY(0); }
              exit 0% { opacity: 1; transform: translateY(0); }
              exit 100% { opacity: 0; transform: translateY(-30px); }
            }
          `
        }} />
      )}

      <div ref={containerRef} className="w-full flex flex-col">
        {config.panels.map((panel, idx) => (
          <div
            key={panel.id}
            ref={(el) => { panelRefs.current[idx] = el; }}
            className={cn(
              "w-full min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row items-center justify-between",
              "relative border-b border-white/5 py-16 lg:py-0 px-4 md:px-8",
              "transition-all duration-700 ease-out",
              // Fallback classes if native scroll timeline is absent
              !hasScrollTimeline && "opacity-40 scale-95 transition-all duration-[var(--motion-duration-slow)] ease-[var(--motion-ease-base)] [&.narrative-panel-active]:opacity-100 [&.narrative-panel-active]:scale-100"
            )}
          >
            {/* Visual media container */}
            <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-video lg:h-[80vh] overflow-hidden rounded-2xl shadow-2xl bg-zinc-900 border border-white/10 scroll-scrub-media">
              <Image
                src={panel.image.src}
                alt={panel.image.alt}
                fill
                priority={idx === 0}
                className="object-cover transition-transform duration-[var(--motion-duration-slow)] ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 lg:opacity-40" />
            </div>

            {/* Text description container */}
            <div className="w-full lg:w-5/12 flex flex-col gap-6 pt-8 lg:pt-0 scroll-scrub-text">
              {panel.eyebrow && (
                <div className="flex">
                  <Badge variant="secondary" size="md">
                    {panel.eyebrow}
                  </Badge>
                </div>
              )}
              <Heading as="h3" size="3xl" color="white" className="leading-tight">
                {panel.headline}
              </Heading>
              <Text size="lg" color="white" className="opacity-80 leading-relaxed font-light text-pretty">
                {panel.body}
              </Text>
            </div>

            {/* Decorative timeline connector */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block -z-10 pointer-events-none" />
          </div>
        ))}
      </div>
    </Section>
  );
}
