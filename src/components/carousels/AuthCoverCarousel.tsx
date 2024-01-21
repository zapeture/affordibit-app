"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import React from "react";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

type Slide = {
  headline: string;
  subHeadline: string;
  image: string;
};

interface AuthCoverCarouselsProps {
  slides?: Array<Slide>;
}

const placeholderSlides: Array<Slide> = [
  {
    headline: "Headline 1",
    subHeadline: "Subheadline 1",
    image: "https://via.placeholder.com/524",
  },
  {
    headline: "Headline 2",
    subHeadline: "Subheadline 2",
    image: "https://via.placeholder.com/524",
  },
  {
    headline: "Headline 3",
    subHeadline: "Subheadline 3",
    image: "https://via.placeholder.com/524",
  },
];

export default function AuthCoverCarousel({
  slides = placeholderSlides,
}: AuthCoverCarouselsProps) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      data-testid="auth-carousel"
      modules={[Pagination, Navigation]}
      className="auth-carousel w-full max-w-[400px]"
    >
      {slides?.length > 0
        ? slides.map((slide: Slide) => (
            <SwiperSlide key={crypto.randomUUID()}>
              <div className="flex w-full flex-col items-center justify-center">
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  width={400}
                  height={400}
                />
                <h3 className="mb-1 text-center text-2xl font-bold text-white">
                  {slide.headline}
                </h3>
                <p className="mb-9 text-sm font-normal text-[#F8FAFC]">
                  {slide.subHeadline}
                </p>
              </div>
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
}
