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
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about#team" },
        { label: "Annual Reports", href: "/reports" },
        { label: "Partners", href: "/partners" },
        { label: "Careers", href: "/careers" },
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
        { label: "Corporate Partnership", href: "/corporate" },
        { label: "Fundraise", href: "/fundraise" },
        { label: "Events", href: "/events" },
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
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
};
