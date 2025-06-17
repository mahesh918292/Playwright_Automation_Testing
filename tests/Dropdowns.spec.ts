// Importing Required modules from the playwright test
import {test,expect} from '@playwright/test'
// Importing Page object to specify the return type of the test ( Increaases redability )
import { Page } from '@playwright/test'
// Defining a test 
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

   await test.step('Navigate to the page and wait for full load', async () => {
    await page.goto('https://letcode.in/dropdowns');
    await page.waitForLoadState('load');
});

await test.step('Select "dd" from multi-select superheroes dropdown', async () => {
    const select = await page.locator('#superheros');
    await select.selectOption('dd');
});

await test.step('Click and select the first fruit (index 0) from fruits dropdown', async () => {
    const select = await page.locator('#fruits');
    await select.click();
    await select.selectOption('0');
});


    
});
