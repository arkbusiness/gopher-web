import { ARK_META } from "@/constants";
import {
  FAQSection,
  SolutionFeatures,
  SolutionsHero,
} from "@/features/solutions";
import { DemoCTA } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Gopher",
  description: ARK_META.description,
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionFeatures />
      <DemoCTA />
      <FAQSection />
    </>
  );
}
