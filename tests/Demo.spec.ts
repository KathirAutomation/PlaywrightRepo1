import {test, expect, request, BrowserContext, chromium, Page} from '@playwright/test'
import PostRequest from '../Payload/PostRequest.json'

test.describe('POST API testing', ()=>{

test('Post sucess check', async({request})=>{
const Postrep = await request.post('https://api.restful-api.dev/objects', {data: PostRequest });
const Postresponse = await Postrep.text();
const response = await Postrep.json();
console.log(Postresponse);
expect(Postrep.status()).toBe(200);
expect(response.data).toHaveProperty('year');
expect(response.data).toHaveProperty('price');
const var1= await response.data.year;
const var2= await response.data.price;
console.log('var1 :', var1);
console.log('var2: ', var2);
expect(response.data.year).toBe(2019);
expect(response.data.price).toBe(1849.99);

})
})

test('Noincognito window', async()=>{
    const browser:BrowserContext = await chromium.launchPersistentContext('',{headless:false});
    //const page = await browser.newPage();
    const pages =  browser.pages();
    const page = pages[0];
    


})