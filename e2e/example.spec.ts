import { CONFIG } from '@/config'
import { test, expect } from '@playwright/test'

test('has text Hello World', async ({ page }) => {
  await page.goto(`http://localhost:5555`)

  const title = await page.innerText('h1')
  expect(title).toBe('Hello World')
})
