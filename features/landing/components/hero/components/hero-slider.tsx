"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { HeroSlide } from "../types";
import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./hero-slider.module.scss";

import "swiper/css";
import "swiper/css/pagination";

interface HeroSliderProps {
  slides: HeroSlide[];
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  return (
    <div className={cn("relative w-full", styles.heroSlider)}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          el: paginationEl,
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className={cn("w-full h-full!")}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full overflow-hidden flex items-center">
              <Image
                src={slide.image}
                alt={slide.alt}
                className="object-cover w-full h-full z-2"
                width={640}
                height={637}
                quality={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="relative z-3 w-full h-[24px] flex justify-center items-center pointer-events-none mt-5.5">
        <div
          ref={setPaginationEl}
          className="flex justify-center items-center pointer-events-auto"
        />
      </div>
    </div>
  );
}
