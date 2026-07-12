/**
 * components/core/Container.tsx
 *
 * Foundation Container component.
 * Handles max-width, centered layout, and horizontal padding.
 * All sections and layout wrappers use this.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva(
  ["w-full mx-auto px-[--container-padding]"],
  {
    variants: {
      size: {
        sm:   "max-w-[--container-sm]",
        md:   "max-w-[--container-md]",
        lg:   "max-w-[--container-lg]",
        xl:   "max-w-[--container-xl]",
        full: "max-w-[--container-max]",
        /** Flush — no max-width, just padding */
        fluid: "max-w-none",
      },
    },
    defaultVariants: {
      size: "full",
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, as: Tag = "div", ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(containerVariants({ size }), className)}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
