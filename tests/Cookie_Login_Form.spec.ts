// Importing required modules from the Playwright test library
import { test, expect } from '@playwright/test'

// Importing Page type for strong typing and better code readability
import { Page } from '@playwright/test'

// Defining a test case named 'Testing Inputs'
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

  // Step 1: Navigate to the alert demo page and wait until fully loaded
  await test.step('Navigate to the alert page and wait for full load', async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');          // Opens the alert page
    await page.waitForLoadState('load');                  // Wait until the page is fully loaded
  });

  await test.step('FIll username',async()=>{
        await page.fill('input[name="username"]','Admin') // Enter Username

        await page.fill('input[name="password"]','password')  // Enter password

        await page.click('button[type="submit"]') // Login

        await page.context().storageState({ path:'auth.json'}); // Save the cookie

  })
  
});

// After logging if we want to use that in specific test case then 
// test.use({ storageState: 'auth.json' }); inside the test case or top of the test casse
// if we want glabally means
// we need to specify that inside use in playwright.config.ts
