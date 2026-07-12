# 🤝 Contributing Guide — Crowdera NGO Template System

Thank you for contributing to the Crowdera NGO Website Template System. Please review the development guidelines below.

---

## 1. Development Guidelines
* **Do NOT duplicate components**: Extend configurations or create variant mapping options inside existing components.
* **Keep layouts config-driven**: Do not hardcode copywriting strings or media assets in component markup.
* **Type Safety**: Ensure every component or utility includes full TypeScript type definitions.
* **Aria & Semantics**: Maintain WCAG AA standards. Ensure all buttons use proper aria attributes and contrast ratios.

---

## 2. Coding Conventions
* **Design Tokens**: Re-use existing tokens (`--color-primary`, `--radius-md`, etc.) inside Tailwind CSS classes.
* **Icons**: Use the Lucide React library. Set consistent default dimensions (`h-5 w-5`).
* **Animations**: Leverage Tailwind transitions or subtle Framer Motion effects. Always test with `prefers-reduced-motion` enabled.

---

## 3. Pull Request Standards
1. Add/Update tests where applicable.
2. Confirm compilation using `npm run build` or `npx tsc --noEmit`.
3. Document any custom properties added to the schemas in `types/content.ts` and `PROGRESS.md`.
