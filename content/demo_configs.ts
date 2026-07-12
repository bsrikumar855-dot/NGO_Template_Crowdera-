/**
 * content/demo_configs.ts
 *
 * Sample configurations for four cause areas:
 * - Education
 * - Healthcare
 * - Animal Welfare
 * - Environment
 *
 * Demonstrates configuration-driven theme and section variant switching.
 */
import type { OrganizationConfig, HomepageConfig, ThemeConfig } from "@/types";

/* ── Theme Presets ───────────────────────────────────────────── */

// 1. Education Theme: Navy + Gold
export const educationTheme: ThemeConfig = {
  id: "theme-education",
  name: "Education Blue",
  light: {
    colors: {
      primary: "224 76% 30%",
      primaryForeground: "0 0% 98%",
      primarySubtle: "224 76% 95%",
      secondary: "45 93% 47%",
      secondaryForeground: "0 0% 8%",
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
      success: "152 60% 35%",
      warning: "45 93% 47%",
      error: "0 84% 52%",
      background: "220 20% 98%",
      foreground: "224 30% 10%",
      surface: "0 0% 100%",
      surfaceElevated: "0 0% 100%",
      border: "220 14% 88%",
      muted: "220 16% 95%",
      mutedForeground: "220 10% 46%",
      ring: "224 76% 30%",
    },
  },
  dark: {
    colors: {
      primary: "224 76% 55%",
      primaryForeground: "224 30% 8%",
      primarySubtle: "224 76% 12%",
      secondary: "45 93% 60%",
      secondaryForeground: "224 30% 6%",
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
      success: "152 60% 55%",
      warning: "45 93% 65%",
      error: "0 84% 65%",
      background: "222 25% 7%",
      foreground: "220 15% 94%",
      surface: "222 20% 10%",
      surfaceElevated: "222 16% 13%",
      border: "222 14% 18%",
      muted: "222 16% 13%",
      mutedForeground: "222 10% 55%",
      ring: "224 76% 55%",
    },
  },
};

// 2. Healthcare Theme: Teal + Orange
export const healthcareTheme: ThemeConfig = {
  id: "theme-healthcare",
  name: "Health Teal",
  light: {
    colors: {
      primary: "174 84% 28%",
      primaryForeground: "0 0% 98%",
      primarySubtle: "174 84% 96%",
      secondary: "24 95% 50%",
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
      warning: "24 95% 50%",
      error: "0 84% 52%",
      background: "180 8% 98%",
      foreground: "180 15% 10%",
      surface: "0 0% 100%",
      surfaceElevated: "0 0% 100%",
      border: "180 5% 88%",
      muted: "180 6% 95%",
      mutedForeground: "180 3% 44%",
      ring: "174 84% 28%",
    },
  },
  dark: {
    colors: {
      primary: "174 65% 45%",
      primaryForeground: "180 10% 5%",
      primarySubtle: "174 84% 10%",
      secondary: "24 85% 55%",
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
      warning: "24 95% 60%",
      error: "0 84% 60%",
      background: "180 10% 6%",
      foreground: "180 5% 92%",
      surface: "180 8% 10%",
      surfaceElevated: "180 6% 14%",
      border: "180 5% 18%",
      muted: "180 6% 14%",
      mutedForeground: "180 3% 50%",
      ring: "174 65% 45%",
    },
  },
};

// 3. Animal Welfare: Green + Brown
export const animalTheme: ThemeConfig = {
  id: "theme-animal",
  name: "Animal Olive",
  light: {
    colors: {
      primary: "84 62% 28%",
      primaryForeground: "0 0% 98%",
      primarySubtle: "84 62% 95%",
      secondary: "32 74% 43%",
      secondaryForeground: "0 0% 98%",
      neutral: {
        50: "60 9%   98%",
        100: "60 7%   95%",
        200: "60 6%   90%",
        300: "60 5%   80%",
        400: "60 4%   62%",
        500: "60 4%   44%",
        600: "60 5%   34%",
        700: "60 6%   25%",
        800: "60 7%   18%",
        900: "60 9%   12%",
        950: "60 12%  6%",
      },
      success: "142 71% 35%",
      warning: "32 74% 43%",
      error: "0 84% 52%",
      background: "60 9% 98%",
      foreground: "60 15% 10%",
      surface: "0 0% 100%",
      surfaceElevated: "0 0% 100%",
      border: "60 6% 88%",
      muted: "60 7% 95%",
      mutedForeground: "60 4% 44%",
      ring: "84 62% 28%",
    },
  },
  dark: {
    colors: {
      primary: "84 50% 45%",
      primaryForeground: "60 12% 5%",
      primarySubtle: "84 62% 10%",
      secondary: "32 68% 52%",
      secondaryForeground: "60 12% 5%",
      neutral: {
        50: "60 12%  5%",
        100: "60 9%   8%",
        200: "60 7%   12%",
        300: "60 6%   18%",
        400: "60 5%   32%",
        500: "60 4%   50%",
        600: "60 5%   64%",
        700: "60 6%   75%",
        800: "60 7%   84%",
        900: "60 9%   92%",
        950: "60 12%  97%",
      },
      success: "142 71% 45%",
      warning: "32 74% 55%",
      error: "0 84% 60%",
      background: "60 12%  6%",
      foreground: "60 5%  92%",
      surface: "60 8%  10%",
      surfaceElevated: "60 6%  14%",
      border: "60 5%  18%",
      muted: "60 6%  14%",
      mutedForeground: "60 4%  50%",
      ring: "84 50% 45%",
    },
  },
};

