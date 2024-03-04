import type { Meta, StoryObj } from "@storybook/react"
import AuthCarousel from "@/components/custom/carousel/AuthCarousel"

const meta: Meta<typeof AuthCarousel> = {
  title: "Components/Custom/Carousel",
  component: AuthCarousel,
  parameters: {
    backgrounds: {
      default: "black",
      values: [{ name: "black", value: "#000" }]
    }
  }
}

export default meta

type Story = StoryObj<typeof AuthCarousel>

export const Carousel: Story = {
  args: {
    slides: [
      {
        heading: "Customizable Multipurpose Dashboard",
        subheading: "Everything you need in an easily customizable dashboard.",
        image:
          "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png"
      },
      {
        heading: "Customizable Multipurpose Dashboard",
        subheading: "Everything you need in an easily customizable dashboard.",
        image:
          "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png"
      }
    ]
  }
}
