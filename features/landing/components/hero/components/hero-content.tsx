import { LinkButton } from "@/components/ui/link-button";
import { ArrowRight } from "lucide-react";
import { HeroContent as HeroContentType } from "../types";
import { RightCircleIcon } from "@/components/ui/icons";

interface HeroContentProps {
  content: HeroContentType;
}

export function HeroContent({ content }: HeroContentProps) {
  return (
    <div className="w-full">
      <h1 className="text-[clamp(1.5rem,6vw,4rem)] text-black font-semibold font-montserrat leading-[110%] max-w-160">
        {content.title}
      </h1>
      <p className="font-medium text-xl my-6 max-w-[48.69rem]">
        {content.description}
      </p>
      <div className="flex">
        <LinkButton
          href={content.ctaLink}
          variant="secondary"
          className="flex items-center"
        >
          <span>{content.ctaText}</span>
          <span className="flex scale-150 ml-1.5">
            <RightCircleIcon />
          </span>
        </LinkButton>
      </div>
    </div>
  );
}
