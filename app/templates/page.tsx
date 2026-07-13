"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sliders, Eye } from "lucide-react";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/core/Card";
import { demoOrganizations } from "@/content/demo_configs";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TemplatesPage() {
  const orgKeys = Object.keys(demoOrganizations);

  return (
    <Section surface="dark" padding="xl" className="min-h-screen pt-24 pb-16">
      <Container>
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-2">
            NGO Template Showcase
          </Badge>
          <h1 className="font-display font-bold text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-tight tracking-tight">
            Explore <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400">NGO Templates</span>
          </h1>
          <p className="text-muted-foreground text-[clamp(1rem,1.2vw,1.25rem)] leading-relaxed max-w-2xl mx-auto">
            Browse and configure 9 fully custom cause presets. Toggle between visual themes and custom functional sections instantly.
          </p>
        </div>

        {/* Templates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {orgKeys.map((key) => {
            const orgPreset = demoOrganizations[key];
            const heroImage = orgPreset.homepage.hero.slides[0]?.media;
            const thumbnailSrc = heroImage && "src" in heroImage ? heroImage.src : "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800";

            return (
              <motion.div key={key} variants={cardItemVariants} className="h-full">
                <Card
                  variant="default"
                  interactive
                  className="group flex flex-col h-full bg-neutral-900/60 border-neutral-800 hover:border-primary/30"
                >
                  <CardImage aspectRatio="video" className="relative overflow-hidden">
                    <Image
                      src={thumbnailSrc}
                      alt={`${orgPreset.name} preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <Badge variant="solid" className="bg-primary text-primary-foreground font-semibold">
                        {orgPreset.causeType}
                      </Badge>
                    </div>
                  </CardImage>

                  <CardBody className="flex-1 flex flex-col justify-between p-6">
                    <div className="space-y-2">
                      <CardTitle as="h3" className="text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-fast">
                        {orgPreset.name}
                      </CardTitle>
                      <CardDescription className="text-neutral-400 text-sm line-clamp-3 leading-relaxed">
                        {orgPreset.tagline || orgPreset.org.description || "Empowering communities through coordinated impact programs."}
                      </CardDescription>
                    </div>
                  </CardBody>

                  <CardFooter className="p-6 pt-0 flex gap-3">
                    <Link
                      href={`/templates/demo?org=${key}&template=hope-modern&theme=hope-blue`}
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
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
