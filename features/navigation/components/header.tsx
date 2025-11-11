import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { CTAButton } from "./cta-button";
import { MobileMenu } from "./mobile-menu";
import { NAV_ITEMS } from "../config/nav-items";
import { Container } from "@/components/layouts/container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white py-4 md:py-8.5">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLinks items={NAV_ITEMS} />
            <CTAButton />
          </div>

          {/* Mobile Menu */}
          <MobileMenu items={NAV_ITEMS} />
        </div>
      </Container>
    </header>
  );
}
