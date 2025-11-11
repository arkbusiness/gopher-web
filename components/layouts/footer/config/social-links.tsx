import {
  FacebookSVG,
  InstagramSVG,
  LinkedinSVG,
  TwitterSVG,
} from "@/components/ui/icons";
import { SocialLink } from "../types";

export const socialLinks: SocialLink[] = [
  {
    icon: <InstagramSVG className="w-5 h-5" />,
    href: "https://www.instagram.com/storeatark",
    label: "Instagram",
  },
  {
    icon: <LinkedinSVG className="w-5 h-5" />,
    href: "https://www.linkedin.com/company/storeatark/",
    label: "LinkedIn",
  },
  {
    icon: <TwitterSVG className="w-5 h-5" />,
    href: "https://x.com/storeatark",
    label: "Twitter",
  },
  {
    icon: <FacebookSVG className="w-5 h-5" />,
    href: "https://facebook.com/storeatark",
    label: "Facebook",
  },
];
