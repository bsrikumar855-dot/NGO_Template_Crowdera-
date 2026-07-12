/**
 * components/core/Spinner.tsx
 *
 * Foundation loading spinner.
 * Accessible: uses role="status" and aria-label.
 */
import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface SpinnerProps {
  size?: "sm" | "base" | "md" | "lg" | "xl";
  label?: string;
  className?: string;
  center?: boolean;
}

const sizeMap = {
  sm:   "h-4 w-4",
  base: "h-5 w-5",
  md:   "h-6 w-6",
  lg:   "h-8 w-8",
  xl:   "h-10 w-10",
};

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      size = "base",
      label = "Loading…",
      className,
      center = false,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={label}
        aria-live="polite"
        className={cn(
          "inline-flex items-center gap-2",
          center && "justify-center w-full",
          className
        )}
      >
        <Loader2
          className={cn(
            "animate-spin text-primary flex-shrink-0",
            sizeMap[size]
          )}
          aria-hidden="true"
        />
        {label && (
          <span className="sr-only">{label}</span>
        )}
      </div>
    );
  }
);

Spinner.displayName = "Spinner";

/* ── Full-page spinner ──────────────────────────────────────── */
export function PageSpinner({ label = "Loading page…" }: { label?: string }) {
  return (
    <div
      role="status"
      aria-label={label}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" aria-hidden="true" />
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
