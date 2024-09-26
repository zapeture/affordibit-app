import type { Meta, StoryObj } from "@storybook/react";

import AuthCoverCarousel from "@/components/carousels/AuthCoverCarousel";

const meta = {
  title: "Components/Carousels/AuthCoverCarousel",
  component: AuthCoverCarousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "blue", // Setting the default background
      values: [{ name: "blue", value: "#2563EB" }],
    },
  },
} satisfies Meta<typeof AuthCoverCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAuthCoverCarousel = {
  args: {},
} satisfies Story;
