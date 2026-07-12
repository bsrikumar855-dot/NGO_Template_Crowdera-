/**
 * content/navigation.ts
 *
 * Navigation configuration.
 * Max 6 items per spec (Obama Foundation pattern for scannability).
 */
import type { NavigationConfig } from "@/types";

export const navigation: NavigationConfig = {
  items: [
    {
      id: "nav-about",
      label: "About Us",
      href: "/#about",
    },
    {
      id: "nav-programs",
      label: "Programs",
      href: "/programs",
    },
    {
      id: "nav-impact",
      label: "Our Impact",
      href: "/#impact",
    },
    {
      id: "nav-gallery",
      label: "Gallery",
      href: "/#gallery",
    },
    {
      id: "nav-news",
      label: "News",
      href: "/#news",
    },
    {
      id: "nav-contact",
      label: "Contact",
      href: "/#footer",
    },
  ],
  cta: {
    label: "Donate Now",
    href: "/donate",
    variant: "donate",
  },
  showThemeToggle: false,
};
