// Importing required modules from the Playwright test package
import { test } from '@playwright/test'

// Importing Page object type for improved type checking and code readability
import { Page } from '@playwright/test'

// Defining a Playwright test with the name "Testing Inputs"
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

  // Step 1: Navigate to the LetCode dropdowns page and wait for the full load
  await test.step('Navigate to the page and wait for full load', async () => {
    await page.goto('https://demoqa.com/droppable')
  });

  // Step 2: Select a value ("dd") from the multi-select dropdown of superheroes
  await test.step('Select "dd" from multi-select superheroes dropdown', async () => {
        const drop=await page.locator('#droppable').first()
                const drag=await page.locator('#draggable')
        await drag.dragTo(drop)
        await page.waitForTimeout(1000)                // Select the option with value="dd"
  });

 
});


