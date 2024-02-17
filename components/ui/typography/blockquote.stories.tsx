import { Meta, StoryObj } from "@storybook/react"

import { Blockquote as BQ } from "@/components/ui/typography"

const meta: Meta = {
  title: "Components/Ui/Typography",
  component: BQ
}

export default meta

type Story = StoryObj<typeof BQ>

export const Blockquote: Story = {
  args: {
    children: "Blockquote"
  }
}
