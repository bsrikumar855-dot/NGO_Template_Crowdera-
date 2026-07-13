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
            headline: "Education Is the Surest Path Out of Poverty",
            subheadline: "Bringing quality schooling to 18 districts where children walk 8 km to reach the nearest classroom.",
            media: { src: "/images/orgs/children-studying-in-a-rural-classroom-photo-1497633762265-9d179a990aa6.jpg", alt: "Children studying in a rural classroom", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Sponsor A Child", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
          {
            id: "slide-edu-2",
            headline: "Digital Labs in Every Village School",
            subheadline: "Solar-powered computers and 4G hotspots unlock a digital future for students who'd never seen a screen.",
            media: { src: "/images/orgs/students-using-computers-in-a-digital-lab-photo-1588072432836-e10032774350.jpg", alt: "Students using computers in a digital lab", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Fund A Lab", href: "/donate" },
            secondaryCta: { label: "Our Programs", href: "/#programs" },
          },
          {
            id: "slide-edu-video",
            headline: "Learning in Action",
            subheadline: "Watch how our classrooms come alive — and why every rupee you give changes a real child's story.",
            media: { src: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4", poster: "/images/orgs/photo-1509062522246-3755977927d7.jpg", autoplay: true, loop: true, muted: true },
            overlayOpacity: 0.5,
            primaryCta: { label: "Donate Now", href: "/donate" },
            secondaryCta: { label: "See Impact", href: "/#impact" },
          },
        ],
      },
      impactStory: {
        panels: [
          {
            id: "panel-problem",
            image: { src: "/images/orgs/children-studying-in-tough-conditions-photo-1488521787991-ed7bbaae773c.jpg", alt: "Children studying in tough conditions" },
            eyebrow: "The Problem",
            headline: "Educational Inequality in Rural Villages",
            body: "Millions of children in rural areas lack access to basic classrooms, textbooks, and qualified teachers."
          },
          {
            id: "panel-response",
            image: { src: "/images/orgs/photo-1509062522246-3755977927d7.jpg", alt: "Vidyalaya digital classroom setup" },
            eyebrow: "Our Response",
            headline: "Delivering Infrastructure and Scholarships",
            body: "We set up solar-powered classrooms, distribute learning tablets, and sponsor full academic scholarships."
          },
          {
            id: "panel-outcome",
            image: { src: "/images/orgs/happy-child-holding-tablet-in-class-photo-1427504494785-3a9ca7044f45.jpg", alt: "Happy child holding tablet in class" },
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
        media: { src: "/images/orgs/students-in-classroom-photo-1522202176988-66273c2fd55f.jpg", alt: "Students in classroom", width: 600, height: 450 },
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
          { id: "p1", image: { src: "/images/orgs/rural-scholarships-photo-1497633762265-9d179a990aa6.jpg", alt: "Rural Scholarships" }, badge: "K-12", title: "Rural Scholarships", description: "Covers school fees, uniforms, and textbooks for 250 children whose families earn under ₹3,000 a month — removing every financial barrier between a child and a classroom.", cta: { label: "View Details", href: "/programs" }, tags: ["Rural", "Scholarships"] },
          { id: "p2", image: { src: "/images/orgs/digital-labs-photo-1588072432836-e10032774350.jpg", alt: "Digital Labs" }, badge: "Technology", title: "Digital Labs", description: "Installs 10 solar-charged laptops and a 4G hotspot in each partner school, giving rural students their first-ever chance to write code and explore the internet.", cta: { label: "View Details", href: "/programs" }, tags: ["Tech", "Solar"] },
          { id: "p3", image: { src: "/images/orgs/literacy-campaigns-photo-1544816155-12df9643f363.jpg", alt: "Literacy campaigns" }, badge: "Literacy", title: "Early Childhood Literacy", description: "Teaches 500 preschool children across 12 village anganwadis to read their first words and write their own name before the age of six.", cta: { label: "View Details", href: "/programs" }, tags: ["Reading", "Youth"] },
          { id: "p4", image: { src: "/images/orgs/teacher-training-workshops-photo-1509062522246-3755977927d7.jpg", alt: "Teacher training workshops" }, badge: "Vocational", title: "Teacher Training Camps", description: "Trains government-school teachers in active-learning pedagogy, with partner schools averaging a 40% rise in student attendance within one term.", cta: { label: "View Details", href: "/programs" }, tags: ["Teachers", "Training"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Impact Stories",
        items: [
          { id: "t1", quote: "My father is a daily-wage labourer in Nashik — without Vidyalaya's scholarship, I would have dropped out in Class 7. Today I'm in my second year of computer science at Pune University.", authorName: "Priya Shinde", authorRole: "Graduate Scholar, Nashik", rating: 5 },
          { id: "t2", quote: "I had never touched a computer until the digital lab arrived at our school in Raigad; six months later I landed my first paid internship writing Python scripts remotely.", authorName: "Rahul Mhatre", authorRole: "Class 12 Alumnus, Raigad", rating: 5 },
          { id: "t3", quote: "Funding one classroom in rural Pune showed us exactly how donations translate to desks, books, and light — the quarterly field photos made every rupee feel personal.", authorName: "Sarah Joshi", authorRole: "Monthly Corporate Donor, Mumbai", rating: 5 },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "g1", type: "image", media: { src: "/images/orgs/children-in-classroom-photo-1497633762265-9d179a990aa6.jpg", alt: "Children in classroom" }, category: "Classroom" },
          { id: "g2", type: "image", media: { src: "/images/orgs/digital-lab-session-photo-1588072432836-e10032774350.jpg", alt: "Digital lab session" }, category: "Digital Lab" },
          { id: "g3", type: "image", media: { src: "/images/orgs/early-literacy-class-photo-1544816155-12df9643f363.jpg", alt: "Early literacy class" }, category: "Literacy" },
          { id: "g4", type: "image", media: { src: "/images/orgs/teacher-training-workshop-photo-1509062522246-3755977927d7.jpg", alt: "Teacher training workshop" }, category: "Training" },
          { id: "g5", type: "image", media: { src: "/images/orgs/scholarship-award-day-photo-1427504494785-3a9ca7044f45.jpg", alt: "Scholarship award day" }, category: "Scholarships" },
          { id: "g6", type: "video", caption: "Students discover coding for the first time in our Raigad digital lab", media: { src: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4", poster: "/images/orgs/digital-lab-session-photo-1588072432836-e10032774350.jpg" }, category: "Digital Lab" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "n1", slug: "iit-admissions-surge", title: "IIT Admissions Surge", summary: "Our scholarship students score high ranks in competitive entrance exams.", date: "2024-07-20", href: "#", image: { src: "/images/orgs/iit-exam-success-celebration-photo-1504711434969-e33886168f5c.jpg", alt: "IIT exam success celebration" } },
          { id: "n2", slug: "new-learning-center", title: "New Learning Center Opens in Pune", summary: "A brand new facility serving 500 children weekly in urban slum areas.", date: "2024-08-15", href: "#", image: { src: "/images/orgs/children-in-classroom-photo-1497633762265-9d179a990aa6.jpg", alt: "New learning center opening ceremony" } },
          { id: "n3", slug: "digital-literacy-grant", title: "Received Digital Literacy Grant", summary: "National funding received to expand computer courses to 10 more rural districts.", date: "2024-09-05", href: "#", image: { src: "/images/orgs/digital-lab-session-photo-1588072432836-e10032774350.jpg", alt: "Digital literacy class group photo" } },
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
            media: { src: "/images/orgs/doctor-examining-child-photo-1584515979956-d9f6e5d09982.jpg", alt: "Doctor examining child", width: 1200, height: 600 },
            overlayOpacity: 0.5,
            primaryCta: { label: "Fund Clinic", href: "/donate" },
            secondaryCta: { label: "Watch Video", href: "#" },
          },
          {
            id: "slide-health-2",
            headline: "Mobile Clinics on the Move",
            subheadline: "Deploying fully staffed medical vans to remote, hard-to-reach rural regions.",
            media: { src: "/images/orgs/mobile-clinic-medical-team-photo-1516574187841-cb9cc2ca948b.jpg", alt: "Mobile clinic medical team", width: 1200, height: 600 },
            overlayOpacity: 0.5,
            primaryCta: { label: "Sponsor a Mobile Van", href: "/donate" },
            secondaryCta: { label: "Outreach Areas", href: "/#about" },
          },
          {
            id: "slide-health-3",
            headline: "Safe Motherhood Campaigns",
            subheadline: "Providing prenatal checkups, vitamins, and clean delivery kits to expectant mothers.",
            media: { src: "/images/orgs/maternal-diagnostic-checkup-camp-photo-1576091160550-2173dba999ef.jpg", alt: "Maternal diagnostic checkup camp", width: 1200, height: 600 },
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
            image: { src: "/images/orgs/outreach-health-diagnostics-camp-photo-1516574187841-cb9cc2ca948b.jpg", alt: "Outreach health diagnostics camp" },
            eyebrow: "Our Response",
            headline: "Mobilizing Doctors and Medical Supplies",
            body: "We deploy mobile diagnostic vans and establish weekend primary wellness clinics directly in remote spots."
          },
          {
            id: "panel-outcome",
            image: { src: "/images/orgs/doctors-smiling-with-healthy-patients-photo-1576091160550-2173dba999ef.jpg", alt: "Doctors smiling with healthy patients" },
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
        media: { src: "/images/orgs/mobile-outreach-clinic-unit-photo-1581578731548-c64695cc6952.jpg", alt: "Mobile outreach clinic unit", width: 600, height: 450 },
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
          { id: "p1", image: { src: "/images/orgs/stethoscope-and-clinical-care-photo-1505751172876-fa1923c5c528.jpg", alt: "Stethoscope and clinical care" }, badge: "Clinic", title: "Mobile Wellness Clinics", description: "Brings a doctor, blood-pressure monitor, and blood-sugar test to 2,000+ patients who would otherwise travel 50 km to the nearest hospital.", cta: { label: "View Program", href: "/programs" }, tags: ["Mobile", "Primary Care"] },
          { id: "p2", image: { src: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=600&auto=format&fit=crop", alt: "Maternal and child wellness checkup" }, badge: "Maternal", title: "Safe Motherhood Camps", description: "Provides three prenatal ultrasounds, iron and folate supplements, and a sterile delivery kit to 800 expectant mothers in villages that have no maternity ward.", cta: { label: "View Program", href: "/programs" }, tags: ["Women", "Health"] },
          { id: "p3", image: { src: "/images/orgs/nutrition-screening-photo-1584515979956-d9f6e5d09982.jpg", alt: "Nutrition screening" }, badge: "Childcare", title: "Nutritional Support", description: "Screens children under five for stunting and anemia, then delivers a 90-day therapeutic nutrition course to reverse deficiencies before they become permanent.", cta: { label: "View Program", href: "/programs" }, tags: ["Nutrition", "Children"] },
          { id: "p4", image: { src: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=600&auto=format&fit=crop", alt: "Prescription drugs distribution" }, badge: "Pharmacy", title: "Essential Medicines Fund", description: "Procures and distributes free insulin, blood-pressure tablets, and TB medications to 1,200 chronic patients who cannot afford pharmacy prices.", cta: { label: "View Program", href: "/programs" }, tags: ["Medicines", "Equity"] },
        ],
      },
      testimonials: {
        variant: "masonry",
        badge: "Impact",
        headline: "Patient Testimonials",
        items: [
          { id: "t1", quote: "The HealAll van arrived on a Tuesday morning in our hamlet near Palghar — my eight-year-old had a 104° fever and I had no money for the bus fare to town; they diagnosed typhoid, gave us the full antibiotic course, and he was back in school within a week.", authorName: "Savitri Kamble", authorRole: "Mother of Two, Palghar Village", rating: 5 },
          { id: "t2", quote: "I had no idea my blood pressure was dangerously high until the camp van came to our colony in Faridabad; the free medication they now deliver monthly means I haven't missed a single dose in two years.", authorName: "Rajesh Kapoor", authorRole: "Retired Teacher, Faridabad", rating: 5 },
          { id: "t3", quote: "In my Delhi clinic I see maybe 30 patients a day — one weekend with HealAll in a Rajasthan village and I saw 200 people who hadn't spoken to a doctor in years; that urgency is why I keep coming back.", authorName: "Dr. Anjali Sharma", authorRole: "Volunteer Physician, Delhi", rating: 5 },
        ],
      },
      gallery: {
        variant: "grid",
        badge: "Moments",
        headline: "On-Ground Diagnostics",
        items: [
          { id: "g1", type: "image", media: { src: "/images/orgs/doctors-smiling-with-healthy-patients-photo-1576091160550-2173dba999ef.jpg", alt: "Diagnostics checkup camp" }, category: "Diagnostics" },
          { id: "g2", type: "image", media: { src: "/images/orgs/nutritional-supplement-distribution-photo-1584515979956-d9f6e5d09982.jpg", alt: "Nutritional supplement distribution" }, category: "Nutrition" },
          { id: "g3", type: "image", media: { src: "/images/orgs/outreach-health-diagnostics-camp-photo-1516574187841-cb9cc2ca948b.jpg", alt: "Doctors diagnosing patient in mobile van" }, category: "Mobile Clinic" },
          { id: "g4", type: "image", media: { src: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=800&auto=format&fit=crop", alt: "Underprivileged patients queueing" }, category: "Camp Outreach" },
          { id: "g5", type: "image", media: { src: "/images/orgs/clinical-checkup-equipment-photo-1505751172876-fa1923c5c528.jpg", alt: "Clinical checkup equipment" }, category: "Equipment" },
          { id: "g6", type: "video", caption: "Mobile clinic delivering health checkups in rural Rajasthan", media: { src: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4", poster: "/images/orgs/outreach-health-diagnostics-camp-photo-1516574187841-cb9cc2ca948b.jpg" }, category: "Mobile Clinic" },
        ],
      },
      news: {
        variant: "magazine",
        badge: "Stories",
        headline: "Health Updates",
        items: [
          { id: "n1", slug: "combating-malnutrition", title: "Combating Malnutrition in Tribal Districts", summary: "Providing food supplements and counseling sessions to local mothers.", date: "2024-10-01", href: "#", image: { src: "/images/orgs/nutritional-supplement-distribution-photo-1584515979956-d9f6e5d09982.jpg", alt: "Food supplements and clinical help" } },
          { id: "n2", slug: "mental-health-expansion", title: "Expanding Telehealth Services", summary: "Our mobile clinics now offer live psychiatric consults via satellite link to city hospitals.", date: "2024-10-15", href: "#", image: { src: "/images/orgs/doctors-smiling-with-healthy-patients-photo-1576091160550-2173dba999ef.jpg", alt: "Telehealth diagnostic unit" } },
          { id: "n3", slug: "monsoon-medical-relief", title: "Monsoon Medical Relief Deployed", summary: "Extra mobile teams dispatched to areas experiencing flood-related waterborne diseases.", date: "2024-11-02", href: "#", image: { src: "/images/orgs/outreach-health-diagnostics-camp-photo-1516574187841-cb9cc2ca948b.jpg", alt: "Emergency medicine camp setup" } },
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
            media: { src: "/images/orgs/happy-rescued-dog-photo-1543466835-00a7907e9de1.jpg", alt: "Happy rescued dog", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Sponsor A Pet", href: "/donate" },
            secondaryCta: { label: "Volunteer At Shelter", href: "#" },
          },
          {
            id: "slide-animal-2",
            headline: "24/7 Veterinary Rescue Ambulance",
            subheadline: "Operating fast emergency rescue vans to perform critical trauma surgery and rehabilitation.",
            media: { src: "/images/orgs/rescued-dogs-playing-in-shelter-photo-1576201836106-db1758fd1c97.jpg", alt: "Rescued dogs playing in shelter", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Sponsor Ambulance Fuel", href: "/donate" },
            secondaryCta: { label: "Emergency Hotline", href: "#" },
          },
          {
            id: "slide-animal-3",
            headline: "Humane Birth Control Campaigns",
            subheadline: "Sterilizing and vaccinating stray dog populations to ensure healthy and safe neighborhoods.",
            media: { src: "/images/orgs/puppy-receiving-wellness-vaccination-photo-1628009368231-7bb7cfcb0def.jpg", alt: "Puppy receiving wellness vaccination", width: 1200, height: 600 },
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
            image: { src: "/images/orgs/rescued-dogs-playing-in-shelter-photo-1548199973-03cce0bbc87b.jpg", alt: "Rescued dogs playing in shelter" },
            eyebrow: "Our Response",
            headline: "24/7 Rescue and Medical Care",
            body: "We operate trauma ambulances, provide professional veterinary surgeries, and manage foster adoption networks."
          },
          {
            id: "panel-outcome",
            image: { src: "/images/orgs/rescued-dog-with-loving-family-photo-1534361960057-19889db9621e.jpg", alt: "Rescued dog with loving family" },
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
        media: { src: "/images/orgs/rescued-animals-at-shelter-photo-1576201836106-db1758fd1c97.jpg", alt: "Rescued animals at shelter", width: 600, height: 450 },
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
          { id: "p1", image: { src: "/images/orgs/cute-rescued-shelter-cat-photo-1514888286974-6c03e2ca1dba.jpg", alt: "Cute rescued shelter cat" }, badge: "Emergency", title: "Ambulance & Trauma Care", description: "Responds to injured street animals within the hour, performs emergency surgery on-site, and returns them healthy — at zero cost to the community that called.", cta: { label: "Details", href: "/programs" }, tags: ["Trauma", "24/7"] },
          { id: "p2", image: { src: "/images/orgs/puppy-getting-vaccine-checkup-photo-1628009368231-7bb7cfcb0def.jpg", alt: "Puppy getting vaccine checkup" }, badge: "Spay/Neuter", title: "ABC (Animal Birth Control)", description: "Sterilizes and vaccinates 150 stray dogs per month across three Bangalore zones, directly cutting bite incidents and keeping rabies out of the neighbourhood.", cta: { label: "Details", href: "/programs" }, tags: ["ABC", "Vaccination"] },
          { id: "p3", image: { src: "/images/orgs/happy-rescued-dog-photo-1543466835-00a7907e9de1.jpg", alt: "Happy rescued dog" }, badge: "Adoption", title: "Adopt-a-Stray Fairs", description: "Matches our fully vaccinated, socialized shelter animals with screened families, and follows up with a 30-day support call so every adoption sticks.", cta: { label: "Details", href: "/programs" }, tags: ["Adoption", "Foster"] },
          { id: "p4", image: { src: "https://images.unsplash.com/photo-1537151608828-ea2b117b6205?q=80&w=600&auto=format&fit=crop", alt: "Rescue worker treating puppy" }, badge: "Education", title: "Humane Education Class", description: "Visits 20 school classrooms a month to teach children how to safely approach, help, and report injured animals — measurably reducing street cruelty reports.", cta: { label: "Details", href: "/programs" }, tags: ["Education", "Youth"] },
        ],
      },
      testimonials: {
        variant: "featured",
        badge: "Adoptions",
        headline: "Happy Tails",
        items: [
          { id: "t1", quote: "Milo had been living in the Paws & Claws shelter in Bangalore for six months — the day we brought him home he sat on my daughter's lap the whole rickshaw ride, and that evening she said it was the best day of her life.", authorName: "Karan Nair", authorRole: "Adoptive Pet Parent, Bangalore", rating: 5 },
          { id: "t2", quote: "I found Bruno on Residency Road with a fractured leg and called Paws & Claws in a panic; their ambulance arrived in 22 minutes, the vet operated that night, and six weeks later Bruno was trotting around my building's garden like nothing happened.", authorName: "Nisha Reddy", authorRole: "Resident & Street Rescuer, Bangalore", rating: 5 },
          { id: "t3", quote: "My flat has a no-pet rule, so sponsoring Paws & Claws's monthly medical fund is how I make sure animals like the ones I pass on my morning walk get the surgery and vaccines they deserve.", authorName: "Vikram Shetty", authorRole: "Monthly Medical Sponsor, Bengaluru", rating: 4 },
        ],
      },
      gallery: {
        variant: "carousel",
        badge: "Shelter Pups",
        headline: "Adoptable Animals",
        items: [
          { id: "ag1", type: "image", media: { src: "/images/orgs/rescued-dog-at-shelter-photo-1543466835-00a7907e9de1.jpg", alt: "Rescued dog at shelter" }, category: "Rescue" },
          { id: "ag2", type: "image", media: { src: "/images/orgs/puppy-vaccination-photo-1628009368231-7bb7cfcb0def.jpg", alt: "Puppy vaccination" }, category: "Clinic" },
          { id: "ag3", type: "image", media: { src: "/images/orgs/cat-at-adoption-fair-photo-1514888286974-6c03e2ca1dba.jpg", alt: "Cat at adoption fair" }, category: "Adoption" },
          { id: "ag4", type: "image", media: { src: "https://images.unsplash.com/photo-1537151608828-ea2b117b6205?q=80&w=800&auto=format&fit=crop", alt: "Vet treating street dog" }, category: "Medical" },
          { id: "ag5", type: "image", media: { src: "/images/orgs/happy-adopted-dog-photo-1587300003388-59208cc962cb.jpg", alt: "Happy adopted dog" }, category: "Happy Tails" },
          { id: "ag6", type: "video", caption: "Bruno's 6-week recovery — from fractured leg to first run in the park", media: { src: "https://videos.pexels.com/video-files/4475523/4475523-uhd_2560_1440_30fps.mp4", poster: "/images/orgs/rescued-dog-at-shelter-photo-1543466835-00a7907e9de1.jpg" }, category: "Recovery" },
        ],
      },
      news: {
        variant: "timeline",
        badge: "Journal",
        headline: "Shelter Stories",
        items: [
          { id: "n1", slug: "rescue-bruno", title: "Rescue of Bruno from an Open Pit", summary: "Saved by our trauma unit after falling into a deep dry well.", date: "2024-07-20", href: "#", image: { src: "/images/orgs/dog-rescue-rescue-team-operation-photo-1583511655857-d19b40a7a54e.jpg", alt: "Dog Rescue rescue team operation" } },
          { id: "n2", slug: "rabies-free-drive", title: "Mass Rabies Vaccination Completed", summary: "Over 800 community stray dogs across the eastern suburbs received vaccination shots.", date: "2024-08-10", href: "#", image: { src: "/images/orgs/puppy-vaccination-photo-1628009368231-7bb7cfcb0def.jpg", alt: "Puppy receiving vaccination dose" } },
          { id: "n3", slug: "new-isolation-ward", title: "New Isolation Ward Opened", summary: "A dedicated medical suite to quarantine and treat contagious street animal viral infections.", date: "2024-09-01", href: "#", image: { src: "/images/orgs/rescued-animals-at-shelter-photo-1576201836106-db1758fd1c97.jpg", alt: "Clean shelter treatment ward" } },
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
            media: { src: "/images/orgs/planting-trees-at-afforestation-site-photo-1542601906990-b4d3fb778b09.jpg", alt: "Planting trees at afforestation site", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Plant Trees", href: "/donate" },
            secondaryCta: { label: "Volunteer Nearby", href: "#" },
          },
          {
            id: "slide-env-2",
            headline: "Lake Recovery Systems",
            subheadline: "De-silting inlets, clearing waste, and introducing floating wetlands to filter local waters.",
            media: { src: "/images/orgs/lake-recovery-operations-photo-1500382017468-9049fed747ef.jpg", alt: "Lake recovery operations", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Restore a Lake", href: "/donate" },
            secondaryCta: { label: "Lake Projects", href: "/#about" },
          },
          {
            id: "slide-env-3",
            headline: "Miyawaki Pocket Forests",
            subheadline: "Planting dense urban mini-forests in concrete corridors to naturally cool cities.",
            media: { src: "/images/orgs/dense-urban-pocket-forest-photo-1448375240586-882707db888b.jpg", alt: "Dense urban pocket forest", width: 1200, height: 600 },
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
            image: { src: "/images/orgs/dry-deforested-land-needing-water-and-trees-photo-1507525428034-b723cf961d3e.jpg", alt: "Dry deforested land needing water and trees" },
            eyebrow: "The Problem",
            headline: "Rapid Habitat Loss and Urban Warming",
            body: "Degraded forests, polluted city lakes, and rising temperatures threaten regional biodiversity and communities."
          },
          {
            id: "panel-response",
            image: { src: "/images/orgs/volunteers-planting-saplings-together-photo-1464822759023-fed622ff2c3b.jpg", alt: "Volunteers planting saplings together" },
            eyebrow: "Our Response",
            headline: "Mass Reforestation and Watershed Restoration",
            body: "We build dense Miyawaki urban forests, clean lakes, and engage community volunteers in planting native trees."
          },
          {
            id: "panel-outcome",
            image: { src: "/images/orgs/dense-green-forest-canopy-photo-1448375240586-882707db888b.jpg", alt: "Dense green forest canopy" },
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
        media: { src: "/images/orgs/lake-cleanup-and-watershed-recovery-photo-1500382017468-9049fed747ef.jpg", alt: "Lake Cleanup and watershed recovery", width: 600, height: 450 },
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
          { id: "p1", image: { src: "/images/orgs/miyawaki-urban-forests-project-photo-1441974231531-c6227db76b6e.jpg", alt: "Miyawaki Urban Forests project" }, badge: "Forestry", title: "Miyawaki Urban Forests", description: "Plants 300 native species in dense 10 m² plots inside city wards, lowering local surface temperatures by up to 3°C within two monsoon seasons.", cta: { label: "Read Project", href: "/programs" }, tags: ["Urban", "Miyawaki"] },
          { id: "p2", image: { src: "/images/orgs/lake-restoration-system-project-photo-1470071459604-3b5ec3a7fe05.jpg", alt: "Lake Restoration System project" }, badge: "Watershed", title: "Lake Restoration System", description: "Removes 5+ tonnes of silt and floating plastic from degraded urban lakes, restoring fish populations and safe drinking-water quality for surrounding communities.", cta: { label: "Read Project", href: "/programs" }, tags: ["Water", "Ecology"] },
          { id: "p3", image: { src: "/images/orgs/solar-light-kits-photo-1500382017468-9049fed747ef.jpg", alt: "Solar light kits" }, badge: "Clean Energy", title: "Solar Light Distribution", description: "Delivers solar lanterns and USB charging panels to 120 forest-fringe households, replacing kerosene lamps and cutting household CO₂ emissions by 80%.", cta: { label: "Read Project", href: "/programs" }, tags: ["Solar", "Off-grid"] },
          { id: "p4", image: { src: "/images/orgs/school-kids-planting-seeds-photo-1542601906990-b4d3fb778b09.jpg", alt: "School kids planting seeds" }, badge: "Schools", title: "Eco-Clubs Network", description: "Installs compost bins and seed-saving corners in 48 partner schools, turning daily food waste into saplings and building ecological responsibility from childhood.", cta: { label: "Read Project", href: "/programs" }, tags: ["Education", "Youth"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Partners",
        headline: "Corporate Feedback",
        items: [
          { id: "t1", quote: "EcoShield's team geo-tagged every one of our 500 sponsored saplings in the Anaimalai hills and sent us monthly survival reports — our board could finally prove measurable carbon impact to our auditors.", authorName: "Anjali Krishnaswamy", authorRole: "Sustainability Director, Chennai Corp.", rating: 5 },
          { id: "t2", quote: "Our neighbourhood lake in Velachery was a dumping ground for construction waste for a decade; EcoShield de-silted it, planted floating wetlands, and within one year egrets returned — something I never thought I'd see again.", authorName: "Karthik Rajan", authorRole: "Resident, Velachery, Chennai", rating: 5 },
          { id: "t3", quote: "We sponsored 500 native saplings for a Miyawaki plot in Coimbatore and the GPS monitoring portal showed every single one thriving at the 6-month mark — that transparency is rare and remarkable.", authorName: "Lisa Murugesan", authorRole: "CSR Sponsor, Coimbatore", rating: 5 },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Saplings",
        headline: "Nursery Work",
        items: [
          { id: "g1", type: "image", media: { src: "/images/orgs/afforestation-nursery-photo-1542601906990-b4d3fb778b09.jpg", alt: "Afforestation Nursery" }, category: "Nursery" },
          { id: "g2", type: "image", media: { src: "/images/orgs/lake-cleanup-and-watershed-recovery-photo-1500382017468-9049fed747ef.jpg", alt: "Restored lake water body" }, category: "Lakes" },
          { id: "g3", type: "image", media: { src: "/images/orgs/dense-green-forest-canopy-photo-1448375240586-882707db888b.jpg", alt: "Pocket forest foliage" }, category: "Forests" },
          { id: "g4", type: "image", media: { src: "/images/orgs/volunteers-planting-saplings-together-photo-1464822759023-fed622ff2c3b.jpg", alt: "Volunteers gathering at site" }, category: "Volunteers" },
          { id: "g5", type: "image", media: { src: "/images/orgs/dry-land-planting-preparations-photo-1507525428034-b723cf961d3e.jpg", alt: "Dry land planting preparations" }, category: "Site Prep" },
        ],
      },
      news: {
        variant: "timeline",
        badge: "Journal",
        headline: "Green News",
        items: [
          { id: "n1", slug: "pallikaranai-marsh-nursery", title: "Inauguration of the Pallikaranai Marsh Nursery", summary: "10,000 wetland saplings prepared for planting during the upcoming monsoons.", date: "2024-07-20", href: "#", image: { src: "/images/orgs/iit-exam-success-celebration-photo-1504711434969-e33886168f5c.jpg", alt: "Nursery wetland plants" } },
          { id: "n2", slug: "lake-clean-drive", title: "Massive Clean Up Drive at Pallikaranai", summary: "Over 2 tons of plastic waste cleared by 300 student volunteers over the weekend.", date: "2024-08-18", href: "#", image: { src: "/images/orgs/lake-cleanup-and-watershed-recovery-photo-1500382017468-9049fed747ef.jpg", alt: "Volunteers gathering waste" } },
          { id: "n3", slug: "solar-camps-launched", title: "Solar Outreach Camps Launched", summary: "Distributed 120 solar lanterns to rural night study centers in rural districts.", date: "2024-09-10", href: "#", image: { src: "/images/orgs/afforestation-nursery-photo-1542601906990-b4d3fb778b09.jpg", alt: "Solar panels installation" } },
        ],
      },
      ctaBand: {
        variant: "image-background",
        theme: "image",
        backgroundImage: { src: "/images/orgs/dense-urban-pocket-forest-photo-1448375240586-882707db888b.jpg", alt: "Green forest canopy" },
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
            media: { src: "/images/orgs/relief-workers-distributing-food-and-aid-to-community-photo-1469571486292-0ba58a3f068b.jpg", alt: "Relief workers distributing food and aid to community", width: 1200, height: 600 },
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
            media: { src: "/images/orgs/tents-under-cold-weather-photo-1595246140625-573b715d11dc.jpg", alt: "Tents under cold weather", width: 1200, height: 600 },
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
            image: { src: "/images/orgs/tents-under-cold-weather-photo-1595246140625-573b715d11dc.jpg", alt: "Displaced families at temporary refugee camp" },
            eyebrow: "The Problem",
            headline: "Millions Displaced, Basic Needs Unmet",
            body: "Conflict, climate shocks, and economic collapse leave families without food, clean water, or safe shelter."
          },
          {
            id: "panel-hum-response",
            image: { src: "/images/orgs/aid-box-distribution-with-essential-supplies-photo-1593113598332-cd288d649433.jpg", alt: "Aid box distribution with essential supplies" },
            eyebrow: "Our Response",
            headline: "Rapid, On-the-Ground Relief",
            body: "We deploy mobile aid units within 48 hours of a crisis, delivering food kits, clean water, and emergency shelter."
          },
          {
            id: "panel-hum-outcome",
            image: { src: "/images/orgs/sustained-community-support-and-development-photo-1532629345422-7515f3d16bb6.jpg", alt: "Sustained community support and development" },
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
        media: { src: "/images/orgs/humanitarian-relief-team-meeting-photo-1469571486292-0ba58a3f068b.jpg", alt: "Humanitarian relief team meeting", width: 600, height: 450 },
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
          { id: "hp1", image: { src: "/images/orgs/food-distribution-grain-bag-drive-photo-1541802645635-11f2286a7482.jpg", alt: "Food distribution grain bag drive" }, badge: "Food Security", title: "Emergency Food Kits", description: "Ships 10 kg monthly ration packs — rice, lentils, cooking oil, and iodized salt — to 3,000 displaced households to prevent acute hunger in the first weeks of a crisis.", cta: { label: "View Details", href: "/programs" }, tags: ["Food", "Emergency"] },
          { id: "hp2", image: { src: "https://images.unsplash.com/photo-1541256580214-6f4d5a5e2a5c?q=80&w=600&auto=format&fit=crop", alt: "Clean water pump filtration project" }, badge: "Water", title: "Clean Water Access", description: "Drills borewells and deploys ceramic filter stations that produce 500 litres of safe drinking water per day for flood-affected communities where tap water is contaminated.", cta: { label: "View Details", href: "/programs" }, tags: ["Water", "Health"] },
          { id: "hp3", image: { src: "/images/orgs/displaced-camp-shelter-setup-photo-1595246140625-573b715d11dc.jpg", alt: "Displaced camp shelter setup" }, badge: "Shelter", title: "Modular Shelters", description: "Distributes insulated modular tents and thermal blankets to families who have lost their homes, keeping them protected through winter nights until permanent housing is ready.", cta: { label: "View Details", href: "/programs" }, tags: ["Shelter", "Disaster"] },
          { id: "hp4", image: { src: "/images/orgs/medical-camp-checkup-photo-1469571486292-0ba58a3f068b.jpg", alt: "Medical camp checkup" }, badge: "Medical Aid", title: "Mobile Trauma Units", description: "Stations nurses and trauma counselors in cut-off villages within 48 hours of a disaster to treat wounds, prevent infection, and support survivors through acute psychological shock.", cta: { label: "View Details", href: "/programs" }, tags: ["First-Aid", "Crisis"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Stories From the Field",
        items: [
          { id: "ht1", quote: "When our village flooded and everything went underwater, Bridgeway had a water-filtration kit in our hands within two days; it kept our children safe from cholera when the wells around us were already contaminated.", authorName: "Fatima Rehman", authorRole: "Relief Recipient, East Bengal", rating: 5 },
          { id: "ht2", quote: "In our camp near Assam I watched the purification tablets prevent what could have been a cholera outbreak overnight — Bridgeway's speed and precision saved dozens of lives, and I mean that literally.", authorName: "Youssef Ahmed", authorRole: "Camp Coordinator, Assam Relief Site", rating: 5 },
          { id: "ht3", quote: "I've donated to many NGOs, but Bridgeway is the only one that sends me a georeferenced photo of exactly where my money went within 48 hours of the transfer — that accountability is what keeps me giving every month.", authorName: "Claire D'Souza", authorRole: "Regular Supporter, Bengaluru", rating: 5 },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "hg1", type: "image", media: { src: "/images/orgs/humanitarian-relief-team-meeting-photo-1469571486292-0ba58a3f068b.jpg", alt: "Aid distribution on ground" }, category: "Distribution" },
          { id: "hg2", type: "image", media: { src: "/images/orgs/refugee-shelter-site-photo-1595246140625-573b715d11dc.jpg", alt: "Refugee shelter site" }, category: "Shelter" },
          { id: "hg3", type: "image", media: { src: "https://images.unsplash.com/photo-1541256580214-6f4d5a5e2a5c?q=80&w=800&auto=format&fit=crop", alt: "Clean water pump" }, category: "Clean Water" },
          { id: "hg4", type: "image", media: { src: "/images/orgs/grains-food-distribution-bags-photo-1541802645635-11f2286a7482.jpg", alt: "Grains food distribution bags" }, category: "Food Kits" },
          { id: "hg5", type: "image", media: { src: "/images/orgs/medical-health-camp-unit-photo-1532629345422-7515f3d16bb6.jpg", alt: "Medical health camp unit" }, category: "Medical Camp" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "hn1", slug: "flood-response-2024", title: "Rapid Response to Regional Flooding", summary: "Mobile units deployed within 48 hours to deliver clean water and rations.", date: "2024-08-12", href: "#", image: { src: "/images/orgs/grains-food-distribution-bags-photo-1541802645635-11f2286a7482.jpg", alt: "Flood food relief response" } },
          { id: "hn2", slug: "water-crisis-resolved", title: "New Borewells in Dry Zones", summary: "Providing clean drinking water to over 15 village clusters in arid regions.", date: "2024-09-18", href: "#", image: { src: "https://images.unsplash.com/photo-1541256580214-6f4d5a5e2a5c?q=80&w=800&auto=format&fit=crop", alt: "Fresh water borehole well" } },
          { id: "hn3", slug: "winterization-drive-launched", title: "Winter Relief Kits En Route", summary: "Dispatched 5,000 heavy blankets and thermal clothing packs to high-altitude camps.", date: "2024-11-05", href: "#", image: { src: "/images/orgs/refugee-shelter-site-photo-1595246140625-573b715d11dc.jpg", alt: "Tents under cold weather" } },
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
            media: { src: "/images/orgs/community-gathering-photo-1438032005730-c779502df39b.jpg", alt: "Community gathering", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Support Our Mission", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
          {
            id: "slide-faith-2",
            headline: "Hope Grocery Pantries",
            subheadline: "Stocking and distributing monthly food ration packs to low-income senior citizens and families.",
            media: { src: "/images/orgs/food-service-pantry-items-photo-1593113646773-028c64a8f1b8.jpg", alt: "Food service pantry items", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Donate Groceries", href: "/donate" },
            secondaryCta: { label: "Volunteer At Pantry", href: "/#about" },
          },
          {
            id: "slide-faith-3",
            headline: "Grace Afterschool Mentors",
            subheadline: "Providing children safe spaces for homework help, values education, and healthy meals.",
            media: { src: "/images/orgs/mentorship-circle-gathering-photo-1529156069898-49953e39b3ac.jpg", alt: "Mentorship circle gathering", width: 1200, height: 600 },
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
            image: { src: "/images/orgs/community-gathering-photo-1438032005730-c779502df39b.jpg", alt: "Community meal program" },
            eyebrow: "Our Response",
            headline: "A Community Table, Open to All",
            body: "Weekly meal programs, free counseling, and a welcoming community space for anyone who needs it."
          },
          {
            id: "panel-faith-outcome",
            image: { src: "/images/orgs/community-gathering-and-outreach-fellowship-photo-1544027993-37dbfe43562a.jpg", alt: "Community gathering and outreach fellowship" },
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
        media: { src: "/images/orgs/community-fellowship-photo-1438032005730-c779502df39b.jpg", alt: "Community fellowship", width: 600, height: 450 },
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
          { id: "fp1", image: { src: "/images/orgs/community-meal-program-food-service-photo-1593113646773-028c64a8f1b8.jpg", alt: "Community meal program food service" }, badge: "Nutrition", title: "Weekly Community Meals", description: "Serves 450 hot, nutritious meals every Saturday — open to anyone who walks through the door, with no registration, faith test, or questions asked.", cta: { label: "View Details", href: "/programs" }, tags: ["Meals", "Community"] },
          { id: "fp2", image: { src: "/images/orgs/counseling-support-session-photo-1529156069898-49953e39b3ac.jpg", alt: "Counseling support session" }, badge: "Support", title: "Free Family Counseling", description: "Offers free, confidential sessions with trained counselors to families navigating grief, job loss, addiction, or domestic stress — no referral needed.", cta: { label: "View Details", href: "/programs" }, tags: ["Counseling", "Family"] },
          { id: "fp3", image: { src: "/images/orgs/community-meal-program-food-service-photo-1593113646773-028c64a8f1b8.jpg", alt: "Staple food pantry drive" }, badge: "Pantry", title: "Hope Grocery Pantries", description: "Delivers monthly boxes of flour, lentils, oil, and sugar to 200 senior citizens and widows in Bengaluru who can no longer afford staple groceries on a fixed income.", cta: { label: "View Details", href: "/programs" }, tags: ["Pantry", "Seniors"] },
          { id: "fp4", image: { src: "/images/orgs/mentors-playing-with-children-photo-1438032005730-c779502df39b.jpg", alt: "Mentors playing with children" }, badge: "Mentoring", title: "Grace Afterschool Mentors", description: "Gives 80 children a safe, supervised space after school with homework help, a hot snack, and a trusted adult mentor who shows up every single week.", cta: { label: "View Details", href: "/programs" }, tags: ["Youth", "Mentoring"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Stories of Grace",
        items: [
          { id: "ft1", quote: "We arrived at Grace & Light one Sunday with nowhere to sleep and four young children — they welcomed us without a single form to fill, gave us a warm meal, and within a week connected us to housing support; that community became our family.", authorName: "Joseph Mathew", authorRole: "Community Member, Bengaluru", rating: 5 },
          { id: "ft2", quote: "My grandparents are 80 and live alone in Whitefield — the monthly pantry box from Grace & Light means they always have rice and lentils, and the volunteer who delivers it stays for tea and talks with them; that hour of company matters as much as the food.", authorName: "Maria George", authorRole: "Granddaughter, Bengaluru", rating: 5 },
          { id: "ft3", quote: "I've been mentoring kids at Grace & Light for three years; last month my student Ravi showed me his Class 10 mark sheet — he'd gone from failing to distinction in mathematics, and the look on his face is something I'll carry for life.", authorName: "Brother David Paul", authorRole: "Volunteer Mentor, Grace & Light Mission", rating: 5 },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "fg1", type: "image", media: { src: "/images/orgs/community-meal-photo-1593113646773-028c64a8f1b8.jpg", alt: "Community meal" }, category: "Meals" },
          { id: "fg2", type: "image", media: { src: "/images/orgs/community-fellowship-photo-1438032005730-c779502df39b.jpg", alt: "Fellowship gathering" }, category: "Fellowship" },
          { id: "fg3", type: "image", media: { src: "/images/orgs/counseling-sessions-office-photo-1529156069898-49953e39b3ac.jpg", alt: "Counseling sessions office" }, category: "Counseling" },
          { id: "fg4", type: "image", media: { src: "https://images.unsplash.com/photo-1518398046578-8cb5c1fd69d8?q=80&w=800&auto=format&fit=crop", alt: "Food distribution preparation" }, category: "Pantry" },
          { id: "fg5", type: "image", media: { src: "/images/orgs/volunteer-mentors-team-photo-1544027993-37dbfe43562a.jpg", alt: "Volunteer mentors team" }, category: "Volunteers" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "fn1", slug: "community-kitchen-expansion", title: "Community Kitchen Expands to Second Site", summary: "New location will double weekly meal capacity to serve underserved suburban pockets.", date: "2024-09-02", href: "#", image: { src: "/images/orgs/community-meal-photo-1593113646773-028c64a8f1b8.jpg", alt: "Kitchen expansion" } },
          { id: "fn2", slug: "youth-winter-drive", title: "Youth Launch Winter Clothing Drive", summary: "Aiming to collect 500 coats and blankets for our homeless neighbors.", date: "2024-10-10", href: "#", image: { src: "https://images.unsplash.com/photo-1518398046578-8cb5c1fd69d8?q=80&w=800&auto=format&fit=crop", alt: "Volunteer sorting coats" } },
          { id: "fn3", slug: "thanksgiving-meals", title: "Thanksgiving Meal Service Complete", summary: "Over 600 warm festive lunches distributed by our volunteer crew.", date: "2024-11-25", href: "#", image: { src: "/images/orgs/community-fellowship-photo-1438032005730-c779502df39b.jpg", alt: "Holiday dining room service" } },
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
            media: { src: "/images/orgs/community-infrastructure-building-project-photo-1541872703-74c5e44368f9.jpg", alt: "Community infrastructure building project", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Support the Cause", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
          {
            id: "slide-comm-2",
            headline: "Microloans for Women Entrepreneurs",
            subheadline: "Providing startup capital, bookkeeping training, and mentoring to launch home-based businesses.",
            media: { src: "/images/orgs/small-retail-shop-business-owner-photo-1537996194471-e657df975ab4.jpg", alt: "Small retail shop business owner", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Fund a Microloan", href: "/donate" },
            secondaryCta: { label: "Success Stories", href: "/#about" },
          },
          {
            id: "slide-comm-3",
            headline: "Public Spaces Renewed",
            subheadline: "Transforming empty urban dump yards into clean community gardens, parks, and play areas.",
            media: { src: "/images/orgs/public-garden-space-building-photo-1581091226825-a6a2a5aee158.jpg", alt: "Public garden space building", width: 1200, height: 600 },
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
            image: { src: "/images/orgs/children-studying-in-tough-conditions-photo-1488521787991-ed7bbaae773c.jpg", alt: "Underserved neighborhood and families needing support" },
            eyebrow: "The Problem",
            headline: "Underinvestment Traps Neighborhoods in Cycles of Poverty",
            body: "Lack of infrastructure, job access, and capital keeps entire communities from moving forward."
          },
          {
            id: "panel-comm-response",
            image: { src: "/images/orgs/vocational-computer-and-digital-skills-training-lab-photo-1516321318423-f06f85e504b3.jpg", alt: "Vocational computer and digital skills training lab" },
            eyebrow: "Our Response",
            headline: "Skills, Capital, and Infrastructure — Together",
            body: "We combine vocational training, microloans, and public space renewal to build lasting local capacity."
          },
          {
            id: "panel-comm-outcome",
            image: { src: "/images/orgs/thriving-local-workshop-business-owner-photo-1607604276583-eef5d076aa5f.jpg", alt: "Thriving local workshop business owner" },
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
          { id: "cp1", image: { src: "/images/orgs/vocational-study-and-skills-training-class-photo-1522202176988-66273c2fd55f.jpg", alt: "Vocational study and skills training class" }, badge: "Workforce", title: "Vocational Skills Training", description: "Certifies residents in electrical wiring, plumbing, or digital skills within 3 months, giving graduates a nationally recognised trade qualification and their first steady income.", cta: { label: "View Details", href: "/programs" }, tags: ["Jobs", "Training"] },
          { id: "cp2", image: { src: "/images/orgs/small-family-business-shop-photo-1537996194471-e657df975ab4.jpg", alt: "Small family business shop" }, badge: "Economic", title: "Microloan & Grant Fund", description: "Provides ₹15,000–₹50,000 in interest-free startup loans plus weekly bookkeeping coaching to launch or grow resident-owned micro-enterprises across Pune's underserved wards.", cta: { label: "View Details", href: "/programs" }, tags: ["Microloans", "Business"] },
          { id: "cp3", image: { src: "/images/orgs/park-renewal-park-project-photo-1581091226825-a6a2a5aee158.jpg", alt: "Park renewal park project" }, badge: "Infrastructure", title: "Public Space Renewal", description: "Converts garbage-strewn vacant lots into solar-lit neighbourhood parks and raised-bed vegetable gardens, each maintained by an elected resident committee.", cta: { label: "View Details", href: "/programs" }, tags: ["Parks", "Green"] },
          { id: "cp4", image: { src: "/images/orgs/cooperative-markets-vendors-photo-1607604276583-eef5d076aa5f.jpg", alt: "Cooperative markets vendors" }, badge: "Economic", title: "Cooperative Markets", description: "Organises 40 informal street vendors into registered cooperatives with a designated weekly market pitch, shared cold storage, and collective bulk-buying power.", cta: { label: "View Details", href: "/programs" }, tags: ["Markets", "Trade"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Community Voices",
        items: [
          { id: "ct1", quote: "Neighborhood Forward gave me a ₹30,000 interest-free loan and six months of bookkeeping coaching; today my tailoring shop on Shivajinagar Lane employs three women from my own building, and we cleared the full loan eight months early.", authorName: "Deepak Shinde", authorRole: "Small Business Owner, Pune", rating: 5 },
          { id: "ct2", quote: "I was 28 and had been doing odd jobs for four years when I joined the vocational lab; twelve weeks later I walked out with a government-certified electrician's licence, and I had my first contract within a fortnight.", authorName: "Rohan Pawar", authorRole: "Certified Electrician & Vocational Graduate, Pune", rating: 5 },
          { id: "ct3", quote: "Our lane in Kasba Peth had been a dumping ground since I was a child; Neighborhood Forward worked with us to design it ourselves, and now we have a proper garden where kids play every evening — that sense of ownership changed everything.", authorName: "Sita Gaikwad", authorRole: "Resident Organizer, Kasba Peth, Pune", rating: 5 },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "cg1", type: "image", media: { src: "/images/orgs/infrastructure-renewal-project-construction-photo-1581091226825-a6a2a5aee158.jpg", alt: "Infrastructure renewal project construction" }, category: "Infrastructure" },
          { id: "cg2", type: "image", media: { src: "/images/orgs/scholarship-award-day-photo-1427504494785-3a9ca7044f45.jpg", alt: "Skills training class" }, category: "Training" },
          { id: "cg3", type: "image", media: { src: "/images/orgs/business-mentorship-meeting-photo-1537996194471-e657df975ab4.jpg", alt: "Business mentorship meeting" }, category: "Business" },
          { id: "cg4", type: "image", media: { src: "/images/orgs/local-markets-stalls-photo-1607604276583-eef5d076aa5f.jpg", alt: "Local markets stalls" }, category: "Markets" },
          { id: "cg5", type: "image", media: { src: "/images/orgs/classroom-computers-learning-photo-1516321318423-f06f85e504b3.jpg", alt: "Classroom computers learning" }, category: "Gardens" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "cn1", slug: "microloan-fund-milestone", title: "Microloan Fund Crosses 400 Businesses Funded", summary: "A milestone year for resident-led entrepreneurship in urban and rural districts.", date: "2024-10-05", href: "#", image: { src: "/images/orgs/microloan-funded-shop-and-market-stall-milestone-photo-1542838132-92c53300491e.jpg", alt: "Microloan funded shop and market stall milestone" } },
          { id: "cn2", slug: "vocational-lab-opens", title: "New Vocational Tech Lab Opened", summary: "Equipped with 20 computers and solar backup to train 200 youths annually in digital skills.", date: "2024-11-10", href: "#", image: { src: "/images/orgs/classroom-computers-learning-photo-1516321318423-f06f85e504b3.jpg", alt: "Tech training classroom setup" } },
          { id: "cn3", slug: "clean-up-campaign-success", title: "Clean Block Campaign Clears 3 Yards", summary: "Over 100 resident volunteers joined forces to establish urban community gardens.", date: "2024-12-01", href: "#", image: { src: "/images/orgs/infrastructure-renewal-project-construction-photo-1581091226825-a6a2a5aee158.jpg", alt: "Volunteers painting garden wall" } },
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
            media: { src: "/images/orgs/children-painting-and-practicing-art-photo-1513364776144-60967b0f800f.jpg", alt: "Children painting and practicing art", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Fund a Program", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
          {
            id: "slide-arts-2",
            headline: "Heritage Dance & Music",
            subheadline: "Preserving ancient regional art forms by passing them down to youth groups in free workshops.",
            media: { src: "/images/orgs/traditional-classical-dance-session-photo-1508700115892-45ecd05ae2ad.jpg", alt: "Traditional classical dance session", width: 1200, height: 600 },
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
            image: { src: "/images/orgs/empty-stage-representing-cut-arts-programs-photo-1544816155-12df9643f363.jpg", alt: "Empty stage representing cut arts programs" },
            eyebrow: "The Problem",
            headline: "Arts Education Is the First Thing Cut",
            body: "When budgets shrink, art, music, and cultural programs disappear first — and with them, a vital outlet for expression."
          },
          {
            id: "panel-arts-response",
            image: { src: "/images/orgs/children-painting-and-practicing-art-photo-1513364776144-60967b0f800f.jpg", alt: "Free children art painting class" }, 
            eyebrow: "Our Response",
            headline: "Free Studios, Open to Every Child",
            body: "We run free after-school art, music, and traditional dance classes taught by working local artists."
          },
          {
            id: "panel-arts-outcome",
            image: { src: "/images/orgs/youth-painting-exhibition-artwork-photo-1579783902614-a3fb3927b6a5.jpg", alt: "Youth painting exhibition artwork" },
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
          { id: "ap1", image: { src: "/images/orgs/free-after-school-art-studio-painting-class-photo-1513364776144-60967b0f800f.jpg", alt: "Free after-school art studio painting class" }, badge: "Education", title: "Free After-School Art Studio", description: "Gives children aged 8–18 free daily access to paints, clay, and charcoal — taught by practising local artists in a dedicated Jaipur studio, five afternoons a week.", cta: { label: "View Details", href: "/programs" }, tags: ["Art", "Youth"] },
          { id: "ap2", image: { src: "/images/orgs/traditional-classical-dance-class-and-preservation-photo-1508700115892-45ecd05ae2ad.jpg", alt: "Traditional classical dance class and preservation" }, badge: "Heritage", title: "Traditional Dance Preservation", description: "Trains youth in Kathak, Bharatanatyam, and Rajasthani folk music under master artists, preserving three regional forms at genuine risk of dying out within a generation.", cta: { label: "View Details", href: "/programs" }, tags: ["Dance", "Heritage"] },
          { id: "ap3", image: { src: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=600&auto=format&fit=crop", alt: "Street market wall painting" }, badge: "Public Art", title: "Community Mural Project", description: "Commissions residents to design and paint neighbourhood-story murals on public walls, turning forgotten grey corners into cultural landmarks that locals are proud to photograph.", cta: { label: "View Details", href: "/programs" }, tags: ["Murals", "Public"] },
          { id: "ap4", image: { src: "/images/orgs/paintings-displayed-in-exhibition-photo-1579783902614-a3fb3927b6a5.jpg", alt: "Paintings displayed in exhibition" }, badge: "Exhibition", title: "Annual Youth Art Show", description: "Curates a public exhibition each year where youth artists price, present, and sell their original works — giving many their first-ever income from creative work.", cta: { label: "View Details", href: "/programs" }, tags: ["Exhibition", "Gallery"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Stories From the Studio",
        items: [
          { id: "at1", quote: "I grew up in a one-room house in Jaipur's old city and never imagined my paintings hanging in a real gallery — Canvas Collective gave me the paints, the teacher, and the exhibition wall; my first piece sold for ₹3,500 and I cried the whole rickshaw home.", authorName: "Ananya Kumari", authorRole: "Student Artist, Age 16, Jaipur", rating: 5 },
          { id: "at2", quote: "I learned Kathak from my grandmother, who feared our family's tradition would die with her — my daughter now learns it free from a master at Canvas Collective, and last month she performed at the Jaipur Heritage Festival.", authorName: "Gita Rawal", authorRole: "Parent & Heritage Dance Patron, Jaipur", rating: 5 },
          { id: "at3", quote: "I volunteer to lead mural paint days every quarter; watching a teenager who said she 'couldn't draw' cover an entire wall with her own story is the most powerful thing I witness as a working artist.", authorName: "Dev Dadhich", authorRole: "Mural Artist & Volunteer, Jaipur", rating: 4 },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "ag1", type: "image", media: { src: "/images/orgs/creative-art-studio-watercolor-painting-photo-1579783902614-a3fb3927b6a5.jpg", alt: "Creative art studio watercolor painting" }, category: "Studio" },
          { id: "ag2", type: "image", media: { src: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop", alt: "Youth art studio exhibition gallery" }, category: "Exhibition" },
          { id: "ag3", type: "image", media: { src: "/images/orgs/traditional-dance-practice-session-photo-1508700115892-45ecd05ae2ad.jpg", alt: "Traditional dance practice session" }, category: "Dance" },
          { id: "ag4", type: "image", media: { src: "/images/orgs/children-painting-on-canvas-photo-1513364776144-60967b0f800f.jpg", alt: "Children painting on canvas" }, category: "Youth Painting" },
          { id: "ag5", type: "image", media: { src: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop", alt: "Completed street mural" }, category: "Murals" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "an1", slug: "youth-exhibition-2024", title: "Youth Artists Debut at City Gallery", summary: "12 students showed original work to the public for the first time.", date: "2024-06-18", href: "#", image: { src: "/images/orgs/creative-art-studio-watercolor-painting-photo-1579783902614-a3fb3927b6a5.jpg", alt: "Youth art exhibition debut gallery opening" } },
          { id: "an2", slug: "new-studio-jaipur", title: "New Studio Space Opened in Jaipur", summary: "A restored warehouse now serving as a free daily art studio for 100+ children.", date: "2024-07-15", href: "#", image: { src: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop", alt: "Warehouse art studio space" } },
          { id: "an3", slug: "mural-completed", title: "Giant Mural Completed in Jaipur Market", summary: "Collaborative street mural highlighting 100 years of regional handicraft history completed.", date: "2024-09-05", href: "#", image: { src: "/images/orgs/children-painting-on-canvas-photo-1513364776144-60967b0f800f.jpg", alt: "Street market mural painting" } },
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
            media: { src: "/images/orgs/emergency-flood-response-rescue-boat-team-photo-1508514177221-188b1cf16e9d.jpg", alt: "Emergency flood response rescue boat team", width: 1200, height: 600 },
            overlayOpacity: 0.5,
            primaryCta: { label: "Fund Rapid Response", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
          {
            id: "slide-disaster-2",
            headline: "Emergency Field Clinics",
            subheadline: "Setting up mobile medical tents with sterile trauma gear and medication kits in cut-off villages.",
            media: { src: "/images/orgs/rescue-workers-tending-to-clinic-photo-1532960401447-7dd05bef20b0.jpg", alt: "Rescue workers tending to clinic", width: 1200, height: 600 },
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
            image: { src: "/images/orgs/rescue-workers-tending-to-clinic-photo-1532960401447-7dd05bef20b0.jpg", alt: "Cyclone storm disaster rubble aftermath" },
            eyebrow: "The Problem",
            headline: "The First 72 Hours Decide Everything",
            body: "In the critical window after a disaster, delayed response costs lives — yet most aid takes days to arrive."
          },
          {
            id: "panel-disaster-response",
            image: { src: "/images/orgs/emergency-flood-response-rescue-boat-team-photo-1508514177221-188b1cf16e9d.jpg", alt: "Emergency search and rescue boat deployment team" },
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
        media: { src: "/images/orgs/search-and-rescue-boat-training-photo-1508514177221-188b1cf16e9d.jpg", alt: "Search and rescue boat training", width: 600, height: 450 },
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
          { id: "dp1", image: { src: "/images/orgs/flood-search-and-rescue-team-deployment-photo-1508514177221-188b1cf16e9d.jpg", alt: "Flood search and rescue team deployment" }, badge: "Rescue", title: "Search & Rescue Teams", description: "Deploys boat-mounted rescue teams and rope-rescue specialists into flooded zones within 6 hours of an emergency call, reaching families before government units can mobilise.", cta: { label: "View Details", href: "/programs" }, tags: ["Rescue", "Emergency"] },
          { id: "dp2", image: { src: "https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=600&auto=format&fit=crop", alt: "Community rebuilding and relief project" }, badge: "Recovery", title: "Long-Term Rebuilding", description: "Builds cyclone-resistant homes for families who lost everything, using local contractors and certified materials, with keys handed over within 90 days of a disaster.", cta: { label: "View Details", href: "/programs" }, tags: ["Rebuilding", "Housing"] },
          { id: "dp3", image: { src: "/images/orgs/medical-treatment-tent-clinic-photo-1532960401447-7dd05bef20b0.jpg", alt: "Medical treatment tent clinic" }, badge: "Medical", title: "Mobile Trauma Clinics", description: "Sets up sterile field clinics with surgical kits, wound-care nurses, and on-site trauma counselors to treat injuries and acute stress in communities cut off from hospitals.", cta: { label: "View Details", href: "/programs" }, tags: ["Medical", "Trauma"] },
          { id: "dp4", image: { src: "/images/orgs/flood-search-and-rescue-team-deployment-photo-1508514177221-188b1cf16e9d.jpg", alt: "Satellite terminals setup" }, badge: "Tech Relief", title: "Emergency Power & Comms", description: "Installs solar charging stations and satellite Wi-Fi hotspots in cut-off villages so survivors can charge phones, contact family, and access emergency government services.", cta: { label: "View Details", href: "/programs" }, tags: ["Solar", "Comms"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Stories From the Response",
        items: [
          { id: "dt1", quote: "Our entire lane in Gosaba was underwater when the RRC boat appeared out of the dark — they pulled my wife, my mother, and my two children out before the second surge hit; I don't have words for what that means.", authorName: "Ravi Thakur", authorRole: "Flood Survivor, Gosaba Island, West Bengal", rating: 5 },
          { id: "dt2", quote: "The earthquake cut all power and mobile signal to our block in Manipur for nine days; the RRC satellite station was literally the only way I could tell my family in Imphal that we were alive.", authorName: "Karan Meitei", authorRole: "Local Relief Coordinator, Manipur", rating: 5 },
          { id: "dt3", quote: "Most relief organisations leave within two weeks; RRC stayed in our district for seven months, rebuilt 25 homes to a higher standard than the ones lost, and then trained local masons so we could maintain them ourselves.", authorName: "Dr. Sarah Lobo", authorRole: "Partner Hospital Liaison, Odisha", rating: 5 },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "dg1", type: "image", media: { src: "/images/orgs/search-and-rescue-boat-training-photo-1508514177221-188b1cf16e9d.jpg", alt: "Flood rescue boat response deployment" }, category: "Deployment" },
          { id: "dg2", type: "image", media: { src: "https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=800&auto=format&fit=crop", alt: "Rebuilding community houses" }, category: "Rebuilding" },
          { id: "dg3", type: "image", media: { src: "/images/orgs/medical-field-checkups-photo-1532960401447-7dd05bef20b0.jpg", alt: "Medical field checkups" }, category: "Medical" },
          { id: "dg4", type: "image", media: { src: "/images/orgs/search-and-rescue-boat-training-photo-1508514177221-188b1cf16e9d.jpg", alt: "Search and rescue team deployment" }, category: "Search & Rescue" },
          { id: "dg5", type: "image", media: { src: "https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=800&auto=format&fit=crop", alt: "Brick construction housing" }, category: "Rebuilding" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "dn1", slug: "cyclone-response-deployment", title: "Teams Deployed Ahead of Coastal Cyclone", summary: "Pre-positioned units activated 12 hours before landfall.", date: "2024-11-03", href: "#", image: { src: "/images/orgs/search-and-rescue-boat-training-photo-1508514177221-188b1cf16e9d.jpg", alt: "Pre-positioned rescue boat deployment" } },
          { id: "dn2", slug: "monsoon-flood-response", title: "Monsoon Flood Response in East Bengal", summary: "Rescued 340 stranded citizens and set up 4 relief camps serving hot meals.", date: "2024-08-22", href: "#", image: { src: "/images/orgs/search-and-rescue-boat-training-photo-1508514177221-188b1cf16e9d.jpg", alt: "Flood rescue boat in village" } },
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
