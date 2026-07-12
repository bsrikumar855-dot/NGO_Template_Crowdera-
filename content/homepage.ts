/**
 * content/homepage.ts
 *
 * Homepage section configuration objects.
 * Every section on the homepage renders from this file.
 * Swap this file to re-skin for any organization.
 */
import type { HomepageConfig } from "@/types";

export const homepage: HomepageConfig = {
  seo: {
    title: "Vidyalaya Foundation — Empowering Education for All",
    description:
      "Vidyalaya Foundation eliminates educational inequality by providing scholarships, digital classrooms, and mentorship to underprivileged children across India.",
    ogImage: "/images/og-image.jpg",
    keywords: [
      "NGO",
      "education",
      "scholarship",
      "underprivileged children",
      "India",
      "nonprofit",
    ],
  },

  /* ── Hero ─────────────────────────────────────────────────── */
  hero: {
    variant: "carousel",
    autoplay: true,
    autoplayInterval: 6000,
    showScrollIndicator: true,
    slides: [
      {
        id: "hero-1",
        headline: "Every Child Deserves a Future Worth Dreaming About",
        subheadline:
          "Join us in making quality education accessible to every child, regardless of their circumstances.",
        media: {
          src: "/images/hero/hero-1.jpg",
          alt: "Children studying in a bright classroom",
          width: 1920,
          height: 1080,
          priority: true,
        },
        overlayOpacity: 0.5,
        primaryCta: { label: "Donate Today", href: "/donate", variant: "donate" },
        secondaryCta: { label: "Learn More", href: "/about", variant: "ghost" },
      },
      {
        id: "hero-2",
        headline: "12,000+ Children Reached. Millions More Need Us.",
        subheadline:
          "Your contribution directly funds scholarships, books, and digital tools for children in need.",
        media: {
          src: "/images/hero/hero-2.jpg",
          alt: "A girl receiving a scholarship certificate",
          width: 1920,
          height: 1080,
        },
        overlayOpacity: 0.55,
        primaryCta: { label: "Give Now", href: "/donate", variant: "donate" },
        secondaryCta: { label: "See Our Impact", href: "/#impact", variant: "secondary" },
      },
      {
        id: "hero-3",
        headline: "Build Digital Classrooms in Rural India",
        subheadline:
          "Technology should not be a privilege. Help us set up digital learning centres in remote schools.",
        media: {
          src: "/images/hero/hero-3.jpg",
          alt: "Students using tablets in a rural classroom",
          width: 1920,
          height: 1080,
        },
        overlayOpacity: 0.5,
        primaryCta: { label: "Fund a Classroom", href: "/programs/digital", variant: "donate" },
        secondaryCta: { label: "Explore Programs", href: "/programs", variant: "ghost" },
      },
    ],
  },

  /* ── About ────────────────────────────────────────────────── */
  about: {
    layout: "text-image",
    badge: "Our Story",
    headline: "We Believe Education is the Greatest Equalizer",
    body: [
      "Founded in 2014, Vidyalaya Foundation began with a single school, three volunteers, and an unwavering belief: that the accident of birth should never determine the ceiling of a child's ambition.",
      "Today, we operate 47 learning centres across 6 Indian states, delivering structured academic support, mentorship, and digital skill training to over 12,000 children from underprivileged households.",
      "Our model is transparent, measurable, and community-driven. Every rupee donated maps directly to a child's learning journey — trackable in real time through our impact dashboard.",
    ],
    media: {
      src: "/images/about/team-working.jpg",
      alt: "Vidyalaya volunteers working with children in a classroom",
      width: 800,
      height: 600,
    },
    cta: { label: "Read Our Story", href: "/about", variant: "secondary" },
    stats: [
      { value: "12K+", label: "Children Reached" },
      { value: "47", label: "Learning Centres" },
      { value: "6", label: "States" },
    ],
  },

  /* ── Impact Stats ─────────────────────────────────────────── */
  stats: {
    badge: "Our Impact",
    headline: "Numbers That Tell Our Story",
    subheadline:
      "Radical transparency is at the core of everything we do. Here is our impact — verified and audited annually.",
    theme: "primary",
    countDuration: 2000,
    items: [
      {
        id: "stat-children",
        value: 12847,
        suffix: "+",
        label: "Children Educated",
        description: "Directly enrolled in our programs",
        icon: "Users",
      },
      {
        id: "stat-centres",
        value: 47,
        label: "Learning Centres",
        description: "Active across 6 states",
        icon: "Building2",
      },
      {
        id: "stat-scholarships",
        value: 3200,
        suffix: "+",
        label: "Scholarships Awarded",
        description: "Full & partial support provided",
        icon: "GraduationCap",
      },
      {
        id: "stat-donated",
        value: 4.7,
        suffix: "Cr+",
        prefix: "₹",
        label: "Raised & Deployed",
        description: "92% goes directly to programs",
        icon: "IndianRupee",
      },
    ],
  },

  /* ── Programs ─────────────────────────────────────────────── */
  programs: {
    badge: "What We Do",
    headline: "Programs Designed for Lasting Change",
    subheadline:
      "Each program is rigorously evaluated for impact. We build what works, scale what works, and retire what doesn't.",
    carouselThreshold: 3,
    items: [
      {
        id: "program-scholarships",
        image: {
          src: "/images/programs/scholarships.jpg",
          alt: "A student with a scholarship award letter",
          width: 800,
          height: 500,
        },
        badge: "Education",
        title: "Merit & Need Scholarships",
        description:
          "Full and partial scholarships for children from BPL families, covering tuition, books, uniforms, and transport.",
        cta: { label: "Learn More", href: "/programs/scholarships" },
        tags: ["Scholarships", "BPL Families", "K-12"],
        featured: true,
      },
      {
        id: "program-digital",
        image: {
          src: "/images/programs/digital-classrooms.jpg",
          alt: "Students using laptops in a digital classroom",
          width: 800,
          height: 500,
        },
        badge: "Technology",
        title: "Digital Classroom Initiative",
        description:
          "Setting up solar-powered, tablet-equipped digital learning centres in schools with no internet access.",
        cta: { label: "Learn More", href: "/programs/digital" },
        tags: ["EdTech", "Rural", "Digital Equity"],
        featured: true,
      },
      {
        id: "program-mentorship",
        image: {
          src: "/images/programs/mentorship.jpg",
          alt: "A mentor and student reviewing study materials",
          width: 800,
          height: 500,
        },
        badge: "Mentorship",
        title: "Career Mentorship Program",
        description:
          "Pairing students aged 14–18 with industry professionals for career guidance, skill development, and internship support.",
        cta: { label: "Learn More", href: "/programs/mentorship" },
        tags: ["Career", "Youth", "Skill Building"],
        featured: true,
      },
      {
        id: "program-skills",
        image: {
          src: "/images/programs/skills.jpg",
          alt: "Youth learning vocational skills",
          width: 800,
          height: 500,
        },
        badge: "Vocational",
        title: "Skill Development Labs",
        description:
          "Industry-aligned vocational training for school dropouts and youth aged 16–25, in trades like coding, tailoring, and repair.",
        cta: { label: "Learn More", href: "/programs/skills" },
        tags: ["Vocational", "Dropouts", "Employment"],
      },
    ],
    cta: { label: "View All Programs", href: "/programs", variant: "secondary" },
  },

  /* ── Testimonials ─────────────────────────────────────────── */
  testimonials: {
    badge: "Voices of Change",
    headline: "Stories That Drive Us Forward",
    subheadline: "From the children we serve, the families we support, and the donors who make it possible.",
    autoplay: true,
    autoplayInterval: 7000,
    items: [
      {
        id: "testimonial-1",
        quote:
          "I never thought I'd finish school. Vidyalaya gave me not just a scholarship, but a belief that I belong here.",
        authorName: "Priya Sharma",
        authorRole: "Scholarship Recipient",
        authorOrg: "Class XII, Government High School, Pune",
        authorImage: {
          src: "/images/testimonials/priya.jpg",
          alt: "Priya Sharma",
          width: 80,
          height: 80,
        },
        rating: 5,
        featured: true,
      },
      {
        id: "testimonial-2",
        quote:
          "Watching a first-generation learner code their first app was the most moving experience of my career.",
        authorName: "Rajan Mehta",
        authorRole: "Corporate Mentor",
        authorOrg: "Senior Engineer, Infosys",
        authorImage: {
          src: "/images/testimonials/rajan.jpg",
          alt: "Rajan Mehta",
          width: 80,
          height: 80,
        },
        rating: 5,
      },
      {
        id: "testimonial-3",
        quote:
          "Every quarterly report shows exactly where our donation went. That level of transparency is rare and deeply reassuring.",
        authorName: "Dr. Sunita Kapoor",
        authorRole: "Donor since 2019",
        authorOrg: "Paediatrician, AIIMS Delhi",
        authorImage: {
          src: "/images/testimonials/sunita.jpg",
          alt: "Dr. Sunita Kapoor",
          width: 80,
          height: 80,
        },
        rating: 5,
      },
    ],
  },

  /* ── Gallery ──────────────────────────────────────────────── */
  gallery: {
    badge: "In the Field",
    headline: "See Our Work Up Close",
    subheadline:
      "From bustling classrooms to remote villages — this is what change looks like on the ground.",
    defaultView: "masonry",
    enableLightbox: true,
    categories: ["All", "Classrooms", "Events", "Children", "Volunteers"],
    items: [
      {
        id: "gallery-1",
        type: "image",
        media: {
          src: "/images/gallery/classroom-1.jpg",
          alt: "Children learning in a bright modern classroom",
          width: 800,
          height: 600,
        },
        caption: "Digital Classroom launch in Nagpur, 2024",
        category: "Classrooms",
      },
      {
        id: "gallery-2",
        type: "image",
        media: {
          src: "/images/gallery/event-1.jpg",
          alt: "Annual scholarship ceremony with children on stage",
          width: 800,
          height: 1000,
        },
        caption: "Annual Scholarship Day 2024",
        category: "Events",
      },
      {
        id: "gallery-3",
        type: "image",
        media: {
          src: "/images/gallery/children-1.jpg",
          alt: "Three smiling children holding their certificates",
          width: 800,
          height: 600,
        },
        caption: "First-generation graduates, Pune cohort",
        category: "Children",
      },
      {
        id: "gallery-4",
        type: "image",
        media: {
          src: "/images/gallery/volunteers-1.jpg",
          alt: "Volunteers working with students in a rural school",
          width: 800,
          height: 600,
        },
        caption: "Weekend volunteer session, Nashik",
        category: "Volunteers",
      },
      {
        id: "gallery-5",
        type: "image",
        media: {
          src: "/images/gallery/classroom-2.jpg",
          alt: "Student using a tablet for the first time",
          width: 800,
          height: 1000,
        },
        caption: "First encounter with a tablet, Vidarbha",
        category: "Classrooms",
      },
      {
        id: "gallery-6",
        type: "image",
        media: {
          src: "/images/gallery/event-2.jpg",
          alt: "Community gathering for fundraiser walk",
          width: 800,
          height: 600,
        },
        caption: "Walk for Education, Mumbai 2024",
        category: "Events",
      },
    ],
  },

  /* ── News ─────────────────────────────────────────────────── */
  news: {
    badge: "Latest Updates",
    headline: "News & Stories",
    subheadline: "What's happening at Vidyalaya — field updates, reports, and impact stories.",
    postsPerRow: 3,
    items: [
      {
        id: "news-1",
        slug: "digital-classroom-launch-vidarbha",
        image: {
          src: "/images/news/news-1.jpg",
          alt: "Officials inaugurating a new digital classroom in Vidarbha",
          width: 800,
          height: 450,
        },
        category: "Program Update",
        date: "2024-11-15T09:00:00Z",
        title: "We Just Launched Our 47th Digital Classroom in Vidarbha",
        summary:
          "Our newest solar-powered digital classroom goes live in Amravati, giving 240 children access to quality learning tools for the first time.",
        author: "Aisha Patel",
        readTime: 4,
        href: "/news/digital-classroom-launch-vidarbha",
      },
      {
        id: "news-2",
        slug: "annual-impact-report-2024",
        image: {
          src: "/images/news/news-2.jpg",
          alt: "Cover of Vidyalaya 2024 Annual Impact Report",
          width: 800,
          height: 450,
        },
        category: "Transparency",
        date: "2024-10-01T09:00:00Z",
        title: "Annual Impact Report 2024: Where Every Rupee Went",
        summary:
          "Our fully audited impact report is now public. 92% program allocation, 8% admin. Full fund-to-project mapping included.",
        author: "Vikram Nair",
        readTime: 6,
        href: "/news/annual-impact-report-2024",
      },
      {
        id: "news-3",
        slug: "priya-sharma-iit-admission",
        image: {
          src: "/images/news/news-3.jpg",
          alt: "Priya Sharma celebrating her IIT admission",
          width: 800,
          height: 450,
        },
        category: "Success Story",
        date: "2024-07-20T09:00:00Z",
        title: "From a Slum School to IIT: Priya's Extraordinary Journey",
        summary:
          "Priya Sharma, who joined our program in Class 5, has secured admission to IIT Bombay for Computer Science. She's the first in her family to pursue higher education.",
        author: "Meera Singh",
        readTime: 5,
        href: "/news/priya-sharma-iit-admission",
      },
    ],
    cta: { label: "View All Stories", href: "/news", variant: "secondary" },
  },

  /* ── CTA Band ─────────────────────────────────────────────── */
  ctaBand: {
    theme: "primary",
    badge: "Make A Difference",
    headline: "One Donation. One Child. One Future Changed Forever.",
    subheadline:
      "₹500 funds a month of meals. ₹2,000 covers a child's books for a year. ₹10,000 funds a full scholarship term. Every amount matters.",
    primaryCta: {
      label: "Donate Now",
      href: "/donate",
      variant: "donate",
    },
    secondaryCta: {
      label: "Become a Volunteer",
      href: "/volunteer",
      variant: "secondary",
    },
  },
};
