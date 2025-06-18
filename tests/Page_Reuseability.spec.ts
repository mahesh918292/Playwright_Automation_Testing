// Importing required modules from Playwright
import { test, Page } from '@playwright/test';
// Declaring a variable to hold the page instance (shared across tests)
let page: Page;
// Grouping related tests under 'Dashboard Tests'
test.describe.serial('Dashboard Tests', () => {
  // Runs once before all tests inside this describe block
  test.beforeAll(async ({ browser }) => {
    // Create a new browser context (like a clean browser profile)
    const context = await browser.newContext();
    // Create a new page (tab) in the context and assign to shared variable
    page = await context.newPage();
  });
  // Runs once after all tests are completed
  test.afterAll(async () => {
    // Close the shared page after all tests are done
    await page.close();
  });
  // First test: Visit the practice form page
  test('check dashboard title', async () => {
    // Navigate to the form page
    await page.goto('https://demoqa.com/automation-practice-form');
  });
  // Second test: Fill in the first name field (on the same page)
  test('check user profile link', async () => {
    // Fill in the input field with ID "firstName"
    await page.fill('#firstName', 'Mahesh');
  });
});
