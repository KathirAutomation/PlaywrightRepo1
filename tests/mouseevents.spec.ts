import {test, expect, Browser, Page, BrowserContext} from '@playwright/test'
import { chromium, firefox } from '@playwright/test'
//import { title } from 'process';

test('Drag and Drop element to element', async()=>{
const browser:Browser = await chromium.launch({headless:false});
const page:Page = await browser.newPage();
await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

//Double click
await page.getByText('Double-Click Me To See Alert').dblclick();

//Right click or Context click
await page.getByText('right click me').click({button: 'right'});

//Shift + click
await page.goto("https://the-internet.herokuapp.com/shifting_content");
await page.getByText('Example 1: Menu Element1').click({modifiers: ["Shift"]});


});