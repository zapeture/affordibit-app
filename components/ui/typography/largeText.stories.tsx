import { LargeText as LT } from "@/components/ui/typography"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Components/Ui/Typography",
  component: LT
}

export default meta

type Story = StoryObj<typeof LT>

export const LargeText: Story = {
  args: {
    children: "LargeText"
  }
}
