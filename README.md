# Fresh Graduate Portfolio — Tailwind **v4.1 (latest)** + CLI + Modular JS

A professional, HR‑friendly portfolio scaffolded with Tailwind **v4.1.x** and **@tailwindcss/cli**. Uses the CSS‑first setup (`@import "tailwindcss";`) and **JavaScript‑only** animations.

## Quick start

```bash
npm i
npm run dev    # builds ./public/output.css and watches
# or
npm run build  # minified build
# open public/index.html in your browser
```

### Why this setup?
- **Latest Tailwind v4.1** + **@tailwindcss/cli** (separate CLI package).
- **CSS‑first config:** no `tailwind.config.js` required.
- **Automatic content detection** (v4) — we also add `@source "./public"` in `src/input.css` for clarity.
- **Dark mode** via `.dark` class using `@custom-variant dark`.
- **OKLCH brand palette** (indigo → emerald → amber) for a fresh, accessible color combo.
- **Modular JS** (`public/js/`) for animations and DOM helpers.

## Structure

```
portfolio-tailwind-v4.1-latest/
├─ package.json
├─ src/
│  └─ input.css            # Tailwind v4 CSS-first config + tokens/utilities
└─ public/
   ├─ index.html           # Portfolio content
   ├─ output.css           # (generated) — run dev/build
   └─ js/
      ├─ app.js            # bootstraps theme/menu and animations
      └─ ui/
         ├─ animate.js     # all JS-only animations
         └─ dom.js         # tiny DOM helpers
```

## Sections included
- About me (short intro)
- Education (2 bullets)
- Relevant Experience (2 bullets, each with 3 sub-bullets)
- Skills
- Certificates
- References
- Contacts

## Customize
Open `public/index.html` and replace placeholders (name, links, education, experience, etc.). Add `public/resume.pdf` to enable the “Download CV” buttons.

---

**Tailwind v4 CLI reference:** install with `npm install tailwindcss @tailwindcss/cli`, import with `@import "tailwindcss";`, and build via `npx @tailwindcss/cli`.
