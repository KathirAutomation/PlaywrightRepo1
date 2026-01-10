import {test, expect, Browser, Page, BrowserContext} from '@playwright/test'
import { chromium } from '@playwright/test'
//import { title } from 'process';

test('LoginPage', async()=>{
const browser:Browser = await chromium.launch({headless:false});
const page:Page = await browser.newPage();
await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");
const countryoptions = 'select#Contact_CountryCode';
//await page.selectOption(countryoptions, {value : 'KH'});
//await page.selectOption(countryoptions, {label : 'Chile'});
//await page.selectOption(countryoptions, {index : 5});


//select#Contact_CountryCode > option
const alloptions = await page.$$(countryoptions + '> option');
console.log(alloptions.length);

for(const e of alloptions ){
    const text = await e.textContent();
    console.log(text);
}




await page.waitForTimeout(15000);


});