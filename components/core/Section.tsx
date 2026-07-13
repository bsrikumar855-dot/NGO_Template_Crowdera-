/**
 * components/core/Section.tsx
 *
 * Foundation Section wrapper.
 * Handles semantic <section> with consistent vertical padding.
 * Every page section uses this as its outer wrapper.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva(
  "relative w-full",
  {
    variants: {
      /** Background surface variant */
      surface: {
        default:  "bg-background text-foreground",
        surface:  "bg-surface text-surface-foreground",
        muted:    "bg-muted text-foreground",
        primary:  "bg-primary text-primary-foreground",
        accent:   "bg-secondary text-secondary-foreground",
        dark:     "bg-neutral-950 text-neutral-50",
        image:    "bg-neutral-950 text-neutral-50",
        transparent: "bg-transparent text-inherit",
        /** Light / cream — warm off-white for light-first sections */
        light:    "bg-neutral-100 text-neutral-900",
        cream:    "bg-neutral-50 text-neutral-900",
      },
      /** Vertical padding scale */
      padding: {
        none: "",
        sm:   "py-8  md:py-12",
        md:   "py-12 md:py-16",
        base: "py-12 md:py-16 lg:py-20",
        lg:   "py-16 md:py-20 lg:py-24",
        xl:   "py-20 md:py-24 lg:py-32",
      },
    },
    defaultVariants: {
      surface: "default",
      padding: "base",
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
  /** ARIA label for the section landmark */
  ariaLabel?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      surface,
      padding,
      as: Tag = "section",
      ariaLabel,
      "aria-label": ariaLabelProp,
      ...props
    },
    ref
  ) => {
    return (
      <Tag
        ref={ref}
        aria-label={ariaLabel ?? ariaLabelProp}
        className={cn(sectionVariants({ surface, padding }), className)}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";
