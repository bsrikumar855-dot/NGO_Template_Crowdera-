/**
 * components/sections/CallToActionSection.tsx
 *
 * Full-width CTA band — single dominant action.
 * Supports: primary | secondary | dark | image themes.
 * Configuration-only — works for Donate, Volunteer, Sponsor, Contact.
 * No hardcoded text.
 */
"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/core/Section";
import { Container } from "@/components/core/Container";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { CtaBandConfig } from "@/types";

export interface CallToActionSectionProps {
  config: CtaBandConfig;
}

export function CallToActionSection({ config }: CallToActionSectionProps) {
  const {
    theme,
    badge,
    headline,
    subheadline,
    primaryCta,
    secondaryCta,
    backgroundImage,
    overlayOpacity = 0.6,
  } = config;

  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  // Surface mapping
  const surfaceMap = {
    primary: "primary",
    secondary: "default",
    dark: "dark",
    image: "image",
  } as const;

  const isDark = theme === "dark" || theme === "primary" || theme === "image";

  return (
    <Section
      surface={surfaceMap[theme]}
      padding="xl"
      ariaLabel="Call to action"
      className="relative overflow-hidden"
    >
      {/* Background image (image theme) */}
      {theme === "image" && backgroundImage && (
        <>
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            className="object-cover -z-10"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 -z-[5]"
            style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
            aria-hidden="true"
          />
        </>
      )}

      {/* Decorative background blobs for primary theme */}
      {theme === "primary" && (
        <>
          <div
            className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl -z-[1]"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-black/10 blur-3xl -z-[1]"
            aria-hidden="true"
          />
        </>
      )}

      <Container size="lg">
        <div
          ref={sectionRef}
          className={cn(
            "flex flex-col items-center text-center gap-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {badge && (
            <Badge
              variant="outline"
              size="md"
              className={isDark ? "border-white/30 text-white bg-white/10" : ""}
            >
              {badge}
            </Badge>
          )}

          <Heading
            as="h2"
            size="3xl"
            align="center"
            color={isDark ? "white" : "default"}
            className="max-w-3xl"
          >
            {headline}
          </Heading>

          {subheadline && (
            <Text
              as="p"
              size="md"
              align="center"
              balance
              className={cn(
                "max-w-2xl leading-relaxed",
                isDark ? "text-white/80" : "text-muted-foreground"
              )}
            >
              {subheadline}
            </Text>
          )}

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href={primaryCta.href}
              target={primaryCta.external ? "_blank" : undefined}
              rel={primaryCta.external ? "noopener noreferrer" : undefined}
            >
              <Button
                variant={primaryCta.variant ?? "donate"}
                size="xl"
                rounded
                trailingIcon={<ArrowRight className="h-5 w-5" />}
                className={cn(
                  theme === "primary" && "bg-white text-primary hover:bg-white/90 border-transparent",
                  theme === "dark" && "bg-white text-neutral-900 hover:bg-white/90 border-transparent"
                )}
              >
                {primaryCta.label}
              </Button>
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                target={secondaryCta.external ? "_blank" : undefined}
                rel={secondaryCta.external ? "noopener noreferrer" : undefined}
              >
                <Button
                  variant="ghost"
                  size="xl"
                  rounded
                  className={cn(
                    isDark && "text-white border border-white/40 hover:bg-white/15 hover:border-white"
                  )}
                >
                  {secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
