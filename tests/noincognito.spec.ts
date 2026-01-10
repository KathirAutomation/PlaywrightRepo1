import {test, expect, Browser, Page, BrowserContext} from '@playwright/test'
import {chromium, firefox, webkit} from '@playwright/test'

test('No Incognito', async()=>{
const Browser:BrowserContext = await chromium.launchPersistentContext('', {headless:false});
const pages = Browser.pages();
const page:Page = pages[0];
//const page:Page = await Browser.newPage();
await page.goto('https://naukri.com/');
const loginbutton = page.locator('#login_Layer');
await loginbutton.click();


})