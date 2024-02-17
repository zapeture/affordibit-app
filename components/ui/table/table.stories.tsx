import type { Meta, StoryObj } from "@storybook/react"

import Table from "@/components/ui/table/Table"

const meta: Meta = {
  title: "Components/Ui/Tables",
  component: Table
}

export default meta

type Story = StoryObj<typeof Table>

export const Default: Story = {
  args: {
    headers: ["Header1", "Header2", "Header3"],
    rows: [
      ["Row1Data1", "Row1Data2", "Row1Data3"],
      ["Row2Data1", "Row2Data2", "Row2Data3"],
      ["Row3Data1", "Row3Data2", "Row3Data3"]
    ]
  }
}
