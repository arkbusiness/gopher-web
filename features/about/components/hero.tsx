import { Container } from "@/components/layouts/container";

export const AboutHero = () => {
  return (
    <section className="w-full relative bg-warm overflow-hidden">
      <Container>
        <div className="max-w-200 mx-auto px-4 text-center py-16 relative z-3">
          <h1 className="text-[clamp(1.5rem,6vw,4rem)] text-secondary font-semibold font-montserrat leading-[110%] relative max-w-120 w-full mx-auto">
            The Company
          </h1>
          <p className="font-normal text-xl text-center mt-5">
            In today’s fast-paced business environment, teams need software that
            simplifies complexity. Gopher delivers tightly focused solutions.
          </p>
        </div>
      </Container>
    </section>
  );
};
