/**
 * content/demo_configs.ts
 *
 * Configs for:
 * 1. Themes (Hope Blue, Forest Green, Healthcare Cyan, Sunrise Orange, Dark Neutral)
 * 2. Templates (Hope Modern, Unity Clean, Impact Bold)
 * 3. Organizations (Vidyalaya Foundation, HealAll Foundation, Paws & Claws, EcoShield)
 *
 * Separates template layouts, branding themes, and organizational content.
 */
import type { OrganizationConfig, HomepageConfig, ThemeConfig } from "@/types";

/* ── 1. Branding Themes (Colors only) ────────────────────────── */

export const hopeBlueTheme: ThemeConfig = {
  id: "theme-hope-blue",
  name: "Hope Blue",
  description: "Classic trust-focused corporate blue with gold accents",
  light: {
    colors: {
      primary: "220 80% 30%",
      primaryForeground: "0 0% 98%",
      primarySubtle: "220 80% 96%",
      secondary: "38 90% 50%",
      secondaryForeground: "0 0% 10%",
      neutral: {
        50: "220 20% 98%",
        100: "220 16% 95%",
        200: "220 14% 91%",
        300: "220 12% 82%",
        400: "220 10% 64%",
        500: "220 9%  46%",
        600: "220 10% 35%",
        700: "220 12% 26%",
        800: "220 14% 18%",
        900: "220 16% 12%",
        950: "220 20% 6%",
      },
      success: "142 71% 35%",
      warning: "38 90% 50%",
      error: "0 84% 52%",
      background: "220 20% 98%",
      foreground: "220 15% 10%",
      surface: "0 0% 100%",
      surfaceElevated: "0 0% 100%",
      border: "220 14% 88%",
      muted: "220 16% 95%",
      mutedForeground: "220 10% 46%",
      ring: "220 80% 30%",
    },
  },
  dark: {
    colors: {
      primary: "220 80% 55%",
      primaryForeground: "220 30% 8%",
      primarySubtle: "220 80% 12%",
      secondary: "38 80% 58%",
      secondaryForeground: "220 30% 6%",
      neutral: {
        50: "222 20% 6%",
        100: "222 16% 9%",
        200: "222 14% 13%",
        300: "222 12% 20%",
        400: "222 10% 35%",
        500: "222 9%  52%",
        600: "222 10% 65%",
        700: "222 11% 75%",
        800: "222 12% 84%",
        900: "222 14% 92%",
        950: "222 16% 97%",
      },
      success: "142 71% 55%",
      warning: "38 90% 60%",
      error: "0 84% 65%",
      background: "222 25% 7%",
      foreground: "220 15% 94%",
      surface: "222 20% 10%",
      surfaceElevated: "222 16% 13%",
      border: "222 14% 18%",
      muted: "222 16% 13%",
      mutedForeground: "222 10% 55%",
      ring: "220 80% 55%",
    },
  },
};

export const forestGreenTheme: ThemeConfig = {
  id: "theme-forest-green",
  name: "Forest Green",
  description: "Natural organic forest green with sage accents",
  light: {
    colors: {
      primary: "140 70% 25%",
      primaryForeground: "0 0% 98%",
      primarySubtle: "140 70% 95%",
      secondary: "90 40% 48%",
      secondaryForeground: "0 0% 98%",
      neutral: {
        50: "120 4%  98%",
        100: "120 3%  95%",
        200: "120 3%  90%",
        300: "120 2%  80%",
        400: "120 2%  62%",
        500: "120 2%  44%",
        600: "120 3%  34%",
        700: "120 4%  25%",
        800: "120 5%  18%",
        900: "120 6%  12%",
        950: "120 8%  6%",
      },
      success: "142 71% 35%",
      warning: "90 40% 48%",
      error: "0 84% 52%",
      background: "120 4% 98%",
      foreground: "120 10% 10%",
      surface: "0 0% 100%",
      surfaceElevated: "0 0% 100%",
      border: "120 3% 88%",
      muted: "120 3% 95%",
      mutedForeground: "120 2% 44%",
      ring: "140 70% 25%",
    },
  },
  dark: {
    colors: {
      primary: "140 60% 42%",
      primaryForeground: "120 8%  5%",
      primarySubtle: "140 70% 10%",
      secondary: "90 35% 55%",
      secondaryForeground: "120 8%  5%",
      neutral: {
        50: "120 8%  5%",
        100: "120 6%  8%",
        200: "120 5%  12%",
        300: "120 4%  18%",
        400: "120 3%  32%",
        500: "120 2%  50%",
        600: "120 3%  64%",
        700: "120 4%  75%",
        800: "120 5%  84%",
        900: "120 6%  92%",
        950: "120 8%  97%",
      },
      success: "142 71% 45%",
      warning: "90 40% 60%",
      error: "0 84% 60%",
      background: "120 8%  6%",
      foreground: "120 4%  92%",
      surface: "120 6%  10%",
      surfaceElevated: "120 5%  14%",
      border: "120 4%  18%",
      muted: "120 5%  14%",
      mutedForeground: "120 2%  50%",
      ring: "140 60% 42%",
    },
  },
};

export const healthcareCyanTheme: ThemeConfig = {
  id: "theme-healthcare-cyan",
  name: "Healthcare Cyan",
  description: "Clinical diagnostic cyan with trustworthy indigo secondary",
  light: {
    colors: {
      primary: "185 85% 30%",
      primaryForeground: "0 0% 98%",
      primarySubtle: "185 85% 95%",
      secondary: "240 60% 50%",
      secondaryForeground: "0 0% 98%",
      neutral: {
        50: "180 8%  98%",
        100: "180 6%  95%",
        200: "180 5%  90%",
        300: "180 4%  80%",
        400: "180 3%  62%",
        500: "180 3%  44%",
        600: "180 4%  34%",
        700: "180 5%  25%",
        800: "180 6%  18%",
        900: "180 8%  12%",
        950: "180 10% 6%",
      },
      success: "142 71% 35%",
      warning: "240 60% 50%",
      error: "0 84% 52%",
      background: "180 8% 98%",
      foreground: "180 15% 10%",
      surface: "0 0% 100%",
      surfaceElevated: "0 0% 100%",
      border: "180 5% 88%",
      muted: "180 6% 95%",
      mutedForeground: "180 3% 44%",
      ring: "185 85% 30%",
    },
  },
  dark: {
    colors: {
      primary: "185 75% 45%",
      primaryForeground: "180 10% 5%",
      primarySubtle: "185 85% 10%",
      secondary: "240 65% 62%",
      secondaryForeground: "180 10% 5%",
      neutral: {
        50: "180 10% 5%",
        100: "180 8%  8%",
        200: "180 6%  12%",
        300: "180 5%  18%",
        400: "180 4%  32%",
        500: "180 3%  50%",
        600: "180 4%  64%",
        700: "180 5%  75%",
        800: "180 6%  84%",
        900: "180 8%  92%",
        950: "180 10% 97%",
      },
      success: "142 71% 45%",
      warning: "240 65% 62%",
      error: "0 84% 60%",
      background: "180 10% 6%",
      foreground: "180 5% 92%",
      surface: "180 8% 10%",
      surfaceElevated: "180 6% 14%",
      border: "180 5% 18%",
      muted: "180 6% 14%",
      mutedForeground: "180 3% 50%",
      ring: "185 75% 45%",
    },
  },
};

export const sunriseOrangeTheme: ThemeConfig = {
  id: "theme-sunrise-orange",
  name: "Sunrise Orange",
  description: "Energetic warning orange with warm yellow accent",
  light: {
    colors: {
      primary: "24 95% 45%",
      primaryForeground: "0 0% 98%",
      primarySubtle: "24 95% 96%",
      secondary: "48 95% 50%",
      secondaryForeground: "0 0% 10%",
      neutral: {
        50: "30 20% 98%",
        100: "30 15% 95%",
        200: "30 13% 91%",
        300: "30 10% 82%",
        400: "30 9%  64%",
        500: "30 8%  46%",
        600: "30 10% 35%",
        700: "30 12% 26%",
        800: "30 13% 18%",
        900: "30 15% 12%",
        950: "30 20% 6%",
      },
      success: "142 71% 35%",
      warning: "24 95% 45%",
      error: "0 84% 52%",
      background: "30 20% 98%",
      foreground: "30 15% 10%",
      surface: "0 0% 100%",
      surfaceElevated: "0 0% 100%",
      border: "30 13% 88%",
      muted: "30 15% 95%",
      mutedForeground: "30 9% 46%",
      ring: "24 95% 45%",
    },
  },
  dark: {
    colors: {
      primary: "24 85% 55%",
      primaryForeground: "30 20% 6%",
      primarySubtle: "24 95% 12%",
      secondary: "48 85% 58%",
      secondaryForeground: "30 20% 6%",
      neutral: {
        50: "30 20% 6%",
        100: "30 13% 9%",
        200: "30 12% 13%",
        300: "30 10% 20%",
        400: "30 9%  35%",
        500: "30 8%  52%",
        600: "30 9%  65%",
        700: "30 10% 75%",
        800: "30 12% 84%",
        900: "30 13% 92%",
        950: "30 15% 97%",
      },
      success: "142 71% 55%",
      warning: "24 95% 55%",
      error: "0 84% 65%",
      background: "30 20% 7%",
      foreground: "30 15% 94%",
      surface: "30 15% 10%",
      surfaceElevated: "30 13% 13%",
      border: "30 12% 18%",
      muted: "30 13% 13%",
      mutedForeground: "30 9% 55%",
      ring: "24 85% 55%",
    },
  },
};

export const darkNeutralTheme: ThemeConfig = {
  id: "theme-dark-neutral",
  name: "Dark Neutral",
  description: "Professional slate gray with premium bright silver highlights",
  light: {
    colors: {
      primary: "220 15% 15%",
      primaryForeground: "0 0% 98%",
      primarySubtle: "220 15% 92%",
      secondary: "220 10% 85%",
      secondaryForeground: "220 15% 10%",
      neutral: {
        50: "220 10% 98%",
        100: "220 8%  95%",
        200: "220 7%  90%",
        300: "220 6%  80%",
        400: "220 5%  62%",
        500: "220 5%  44%",
        600: "220 6%  34%",
        700: "220 7%  25%",
        800: "220 8%  18%",
        900: "220 10% 12%",
        950: "220 12% 6%",
      },
      success: "142 71% 35%",
      warning: "220 10% 60%",
      error: "0 84% 52%",
      background: "220 10% 98%",
      foreground: "220 15% 10%",
      surface: "0 0% 100%",
      surfaceElevated: "0 0% 100%",
      border: "220 7% 88%",
      muted: "220 8% 95%",
      mutedForeground: "220 5% 44%",
      ring: "220 15% 15%",
    },
  },
  dark: {
    colors: {
      primary: "220 10% 85%",
      primaryForeground: "220 15% 10%",
      primarySubtle: "220 15% 25%",
      secondary: "220 15% 25%",
      secondaryForeground: "220 10% 90%",
      neutral: {
        50: "220 12% 6%",
        100: "220 10% 9%",
        200: "220 8%  13%",
        300: "220 7%  20%",
        400: "220 6%  35%",
        500: "220 5%  52%",
        600: "220 6%  65%",
        700: "220 7%  75%",
        800: "220 8%  84%",
        900: "220 10% 92%",
        950: "220 12% 97%",
      },
      success: "142 71% 55%",
      warning: "220 10% 80%",
      error: "0 84% 65%",
      background: "220 12% 8%",
      foreground: "220 5%  92%",
      surface: "220 10% 12%",
      surfaceElevated: "220 8%  16%",
      border: "220 8%  20%",
      muted: "220 8%  16%",
      mutedForeground: "220 5%  55%",
      ring: "220 10% 85%",
    },
  },
};

