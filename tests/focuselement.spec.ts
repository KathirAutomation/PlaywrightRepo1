import {test, expect, Browser, Page} from '@playwright/test'
import { chromium, firefox} from '@playwright/test'
//import { title } from 'process';

test('Focus Element', async()=>{
const browser:Browser = await firefox.launch({headless:false});
const page:Page = await browser.newPage();
await page.goto("https://orangehrm.com/en/30-day-free-trial");

await page.getByText('Allow all').focus();
await page.getByText('Allow all').click();

//await page.locator('#Form_getForm_Name').focus();
const fullname = page.locator('#Form_getForm_Name');
await fullname.focus();
await fullname.fill('Kathir');

const countrydropdown = 'select#Form_getForm_Country';

await page.selectOption (countrydropdown, {value: 'Algeria'});

//const checkbox = await page.getByRole('presentation',{name: 'recaptcha-anchor-label'}).check();

// const checkbox = page.locator('.recaptcha-anchor-label');
//await checkbox.click();
await expect(page.getByRole('presentation',{name: "I'm not a robot"})).toBeVisible();
await expect(page.getByRole('link',{name: 'Privacy Policy.'})).toBeVisible();
await expect(page.getByRole('link',{name: 'Privacy Policy.'})).toBeEnabled();




await page.waitForTimeout(5000);

});