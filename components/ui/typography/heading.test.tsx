import { render, screen } from "@testing-library/react"
import Heading from "@/components/ui/typography/Heading"

describe("Heading", () => {
  it("renders the correct heading level", () => {
    render(<Heading level={1}>Heading Level 1</Heading>)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByText("Heading Level 1")).toBeInTheDocument()
  })

  it("applies the correct size class based on the level prop", () => {
    render(<Heading level={2}>Heading Level 2</Heading>)
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass("text-4xl")
  })
})
