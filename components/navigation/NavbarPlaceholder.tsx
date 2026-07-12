/**
 * components/navigation/NavbarPlaceholder.tsx
 *
 * Navbar PLACEHOLDER — structure only.
 * Full implementation comes in Prompt 2.
 * Accepts NavigationConfig + OrganizationConfig for type safety.
 */
"use client";
import * as React from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import type { NavigationConfig, OrganizationConfig } from "@/types";

export interface NavbarProps {
  nav: NavigationConfig;
  org: Pick<OrganizationConfig, "name" | "logo" | "logoDark">;
  className?: string;
}

export function NavbarPlaceholder({ nav, org, className }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-base ease-smooth",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-elevation-1"
          : "bg-transparent",
        className
      )}
    >
      <Container>
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="flex h-16 items-center justify-between gap-6"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label={`${org.name} — Home`}
            className="flex items-center gap-2 font-display font-bold text-lg text-foreground hover:text-primary transition-colors"
          >
            {/* Logo image slot — populated by org config */}
            <span className="h-8 w-8 rounded-md bg-primary flex items-center justify-center" aria-hidden="true">
              <Heart className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="hidden sm:block">{org.name}</span>
          </Link>

          {/* Desktop nav */}
          <ul
            role="list"
            className="hidden lg:flex items-center gap-1"
          >
            {nav.items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    "text-muted-foreground hover:text-foreground hover:bg-muted",
                    "transition-all duration-fast",
                    "focus-ring"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="donate"
              size="sm"
              className="hidden sm:inline-flex"
              aria-label={nav.cta.label}
            >
              {nav.cta.label}
            </Button>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon-sm"
              className="lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={cn(
            "lg:hidden fixed inset-0 top-16 z-50",
            "bg-background border-t border-border",
            "flex flex-col",
            "animate-fade-in"
          )}
        >
          <Container className="flex flex-col gap-2 py-6 flex-1">
            <ul role="list" className="flex flex-col gap-1">
              {nav.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-lg text-base font-medium",
                      "text-muted-foreground hover:text-foreground hover:bg-muted",
                      "transition-colors duration-fast"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 border-t border-border">
              <Button variant="donate" fullWidth size="lg">
                {nav.cta.label}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
