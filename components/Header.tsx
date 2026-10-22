import Link from "next/link";
import { site } from "@/lib/site";
import { BuyButton } from "./BuyButton";
import { LogoMark } from "./Icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-beige bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-ink sm:text-lg"
        >
          <LogoMark className="h-8 w-8" />
          {site.name}
        </Link>
        <BuyButton size="sm" />
      </nav>
    </header>
  );
}
