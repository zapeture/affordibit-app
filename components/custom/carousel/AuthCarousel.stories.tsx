import AuthCarousel from "@/components/custom/carousel/AuthCarousel"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AuthCarousel> = {
  title: "Components/Ui/Carousel",
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
        heading: "Heading 1",
        subHeading: "Subheading 1",
        image: "https://via.placeholder.com/300"
      },
      {
        heading: "Heading 2",
        subHeading: "Subheading 2",
        image: "https://via.placeholder.com/300"
      },
      {
        heading: "Heading 3",
        subHeading: "Subheading 3",
        image: "https://via.placeholder.com/300"
      }
    ]
  }
}
