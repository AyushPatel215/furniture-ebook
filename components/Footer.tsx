import Link from "next/link";
import { site } from "@/lib/site";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/refund-policy", label: "Refund Policy" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-beige bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-ink-soft sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-ink">{site.name}</p>
          <p className="mt-1">
            Questions?{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-normal text-brand-dark underline underline-offset-4"
            >
              {site.contactEmail}
            </a>
          </p>
          <p className="mt-1">
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
        </div>
        <nav aria-label="Legal">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ink hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
