/**
 * hooks/useCounter.ts
 *
 * Animated counter hook.
 * Triggers count-up animation on scroll-into-view.
 * Respects prefers-reduced-motion.
 */
"use client";
import { useEffect, useRef, useState } from "react";
import { easeOutQuart } from "@/lib/utils";

export interface UseCounterOptions {
  target: number;
  duration?: number; /* ms */
  startOnMount?: boolean;
  reducedMotion?: boolean;
}

export function useCounter({
  target,
  duration = 2000,
  startOnMount = false,
  reducedMotion = false,
}: UseCounterOptions): {
  count: number;
  start: () => void;
  isComplete: boolean;
} {
  const [count, setCount] = useState(reducedMotion ? target : 0);
  const [isComplete, setIsComplete] = useState(reducedMotion);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  const start = () => {
    if (reducedMotion) {
      setCount(target);
      setIsComplete(true);
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
        setIsComplete(true);
      }
    };

    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount) start();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startOnMount]);

  return { count, start, isComplete };
}
