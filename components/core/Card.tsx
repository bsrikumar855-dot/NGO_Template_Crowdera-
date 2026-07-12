/**
 * components/core/Card.tsx
 *
 * Foundation Card component.
 * Composable: Card, CardHeader, CardBody, CardFooter, CardImage.
 * Used by Programs, News, Testimonials sections.
 */
"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/* ── Card Root ──────────────────────────────────────────────── */
const cardVariants = cva(
  [
    "relative flex flex-col",
    "rounded-xl overflow-hidden",
    "bg-[hsl(240_14%_9%/0.80)] backdrop-blur-[16px]",
    "border border-[hsl(240_12%_22%/0.6)]",
    "transition-all duration-[var(--motion-duration-fast)] ease-[var(--motion-ease-base)]",
    "motion-reduce:transition-none motion-reduce:transform-none",
  ],
  {
    variants: {
      variant: {
        default: [
          "shadow-elevation-1",
          "hover:border-[hsl(38_95%_54%/0.25)]",
        ],
        elevated: [
          "shadow-elevation-3",
        ],
        flat: [
          "shadow-none bg-transparent border-transparent",
        ],
        glass: [
          "glass-strong shadow-elevation-2",
        ],
        outlined: [
          "shadow-none border-2 bg-transparent",
          "hover:border-primary/50",
        ],
      },
      interactive: {
        true: "cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  as?: React.ElementType;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, interactive, as: Tag = "div", ...props }, ref) => {
    const Component = Tag === "div" ? motion.div : Tag;

    const hoverProps = interactive && Tag === "div"
      ? {
          whileHover: {
            scale: 1.025,
            boxShadow: "0 12px 30px -4px rgba(0, 0, 0, 0.45), 0 4px 12px -2px rgba(0, 0, 0, 0.3)",
          },
          transition: {
            duration: 0.2,
            ease: "easeInOut",
          },
        }
      : {};

    return (
      <Component
        ref={ref as any}
        className={cn(cardVariants({ variant, interactive }), className)}
        {...hoverProps}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

/* ── CardImage ──────────────────────────────────────────────── */
export interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "auto";
}

const aspectRatioMap = {
  video:    "aspect-video",
  square:   "aspect-square",
  portrait: "aspect-[3/4]",
  wide:     "aspect-[16/7]",
  auto:     "",
};

export const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, aspectRatio = "video", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-muted flex-shrink-0",
          aspectRatioMap[aspectRatio],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardImage.displayName = "CardImage";

/* ── CardHeader ─────────────────────────────────────────────── */
export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1.5 p-5 pb-0", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/* ── CardBody ───────────────────────────────────────────────── */
export const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-3 p-5 flex-1", className)}
    {...props}
  />
));
CardBody.displayName = "CardBody";

/* ── CardTitle ──────────────────────────────────────────────── */
export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { as?: "h2" | "h3" | "h4" | "h5" }
>(({ className, as: Tag = "h3", ...props }, ref) => (
  <Tag
    ref={ref}
    className={cn(
      "font-bold text-foreground leading-tight tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/* ── CardDescription ────────────────────────────────────────── */
export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-muted-foreground text-sm leading-relaxed line-clamp-3",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/* ── CardFooter ─────────────────────────────────────────────── */
export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between gap-3 p-5 pt-0 mt-auto",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
