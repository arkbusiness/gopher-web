import { Container } from "@/components/layouts/container";

export const FeatureHero = () => {
  return (
    <section className="w-full relative bg-highlight overflow-hidden">
      <Container>
        <div className="max-w-252 w-full mx-auto px-4 text-center py-16 relative z-3">
          <h1 className="text-[clamp(1.5rem,6vw,4rem)] font-semibold leading-[110%] relative  w-full mx-auto text-black">
            Gopher Event Management Software Features
          </h1>

          <p className="font-normal text-xl text-center mt-8">
            Gopher trade fair application offers key features to power seamless
            events:
          </p>
        </div>
      </Container>
    </section>
  );
};
