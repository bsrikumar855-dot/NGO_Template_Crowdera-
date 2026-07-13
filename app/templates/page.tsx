"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sliders, Eye, Heart, Sparkles } from "lucide-react";
import { Container } from "@/components/core/Container";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { demoOrganizations } from "@/content/demo_configs";
import { motion, useReducedMotion } from "framer-motion";

/* ── Animation variants ─────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariantsReduced = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};

const cardItemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};

/* ── Dark amber glow hover ──────────────────────────────────────── */
const cardHoverProps = {
  whileHover: {
    y: -6,
    boxShadow:
      "0 0 0 1px hsl(38 85% 52% / 0.35), 0 20px 40px -8px hsl(38 85% 52% / 0.15), 0 8px 16px -4px rgba(0,0,0,0.5)",
  },
  transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
};

/* ── Templates Page ─────────────────────────────────────────────── */
export default function TemplatesPage() {
  const prefersReduced = useReducedMotion();
  const orgKeys = Object.keys(demoOrganizations);
  const cV = prefersReduced ? containerVariantsReduced : containerVariants;
  const iV = prefersReduced ? cardItemVariantsReduced : cardItemVariants;
  const hoverProps = prefersReduced ? {} : cardHoverProps;

  return (
    <div className="min-h-screen bg-[hsl(240_20%_4%)] pt-24 pb-20 relative">
      {/* Ambient top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 h-[480px] bg-gradient-to-b from-[hsl(38_85%_52%/0.06)] via-transparent to-transparent"
      />

      <Container>
        {/* ── Page Header ────────────────────────────────────── */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-5">
          <Badge
            variant="secondary"
            className="mb-1 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-[hsl(38_85%_52%/0.12)] text-[hsl(38_85%_65%)] border border-[hsl(38_85%_52%/0.25)]"
          >
            <Heart className="h-3 w-3 fill-current opacity-70" />
            NGO Template Showcase
          </Badge>

          <h1 className="font-display font-bold text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] tracking-tight">
            <span className="text-white">Explore </span>
            <span className="bg-gradient-to-r from-[hsl(38_85%_62%)] via-[hsl(25_90%_60%)] to-[hsl(38_85%_52%)] bg-clip-text text-transparent">
              NGO Templates
            </span>
          </h1>

          <p className="text-neutral-400 text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed max-w-xl mx-auto">
            Browse 9 fully custom cause presets. Toggle visual themes and
            functional sections instantly — no code required.
          </p>

          {/* Glowing divider */}
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-px w-32 rounded-full bg-gradient-to-r from-transparent via-[hsl(38_85%_52%/0.6)] to-transparent"
          />

          {/* Live Customizer CTA */}
          <div className="pt-2">
            <Link href="/templates/demo">
              <Button
                variant="primary"
                size="sm"
                className="inline-flex items-center gap-2 px-5 font-semibold"
                leadingIcon={<Sparkles className="h-4 w-4" />}
              >
                Open Live Customizer
              </Button>
            </Link>
          </div>
        </div>

        {/* ── Templates Grid ─────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                : "/images/orgs/children-studying-in-tough-conditions-photo-1488521787991-ed7bbaae773c.jpg";

            return (
              <motion.article
                key={key}
                variants={iV}
                {...hoverProps}
                className={[
                  "group flex flex-col h-full",
                  "bg-[hsl(240_14%_9%)]",
                  "border border-[hsl(240_12%_18%)]",
                  "rounded-2xl overflow-hidden",
                  "shadow-[0_2px_12px_-2px_rgba(0,0,0,0.5)]",
                  "transition-colors duration-200",
                ].join(" ")}
              >
                {/* Photo area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden flex-shrink-0">
                  <Image
                    src={thumbnailSrc}
                    alt={`${orgPreset.name} cause preview`}
                    fill
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <Badge
                      variant="solid"
                      className="bg-black/60 text-white backdrop-blur-sm border border-white/15 text-[0.62rem] font-bold tracking-widest uppercase px-2.5 py-0.5"
                    >
                      {orgPreset.causeType}
                    </Badge>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  <div className="flex-1 space-y-1.5">
                    <h3 className="font-display font-bold text-neutral-100 text-[1.05rem] leading-snug tracking-tight group-hover:text-[hsl(38_85%_62%)] transition-colors duration-200">
                      {orgPreset.name}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">
                      {orgPreset.tagline ||
                        orgPreset.org.description ||
                        "Empowering communities through coordinated impact programs."}
                    </p>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-2.5 pt-1">
                    <Link href={`/sites/${key}`} className="flex-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs font-semibold justify-center h-9 border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white"
                        trailingIcon={<Eye className="h-3.5 w-3.5" />}
                      >
                        View Site
                      </Button>
                    </Link>
                    <Link href={`/templates/demo?org=${key}`} className="flex-1">
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

        {/* Footer note */}
        <p className="mt-14 text-center text-neutral-600 text-sm">
          All templates are fully responsive, WCAG&nbsp;2.1&nbsp;AA accessible,
          and production-ready.
        </p>
      </Container>
    </div>
  );
}
