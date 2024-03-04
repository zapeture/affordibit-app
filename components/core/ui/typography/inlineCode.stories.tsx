import { Meta, StoryObj } from "@storybook/react"
import { InlineCode } from "@/components/core/ui/typography"

const meta: Meta = {
  title: "Components/Ui/Typography",
  component: InlineCode
}

export default meta

type Story = StoryObj<typeof InlineCode>

export const InlineCodeStory: Story = {
  args: {
    children: "InlineCode"
  }
}
