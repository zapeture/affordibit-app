import type { Meta, StoryObj } from "@storybook/react"

import BrandLogo from "@/components/custom/branding/BrandLogo"

const meta: Meta = {
  title: "Components/Ui/Branding",
  component: BrandLogo
}

export default meta

type Story = StoryObj<typeof BrandLogo>

export const Default: Story = {
  args: {
    brandName: "Affordibit",
    link: "/"
  }
}

export const Light: Story = {
  parameters: {
    backgrounds: { default: "auth-blue" }
  },
  args: {
    brandName: "Affordibit",
    link: "/",
    variant: "light"
  }
}
