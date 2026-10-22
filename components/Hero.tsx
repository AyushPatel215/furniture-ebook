import { site } from "@/lib/site";
import { BookCover } from "./BookCover";
import { BuyButton } from "./BuyButton";
import { BookIcon, DownloadIcon, HomeIcon } from "./Icons";

const trustPoints = [
  { label: "Instant PDF download", Icon: DownloadIcon },
  { label: `${site.pages} pages, ${site.topics} topics`, Icon: BookIcon },
  { label: "Written for Indian homes", Icon: HomeIcon },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-20">
        <div>
          <p className="inline-flex items-center rounded-full bg-beige px-3 py-1 text-sm font-normal text-brand-deep">
            Home furniture guide for India · PDF ebook
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {site.productName}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <BuyButton size="lg" withPrice />
            <p className="text-ink-soft">
              <span className="text-3xl font-extrabold text-ink">{site.priceDisplay}</span>{" "}
              <span className="text-sm">one-time · instant download</span>
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="Why buyers trust this guide">
            {trustPoints.map(({ label, Icon }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-normal text-ink-soft">
                <Icon className="h-5 w-5 shrink-0 text-brand-dark" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <BookCover />
      </div>
    </section>
  );
}