// 4. Environment: Emerald + Forest
export const environmentTheme: ThemeConfig = {
  id: "theme-environment",
  name: "Eco Forest",
  light: {
    colors: {
      primary: "142 76% 23%",
      primaryForeground: "0 0% 98%",
      primarySubtle: "142 76% 95%",
      secondary: "158 64% 45%",
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
      warning: "158 64% 45%",
      error: "0 84% 52%",
      background: "120 4% 98%",
      foreground: "120 10% 10%",
      surface: "0 0% 100%",
      surfaceElevated: "0 0% 100%",
      border: "120 3% 88%",
      muted: "120 3% 95%",
      mutedForeground: "120 2% 44%",
      ring: "142 76% 23%",
    },
  },
  dark: {
    colors: {
      primary: "142 60% 40%",
      primaryForeground: "120 8%  5%",
      primarySubtle: "142 76% 8%",
      secondary: "158 55% 52%",
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
      success: "142 71% 40%",
      warning: "158 64% 55%",
      error: "0 84% 60%",
      background: "120 8%  6%",
      foreground: "120 4%  92%",
      surface: "120 6%  10%",
      surfaceElevated: "120 5%  14%",
      border: "120 4%  18%",
      muted: "120 5%  14%",
      mutedForeground: "120 2%  50%",
      ring: "142 60% 40%",
    },
  },
};

/* ── Cause Pre-configured Sets ───────────────────────────────── */

export interface CausePreset {
  name: string;
  causeType: string;
  icon: string;
  org: OrganizationConfig;
  theme: ThemeConfig;
  homepage: HomepageConfig;
}

