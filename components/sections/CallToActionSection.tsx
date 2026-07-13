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
    variant = "centered",
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

  // Map variant to theme if image-background is specified
  const effectiveTheme = variant === "image-background" ? "image" : theme;
  const effectivePadding = variant === "minimal" ? "md" : "xl";

  // Surface mapping
  const surfaceMap = {
    primary: "primary",
    secondary: "surface",
    dark: "dark",
    image: "image",
  } as const;

  const isPrimary = effectiveTheme === "primary";
  const isDarkSurface = effectiveTheme === "dark" || effectiveTheme === "image";

  // Shared buttons component to avoid code duplication
  const renderButtons = (size: "lg" | "xl" = "xl") => (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <Link
        href={primaryCta.href}
        target={primaryCta.external ? "_blank" : undefined}
        rel={primaryCta.external ? "noopener noreferrer" : undefined}
      >
        <Button
          variant={primaryCta.variant ?? "donate"}
          size={size}
          rounded
          trailingIcon={<ArrowRight className="h-5 w-5" />}
          className={cn(
            effectiveTheme === "primary" && "bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-transparent",
            effectiveTheme === "dark" && "bg-white text-neutral-900 hover:bg-white/90 border-transparent"
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
            size={size}
            rounded
            className={cn(
              isPrimary && "text-primary-foreground border border-primary-foreground/40 hover:bg-primary-foreground/15 hover:border-primary-foreground",
              isDarkSurface && "text-white border border-white/40 hover:bg-white/15 hover:border-white"
            )}
          >
            {secondaryCta.label}
          </Button>
        </Link>
      )}
    </div>
  );

  return (
    <Section
      surface={surfaceMap[effectiveTheme]}
      padding={effectivePadding}
      ariaLabel="Call to action"
      className="relative overflow-hidden"
    >
      {/* Background image (image variant or theme) */}
      {effectiveTheme === "image" && backgroundImage && (
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
      {effectiveTheme === "primary" && (
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
        {variant === "split" ? (
          <div
            ref={sectionRef}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-left transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="lg:col-span-2 flex flex-col items-start gap-4">
              {badge && (
                <Badge
                  variant="outline"
                  size="md"
                  className={cn(
                    isPrimary && "border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10",
                    isDarkSurface && "border-white/30 text-white bg-white/10"
                  )}
                >
                  {badge}
                </Badge>
              )}
              <Heading
                as="h2"
                size="2xl"
                align="left"
                color={isDarkSurface ? "white" : "default"}
                className={cn("max-w-2xl", isPrimary && "text-primary-foreground")}
              >
                {headline}
              </Heading>
              {subheadline && (
                <Text
                  as="p"
                  size="base"
                  align="left"
                  className={cn(
                    "max-w-xl leading-relaxed",
                    isPrimary ? "text-primary-foreground/85" : isDarkSurface ? "text-white/80" : "text-muted-foreground"
                  )}
                >
                  {subheadline}
                </Text>
              )}
            </div>
            <div className="lg:col-span-1 flex justify-start lg:justify-end">
              {renderButtons("xl")}
            </div>
          </div>
        ) : variant === "minimal" ? (
          <div
            ref={sectionRef}
            className={cn(
              "flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <div className="flex flex-col items-center md:items-start gap-2">
              <Heading
                as="h2"
                size="xl"
                align="left"
                color={isDarkSurface ? "white" : "default"}
                className={cn(isPrimary && "text-primary-foreground")}
              >
                {headline}
              </Heading>
              {subheadline && (
                <Text
                  as="p"
                  size="sm"
                  align="left"
                  className={isPrimary ? "text-primary-foreground/85" : isDarkSurface ? "text-white/80" : "text-muted-foreground"}
                >
                  {subheadline}
                </Text>
              )}
            </div>
            <div>
              {renderButtons("lg")}
            </div>
          </div>
        ) : (
          /* Default: Centered / Image-background */
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
                className={cn(
                    isPrimary && "border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10",
                    isDarkSurface && "border-white/30 text-white bg-white/10"
                  )}
              >
                {badge}
              </Badge>
            )}

            <Heading
              as="h2"
              size="3xl"
              align="center"
              color={isDarkSurface ? "white" : "default"}
              className={cn("max-w-3xl", isPrimary && "text-primary-foreground")}
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
                  isPrimary ? "text-primary-foreground/85" : isDarkSurface ? "text-white/80" : "text-muted-foreground"
                )}
              >
                {subheadline}
              </Text>
            )}

            <div className="pt-2">
              {renderButtons("xl")}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
