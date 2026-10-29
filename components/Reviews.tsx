import { previewReviews, reviews, type Review } from "@/data/reviews";
import { SectionHeading } from "./SectionHeading";

const isDev = process.env.NODE_ENV === "development";

// Warm avatar tints, picked from the name so each reader keeps the same colour.
const avatarTints = ["bg-brand-dark", "bg-brand-deep", "bg-[#8a6a3c]", "bg-[#6b5a45]"];

function tintFor(name: string) {
  let sum = 0;
  for (const ch of name) sum += ch.charCodeAt(0);
  return avatarTints[sum % avatarTints.length];
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`)
  );
}

function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          aria-hidden="true"
          viewBox="0 0 20 20"
          className={`${className} ${n <= Math.round(rating) ? "text-[#c98a1b]" : "text-beige"}`}
          fill="currentColor"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-beige bg-white p-6 shadow-sm">
      <figcaption className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-lg font-semibold text-white ${tintFor(review.name)}`}
        >
          {review.name.charAt(0)}
        </span>
        <span className="min-w-0 text-sm leading-tight">
          <span className="block font-semibold text-ink">{review.name}</span>
          {review.city && <span className="block text-ink-soft">{review.city}</span>}
        </span>
        {review.verified && (
          <span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-800">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Verified buyer
          </span>
        )}
      </figcaption>

      {(review.rating || review.date) && (
        <div className="mt-4 flex items-center gap-3 text-sm text-ink-soft">
          {review.rating && <Stars rating={review.rating} />}
          {review.date && <time dateTime={review.date}>{formatDate(review.date)}</time>}
        </div>
      )}

      <blockquote className="mt-3 flex-1 leading-relaxed text-ink">
        <p>{review.quote}</p>
      </blockquote>

      {review.project && (
        <p className="mt-5">
          <span className="inline-block rounded-md bg-beige px-2.5 py-1 text-xs font-semibold text-brand-deep">
            {review.project}
          </span>
        </p>
      )}
    </figure>
  );
}

/**
 * Real reader reviews from data/reviews.ts.
 * Hidden on the live site until at least one real review is added.
 * In `npm run dev` it shows clearly marked sample cards to preview the layout.
 */
export function Reviews() {
  const showPreview = reviews.length === 0 && isDev;
  const items = showPreview ? previewReviews : reviews;
  if (items.length === 0) return null;

  const rated = items.filter((r) => r.rating);
  const average = rated.length ? rated.reduce((sum, r) => sum + (r.rating ?? 0), 0) / rated.length : 0;
  // A summary based on one or two ratings looks odd; show it from three upward.
  const showSummary = rated.length >= 3 || (showPreview && rated.length > 0);

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showPreview && (
          <p className="mx-auto mb-8 max-w-2xl rounded-lg border-2 border-dashed border-brand bg-beige/50 px-4 py-3 text-center text-sm text-ink">
            Layout preview, visible only in <code>npm run dev</code>. Add real reviews to{" "}
            <code>data/reviews.ts</code> to show this section on the live site.
          </p>
        )}
        <SectionHeading
          id="reviews-title"
          eyebrow="Reviews"
          title="What readers say"
          intro="From homeowners who used the guide while planning their furniture."
        />

        {showSummary && (
          <div className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-beige bg-cream px-5 py-2">
            <span className="text-2xl font-extrabold text-ink">{average.toFixed(1)}</span>
            <Stars rating={average} className="h-5 w-5" />
            <span className="text-sm text-ink-soft">
              from {rated.length} {rated.length === 1 ? "rating" : "ratings"}
            </span>
          </div>
        )}

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((review, i) => (
            <li key={`${review.name}-${i}`}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
