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
    <div className={cn("relative w-[640px]", styles.heroSlider)}>
      <div className="w-full h-[637px] bg-[url('/organizer-bg.svg')] bg-cover bg-no-repeat overflow-hidden  pl-[2.94rem]">
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
                <div className="relative top-[2.31rem] w-[338px] h-[424px] flex justify-center">
                  <div className="absolute -top-20 w-[11.31rem] h-[11.31rem] bg-neutral rounded-full z-1 flex justify-center">
                    <p className="text-white text-[1.37rem] font-bold mt-8">
                      {slide.title}
                    </p>
                  </div>
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    className="object-cover w-full h-full z-2"
                    width={338}
                    height={424}
                    quality={100}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
