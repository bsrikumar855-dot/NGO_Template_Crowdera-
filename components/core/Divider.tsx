/**
 * components/core/Divider.tsx
 *
 * Foundation Divider / horizontal rule.
 * Semantic <hr> with optional label.
 */
import * as React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Optional centered label */
  label?: string;
  orientation?: "horizontal" | "vertical";
}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, label, orientation = "horizontal", ...props }, ref) => {
    if (orientation === "vertical") {
      return (
        <div
          className={cn("w-px h-full bg-border self-stretch", className)}
          role="separator"
          aria-orientation="vertical"
        />
      );
    }

    if (label) {
      return (
        <div className={cn("flex items-center gap-3", className)}>
          <hr className="flex-1 border-border" />
          <span className="text-sm text-muted-foreground font-medium px-1">
            {label}
          </span>
          <hr className="flex-1 border-border" />
        </div>
      );
    }

    return (
      <hr
        ref={ref}
        className={cn("border-border", className)}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
