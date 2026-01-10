import {test, expect, Browser, Page, BrowserContext} from '@playwright/test'
import { chromium, firefox } from '@playwright/test'
//import { title } from 'process';

test('Drag and Drop element to element', async()=>{
const browser:Browser = await chromium.launch({headless:false});
const page:Page = await browser.newPage();
await page.goto("https://www.jqueryui.com/resources/demos/droppable/default.html");

//Single commamd:
//await page.locator('#draggable').dragTo(page.locator('#droppable'));

//Multiple commands
await page.locator('#draggable').hover();
await page.mouse.down();
await page.locator('#droppable').hover();
await page.mouse.up();

await page.waitForTimeout(5000);
});