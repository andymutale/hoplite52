# Andy Mutale — Portfolio (Next.js)

A Next.js 14 App Router conversion of the original single-file HTML portfolio.

## Stack

- **Next.js 14** — App Router
- **TypeScript** — fully typed
- **Google Fonts** — Instrument Serif + Geist via `next/font`
- **CSS custom properties** — no CSS framework, faithful to original design tokens

## Project structure

```
├── app/
│   ├── globals.css       # All CSS (design tokens, layout, components)
│   ├── layout.tsx        # Root layout — fonts, metadata
│   └── page.tsx          # Home page — composes all sections
├── components/
│   ├── Header.tsx        # Sticky nav bar
│   ├── IdentityStrip.tsx # Hero name + availability
│   ├── ProjectFeed.tsx   # Filter bar + project rows + notes + about (client)
│   ├── CaseStudyPanel.tsx# Slide-in case study drawer (client)
│   ├── MiniGrid.tsx      # Animated yellow grid thumbnail (client)
│   └── Footer.tsx        # Copyright + links
├── data/
│   ├── projects.ts       # All 7 projects + case study content
│   └── notes.ts          # Writing/notes entries
└── public/               # Static assets (add your own images here)
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customisation

- **Projects** — edit `data/projects.ts` to update titles, descriptions, case study copy, stack chips, and stats
- **Notes** — edit `data/notes.ts` to add/remove writing entries
- **Design tokens** — all colours and spacing live at the top of `app/globals.css` in `:root`
- **About copy** — edit the about section inside `components/ProjectFeed.tsx`

## Deploying to Vercel

```bash
npx vercel
```

Or push to GitHub and import the repo in [vercel.com](https://vercel.com) — zero config needed.
