// Importing required modules from the Playwright test library
import { test, expect } from '@playwright/test'

// Importing Page type for strong typing and better code readability
import { Page } from '@playwright/test'

// Defining a test case named 'Testing Inputs'
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

  // Step 1: Navigate to the alert demo page and wait until fully loaded
  await test.step('Navigate to the alert page and wait for full load', async () => {
    await page.goto('https://letcode.in/alert');          // Opens the alert page
    await page.waitForLoadState('load');                  // Wait until the page is fully loaded
  });

  // Step 2: Handle simple alert box and accept it
  await test.step('Handle simple alert by accepting it', async () => {
    page.once('dialog', async (dialog) => {               // Listen for the alert dialog once
      console.log('Alert message:', dialog.message());    // Print the alert message to console
      await dialog.accept();                              // Accept the alert
    });

    await page.click('#accept');                          // Trigger the alert
  });

  // Step 3: Handle confirmation alert and accept it
  await test.step('Handle confirm alert by accepting it', async () => {
    page.once('dialog', async (dialog) => {               // Listen for the confirmation dialog
      console.log('Prompt message:', dialog.message());   // Log the message
      await dialog.accept();                              // Accept the confirm dialog
    });

    await page.click('#confirm');                         // Trigger the confirm alert
  });

  // Step 4: Handle prompt alert by sending input and accepting it
  await test.step('Handle prompt alert by entering "Hello" and accepting it', async () => {
    page.once('dialog', async (dialog) => {               // Listen for the prompt dialog
      console.log('Prompt message:', dialog.message());   // Log the prompt message
      await dialog.accept('Hello');                       // Enter 'Hello' in the prompt and accept
    });

    await page.click('#prompt');                          // Trigger the prompt dialog
  });

});
