/**
 * Reader reviews for the "What readers say" section.
 *
 * Add only real reviews from real buyers, used with their permission
 * (for example, collected by a follow-up email a week after purchase).
 * Paste their words as they wrote them; fixing typos is fine, rewriting is not.
 * Invented or edited reviews mislead buyers and fall under India's 2022
 * consumer-protection guidelines on fake online reviews.
 *
 * While this list is empty, the section is hidden on the live site.
 */
export type Review = {
  quote: string;
  /** First name and initial is enough, e.g. "Priya S." */
  name: string;
  /** City, e.g. "Pune". */
  city?: string;
  /** What they were working on, e.g. "Modular kitchen" or "2BHK wardrobes". */
  project?: string;
  /** The star rating the buyer gave, 1–5. Leave out if they didn't give one. */
  rating?: 1 | 2 | 3 | 4 | 5;
  /** When the review was received, as YYYY-MM-DD. */
  date?: string;
  /** Set true only if you confirmed this person bought the guide (e.g. matched to a payment). */
  verified?: boolean;
};

export const reviews: readonly Review[] = [
  // {
  //   quote: "Paste the buyer's words here.",
  //   name: "First name L.",
  //   city: "City",
  //   project: "What they were furnishing",
  //   rating: 5,
  //   date: "2026-11-05",
  //   verified: true,
  // },
];

/**
 * Layout preview only: shown when running `npm run dev` and there are no real
 * reviews yet. Never rendered in a production build.
 */
export const previewReviews: readonly Review[] = [
  {
    quote:
      "Sample review. A longer review shows here at full length, the way a buyer might describe which part of the guide helped them, what they asked their carpenter or designer, and what changed in the final quotation.",
    name: "Sample A.",
    city: "City",
    project: "Modular kitchen",
    rating: 5,
    date: "2026-11-01",
    verified: true,
  },
  {
    quote: "Sample review. A short one or two line review looks like this.",
    name: "Sample B.",
    city: "City",
    project: "Wardrobes",
    rating: 4,
    date: "2026-11-03",
    verified: true,
  },
  {
    quote:
      "Sample review without a star rating or verified badge, for feedback that came in by WhatsApp or email.",
    name: "Sample C.",
    city: "City",
    project: "2BHK interiors",
  },
];
