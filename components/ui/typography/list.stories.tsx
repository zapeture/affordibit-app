import { List as L } from "@/components/ui/typography"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Components/Ui/Typography",
  component: L
}

export default meta

type Story = StoryObj<typeof L>

export const List: Story = {
  args: {
    items: ["Item 1", "Item 2", "Item 3"]
  }
}
