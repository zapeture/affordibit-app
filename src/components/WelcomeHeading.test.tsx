import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import WelcomeHeading from "./WelcomeHeading";

describe("sample test", () => {
  test("render welcome WelcomeHeading", () => {
    render(<WelcomeHeading />);
  });
});
