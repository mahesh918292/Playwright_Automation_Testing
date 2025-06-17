// Importing required modules from the Playwright test package
import { test } from '@playwright/test'

// Importing Page object type for improved type checking and code readability
import { Page } from '@playwright/test'

// Defining a Playwright test with the name "Testing Inputs"
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

  // Step 1: Navigate to the droppable demo page and wait for the page to fully load
  await test.step('Navigate to the page ', async () => {
    await page.goto('https://letcode.in/file') // Go to the page with draggable and droppable elements
  });

  // Step 2: Drag the draggable element and drop it onto the droppable area
  await test.step('Drag and Drop action', async () => {
    await page.setInputFiles('.file-cta',"C:/Users/akara/Downloads/TECSTACK.png") 
    await page.waitForTimeout(2000)            // Wait 1 second to observe the result (optional)
  });

});
// Multiple file uploads
// await page.setInputFiles('.file-cta',["C:/Users/akara/Downloads/TECSTACK.png","C:/Users/akara/Downloads/dsa most imp.jpeg"]) 

