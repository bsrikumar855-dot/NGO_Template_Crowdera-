/**
 * components/core/Textarea.tsx
 *
 * Foundation Textarea component.
 * Mirrors Input behavior: label, error, hint, ARIA.
 */
"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Label, FieldError, FieldHint } from "./Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  /** Show character count */
  showCount?: boolean;
  wrapperClassName?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      wrapperClassName,
      label,
      error,
      hint,
      showCount,
      maxLength,
      id,
      disabled,
      required,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const uniqueId = React.useId();
    const [charCount, setCharCount] = React.useState(
      String(value ?? defaultValue ?? "").length
    );
    const textareaId = id ?? `textarea-${uniqueId}`;
    const errorId = `${textareaId}-error`;
    const hintId = `${textareaId}-hint`;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className={cn("flex flex-col w-full", wrapperClassName)}>
        {label && (
          <Label htmlFor={textareaId} required={required}>
            {label}
          </Label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onChange={showCount ? handleChange : onChange}
          aria-invalid={!!error}
          aria-describedby={
            [error ? errorId : null, hint ? hintId : null]
              .filter(Boolean)
              .join(" ") || undefined
          }
          className={cn(
            "w-full min-h-[120px] resize-y",
            "bg-surface border border-border rounded-md",
            "px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground",
            "transition-all duration-fast",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background focus:border-primary",
            error && "border-error focus:ring-error",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className
          )}
          {...props}
        />

        <div className="flex items-start justify-between gap-2 mt-1.5">
          <div className="flex-1">
            {error && <FieldError id={errorId}>{error}</FieldError>}
            {hint && !error && <FieldHint id={hintId}>{hint}</FieldHint>}
          </div>
          {showCount && maxLength && (
            <span
              className={cn(
                "text-xs tabular-nums flex-shrink-0",
                charCount > maxLength * 0.9
                  ? "text-warning"
                  : "text-muted-foreground"
              )}
            >
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
