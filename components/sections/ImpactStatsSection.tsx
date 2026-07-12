/**
 * components/sections/ImpactStatsSection.tsx
 *
 * Animated impact statistics section.
 * Counters trigger on scroll into view via IntersectionObserver.
 * Respects prefers-reduced-motion (shows final value immediately).
 * Supports icon (Lucide), prefix, suffix, label, description.
 * Theme variants: light | dark | primary
 */
"use client";
import * as React from "react";
import * as LucideIcons from "lucide-react";
import { cn, formatNumber } from "@/lib/utils";
import { Section } from "@/components/core/Section";
import { Container } from "@/components/core/Container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCounter } from "@/hooks/useCounter";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SectionHeader } from "./SectionHeader";
import type { StatsConfig, StatItem } from "@/types";

/* ── Dynamic Lucide icon ─────────────────────────────────────── */
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

/* ── Single counter card ─────────────────────────────────────── */
function StatCard({
  item,
  shouldStart,
  duration,
  theme,
  delay,
}: {
  item: StatItem;
  shouldStart: boolean;
  duration: number;
  theme: "light" | "dark" | "primary";
  delay: number;
}) {
  const reducedMotion = useReducedMotion();
  const { count, start, isComplete } = useCounter({
    target: item.value,
    duration,
    reducedMotion,
  });

  // Trigger counter when section becomes visible
  React.useEffect(() => {
    if (shouldStart && !isComplete) {
      const t = setTimeout(start, delay);
      return () => clearTimeout(t);
    }
  }, [shouldStart, delay]); // eslint-disable-line react-hooks/exhaustive-deps

  const isDark = theme === "dark" || theme === "primary";
  const isPrimary = theme === "primary";

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center gap-4 p-6 rounded-2xl",
        "transition-all duration-slow",
        isPrimary && "bg-white/10 backdrop-blur-sm border border-white/15",
        !isPrimary && theme === "dark" && "bg-neutral-800/50 border border-neutral-700",
        !isPrimary && theme === "light" && "bg-surface border border-border shadow-elevation-1"
      )}
    >
      {item.icon && (
        <div
          className={cn(
            "h-14 w-14 rounded-2xl flex items-center justify-center",
            isPrimary && "bg-white/20 text-white",
            theme === "dark" && !isPrimary && "bg-neutral-700 text-neutral-200",
            theme === "light" && "bg-primary/10 text-primary"
          )}
        >
          <DynamicIcon name={item.icon} className="h-7 w-7" />
        </div>
      )}

      <div className="flex flex-col items-center gap-1">
        <div
          className={cn(
            "font-display font-bold tabular-nums leading-none",
            "text-[clamp(2.5rem,4vw,3.5rem)]",
            isDark ? "text-white" : "text-primary"
          )}
        >
          {item.prefix && <span>{item.prefix}</span>}
          {/* Render decimal numbers with 1 decimal for values < 100 */}
          {item.value < 100
            ? count.toFixed(item.value % 1 !== 0 ? 1 : 0)
            : formatNumber(count)}
          {item.suffix && <span className="text-[0.6em] font-semibold ml-0.5">{item.suffix}</span>}
        </div>

        <p className={cn("font-semibold text-base", isDark ? "text-white" : "text-foreground")}>
          {item.label}
        </p>

        {item.description && (
          <p className={cn("text-sm", isDark ? "text-white/60" : "text-muted-foreground")}>
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

/* ── Main ImpactStatsSection ─────────────────────────────────── */
export interface ImpactStatsSectionProps {
  config: StatsConfig;
}

export function ImpactStatsSection({ config }: ImpactStatsSectionProps) {
  const {
    badge,
    headline,
    subheadline,
    items,
    countDuration = 2000,
    theme = "primary",
  } = config;

  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.15,
    triggerOnce: true,
  });

  // Surface mapping
  const surfaceMap = {
    light: "default",
    dark: "dark",
    primary: "primary",
  } as const;

  return (
    <Section
      surface={surfaceMap[theme]}
      padding="lg"
      ariaLabel="Impact statistics"
      id="impact"
    >
      <Container>
        <div ref={sectionRef} className="flex flex-col gap-12">
          {/* Header */}
          {(badge || headline) && (
            <SectionHeader
              badge={badge}
              headline={headline ?? ""}
              subheadline={subheadline}
              theme={theme}
            />
          )}

          {/* Stats grid — auto columns based on item count */}
          <div
            className={cn(
              "grid gap-6",
              items.length === 2 && "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto w-full",
              items.length === 3 && "grid-cols-1 sm:grid-cols-3",
              items.length === 4 && "grid-cols-2 lg:grid-cols-4",
              items.length > 4 && "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
            )}
          >
            {items.map((item, i) => (
              <StatCard
                key={item.id}
                item={item}
                shouldStart={isVisible}
                duration={countDuration}
                theme={theme}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
