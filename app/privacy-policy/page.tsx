import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles your personal information when you buy the PDF guide.`,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { url: "/privacy-policy" },
};

// TODO: placeholder text. Have this reviewed before launch.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This website sells a digital PDF guide, {site.productName}. We collect only the
        information needed to deliver your purchase and support you.
      </p>
      <h2>Information we collect</h2>
      <p>
        Payments are processed by a third-party payment provider. When you buy, that provider
        collects your name, email address and payment details under its own privacy policy. We
        receive only what is needed to deliver the PDF and handle support requests.
      </p>
      <h2>Cookies and analytics</h2>
      <p>
        This website does not currently use tracking cookies or third-party analytics. If that
        changes, this page will be updated.
      </p>
      <h2>How we use your information</h2>
      <p>
        To deliver your purchase, answer your questions and meet legal and tax obligations. We do
        not sell your personal information.
      </p>
      <ContactLine />
    </LegalPage>
  );
}
