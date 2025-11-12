import { Container } from "@/components/layouts/container";
import { valuesData } from "@/constants";
import { cn } from "@/lib/utils";

export const CompanyValues = () => {
  return (
    <section className="w-full pt-16  pb-14 bg-background">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mx-auto max-w-[900px]">
            <h2 className="text-black font-semibold text-[clamp(1.75rem,5vw,2.2rem)] font-montserrat leading-[120%] mb-5">
              Gopher Event Management Software
            </h2>
            <p className="text-foreground text-lg leading-relaxed font-medium">
              Gopher is a lightweight, organiser-friendly application for trade
              fairs that handles exhibitor onboarding, product catalogues, live
              1:1 appointment booking, QR based locked chat, exhibitor-attendee
              chat, multi-currency invoicing, and order tracking. Gopher is
              built to simplify operations and keep post-event engagement alive
            </p>
          </div>

          {/* Our Values */}
          <div className="pt-22">
            <div className="text-center mb-16 mx-auto max-w-3xl">
              <h2 className="text-black font-semibold text-[clamp(1.75rem,5vw,2.2rem)] font-montserrat leading-[120%] mb-5">
                Our Values
              </h2>
              <p className="text-foreground text-lg leading-relaxed font-medium">
                To transform how organisations run critical operation processes
                for running trade fairs by delivering simple, scalable SaaS
                solutions that turn complexity into clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valuesData.map((value, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-2xl p-8 md:p-10 flex flex-col items-center  text-center min-h-[500px]",
                    value.backgroundColor,
                    index === 4 && "md:col-span-1",
                  )}
                >
                  <h3 className="text-black font-semibold text-3xl mb-6 mt-28">
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed font-normal max-w-md w-full mx-auto">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
