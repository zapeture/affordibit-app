import { StoryObj, Meta } from "@storybook/react"
import SignupForm from "@/components/custom/form/SignupForm"

const meta: Meta<typeof SignupForm> = {
  title: "Components/Ui/Form/SignupForm",
  component: SignupForm
}

export default meta

type Story = StoryObj<typeof SignupForm>

export const Default: Story = {
  args: {
    heading: "Sign Up for an Account"
  }
}
