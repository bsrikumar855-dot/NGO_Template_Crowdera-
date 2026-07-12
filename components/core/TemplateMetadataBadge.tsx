/**
 * components/core/TemplateMetadataBadge.tsx
 *
 * Floating Preview widget that displays template registry metadata.
 * Designed to show the product capabilities as a configurable SaaS template.
 */
"use client";

import * as React from "react";
import { Info, X, Shield, Settings, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { templateMetadata } from "@/config/template";

export function TemplateMetadataBadge() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-full",
            "bg-neutral-900 text-neutral-100 hover:bg-neutral-800",
            "border border-neutral-800 shadow-elevation-3",
            "text-xs font-semibold tracking-wide uppercase",
            "transition-all duration-base hover:scale-105",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          )}
          aria-label="View template details"
        >
          <Info className="h-4 w-4 text-primary animate-pulse" />
          <span>Template Info</span>
        </button>
      )}

      {/* Expanded Panel */}
      {isOpen && (
        <div
          className={cn(
            "w-80 rounded-2xl p-5 border border-border bg-surface shadow-elevation-4 animate-fade-in",
            "flex flex-col gap-4 text-left"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-display font-bold text-sm text-foreground">
                Crowdera Template System
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close template details"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-3 text-xs">
            <div>
              <p className="font-semibold text-muted-foreground">Template ID</p>
              <code className="mt-1 block p-1.5 bg-muted rounded text-[10px] text-foreground font-mono">
                {templateMetadata.id}
              </code>
            </div>

            <div>
              <p className="font-semibold text-muted-foreground">Version</p>
              <p className="mt-0.5 text-foreground font-medium">{templateMetadata.version}</p>
            </div>

            <div>
              <p className="font-semibold text-muted-foreground">Active Variant System</p>
              <p className="mt-0.5 text-foreground leading-relaxed">
                All sections are configuration-driven, using custom <span className="font-semibold text-primary">variant</span> selections.
              </p>
            </div>

            {/* List of features */}
            <div className="border-t border-border pt-3 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Video Hero Support</span>
                {templateMetadata.supportsVideoHero ? (
                  <Check className="h-4.5 w-4.5 text-green-500" />
                ) : (
                  <X className="h-4.5 w-4.5 text-red-500" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Gallery Lightbox</span>
                {templateMetadata.supportsGallery ? (
                  <Check className="h-4.5 w-4.5 text-green-500" />
                ) : (
                  <X className="h-4.5 w-4.5 text-red-500" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">CSS Micro-Animations</span>
                {templateMetadata.supportsAnimations ? (
                  <Check className="h-4.5 w-4.5 text-green-500" />
                ) : (
                  <X className="h-4.5 w-4.5 text-red-500" />
                )}
              </div>
            </div>

            {/* License & Author */}
            <div className="border-t border-border pt-3 text-[10px] text-muted-foreground flex items-center justify-between">
              <span>Author: {templateMetadata.author.split(" & ")[0]}</span>
              <span className="px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-800 rounded font-medium">
                {templateMetadata.license} License
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
