import { render, screen } from "@testing-library/react"
import List from "@/components/ui/typography/List"

describe("List", () => {
  it("renders a list with the correct items", () => {
    const items = ["Item 1", "Item 2", "Item 3"]
    render(<List items={items} />)

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })
})
