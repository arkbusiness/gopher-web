import { ARK_META } from "@/constants";
import { SolutionFeatures, SolutionsHero } from "@/features/solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | ARK",
  description: ARK_META.description,
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionFeatures />
      {/* <SolutionFeatures />
      <CTASection /> */}
    </>
  );
}
