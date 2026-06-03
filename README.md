# Naj-strecha s.r.o.

Next.js rebuild of the single-page site for **Naj-strecha s.r.o.** (roofing, Rožňava /
eastern Slovakia), originally a static scrape of `https://aeb-webnavrh.sk/naj.strecha.sk/`.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS**. The look, copy, and
interactions are a 1:1 port of the original scrape.

## Stack & layout

```
app/
  layout.tsx        Root layout, metadata, Plausible analytics queue stub
  page.tsx          Full page markup (header, hero, stats, about, services, references, footer)
  globals.css       Tailwind directives + @font-face (Rethink Sans) + all custom styles
components/
  Scripts.tsx       'use client' — TS port of js/script.js (Lenis smooth scroll, mobile menu,
                    hero slider, scroll-reveal observers, parallax, reference slider, analytics)
  CtaBanner.tsx     'use client' — the sticky CTA banner
tailwind.config.ts  Custom colors (brown/primary/accent/muted…) + Rethink Sans font family
public/assets/      Images, fonts, and texture.svg served at /assets/*
types/global.d.ts   window.plausible typing
```

## Develop / build

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Notes

- **Analytics**: the original loaded the real Plausible script. This rebuild keeps the event
  calls (`PhoneClick`, `EmailClick`, `Scroll`, time milestones, `BannerCTA`) wired to a local
  queue stub, so no external tracking requests are made. Drop in the real Plausible `<Script>`
  in `app/layout.tsx` if/when a domain is configured.
- **Article subpage** `/clanok` ([app/clanok/page.tsx](app/clanok/page.tsx)) holds the
  "Najlepšia oprava strechy" text extracted (OCR) from
  `public/Vilka_clanok_NajStrecha_1A4_KE_2023.05_page-0002.jpg`. The homepage links to it
  from the `#clanok` teaser section and the footer. `public/assets/sluzba-ploche.jpg` is the
  authentic flat-roof photo cropped from that scan.
- **TODO – Facebook photos**: the "Fúkaná a striekaná izolácia" service currently reuses
  `ref1.jpg` as a placeholder (see the `TODO` comment in `app/page.tsx`). Drop the real
  blown-insulation photo(s) into `public/assets/` and swap the `src`. I can't fetch Facebook
  directly, so any FB photos/texts need to be provided as files.
- **Original scrape** is preserved untouched for reference: `index.html`,
  `index.original.html`, `css/`, `js/`, `scripts/`, and the root `assets/`.

## Original scrape (reference)

- `index.original.html` — untouched HTML fetched from the live source.
- `index.html` — the local static rebuild.
- `css/`, `js/`, `assets/`, `scripts/build-static.mjs` — extracted styles, scripts, and assets.
