import Link from "next/link";
import { socialLinks } from "../config/social-links";

export const FooterSocial = () => {
  return (
    <div
      className="flex items-center gap-6"
      role="navigation"
      aria-label="Social media links"
    >
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          className="hover:opacity-75 transition-opacity focus:outline-none"
          aria-label={`Visit our ${social.label} page`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
