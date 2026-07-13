/**
 * content/footer.ts
 *
 * Footer configuration.
 */
import type { FooterConfig } from "@/types";

export const footer: FooterConfig = {
  logo: {
    src: "/images/logo.svg",
    alt: "Crowdera",
    width: 160,
    height: 36,
  },
  logoDark: {
    src: "/images/logo-white.svg",
    alt: "Crowdera",
    width: 160,
    height: 36,
  },
  tagline: "Eliminating educational inequality, one child at a time.",
  linkGroups: [
    {
      id: "organization",
      heading: "Organization",
      links: [
        { label: "About Us", href: "/#about" },
        { label: "Our Team", href: "/#about" },
        { label: "Annual Reports", href: "/news/annual-impact-report-2024" },
        { label: "Partners", href: "/#gallery" },
      ],
    },
    {
      id: "programs",
      heading: "Programs",
      links: [
        { label: "Scholarship Program", href: "/programs/scholarships" },
        { label: "Digital Classrooms", href: "/programs/digital" },
        { label: "Mentorship", href: "/programs/mentorship" },
        { label: "Skill Development", href: "/programs/skills" },
      ],
    },
    {
      id: "get-involved",
      heading: "Get Involved",
      links: [
        { label: "Donate", href: "/donate" },
        { label: "Volunteer", href: "/volunteer" },
        { label: "Corporate Partnership", href: "/donate" },
        { label: "Fundraise", href: "/donate" },
        { label: "Events", href: "/#news" },
      ],
    },
    {
      id: "design-system",
      heading: "Design System",
      links: [
        { label: "Style Guide", href: "/style-guide" },
      ],
    },
  ],
  social: [
    { platform: "facebook", href: "https://facebook.com/crowdera" },
    { platform: "instagram", href: "https://instagram.com/crowdera" },
    { platform: "twitter", href: "https://twitter.com/crowdera" },
    { platform: "linkedin", href: "https://linkedin.com/company/crowdera" },
    { platform: "youtube", href: "https://youtube.com/@crowdera" },
  ],
  newsletter: {
    enabled: true,
    headline: "Stay connected with our work",
    placeholder: "Enter your email address",
    buttonLabel: "Subscribe",
  },
  legal: {
    copyright: "© {year} Crowdera. All rights reserved. Registered NGO: NGO-2014-MH-04521",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Use", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
    ],
  },
};
