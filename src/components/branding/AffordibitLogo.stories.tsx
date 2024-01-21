import type { Meta, StoryObj } from "@storybook/react";

import AffordibitLogo from "@/components/branding/AffordibitLogo";

const meta = {
  title: "Components/Branding/AffordibitLogo",
  component: AffordibitLogo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "blue", value: "#2563EB", default: true }],
    },
  },
} satisfies Meta<typeof AffordibitLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAffordibitLogo = {
  args: {
    title: "Affordibit",
    linkUrl: "/",
  },
} satisfies Story;
