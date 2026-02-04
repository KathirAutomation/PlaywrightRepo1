import {test, expect, Browser, Page} from '@playwright/test'
import { chromium, firefox} from '@playwright/test'
//import { title } from 'process';

test('Focus Element', async()=>{
const browser:Browser = await chromium.launch({headless:false});
const page:Page = await browser.newPage();
await page.goto("https://orangehrm.com/en/30-day-free-trial");

await page.getByText('Allow all').focus();
await page.getByText('Allow all').click();

//await page.locator('#Form_getForm_Name').focus();
const fullname = page.locator('#Form_getForm_Name');
await fullname.focus();
await fullname.fill('Kathir');

const countrydropdown = 'select#Form_getForm_Country';

await page.selectOption(countrydropdown, {value: 'Algeria'});


// Wait for the iframe to appear 
const frameLocator = page.frameLocator('iframe[title="reCAPTCHA"]');
// Target the checkbox inside the iframe 
const checkbox = frameLocator.locator('.recaptcha-checkbox-border'); 
// Expect it to be visible 
await expect(checkbox).toBeVisible();
//await checkbox.click();
//await expect(checkbox).toBeChecked();
await expect(page.getByRole('link',{name: 'Privacy Policy.'})).toBeVisible();
await expect(page.getByRole('link',{name: 'Privacy Policy.'})).toBeEnabled();




await page.waitForTimeout(5000);

});