import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTAButton() {
  return (
    <Button
      asChild
      className="bg-primary hover:bg-primary/90 transition-colors"
    >
      <Link href="/book-demo">Book a Demo</Link>
    </Button>
  );
}
