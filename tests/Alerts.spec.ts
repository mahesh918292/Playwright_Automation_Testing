// Importing Required modules from the playwright test
import { test, expect } from '@playwright/test'
// Importing Page object to specify the return type of the test (Increases readability)
import { Page } from '@playwright/test'

// Defining a test 
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

  await test.step('Navigate to the alert page and wait for full load', async () => {
    await page.goto('https://letcode.in/alert');
    await page.waitForLoadState('load');
  });

  await test.step('Handle simple alert by accepting it', async () => {
    page.once('dialog', async (dialog) => {
      console.log('Alert message:', dialog.message());
      await dialog.accept();
    });

    await page.click('#accept');
  });

  await test.step('Handle confirm alert by accepting it', async () => {
    page.once('dialog', async (dialog) => {
      console.log('Prompt message:', dialog.message());
      await dialog.accept();
    });

    await page.click('#confirm');
  });

  await test.step('Handle prompt alert by entering "Hello" and accepting it', async () => {
    page.once('dialog', async (dialog) => {
      console.log('Prompt message:', dialog.message());
      await dialog.accept('Hello'); // Send text to prompt and accept
    });

    await page.click('#prompt');
  });

});
