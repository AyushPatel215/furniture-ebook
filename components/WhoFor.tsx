import { CheckIcon, CrossIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const forYou = [
  "You're furnishing a new flat or house and don't know where to start",
  "You're planning a renovation, modular kitchen or new wardrobes",
  "You have quotes from a carpenter, designer or furniture company and can't tell which is fair",
  "You want a 2BHK or small home to feel spacious and look premium on a sensible budget",
  "You'd rather spend ₹299 learning than lose ₹50,000 to a bad decision",
];

const notForYou = [
  "You want a DIY carpentry manual with joinery and cutting measurements",
  "You're fitting out an office, shop or other commercial space",
  "You're looking for a catalogue of design photos to copy",
  "Budget truly doesn't matter and you'll leave every decision to someone else",
];

export function WhoFor() {
  return (
    <section aria-labelledby="who-title" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="who-title"
          eyebrow="Is it right for you?"
          title="Who this book is for (and who it isn't)"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-beige bg-cream p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-ink">This book is for you if…</h3>
            <ul className="mt-5 space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-green-700" />
                  <span className="leading-relaxed text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-beige p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-ink">It&apos;s probably not for you if…</h3>
            <ul className="mt-5 space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex gap-3">
                  <CrossIcon className="mt-0.5 h-6 w-6 shrink-0 text-red-700" />
                  <span className="leading-relaxed text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
