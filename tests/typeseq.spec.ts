import {test, expect, Browser, Page, BrowserContext} from '@playwright/test'
import { chromium, firefox } from '@playwright/test'
//import { title } from 'process';

test('Drag and Drop element to element', async()=>{
const browser:Browser = await chromium.launch({headless:false});
const page:Page = await browser.newPage();
await page.goto("https://www.flipkart.com");
await page.getByPlaceholder('Search for Products, Brands and More').pressSequentially('macbook', {delay:500});

await page.waitForTimeout(5000);


});