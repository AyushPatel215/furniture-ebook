import { parts } from "@/data/book";
import { site } from "@/lib/site";
import { ChevronIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

// Topics are numbered continuously across parts (1–59), as in the book.
const partOffsets = parts.map((_, i) =>
  parts.slice(0, i).reduce((sum, p) => sum + p.topics.length, 0)
);

export function WhatsInside() {
  return (
    <section aria-labelledby="inside-title" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          id="inside-title"
          eyebrow="What's inside"
          title={`${site.parts} parts. ${site.topics} topics. Every one ends with a tip.`}
          intro="From planning and budgets to BWP vs MR plywood, modular kitchens, wardrobes and the final handover. Open any part to see every topic."
        />

        <div className="mt-12 space-y-3">
          {parts.map((part, partIndex) => (
            <details
              key={part.number}
              className="group rounded-2xl border border-beige bg-cream open:bg-white open:shadow-sm"
              open={part.number === 1}
            >
              <summary className="flex cursor-pointer items-center gap-4 rounded-2xl px-5 py-4 sm:px-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-dark text-sm font-semibold text-white">
                  {part.number}
                </span>
                <span className="flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-brand-dark">
                    Part {part.number}
                  </span>
                  <span className="block font-semibold text-ink sm:text-lg">{part.title}</span>
                </span>
                <span className="hidden text-sm text-ink-soft sm:inline">
                  {part.topics.length} topics
                </span>
                <ChevronIcon className="h-5 w-5 shrink-0 text-brand-dark transition-transform group-open:rotate-180" />
              </summary>
              <ol className="space-y-2 border-t border-beige px-5 py-4 sm:px-6">
                {part.topics.map((topic, i) => (
                  <li key={topic} className="flex gap-3 text-ink-soft">
                    <span className="w-6 shrink-0 text-right font-semibold tabular-nums text-brand-dark">
                      {partOffsets[partIndex] + i + 1}
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ol>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
