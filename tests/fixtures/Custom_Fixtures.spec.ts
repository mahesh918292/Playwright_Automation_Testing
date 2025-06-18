import { test as base, chromium, Page } from '@playwright/test';

type TestFixtures = {
  loggedInPage: Page;
};

const test = base.extend<TestFixtures>({
  loggedInPage: async ({page}, use) => {
 

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Go to login page
    await page.fill('input[name="username"]', 'Admin'); // Enter username
    await page.fill('input[name="password"]', 'admin123'); // Enter password
    await page.click('button[type="submit"]'); // Click login
    await page.waitForLoadState('networkidle'); // Wait for page to fully load

    await use(page); // Expose logged-in page to the test

  },
});

test('Click',async({loggedInPage})=>{
    await loggedInPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loggedInPage.click('//a[@href="/web/index.php/performance/viewPerformanceModule"]')
    await loggedInPage.waitForTimeout(1000)
    await loggedInPage.click('a[href="/web/index.php/recruitment/viewRecruitmentModule"]')
    await loggedInPage.waitForTimeout(1000) 
})