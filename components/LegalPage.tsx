import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

/** Shared shell for the placeholder legal pages. */
export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-ink-soft">Last updated: {site.lastUpdated}</p>
        <div className="mt-8 space-y-5 leading-relaxed text-ink-soft [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink">
          {children}
        </div>
        <p className="mt-12">
          <Link href="/" className="font-semibold text-brand-dark underline underline-offset-4">
            ← Back to {site.productName}
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}

export function ContactLine() {
  return (
    <p>
      Questions? Email us at{" "}
      <a
        href={`mailto:${site.contactEmail}`}
        className="font-normal text-brand-dark underline underline-offset-4"
      >
        {site.contactEmail}
      </a>
      .
    </p>
  );
}
