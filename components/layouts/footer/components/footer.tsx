import { Container } from "../../container";
import { footerSections } from "../config/footer-links";
import { FooterBrand } from "./footer-brand";
import { FooterSection } from "./footer-section";
import { FooterSocial } from "./footer-social";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-white pt-20 pb-16">
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(12.13rem,1fr))] md:grid-cols-[23.19rem_repeat(auto-fit,minmax(12.13rem,1fr))] gap-10 mb-20 justify-center">
          {/* Brand Section */}
          <div className="flex flex-col gap-14">
            <FooterBrand />
            <FooterSocial />
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <FooterSection key={section.title} section={section} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white" />
        <div className="flex justify-end">
          {/* Copyright */}
          <p className="text-xs text-white font-normal mt-20">
            © {currentYear} Copyright ARK. Limited. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
