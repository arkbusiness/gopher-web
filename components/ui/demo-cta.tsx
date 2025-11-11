import { Container } from "@/components/layouts/container";
import { LeftStarSVG, RightStarSVG } from "@/components/ui";

export const DemoCTA = () => {
  return (
    <section className="w-full bg-neutral py-24 relative  overflow-hidden">
      <div className="absolute left-0 top-0 opacity-80 pointer-events-none">
        <LeftStarSVG />
      </div>
      <div className="absolute -right-10 -bottom-5 opacity-80 pointer-events-none">
        <RightStarSVG />
      </div>
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-[47.69rem] w-full mx-auto text-center">
            <h2 className="text-background font-semibold text-[clamp(1.75rem,5vw,2.2rem)] font-montserrat leading-[120%] mb-2.5">
              Your next trade fair deserves better tool
            </h2>
            <p className="text-background text-xl font-medium">
              Join hundreds of organizers, exhibitors, and attendees already
              simplifying their events with Gopher
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
