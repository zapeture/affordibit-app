import type { Meta, StoryObj } from "@storybook/react";

import DashboardSidebar from "./DashboardSidebar";

const meta = {
  title: "Templates/Dashboard/DashboardSidebar",
  component: DashboardSidebar,
  tags: ["autodocs"],
} satisfies Meta<typeof DashboardSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDashboardSidebar = {} satisfies Story;
