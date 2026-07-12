/**
 * components/footer/FooterPlaceholder.tsx
 *
 * Footer PLACEHOLDER — structure only.
 * Full implementation in Prompt 2.
 * Accepts FooterConfig + OrganizationConfig for type safety.
 */
import * as React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/core/Container";
import { Divider } from "@/components/core/Divider";
import type { FooterConfig, OrganizationConfig } from "@/types";

export interface FooterPlaceholderProps {
  footer: FooterConfig;
  org: Pick<OrganizationConfig, "name" | "tagline" | "contact" | "social">;
  className?: string;
}

export function FooterPlaceholder({ footer, org, className }: FooterPlaceholderProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className={cn(
        "bg-neutral-950 text-neutral-200",
        "border-t border-neutral-800",
        className
      )}
    >
      <Container>
        <div className="py-16">
          {/* Top row */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-8 w-8 rounded-md bg-primary flex items-center justify-center" aria-hidden="true">
                  <Heart className="h-4 w-4 text-primary-foreground" />
                </span>
                <span className="font-display font-bold text-white text-lg">
                  {org.name}
                </span>
              </div>
              {org.tagline && (
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {org.tagline}
                </p>
              )}
              {/* Social links placeholder */}
              <div className="flex items-center gap-3">
                {org.social.slice(0, 5).map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${link.platform}`}
                    className={cn(
                      "h-9 w-9 rounded-lg border border-neutral-700",
                      "flex items-center justify-center",
                      "text-neutral-400 hover:text-white hover:border-primary hover:bg-primary/10",
                      "transition-all duration-fast"
                    )}
                  >
                    <span className="text-xs capitalize">{link.platform.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Link groups */}
            {footer.linkGroups.slice(0, 3).map((group) => (
              <div key={group.id}>
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  {group.heading}
                </h3>
                <ul role="list" className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={cn(
                          "text-sm text-neutral-400 hover:text-white",
                          "transition-colors duration-fast"
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

        <Divider className="border-neutral-800" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            {footer.legal.copyright.replace("{year}", String(currentYear))}
          </p>

          {footer.legal.links && footer.legal.links.length > 0 && (
            <ul role="list" className="flex items-center gap-4">
              {footer.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <p className="text-xs text-neutral-600 flex items-center gap-1">
            Powered by{" "}
            <span className="text-primary font-medium">Crowdera</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
