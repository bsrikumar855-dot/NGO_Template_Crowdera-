/**
 * components/sections/MarqueeSection.tsx
 *
 * Infinitely scrolling horizontal marquee of core values and mission terms.
 * Enhances the site's premium Awwwards-grade editorial feel.
 */
"use client";
import * as React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const MARQUEE_ITEMS = [
  "EMPOWER EDUCATION",
  "RADICAL TRANSPARENCY",
  "SPONSOR A CHILD",
  "KNOWLEDGE IS FREEDOM",
  "DELIVER OPPORTUNITY",
  "COMMUNITY UPLIFT",
  "FIGHT INEQUALITY",
  "SECURE THE FUTURE",
  "TRANSFORM LIVES"
];

export interface MarqueeSectionProps {
  className?: string;
  speed?: "slow" | "medium" | "fast";
  direction?: "left" | "right";
}

export function MarqueeSection({
  className,
  speed = "slow",
  direction = "left"
}: MarqueeSectionProps) {
  // Duplicate list to ensure seamless looping scroll
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  const speedClass = 
    speed === "slow" 
      ? "animate-marquee-slow" 
      : speed === "fast" 
      ? "animate-marquee-fast" 
      : "animate-marquee-medium";

  const directionClass = direction === "right" ? "direction-reverse" : "";

  return (
    <section
      aria-label="Core values marquee"
      className={cn(
        "relative w-full overflow-hidden py-6 lg:py-8",
        "bg-[hsl(240_20%_4%/0.60)] backdrop-blur-md",
        "border-y border-[hsl(38_95%_54%/0.12)]",
        className
      )}
    >
      <div className="flex w-full overflow-hidden select-none">
        <div 
          className={cn(
            "flex items-center gap-12 whitespace-nowrap px-6",
            speedClass,
            directionClass
          )}
        >
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="font-display font-black text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] uppercase bg-gradient-to-r from-[hsl(38_95%_54%)] via-[hsl(340_75%_60%)] to-[hsl(38_95%_54%)] bg-clip-text text-transparent">
                {item}
              </span>
              <Sparkles className="h-6 w-6 text-[hsl(38_95%_54%)]/80 animate-pulse shrink-0" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
