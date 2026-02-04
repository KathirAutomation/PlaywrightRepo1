import {test, expect, Browser, chromium} from '@playwright/test'

test('Demo test', async({page})=> {

const browser:Browser = await chromium.launch({headless:false})

//First context
const context1 = await browser.newContext()
const page1 = await context1.newPage()
await page1.goto("https://www.gmail.com")
console.log('page1 opened in context1')

//Second context
const context2 = await browser.newContext()
const page2 = await context2.newPage()
await page2.goto("https://playwright.dev/")
console.log('page2 opened in context2')

await context1.close();
await context2.close();

await browser.close();

})