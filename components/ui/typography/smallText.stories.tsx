import { Meta, StoryObj } from "@storybook/react"

import { SmallText as ST } from "@/components/ui/typography"

const meta: Meta = {
  title: "Components/Ui/Typography",
  component: ST
}

export default meta

type Story = StoryObj<typeof ST>

export const SmallText: Story = {
  args: {
    children: "SmallText"
  }
}
