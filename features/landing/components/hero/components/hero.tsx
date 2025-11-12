import { HeroContent } from "./hero-content";
import { HeroSlider } from "./hero-slider";
import { HERO_CONTENT, HERO_SLIDES } from "../config/hero-data";
import { Container } from "@/components/layouts/container";

export function Hero() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="flex lg:flex-row flex-col gap-12 lg:gap-16">
          {/* Left Side - Content */}
          <div className="flex-1">
            <HeroContent content={HERO_CONTENT} />
          </div>

          {/* Right Side - Slider */}
          <div className="relative lg:w-[clamp(240px,50vw,640px)]">
            <HeroSlider slides={HERO_SLIDES} />
          </div>
        </div>
      </Container>
    </section>
  );
}
