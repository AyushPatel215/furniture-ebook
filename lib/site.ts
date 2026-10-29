/**
 * Central site configuration. Everything you may want to change later
 * (buy link, domain, contact email, price) lives here or in env vars.
 */

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  // Vercel exposes the production domain automatically; useful before you set a custom domain.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const site = {
  name: "Furniture Buying Made Easy",
  productName: "Furniture Buying Made Easy",
  tagline:
    "Know what to ask, what to pay, and what to avoid, before you spend a rupee on furniture.",
  url: resolveSiteUrl(),
  /** Payment link. Set NEXT_PUBLIC_BUY_URL in your environment. */
  buyUrl: process.env.NEXT_PUBLIC_BUY_URL || "#",
  contactEmail: "support@ebooksell.in",
  price: 299,
  priceDisplay: "₹299",
  currency: "INR",
  pages: 65,
  parts: 9,
  topics: 59,
  locale: "en_IN",
  /** Used for sitemap lastModified. Update when you change page content. */
  lastUpdated: "2026-10-22",
  /** Kept static so pages stay fully pre-rendered. Update yearly. */
  copyrightYear: 2026,
  /** The real cover lives at /public/images/faniture-book-cover.png (2:3 ratio, 1024x1536). */
  cover: { src: "/images/faniture-book-cover.png", width: 1024, height: 1536 },
} as const;

export const seo = {
  title: "Furniture Buying Made Easy: PDF Ebook for ₹299",
  description:
    "Indian home furniture buying guide PDF: compare quotations, BWP vs MR plywood, modular kitchen and wardrobe planning, hardware and hidden costs. 65 pages.",
  keywords: [
    "home furniture guide India",
    "modular kitchen guide",
    "wardrobe plywood guide",
    "furniture buying guide PDF",
    "BWP vs MR plywood",
    "furniture quotation comparison",
    "interior furniture budget India",
    "modular wardrobe guide",
  ],
} as const;
