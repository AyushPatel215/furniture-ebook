import { site } from "@/lib/site";
import { BuyButton } from "./BuyButton";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12 sm:py-16">
        <h2 id="cta-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Spend smarter on every piece of furniture
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-beige">
          {site.pages} pages, {site.parts} parts and {site.topics} topics that help you plan,
          compare quotations and check the work, before the money is spent.
        </p>
        <p className="mt-8 text-5xl font-extrabold">{site.priceDisplay}</p>
        <p className="mt-2 text-sm text-beige">One-time payment · Instant PDF download</p>
        <BuyButton size="lg" withPrice variant="light" className="mt-8" />
      </div>
    </section>
  );
}
