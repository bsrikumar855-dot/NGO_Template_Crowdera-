/**
 * app/page.tsx — HOMEPAGE
 *
 * Complete homepage assembly for the Crowdera NGO Template.
 * Composes all 8 section components in order:
 *   Hero → About → Impact Stats → Programs → Testimonials
 *   → Gallery → News → CTA Band
 *
 * All content from: content/homepage.ts
 * No hardcoded strings. Every visible string comes from config.
 *
 * Section IDs are set here to enable:
 *   - Navbar active section highlighting
 *   - Smooth scroll anchor navigation
 *   - Skip-link (#main-content lands here)
 */
import type { Metadata } from "next";
import { homepage } from "@/content/homepage";
import {
  HeroSection,
  ImpactStorySection,
  AboutSection,
  ImpactStatsSection,
  ProgramsSection,
  TestimonialsSection,
  GallerySection,
  NewsSection,
  CallToActionSection,
  MarqueeSection,
} from "@/components/sections";
import { TemplateMetadataBadge } from "@/components/core/TemplateMetadataBadge";

/* ── Page-level SEO ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: homepage.seo.title,
  description: homepage.seo.description,
  keywords: homepage.seo.keywords,
  openGraph: {
    title: homepage.seo.title,
    description: homepage.seo.description,
    images: homepage.seo.ogImage ? [{ url: homepage.seo.ogImage }] : [],
  },
  twitter: {
    card: "summary_large_image",
    title: homepage.seo.title,
    description: homepage.seo.description,
  },
};

/* ── Homepage ────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/*
       * ── HERO ──────────────────────────────────────────────
       * Full-bleed, min-90vh, carousel variant.
       * -mt-16 pulls the hero behind the fixed transparent navbar
       * so it appears edge-to-edge at the top of the viewport.
       * The navbar is transparent here, revealing the hero image.
       */}
      <div id="hero" className="-mt-16">
        <HeroSection config={homepage.hero} />
      </div>

      <MarqueeSection />

      {/*
       * ── IMPACT STORY ──────────────────────────────────────
       * Scroll-scrubbed narrative panels (problem -> response -> outcome)
       */}
      <div id="impact-story">
        <ImpactStorySection config={homepage.impactStory} />
      </div>

      {/*
       * ── ABOUT ─────────────────────────────────────────────
       * Layout variant: text-image
       * Org story + 3 headline stats + CTA
       */}
      <div id="about">
        <AboutSection config={homepage.about} />
      </div>

      {/*
       * ── IMPACT STATISTICS ─────────────────────────────────
       * Animated counters, primary theme.
       * id="impact" enables /#impact anchor from navigation.ts
       */}
      <div id="impact">
        <ImpactStatsSection config={homepage.stats} />
      </div>

      {/*
       * ── PROGRAMS ──────────────────────────────────────────
       * 4 programs → exceeds default threshold of 3 → carousel mode
       */}
      <div id="programs">
        <ProgramsSection config={homepage.programs} />
      </div>

      {/*
       * ── TESTIMONIALS ──────────────────────────────────────
       * Auto-play carousel, 7s interval
       */}
      <div id="testimonials">
        <TestimonialsSection config={homepage.testimonials} />
      </div>

      {/*
       * ── GALLERY ───────────────────────────────────────────
       * Masonry default, category filter, lightbox enabled
       */}
      <div id="gallery">
        <GallerySection config={homepage.gallery} />
      </div>

      {/*
       * ── NEWS & UPDATES ────────────────────────────────────
       * 3 cards per row, each links to /news/[slug]
       */}
      <div id="news">
        <NewsSection config={homepage.news} />
      </div>

      {/*
       * ── CALL TO ACTION BAND ───────────────────────────────
       * Primary theme — dominant single CTA
       * Always last before footer to maximize donation conversion
       */}
      <div id="cta">
        <CallToActionSection config={homepage.ctaBand} />
      </div>

      {/* Template Metadata Widget */}
      <TemplateMetadataBadge />
    </>
  );
}
