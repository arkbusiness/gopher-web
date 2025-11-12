import { Container } from "@/components/layouts/container";

export const DemoHero = () => {
  return (
    <section className="w-full relative bg-ash overflow-hidden">
      <Container>
        <div className="px-4 text-center py-30">
          <h1 className="text-[clamp(1.5rem,6vw,4rem)] text-black font-semibold font-montserrat leading-[110%] relative">
            Book Your ARK Portal Demo
          </h1>
        </div>
      </Container>
    </section>
  );
};
