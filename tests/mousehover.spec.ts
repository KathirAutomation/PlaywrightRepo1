import {test, expect, Browser, Page, BrowserContext} from '@playwright/test'
import { chromium, firefox } from '@playwright/test'
//import { title } from 'process';

test('LoginPage', async()=>{
const browser:Browser = await firefox.launch({headless:false});
const page:Page = await browser.newPage();
await page.goto("https://www.bigbasket.com");
await page.getByText('Shop by').nth(1).click();

await page.getByText('Food Court').nth(1).hover();
await page.getByText('Hot Beverages').first().hover();
await page.getByText('Hot Tea').first().click();

await page.getByText('(4)').isVisible();



await page.waitForTimeout(6000);


});