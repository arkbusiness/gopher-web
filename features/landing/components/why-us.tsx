import { Container } from "@/components/layouts/container";

export const WhyUs = () => {
  return (
    <section className="w-full bg-warm py-16">
      <Container>
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-end mb-6 sm:mb-12 gap-8">
            <div className="max-w-[47.69rem] w-full">
              <h2 className="text-black font-semibold text-[clamp(1.75rem,5vw,2.2rem)] font-montserrat leading-[120%] mb-2.5">
                Why Choose Gopher
              </h2>
              <p className="text-xl font-medium opacity-75">
                Built specifically for in-person trade fairs, Gopher provides
                simple onboarding, marketplace commerce, and real-time insights
                that make events measurable and repeatable. Exhibitors can
                easily set up their booths, while attendees can explore, book
                meetings, and make purchases.
              </p>
            </div>
          </div>

          <div className="mt-8"></div>
        </div>
      </Container>
    </section>
  );
};
