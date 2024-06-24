import type { Meta, StoryObj } from "@storybook/react";

import AffordibitLogo from "@/components/branding/AffordibitLogo";

const meta = {
  title: "Components/Branding/AffordibitLogo",
  component: AffordibitLogo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [
        { name: "blue", value: "#2563EB", default: true },
        { name: "light", value: "#FFFFFF" },
      ],
    },
  },
} satisfies Meta<typeof AffordibitLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAffordibitLogo: Story = {
  args: {
    title: "Affordibit",
    linkUrl: "/",
    variant: "light",
  },
};

export const BlueAffordibitLogo: Story = {
  args: {
    title: "Affordibit",
    linkUrl: "/",
    variant: "blue",
    textColorLight: "#000000",
    textColorBlue: "#FFFFFF",
  },
};

export const CustomColorsAffordibitLogo: Story = {
  args: {
    title: "Affordibit",
    linkUrl: "/",
    variant: "blue",
    textColorLight: "#333333",
    textColorBlue: "#FFD700",
    customFillColorLight: "#FFA500",
    customFillColorBlue: "#00FF00",
  },
};

export const ResponsiveAffordibitLogo: Story = {
  args: {
    title: "Affordibit",
    linkUrl: "/",
    variant: "light",
    textColorLight: "#0F172A",
    textColorBlue: "#FFFFFF",
    customFillColorLight: "#2563EB",
    customFillColorBlue: "#FFFFFF",
    className: "responsive-logo",
  },
};
