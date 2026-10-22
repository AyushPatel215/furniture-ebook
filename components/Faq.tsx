import Link from "next/link";
import { faqs } from "@/data/book";
import { ChevronIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-beige bg-white">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 font-semibold text-ink sm:px-6 sm:text-lg">
                {faq.question}
                <ChevronIcon className="h-5 w-5 shrink-0 text-brand-dark transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-ink-soft sm:px-6">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-ink-soft">
          Still have a question? Read our{" "}
          <Link href="/refund-policy" className="font-semibold text-brand-dark underline underline-offset-4">
            refund policy
          </Link>{" "}
          or get in touch using the email in the footer.
        </p>
      </div>
    </section>
  );
}
