import {test, expect} from '@playwright/test';
import Ajv from 'ajv';
import apiUtil from '../tests/utils/api-util'

import GetSchema from '../Payload/GetSchema.json';


test.describe('GET API testing', ()=>{
// Happy path
test('GET API Validation', async({request}) =>{
const GETresp = await request.get("https://api.restful-api.dev/objects");
expect(GETresp.status()).toBe(200);
const resp = await GETresp.text();
const GETResponse = await GETresp.json();
console.log(GETResponse);
const headers = GETresp.headers();
console.log(headers);
expect(resp).toContain('Apple iPad Mini 5th Gen');
expect(GETResponse[1].name).toBe('Apple iPhone 12 Mini, 256GB, Blue');
const var1 = await GETResponse[2].name;
console.log(var1);

});

// Schema validation
test('GET API Validation @Schema', async({request}) =>{
const apiutil = new apiUtil();
const GETresp = await request.get("https://api.restful-api.dev/objects/7");
expect(GETresp.status()).toBe(200);
const resp = await GETresp.text();
const GETResponse = await GETresp.json();
console.log(GETResponse);

//const valid = apiutil.schemavalidation(GetSchema);
const ajv = new Ajv();
const validate = ajv.compile(GetSchema);
//const output = ajv.compile()
const valid = validate(GETResponse);
expect(valid).toBeTruthy;



})
})