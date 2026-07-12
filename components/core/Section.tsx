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
        default:  "bg-[hsl(240_18%_6%)]",
        muted:    "bg-[hsl(240_16%_8%)]",
        primary:  "bg-primary text-primary-foreground",
        dark:     "bg-[hsl(240_20%_4%)] text-neutral-50",
        image:    "bg-neutral-950 text-neutral-50",
        transparent: "bg-transparent",
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
