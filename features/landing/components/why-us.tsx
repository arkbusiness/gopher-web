import { Container } from "@/components/layouts/container";
import Image from "next/image";
import { WHY_US_FEATURES } from "../config/why-us.config";
import { WhyUsFeatureCard } from "./why-us-feature-card";
import { cn } from "@/lib/utils";

export const WhyUs = () => {
  return (
    <section className="w-full bg-warm py-16 md:py-20">
      <Container>
        <div>
          <div className="mb-12">
            <h2 className="text-black font-semibold text-[clamp(1.75rem,5vw,2.2rem)] font-montserrat leading-[120%] mb-4">
              Why Choose Gopher
            </h2>
            <p className="text-base md:text-lg text-gray-700 xl:max-w-[560px] leading-relaxed">
              Built specifically for in-person trade fairs, Gopher provides
              simple onboarding, marketplace commerce, and real-time insights
              that make events measurable and repeatable. Exhibitors can easily
              set up their booths, while attendees can explore, book meetings,
              and make purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[524px_1fr] gap-8">
            {/* Left Column - Feature Cards */}
            <div className="flex flex-col gap-6">
              {WHY_US_FEATURES.map((feature, index) => (
                <WhyUsFeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  className={cn({
                    "bg-white": index === 0,
                  })}
                />
              ))}
            </div>

            {/* Right Column - Dashboard Image */}
            <div className="relative hidden sm:flex items-start justify-start w-full">
              <div className="relative w-full aspect-4/3">
                <Image
                  src="/dashboard.svg"
                  alt="Gopher Dashboard Analytics"
                  fill
                  className="object-cover object-top-left"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
