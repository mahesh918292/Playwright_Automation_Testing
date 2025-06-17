// Importing required modules from the Playwright test package
import { test } from '@playwright/test'

// Importing Page object type for improved type checking and code readability
import { Page } from '@playwright/test'

// Defining a Playwright test with the name "Testing Inputs"
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

  // Step 1: Navigate to the droppable demo page and wait for the page to fully load
  await test.step('Navigate to the page and wait for full load', async () => {
    await page.goto('https://demoqa.com/droppable') // Go to the page with draggable and droppable elements
  });

  // Step 2: Drag the draggable element and drop it onto the droppable area
  await test.step('Drag and Drop action', async () => {
    const drop = await page.locator('#droppable').first()   // Locate the drop target element
    const drag = await page.locator('#draggable')           // Locate the draggable source element
    await drag.dragTo(drop)                                 // Perform drag-and-drop operation
    await page.waitForTimeout(1000)                         // Wait 1 second to observe the result (optional)
  });

});
