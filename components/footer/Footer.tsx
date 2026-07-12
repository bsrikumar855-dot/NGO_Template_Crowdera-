"use client";

/**
 * components/footer/Footer.tsx
 *
 * Production Footer — replaces FooterPlaceholder.
 * Features:
 * - Brand column with org name, tagline, social icons
 * - Up to 3 link groups from FooterConfig
 * - Newsletter form (UI only — action wired to config)
 * - Proper social icons (Facebook, Instagram, Twitter, LinkedIn, YouTube)
 * - Legal bar with copyright + legal links + "Powered by Crowdera"
 * - Dark background — uses neutral-950 (not CSS vars)
 *   to stay dark in both light and dark app themes
 */
import * as React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/core/Container";
import { Divider } from "@/components/core/Divider";
import { Button } from "@/components/core/Button";
import type { FooterConfig, OrganizationConfig, SocialLink } from "@/types";

/* ── Social icon map ─────────────────────────────────────────── */
const SOCIAL_ICONS: Record<
  SocialLink["platform"],
  React.ComponentType<{ className?: string }>
> = {
  facebook:  Facebook,
  instagram: Instagram,
  twitter:   Twitter,
  linkedin:  Linkedin,
  youtube:   Youtube,
  tiktok:    Twitter,    // Fallback — TikTok not in Lucide
  whatsapp:  Phone,      // Fallback
};

/* ── Newsletter Form ─────────────────────────────────────────── */
function NewsletterForm({
  newsletter,
}: {
  newsletter: NonNullable<FooterConfig["newsletter"]>;
}) {
  const [value, setValue] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    // In production: replace with actual newsletter API call
    setSubmitted(true);
  };

  return (
    <div className="mt-8">
      <p className="text-sm font-semibold text-white mb-3">
        {newsletter.headline}
      </p>
      {submitted ? (
        <p className="text-sm text-primary flex items-center gap-2">
          <Heart className="h-4 w-4 fill-current" />
          Thank you! You are subscribed.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2" role="form" aria-label="Newsletter signup">
          <label htmlFor="footer-newsletter-email" className="sr-only">
            {newsletter.placeholder}
          </label>
          <input
            id="footer-newsletter-email"
            type="email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={newsletter.placeholder}
            required
            autoComplete="email"
            className={cn(
              "flex-1 min-w-0 px-3 py-2 text-sm rounded-lg",
              "bg-neutral-800 border border-neutral-700",
              "text-neutral-100 placeholder-neutral-500",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              "transition-colors duration-fast"
            )}
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            trailingIcon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            {newsletter.buttonLabel}
          </Button>
        </form>
      )}
    </div>
  );
}

/* ── Main Footer ─────────────────────────────────────────────── */
export interface FooterProps {
  footer: FooterConfig;
  org: Pick<OrganizationConfig, "name" | "tagline" | "contact" | "social">;
  className?: string;
}

export function Footer({ footer, org, className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      role="contentinfo"
      className={cn(
        "relative bg-[hsl(240_20%_4%/0.95)] backdrop-blur-xl",
        "border-t border-[hsl(38_95%_54%/0.15)]",
        "shadow-[0_-4px_32px_-4px_rgb(0_0_0/0.7)]",
        className
      )}
    >
      <Container>
        <div className="py-16 lg:py-20">
          {/* ── Main grid ── */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

            {/* Brand column */}
            <div>
              {/* Logo / wordmark */}
              <Link
                href="/"
                aria-label={`${org.name} — Home`}
                className="inline-flex items-center gap-2 mb-5 group"
              >
                <span className="font-display font-bold text-white text-xl tracking-tight leading-none group-hover:text-primary transition-colors">
                  {org.name}
                </span>
              </Link>

              {/* Tagline */}
              {footer.tagline && (
                <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-xs">
                  {footer.tagline}
                </p>
              )}

              {/* Contact mini-block */}
              <div className="flex flex-col gap-2 mb-6">
                {org.contact.email && (
                  <a
                    href={`mailto:${org.contact.email}`}
                    className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                    {org.contact.email}
                  </a>
                )}
                {org.contact.phone && (
                  <a
                    href={`tel:${org.contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                    {org.contact.phone}
                  </a>
                )}
                {org.contact.address?.city && (
                  <span className="flex items-center gap-2 text-xs text-neutral-500">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                    {org.contact.address.city}, {org.contact.address.state}
                  </span>
                )}
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2" role="list" aria-label="Social media links">
                {org.social.slice(0, 5).map((link) => {
                  const Icon = SOCIAL_ICONS[link.platform] ?? Heart;
                  return (
                    <a
                      key={link.platform}
                      href={link.href}
                      role="listitem"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${org.name} on ${link.platform}`}
                      className={cn(
                        "h-9 w-9 rounded-lg border border-neutral-800",
                        "flex items-center justify-center",
                        "text-neutral-400 hover:text-white",
                        "hover:border-primary hover:bg-primary/15",
                        "transition-all duration-fast",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>

              {/* Newsletter */}
              {footer.newsletter?.enabled && (
                <NewsletterForm newsletter={footer.newsletter} />
              )}
            </div>

            {/* Link groups */}
            {footer.linkGroups.slice(0, 3).map((group) => (
              <div key={group.id}>
                <h3 className="text-xs font-semibold text-neutral-300 uppercase tracking-widest mb-5">
                  {group.heading}
                </h3>
                <ul role="list" className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={cn(
                          "text-sm text-neutral-400 hover:text-white",
                          "transition-colors duration-fast",
                          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Legal bar ── */}
        <Divider className="border-neutral-800" />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 text-center sm:text-left">
            {footer.legal.copyright.replace("{year}", String(currentYear))}
          </p>

          {footer.legal.links && footer.legal.links.length > 0 && (
            <ul role="list" className="flex items-center gap-4 flex-wrap justify-center">
              {footer.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-xs text-neutral-500 hover:text-neutral-300",
                      "transition-colors duration-fast",
                      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <p className="text-xs text-neutral-600 flex items-center gap-1 flex-shrink-0">
            Powered by{" "}
            <a
              href="https://crowdera.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Crowdera
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
