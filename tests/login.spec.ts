import {test, expect, Browser, Page, BrowserContext} from '@playwright/test'
import { chromium } from '@playwright/test'
//import { title } from 'process';

test('LoginPage', async()=>{
const browser:Browser = await chromium.launch({headless:false});
//const browsercontext_1:BrowserContext = await browser.newContext();
//const page1:page = await browsercontext_1.newPage();
const page:Page = await browser.newPage();
await page.goto("https://naukri.com/");
const loginbutton = page.locator('#login_Layer');
await loginbutton.click();

// Step 3: Wait for popup to appear
  const popup = page.locator("[name='login-form']"); // modal container
  await expect(popup).toBeVisible();

  const EmailID =  page.locator("[placeholder='Enter your active Email ID / Username']");
  const Pwd =  page.locator("[placeholder='Enter your password']");
  const buttonlogin =  page.locator("[class='btn-primary loginButton']");

  await EmailID.fill('kathiresan.be@gmail.com');
  await Pwd.fill('Kirkat@1990');
  await buttonlogin.click();

  const title = await page.title();
  console.log("PageTitle= ",title);

  
  await page.screenshot({path:'homepage.png'});
  await expect(title).toEqual('Jobs - Recruitment - Job Search - Employment - Job Vacancies - Naukri.com');


  browser.close();


});