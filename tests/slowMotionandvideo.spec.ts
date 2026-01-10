import {test, expect, Page, chromium} from '@playwright/test'

test('Slow Motion and video recording', async()=>{

    const browser = await chromium.launch({slowMo: 500, headless: false});
    const context = await browser.newContext({recordVideo: {
        dir: 'Videos/',
        size:{width: 800, height: 600}
    }});
    const page = await context.newPage();
    await page.goto("https://naukri.com/");
    const loginbutton = page.locator('#login_Layer');
    await loginbutton.click();
    await page.close();

})