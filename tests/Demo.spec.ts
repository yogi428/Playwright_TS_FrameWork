import {test, expect } from '@playwright/test';

test('Launch browser', async ({page})=>{

await page.goto("https://www.google.com/");
const titlename=await page.title();
console.log(titlename);

expect(titlename).toBe('Google');






})