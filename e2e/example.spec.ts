import { CONFIG } from "@/config";
import { test, expect } from "@playwright/test";

test("has Next.js logo", async ({ page }) => {
  await page.goto(`${CONFIG.default.APP_URL.CLIENT.FULL_URL}`);

  const image = await page.$("img");
  expect(image).toBeTruthy();
  expect(await image?.getAttribute("alt")).toBe("Vercel Logo");
});
