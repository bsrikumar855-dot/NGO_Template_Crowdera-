/**
 * app/donate/page.tsx
 *
 * Server component wrapper for the Donate checkout flow.
 * Integrates a Suspense boundary for useSearchParams() to enable safe prerendering.
 */
import * as React from "react";
import { Suspense } from "react";
import type { Metadata } from "next";
import DonateContent from "./DonateContent";

export const metadata: Metadata = {
  title: "Donate — Crowdera",
  description: "Support our mission and empower children through education.",
};

export default function DonatePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-24 flex items-center justify-center bg-background">
          <div className="animate-pulse text-muted-foreground">
            Loading donation checkout...
          </div>
        </div>
      }
    >
      <DonateContent />
    </Suspense>
  );
}
