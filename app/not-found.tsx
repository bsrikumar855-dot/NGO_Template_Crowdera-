/**
 * app/not-found.tsx
 *
 * Branded custom 404 error page.
 * Uses core buttons, layout structure, and provides helpful fallback routes.
 */
import * as React from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Heart, Search, HelpCircle } from "lucide-react";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Button } from "@/components/core/Button";
import { navigation } from "@/content/navigation";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-muted/20 font-sans">
      <Container size="md" className="text-center flex flex-col items-center gap-6">
        {/* Animated Badge Icon */}
        <div className="h-20 w-20 bg-primary/10 text-primary border-4 border-primary/5 rounded-full flex items-center justify-center shadow-elevation-1 animate-pulse mb-2">
          <AlertCircle className="h-10 w-10" />
        </div>

        {/* Status Code */}
        <span className="text-xs font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">
          Error 404
        </span>

        {/* Title */}
        <Heading as="h1" size="3xl" className="tracking-tight max-w-md">
          Page Not Found
        </Heading>

        {/* Text */}
        <Text className="text-muted-foreground max-w-sm">
          We couldn't find the page you were looking for. It might have been moved, renamed, or perhaps it never existed in this template.
        </Text>

        {/* Navigation Links Helper */}
        <div className="bg-surface border border-border p-5 rounded-2xl w-full max-w-sm text-left shadow-elevation-1 mt-2">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-3">
            Quick Navigation
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <Link
              href="/about"
              className="p-2.5 rounded-lg border border-border/80 hover:bg-muted/40 hover:text-primary transition-all font-semibold flex items-center gap-1.5"
            >
              <Heart className="h-3.5 w-3.5 text-primary" />
              <span>About Us</span>
            </Link>
            <Link
              href="/programs"
              className="p-2.5 rounded-lg border border-border/80 hover:bg-muted/40 hover:text-primary transition-all font-semibold flex items-center gap-1.5"
            >
              <Search className="h-3.5 w-3.5 text-primary" />
              <span>Programs</span>
            </Link>
            <Link
              href="/donate"
              className="p-2.5 rounded-lg border border-border/80 hover:bg-muted/40 hover:text-primary transition-all font-semibold flex items-center gap-1.5"
            >
              <AlertCircle className="h-3.5 w-3.5 text-primary" />
              <span>Donate</span>
            </Link>
            <Link
              href="/templates/demo"
              className="p-2.5 rounded-lg border border-border/80 hover:bg-muted/40 hover:text-primary transition-all font-semibold flex items-center gap-1.5"
            >
              <HelpCircle className="h-3.5 w-3.5 text-primary" />
              <span>Showcase</span>
            </Link>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full justify-center">
          <Link href="/">
            <Button variant="primary" leadingIcon={<ArrowLeft className="h-4 w-4" />}>
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">
              Contact Support
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
