/**
 * CONTENT TYPES
 *
 * Every section component receives a typed configuration object.
 * No hardcoded content anywhere in components.
 */

/* ── Shared Primitives ─────────────────────────────────────── */
export interface CTALink {
  label: string;
  href: string;
  external?: boolean;
  /** 'primary' | 'secondary' | 'ghost' | 'donate' */
  variant?: "primary" | "secondary" | "ghost" | "donate";
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  blurDataURL?: string;
}

export interface VideoAsset {
  src: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export interface SocialLink {
  platform:
    | "facebook"
    | "twitter"
    | "instagram"
    | "linkedin"
    | "youtube"
    | "tiktok"
    | "whatsapp";
  href: string;
  label?: string;
}

export interface AddressInfo {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}

/* ── Organization ──────────────────────────────────────────── */
export interface OrganizationConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: ImageAsset;
  logoDark?: ImageAsset;
  favicon?: string;
  registrationNumber?: string;
  taxId?: string;
  founded?: number;
  causeType:
    | "education"
    | "healthcare"
    | "environment"
    | "animal-welfare"
    | "disaster-relief"
    | "faith-based"
    | "community"
    | "arts"
    | "humanitarian"
    | "other";
  contact: {
    email: string;
    phone?: string;
    address?: AddressInfo;
  };
  social: SocialLink[];
  donateUrl: string;
  volunteerUrl?: string;
  crowderaOrgId?: string;
}

/* ── Navigation ────────────────────────────────────────────── */
export interface NavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  children?: Omit<NavItem, "children">[];
}

export interface NavigationConfig {
  items: NavItem[]; /* max 6 per spec */
  cta: CTALink;     /* always visible donate/action button */
  showThemeToggle?: boolean;
}

/* ── Hero ──────────────────────────────────────────────────── */
export type HeroVariant = "image" | "video" | "carousel";

export interface HeroSlide {
  id: string;
  headline: string;
  subheadline?: string;
  media: ImageAsset | VideoAsset;
  primaryCta?: CTALink;
  secondaryCta?: CTALink;
  overlayOpacity?: number; /* 0-1, default 0.5 */
}

export interface HeroConfig {
  variant: HeroVariant;
  slides: HeroSlide[];
  autoplay?: boolean;
  autoplayInterval?: number; /* ms, default 5000 */
  showScrollIndicator?: boolean;
}

/* ── About ─────────────────────────────────────────────────── */
export type AboutLayout =
  | "text-image"
  | "image-text"
  | "text-video"
  | "text-only"
  | "icon-grid";

export interface AboutIconItem {
  id: string;
  icon: string; /* lucide icon name */
  title: string;
  description: string;
}

export interface AboutConfig {
  layout: AboutLayout;
  badge?: string;
  headline: string;
  body: string[];           /* paragraphs */
  media?: ImageAsset | VideoAsset;
  iconItems?: AboutIconItem[];
  cta?: CTALink;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

/* ── Impact Statistics ─────────────────────────────────────── */
export interface StatItem {
  id: string;
  value: number;
  suffix?: string; /* "+", "K", "M", "%" */
  prefix?: string; /* "$" */
  label: string;
  description?: string;
  icon?: string; /* lucide icon name */
}

export interface StatsConfig {
  badge?: string;
  headline?: string;
  subheadline?: string;
  items: StatItem[];
  countDuration?: number; /* ms */
  layout?: "grid" | "horizontal";
  theme?: "light" | "dark" | "primary";
}

/* ── Programs ──────────────────────────────────────────────── */
export interface ProgramCard {
  id: string;
  image: ImageAsset;
  badge?: string;
  title: string;
  description: string;
  cta: CTALink;
  tags?: string[];
  featured?: boolean;
}

export interface ProgramsConfig {
  badge?: string;
  headline: string;
  subheadline?: string;
  items: ProgramCard[];
  cta?: CTALink;
  /** auto-switches to carousel if items > 3 */
  carouselThreshold?: number;
}

/* ── Testimonials ──────────────────────────────────────────── */
export interface TestimonialCard {
  id: string;
  quote: string;
  authorName: string;
  authorRole?: string;
  authorOrg?: string;
  authorImage?: ImageAsset;
  rating?: 1 | 2 | 3 | 4 | 5;
  featured?: boolean;
}

export interface TestimonialsConfig {
  badge?: string;
  headline: string;
  subheadline?: string;
  items: TestimonialCard[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

/* ── Gallery ───────────────────────────────────────────────── */
export interface GalleryItem {
  id: string;
  media: ImageAsset | VideoAsset;
  type: "image" | "video";
  caption?: string;
  category?: string;
}

export interface GalleryConfig {
  badge?: string;
  headline: string;
  subheadline?: string;
  items: GalleryItem[];
  defaultView?: "grid" | "masonry";
  enableLightbox?: boolean;
  categories?: string[];
}

/* ── News & Updates ────────────────────────────────────────── */
export interface NewsCard {
  id: string;
  slug: string;
  image: ImageAsset;
  category?: string;
  date: string; /* ISO 8601 */
  title: string;
  summary: string;
  author?: string;
  readTime?: number; /* minutes */
  href: string;
}

export interface NewsConfig {
  badge?: string;
  headline: string;
  subheadline?: string;
  items: NewsCard[];
  cta?: CTALink;
  postsPerRow?: 2 | 3 | 4;
}

/* ── CTA Band ──────────────────────────────────────────────── */
export type CtaBandTheme = "primary" | "secondary" | "dark" | "image";

export interface CtaBandConfig {
  theme: CtaBandTheme;
  badge?: string;
  headline: string;
  subheadline?: string;
  primaryCta: CTALink;
  secondaryCta?: CTALink;
  backgroundImage?: ImageAsset;
  overlayOpacity?: number;
}

/* ── Footer ────────────────────────────────────────────────── */
export interface FooterLinkGroup {
  id: string;
  heading: string;
  links: CTALink[];
}

export interface FooterConfig {
  logo: ImageAsset;
  logoDark?: ImageAsset;
  tagline?: string;
  linkGroups: FooterLinkGroup[];
  social: SocialLink[];
  newsletter?: {
    enabled: boolean;
    headline: string;
    placeholder: string;
    buttonLabel: string;
  };
  legal: {
    copyright: string;
    links?: CTALink[];
  };
}

/* ── Homepage Assembly ─────────────────────────────────────── */
export interface HomepageConfig {
  seo: {
    title: string;
    description: string;
    ogImage?: string;
    keywords?: string[];
  };
  hero: HeroConfig;
  about: AboutConfig;
  stats: StatsConfig;
  programs: ProgramsConfig;
  testimonials: TestimonialsConfig;
  gallery: GalleryConfig;
  news: NewsConfig;
  ctaBand: CtaBandConfig;
}
