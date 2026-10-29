import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { seo, site } from "@/lib/site";
import "./globals.css";

// Every route must be fully pre-rendered at build time (SSG). The build fails
// if anything request-time (cookies, headers, uncached fetch) sneaks in.
export const ensureStatic = "navigation";

// One family, only the three weights the design uses (regular, semibold, extrabold).
// Each static latin file is ~8 KB, far lighter than a full variable font.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.title,
    template: `%s | ${site.name}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: site.name,
  category: "books",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ede4d9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={poppins.variable}>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-ink focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}

        {/*
          Analytics hook: no third-party scripts are loaded today.
          To add analytics later, import Script from "next/script" and use, e.g.:

          <Script
            src="https://your-analytics-provider.example/script.js"
            strategy="lazyOnload"
            data-domain="yourdomain.com"
          />

          Or install @vercel/analytics and render <Analytics /> here.
        */}
      </body>
    </html>
  );
}
