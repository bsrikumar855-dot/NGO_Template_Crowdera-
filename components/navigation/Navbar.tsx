/**
 * components/navigation/Navbar.tsx
 *
 * Production Navbar — replaces NavbarPlaceholder.
 * Features:
 * - Transparent on hero, filled on scroll (backdrop-blur)
 * - Active section highlighting via IntersectionObserver
 * - Smooth scroll to anchor sections
 * - Theme toggle (light/dark/system)
 * - Mobile drawer — closes on link click or Escape
 * - Keyboard accessible (Escape closes drawer)
 * - ARIA patterns: role="dialog", aria-expanded, aria-controls
 */
"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Heart,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import type { NavigationConfig, OrganizationConfig } from "@/types";

/* ── Section IDs that map to nav hrefs ──────────────────────── */
const SECTION_IDS = ["hero", "about", "impact", "programs", "testimonials", "gallery", "news", "cta"];

/* ── Theme Toggle button ─────────────────────────────────────── */
function ThemeToggle({ isScrolled }: { isScrolled: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9" />;

  const cycleTheme = () => {
    if (resolvedTheme === "light") setTheme("dark");
    else if (resolvedTheme === "dark") setTheme("system");
    else setTheme("light");
  };

  const icon =
    resolvedTheme === "light" ? (
      <Sun className="h-4 w-4" />
    ) : resolvedTheme === "dark" ? (
      <Moon className="h-4 w-4" />
    ) : (
      <Monitor className="h-4 w-4" />
    );

  const label =
    resolvedTheme === "light"
      ? "Switch to dark mode"
      : resolvedTheme === "dark"
      ? "Switch to system theme"
      : "Switch to light mode";

  return (
    <button
      onClick={cycleTheme}
      aria-label={label}
      className={cn(
        "h-9 w-9 rounded-lg flex items-center justify-center",
        "transition-all duration-fast",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        isScrolled
          ? "text-muted-foreground hover:text-foreground hover:bg-muted"
          : "text-white/70 hover:text-white hover:bg-white/10"
      )}
    >
      {icon}
    </button>
  );
}

/* ── Main Navbar ─────────────────────────────────────────────── */
export interface NavbarProps {
  nav: NavigationConfig;
  org: Pick<OrganizationConfig, "name" | "logo" | "logoDark">;
  className?: string;
}

export function Navbar({ nav, org, className }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("");
  const drawerRef = React.useRef<HTMLDivElement>(null);

  /* ── Scroll detection ── */
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  React.useEffect(() => {
    if (pathname !== "/") return;
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-64px 0px 0px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  /* ── Escape key closes drawer ── */
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  /* ── Prevent body scroll when drawer open ── */
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* ── Smooth scroll to section anchor ── */
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  /* ── Determine if a nav item is active ── */
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return activeSection === href.replace("/#", "");
    return pathname.startsWith(href);
  };

  const isOnHero = !scrolled && pathname === "/";

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
          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label={`${org.name} — Go to homepage`}
            className={cn(
              "flex items-center gap-2.5",
              "font-display font-bold text-lg leading-none",
              "transition-colors duration-fast",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md",
              isOnHero ? "text-white" : "text-foreground hover:text-primary"
            )}
          >
            <span
              className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <Heart className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="hidden sm:block">{org.name}</span>
          </Link>

          {/* ── Desktop nav items ── */}
          <ul role="list" className="hidden lg:flex items-center gap-0.5" aria-label="Site navigation links">
            {nav.items.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative px-3 py-2 rounded-md text-sm font-medium",
                      "transition-all duration-fast",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                      // Active state
                      active && !isOnHero && "text-primary bg-primary/8",
                      active && isOnHero && "text-white",
                      // Inactive states
                      !active && isOnHero && "text-white/80 hover:text-white hover:bg-white/10",
                      !active && !isOnHero && "text-muted-foreground hover:text-foreground hover:bg-muted",
                    )}
                  >
                    {item.label}
                    {/* Active underline indicator */}
                    {active && (
                      <span
                        className={cn(
                          "absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full",
                          isOnHero ? "bg-white" : "bg-primary"
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Right-side actions ── */}
          <div className="flex items-center gap-2">
            {/* Theme toggle — desktop */}
            {nav.showThemeToggle && (
              <div className="hidden lg:block">
                <ThemeToggle isScrolled={scrolled} />
              </div>
            )}

            {/* Donate CTA */}
            <Link href={nav.cta.href} className="hidden sm:block">
              <Button
                variant="donate"
                size="sm"
                className={cn(
                  !scrolled && "shadow-elevation-2"
                )}
              >
                {nav.cta.label}
              </Button>
            </Link>

            {/* ── Mobile hamburger ── */}
            <Button
              variant="ghost"
              size="icon-sm"
              className={cn(
                "lg:hidden",
                isOnHero && "text-white hover:bg-white/10 hover:text-white border-white/20"
              )}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </Container>

      {/* ── Mobile Drawer ── */}
      {isOpen && (
        <div
          ref={drawerRef}
          id="mobile-nav-drawer"
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
          <Container className="flex flex-col gap-2 py-6 flex-1 overflow-y-auto">
            {/* Mobile nav links */}
            <ul role="list" className="flex flex-col gap-1">
              {nav.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-base font-medium",
                        "transition-colors duration-fast",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile bottom actions */}
            <div className="mt-auto pt-6 border-t border-border flex flex-col gap-3">
              {nav.showThemeToggle && (
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm text-muted-foreground font-medium">Appearance</span>
                  <ThemeToggle isScrolled={true} />
                </div>
              )}
              <Link href={nav.cta.href} onClick={() => setIsOpen(false)}>
                <Button variant="donate" fullWidth size="lg">
                  {nav.cta.label}
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
