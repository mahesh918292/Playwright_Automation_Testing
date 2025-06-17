// Importing Required modules from the playwright test
import { test, expect } from '@playwright/test'

// Importing Page object to specify the return type of the test (Increases readability)
import { Page } from '@playwright/test'

// Defining a test
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

    // Step 1: Navigate to the radio button test page and wait for full load
    await test.step('Navigate to the radio button test page and wait for full load', async () => {
        await page.goto('https://letcode.in/slider')       // Navigates to the target page
        await page.waitForLoadState('load')               // Waits until the page is fully loaded
    });

    // Step 2: Verify "Yes" radio button is not checked and then click it
    await test.step('Verify "Yes" radio button is not checked and then click it', async () => {
        const slider = page.locator('input[name="generate"]');
        await slider.evaluate((el: HTMLInputElement) => {
            el.value = '70'; // Set desired value
  el.dispatchEvent(new Event('input', { bubbles: true }));  // Triggers real-time updates
  el.dispatchEvent(new Event('change', { bubbles: true })); // Triggers final change
        });
        await page.waitForTimeout(1000)             // Wait for 1 second (for demo purposes)
    });

    

});
