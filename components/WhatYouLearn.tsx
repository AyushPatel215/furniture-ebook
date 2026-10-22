import { benefits, type Benefit } from "@/data/book";
import {
  ClipboardCheckIcon,
  HingeIcon,
  KitchenIcon,
  LayersIcon,
  QuoteDocIcon,
  ReceiptIcon,
} from "./Icons";
import { SectionHeading } from "./SectionHeading";

const icons: Record<Benefit["icon"], typeof QuoteDocIcon> = {
  quote: QuoteDocIcon,
  layers: LayersIcon,
  hinge: HingeIcon,
  kitchen: KitchenIcon,
  receipt: ReceiptIcon,
  check: ClipboardCheckIcon,
};

export function WhatYouLearn() {
  return (
    <section aria-labelledby="learn-title" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="learn-title"
          eyebrow="What you'll learn"
          title="Make every furniture decision with confidence"
          intro="A practical furniture buying guide PDF that turns confusing trade jargon into clear decisions you can act on this week."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon];
            return (
              <li
                key={benefit.title}
                className="rounded-2xl border border-beige bg-white p-6 shadow-sm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-beige text-brand-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{benefit.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
