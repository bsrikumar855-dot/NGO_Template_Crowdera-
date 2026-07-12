/**
 * app/legal/[slug]/page.tsx
 *
 * Reusable dynamic legal template for legal pages (Privacy, Terms, Cookies).
 * Renders structured content from local legal config.
 */
import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck, Scale, Cookie } from "lucide-react";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Breadcrumb } from "@/components/core/Breadcrumb";

interface LegalPageProps {
  params: {
    slug: string;
  };
}

interface LegalDoc {
  title: string;
  lastUpdated: string;
  paragraphs: string[];
}

const LEGAL_DOCS: Record<string, LegalDoc> = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "January 2026",
    paragraphs: [
      "At Crowdera, we are committed to protecting your personal privacy. This Privacy Policy details how we collect, store, and process your data when you visit our website, donate to our programs, or submit a volunteer application.",
      "We collect personal identification information (such as your full name, email address, phone number, and tax identification number) solely when you voluntarily submit it through our donation checkout or coordination forms. Your billing details are securely processed by compliant third-party payment gateways and are never saved on our servers.",
      "We do not sell, rent, or trade your personal information with third parties. Your details are used exclusively to process donations, send tax-deductible receipts, communicate application statuses, and provide regular newsletters (where consent has been explicitly granted)."
    ]
  },
  terms: {
    title: "Terms of Use",
    lastUpdated: "January 2026",
    paragraphs: [
      "Welcome to the Crowdera website. By continuing to browse and interact with this website, you agree to comply with and be bound by the following Terms of Use, which govern Crowdera's relationship with you regarding this digital platform.",
      "All donations made through our checkout system are final. As a registered nonprofit entity, funds are instantly allocated to regional program pools (such as student scholarships, midday meals, and solar classroom equipment) and cannot be refunded.",
      "All content, images, graphics, and layout assets featured on this site are protected by copyright laws. You may not reproduce, distribute, or copy any section of this website for commercial purposes without prior written authorization from Crowdera's administrative committee."
    ]
  },
  cookies: {
    title: "Cookie Policy",
    lastUpdated: "January 2026",
    paragraphs: [
      "This Cookie Policy explains how Crowdera uses cookies and similar tracking technologies to improve your experience on our website.",
      "Cookies are small text files stored on your local browser to recall preferences, maintain session state (such as preselected donation tiers), and collect anonymous usage analytics. They do not run programs or deliver viruses to your device.",
      "You can modify your browser configurations to decline cookies or receive notifications when cookies are being sent. Please note that disabling cookies may affect the layout and functionality of certain parts of our checkout and application flows."
    ]
  }
};

/* ── Pre-render Slugs ───────────────────────────────────────── */
export async function generateStaticParams() {
  return Object.keys(LEGAL_DOCS).map((slug) => ({
    slug,
  }));
}

/* ── SEO Metadata ───────────────────────────────────────────── */
export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const doc = LEGAL_DOCS[params.slug];
  if (!doc) return {};

  return {
    title: `${doc.title} — Crowdera`,
    description: `Official ${doc.title} of Crowdera Foundation.`,
  };
}

export default function LegalPage({ params }: LegalPageProps) {
  const doc = LEGAL_DOCS[params.slug];
  if (!doc) {
    notFound();
  }

  // Choose illustrative icon
  const renderIcon = (slug: string) => {
    switch (slug) {
      case "privacy":
        return <ShieldCheck className="h-10 w-10 text-[hsl(38_95%_54%)]" />;
      case "terms":
        return <Scale className="h-10 w-10 text-[hsl(38_95%_54%)]" />;
      default:
        return <Cookie className="h-10 w-10 text-[hsl(38_95%_54%)]" />;
    }
  };

  return (
    <Section padding="xl" className="pt-24 min-h-screen bg-[hsl(240_20%_4%)]">
      <Container size="md">
        {/* Back navigation & Breadcrumb */}
        <div className="flex flex-col gap-4 mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Return to Homepage
          </Link>
          <Breadcrumb
            items={[
              { label: "Legal", href: "#" },
              { label: doc.title }
            ]}
            className="text-neutral-400"
          />
        </div>

        {/* Content Block */}
        <div className="bg-[hsl(240_16%_8%/0.60)] border border-[hsl(240_12%_18%)] backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-elevation-3">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[hsl(38_95%_54%)]/10 rounded-2xl">
              {renderIcon(params.slug)}
            </div>
            <div>
              <Heading as="h1" size="2xl" className="text-white">
                {doc.title}
              </Heading>
              <Text className="text-xs text-neutral-400 mt-1">
                Last Updated: {doc.lastUpdated}
              </Text>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-neutral-300 leading-relaxed text-sm sm:text-base border-t border-[hsl(240_12%_18%)]/60 pt-8">
            {doc.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[hsl(240_12%_18%)]/60 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-neutral-400">
            <span>Crowdera Foundation • Registered NGO-2014-MH-04521</span>
            <Link href="/#footer" className="text-[hsl(38_95%_54%)] hover:underline font-semibold">
              Contact Support
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
