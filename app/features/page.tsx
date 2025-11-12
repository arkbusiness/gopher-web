import { DemoCTA } from "@/components/ui";
import { ARK_META } from "@/constants";
import { FeatureHero, FeaturesGrid } from "@/features/offer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Gopher",
  description: ARK_META.description,
};

export default function FeaturesPage() {
  return (
    <>
      <FeatureHero />
      <FeaturesGrid />
      <DemoCTA />
    </>
  );
}
