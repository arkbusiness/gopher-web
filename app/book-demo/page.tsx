import { ARK_META } from "@/constants";
import { DemoForm, DemoHero } from "@/features/book-demo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo | Gopher",
  description: ARK_META.description,
};

export default function BookDemoPage() {
  return (
    <>
      <DemoHero />
      <DemoForm />
    </>
  );
}
