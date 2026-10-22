import { SectionHeading } from "./SectionHeading";

const quoteDifferences = [
  { item: "Board", low: "Particle board or MR plywood", high: "BWP plywood or HDHMR" },
  { item: "Thickness", low: "Thinner panels, no edge banding spec", high: "18 mm carcass, proper edge banding" },
  { item: "Finish", low: "Basic laminate", high: "Acrylic, PU or membrane shutters" },
  { item: "Hardware", low: "Unbranded hinges and channels", high: "Soft-close branded fittings" },
  { item: "Scope", low: "Loft, internals, GST left out", high: "Everything included and listed" },
];

const rightOrder = [
  "Plan the space and how you live in it",
  "Set and divide the budget",
  "Choose materials room by room",
  "Pick hardware where it matters",
  "Then finishes and colours",
  "Compare quotations line by line",
];

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="problem-title"
          eyebrow="The problem"
          title="Why is one wardrobe quote ₹40,000 and another ₹90,000?"
          intro="Both quotes say “wardrobe, 7 ft, laminate finish.” What they don't say is the board, the thickness, the hardware and what's left out. That gap is where most homeowners overspend, or end up with furniture that swells and sags in three years."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-x-auto rounded-2xl border border-beige">
            <table className="w-full text-left text-sm sm:text-base">
              <caption className="bg-beige/60 px-3 py-3 sm:px-5 text-left font-semibold text-ink">
                Same wardrobe, two very different quotes
              </caption>
              <thead>
                <tr className="border-b border-beige text-ink">
                  <th scope="col" className="px-3 py-3 sm:px-5 font-semibold">
                    What changes
                  </th>
                  <th scope="col" className="px-3 py-3 sm:px-5 font-semibold">
                    ₹40,000 quote
                  </th>
                  <th scope="col" className="px-3 py-3 sm:px-5 font-semibold">
                    ₹90,000 quote
                  </th>
                </tr>
              </thead>
              <tbody>
                {quoteDifferences.map((row) => (
                  <tr key={row.item} className="border-b border-beige last:border-0">
                    <th scope="row" className="px-3 py-3 sm:px-5 font-semibold text-ink">
                      {row.item}
                    </th>
                    <td className="px-3 py-3 sm:px-5 text-ink-soft">{row.low}</td>
                    <td className="px-3 py-3 sm:px-5 text-ink-soft">{row.high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl bg-cream p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-ink">Most people start in the wrong order</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              They fall for a colour or a Pinterest photo first, then try to fit materials, hardware
              and budget around it. By the time the quotation arrives, there&apos;s no way to tell a
              fair price from a padded one. The guide walks you through the right order:
            </p>
            <ol className="mt-5 space-y-3">
              {rightOrder.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-dark text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 font-normal text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
