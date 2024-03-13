"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import { Heading, Paragraph } from "@/components/core/ui/typography"

import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"

interface AuthCarouselProps {
  slides: Array<{
    heading?: string
    subHeading?: string
    image: string
  }>
}

export default function AuthCarousel({ slides }: AuthCarouselProps) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true, enabled: true }}
      modules={[Pagination]}
      className="w-full max-w-[524px]"
    >
      {slides?.length > 0 &&
        slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <Image
                src={slide.image}
                alt={`slide-${index}`}
                width={524}
                height={524}
              />
              <section className="w-full mb-[40px]">
                <Heading level={4} className="text-white text-center font-bold">
                  {slide.heading}
                </Heading>
                <Paragraph className="text-white text-center text-sm font-normal mt-[12px]">
                  {slide.subHeading}
                </Paragraph>
              </section>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
