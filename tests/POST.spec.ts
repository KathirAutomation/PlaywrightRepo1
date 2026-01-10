import {test , expect, request} from '@playwright/test';
import PostRequest from '../Payload/PostRequest.json';

/*test.beforeEach(async()=>{
    baseURL:'https://api.restful-api.dev';
});*/


test.describe('Post API Testing', () =>{
    test.describe.configure({mode: 'serial'});
 //Verifying 200 status code and header contect-Type value   
test('POSt API validation- test 1 @smoke', async ({}) =>{
    const apiContext = await request.newContext({
        baseURL:'https://api.restful-api.dev'
    });

    const Postresp = await apiContext.post('/objects', {data: PostRequest});
    const PostResponse = await Postresp.json();
    console.log(PostResponse);
    expect(Postresp.status()).toBe(200);
    const headers = Postresp.headers();
    console.log(headers);
    expect(Postresp.headers()['content-type']).toBe('application/json');
    expect(PostResponse.data).toHaveProperty('year');
    expect(PostResponse.data).toHaveProperty('price');
    const var1 = await PostResponse.data.year;
    const var2 = await PostResponse.data.price;
    console.log('Year Value', var1);
    console.log('Price value', var2);
    expect(PostResponse.data.year).toBe(2019);
    expect(PostResponse.data.price).toBe(1849.99);

});
//Verifying Reponse property
test('POSt API validation- test 2', async ({request}) =>{

    const Postresp = await request.post('https://api.restful-api.dev/objects', {data: PostRequest});
    const PostResponse = await Postresp.json();
    console.log(PostResponse);
    expect(Postresp.status()).toBe(200);
    expect(PostResponse.data).toHaveProperty('year');
    expect(PostResponse.data).toHaveProperty('price');

});
//Fetching property value and store
test('POSt API validation- test 3', async ({request}) =>{

    const Postresp = await request.post('https://api.restful-api.dev/objects', {data: PostRequest});
    const PostResponse = await Postresp.json();
    console.log(PostResponse);
    expect(Postresp.status()).toBe(200);
    const var1 = await PostResponse.data.year;
    const var2 = await PostResponse.data.price;
    console.log('Year Value', var1);
    console.log('Price value', var2);
    expect(PostResponse.data.year).toBe(2019);
    expect(PostResponse.data.price).toBe(1849.99);

})

})