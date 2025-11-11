import { ARK_META } from "@/constants";
import { PricingForm, PricingHero } from "@/features/pricing/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Gopher",
  description: ARK_META.description,
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingForm />
    </>
  );
}
