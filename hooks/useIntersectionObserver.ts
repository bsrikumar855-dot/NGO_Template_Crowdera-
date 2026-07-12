/**
 * hooks/useIntersectionObserver.ts
 *
 * Scroll-triggered reveal hook.
 * Used by Impact Stats, About section, and section entrance animations.
 * IntersectionObserver-based — NOT scroll-jacking.
 */
"use client";
import { useEffect, useRef, useState } from "react";

export interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends Element = Element>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;

  const [element, setElement] = useState<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  // Sync ref.current with state element
  useEffect(() => {
    if (ref.current !== element) {
      setElement(ref.current);
    }
  });

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}
