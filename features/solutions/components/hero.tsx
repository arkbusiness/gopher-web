import { Container } from "@/components/layouts/container";
import {
  SolutionsSpringRightSVG,
  SolutionsSpringLeftSVG,
} from "@/components/ui";

export const SolutionsHero = () => {
  return (
    <section className="w-full relative bg-highlight overflow-hidden">
      <div className="absolute right-0 -top-3 z-2 opacity-40 lg:opacity-100">
        <SolutionsSpringRightSVG />
      </div>

      <div className="absolute left-0 -bottom-3 z-2">
        <SolutionsSpringLeftSVG />
      </div>
      <Container>
        <div className="max-w-216 mx-auto px-4 text-center py-16 relative z-3">
          <h1 className="text-[clamp(1.5rem,6vw,4rem)] font-semibold leading-[110%] relative max-w-120 w-full mx-auto text-black">
            Our Solutions
          </h1>

          <p className="font-normal text-xl text-center my-8">
            Gopher offers comprehensive solutions tailored to your needs
          </p>
        </div>
      </Container>
    </section>
  );
};
