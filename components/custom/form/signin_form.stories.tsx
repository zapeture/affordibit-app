import { StoryObj, Meta } from "@storybook/react"
import SigninForm from "@/components/custom/form/SigninForm"

const meta: Meta<typeof SigninForm> = {
  title: "Components/Ui/Form/SigninForm",
  component: SigninForm
}

export default meta

type Story = StoryObj<typeof SigninForm>

export const Default: Story = {
  args: {
    heading: "Sign Up for an Account",
    welcomeMessage: "Welcome back! Please sign in to your account."
  }
}