export const causePresets: Record<string, CausePreset> = {
  education: {
    name: "Education Access",
    causeType: "Education",
    icon: "GraduationCap",
    theme: educationTheme,
    org: {
      id: "demo-education",
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
            id: "slide-1",
            headline: "Knowledge is Freedom & Opportunity",
            subheadline: "Directly funding K-12 education, scholarships, and resources for rural schools.",
            media: { src: "/images/hero/hero-1.jpg", alt: "Classroom", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Sponsor A Child", href: "/donate" },
            secondaryCta: { label: "Learn More", href: "/#about" },
          },
        ],
      },
      about: {
        variant: "text-image",
        badge: "Who We Are",
        headline: "Breaking the Cycle of Poverty Through Classrooms",
        body: ["Over 12,000 students enrolled across our active regional learning hubs."],
        media: { src: "/images/about/team-working.jpg", alt: "Students", width: 600, height: 450 },
        cta: { label: "Our Mission", href: "/#about" },
      },
      stats: {
        theme: "primary",
        items: [
          { id: "e1", value: 12000, label: "Students", icon: "Users" },
          { id: "e2", value: 47, label: "Learning Centres", icon: "Building2" },
        ],
      },
      programs: {
        variant: "carousel",
        badge: "Our Focus",
        headline: "Educational Programs",
        items: [
          { id: "p1", badge: "K-12", title: "Rural Scholarships", description: "Support for rural kids.", cta: { label: "View Details", href: "/programs" }, tags: ["Rural", "Scholarships"] },
          { id: "p2", badge: "Technology", title: "Digital Labs", description: "Laptops and tools.", cta: { label: "View Details", href: "/programs" }, tags: ["Tech", "Solar"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Voices",
        headline: "Impact Stories",
        items: [
          { id: "t1", quote: "They changed my life completely.", authorName: "Priya", authorRole: "Graduate" },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Field Gallery",
        headline: "Work in Action",
        items: [
          { id: "g1", type: "image", media: { src: "/images/gallery/classroom-1.jpg", alt: "Classroom" }, category: "Classroom" },
          { id: "g2", type: "image", media: { src: "/images/gallery/children-1.jpg", alt: "Children" }, category: "Children" },
        ],
      },
      news: {
        variant: "cards",
        badge: "Updates",
        headline: "Latest Headlines",
        items: [
          { id: "n1", title: "IIT Admissions Surge", summary: "Students score high ranks.", date: "2024-07-20", href: "#", image: { src: "/images/news/news-1.jpg", alt: "IIT" } },
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
    name: "Healthcare Support",
    causeType: "Healthcare",
    icon: "HeartPulse",
    theme: healthcareTheme,
    org: {
      id: "demo-healthcare",
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
            id: "slide-1",
            headline: "Healing Lives, One Village at a Time",
            subheadline: "Providing healthcare camps, essential medicines, and maternal care support.",
            media: { src: "/images/hero/hero-2.jpg", alt: "Doctor with child", width: 1200, height: 600 },
            overlayOpacity: 0.5,
            primaryCta: { label: "Fund Clinic", href: "/donate" },
            secondaryCta: { label: "Watch Video", href: "#" },
          },
        ],
      },
      about: {
        variant: "icon-grid",
        badge: "Our Purpose",
        headline: "Radical Healthcare Outreach",
        body: ["We establish temporary diagnostic and relief centers directly inside remote pockets."],
        media: { src: "/images/about/team-working.jpg", alt: "Outreach Team", width: 600, height: 450 },
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
        ],
      },
      programs: {
        variant: "grid",
        badge: "Services",
        headline: "Medical Interventions",
        items: [
          { id: "p1", badge: "Clinic", title: "Mobile Wellness Clinics", description: "Outpatient clinical services.", cta: { label: "View Program", href: "/programs" }, tags: ["Mobile", "Primary Care"] },
          { id: "p2", badge: "Maternal", title: "Safe Motherhood Camps", description: "Pre-natal and post-natal care.", cta: { label: "View Program", href: "/programs" }, tags: ["Women", "Health"] },
        ],
      },
      testimonials: {
        variant: "masonry",
        badge: "Impact",
        headline: "Patient Testimonials",
        items: [
          { id: "t1", quote: "The clinic visited our village just in time.", authorName: "Savitri", authorRole: "Mother" },
        ],
      },
      gallery: {
        variant: "grid",
        badge: "Moments",
        headline: "On-Ground Diagnostics",
        items: [
          { id: "g1", type: "image", media: { src: "/images/gallery/classroom-2.jpg", alt: "Doctor" }, category: "Diagnostics" },
        ],
      },
      news: {
        variant: "magazine",
        badge: "Stories",
        headline: "Health Updates",
        items: [
          { id: "n1", title: "Combating Malnutrition in Tribal Districts", summary: "Providing food supplements.", date: "2024-10-01", href: "#", image: { src: "/images/news/news-2.jpg", alt: "Supplements" } },
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
    name: "Animal Welfare",
    causeType: "Animal Welfare",
    icon: "PawPrint",
    theme: animalTheme,
    org: {
      id: "demo-animal",
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
            id: "slide-1",
            headline: "Provide Shelters & Healing for Abandoned Paws",
            subheadline: "Rescuing injured strays, managing foster networks, and funding vaccinations.",
            media: { src: "/images/hero/hero-3.jpg", alt: "Happy rescued dog", width: 1200, height: 600 },
            overlayOpacity: 0.4,
            primaryCta: { label: "Sponsor A Pet", href: "/donate" },
            secondaryCta: { label: "Volunteer At Shelter", href: "#" },
          },
        ],
      },
      about: {
        variant: "image-text",
        badge: "Who We Are",
        headline: "Every Dog & Cat Deserves Safety",
        body: ["We work 24/7 to respond to medical emergency calls for strays across the city."],
        media: { src: "/images/about/team-working.jpg", alt: "Shelter life", width: 600, height: 450 },
        cta: { label: "Shelter Tour", href: "/#about" },
      },
      stats: {
        theme: "primary",
        items: [
          { id: "a1", value: 3400, label: "Rescues Made", icon: "Activity" },
          { id: "a2", value: 1200, label: "Sterilizations", icon: "Check" },
        ],
      },
      programs: {
        variant: "grid",
        badge: "Rescue Actions",
        headline: "What We Run",
        items: [
          { id: "p1", badge: "Emergency", title: "Ambulance & Trauma Care", description: "Emergency pickup for wounded strays.", cta: { label: "Details", href: "/programs" }, tags: ["Trauma", "24/7"] },
          { id: "p2", badge: "Spay/Neuter", title: "ABC (Animal Birth Control)", description: "Humane population control.", cta: { label: "Details", href: "/programs" }, tags: ["ABC", "Vaccination"] },
        ],
      },
      testimonials: {
        variant: "featured",
        badge: "Adoptions",
        headline: "Happy Tails",
        items: [
          { id: "t1", quote: "Adopting Milo was the best decision our family ever made.", authorName: "Karan", authorRole: "Pet Parent" },
        ],
      },
      gallery: {
        variant: "carousel",
        badge: "Shelter Pups",
        headline: "Adoptable Animals",
        items: [
          { id: "g1", type: "image", media: { src: "/images/gallery/children-1.jpg", alt: "Puppy" }, category: "Puppies" },
        ],
      },
      news: {
        variant: "timeline",
        badge: "Journal",
        headline: "Shelter Stories",
        items: [
          { id: "n1", title: "Rescue of Bruno from an Open Pit", summary: "Saved by our trauma unit.", date: "2024-07-20", href: "#", image: { src: "/images/news/news-3.jpg", alt: "Dog Rescue" } },
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
    name: "Environment Protection",
    causeType: "Environment",
    icon: "TreeDeciduous",
    theme: environmentTheme,
    org: {
      id: "demo-environment",
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
            id: "slide-1",
            headline: "Let's Plant a Future for Our Planet",
            subheadline: "Help us plant 100,000 native saplings in degraded forest corridors.",
            media: { src: "/images/hero/hero-1.jpg", alt: "Planting trees", width: 1200, height: 600 },
            overlayOpacity: 0.45,
            primaryCta: { label: "Plant Trees", href: "/donate" },
            secondaryCta: { label: "Volunteer Nearby", href: "#" },
          },
        ],
      },
      about: {
        variant: "text-only",
        badge: "Our Philosophy",
        headline: "Lake Recovery & Re-Wilding",
        body: ["Degraded urban ecosystems can recover rapidly if native flora is re-seeded properly."],
        media: { src: "/images/about/team-working.jpg", alt: "Lake Cleanup", width: 600, height: 450 },
        cta: { label: "Afforestation Data", href: "/#about" },
      },
      stats: {
        theme: "primary",
        items: [
          { id: "v1", value: 85000, label: "Trees Planted", icon: "TreeDeciduous" },
          { id: "v2", value: 14, label: "Lakes Restored", icon: "Droplet" },
        ],
      },
      programs: {
        variant: "carousel",
        badge: "Direct Action",
        headline: "Our Ecological Campaigns",
        items: [
          { id: "p1", badge: "Forestry", title: "Miyawaki Urban Forests", description: "Dense green patches.", cta: { label: "Read Project", href: "/programs" }, tags: ["Urban", "Miyawaki"] },
          { id: "p2", badge: "Watershed", title: "Lake Restoration System", description: "De-silting and clean inlets.", cta: { label: "Read Project", href: "/programs" }, tags: ["Water", "Ecology"] },
        ],
      },
      testimonials: {
        variant: "carousel",
        badge: "Partners",
        headline: "Corporate Feedback",
        items: [
          { id: "t1", quote: "EcoShield made our CSR carbon offsets easy to audit and track.", authorName: "Anjali", authorRole: "Sustainability Director" },
        ],
      },
      gallery: {
        variant: "masonry",
        badge: "Saplings",
        headline: "Nursery Work",
        items: [
          { id: "g1", type: "image", media: { src: "/images/gallery/volunteers-1.jpg", alt: "Nursery" }, category: "Nursery" },
        ],
      },
      news: {
        variant: "timeline",
        badge: "Updates",
        headline: "Green News",
        items: [
          { id: "n1", title: "Inauguration of the Pallikaranai Marsh Nursery", summary: "10,000 wetland saplings.", date: "2024-07-20", href: "#", image: { src: "/images/news/news-1.jpg", alt: "Nursery" } },
        ],
      },
      ctaBand: {
        variant: "image-background",
        theme: "image",
        backgroundImage: { src: "/images/hero/hero-1.jpg", alt: "Green canopy" },
        badge: "Act Now",
        headline: "Combat Global Warming. Support Reforestation.",
        subheadline: "Every ₹100 plants one native tree and maintains it for two years.",
        primaryCta: { label: "Plant A Tree Now", href: "/donate" },
      },
    },
  },
};
