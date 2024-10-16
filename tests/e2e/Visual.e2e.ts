import { expect, test } from "@playwright/test";

test.describe("Visual testing", () => {
  test.describe("Static pages", () => {
    test("should take screenshot of the homepage", async ({ page }) => {
      await page.goto("/");
      const name = await page.innerText(".heading");
      expect(name).toBe("Welcome to Affordibit");
    });
  });
});
