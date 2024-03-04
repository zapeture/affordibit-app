import { Meta, StoryObj } from "@storybook/react"
import { Paragraph as P } from "@/components/core/ui/typography"

const meta: Meta = {
  title: "Components/Ui/Typography",
  component: P
}

export default meta

type Story = StoryObj<typeof P>

export const Paragraph: Story = {
  args: {
    children: "Paragraph"
  }
}
