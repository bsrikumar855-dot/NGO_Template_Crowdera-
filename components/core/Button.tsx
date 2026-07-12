/**
 * components/core/Button.tsx
 *
 * Foundation Button component.
 * Accepts variant, size, loading, icon, and any HTML button props.
 * All visual styles come from design tokens — no hardcoded colors.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

/* ── Variant definitions ────────────────────────────────────── */
const buttonVariants = cva(
  /* Base styles — shared by all variants */
  [
    "inline-flex items-center justify-center gap-2",
    "font-semibold leading-none tracking-wide",
    "select-none cursor-pointer",
    "border transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
  ],
  {
    variants: {
      variant: {
        /* Primary CTA — org brand color */
        primary: [
          "bg-primary text-primary-foreground border-transparent",
          "hover:brightness-110 hover:shadow-glow-primary",
          "shadow-elevation-2",
        ],
        /* Secondary — subtle outlined */
        secondary: [
          "bg-transparent text-primary border-primary",
          "hover:bg-primary hover:text-primary-foreground",
        ],
        /* Ghost — text only */
        ghost: [
          "bg-transparent text-foreground border-transparent",
          "hover:bg-muted hover:text-foreground",
        ],
        /* Donate — always high-contrast accent for donation CTAs */
        donate: [
          "bg-secondary text-secondary-foreground border-transparent",
          "hover:brightness-105 hover:shadow-elevation-3",
          "shadow-elevation-2 font-bold",
        ],
        /* Destructive */
        destructive: [
          "bg-error text-white border-transparent",
          "hover:brightness-110",
        ],
        /* Outline neutral */
        outline: [
          "bg-transparent text-foreground border-border",
          "hover:bg-muted",
        ],
        /* Link style */
        link: [
          "bg-transparent text-primary border-transparent",
          "hover:underline p-0 h-auto shadow-none",
        ],
      },
      size: {
        sm:   "h-8  px-3  text-xs  rounded-md",
        base: "h-10 px-4  text-sm  rounded-md",
        md:   "h-11 px-5  text-sm  rounded-lg",
        lg:   "h-12 px-7  text-base rounded-lg",
        xl:   "h-14 px-8  text-base rounded-xl",
        icon: "h-10 w-10 rounded-lg p-0",
        "icon-sm": "h-8 w-8 rounded-md p-0",
        "icon-lg": "h-12 w-12 rounded-xl p-0",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      rounded: {
        true: "!rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

/* ── Component Props ────────────────────────────────────────── */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Show loading spinner and disable */
  isLoading?: boolean;
  /** Icon before label */
  leadingIcon?: React.ReactNode;
  /** Icon after label */
  trailingIcon?: React.ReactNode;
  /** Accessible label when icon-only */
  srLabel?: string;
}

/* ── Component ──────────────────────────────────────────────── */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      rounded,
      isLoading = false,
      disabled,
      leadingIcon,
      trailingIcon,
      srLabel,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        aria-disabled={disabled || isLoading}
        className={cn(
          buttonVariants({ variant, size, fullWidth, rounded }),
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2
            className="h-4 w-4 animate-spin"
            aria-hidden="true"
          />
        ) : (
          leadingIcon && (
            <span className="flex-shrink-0 h-4 w-4" aria-hidden="true">
              {leadingIcon}
            </span>
          )
        )}

        {srLabel && !children ? (
          <span className="sr-only">{srLabel}</span>
        ) : (
          children
        )}

        {!isLoading && trailingIcon && (
          <span className="flex-shrink-0 h-4 w-4" aria-hidden="true">
            {trailingIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

/* ── buttonVariants exported for custom composition ─────────── */
export { buttonVariants };
