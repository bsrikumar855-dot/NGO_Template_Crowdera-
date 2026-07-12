/**
 * components/core/Text.tsx
 *
 * Foundation Text component.
 * Wraps any block-level text element (p, span, etc.)
 * with consistent type scale and color tokens.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    size: {
      xs:   "text-xs",
      sm:   "text-sm",
      base: "text-base",
      md:   "text-lg",
      lg:   "text-xl",
      xl:   "text-2xl",
    },
    color: {
      default:  "text-foreground",
      muted:    "text-muted-foreground",
      primary:  "text-primary",
      white:    "text-white",
      inherit:  "text-inherit",
    },
    weight: {
      normal:    "font-normal",
      medium:    "font-medium",
      semibold:  "font-semibold",
      bold:      "font-bold",
    },
    leading: {
      tight:  "leading-tight",
      body:   "leading-relaxed",
      loose:  "leading-loose",
    },
    align: {
      left:   "text-left",
      center: "text-center",
      right:  "text-right",
    },
    balance: {
      true: "text-balance",
    },
    pretty: {
      true: "text-pretty",
    },
  },
  defaultVariants: {
    size: "base",
    color: "muted",
    weight: "normal",
    leading: "body",
  },
});

type TextElement = "p" | "span" | "div" | "label" | "small" | "strong" | "em";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof textVariants> {
  as?: TextElement;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      as: Tag = "p",
      size,
      color,
      weight,
      leading,
      align,
      balance,
      pretty,
      ...props
    },
    ref
  ) => {
    return (
      <Tag
        ref={ref as React.Ref<any>}
        className={cn(
          textVariants({ size, color, weight, leading, align, balance, pretty }),
          className
        )}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";
