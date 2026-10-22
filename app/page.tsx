import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductJsonLd } from "@/components/JsonLd";
import { Problem } from "@/components/Problem";
import { SampleInsights } from "@/components/SampleInsights";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { WhatsInside } from "@/components/WhatsInside";
import { WhatYouLearn } from "@/components/WhatYouLearn";
import { WhoFor } from "@/components/WhoFor";

export default function Home() {
  return (
    // Bottom padding on mobile reserves room for the fixed StickyBuyBar.
    <div className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
      <ProductJsonLd />
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <WhatYouLearn />
        <WhatsInside />
        <SampleInsights />
        <WhoFor />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBuyBar />
    </div>
  );
}
