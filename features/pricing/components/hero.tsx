import { Container } from "@/components/layouts/container";

export const PricingHero = () => {
  return (
    <section className="w-full relative bg-background overflow-hidden">
      <Container>
        <div className="px-4 text-center py-16">
          <h1 className="text-[clamp(1.5rem,6vw,4rem)] text-black font-semibold font-montserrat leading-[110%] relative">
            Get a price quote from our team
          </h1>
          <p className="font-normal text-xl text-center mt-8">
            This application offers various features that will address event
            management challenges:
          </p>
        </div>
      </Container>
    </section>
  );
};
