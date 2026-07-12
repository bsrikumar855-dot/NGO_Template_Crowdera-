/**
 * app/layout.tsx
 *
 * Root Next.js App Router layout.
 * - Applies font variables
 * - Wraps app in ThemeProvider
 * - Sets global SEO defaults
 * - Renders Navbar + Footer placeholders
 * - Progressive enhancement: renders without JS
 */
import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { ThemeProvider } from "@/components/core/ThemeProvider";
import { NavbarPlaceholder } from "@/components/navigation/NavbarPlaceholder";
import { FooterPlaceholder } from "@/components/footer/FooterPlaceholder";
import { PageWrapper, MainContent } from "@/components/layout/PageWrapper";
import { organization } from "@/content/organization";
import { navigation } from "@/content/navigation";
import { footer } from "@/content/footer";
import { defaultTheme } from "@/themes/default";
import "@/app/globals.css";

/* ── SEO Metadata ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: `${organization.name} — ${organization.tagline}`,
    template: `%s | ${organization.name}`,
  },
  description: organization.description,
  keywords: [
    "NGO",
    "nonprofit",
    organization.causeType,
    organization.name,
    "donate",
    "volunteer",
  ],
  authors: [{ name: organization.name, url: organization.donateUrl }],
  creator: organization.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: organization.name,
    title: `${organization.name} — ${organization.tagline}`,
    description: organization.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${organization.name} — ${organization.tagline}`,
    description: organization.description,
  },
  icons: {
    icon: organization.favicon ?? "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f14" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ── Root Layout ─────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={fontVariables}
    >
      <body>
        <ThemeProvider themeConfig={defaultTheme} defaultTheme="system">
          <PageWrapper>
            {/* Site header — fixed, sticky */}
            <NavbarPlaceholder
              nav={navigation}
              org={{
                name: organization.name,
                logo: organization.logo,
                logoDark: organization.logoDark,
              }}
            />

            {/* Page content */}
            <MainContent>
              {children}
            </MainContent>

            {/* Site footer */}
            <FooterPlaceholder
              footer={footer}
              org={{
                name: organization.name,
                tagline: organization.tagline,
                contact: organization.contact,
                social: organization.social,
              }}
            />
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
