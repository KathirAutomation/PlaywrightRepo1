import {test, expect, Browser, Page} from '@playwright/test'
import {chromium} from '@playwright/test'

test('Basic Auth', async()=>{
const browser:Browser = await chromium.launch({headless:false});
const page:Page = await browser.newPage();

const username = 'admin';
const password = 'admin';
// const header = 'Basic '+ btoa(username +':'+ password);
// page.setExtraHTTPHeaders({Authorization : header});

page.setExtraHTTPHeaders({Authorization : createAuthHeader(username , password)});

await page.goto('https://the-internet.herokuapp.com/basic_auth');


});

function createAuthHeader(username:any , password:any){
    return 'Basic '+ btoa(username +':'+ password);
}