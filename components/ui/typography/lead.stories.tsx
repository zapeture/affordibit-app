import { Meta, StoryObj } from "@storybook/react"
import { Lead as LD } from "@/components/ui/typography"

const meta: Meta = {
  title: "Components/Ui/Typography",
  component: LD
}

export default meta

type Story = StoryObj<typeof LD>

export const Lead: Story = {
  args: {
    children: "Lead"
  }
}
