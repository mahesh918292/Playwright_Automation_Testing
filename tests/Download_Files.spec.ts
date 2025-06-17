// Importing required modules from the Playwright test package
import { test } from '@playwright/test'
// Node.js 'path' module to handle file paths
import path from 'path';
// Importing Page object type for improved type checking and code readability
import { Page } from '@playwright/test'

// Defining a Playwright test with the name "Testing Inputs"
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

  // Define the directory where downloaded files will be saved
  const downloadDir = path.resolve(__dirname, 'downloads');

  // Step 1: Navigate to the file download page
  await test.step('Navigate to the page', async () => {
    await page.goto('https://letcode.in/file') // Go to the file download page
  });

  // Step 2: Perform the download action
  await test.step('Drag and Drop action', async () => {

    // Wait for the download to start after clicking the link
    const [ download ] = await Promise.all([
      page.waitForEvent('download'), // Wait for download event
      page.click('a[href="assets/files/sample.xlsx"]') // Click the download link
    ]);

    // Get the default filename suggested by the browser
    const fileName = await download.suggestedFilename();

    // Save the downloaded file to the specified directory
    await download.saveAs(path.join(downloadDir, fileName));

    // Log the saved file path to the console
    console.log('Downloaded to:', path.join(downloadDir, fileName));

    // Optional wait to observe the download process
    await page.waitForTimeout(3000)
  });

});