export const demoThemes: Record<string, ThemeConfig> = {
  "hope-blue": hopeBlueTheme,
  "forest-green": forestGreenTheme,
  "healthcare-cyan": healthcareCyanTheme,
  "sunrise-orange": sunriseOrangeTheme,
  "dark-neutral": darkNeutralTheme,
};

/* ── 2. Structural Templates (Layout & typography presets) ───── */

export interface TemplatePreset {
  id: string;
  name: string;
  description: string;
  typography: {
    fontDisplay: string;
    fontBody: string;
  };
  radius: {
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
  };
  variants: {
    hero: "image" | "video" | "carousel";
    about: "text-image" | "image-text" | "text-only" | "icon-grid";
    gallery: "grid" | "masonry" | "carousel";
    cta: "centered" | "split" | "image-background" | "minimal";
  };
}

export const demoTemplates: Record<string, TemplatePreset> = {
  "hope-modern": {
    id: "hope-modern",
    name: "Hope Modern Layout",
    description: "Sleek card interfaces, circular bounds, elegant Jakarta headings",
    typography: {
      fontDisplay: "Plus Jakarta Sans",
      fontBody: "Inter",
    },
    radius: {
      sm: "6px",
      base: "12px",
      md: "18px",
      lg: "24px",
      xl: "32px",
    },
    variants: {
      hero: "carousel",
      about: "text-image",
      gallery: "masonry",
      cta: "split",
    },
  },
  "unity-clean": {
    id: "unity-clean",
    name: "Unity Clean Layout",
    description: "Sharp minimal profiles, dense grids, academic typography",
    typography: {
      fontDisplay: "Outfit",
      fontBody: "Inter",
    },
    radius: {
      sm: "2px",
      base: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px",
    },
    variants: {
      hero: "image",
      about: "text-only",
      gallery: "grid",
      cta: "minimal",
    },
  },
  "impact-bold": {
    id: "impact-bold",
    name: "Impact Bold Layout",
    description: "Ultra-rounded glass borders, dense icon arrays, cinematic media focus",
    typography: {
      fontDisplay: "Plus Jakarta Sans",
      fontBody: "Inter",
    },
    radius: {
      sm: "8px",
      base: "16px",
      md: "24px",
      lg: "32px",
      xl: "48px",
    },
    variants: {
      hero: "video",
      about: "icon-grid",
      gallery: "carousel",
      cta: "image-background",
    },
  },
};

/* ── 3. Organizations Content ────────────────────────────────── */

export interface OrgDemoPreset {
  id: string;
  name: string;
  tagline: string;
  causeType: string;
  org: OrganizationConfig;
  homepage: HomepageConfig;
}

