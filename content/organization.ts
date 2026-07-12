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
  id: "crowdera-foundation",
  name: "Crowdera",
  tagline: "Every child deserves a future worth dreaming about.",
  description:
    "Crowdera works to eliminate educational inequality by providing quality learning resources, scholarships, and mentorship programs to children from underserved communities across India.",
  logo: {
    src: "/images/logo.svg",
    alt: "Crowdera",
    width: 180,
    height: 40,
    priority: true,
  },
  logoDark: {
    src: "/images/logo-dark.svg",
    alt: "Crowdera",
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
    email: "bsrikumar855@gmail.com",
    phone: "+91 81224 56608",
    address: {
      street: "24, Sankalp Nagar, Andheri East",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400069",
      country: "India",
    },
  },
  social: [
    { platform: "facebook", href: "https://facebook.com/crowdera" },
    { platform: "instagram", href: "https://instagram.com/crowdera" },
    { platform: "twitter", href: "https://twitter.com/crowdera" },
    { platform: "linkedin", href: "https://linkedin.com/company/crowdera" },
    { platform: "youtube", href: "https://youtube.com/@crowdera" },
  ],
  donateUrl: "https://crowdera.com/donate",
  volunteerUrl: "https://crowdera.com/volunteer",
  crowderaOrgId: "crowdera-2014",
};
