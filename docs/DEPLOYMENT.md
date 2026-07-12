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

## 3. SEO & Metadata Setup
The template exports dynamic metadata. Ensure the following configurations inside `app/layout.tsx` match the final environment:
* Update base sitemap URLs inside `app/sitemap.ts`.
* Replace `favicon.ico` and OpenGraph logo assets inside the `/public` folder with actual organization branding before final launch.
