require("dotenv").config({ path: ".env.test" })
import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  webServer: {
    command: `yarn build && next start -p ${process.env.NEXT_PUBLIC_PORT}`,
    url: `http://localhost:${process.env.NEXT_PUBLIC_PORT}`,
    ignoreHTTPSErrors: true,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI
  },
  use: {
    trace: "on-first-retry",
    baseURL: `http://localhost:${process.env.NEXT_PUBLIC_PORT}`
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
})
