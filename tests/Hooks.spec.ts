// example.spec.ts
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('🏁 Starting test suite');
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://letcode.in/test');
 
 
  console.log('📍 Navigated to homepage');
});

test('Test Example.com title', async ({ page }) => {
  await page.screenshot({path:'./screenshots/1.png'})
  await expect(page).toHaveTitle('Workspace | LetCode with Koushik');
});

test.afterEach(async () => {
  console.log('✅ Test completed');
});

test.afterAll(async () => {
  console.log('🎉 Finished test suite');
});
