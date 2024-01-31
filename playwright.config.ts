require('dotenv').config({ path: '.env.test' })
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  webServer: {
    command: 'yarn start',
    url: `http://localhost:${process.env.NEXT_PUBLIC_PORT}`,
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  use: {
    trace: 'on-first-retry',
    baseURL: `http://localhost:${process.env.NEXT_PUBLIC_PORT}`,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
