# 🚀 Deployment Guide — Crowdera NGO Template System

This guide outlines deployment parameters, builds, and optimizations.

---

## 1. Local Production Build Test
To test the production build locally:
```bash
npm run build
npm run start
```
This builds static assets and dynamic route pages inside the `.next/` directory.

---

## 2. Platform Integrations (Vercel, Netlify, AWS)
This is a standard Next.js 14 App Router project:
* **Build Command**: `npm run build`
* **Output Directory**: `.next`
* **Node Version**: `18.x` or `20.x`

---

## 3. Self-Hosted Asset Pipeline & Fallback Resolution
To ensure 100% production readiness and independence from third-party CDN latency, rate-limiting, or deletion of external resources, the system is fully self-hosted. 
* **Asset Directory**: All primary image assets are stored locally in the `/public/images/orgs/` directory.
* **Build-Time Verification**: During the Next.js compilation step (`next.config.mjs`) and via `scripts/download-images.js`, the compiler automatically runs a validation loop checking for the presence of all 27 pre-configured organization assets on disk.
* **Resilient Fallback Resolution**: If a remote asset becomes unavailable or returns a `404` status on Unsplash, the compiler resolves it gracefully by copying high-quality, category-specific local fallbacks (e.g. disaster relief fallbacks for disaster websites, medical fallbacks for healthcare, etc.). This ensures zero broken images and complete visual integrity during builds.

---

## 4. SEO & Metadata Setup
The template exports dynamic metadata. Ensure the following configurations inside `app/layout.tsx` match the final environment:
* Update base sitemap URLs inside `app/sitemap.ts`.
* Replace `favicon.ico` and OpenGraph logo assets inside the `/public` folder with actual organization branding before final launch.
