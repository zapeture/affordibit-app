import type { Meta, StoryObj } from "@storybook/react";

import Menu from "./Menu";

const meta = {
  title: "Templates/Dashboard/Menu",
  component: Menu,
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDashboardMenu = {
  args: {
    title: "Menu",
    menuItems: [
      {
        id: 1,
        itemTitle: "Dashboard",
        link: "/dashboard",
        icon: "menu",
      },
      {
        id: 2,
        itemTitle: "Links",
        link: "/links",
        icon: "links",
      },
      {
        id: 3,
        itemTitle: "QR Code",
        link: "/qr",
        icon: "qr",
      },
      {
        id: 4,
        itemTitle: "Pages",
        link: "/pages",
        icon: "pages",
      },
    ],
  },
} satisfies Story;
