import { faqs } from "@/data/book";
import { seo, site } from "@/lib/site";

/** Renders a JSON-LD script tag, escaping "<" to prevent script injection. */
function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/**
 * Product + Book + FAQPage structured data.
 * Deliberately contains no ratings, reviews or aggregateRating.
 */
export function ProductJsonLd() {
  const pageUrl = `${site.url}/`;
  const imageUrl = `${site.url}/opengraph-image`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: site.productName,
        description: seo.description,
        image: imageUrl,
        url: pageUrl,
        category: "Ebooks > Home & Garden",
        brand: { "@type": "Brand", name: site.name },
        offers: {
          "@type": "Offer",
          url: pageUrl,
          price: String(site.price),
          priceCurrency: site.currency,
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
        },
      },
      {
        "@type": "Book",
        "@id": `${pageUrl}#book`,
        name: site.productName,
        description: site.tagline,
        image: imageUrl,
        url: pageUrl,
        bookFormat: "https://schema.org/EBook",
        numberOfPages: site.pages,
        inLanguage: "en-IN",
        about: ["Home furniture", "Interior design", "Modular kitchens", "Plywood"],
        audience: { "@type": "Audience", audienceType: "Indian homeowners" },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return <JsonLdScript data={graph} />;
}
