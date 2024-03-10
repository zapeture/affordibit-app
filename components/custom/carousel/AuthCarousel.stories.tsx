import AuthCarousel from "@/components/custom/carousel/AuthCarousel"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AuthCarousel> = {
  title: "Components/Ui/Carousel/AuthCarousel",
  component: AuthCarousel
}

export default meta

type Story = StoryObj<typeof AuthCarousel>

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: "auth-blue"
    }
  },
  args: {
    slides: [
      {
        heading: "Customizable Multipurpose Dashboard",
        subHeading: "Everything you need in an easily customizable dashboard.",
        image:
          "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png"
      },
      {
        heading: "Customizable Multipurpose Dashboard",
        subHeading: "Everything you need in an easily customizable dashboard.",
        image:
          "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png"
      },
      {
        heading: "Customizable Multipurpose Dashboard",
        subHeading: "Everything you need in an easily customizable dashboard.",
        image:
          "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png"
      }
    ]
  }
}
