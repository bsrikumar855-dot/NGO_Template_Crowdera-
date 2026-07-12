/**
 * components/core/Heading.tsx
 *
 * Foundation Heading component.
 * Separates semantic level (h1–h6) from visual size.
 * This allows h2 to look like a display heading without
 * breaking document outline.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  [
    "font-display font-bold text-balance",
    "tracking-tight leading-display",
  ],
  {
    variants: {
      /** Visual size — independent from semantic level */
      size: {
        hero:  "text-[clamp(3rem,8vw+1rem,7rem)] leading-hero",
        "4xl": "text-[clamp(2.5rem,5vw,4rem)]",
        "3xl": "text-[clamp(2rem,4vw,3rem)]",
        "2xl": "text-[clamp(1.75rem,3vw,2.5rem)]",
        xl:    "text-[clamp(1.5rem,2.5vw,2rem)]",
        lg:    "text-[clamp(1.25rem,2vw,1.75rem)]",
        md:    "text-xl",
        sm:    "text-lg",
        xs:    "text-base",
      },
      /** Color treatment */
      color: {
        default:  "text-foreground",
        muted:    "text-muted-foreground",
        primary:  "text-primary",
        white:    "text-white",
        gradient: "text-gradient-primary",
      },
      /** Alignment */
      align: {
        left:   "text-left",
        center: "text-center",
        right:  "text-right",
      },
    },
    defaultVariants: {
      size: "2xl",
      color: "default",
      align: "left",
    },
  }
);

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof headingVariants> {
  /** Semantic heading level */
  as?: HeadingLevel;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as: Tag = "h2", size, color, align, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ size, color, align }), className)}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";
