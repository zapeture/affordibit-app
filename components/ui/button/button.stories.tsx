import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button/button"

const meta: Meta<typeof Button> = {
  title: "Components/Ui/Button",
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary"
  }
}

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive"
  }
}

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost"
  }
}

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link"
  }
}

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline"
  }
}
