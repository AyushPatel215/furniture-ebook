import { insights } from "@/data/book";
import { BuyButton } from "./BuyButton";
import { SectionHeading } from "./SectionHeading";

export function SampleInsights() {
  return (
    <section aria-labelledby="insights-title" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="insights-title"
          eyebrow="Sample insights"
          title="A taste of what's inside"
          intro="Every topic ends with a highlighted tip like these: short, specific and written from real Indian furniture projects."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {insights.map((text) => (
            <figure
              key={text}
              className="flex flex-col rounded-2xl border-l-4 border-brand bg-white p-6 shadow-sm"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 32 32"
                className="h-8 w-8 text-beige"
                fill="currentColor"
              >
                <path d="M10 8C5.6 8 3 11.4 3 15.7V24h9v-8.6H7.3C7.3 12.7 8.7 11 11 11V8h-1Zm16 0c-4.4 0-7 3.4-7 7.7V24h9v-8.6h-4.7c0-2.7 1.4-4.4 3.7-4.4V8h-1Z" />
              </svg>
              <blockquote className="mt-3 flex-1 text-lg font-normal leading-relaxed text-ink">
                <p>{text}</p>
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-brand-dark">
                Tip from the book
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Mid-page call to action */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-beige px-6 py-10 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left">
          <p className="max-w-xl text-xl font-semibold text-ink">
            59 topics like these, in one 65-page PDF you can read tonight.
          </p>
          <BuyButton size="md" withPrice className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
