// ✅ Importing necessary functions from the Playwright test package
import { test, expect } from '@playwright/test';

// 🔽 Test 1: Skip this test (will not be executed)
test.skip('should skip this test', async ({ page }) => {
  await page.goto('https://letcode.in/test');
});

// 🔽 Test 2: Uncomment to run only this test and skip all others
// test.only('should run only this test', async ({ page }) => {
//   await page.goto('https://letcode.in/test');
// });

// 🔽 Test 3: Mark this test as expected to fail (does not cause test suite failure)
test.fail('should fail intentionally', async ({ page }) => {
  await page.goto('https://letcode.in/test');
  await expect(page.locator('h1')).toHaveText('Wrong Text'); // Intentional failure
});

// 🔽 Test 4: Mark this test as slow (extends timeout for long-running actions)
test('slow test', async ({ page }) => {
  test.slow(); // Increases default timeout for this test
  await page.goto('https://letcode.in/test');
});

// 🔽 Test 5: Mark this test as a "fixme" (skipped and flagged as needing implementation/fix)
test.fixme('fixme test', async ({ page }) => {
  // This test is flagged as incomplete or broken
  await page.goto('https://letcode.in/test');
});
