import { render, screen } from "@testing-library/react";

import AuthCoverCarousel from "@/components/carousels/AuthCoverCarousel";

describe("AuthCoverCarousel", () => {
  it("should render the AuthCoverCarousel component", () => {
    render(<AuthCoverCarousel />);

    const carousel = screen.getByTestId("auth-carousel");
    expect(carousel).toBeInTheDocument();
  });
});
