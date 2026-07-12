/**
 * lib/utils.ts
 *
 * Core utility functions used across the template.
 * Import from "@/lib/utils".
 */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* ── cn() — Tailwind class merger ─────────────────────────── */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/* ── formatDate() ──────────────────────────────────────────── */
export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  locale = "en-US"
): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch {
    return dateString;
  }
}

export function formatDateShort(dateString: string, locale = "en-US"): string {
  return formatDate(
    dateString,
    { year: "numeric", month: "short", day: "numeric" },
    locale
  );
}

export function formatDateRelative(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

/* ── formatNumber() ────────────────────────────────────────── */
export function formatNumber(
  value: number,
  options: Intl.NumberFormatOptions = {},
  locale = "en-US"
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function formatCurrency(
  value: number,
  currency = "USD",
  locale = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatCompactNumber(value: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(value);
}

/* ── generateSlug() ────────────────────────────────────────── */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")     // remove non-word chars
    .replace(/[\s_-]+/g, "-")     // spaces/underscores → hyphens
    .replace(/^-+|-+$/g, "");     // trim leading/trailing hyphens
}

/* ── truncateText() ────────────────────────────────────────── */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
}

/* ── isExternalUrl() ───────────────────────────────────────── */
export function isExternalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.origin !== window.location.origin;
  } catch {
    return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//");
  }
}

/* ── clampValue() ──────────────────────────────────────────── */
export function clampValue(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/* ── easeOutQuart() — for counter animations ───────────────── */
export function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

/* ── getReadTime() ─────────────────────────────────────────── */
export function getReadTime(text: string, wpm = 200): number {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}

/* ── getPlatformIcon() — social platform → lucide name ─────── */
export function getPlatformIconName(
  platform: string
): string {
  const map: Record<string, string> = {
    facebook: "Facebook",
    twitter: "Twitter",
    instagram: "Instagram",
    linkedin: "Linkedin",
    youtube: "Youtube",
    tiktok: "Music2",
    whatsapp: "MessageCircle",
  };
  return map[platform.toLowerCase()] ?? "Link";
}

/* ── noop ──────────────────────────────────────────────────── */
export const noop = (): void => undefined;
