// Importing required modules from the Playwright test package
import { test, expect } from '@playwright/test'

// Importing Page object type for improved type checking and code readability
import { Page } from '@playwright/test'

// Defining a Playwright test with the name "Testing Inputs"
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

  // Step 1: Navigate to the LetCode dropdowns page and wait for the full load
  await test.step('Navigate to the page and wait for full load', async () => {
    await page.goto('https://letcode.in/dropdowns');      // Navigate to dropdown demo page
    await page.waitForLoadState('load');                  // Ensure the page is fully loaded
  });

  // Step 2: Select a value ("dd") from the multi-select dropdown of superheroes
  await test.step('Select "dd" from multi-select superheroes dropdown', async () => {
    const select = await page.locator('#superheros');     // Locate the superheroes multi-select dropdown
    await select.selectOption('dd');                      // Select the option with value="dd"
  });

  // Step 3: Select the first fruit (index 0) from the fruits dropdown
  await test.step('Click and select the first fruit (index 0) from fruits dropdown', async () => {
    const select = await page.locator('#fruits');         // Locate the fruits dropdown
    await select.click();                                 // Click to open the dropdown
    await select.selectOption('0');                       // Select the first option using its index as value
  });

});
