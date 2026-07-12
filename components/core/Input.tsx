/**
 * components/core/Input.tsx
 *
 * Foundation form input: text, email, password, number, tel, url.
 * Includes validation states, label, and error message.
 * All form elements follow WAI-ARIA patterns.
 */
"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { AlertCircle, Eye, EyeOff } from "lucide-react";

/* ── Input Field Variants ───────────────────────────────────── */
const inputVariants = cva(
  [
    "w-full flex items-center",
    "bg-surface border border-border rounded-md",
    "text-sm text-foreground placeholder:text-muted-foreground",
    "transition-all duration-fast ease-smooth",
    "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
    "focus-within:border-primary",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      state: {
        default: "",
        error: "border-error focus-within:ring-error",
        success: "border-success focus-within:ring-success",
        warning: "border-warning focus-within:ring-warning",
      },
      size: {
        sm:   "h-8  px-3 gap-2",
        base: "h-10 px-3 gap-2",
        md:   "h-11 px-4 gap-2.5",
        lg:   "h-12 px-4 gap-3",
      },
    },
    defaultVariants: {
      state: "default",
      size: "base",
    },
  }
);

/* ── Label ──────────────────────────────────────────────────── */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  optional?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, optional, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "block text-sm font-medium text-foreground mb-1.5",
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="text-error ml-1" aria-label="required">
          *
        </span>
      )}
      {optional && (
        <span className="text-muted-foreground ml-1 text-xs font-normal">
          (optional)
        </span>
      )}
    </label>
  )
);
Label.displayName = "Label";

/* ── Field Error ────────────────────────────────────────────── */
export const FieldError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    role="alert"
    aria-live="polite"
    className={cn(
      "flex items-center gap-1.5 text-xs text-error mt-1.5",
      className
    )}
    {...props}
  >
    <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
    {children}
  </p>
));
FieldError.displayName = "FieldError";

/* ── FieldHint ──────────────────────────────────────────────── */
export const FieldHint = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-muted-foreground mt-1.5", className)}
    {...props}
  />
));
FieldHint.displayName = "FieldHint";

/* ── Input ──────────────────────────────────────────────────── */
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  hint?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  /** Wrapper className */
  wrapperClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      wrapperClassName,
      label,
      error,
      hint,
      state,
      size,
      type = "text",
      id,
      leadingIcon,
      trailingIcon,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const uniqueId = React.useId();
    const [showPassword, setShowPassword] = React.useState(false);
    const inputId = id ?? `input-${uniqueId}`;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;
    const resolvedState = error ? "error" : state;
    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <div className={cn("flex flex-col w-full", wrapperClassName)}>
        {label && (
          <Label htmlFor={inputId} required={required}>
            {label}
          </Label>
        )}

        <div
          className={cn(
            inputVariants({ state: resolvedState, size }),
          )}
        >
          {leadingIcon && (
            <span className="text-muted-foreground h-4 w-4 flex-shrink-0" aria-hidden="true">
              {leadingIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            type={inputType}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={
              [error ? errorId : null, hint ? hintId : null]
                .filter(Boolean)
                .join(" ") || undefined
            }
            className={cn(
              "flex-1 min-w-0 bg-transparent outline-none",
              "text-sm text-foreground placeholder:text-muted-foreground",
              "disabled:cursor-not-allowed",
              className
            )}
            {...props}
          />

          {type === "password" ? (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-muted-foreground hover:text-foreground transition-colors h-4 w-4 flex-shrink-0"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          ) : (
            trailingIcon && (
              <span className="text-muted-foreground h-4 w-4 flex-shrink-0" aria-hidden="true">
                {trailingIcon}
              </span>
            )
          )}
        </div>

        {error && <FieldError id={errorId}>{error}</FieldError>}
        {hint && !error && <FieldHint id={hintId}>{hint}</FieldHint>}
      </div>
    );
  }
);
Input.displayName = "Input";
