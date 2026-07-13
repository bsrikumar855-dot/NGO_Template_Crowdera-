/**
 * components/core/RevealOnScroll.tsx
 *
 * Reusable animation wrapper using framer-motion's whileInView.
 * Adds a subtle scroll-reveal fade-up effect to child elements.
 */
"use client";
import * as React from "react";
import { motion } from "framer-motion";

export interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  className,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo for premium feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
