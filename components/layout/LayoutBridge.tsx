"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageWrapper, MainContent } from "@/components/layout/PageWrapper";
import { navigation } from "@/content/navigation";
import { footer } from "@/content/footer";
import { organization } from "@/content/organization";

export function LayoutBridge({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";
  const isSitePage = pathname.startsWith("/sites/");

  if (isSitePage) {
    // Site pages manage their own Navbar and Footer internally, and have no default navOffset pt-16
    return (
      <PageWrapper>
        <MainContent navOffset={false}>
          {children}
        </MainContent>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* Production Navbar — transparent on hero, filled on scroll */}
      <Navbar
        nav={navigation}
        org={{
          name: organization.name,
          logo: organization.logo,
          logoDark: organization.logoDark,
        }}
      />

      {/* Page content — pt-16 clears fixed 64px navbar */}
      <MainContent>
        {children}
      </MainContent>

      {/* Production Footer */}
      <Footer
        footer={footer}
        org={{
          name: organization.name,
          tagline: organization.tagline,
          contact: organization.contact,
          social: organization.social,
        }}
      />
    </PageWrapper>
  );
}
