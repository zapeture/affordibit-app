import { render, screen } from "@testing-library/react";

import AffordibitLogo from "@/components/branding/AffordibitLogo";

describe("AffordibitLogo", () => {
  it("should render the Affordibit logo", () => {
    const title: string = "Affordibit";
    render(<AffordibitLogo title={title} />);

    const logo = screen.getByTestId("affordibit-logo");
    expect(logo).toBeInTheDocument();
  });

  it("should render the Affordibit logo with the title", () => {
    render(<AffordibitLogo />);

    const title = screen.getByText("Affordibit");
    expect(title).toBeInTheDocument();
  });
});
