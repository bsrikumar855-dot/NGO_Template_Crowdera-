/**
 * components/layout/PageWrapper.tsx
 *
 * Top-level page wrapper.
 * Applies min-height, flex column structure, and skip-to-content
 * for keyboard accessibility.
 */
import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  /** ID of the main content element for skip link */
  mainId?: string;
}

export function PageWrapper({
  children,
  className,
  mainId = "main-content",
}: PageWrapperProps) {
  return (
    <>
      {/* Skip to content — keyboard accessibility */}
      <a
        href={`#${mainId}`}
        className={cn(
          "sr-only focus:not-sr-only",
          "fixed top-4 left-4 z-[100]",
          "px-4 py-2 rounded-lg",
          "bg-primary text-primary-foreground text-sm font-medium",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          "shadow-elevation-3"
        )}
      >
        Skip to main content
      </a>

      <div
        className={cn(
          "flex min-h-dvh flex-col",
          "bg-background text-foreground",
          className
        )}
      >
        {children}
      </div>
    </>
  );
}

/* ── Main Content Area ───────────────────────────────────────── */
export interface MainContentProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /** Add top padding to clear fixed navbar */
  navOffset?: boolean;
}

export function MainContent({
  children,
  id = "main-content",
  className,
  navOffset = true,
}: MainContentProps) {
  return (
    <main
      id={id}
      role="main"
      tabIndex={-1}
      className={cn(
        "flex-1 outline-none",
        navOffset && "pt-16", /* clears 64px fixed navbar */
        className
      )}
    >
      {children}
    </main>
  );
}
