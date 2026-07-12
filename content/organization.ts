/**
 * content/organization.ts
 *
 * SAMPLE organization config — replace with real org data.
 * This is the ONLY file an org admin needs to edit for branding.
 *
 * Demo org: "Vidyalaya Foundation" — Education NGO
 * Cause: Education access for underprivileged children
 */
import type { OrganizationConfig } from "@/types";

export const organization: OrganizationConfig = {
  id: "vidyalaya-foundation",
  name: "Vidyalaya Foundation",
  tagline: "Every child deserves a future worth dreaming about.",
  description:
    "Vidyalaya Foundation works to eliminate educational inequality by providing quality learning resources, scholarships, and mentorship programs to children from underserved communities across India.",
  logo: {
    src: "/images/logo.svg",
    alt: "Vidyalaya Foundation",
    width: 180,
    height: 40,
    priority: true,
  },
  logoDark: {
    src: "/images/logo-dark.svg",
    alt: "Vidyalaya Foundation",
    width: 180,
    height: 40,
    priority: true,
  },
  favicon: "/favicon.ico",
  registrationNumber: "NGO-2014-MH-04521",
  taxId: "80G-12AA-2014",
  founded: 2014,
  causeType: "education",
  contact: {
    email: "hello@vidyalaya.org",
    phone: "+91 98765 43210",
    address: {
      street: "24, Sankalp Nagar, Andheri East",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400069",
      country: "India",
    },
  },
  social: [
    { platform: "facebook", href: "https://facebook.com/vidyalayafoundation" },
    { platform: "instagram", href: "https://instagram.com/vidyalaya_org" },
    { platform: "twitter", href: "https://twitter.com/vidyalaya_org" },
    { platform: "linkedin", href: "https://linkedin.com/company/vidyalaya-foundation" },
    { platform: "youtube", href: "https://youtube.com/@vidyalayafoundation" },
  ],
  donateUrl: "https://crowdera.com/vidyalaya/donate",
  volunteerUrl: "https://crowdera.com/vidyalaya/volunteer",
  crowderaOrgId: "vidyalaya-2014",
};
