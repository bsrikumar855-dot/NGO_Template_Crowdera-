/**
 * components/sections/SectionHeader.tsx
 *
 * Shared section header pattern used by all sections.
 * Badge + Headline + Subheadline, centered or left-aligned.
 */
import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/core/Badge";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";

export interface SectionHeaderProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  theme?: "light" | "dark" | "primary";
  className?: string;
}

export function SectionHeader({
  badge,
  headline,
  subheadline,
  align = "center",
  theme = "light",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark" || theme === "primary";

  return (
    <div className={cn("flex flex-col gap-4", isCenter && "items-center text-center", className)}>
      {badge && (
        <Badge
          variant={isDark ? "outline" : "default"}
          size="md"
          className={isDark ? "border-white/30 text-white bg-white/10" : ""}
        >
          {badge}
        </Badge>
      )}
      <Heading
        as="h2"
        size="2xl"
        align={align}
        color={isDark ? "white" : "default"}
        className={cn("max-w-3xl", isCenter && "mx-auto")}
      >
        {headline}
      </Heading>
      {subheadline && (
        <Text
          as="p"
          size="md"
          color={isDark ? "white" : "muted"}
          align={align}
          balance
          className={cn("max-w-2xl opacity-90", isCenter && "mx-auto")}
        >
          {subheadline}
        </Text>
      )}
    </div>
  );
}
