import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import Image from "next/image"
import { Heading, Paragraph } from "@/components/core/ui/typography"

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
      className="w-full max-w-[524px] border border-white"
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
              <Heading level={3} className="text-white">
                {slide.heading}
              </Heading>
              <Paragraph className="text-white">{slide.subHeading}</Paragraph>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
