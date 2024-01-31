import { test, expect } from '@playwright/test'

test('has text Hello World', async ({ page }) => {
  await page.goto(`/`)

  const title = await page.innerText('h1')
  expect(title).toBe('Hello World')
})
