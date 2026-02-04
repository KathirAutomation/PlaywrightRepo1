import {test, expect, Browser, Page} from '@playwright/test'
import { chromium, firefox } from '@playwright/test';
import * as path from 'path'



test ('Multiplefile upload', async()=>{
const browser:Browser = await chromium.launch({headless: false});
const page:Page = await browser.newPage();

await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

//upload Multiple file
await page.locator('input[name="filesToUpload"]')
.setInputFiles([
    path.join("C:/Users/HP/Desktop/Fuelbill.pdf"),
    path.join("C:/Users/HP/Desktop/cvc.docx"),
    path.join("C:/Users/HP/Desktop/Vasantha Kumar resume.pdf")]);

    await page.waitForTimeout(4000);  

 //Deselect files
 await page.locator('input[name="filesToUpload"]').setInputFiles([]);
 

    //upload single file
// await page.locator('input[name="filesToUpload"]')
// .setInputFiles([
//     path.join("C:/Users/HP/Desktop/Fuelbill.pdf")]);


await page.waitForTimeout(6000);


})