// Importing Required modules from the playwright test
import { test, expect } from '@playwright/test'

// Importing Page object to specify the return type of the test (Increases readability)
import { Page } from '@playwright/test'

// Defining a test
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

    // Step 1: Navigate to the radio button test page and wait for full load
    await test.step('Navigate to the radio button test page and wait for full load', async () => {
        await page.goto('https://letcode.in/radio')       // Navigates to the target page
        await page.waitForLoadState('load')               // Waits until the page is fully loaded
    });

    // Step 2: Verify "Yes" radio button is not checked and then click it
    await test.step('Verify "Yes" radio button is not checked and then click it', async () => {
        const radio = await page.locator('#yes')          // Locate the radio button with id 'yes'
        await expect(radio).not.toBeChecked()             // Assert that it is not checked
        await radio.click()                               // Click the radio button
        await page.waitForTimeout(1000)                   // Wait for 1 second (for demo purposes)
    });

    // Step 3: Verify first checkbox is checked and then uncheck it
    await test.step('Verify first checkbox is checked and then uncheck it', async () => {
        const check = await page.locator('input[type="checkbox"]').first()  // Locate the first checkbox on the page
        await expect(check).toBeChecked()                    // Assert that it is already checked
        await check.uncheck()                                // Uncheck the checkbox
        await page.waitForTimeout(1000)                      // Wait for 1 second (for demo purposes)
    });

});
