import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";

export function CTAButton() {
  return (
    <LinkButton
      href="/book-demo"
      className="bg-primary hover:bg-primary/90 transition-colors"
    >
      Book a Demo
    </LinkButton>
  );
}
