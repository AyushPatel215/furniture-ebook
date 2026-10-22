# The Complete Home Furniture Guide: Sales Site

A fast, fully static, single-page sales site for the PDF ebook **The Complete Home Furniture Guide** (₹299).

Built with Next.js 16 (App Router, Cache Components), TypeScript, Tailwind CSS v4 and `next/font`. It uses no UI, icon or animation libraries and loads no third-party scripts.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Other scripts:

| Command         | What it does                                                   |
| --------------- | -------------------------------------------------------------- |
| `npm run build` | Production build. Every route is pre-rendered as static HTML.  |
| `npm start`     | Serve the production build locally.                           |
| `npm run lint`  | ESLint (Next.js core-web-vitals + TypeScript rules).           |
| `npm run icons` | Regenerate the PNG app icons from `app/icon.svg`.              |

## Environment variables

| Variable               | Required          | Purpose                                                                                                                                    |
| ---------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_BUY_URL`  | Yes, before launch | Payment link used by every **Buy Now** button. Buttons open it in a new tab. Falls back to `#` when unset.                                |
| `NEXT_PUBLIC_SITE_URL` | Yes, before launch | Live URL without a trailing slash, e.g. `https://www.example.in`. Drives `metadataBase`, canonical URLs, OG tags, JSON-LD, sitemap and robots. |

If `NEXT_PUBLIC_SITE_URL` is missing on Vercel, the site falls back to Vercel's production domain, and to `http://localhost:3000` locally.

`NEXT_PUBLIC_*` values are inlined **at build time**, so redeploy after changing them.

## Things to replace before launch

1. **Payment link:** set `NEXT_PUBLIC_BUY_URL`.
2. **Domain:** set `NEXT_PUBLIC_SITE_URL`.
3. **Book cover:** add `public/cover.webp` at a 3:4 ratio (e.g. 900×1200). The page detects it at build time and switches from the CSS mockup to the real image (served through `next/image` and preloaded as the hero image). If your cover has a different ratio, update `cover.width/height` in `lib/site.ts`.
4. **Contact email:** `contactEmail` in `lib/site.ts`.
5. **Legal pages:** the text in `app/privacy-policy`, `app/terms` and `app/refund-policy` is placeholder. The refund policy in particular needs your real terms.
6. **Yearly / content dates:** `copyrightYear` and `lastUpdated` in `lib/site.ts`. They are constants so pages stay fully static.

## Project structure

```
app/
  layout.tsx            Root layout: metadata, font, viewport, analytics hook
  page.tsx              The sales page (assembles the sections)
  globals.css           Tailwind v4 theme tokens (brand colours), focus and reduced-motion styles
  opengraph-image.tsx   Generated 1200×630 OG image (next/og)
  twitter-image.tsx     Re-uses the OG image
  icon.svg, apple-icon.png, manifest.ts
  sitemap.ts, robots.ts
  privacy-policy/, terms/, refund-policy/
components/             One component per section (Hero, Problem, WhatsInside, Faq, …)
data/book.ts            Typed book content: parts and topics, insights, benefits, FAQs
lib/site.ts             Site config: name, price, URLs, email, SEO title/description
scripts/generate-icons.mjs
```

Edit copy in `data/book.ts` and `lib/site.ts`. The FAQ JSON-LD is generated from the same `faqs` array, so the visible FAQ and the structured data stay in sync.

## SEO

- Metadata API: title, description, keywords, canonical, Open Graph, Twitter card, `metadataBase`.
- JSON-LD (`components/JsonLd.tsx`): `Product` with an `Offer` (299 INR, InStock), `Book` (EBook, 65 pages) and `FAQPage`. There are deliberately **no ratings, reviews or testimonials**.
- `sitemap.xml`, `robots.txt`, web manifest, favicon and Apple touch icon.
- One `<h1>`, semantic landmarks, `lang="en-IN"`.

## Performance notes

- `export const ensureStatic = "navigation"` in `app/layout.tsx` makes the build **fail** if anything request-time (cookies, headers, uncached fetches) is added, so the site stays fully static.
- Zero `"use client"` components. The accordions are native `<details>/<summary>`.
- Poppins via `next/font`, `display: swap`, only weights 400/600/800 (about 8 KB each).
- The mobile sticky bar is `position: fixed`, and the page reserves matching bottom padding, so it causes no layout shift.

Local Lighthouse (mobile emulation, `next start`): Performance 96–97, Accessibility 100, Best Practices 100, SEO 100, CLS 0.

## Analytics

No third-party scripts load today. A commented-out hook in `app/layout.tsx` shows where to add `next/script` (with `strategy="lazyOnload"`) or `@vercel/analytics`.

## Deploy to Vercel

1. Push this folder to a GitHub, GitLab or Bitbucket repository.
2. In Vercel: **Add New… → Project**, then import the repository. The framework is detected as Next.js with no extra settings.
3. Under **Settings → Environment Variables**, add `NEXT_PUBLIC_BUY_URL` and `NEXT_PUBLIC_SITE_URL` (Production, plus Preview if you like).
4. Click **Deploy**.
5. Add your custom domain under **Settings → Domains**, make sure `NEXT_PUBLIC_SITE_URL` matches it, and **redeploy** (env vars are baked in at build time).
6. Submit `https://your-domain/sitemap.xml` in Google Search Console.

Or use the CLI: `npx vercel` for a preview, then `npx vercel --prod`.
