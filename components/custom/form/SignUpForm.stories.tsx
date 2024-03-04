import type { Meta, StoryObj } from "@storybook/react"
import SignUpForm from "@/components/custom/form/SignUpForm"

const meta: Meta<typeof SignUpForm> = {
  title: "Components/Ui/Form",
  component: SignUpForm
}

export default meta

type Story = StoryObj<typeof SignUpForm>

export const SignUp: Story = {
  args: {
    children: "Primary",
    variant: "primary"
  }
}
