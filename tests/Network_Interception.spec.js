import { test } from '@playwright/test';
test.describe('Testing', () => {
  test('upload file', async ({ page }) => {
    // Log browser console messages to Node.js
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    // Navigate to the page (required for fetch to work)
    // Intercept and fulfill the request
    await page.route('http://localhost:8080/api/data', async route => {
      console.log('Intercepted request to:', route.request().url());
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Mocked response!' }),
      });
    });
    // Evaluate fetch inside browser and return result
     await page.evaluate(async () => {
      console.log('Hello from browser context');
      const res = await fetch('http://localhost:8080/api/data');
      const data = await res.json();
      console.log('Got response:', data);
      return data;
    });
    // Log result in Node.js
  });
});
