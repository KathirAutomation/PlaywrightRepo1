import {expect, test, Page} from '@playwright/test'

test ('Mock API request', async({page})=>{

    await page.route('*/**/api/v1/fruits', async route => {
        const json = [{name: 'Guva', id: 31}]
         await route.fulfill({json});   
    
    });

    await page.goto("https://demo.playwright.dev/api-mocking/");

    await expect(page.getByText('Guva')).toBeVisible();

});

test ('Mock API response', async({page})=>{

    await page.route('*/**/api/v1/fruits', async route =>{
        const response = await route.fetch();
        const json = await response.json();
        json.push({name: 'Grape', id: 34});
        await route.fulfill({response, json});
    })
    await page.goto("https://demo.playwright.dev/api-mocking/");
     await expect((page.getByText('Grape'))).toBeVisible();

})