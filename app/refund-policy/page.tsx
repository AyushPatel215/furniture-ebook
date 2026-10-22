import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund policy for ${site.productName}, a digital PDF ebook.`,
  alternates: { canonical: "/refund-policy" },
  openGraph: { url: "/refund-policy" },
};

// TODO: placeholder text. Replace with your actual refund terms before launch.
export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy">
      <p>
        {site.productName} is a digital product delivered instantly as a PDF download.
      </p>
      <h2>Problems with your download</h2>
      <p>
        If you paid but did not receive the PDF, or the file will not open, email us with your
        payment details and we will make sure you get a working copy.
      </p>
      <h2>Refund requests</h2>
      <p>
        [Placeholder: describe your refund window and conditions here, for example how many days
        after purchase a refund can be requested and how it will be processed.]
      </p>
      <ContactLine />
    </LegalPage>
  );
}
