"use client";

import { Container } from "@/components/layouts/container";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SolutionFeatureCard } from "./feature-card";

import {
  AnalyticsSVG,
  AppointmentSVG,
  CatalogueSVG,
  OrderSVG,
  OrganizerControlSVG,
} from "@/components/ui";
import "swiper/css";
import "swiper/css/navigation";

const solutions = [
  {
    icon: <CatalogueSVG />,
    title: "Exhibitor Catalogue & Inventory",
    description:
      "Product listings with images, descriptions, availability dates, and multi-user booth management.",
  },
  {
    icon: <AppointmentSVG />,
    title: "Appointments & On-Floor Meetings",
    description:
      "Real-time slot booking with waitlists and QR based locked chat between attendee to exhibitor that stays active post-event for follow-ups.",
  },
  {
    icon: <OrderSVG />,
    title: "Orders, Invoicing & Payments",
    description:
      "In-app ordering with tracking, multi-currency invoicing, payment proof uploads, and auto-generated receipts.",
  },
  {
    icon: <OrganizerControlSVG />,
    title: "Organizer Control & Ops",
    description: "Registrant lists, booth control, and bulk actions.",
  },
  {
    icon: <AnalyticsSVG />,
    title: "Analytics, Reporting & Sustainability",
    description: "Live dashboards and exportable post-event reports.",
  },
];

export const SolutionFeatures = () => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="w-full bg-neutral py-16">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-6 sm:mb-12 gap-8">
            <div className="max-w-[47.69rem] w-full">
              <h2 className="text-background font-semibold text-[clamp(1.75rem,5vw,2.2rem)] font-montserrat leading-[120%] mb-2.5">
                Our Solutions
              </h2>
              <p className="text-background text-xl font-medium">
                Powering the next generation of trade fairs, our unified
                platform automates registration, booth management, catalogs, and
                engagement so every participant gets more from your event
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-2">
              <button
                ref={setPrevEl}
                className="w-13.5 h-13.5 rounded-full bg-background hover:bg-background/90 flex items-center justify-center transition-colors disabled:bg-[#d3671a] text-black disabled:text-background/50 disabled:hover:border-background/30"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-6 h-6 text-inherit" />
              </button>
              <button
                ref={setNextEl}
                className="w-13.5 h-13.5 rounded-full bg-background hover:bg-background/90 flex items-center justify-center transition-colors disabled:bg-[#d3671a] disabled:text-background/50 disabled:hover:border-background/30"
                aria-label="Next slide"
              >
                <ArrowRight className="w-6 h-6 text-inherit" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl,
              nextEl,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="w-full"
          >
            {solutions.map((solution, index) => (
              <SwiperSlide key={index} className="bg-transparent">
                <SolutionFeatureCard
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
