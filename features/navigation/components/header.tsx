import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { CTAButton } from "./cta-button";
import { MobileMenu } from "./mobile-menu";
import { NAV_ITEMS } from "../config/nav-items";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 px-6 md:px-21 py-4 md:py-8.5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation - Right aligned with CTA */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLinks items={NAV_ITEMS} />
          <CTAButton />
        </div>

        {/* Mobile Menu */}
        <MobileMenu items={NAV_ITEMS} />
      </div>
    </header>
  );
}
