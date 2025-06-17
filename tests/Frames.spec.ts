// Importing Required modules from the Playwright test package
import { test, expect } from '@playwright/test'

// Importing Page object type for type safety and readability
import { Page } from '@playwright/test'

// Defining a test case with a descriptive title
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

  // Step 1: Navigate to the LetCode iframe page and wait until the page is fully loaded
  await test.step('Navigate to the alert page and wait for full load', async () => {
    await page.goto('https://letcode.in/frame')         // Open the iframe demo page
    await page.waitForLoadState('load')                 // Wait for the full page load
  });

  // Step 2: Communicate with an element inside the iframe
  await test.step('Communicating with the element in the iframe', async () => {
    const newpage = await page.frameLocator('#firstFr') // Get a reference to the iframe with id 'firstFr'
    await newpage.getByPlaceholder('Enter name').fill('Mahesh') // Fill the input inside the iframe
    await page.waitForTimeout(1000)                     // Wait for a second (demo pause)
  });

});
