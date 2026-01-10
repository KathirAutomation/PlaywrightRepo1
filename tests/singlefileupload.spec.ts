import {test, expect, Browser, Page} from '@playwright/test'
import { chromium } from '@playwright/test'
import { MIMEType } from 'util';
//import { title } from 'process';

test('Singlefileupload', async()=>{
const browser:Browser = await chromium.launch({headless:false});
const page:Page = await browser.newPage();
await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");

//upload single file
//await page.locator('input[name="upfile"]').setInputFiles("C:/Users/HP/Desktop/Fuelbill.pdf");

//uploaded files from buffer memory
await page.locator('input[name="upfile"]').setInputFiles({
    name: 'kathirresume.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('This is my resume')

});

await page.waitForTimeout(10000);

});