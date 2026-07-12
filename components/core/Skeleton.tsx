/**
 * components/core/Skeleton.tsx
 *
 * Foundation Skeleton loading placeholder.
 * Used to show loading states that match the shape of content.
 */
import * as React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shape variant */
  variant?: "text" | "rect" | "circle";
  /** Number of text lines (when variant='text') */
  lines?: number;
  animate?: boolean;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = "rect",
      lines = 3,
      animate = true,
      ...props
    },
    ref
  ) => {
    if (variant === "text") {
      return (
        <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-4 rounded",
                animate ? "skeleton" : "bg-muted",
                i === lines - 1 ? "w-3/4" : "w-full"
              )}
            />
          ))}
        </div>
      );
    }

    if (variant === "circle") {
      return (
        <div
          ref={ref}
          className={cn(
            "rounded-full",
            animate ? "skeleton" : "bg-muted",
            className
          )}
          {...props}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-md",
          animate ? "skeleton" : "bg-muted",
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

/* ── Card Skeleton preset ───────────────────────────────────── */
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4 p-5 rounded-lg border border-border bg-surface", className)}>
      <Skeleton className="aspect-video w-full" />
      <Skeleton variant="text" lines={3} />
      <Skeleton className="h-10 w-32 mt-2" />
    </div>
  );
}

/* ── Hero Skeleton ──────────────────────────────────────────── */
export function HeroSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("w-full h-[70vh] min-h-96 rounded-none skeleton", className)} />
  );
}
