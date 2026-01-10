import {test, expect, Browser, Page} from '@playwright/test'
import { chromium, firefox } from '@playwright/test'
import { promises } from 'dns';

test('locator test', async()=>{
const browser:Browser = await chromium.launch({headless:false});
const page:Page = await browser.newPage();
await page.goto('https://naukri.com');
const registerbutton = page.locator('id=register_Layer');
await registerbutton.click();

//1.ID
const fullname = page.locator('id=name');
await fullname.fill('kathiresan Periasamy');

//2.class
const Gbutton = page.locator('.google-text');
const GbuttonExists = await Gbutton.isEnabled();
console.log("GbuttonExists ",GbuttonExists);

//3.text
const header = page.locator('text=Create your Naukri profile');
const headerExists = await header.isEnabled();
console.log("HeaderTileExists: ",headerExists);

//4.CSS & Xpath
const Email = page.locator('xpath=//input[@id="email"]');
const mobile = page.locator('css=input#mobile');
await Email.fill('kathiresan.be@gmail.com');
await mobile.fill('1234567890')

//await new Promise(()=>{});


});