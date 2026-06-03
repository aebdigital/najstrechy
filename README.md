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
  kontakt/page.tsx  Standalone contact page
  sluzby/[slug]/    Service detail pages with left service sidebar
  globals.css       Tailwind directives + @font-face (Rethink Sans) + all custom styles
components/
  SiteHeader.tsx    Shared logo header with regular center nav and CTA
  SubpageHero.tsx   Shared photo-backed subpage hero with fade-up entrance animation
  GalleryLightbox.tsx
                    'use client' — compact gallery grid with animated lightbox controls
  Scripts.tsx       'use client' — hero slider, scroll-reveal observers, parallax, and analytics
                    event hooks
data/services.ts    Shared service copy, routes, images, and feature lists
  gallery-images.ts Generated gallery manifest imported by the homepage
tailwind.config.ts  Custom colors (brown/primary/accent/muted…) + Rethink Sans font family
public/assets/      Images, fonts, gallery photos, and texture.svg served at /assets/*
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
- **Header & branding**: the site uses `public/logo.png` in a shared header on every page, plus
  `public/favicon.png` through Next metadata. Brand colors are `#144269` and `#cc451c`.
- **Service pages**: each service has its own `/sluzby/...` page with a left sidebar for switching
  between services. The homepage service cards link to those pages. Subpage heroes reuse the
  homepage roof photos behind the blue brand overlay and animate in on page load.
- **Contact page**: `/kontakt` contains direct phone, e-mail, address, service links, and prep notes
  for an inspection request.
- **Gallery photos**: `scripts/scrape-najstrecha-gallery.mjs` fetches the live homepage gallery
  from `https://naj-strecha.sk/`, downloads the 33 Elementor lightbox photos into
  `public/assets/gallery/`, and regenerates `app/gallery-images.ts`. The homepage renders them
  in a compact grid with an animated lightbox and thumbnail switching.
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
