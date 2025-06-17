// Importing Required modules from the Playwright test framework
import { test, expect } from '@playwright/test'

// Importing Page object to specify the return type for better readability and type checking
import { Page } from '@playwright/test'

// Defining a Playwright test case with title 'Testing Inputs'
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

    // Declaring a variable to store the reference of the new (popup) page
    var newPage

    // Step 1: Navigate to the window handling page and wait for it to load completely
    await test.step('Navigate to the page and wait for full load', async () => {
        await page.goto('https://letcode.in/window') // Go to the target URL
        await page.waitForLoadState('load')          // Wait for all resources to be fully loaded
    });

    // Step 2: Handle popup (new page) and assert its title
    await test.step('Fill first & last name input', async () => {
        [newPage] = await Promise.all([
            page.waitForEvent('popup'),     // Wait for a new tab or window to open (popup)
            page.click('#home')             // Click on the link that triggers the popup
        ])
        await expect(newPage).toHaveTitle('Workspace | LetCode with Koushik') // Verify title of the new tab
    });

    // Step 3: Switch focus back to the original tab
    await test.step('Navigate to the page and wait for full load', async () => {
        await page.bringToFront()           // Bring the original page to the front
        await page.waitForTimeout(1000)     // Wait for 1 second for demo or visibility
    });

});
