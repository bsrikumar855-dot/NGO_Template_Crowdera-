/**
 * components/core/Badge.tsx
 *
 * Foundation Badge/Tag component.
 * Used for category labels, status indicators, section headers.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5",
    "font-medium leading-none",
    "select-none",
    "border",
    "transition-colors duration-fast",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-primary/10 text-primary border-primary/20",
        ],
        secondary: [
          "bg-secondary/10 text-secondary-foreground border-secondary/20",
        ],
        outline: [
          "bg-transparent text-foreground border-border",
        ],
        solid: [
          "bg-primary text-primary-foreground border-transparent",
        ],
        success: [
          "bg-success/10 text-success border-success/20",
        ],
        warning: [
          "bg-warning/10 text-warning border-warning/20",
        ],
        error: [
          "bg-error/10 text-error border-error/20",
        ],
        muted: [
          "bg-muted text-muted-foreground border-border",
        ],
      },
      size: {
        sm:   "px-2   py-0.5 text-xs  rounded-sm",
        base: "px-2.5 py-1   text-xs  rounded-md",
        md:   "px-3   py-1   text-sm  rounded-md",
      },
      dot: {
        true: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "base",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Show colored dot indicator */
  dot?: boolean;
  dotColor?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, dot, dotColor, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, dot }), className)}
        {...props}
      >
        {dot && (
          <span
            className={cn("h-1.5 w-1.5 rounded-full bg-current", dotColor)}
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
export { badgeVariants };
