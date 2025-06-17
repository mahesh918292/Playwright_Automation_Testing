// Importing Required modules from the Playwright test package
import { test, expect } from '@playwright/test'

// Importing Page object type for better readability and type safety
import { Page } from '@playwright/test'

// Defining a test with a descriptive name
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

    // Step 1: Navigate to the input form page and wait for full page load
    await test.step('Navigate to the page and wait for full load', async () => {
        await page.goto('https://letcode.in/edit')        // Open the URL
        await page.waitForLoadState('load')               // Wait for the page to fully load
    });

    // Step 2: Fill the "Enter first & last name" input field with the value 'Mahesh'
    await test.step('Fill first & last name input', async () => {
        await page.getByPlaceholder('Enter first & last name').fill('Mahesh') // Locate by placeholder and fill text
    });

    // Step 3: Clear the text from the input field with ID #clearMe
    await test.step('Clear the text from input with ID #clearMe', async () => {
        await page.locator('#clearMe').fill('')           // Fill with empty string to clear the input
    });

    // Step 4: Check if the input field with ID #noEdit is disabled
    await test.step('Check if #noEdit input is disabled', async () => {
        const disabledinput = await page.locator('#noEdit') // Locate the input
        expect(disabledinput).toBeDisabled()                // Assert it is disabled
    });

    // Step 5: Check if the input with ID #dontwrite is readonly
    await test.step('Check if #dontwrite input is readonly', async () => {
        const readonlyboolean = await page.locator('#dontwrite').getAttribute('readonly') // Get 'readonly' attribute
        await expect(readonlyboolean).toEqual("")        // Expect it to be present (returns empty string if readonly exists)
    });

    // Step 6: Get the value from #getMe input and validate it against expected text
    await test.step('Get the value from #getMe input and validate it', async () => {
        const gettext = await page.locator('#getMe').inputValue()  // Extract the value from input
        await expect.soft(gettext).toBe('ortonikc')                 // Soft assertion allows test to continue even if it fails
    });

});
