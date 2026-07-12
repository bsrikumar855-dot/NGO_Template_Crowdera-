/**
 * app/volunteer/page.tsx
 *
 * Dedicated Volunteer sign-up page for Crowdera.
 * Features a glassmorphic dark theme, responsive grid layout,
 * and client-side form validation with a submission success state.
 */
import * as React from "react";
import type { Metadata } from "next";
import VolunteerContent from "./VolunteerContent";

export const metadata: Metadata = {
  title: "Become a Volunteer — Crowdera",
  description: "Give your time, skills, and energy to empower children through education.",
};

export default function VolunteerPage() {
  return <VolunteerContent />;
}
