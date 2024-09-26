import { render, screen } from "@testing-library/react";

import AuthFooterLinks from "@/components/navigation/AuthFooterLinks";

describe("AuthFooterLinks", () => {
  it("should render the Affordibit logo", () => {
    render(<AuthFooterLinks />);

    const authFooterLinks = screen.getByTestId("auth-footer-links");
    expect(authFooterLinks).toBeInTheDocument();
  });
});
