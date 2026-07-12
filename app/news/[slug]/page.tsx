/**
 * app/news/[slug]/page.tsx
 *
 * Dynamic News article detail page.
 * Renders news articles configured in content/homepage.ts.
 */
import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Breadcrumb } from "@/components/core/Breadcrumb";
import { homepage } from "@/content/homepage";

interface NewsPageProps {
  params: {
    slug: string;
  };
}

/* ── Pre-render Slugs ───────────────────────────────────────── */
export async function generateStaticParams() {
  return (homepage.news?.items || []).map((item) => ({
    slug: item.slug,
  }));
}

/* ── SEO Metadata ───────────────────────────────────────────── */
export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const item = (homepage.news?.items || []).find((p) => p.slug === params.slug);
  if (!item) return {};

  return {
    title: `${item.title} — Crowdera`,
    description: item.summary,
  };
}

/* ── Dynamic News Article Page ───────────────────────────────── */
export default function NewsDetailPage({ params }: NewsPageProps) {
  const item = (homepage.news?.items || []).find((p) => p.slug === params.slug);
  if (!item) {
    notFound();
  }

  // Generate generic paragraphs based on the article's topic to make it realistic
  const getContentParagraphs = (slug: string) => {
    if (slug === "annual-impact-report-2024") {
      return [
        "We are proud to present our Annual Impact Report for the fiscal year 2024. Over the past twelve months, Crowdera has expanded its reach across 6 states in India, serving thousands of underprivileged children with scholarships, learning resources, and career-readiness programs.",
        "Through careful budgeting and optimized operational overheads, we have maintained a 92% program efficiency rate. This means 92 paise of every rupee donated directly funds field programs (teacher training, solar setups, learning kits, and tuition fees), while just 8% supports administration and fundraising costs.",
        "Our educational retention rate stands at an all-time high of 94%. By partnering with local community centers and government schools, we have built a sustainable model that guarantees continuous learning for first-generation students. We express our deepest gratitude to our donors, corporate partners, and tireless volunteers who made these milestones possible."
      ];
    }
    if (slug === "digital-classroom-launch-vidarbha") {
      return [
        "In our mission to bring modern educational resources to rural schools, Crowdera recently commissioned its 47th solar-powered digital classroom hub in the Amravati region of Vidarbha.",
        "The project equips local teachers with a projector system, offline content servers featuring state board lessons, and 30 interactive learning tablets. To overcome frequent electricity grid failures, we installed a local solar array to keep the tablets and servers running throughout school hours.",
        "Over 240 primary and middle school students will now have regular access to digital literacy, science videos, and interactive mathematics modules. We plan to establish 15 more digital hubs in adjacent districts before the end of the school year."
      ];
    }
    // Priya Sharma success story
    return [
      "Crowdera is thrilled to celebrate the success of Priya Sharma, a long-term student of our Merit & Need Scholarship program. Priya has officially secured admission to IIT Bombay's undergraduate Computer Science program, marking a historical milestone for her family and community.",
      "Coming from a modest household in Mumbai's underserved suburbs, Priya joined our learning center in Class 5. Over the last seven years, she has received complete tuition support, continuous study kits, and direct mentorship from our network of corporate engineers.",
      "Priya's success demonstrates the impact of long-term educational mentorship. By addressing both financial obstacles and providing career guides, we help students break historical barriers and access top-tier professional pathways."
    ];
  };

  const paragraphs = getContentParagraphs(item.slug);
  const formattedDate = new Date(item.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <Section padding="xl" className="pt-24 min-h-screen bg-[hsl(240_20%_4%)]">
      <Container size="md">
        {/* Back navigation & Breadcrumb */}
        <div className="flex flex-col gap-4 mb-8">
          <Link href="/#news" className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to News & Updates
          </Link>
          <Breadcrumb
            items={[
              { label: "News", href: "/#news" },
              { label: item.title }
            ]}
            className="text-neutral-400"
          />
        </div>

        {/* Header Block */}
        <div className="flex flex-col gap-4 mb-8">
          <Badge variant="primary" size="md" className="w-fit">
            {item.category}
          </Badge>
          <Heading as="h1" size="3xl" className="text-white leading-tight">
            {item.title}
          </Heading>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400 border-y border-[hsl(240_12%_18%)]/60 py-4 mt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[hsl(38_95%_54%)]" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-[hsl(38_95%_54%)]" />
              <span>By {item.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[hsl(38_95%_54%)]" />
              <span>{item.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden border border-[hsl(240_12%_18%)] aspect-[16/9] w-full mb-8">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* Article Prose Content */}
        <div className="flex flex-col gap-6 text-neutral-300 leading-relaxed text-sm sm:text-base mb-12">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Action Callout */}
        <div className="bg-[hsl(240_16%_8%)] border border-[hsl(240_12%_18%)] rounded-3xl p-8 text-center">
          <Heading as="h3" size="sm" className="text-white mb-2">
            Support Our Ongoing Initiatives
          </Heading>
          <Text className="text-neutral-400 max-w-md mx-auto mb-6 text-xs sm:text-sm">
            Our programs are 100% powered by the generosity of individuals and organizations. Help us fund our next classroom.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button variant="primary">Donate to Crowdera</Button>
            </Link>
            <Link href="/volunteer">
              <Button variant="outline">Become a Volunteer</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
