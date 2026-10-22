import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms for buying and using ${site.productName}, a digital PDF ebook.`,
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms" },
};

// TODO: placeholder text. Have this reviewed before launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        By purchasing {site.productName} you agree to these terms.
      </p>
      <h2>Licence</h2>
      <p>
        Your purchase gives you a personal, non-transferable licence to read the PDF on your own
        devices. Please do not resell, share publicly or redistribute the file.
      </p>
      <h2>Information only</h2>
      <p>
        The guide offers general information and practical guidance based on experience. Prices,
        materials and brands vary by city and over time. Use your own judgement and consult
        qualified professionals for decisions specific to your home.
      </p>
      <h2>Price</h2>
      <p>
        The guide is sold for {site.priceDisplay} as a one-time payment. Payment is handled by a
        third-party payment provider.
      </p>
      <ContactLine />
    </LegalPage>
  );
}
