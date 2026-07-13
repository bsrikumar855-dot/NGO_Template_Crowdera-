"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sliders, Eye, Heart } from "lucide-react";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { demoOrganizations } from "@/content/demo_configs";
import { motion, useReducedMotion } from "framer-motion";

/* ── Animation variants — stagger preserved ────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ── Reduced-motion variants (opacity-only, no stagger, no y) ───── */
const containerVariantsReduced = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};

const cardItemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};

/* ── Warm lift hover — no neon glow ────────────────────────────── */
const cardHoverProps = {
  whileHover: {
    y: -6,
    boxShadow:
      "0 20px 40px -8px rgba(120, 80, 30, 0.18), 0 8px 16px -4px rgba(120, 80, 30, 0.10)",
  },
  transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
};

/* ── Templates Page ─────────────────────────────────────────────── */
export default function TemplatesPage() {
  const prefersReduced = useReducedMotion();
  const orgKeys = Object.keys(demoOrganizations);
  const cV = prefersReduced ? containerVariantsReduced : containerVariants;
  const iV = prefersReduced ? cardItemVariantsReduced : cardItemVariants;
  /* When reduced-motion is on: no lift, no shadow transition on hover */
  const hoverProps = prefersReduced ? {} : cardHoverProps;

  return (
    /**
     * surface="light" — warm off-white (#faf7f2 approx).
     * Dark mode still applies via the existing .dark class toggle;
     * we just don't make dark the default first impression here.
     */
    <Section surface="light" padding="xl" className="min-h-screen pt-24 pb-20">
      <Container>

        {/* ── Page Header ─────────────────────────────────────── */}
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-5">
          {/* Eyebrow badge */}
          <Badge
            variant="secondary"
            className="mb-1 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide uppercase"
          >
            <Heart className="h-3 w-3 fill-current opacity-70" />
            NGO Template Showcase
          </Badge>

          {/* h1 — warm confident solid color, no gradient */}
          <h1 className="font-display font-bold text-[hsl(25_45%_15%)] text-[clamp(2.25rem,5vw,4rem)] leading-[1.12] tracking-tight">
            Explore NGO Templates
          </h1>

          <p className="text-[hsl(25_15%_42%)] text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed max-w-xl mx-auto">
            Browse 9 fully custom cause presets. Toggle visual themes and
            functional sections instantly — no code required.
          </p>

          {/* Subtle warm divider */}
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-px w-24 rounded-full bg-gradient-to-r from-transparent via-[hsl(38_70%_65%/0.6)] to-transparent"
          />
        </div>

        {/* ── Templates Grid ───────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          initial="hidden"
          animate="visible"
          variants={cV}
        >
          {orgKeys.map((key) => {
            const orgPreset = demoOrganizations[key];
            const heroImage = orgPreset.homepage.hero.slides[0]?.media;
            const thumbnailSrc =
              heroImage && "src" in heroImage
                ? heroImage.src
                : "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800";

            return (
              <motion.article
                key={key}
                variants={iV}
                {...hoverProps}
                className={[
                  /* Base card — white surface, warm border */
                  "group flex flex-col h-full",
                  "bg-white dark:bg-[hsl(240_14%_9%/0.85)]",
                  "border border-[hsl(36_30%_86%)] dark:border-[hsl(240_12%_22%/0.6)]",
                  "rounded-2xl overflow-hidden",
                  /* Resting shadow — soft warm */
                  "shadow-[0_2px_8px_-2px_rgba(120,80,30,0.10),0_1px_2px_rgba(120,80,30,0.06)]",
                  /* Transition for shadow (hover applied by framer) */
                  "transition-colors duration-200",
                ].join(" ")}
              >
                {/* ── Photo area — larger, aspect-[4/3] ─────── */}
                <div className="relative aspect-[4/3] w-full overflow-hidden flex-shrink-0">
                  <Image
                    src={thumbnailSrc}
                    alt={`${orgPreset.name} cause preview`}
                    fill
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Bottom caption scrim — photo-forward approach */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
                  />

                  {/* causeType badge — top-left, retained */}
                  <div className="absolute top-3 left-3 z-10">
                    <Badge
                      variant="solid"
                      className={[
                        "bg-white/90 text-[hsl(25_45%_20%)]",
                        "backdrop-blur-sm border border-white/40",
                        "text-[0.65rem] font-bold tracking-wide uppercase px-2.5 py-0.5",
                        "shadow-sm",
                      ].join(" ")}
                    >
                      {orgPreset.causeType}
                    </Badge>
                  </div>
                </div>

                {/* ── Card body ──────────────────────────────── */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  {/* Title + description */}
                  <div className="flex-1 space-y-1.5">
                    <h3 className="font-display font-bold text-[hsl(25_45%_15%)] dark:text-neutral-100 text-[1.05rem] leading-snug tracking-tight group-hover:text-[hsl(38_85%_38%)] transition-colors duration-200">
                      {orgPreset.name}
                    </h3>
                    <p className="text-[hsl(25_12%_48%)] dark:text-neutral-400 text-sm leading-relaxed line-clamp-2">
                      {orgPreset.tagline ||
                        orgPreset.org.description ||
                        "Empowering communities through coordinated impact programs."}
                    </p>
                  </div>

                  {/* ── CTA buttons — both kept ───────────────── */}
                  <div className="flex gap-2.5 pt-1">
                    {/* View Full Template */}
                    <Link
                      href={`/sites/${key}`}
                      className="flex-1"
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full text-xs font-semibold justify-center h-9"
                        trailingIcon={<Eye className="h-3.5 w-3.5" />}
                      >
                        View Full Template
                      </Button>
                    </Link>

                    {/* Customize */}
                    <Link
                      href={`/templates/demo?org=${key}`}
                      className="flex-1"
                    >
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full text-xs font-semibold justify-center h-9"
                        trailingIcon={<Sliders className="h-3.5 w-3.5" />}
                      >
                        Customize
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ── Footer note ─────────────────────────────────────── */}
        <p className="mt-14 text-center text-[hsl(25_12%_55%)] text-sm">
          All templates are fully responsive, WCAG&nbsp;2.1&nbsp;AA accessible,
          and production-ready.
        </p>

      </Container>
    </Section>
  );
}