export const demoOrganizations: Record<string, OrgDemoPreset> = {
  education: {
    id: "org-education",
    name: "Vidyalaya Foundation",
    tagline: "Empowering Underprivileged Minds Through Learning",
    causeType: "Education",
    org: {
      id: "org-edu-config",
      name: "Vidyalaya Foundation",
      tagline: "Empowering Underprivileged Minds Through Learning",
      description: "Providing quality education and digital training.",
      logo: { src: "/images/logo.svg", alt: "Vidyalaya Logo", width: 180, height: 40 },
      logoDark: { src: "/images/logo-dark.svg", alt: "Vidyalaya Logo", width: 180, height: 40 },
      founded: 2014,
      causeType: "education",
      contact: { email: "edu@demo.org", phone: "+91 99999 11111", address: { street: "12 Education St", city: "Mumbai", state: "MH", zip: "400001", country: "India" } },
      social: [{ platform: "facebook", href: "#" }],
      donateUrl: "/donate",
      volunteerUrl: "#",
    },
    homepage: {
      seo: { title: "Vidyalaya Foundation", description: "Education NGO" },
      hero: {
        variant: "carousel",
        slides: [
          {
            id: "slide-edu-1",
            headline: "Knowledge is Freedom & Opportunity",
            subheadline: "Directly funding K-12 education, scholarships, and resources for rural schools.",
            media: { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop", alt: "Classroom", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Sponsor A Child", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
          {
            id: "slide-edu-2",
            headline: "Empowering Rural Classrooms",
            subheadline: "Providing clean water, solar electricity, and textbooks to remote schoolhouses.",
            media: { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop", alt: "Rural school students studying", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Fund a Classroom", href: "/donate" },
            secondaryCta: { label: "Our Reach", href: "/#about" },
          },
          {
            id: "slide-edu-3",
            headline: "Bridging the Digital Divide",
            subheadline: "Setting up computer training labs to prepare youth for a modern digital economy.",
            media: { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop", alt: "Digital literacy training lab", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Sponsor a Computer", href: "/donate" },
            secondaryCta: { label: "Our Programs", href: "/#about" },
          },
        ],
      },
      impactStory: {
        panels: [
          {
            id: "panel-problem",
            image: { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop", alt: "Children studying in tough conditions" },
            eyebrow: "The Problem",
            headline: "Educational Inequality in Rural Villages",
            body: "Millions of children in rural areas lack access to basic classrooms, textbooks, and qualified teachers."
          },
          {
            id: "panel-response",
            image: { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop", alt: "Vidyalaya digital classroom setup" },
            eyebrow: "Our Response",
            headline: "Delivering Infrastructure and Scholarships",
            body: "We set up solar-powered classrooms, distribute learning tablets, and sponsor full academic scholarships."
          },
          {
            id: "panel-outcome",
            image: { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop", alt: "Happy child holding tablet in class" },
            eyebrow: "The Outcome",
            headline: "First-Generation Scholars Succeeding",
            body: "Our graduates are breaking barriers — entering top universities, securing coding jobs, and uplifting their communities."
          }
        ]
      },
      about: {
        variant: "text-image",
        badge: "Who We Are",
        headline: "Breaking the Cycle of Poverty Through Classrooms",
        body: [
          "Over 12,000 students enrolled across our active regional learning hubs.",
          "Our holistic support system ensures students receive nutritious meals, health checkups, and school uniforms alongside their academics."
        ],
        media: { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", alt: "Students in classroom", width: 600, height: 450 },
        cta: { label: "Our Mission", href: "/#about" },
      },
      stats: {
        theme: "primary",
        items: [
          { id: "e1", value: 12000, label: "Students", icon: "Users" },
          { id: "e2", value: 47, label: "Learning Centres", icon: "Building2" },
          { id: "e3", value: 250, label: "Scholarships", icon: "GraduationCap" },
          { id: "e4", value: 85, label: "Digital Labs", icon: "Laptop" },
        ],
      },
      programs: {
        variant: "carousel",
        badge: "Our Focus",
        headline: "Educational Programs",
        items: [
          { id: "p1", image: { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop", alt: "Rural Scholarships" }, badge: "K-12", title: "Rural Scholarships", description: "Direct financial and resource sponsorship for children in remote areas.", cta: { label: "View Details", href: "/programs" }, tags: ["Rural", "Scholarships"] },
          { id: "p2", image: { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop", alt: "Digital Labs" }, badge: "Technology", title: "Digital Labs", description: "Providing laptops, internet access, and digital tools to rural schools.", cta: { label: "View Details", href: "/programs" }, tags: ["Tech", "Solar"] },
          { id: "p3", image: { src: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop", alt: "Literacy campaigns" }, badge: "Literacy", title: "Early Childhood Literacy", description: "Foundational reading and writing courses for preschool-aged children.", cta: { label: "View Details", href: "/programs" }, tags: ["Reading", "Youth"] },
          { id: "p4", image: { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop", alt: "Teacher training workshops" }, badge: "Vocational", title: "Teacher Training Camps", description: "Upskilling regional educators with modern instructional methods.", cta: { label: "View Details", href: "/programs" }, tags: ["Teachers", "Training"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Impact Stories",
        items: [
          { id: "t1", quote: "Vidyalaya foundation supported my studies when my family couldn't afford school. Now I am studying computer science at university.", authorName: "Priya", authorRole: "Graduate Scholar" },
          { id: "t2", quote: "Because of the digital labs, I learned how to use a computer and secured my first remote internship as a developer.", authorName: "Rahul M.", authorRole: "Alumnus" },
          { id: "t3", quote: "Sponsoring a classroom in Pune gave us a chance to see how our contributions directly uplift local children.", authorName: "Sarah J.", authorRole: "Monthly Donor" },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "g1", type: "image", media: { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop", alt: "Classroom setting" }, category: "Classroom" },
          { id: "g2", type: "image", media: { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop", alt: "Children learning" }, category: "Children" },
          { id: "g3", type: "image", media: { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", alt: "Digital tablet learning" }, category: "Digital Lab" },
          { id: "g4", type: "image", media: { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop", alt: "Children using computers" }, category: "Technology" },
          { id: "g5", type: "image", media: { src: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop", alt: "Library reading session" }, category: "Library" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "n1", slug: "iit-admissions-surge", title: "IIT Admissions Surge", summary: "Our scholarship students score high ranks in competitive entrance exams.", date: "2024-07-20", href: "#", image: { src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop", alt: "IIT exam success celebration" } },
          { id: "n2", slug: "new-learning-center", title: "New Learning Center Opens in Pune", summary: "A brand new facility serving 500 children weekly in urban slum areas.", date: "2024-08-15", href: "#", image: { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop", alt: "New learning center opening ceremony" } },
          { id: "n3", slug: "digital-literacy-grant", title: "Received Digital Literacy Grant", summary: "National funding received to expand computer courses to 10 more rural districts.", date: "2024-09-05", href: "#", image: { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop", alt: "Digital literacy class group photo" } },
        ],
      },
      ctaBand: {
        variant: "split",
        theme: "primary",
        badge: "Take Action",
        headline: "Empower a Mind Today.",
        subheadline: "Your help bridges the educational divide.",
        primaryCta: { label: "Donate Now", href: "/donate" },
      },
    },
  },
  healthcare: {
    id: "org-healthcare",
    name: "HealAll Foundation",
    tagline: "Bringing Quality Medical Care to Underserved Communities",
    causeType: "Healthcare",
    org: {
      id: "org-health-config",
      name: "HealAll Foundation",
      tagline: "Bringing Quality Medical Care to Underserved Communities",
      description: "Operating mobile clinics, medicine drives, and mental health checkups.",
      logo: { src: "/images/logo.svg", alt: "HealAll Logo", width: 180, height: 40 },
      logoDark: { src: "/images/logo-dark.svg", alt: "HealAll Logo", width: 180, height: 40 },
      founded: 2017,
      causeType: "healthcare",
      contact: { email: "care@healall.org", phone: "+91 99999 22222", address: { street: "45 Care Rd", city: "Delhi", state: "DL", zip: "110001", country: "India" } },
      social: [{ platform: "facebook", href: "#" }],
      donateUrl: "/donate",
      volunteerUrl: "#",
    },
    homepage: {
      seo: { title: "HealAll Foundation", description: "Healthcare NGO" },
      hero: {
        variant: "video",
        slides: [
          {
            id: "slide-health-1",
            headline: "Healing Lives, One Village at a Time",
            subheadline: "Providing healthcare camps, essential medicines, and maternal care support.",
            media: { src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop", alt: "Doctor examining child", width: 1200, height: 600 },
            overlayOpacity: 0.5,
            primaryCta: { label: "Fund Clinic", href: "/donate" },
            secondaryCta: { label: "Watch Video", href: "#" },
          },
          {
            id: "slide-health-2",
            headline: "Mobile Clinics on the Move",
            subheadline: "Deploying fully staffed medical vans to remote, hard-to-reach rural regions.",
            media: { src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop", alt: "Mobile clinic medical team", width: 1200, height: 600 },
            overlayOpacity: 0.5,
            primaryCta: { label: "Sponsor a Mobile Van", href: "/donate" },
            secondaryCta: { label: "Outreach Areas", href: "/#about" },
          },
          {
            id: "slide-health-3",
            headline: "Safe Motherhood Campaigns",
            subheadline: "Providing prenatal checkups, vitamins, and clean delivery kits to expectant mothers.",
            media: { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop", alt: "Maternal diagnostic checkup camp", width: 1200, height: 600 },
            overlayOpacity: 0.5,
            primaryCta: { label: "Support a Mother", href: "/donate" },
            secondaryCta: { label: "Our Reach", href: "/#about" },
          },
        ],
      },
      impactStory: {
        panels: [
          {
            id: "panel-problem",
            image: { src: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=1200&auto=format&fit=crop", alt: "Underfunded rural clinic" },
            eyebrow: "The Problem",
            headline: "Zero Access to Critical Medical Diagnostics",
            body: "Rural villages often lie hours away from the nearest clinical hospital, leaving critical conditions untreated."
          },
          {
            id: "panel-response",
            image: { src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop", alt: "Outreach health diagnostics camp" },
            eyebrow: "Our Response",
            headline: "Mobilizing Doctors and Medical Supplies",
            body: "We deploy mobile diagnostic vans and establish weekend primary wellness clinics directly in remote spots."
          },
          {
            id: "panel-outcome",
            image: { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop", alt: "Doctors smiling with healthy patients" },
            eyebrow: "The Outcome",
            headline: "Healthy, Resilient Communities",
            body: "Over 45,000 patients have received primary checkups, preventive medicine, and life-saving pre-natal diagnostics."
          }
        ]
      },
      about: {
        variant: "icon-grid",
        badge: "Our Purpose",
        headline: "Radical Healthcare Outreach",
        body: [
          "We establish temporary diagnostic and relief centers directly inside remote pockets.",
          "Our network of volunteer doctors and subsidized pharmacies ensures that financial status is never a barrier to wellness."
        ],
        media: { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop", alt: "Mobile outreach clinic unit", width: 600, height: 450 },
        cta: { label: "Read Outreach Model", href: "/#about" },
        stats: [
          { value: "45K+", label: "Patients Treated" },
          { value: "110", label: "Mobile Clinics" },
        ],
      },
      stats: {
        theme: "dark",
        items: [
          { id: "h1", value: 45200, label: "Patients Treated", icon: "Users" },
          { id: "h2", value: 112, label: "Medical Camps", icon: "Building2" },
          { id: "h3", value: 8500, label: "Mothers Supported", icon: "Heart" },
          { id: "h4", value: 450, label: "Volunteer Doctors", icon: "Stethoscope" },
        ],
      },
      programs: {
        variant: "grid",
        badge: "Services",
        headline: "Medical Interventions",
        items: [
          { id: "p1", image: { src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop", alt: "Stethoscope and clinical care" }, badge: "Clinic", title: "Mobile Wellness Clinics", description: "Outpatient clinical services including primary care and diagnostic testing.", cta: { label: "View Program", href: "/programs" }, tags: ["Mobile", "Primary Care"] },
          { id: "p2", image: { src: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=600&auto=format&fit=crop", alt: "Maternal and child wellness checkup" }, badge: "Maternal", title: "Safe Motherhood Camps", description: "Pre-natal and post-natal checkups, counseling, and delivery kits.", cta: { label: "View Program", href: "/programs" }, tags: ["Women", "Health"] },
          { id: "p3", image: { src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop", alt: "Nutrition screening" }, badge: "Childcare", title: "Nutritional Support", description: "Providing vitamin supplements and growth screening for undernourished children.", cta: { label: "View Program", href: "/programs" }, tags: ["Nutrition", "Children"] },
          { id: "p4", image: { src: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=600&auto=format&fit=crop", alt: "Prescription drugs distribution" }, badge: "Pharmacy", title: "Essential Medicines Fund", description: "Securing and distributing free prescription medications for chronic illnesses.", cta: { label: "View Program", href: "/programs" }, tags: ["Medicines", "Equity"] },
        ],
      },
      testimonials: {
        variant: "masonry",
        badge: "Impact",
        headline: "Patient Testimonials",
        items: [
          { id: "t1", quote: "The clinic visited our village just in time. They diagnosed my son's fever and provided medications for free.", authorName: "Savitri", authorRole: "Mother" },
          { id: "t2", quote: "The mobile health clinic diagnosed my hypertension early. The free monthly medications keep me healthy.", authorName: "Rajesh K.", authorRole: "Outpatient" },
          { id: "t3", quote: "Volunteering with HealAll allows me to bring clinical expertise directly to the doorstep of those who need it most.", authorName: "Dr. Anjali S.", authorRole: "Volunteer Physician" },
        ],
      },
      gallery: {
        variant: "grid",
        badge: "Moments",
        headline: "On-Ground Diagnostics",
        items: [
          { id: "g1", type: "image", media: { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop", alt: "Diagnostics checkup camp" }, category: "Diagnostics" },
          { id: "g2", type: "image", media: { src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop", alt: "Nutritional supplement distribution" }, category: "Nutrition" },
          { id: "g3", type: "image", media: { src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop", alt: "Doctors diagnosing patient in mobile van" }, category: "Mobile Clinic" },
          { id: "g4", type: "image", media: { src: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=800&auto=format&fit=crop", alt: "Underprivileged patients queueing" }, category: "Camp Outreach" },
          { id: "g5", type: "image", media: { src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop", alt: "Clinical checkup equipment" }, category: "Equipment" },
        ],
      },
      news: {
        variant: "magazine",
        badge: "Stories",
        headline: "Health Updates",
        items: [
          { id: "n1", slug: "combating-malnutrition", title: "Combating Malnutrition in Tribal Districts", summary: "Providing food supplements and counseling sessions to local mothers.", date: "2024-10-01", href: "#", image: { src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop", alt: "Food supplements and clinical help" } },
          { id: "n2", slug: "mental-health-expansion", title: "Expanding Telehealth Services", summary: "Our mobile clinics now offer live psychiatric consults via satellite link to city hospitals.", date: "2024-10-15", href: "#", image: { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop", alt: "Telehealth diagnostic unit" } },
          { id: "n3", slug: "monsoon-medical-relief", title: "Monsoon Medical Relief Deployed", summary: "Extra mobile teams dispatched to areas experiencing flood-related waterborne diseases.", date: "2024-11-02", href: "#", image: { src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop", alt: "Emergency medicine camp setup" } },
        ],
      },
      ctaBand: {
        variant: "minimal",
        theme: "dark",
        badge: "Donate Today",
        headline: "Save a Life. Support Our Clinics.",
        subheadline: "Your donation sends medicines directly to rural families.",
        primaryCta: { label: "Send Medicine Box", href: "/donate" },
      },
    },
  },
  animal: {
    id: "org-animal",
    name: "Paws & Claws Rescue",
    tagline: "Voicing the Needs of Stray Animals",
    causeType: "Animal Welfare",
    org: {
      id: "org-animal-config",
      name: "Paws & Claws Rescue",
      tagline: "Voicing the Needs of Stray Animals",
      description: "Dedicated to rescuing, treating, sterilizing, and finding homes for stray dogs and cats.",
      logo: { src: "/images/logo.svg", alt: "Paws & Claws Logo", width: 180, height: 40 },
      logoDark: { src: "/images/logo-dark.svg", alt: "Paws & Claws Logo", width: 180, height: 40 },
      founded: 2020,
      causeType: "animal-welfare",
      contact: { email: "help@paws.org", phone: "+91 99999 33333", address: { street: "7 Shelter Ln", city: "Bangalore", state: "KA", zip: "560001", country: "India" } },
      social: [{ platform: "instagram", href: "#" }],
      donateUrl: "/donate",
      volunteerUrl: "#",
    },
    homepage: {
      seo: { title: "Paws & Claws Rescue", description: "Animal Shelter NGO" },
      hero: {
        variant: "image",
        slides: [
          {
            id: "slide-animal-1",
            headline: "Provide Shelters & Healing for Abandoned Paws",
            subheadline: "Rescuing injured strays, managing foster networks, and funding vaccinations.",
            media: { src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop", alt: "Happy rescued dog", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Sponsor A Pet", href: "/donate" },
            secondaryCta: { label: "Volunteer At Shelter", href: "#" },
          },
          {
            id: "slide-animal-2",
            headline: "24/7 Veterinary Rescue Ambulance",
            subheadline: "Operating fast emergency rescue vans to perform critical trauma surgery and rehabilitation.",
            media: { src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1200&auto=format&fit=crop", alt: "Rescued dogs playing in shelter", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Sponsor Ambulance Fuel", href: "/donate" },
            secondaryCta: { label: "Emergency Hotline", href: "#" },
          },
          {
            id: "slide-animal-3",
            headline: "Humane Birth Control Campaigns",
            subheadline: "Sterilizing and vaccinating stray dog populations to ensure healthy and safe neighborhoods.",
            media: { src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200&auto=format&fit=crop", alt: "Puppy receiving wellness vaccination", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Fund Sterilizations", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
        ],
      },
      impactStory: {
        panels: [
          {
            id: "panel-problem",
            image: { src: "https://images.unsplash.com/photo-1537151608828-ea2b117b6205?q=80&w=1200&auto=format&fit=crop", alt: "Stray dog on the road needing rescue" },
            eyebrow: "The Problem",
            headline: "Neglected Stray Animal Crisis",
            body: "Thousands of stray dogs and cats face hunger, abuse, and untreated severe injuries on city streets daily."
          },
          {
            id: "panel-response",
            image: { src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop", alt: "Rescued dogs playing in shelter" },
            eyebrow: "Our Response",
            headline: "24/7 Rescue and Medical Care",
            body: "We operate trauma ambulances, provide professional veterinary surgeries, and manage foster adoption networks."
          },
          {
            id: "panel-outcome",
            image: { src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=800&auto=format&fit=crop", alt: "Rescued dog with loving family" },
            eyebrow: "The Outcome",
            headline: "Thousands of Happy Adoptions",
            body: "We have rescued 3,400+ animals and run population control campaigns, creating safer city streets for all."
          }
        ]
      },
      about: {
        variant: "image-text",
        badge: "Who We Are",
        headline: "Every Dog & Cat Deserves Safety",
        body: [
          "We work 24/7 to respond to medical emergency calls for strays across the city.",
          "Our facilities include modern operating theaters, isolation wards for sick strays, and a free run yard for dogs in recovery."
        ],
        media: { src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop", alt: "Rescued animals at shelter", width: 600, height: 450 },
        cta: { label: "Shelter Tour", href: "/#about" },
      },
      stats: {
        theme: "primary",
        items: [
          { id: "a1", value: 3400, label: "Rescues Made", icon: "Activity" },
          { id: "a2", value: 1200, label: "Sterilizations", icon: "Check" },
          { id: "a3", value: 450, label: "Adoptions Made", icon: "Home" },
          { id: "a4", value: 15, label: "Active Vets", icon: "UserCheck" },
        ],
      },
      programs: {
        variant: "grid",
        badge: "Rescue Actions",
        headline: "What We Run",
        items: [
          { id: "p1", image: { src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop", alt: "Cute rescued shelter cat" }, badge: "Emergency", title: "Ambulance & Trauma Care", description: "Emergency pickup for wounded strays with on-board professional veterinary care.", cta: { label: "Details", href: "/programs" }, tags: ["Trauma", "24/7"] },
          { id: "p2", image: { src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=600&auto=format&fit=crop", alt: "Puppy getting vaccine checkup" }, badge: "Spay/Neuter", title: "ABC (Animal Birth Control)", description: "Humane population control and mass rabies vaccination campaigns.", cta: { label: "Details", href: "/programs" }, tags: ["ABC", "Vaccination"] },
          { id: "p3", image: { src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop", alt: "Happy rescued dog" }, badge: "Adoption", title: "Adopt-a-Stray Fairs", description: "Connecting our fully treated and sterilized shelter animals with local loving families.", cta: { label: "Details", href: "/programs" }, tags: ["Adoption", "Foster"] },
          { id: "p4", image: { src: "https://images.unsplash.com/photo-1537151608828-ea2b117b6205?q=80&w=600&auto=format&fit=crop", alt: "Rescue worker treating puppy" }, badge: "Education", title: "Humane Education Class", description: "School workshops teaching children kindness to animals, bite prevention, and rescue basics.", cta: { label: "Details", href: "/programs" }, tags: ["Education", "Youth"] },
        ],
      },
      testimonials: {
        variant: "featured",
        badge: "Adoptions",
        headline: "Happy Tails",
        items: [
          { id: "t1", quote: "Adopting Milo was the best decision our family ever made. The post-adoption support from Paws & Claws was phenomenal.", authorName: "Karan", authorRole: "Pet Parent" },
          { id: "t2", quote: "Finding a severely injured street dog was stressful. The ambulance showed up in 20 minutes, operated, and Bruno is now walking!", authorName: "Nisha R.", authorRole: "Street Rescuer" },
          { id: "t3", quote: "Supporting their monthly medical fund lets me help dogs and cats even though my apartment doesn't allow pets.", authorName: "Vikram S.", authorRole: "Monthly Sponsor" },
        ],
      },
      gallery: {
        variant: "carousel",
        badge: "Shelter Pups",
        headline: "Adoptable Animals",
        items: [
          { id: "g1", type: "image", media: { src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop", alt: "Happy adoptable dog" }, category: "Puppies" },
          { id: "g2", type: "image", media: { src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop", alt: "Rescued dogs playing outdoors" }, category: "Dogs" },
          { id: "g3", type: "image", media: { src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop", alt: "Rescued tabby cat sleeping" }, category: "Cats" },
          { id: "g4", type: "image", media: { src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop", alt: "Vet treating pup in clinical table" }, category: "Clinic" },
          { id: "g5", type: "image", media: { src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=800&auto=format&fit=crop", alt: "Volunteer petting happy dog" }, category: "Volunteers" },
        ],
      },
      news: {
        variant: "timeline",
        badge: "Journal",
        headline: "Shelter Stories",
        items: [
          { id: "n1", slug: "rescue-bruno", title: "Rescue of Bruno from an Open Pit", summary: "Saved by our trauma unit after falling into a deep dry well.", date: "2024-07-20", href: "#", image: { src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop", alt: "Dog Rescue rescue team operation" } },
          { id: "n2", slug: "rabies-free-drive", title: "Mass Rabies Vaccination Completed", summary: "Over 800 community stray dogs across the eastern suburbs received vaccination shots.", date: "2024-08-10", href: "#", image: { src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop", alt: "Puppy receiving vaccination dose" } },
          { id: "n3", slug: "new-isolation-ward", title: "New Isolation Ward Opened", summary: "A dedicated medical suite to quarantine and treat contagious street animal viral infections.", date: "2024-09-01", href: "#", image: { src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop", alt: "Clean shelter treatment ward" } },
        ],
      },
      ctaBand: {
        variant: "centered",
        theme: "primary",
        badge: "Save Lives",
        headline: "Help Us Build a Larger Emergency Shelter.",
        subheadline: "Support food, medicines, and cages for up to 150 strays.",
        primaryCta: { label: "Give to Shelter", href: "/donate" },
      },
    },
  },
  environment: {
    id: "org-environment",
    name: "EcoShield Foundation",
    tagline: "Restoring Ecosystems and Fighting Climate Change",
    causeType: "Environment",
    org: {
      id: "org-env-config",
      name: "EcoShield Foundation",
      tagline: "Restoring Ecosystems and Fighting Climate Change",
      description: "Organizing mass afforestation drives, lake restorations, and clean energy promotion.",
      logo: { src: "/images/logo.svg", alt: "EcoShield Logo", width: 180, height: 40 },
      logoDark: { src: "/images/logo-dark.svg", alt: "EcoShield Logo", width: 180, height: 40 },
      founded: 2012,
      causeType: "environment",
      contact: { email: "green@ecoshield.org", phone: "+91 99999 44444", address: { street: "88 Canopy Way", city: "Chennai", state: "TN", zip: "600001", country: "India" } },
      social: [{ platform: "linkedin", href: "#" }],
      donateUrl: "/donate",
      volunteerUrl: "#",
    },
    homepage: {
      seo: { title: "EcoShield Foundation", description: "Environment NGO" },
      hero: {
        variant: "carousel",
        slides: [
          {
            id: "slide-env-1",
            headline: "Let's Plant a Future for Our Planet",
            subheadline: "Help us plant 100,000 native saplings in degraded forest corridors.",
            media: { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop", alt: "Planting trees at afforestation site", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Plant Trees", href: "/donate" },
            secondaryCta: { label: "Volunteer Nearby", href: "#" },
          },
          {
            id: "slide-env-2",
            headline: "Lake Recovery Systems",
            subheadline: "De-silting inlets, clearing waste, and introducing floating wetlands to filter local waters.",
            media: { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop", alt: "Lake recovery operations", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Restore a Lake", href: "/donate" },
            secondaryCta: { label: "Lake Projects", href: "/#about" },
          },
          {
            id: "slide-env-3",
            headline: "Miyawaki Pocket Forests",
            subheadline: "Planting dense urban mini-forests in concrete corridors to naturally cool cities.",
            media: { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop", alt: "Dense urban pocket forest", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Plant a Pocket Forest", href: "/donate" },
            secondaryCta: { label: "Learn Miyawaki", href: "/#about" },
          },
        ],
      },
      impactStory: {
        panels: [
          {
            id: "panel-problem",
            image: { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop", alt: "Dry deforested land needing water and trees" },
            eyebrow: "The Problem",
            headline: "Rapid Habitat Loss and Urban Warming",
            body: "Degraded forests, polluted city lakes, and rising temperatures threaten regional biodiversity and communities."
          },
          {
            id: "panel-response",
            image: { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop", alt: "Volunteers planting saplings together" },
            eyebrow: "Our Response",
            headline: "Mass Reforestation and Watershed Restoration",
            body: "We build dense Miyawaki urban forests, clean lakes, and engage community volunteers in planting native trees."
          },
          {
            id: "panel-outcome",
            image: { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop", alt: "Dense green forest canopy" },
            eyebrow: "The Outcome",
            headline: "Restored Biodiversity Corridors",
            body: "Over 85,000 trees planted and 14 lakes recovered, creating active oxygen hubs and stable local ecosystems."
          }
        ]
      },
      about: {
        variant: "text-only",
        badge: "Our Philosophy",
        headline: "Lake Recovery & Re-Wilding",
        body: [
          "Degraded urban ecosystems can recover rapidly if native flora is re-seeded properly.",
          "Through collaborative cleanup and scientific soil nourishment, we revive dried water bodies back to thriving bio-diverse sanctuaries."
        ],
        media: { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop", alt: "Lake Cleanup and watershed recovery", width: 600, height: 450 },
        cta: { label: "Afforestation Data", href: "/#about" },
      },
      stats: {
        theme: "primary",
        items: [
          { id: "v1", value: 85000, label: "Trees Planted", icon: "TreeDeciduous" },
          { id: "v2", value: 14, label: "Lakes Restored", icon: "Droplet" },
          { id: "v3", value: 120, label: "Solar Kits", icon: "Sun" },
          { id: "v4", value: 48, label: "Nurseries Run", icon: "Leaf" },
        ],
      },
      programs: {
        variant: "carousel",
        badge: "Direct Action",
        headline: "Our Ecological Campaigns",
        items: [
          { id: "p1", image: { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop", alt: "Miyawaki Urban Forests project" }, badge: "Forestry", title: "Miyawaki Urban Forests", description: "Dense green patches planted inside concrete corridors to naturally cool cities.", cta: { label: "Read Project", href: "/programs" }, tags: ["Urban", "Miyawaki"] },
          { id: "p2", image: { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop", alt: "Lake Restoration System project" }, badge: "Watershed", title: "Lake Restoration System", description: "De-silting water channels and building trash barriers to restore biological health.", cta: { label: "Read Project", href: "/programs" }, tags: ["Water", "Ecology"] },
          { id: "p3", image: { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop", alt: "Solar light kits" }, badge: "Clean Energy", title: "Solar Light Distribution", description: "Deploying off-grid solar light lanterns and charging panels to forest fringe villages.", cta: { label: "Read Project", href: "/programs" }, tags: ["Solar", "Off-grid"] },
          { id: "p4", image: { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop", alt: "School kids planting seeds" }, badge: "Schools", title: "Eco-Clubs Network", description: "Activating youth waste-segregation bins, composting setups, and organic seed banks in schools.", cta: { label: "Read Project", href: "/programs" }, tags: ["Education", "Youth"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Partners",
        headline: "Corporate Feedback",
        items: [
          { id: "t1", quote: "EcoShield made our CSR carbon offsets easy to audit and track. Highly professional ground staff.", authorName: "Anjali", authorRole: "Sustainability Director" },
          { id: "t2", quote: "The local lake was a dump site. EcoShield cleaned it and built floating wetlands. The neighborhood is completely transformed.", authorName: "Karthik R.", authorRole: "Resident" },
          { id: "t3", quote: "We sponsored 500 saplings. The GPS monitoring portal shows exactly how they are thriving.", authorName: "Lisa M.", authorRole: "CSR Sponsor" },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Saplings",
        headline: "Nursery Work",
        items: [
          { id: "g1", type: "image", media: { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop", alt: "Afforestation Nursery" }, category: "Nursery" },
          { id: "g2", type: "image", media: { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop", alt: "Restored lake water body" }, category: "Lakes" },
          { id: "g3", type: "image", media: { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop", alt: "Pocket forest foliage" }, category: "Forests" },
          { id: "g4", type: "image", media: { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop", alt: "Volunteers gathering at site" }, category: "Volunteers" },
          { id: "g5", type: "image", media: { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", alt: "Dry land planting preparations" }, category: "Site Prep" },
        ],
      },
      news: {
        variant: "timeline",
        badge: "Journal",
        headline: "Green News",
        items: [
          { id: "n1", slug: "pallikaranai-marsh-nursery", title: "Inauguration of the Pallikaranai Marsh Nursery", summary: "10,000 wetland saplings prepared for planting during the upcoming monsoons.", date: "2024-07-20", href: "#", image: { src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop", alt: "Nursery wetland plants" } },
          { id: "n2", slug: "lake-clean-drive", title: "Massive Clean Up Drive at Pallikaranai", summary: "Over 2 tons of plastic waste cleared by 300 student volunteers over the weekend.", date: "2024-08-18", href: "#", image: { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop", alt: "Volunteers gathering waste" } },
          { id: "n3", slug: "solar-camps-launched", title: "Solar Outreach Camps Launched", summary: "Distributed 120 solar lanterns to rural night study centers in rural districts.", date: "2024-09-10", href: "#", image: { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop", alt: "Solar panels installation" } },
        ],
      },
      ctaBand: {
        variant: "image-background",
        theme: "image",
        backgroundImage: { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop", alt: "Green forest canopy" },
        badge: "Act Now",
        headline: "Combat Global Warming. Support Reforestation.",
        subheadline: "Every ₹100 plants one native tree and maintains it for two years.",
        primaryCta: { label: "Plant A Tree Now", href: "/donate" },
      },
    },
  },
  humanitarian: {
    id: "org-humanitarian",
    name: "Bridgeway Relief",
    tagline: "Delivering Aid Where It's Needed Most",
    causeType: "Humanitarian",
    org: {
      id: "org-humanitarian-config",
      name: "Bridgeway Relief",
      tagline: "Delivering Aid Where It's Needed Most",
      description: "Providing food security, clean water, and emergency shelter to displaced and vulnerable communities.",
      logo: { src: "/images/logo.svg", alt: "Bridgeway Relief Logo", width: 180, height: 40 },
      logoDark: { src: "/images/logo-dark.svg", alt: "Bridgeway Relief Logo", width: 180, height: 40 },
      founded: 2011,
      causeType: "humanitarian",
      contact: { email: "hello@bridgewayrelief.org", phone: "+91 99999 33333", address: { street: "8 Unity Lane", city: "Chennai", state: "TN", zip: "600001", country: "India" } },
      social: [{ platform: "facebook", href: "#" }],
      donateUrl: "/donate",
      volunteerUrl: "#",
    },
    homepage: {
      seo: { title: "Bridgeway Relief", description: "Humanitarian aid NGO" },
      hero: {
        variant: "carousel",
        slides: [
          {
            id: "slide-hum-1",
            headline: "No One Should Face Crisis Alone",
            subheadline: "Emergency food, water, and shelter for families displaced by conflict and hardship.",
            media: { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200&auto=format&fit=crop", alt: "Relief workers distributing food and aid to community", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Give Emergency Aid", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
          {
            id: "slide-hum-2",
            headline: "Emergency Clean Drinking Water",
            subheadline: "Deploying rapid filtration systems to flood and disaster zones to prevent disease outbreaks.",
            media: { src: "https://images.unsplash.com/photo-1541256580214-6f4d5a5e2a5c?q=80&w=1200&auto=format&fit=crop", alt: "Clean water pump filtration project", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Sponsor Water Filters", href: "/donate" },
            secondaryCta: { label: "Active Wells", href: "/#about" },
          },
          {
            id: "slide-hum-3",
            headline: "Winter and Hope Shelter Kits",
            subheadline: "Providing insulated blankets, modular tents, and cooking stoves to families out in the cold.",
            media: { src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1200&auto=format&fit=crop", alt: "Tents under cold weather", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Fund a Shelter", href: "/donate" },
            secondaryCta: { label: "Winter Appeal", href: "/#about" },
          },
        ],
      },
      impactStory: {
        panels: [
          {
            id: "panel-hum-problem",
            image: { src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1200&auto=format&fit=crop", alt: "Displaced families at temporary refugee camp" },
            eyebrow: "The Problem",
            headline: "Millions Displaced, Basic Needs Unmet",
            body: "Conflict, climate shocks, and economic collapse leave families without food, clean water, or safe shelter."
          },
          {
            id: "panel-hum-response",
            image: { src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop", alt: "Aid box distribution with essential supplies" },
            eyebrow: "Our Response",
            headline: "Rapid, On-the-Ground Relief",
            body: "We deploy mobile aid units within 48 hours of a crisis, delivering food kits, clean water, and emergency shelter."
          },
          {
            id: "panel-hum-outcome",
            image: { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop", alt: "Sustained community support and development" },
            eyebrow: "The Outcome",
            headline: "Stability Restored, Dignity Preserved",
            body: "Families move from crisis to stability with sustained support — over 80,000 people reached last year alone."
          }
        ]
      },
      about: {
        variant: "text-image",
        badge: "Who We Are",
        headline: "Aid That Reaches the Last Mile",
        body: [
          "Bridgeway Relief operates in the hardest-to-reach regions, partnering with local volunteers who understand the terrain and the need.",
          "Our emergency pipelines bypass bureaucratic delays, placing food and medical aid directly into the hands of affected families."
        ],
        media: { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop", alt: "Humanitarian relief team meeting", width: 600, height: 450 },
        cta: { label: "Our Mission", href: "/#about" },
      },
      stats: {
        theme: "primary",
        items: [
          { id: "h1", value: 80000, label: "People Reached", icon: "Users" },
          { id: "h2", value: 22, label: "Relief Sites", icon: "MapPin" },
          { id: "h3", value: 45000, label: "Litres Water", icon: "Droplet" },
          { id: "h4", value: 12000, label: "Shelter Kits", icon: "Home" },
        ],
      },
      programs: {
        variant: "carousel",
        badge: "Our Focus",
        headline: "Relief Programs",
        items: [
          { id: "hp1", image: { src: "https://images.unsplash.com/photo-1541802645635-11f2286a7482?q=80&w=600&auto=format&fit=crop", alt: "Food distribution grain bag drive" }, badge: "Food Security", title: "Emergency Food Kits", description: "Providing monthly ration kits loaded with pulses, wheat flour, oil, and nutrition supplements.", cta: { label: "View Details", href: "/programs" }, tags: ["Food", "Emergency"] },
          { id: "hp2", image: { src: "https://images.unsplash.com/photo-1541256580214-6f4d5a5e2a5c?q=80&w=600&auto=format&fit=crop", alt: "Clean water pump filtration project" }, badge: "Water", title: "Clean Water Access", description: "Installing temporary portable filtration systems and drilling borewells in dry relief zones.", cta: { label: "View Details", href: "/programs" }, tags: ["Water", "Health"] },
          { id: "hp3", image: { src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=600&auto=format&fit=crop", alt: "Displaced camp shelter setup" }, badge: "Shelter", title: "Modular Shelters", description: "Setting up weather-proof insulated modular tents and distribution of survival bedding sets.", cta: { label: "View Details", href: "/programs" }, tags: ["Shelter", "Disaster"] },
          { id: "hp4", image: { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop", alt: "Medical camp checkup" }, badge: "Medical Aid", title: "Mobile Trauma Units", description: "First-aid medical camps staffed with emergency response nurses and trauma psychologists.", cta: { label: "View Details", href: "/programs" }, tags: ["First-Aid", "Crisis"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Stories From the Field",
        items: [
          { id: "ht1", quote: "When our village flooded, Bridgeway was there within two days. The clean water kits kept our children safe from waterborne illnesses.", authorName: "Fatima R.", authorRole: "Relief Recipient" },
          { id: "ht2", quote: "The water purification tables prevented a cholera outbreak in our temporary camp. We are eternally grateful.", authorName: "Youssef A.", authorRole: "Camp Coordinator" },
          { id: "ht3", quote: "Every rupee given to Bridgeway is audited and transparently used. I see the direct results in the field updates.", authorName: "Claire D.", authorRole: "Regular Supporter" },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "hg1", type: "image", media: { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop", alt: "Aid distribution on ground" }, category: "Distribution" },
          { id: "hg2", type: "image", media: { src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=800&auto=format&fit=crop", alt: "Refugee shelter site" }, category: "Shelter" },
          { id: "hg3", type: "image", media: { src: "https://images.unsplash.com/photo-1541256580214-6f4d5a5e2a5c?q=80&w=800&auto=format&fit=crop", alt: "Clean water pump" }, category: "Clean Water" },
          { id: "hg4", type: "image", media: { src: "https://images.unsplash.com/photo-1541802645635-11f2286a7482?q=80&w=800&auto=format&fit=crop", alt: "Grains food distribution bags" }, category: "Food Kits" },
          { id: "hg5", type: "image", media: { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop", alt: "Medical health camp unit" }, category: "Medical Camp" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "hn1", slug: "flood-response-2024", title: "Rapid Response to Regional Flooding", summary: "Mobile units deployed within 48 hours to deliver clean water and rations.", date: "2024-08-12", href: "#", image: { src: "https://images.unsplash.com/photo-1541802645635-11f2286a7482?q=80&w=800&auto=format&fit=crop", alt: "Flood food relief response" } },
          { id: "hn2", slug: "water-crisis-resolved", title: "New Borewells in Dry Zones", summary: "Providing clean drinking water to over 15 village clusters in arid regions.", date: "2024-09-18", href: "#", image: { src: "https://images.unsplash.com/photo-1541256580214-6f4d5a5e2a5c?q=80&w=800&auto=format&fit=crop", alt: "Fresh water borehole well" } },
          { id: "hn3", slug: "winterization-drive-launched", title: "Winter Relief Kits En Route", summary: "Dispatched 5,000 heavy blankets and thermal clothing packs to high-altitude camps.", date: "2024-11-05", href: "#", image: { src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=800&auto=format&fit=crop", alt: "Tents under cold weather" } },
        ],
      },
      ctaBand: {
        variant: "split",
        theme: "primary",
        badge: "Take Action",
        headline: "Crisis Doesn't Wait. Neither Do We.",
        subheadline: "Your donation funds rapid emergency response.",
        primaryCta: { label: "Donate Now", href: "/donate" },
      },
    },
  },
  faithBased: {
    id: "org-faith-based",
    name: "Grace & Light Mission",
    tagline: "Serving Communities Through Faith and Compassion",
    causeType: "Faith-Based",
    org: {
      id: "org-faith-config",
      name: "Grace & Light Mission",
      tagline: "Serving Communities Through Faith and Compassion",
      description: "Faith-rooted outreach providing food, counseling, and community support to families in need.",
      logo: { src: "/images/logo.svg", alt: "Grace & Light Logo", width: 180, height: 40 },
      logoDark: { src: "/images/logo-dark.svg", alt: "Grace & Light Logo", width: 180, height: 40 },
      founded: 2005,
      causeType: "faith-based",
      contact: { email: "office@graceandlight.org", phone: "+91 99999 44444", address: { street: "3 Chapel Road", city: "Bengaluru", state: "KA", zip: "560001", country: "India" } },
      social: [{ platform: "facebook", href: "#" }],
      donateUrl: "/donate",
      volunteerUrl: "#",
    },
    homepage: {
      seo: { title: "Grace & Light Mission", description: "Faith-based community outreach NGO" },
      hero: {
        variant: "image",
        slides: [
          {
            id: "slide-faith-1",
            headline: "Faith in Action, Compassion for All",
            subheadline: "Weekly meal programs, counseling, and community fellowship open to everyone, regardless of belief.",
            media: { src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=1200&auto=format&fit=crop", alt: "Community gathering", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Support Our Mission", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
          {
            id: "slide-faith-2",
            headline: "Hope Grocery Pantries",
            subheadline: "Stocking and distributing monthly food ration packs to low-income senior citizens and families.",
            media: { src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=1200&auto=format&fit=crop", alt: "Food service pantry items", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Donate Groceries", href: "/donate" },
            secondaryCta: { label: "Volunteer At Pantry", href: "/#about" },
          },
          {
            id: "slide-faith-3",
            headline: "Grace Afterschool Mentors",
            subheadline: "Providing children safe spaces for homework help, values education, and healthy meals.",
            media: { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop", alt: "Mentorship circle gathering", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Sponsor a Child's Tutoring", href: "/donate" },
            secondaryCta: { label: "Our Volunteers", href: "/#about" },
          },
        ],
      },
      impactStory: {
        panels: [
          {
            id: "panel-faith-problem",
            image: { src: "https://images.unsplash.com/photo-1518398046578-8cb5c1fd69d8?q=80&w=1200&auto=format&fit=crop", alt: "Helping hands for homeless and isolated community members" },
            eyebrow: "The Problem",
            headline: "Isolation and Hardship in Our Neighborhoods",
            body: "Many families face hardship without a support network — no one to turn to in difficult seasons of life."
          },
          {
            id: "panel-faith-response",
            image: { src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=1200&auto=format&fit=crop", alt: "Community meal program" },
            eyebrow: "Our Response",
            headline: "A Community Table, Open to All",
            body: "Weekly meal programs, free counseling, and a welcoming community space for anyone who needs it."
          },
          {
            id: "panel-faith-outcome",
            image: { src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop", alt: "Community gathering and outreach fellowship" },
            eyebrow: "The Outcome",
            headline: "Renewed Hope, Rebuilt Connection",
            body: "Over 3,000 families served this year, many finding not just meals but lasting community."
          }
        ]
      },
      about: {
        variant: "text-image",
        badge: "Who We Are",
        headline: "Rooted in Faith, Open to Everyone",
        body: [
          "Grace & Light Mission serves the whole community — regardless of background or belief — through practical, hands-on care.",
          "We believe in restoring human dignity, standing with families through life struggles, and nourishing both bodies and spirits."
        ],
        media: { src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=800&auto=format&fit=crop", alt: "Community fellowship", width: 600, height: 450 },
        cta: { label: "Our Mission", href: "/#about" },
      },
      stats: {
        theme: "primary",
        items: [
          { id: "f1", value: 3000, label: "Families Served", icon: "Users" },
          { id: "f2", value: 15, label: "Programs Run", icon: "Heart" },
          { id: "f3", value: 450, label: "Weekly Meals", icon: "Coffee" },
          { id: "f4", value: 120, label: "Active Mentors", icon: "Users" },
        ],
      },
      programs: {
        variant: "carousel",
        badge: "Our Focus",
        headline: "Outreach Programs",
        items: [
          { id: "fp1", image: { src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=600&auto=format&fit=crop", alt: "Community meal program food service" }, badge: "Nutrition", title: "Weekly Community Meals", description: "Free meals open to all, no questions asked, served in our community hall.", cta: { label: "View Details", href: "/programs" }, tags: ["Meals", "Community"] },
          { id: "fp2", image: { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop", alt: "Counseling support session" }, badge: "Support", title: "Free Family Counseling", description: "Confidential guidance, grief support, and conflict resolution services for families.", cta: { label: "View Details", href: "/programs" }, tags: ["Counseling", "Family"] },
          { id: "fp3", image: { src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=600&auto=format&fit=crop", alt: "Staple food pantry drive" }, badge: "Pantry", title: "Hope Grocery Pantries", description: "Providing flour, grains, sugar, and cooking oil to low-income seniors and widows.", cta: { label: "View Details", href: "/programs" }, tags: ["Pantry", "Seniors"] },
          { id: "fp4", image: { src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=600&auto=format&fit=crop", alt: "Mentors playing with children" }, badge: "Mentoring", title: "Grace Afterschool Mentors", description: "Safe after-school center providing tutoring, sports activities, and hot snacks to children.", cta: { label: "View Details", href: "/programs" }, tags: ["Youth", "Mentoring"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Stories of Grace",
        items: [
          { id: "ft1", quote: "They welcomed us with no judgment, just kindness — exactly when we needed it most. We found a family here.", authorName: "Joseph M.", authorRole: "Community Member" },
          { id: "ft2", quote: "The pantry supplies keep my grandparents healthy through hard winters. Grace & Light is a true blessing.", authorName: "Maria G.", authorRole: "Granddaughter" },
          { id: "ft3", quote: "Mentoring children after school gives me a sense of purpose. Seeing their grades improve is incredible.", authorName: "Brother David", authorRole: "Volunteer Mentor" },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "fg1", type: "image", media: { src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=800&auto=format&fit=crop", alt: "Community meal" }, category: "Meals" },
          { id: "fg2", type: "image", media: { src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=800&auto=format&fit=crop", alt: "Fellowship gathering" }, category: "Fellowship" },
          { id: "fg3", type: "image", media: { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop", alt: "Counseling sessions office" }, category: "Counseling" },
          { id: "fg4", type: "image", media: { src: "https://images.unsplash.com/photo-1518398046578-8cb5c1fd69d8?q=80&w=800&auto=format&fit=crop", alt: "Food distribution preparation" }, category: "Pantry" },
          { id: "fg5", type: "image", media: { src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop", alt: "Volunteer mentors team" }, category: "Volunteers" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "fn1", slug: "community-kitchen-expansion", title: "Community Kitchen Expands to Second Site", summary: "New location will double weekly meal capacity to serve underserved suburban pockets.", date: "2024-09-02", href: "#", image: { src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=800&auto=format&fit=crop", alt: "Kitchen expansion" } },
          { id: "fn2", slug: "youth-winter-drive", title: "Youth Launch Winter Clothing Drive", summary: "Aiming to collect 500 coats and blankets for our homeless neighbors.", date: "2024-10-10", href: "#", image: { src: "https://images.unsplash.com/photo-1518398046578-8cb5c1fd69d8?q=80&w=800&auto=format&fit=crop", alt: "Volunteer sorting coats" } },
          { id: "fn3", slug: "thanksgiving-meals", title: "Thanksgiving Meal Service Complete", summary: "Over 600 warm festive lunches distributed by our volunteer crew.", date: "2024-11-25", href: "#", image: { src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=800&auto=format&fit=crop", alt: "Holiday dining room service" } },
        ],
      },
      ctaBand: {
        variant: "split",
        theme: "primary",
        badge: "Take Action",
        headline: "Be a Light for Someone Today.",
        subheadline: "Your support keeps our doors — and our table — open.",
        primaryCta: { label: "Donate Now", href: "/donate" },
      },
    },
  },
  communityDevelopment: {
    id: "org-community-development",
    name: "Neighborhood Forward",
    tagline: "Building Stronger, Self-Sustaining Communities",
    causeType: "Community Development",
    org: {
      id: "org-community-config",
      name: "Neighborhood Forward",
      tagline: "Building Stronger, Self-Sustaining Communities",
      description: "Local infrastructure, skills training, and small business support for underserved neighborhoods.",
      logo: { src: "/images/logo.svg", alt: "Neighborhood Forward Logo", width: 180, height: 40 },
      logoDark: { src: "/images/logo-dark.svg", alt: "Neighborhood Forward Logo", width: 180, height: 40 },
      founded: 2016,
      causeType: "community",
      contact: { email: "connect@neighborhoodforward.org", phone: "+91 99999 55555", address: { street: "21 Main Street", city: "Pune", state: "MH", zip: "411001", country: "India" } },
      social: [{ platform: "facebook", href: "#" }],
      donateUrl: "/donate",
      volunteerUrl: "#",
    },
    homepage: {
      seo: { title: "Neighborhood Forward", description: "Community development NGO" },
      hero: {
        variant: "carousel",
        slides: [
          {
            id: "slide-comm-1",
            headline: "Stronger Neighborhoods, Built Together",
            subheadline: "Local infrastructure, job training, and small business grants for underserved communities.",
            media: { src: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop", alt: "Community infrastructure building project", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Support the Cause", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
          {
            id: "slide-comm-2",
            headline: "Microloans for Women Entrepreneurs",
            subheadline: "Providing startup capital, bookkeeping training, and mentoring to launch home-based businesses.",
            media: { src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop", alt: "Small retail shop business owner", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Fund a Microloan", href: "/donate" },
            secondaryCta: { label: "Success Stories", href: "/#about" },
          },
          {
            id: "slide-comm-3",
            headline: "Public Spaces Renewed",
            subheadline: "Transforming empty urban dump yards into clean community gardens, parks, and play areas.",
            media: { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop", alt: "Public garden space building", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Support Park Build", href: "/donate" },
            secondaryCta: { label: "Green Spaces", href: "/#about" },
          },
        ],
      },
      impactStory: {
        panels: [
          {
            id: "panel-comm-problem",
            image: { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop", alt: "Underserved neighborhood and families needing support" },
            eyebrow: "The Problem",
            headline: "Underinvestment Traps Neighborhoods in Cycles of Poverty",
            body: "Lack of infrastructure, job access, and capital keeps entire communities from moving forward."
          },
          {
            id: "panel-comm-response",
            image: { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop", alt: "Vocational computer and digital skills training lab" },
            eyebrow: "Our Response",
            headline: "Skills, Capital, and Infrastructure — Together",
            body: "We combine vocational training, microloans, and public space renewal to build lasting local capacity."
          },
          {
            id: "panel-comm-outcome",
            image: { src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop", alt: "Thriving local workshop business owner" },
            eyebrow: "The Outcome",
            headline: "Locally Owned, Self-Sustaining Growth",
            body: "Over 400 small businesses launched and 12 neighborhoods revitalized through resident-led projects."
          }
        ]
      },
      about: {
        variant: "text-image",
        badge: "Who We Are",
        headline: "Investing in the People Who Know the Neighborhood Best",
        body: [
          "Neighborhood Forward partners directly with residents to design and lead the projects that matter most to them.",
          "Through collaborative planning sessions and community voting, we ensure development is inclusive, democratic, and durable."
        ],
        media: { src: "https://images.unsplash.com/photo-1521791136368-1a96752d87a3?q=80&w=800&auto=format&fit=crop", alt: "Residents planning in a community workshop", width: 600, height: 450 },
        cta: { label: "Our Mission", href: "/#about" },
      },
      stats: {
        theme: "primary",
        items: [
          { id: "c1", value: 400, label: "Businesses Launched", icon: "Store" },
          { id: "c2", value: 12, label: "Neighborhoods Renewed", icon: "Building2" },
          { id: "c3", value: 1200, label: "Trainees Graduated", icon: "GraduationCap" },
          { id: "c4", value: 45, label: "Gardens Built", icon: "Flower" },
        ],
      },
      programs: {
        variant: "carousel",
        badge: "Our Focus",
        headline: "Development Programs",
        items: [
          { id: "cp1", image: { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop", alt: "Vocational study and skills training class" }, badge: "Workforce", title: "Vocational Skills Training", description: "Job-ready courses in electrical trades, plumbing, digital literacy, and tailoring.", cta: { label: "View Details", href: "/programs" }, tags: ["Jobs", "Training"] },
          { id: "cp2", image: { src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop", alt: "Small family business shop" }, badge: "Economic", title: "Microloan & Grant Fund", description: "Interest-free startup capital and financial mentoring for resident-led small ventures.", cta: { label: "View Details", href: "/programs" }, tags: ["Microloans", "Business"] },
          { id: "cp3", image: { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop", alt: "Park renewal park project" }, badge: "Infrastructure", title: "Public Space Renewal", description: "Transforming polluted public yards into solar-lit neighborhood parks and crop gardens.", cta: { label: "View Details", href: "/programs" }, tags: ["Parks", "Green"] },
          { id: "cp4", image: { src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop", alt: "Cooperative markets vendors" }, badge: "Economic", title: "Cooperative Markets", description: "Organizing street vendors into formal cooperatives hosting weekly fresh food markets.", cta: { label: "View Details", href: "/programs" }, tags: ["Markets", "Trade"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Community Voices",
        items: [
          { id: "ct1", quote: "The microloan let me open my shop. Now I hire three of my neighbors.", authorName: "Deepak S.", authorRole: "Small Business Owner" },
          { id: "ct2", quote: "Before the vocational lab, I had no marketable skills. Today I work as a certified electrician.", authorName: "Rohan P.", authorRole: "Vocational Graduate" },
          { id: "ct3", quote: "The community garden has not only cleaned up our block but also brought neighbors together to grow fresh food.", authorName: "Sita G.", authorRole: "Neighborhood Organizer" },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "cg1", type: "image", media: { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", alt: "Infrastructure renewal project construction" }, category: "Infrastructure" },
          { id: "cg2", type: "image", media: { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop", alt: "Skills training class" }, category: "Training" },
          { id: "cg3", type: "image", media: { src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop", alt: "Business mentorship meeting" }, category: "Business" },
          { id: "cg4", type: "image", media: { src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop", alt: "Local markets stalls" }, category: "Markets" },
          { id: "cg5", type: "image", media: { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop", alt: "Classroom computers learning" }, category: "Gardens" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "cn1", slug: "microloan-fund-milestone", title: "Microloan Fund Crosses 400 Businesses Funded", summary: "A milestone year for resident-led entrepreneurship in urban and rural districts.", date: "2024-10-05", href: "#", image: { src: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop", alt: "Microloan funded shop and market stall milestone" } },
          { id: "cn2", slug: "vocational-lab-opens", title: "New Vocational Tech Lab Opened", summary: "Equipped with 20 computers and solar backup to train 200 youths annually in digital skills.", date: "2024-11-10", href: "#", image: { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop", alt: "Tech training classroom setup" } },
          { id: "cn3", slug: "clean-up-campaign-success", title: "Clean Block Campaign Clears 3 Yards", summary: "Over 100 resident volunteers joined forces to establish urban community gardens.", date: "2024-12-01", href: "#", image: { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", alt: "Volunteers painting garden wall" } },
        ],
      },
      ctaBand: {
        variant: "split",
        theme: "primary",
        badge: "Take Action",
        headline: "Invest in a Neighborhood's Future.",
        subheadline: "Your donation funds training, capital, and infrastructure.",
        primaryCta: { label: "Donate Now", href: "/donate" },
      },
    },
  },
  artsCulture: {
    id: "org-arts-culture",
    name: "Canvas Collective",
    tagline: "Keeping Culture Alive Through Art and Expression",
    causeType: "Arts & Culture",
    org: {
      id: "org-arts-config",
      name: "Canvas Collective",
      tagline: "Keeping Culture Alive Through Art and Expression",
      description: "Free arts education, cultural preservation, and public art programs for underserved communities.",
      logo: { src: "/images/logo.svg", alt: "Canvas Collective Logo", width: 180, height: 40 },
      logoDark: { src: "/images/logo-dark.svg", alt: "Canvas Collective Logo", width: 180, height: 40 },
      founded: 2013,
      causeType: "arts",
      contact: { email: "studio@canvascollective.org", phone: "+91 99999 66666", address: { street: "56 Gallery Ave", city: "Jaipur", state: "RJ", zip: "302001", country: "India" } },
      social: [{ platform: "facebook", href: "#" }],
      donateUrl: "/donate",
      volunteerUrl: "#",
    },
    homepage: {
      seo: { title: "Canvas Collective", description: "Arts & culture nonprofit" },
      hero: {
        variant: "carousel",
        slides: [
          {
            id: "slide-arts-1",
            headline: "Every Child Deserves a Canvas",
            subheadline: "Free art, music, and dance education for kids who'd otherwise never hold a paintbrush.",
            media: { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop", alt: "Children painting and practicing art", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Fund a Program", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
          {
            id: "slide-arts-2",
            headline: "Heritage Dance & Music",
            subheadline: "Preserving ancient regional art forms by passing them down to youth groups in free workshops.",
            media: { src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop", alt: "Traditional classical dance session", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Sponsor a Dance Class", href: "/donate" },
            secondaryCta: { label: "Our Heritage", href: "/#about" },
          },
          {
            id: "slide-arts-3",
            headline: "Public Murals and Streets",
            subheadline: "Transforming gray city walls into vibrant community stories through resident-led street art.",
            media: { src: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=1200&auto=format&fit=crop", alt: "Street market mural painting", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Fund a Street Mural", href: "/donate" },
            secondaryCta: { label: "Street Gallery", href: "/#about" },
          },
        ],
      },
      impactStory: {
        panels: [
          {
            id: "panel-arts-problem",
            image: { src: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop", alt: "Empty stage representing cut arts programs" },
            eyebrow: "The Problem",
            headline: "Arts Education Is the First Thing Cut",
            body: "When budgets shrink, art, music, and cultural programs disappear first — and with them, a vital outlet for expression."
          },
          {
            id: "panel-arts-response",
            image: { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop", alt: "Free children art painting class" }, 
            eyebrow: "Our Response",
            headline: "Free Studios, Open to Every Child",
            body: "We run free after-school art, music, and traditional dance classes taught by working local artists."
          },
          {
            id: "panel-arts-outcome",
            image: { src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200&auto=format&fit=crop", alt: "Youth painting exhibition artwork" },
            eyebrow: "The Outcome",
            headline: "A New Generation of Local Artists",
            body: "Over 200 students have shown work in public exhibitions, and 3 traditional art forms have been actively revived."
          }
        ]
      },
      about: {
        variant: "text-image",
        badge: "Who We Are",
        headline: "Culture Is Something You Practice, Not Just Preserve",
        body: [
          "Canvas Collective keeps traditional and contemporary art forms alive by putting them directly in the hands of the next generation.",
          "We offer safe workspaces, material support, and professional marketing mentorship to local artists, sustaining cultural livelihoods."
        ],
        media: { src: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop", alt: "Art painting palette studio", width: 600, height: 450 },
        cta: { label: "Our Mission", href: "/#about" },
      },
      stats: {
        theme: "primary",
        items: [
          { id: "a1", value: 200, label: "Artists Trained", icon: "Palette" },
          { id: "a2", value: 3, label: "Art Forms Revived", icon: "Sparkles" },
          { id: "a3", value: 45, label: "Murals Painted", icon: "Paintbrush" },
          { id: "a4", value: 12, label: "Studio Sites", icon: "Building" },
        ],
      },
      programs: {
        variant: "carousel",
        badge: "Our Focus",
        headline: "Cultural Programs",
        items: [
          { id: "ap1", image: { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop", alt: "Free after-school art studio painting class" }, badge: "Education", title: "Free After-School Art Studio", description: "Painting, sculpture, and design classes taught daily by active local artists.", cta: { label: "View Details", href: "/programs" }, tags: ["Art", "Youth"] },
          { id: "ap2", image: { src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop", alt: "Traditional classical dance class and preservation" }, badge: "Heritage", title: "Traditional Dance Preservation", description: "Passing regional dance forms and master instrumental techniques to the next generation.", cta: { label: "View Details", href: "/programs" }, tags: ["Dance", "Heritage"] },
          { id: "ap3", image: { src: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=600&auto=format&fit=crop", alt: "Street market wall painting" }, badge: "Public Art", title: "Community Mural Project", description: "Collaborating with local residents to paint large storytelling murals on gray city walls.", cta: { label: "View Details", href: "/programs" }, tags: ["Murals", "Public"] },
          { id: "ap4", image: { src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&auto=format&fit=crop", alt: "Paintings displayed in exhibition" }, badge: "Exhibition", title: "Annual Youth Art Show", description: "Giving youth their first experience showcasing and selling their original artworks.", cta: { label: "View Details", href: "/programs" }, tags: ["Exhibition", "Gallery"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Stories From the Studio",
        items: [
          { id: "at1", quote: "I never thought a kid like me would have work in a real gallery. Canvas Collective made it happen.", authorName: "Ananya K.", authorRole: "Student Artist, age 16" },
          { id: "at2", quote: "Traditional classical dance was fading here. My daughter is now learning it for free from masters.", authorName: "Gita R.", authorRole: "Parent" },
          { id: "at3", quote: "Volunteering to guide mural paint days connects us with kids who discover their creative voice.", authorName: "Dev D.", authorRole: "Mural Artist" },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "ag1", type: "image", media: { src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop", alt: "Creative art studio watercolor painting" }, category: "Studio" },
          { id: "ag2", type: "image", media: { src: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop", alt: "Youth art studio exhibition gallery" }, category: "Exhibition" },
          { id: "ag3", type: "image", media: { src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop", alt: "Traditional dance practice session" }, category: "Dance" },
          { id: "ag4", type: "image", media: { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop", alt: "Children painting on canvas" }, category: "Youth Painting" },
          { id: "ag5", type: "image", media: { src: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop", alt: "Completed street mural" }, category: "Murals" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "an1", slug: "youth-exhibition-2024", title: "Youth Artists Debut at City Gallery", summary: "12 students showed original work to the public for the first time.", date: "2024-06-18", href: "#", image: { src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop", alt: "Youth art exhibition debut gallery opening" } },
          { id: "an2", slug: "new-studio-jaipur", title: "New Studio Space Opened in Jaipur", summary: "A restored warehouse now serving as a free daily art studio for 100+ children.", date: "2024-07-15", href: "#", image: { src: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop", alt: "Warehouse art studio space" } },
          { id: "an3", slug: "mural-completed", title: "Giant Mural Completed in Jaipur Market", summary: "Collaborative street mural highlighting 100 years of regional handicraft history completed.", date: "2024-09-05", href: "#", image: { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop", alt: "Street market mural painting" } },
        ],
      },
      ctaBand: {
        variant: "split",
        theme: "primary",
        badge: "Take Action",
        headline: "Give a Child a Canvas.",
        subheadline: "Your support keeps free arts education open to all.",
        primaryCta: { label: "Donate Now", href: "/donate" },
      },
    },
  },
  disasterRelief: {
    id: "org-disaster-relief",
    name: "Rapid Response Corps",
    tagline: "First In, Last Out — Disaster Response You Can Count On",
    causeType: "Disaster Relief",
    org: {
      id: "org-disaster-config",
      name: "Rapid Response Corps",
      tagline: "First In, Last Out — Disaster Response You Can Count On",
      description: "Search and rescue, emergency medical response, and long-term rebuilding after natural disasters.",
      logo: { src: "/images/logo.svg", alt: "Rapid Response Corps Logo", width: 180, height: 40 },
      logoDark: { src: "/images/logo-dark.svg", alt: "Rapid Response Corps Logo", width: 180, height: 40 },
      founded: 2009,
      causeType: "disaster-relief",
      contact: { email: "dispatch@rapidresponsecorps.org", phone: "+91 99999 77777", address: { street: "9 Response Way", city: "Kolkata", state: "WB", zip: "700001", country: "India" } },
      social: [{ platform: "facebook", href: "#" }],
      donateUrl: "/donate",
      volunteerUrl: "#",
    },
    homepage: {
      seo: { title: "Rapid Response Corps", description: "Disaster relief NGO" },
      hero: {
        variant: "video",
        slides: [
          {
            id: "slide-disaster-1",
            headline: "When Disaster Strikes, We're Already Moving",
            subheadline: "Search and rescue, emergency medical care, and rebuilding support within hours of a crisis.",
            media: { src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop", alt: "Emergency flood response rescue boat team", width: 1200, height: 600 },
            overlayOpacity: 0.5,
            primaryCta: { label: "Fund Rapid Response", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
          {
            id: "slide-disaster-2",
            headline: "Emergency Field Clinics",
            subheadline: "Setting up mobile medical tents with sterile trauma gear and medication kits in cut-off villages.",
            media: { src: "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?q=80&w=1200&auto=format&fit=crop", alt: "Rescue workers tending to clinic", width: 1200, height: 600 },
            overlayOpacity: 0.5,
            primaryCta: { label: "Fund Medical Tents", href: "/donate" },
            secondaryCta: { label: "Medical Aid", href: "/#about" },
          },
          {
            id: "slide-disaster-3",
            headline: "Power & Communication",
            subheadline: "Deploying solar micro-grids and emergency satellite links to help communities contact loved ones.",
            media: { src: "https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=1200&auto=format&fit=crop", alt: "Emergency shelter housing", width: 1200, height: 600 },
            overlayOpacity: 0.5,
            primaryCta: { label: "Provide Power Kits", href: "/donate" },
            secondaryCta: { label: "Our Tech", href: "/#about" },
          },
        ],
      },
      impactStory: {
        panels: [
          {
            id: "panel-disaster-problem",
            image: { src: "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?q=80&w=1200&auto=format&fit=crop", alt: "Cyclone storm disaster rubble aftermath" },
            eyebrow: "The Problem",
            headline: "The First 72 Hours Decide Everything",
            body: "In the critical window after a disaster, delayed response costs lives — yet most aid takes days to arrive."
          },
          {
            id: "panel-disaster-response",
            image: { src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop", alt: "Emergency search and rescue boat deployment team" },
            eyebrow: "Our Response",
            headline: "Pre-Positioned Teams, Rapid Deployment",
            body: "Our trained rescue and medical teams are pre-positioned in high-risk regions, deploying within hours, not days."
          },
          {
            id: "panel-disaster-outcome",
            image: { src: "https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=1200&auto=format&fit=crop", alt: "Community rebuilding and relief goods support" },
            eyebrow: "The Outcome",
            headline: "Lives Saved, Communities Rebuilt",
            body: "Over 15,000 people rescued or treated, with long-term rebuilding support in every region we respond to."
          }
        ]
      },
      about: {
        variant: "text-image",
        badge: "Who We Are",
        headline: "Trained, Positioned, and Ready Before the Crisis Hits",
        body: [
          "Rapid Response Corps combines professional search-and-rescue training with deep local partnerships to respond faster than anyone else.",
          "Our emergency depots house ready-to-deploy boats, solar generators, and water filtration devices, ensuring immediate deployment."
        ],
        media: { src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop", alt: "Search and rescue boat training", width: 600, height: 450 },
        cta: { label: "Our Mission", href: "/#about" },
      },
      stats: {
        theme: "primary",
        items: [
          { id: "d1", value: 15000, label: "Rescued or Treated", icon: "Users" },
          { id: "d2", value: 6, label: "Hours to Deploy", icon: "Clock" },
          { id: "d3", value: 85, label: "Disasters Met", icon: "Flame" },
          { id: "d4", value: 450, label: "Trained Rescuers", icon: "Shield" },
        ],
      },
      programs: {
        variant: "carousel",
        badge: "Our Focus",
        headline: "Response Programs",
        items: [
          { id: "dp1", image: { src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop", alt: "Flood search and rescue team deployment" }, badge: "Rescue", title: "Search & Rescue Teams", description: "Water and wilderness search and rescue teams deployed immediately following extreme weather.", cta: { label: "View Details", href: "/programs" }, tags: ["Rescue", "Emergency"] },
          { id: "dp2", image: { src: "https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=600&auto=format&fit=crop", alt: "Community rebuilding and relief project" }, badge: "Recovery", title: "Long-Term Rebuilding", description: "Coordinating with structural engineers and local builders to construct cyclone-resistant shelters.", cta: { label: "View Details", href: "/programs" }, tags: ["Rebuilding", "Housing"] },
          { id: "dp3", image: { src: "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?q=80&w=600&auto=format&fit=crop", alt: "Medical treatment tent clinic" }, badge: "Medical", title: "Mobile Trauma Clinics", description: "Setting up sterile field clinics with medical supplies and trauma counselors post-crisis.", cta: { label: "View Details", href: "/programs" }, tags: ["Medical", "Trauma"] },
          { id: "dp4", image: { src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop", alt: "Satellite terminals setup" }, badge: "Tech Relief", title: "Emergency Power & Comms", description: "Installing solar-powered charging stations and satellite hotspots to restore community contact.", cta: { label: "View Details", href: "/programs" }, tags: ["Solar", "Comms"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Stories From the Response",
        items: [
          { id: "dt1", quote: "They pulled my family out of the water before the second wave hit. I owe them everything.", authorName: "Ravi T.", authorRole: "Flood Survivor" },
          { id: "dt2", quote: "When the earthquake hit, we lost all electricity and contact. RRC's solar comms station was our link to safety.", authorName: "Karan M.", authorRole: "Local Official" },
          { id: "dt3", quote: "RRC is always the first on site and stays for months to rebuild houses. They do real, lasting work.", authorName: "Dr. Sarah L.", authorRole: "Partner Hospital Liaison" },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "dg1", type: "image", media: { src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop", alt: "Flood rescue boat response deployment" }, category: "Deployment" },
          { id: "dg2", type: "image", media: { src: "https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=800&auto=format&fit=crop", alt: "Rebuilding community houses" }, category: "Rebuilding" },
          { id: "dg3", type: "image", media: { src: "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?q=80&w=800&auto=format&fit=crop", alt: "Medical field checkups" }, category: "Medical" },
          { id: "dg4", type: "image", media: { src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop", alt: "Search and rescue team deployment" }, category: "Search & Rescue" },
          { id: "dg5", type: "image", media: { src: "https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=800&auto=format&fit=crop", alt: "Brick construction housing" }, category: "Rebuilding" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "dn1", slug: "cyclone-response-deployment", title: "Teams Deployed Ahead of Coastal Cyclone", summary: "Pre-positioned units activated 12 hours before landfall.", date: "2024-11-03", href: "#", image: { src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop", alt: "Pre-positioned rescue boat deployment" } },
          { id: "dn2", slug: "monsoon-flood-response", title: "Monsoon Flood Response in East Bengal", summary: "Rescued 340 stranded citizens and set up 4 relief camps serving hot meals.", date: "2024-08-22", href: "#", image: { src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop", alt: "Flood rescue boat in village" } },
          { id: "dn3", slug: "rebuilding-homes-completed", title: "25 Cyclone-Proof Homes Completed", summary: "Handed over keys to families who lost their homes during last summer's storm.", date: "2024-10-18", href: "#", image: { src: "https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=800&auto=format&fit=crop", alt: "Newly constructed brick house structure" } },
        ],
      },
      ctaBand: {
        variant: "split",
        theme: "primary",
        badge: "Take Action",
        headline: "Help Us Get There Faster.",
        subheadline: "Your donation funds pre-positioned rapid response teams.",
        primaryCta: { label: "Donate Now", href: "/donate" },
      },
    },
  },
};
