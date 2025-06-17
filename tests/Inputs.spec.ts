// Importing Required modules from the playwright test
import {test,expect} from '@playwright/test'
// Importing Page object to specify the return type of the test ( Increaases redability )
import { Page } from '@playwright/test'
// Defining a test 
test('Testing Inputs', async ({ page }: { page: Page }): Promise<void> => {

    await test.step('Navigate to the page and wait for full load', async () => {
        await page.goto('https://letcode.in/edit')
        await page.waitForLoadState('load')
    });

    await test.step('Fill first & last name input', async () => {
        await page.getByPlaceholder('Enter first & last name').fill('Mahesh')
    });

    await test.step('Clear the text from input with ID #clearMe', async () => {
        await page.locator('#clearMe').fill('')
    });

    await test.step('Check if #noEdit input is disabled', async () => {
        const disabledinput = await page.locator('#noEdit')
        expect(disabledinput).toBeDisabled()
    });

    await test.step('Check if #dontwrite input is readonly', async () => {
        const readonlyboolean = await page.locator('#dontwrite').getAttribute('readonly')
        await expect(readonlyboolean).toEqual("")
    });

    await test.step('Get the value from #getMe input and validate it', async () => {
        const gettext = await page.locator('#getMe').inputValue()
        await expect.soft(gettext).toBe('ortonikc')
    });

});
