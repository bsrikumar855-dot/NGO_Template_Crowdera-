/**
 * components/core/Card.tsx
 *
 * Foundation Card component.
 * Composable: Card, CardHeader, CardBody, CardFooter, CardImage.
 * Used by Programs, News, Testimonials sections.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ── Card Root ──────────────────────────────────────────────── */
const cardVariants = cva(
  [
    "relative flex flex-col",
    "rounded-lg overflow-hidden",
    "bg-surface",
    "border border-border",
    "transition-all duration-base ease-smooth",
  ],
  {
    variants: {
      variant: {
        default: [
          "shadow-elevation-1",
          "hover:shadow-elevation-3 hover:-translate-y-1",
        ],
        elevated: [
          "shadow-elevation-3",
          "hover:shadow-elevation-4 hover:-translate-y-1.5",
        ],
        flat: [
          "shadow-none",
          "hover:bg-muted",
        ],
        glass: [
          "glass shadow-elevation-2",
          "hover:shadow-elevation-3",
        ],
        outlined: [
          "shadow-none border-2",
          "hover:border-primary/50 hover:shadow-elevation-1",
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
    return (
      <Tag
        ref={ref}
        className={cn(cardVariants({ variant, interactive }), className)}
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
