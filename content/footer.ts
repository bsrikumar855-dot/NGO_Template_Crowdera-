/**
 * content/footer.ts
 *
 * Footer configuration.
 */
import type { FooterConfig } from "@/types";

export const footer: FooterConfig = {
  logo: {
    src: "/images/logo.svg",
    alt: "Vidyalaya Foundation",
    width: 160,
    height: 36,
  },
  logoDark: {
    src: "/images/logo-white.svg",
    alt: "Vidyalaya Foundation",
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
    { platform: "facebook", href: "https://facebook.com/vidyalayafoundation" },
    { platform: "instagram", href: "https://instagram.com/vidyalaya_org" },
    { platform: "twitter", href: "https://twitter.com/vidyalaya_org" },
    { platform: "linkedin", href: "https://linkedin.com/company/vidyalaya-foundation" },
    { platform: "youtube", href: "https://youtube.com/@vidyalayafoundation" },
  ],
  newsletter: {
    enabled: true,
    headline: "Stay connected with our work",
    placeholder: "Enter your email address",
    buttonLabel: "Subscribe",
  },
  legal: {
    copyright: "© {year} Vidyalaya Foundation. All rights reserved. Registered NGO: NGO-2014-MH-04521",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
};
