import { Hero } from "@/sections/hero";
import { BenefitsBar } from "@/sections/benefits-bar";
import { WhatIsDelay } from "@/sections/what-is-delay";
import { HowItWorks } from "@/sections/how-it-works";
import { EbookContents } from "@/sections/ebook-contents";
import { ProductShowcase } from "@/sections/product-showcase";
import { ForWho } from "@/sections/for-who";
import { Differentials } from "@/sections/differentials";
import { Bonus } from "@/sections/bonus";
import { Offer } from "@/sections/offer";
import { Faq } from "@/sections/faq";
import { FinalCta } from "@/sections/final-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <BenefitsBar />
      <WhatIsDelay />
      <HowItWorks />
      <EbookContents />
      <ProductShowcase />
      <ForWho />
      <Differentials />
      <Bonus />
      <Offer />
      <Faq />
      <FinalCta />
    </main>
  );
}
