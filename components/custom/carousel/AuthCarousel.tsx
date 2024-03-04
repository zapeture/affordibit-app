"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { Heading, Paragraph } from "@/components/core/ui/typography"

interface SlideProps {
  heading?: string
  subheading?: string
  image: string
}

interface AuthCarouselSlideProps {
  slides: SlideProps[]
}
export default function AuthCarousel({ slides }: AuthCarouselSlideProps) {
  return (
    <section className="w-full max-w-[524px] mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt={`Slide-${index}`}
              width={524}
              height={524}
            />
            {slide.heading || slide.subheading ? (
              <div className="w-full  text-center mb-[50px]">
                {slide.heading ? (
                  <Heading level={4} className="text-white">
                    {slide.heading}
                  </Heading>
                ) : null}
                {slide.subheading ? (
                  <Paragraph className="text-white text-center mt-4">
                    {slide.subheading}
                  </Paragraph>
                ) : null}
              </div>
            ) : null}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
