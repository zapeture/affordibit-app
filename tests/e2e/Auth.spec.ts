import { setupClerkTestingToken } from "@clerk/testing/playwright";
import { faker } from "@faker-js/faker";
import { expect, test } from "@playwright/test";

test.describe("Auth", () => {
  test("should register a new user", async ({ page }) => {
    await setupClerkTestingToken({
      page,
      options: {
        frontendApiUrl: "http://localhost:3000/api",
      },
    });

    await page.goto("/sign-up");
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    await page.locator(".cl-formFieldInput__firstName").fill(firstName);
    await page.locator(".cl-formFieldInput__lastName").fill(lastName);
    await page.locator(".cl-formFieldInput__emailAddress").fill(email);
    await page.locator(".cl-formFieldInput__password").fill(password);
    await page.locator(".cl-formButtonPrimary").click();
    await page.waitForURL("/sign-up/verify-email-address");
    const url = new URL(page.url());
    expect(url.pathname).toBe("/sign-up/verify-email-address");
  });

  test("should login a user", async ({ page }) => {
    await page.goto("/sign-in");
    const email = "fortunechainz+clerk_auth_test_user@gmail.com";
    const password = "fortunechainz+clerk_auth_test_user@gmail.com";
    await page.locator(".cl-formFieldInput__identifier").fill(email);
    await page.locator(".cl-formFieldInput__password").fill(password);
    await page.locator(".cl-formButtonPrimary").click();
    await page.waitForURL("/dashboard");
    const url = new URL(page.url());
    expect(url.pathname).toBe("/dashboard");
  });
});
