import {test, expect} from '@playwright/test';
test ('locators practice', async({page})=>{

    await page.goto("https://www.amazon.in/");
    //await page.getByPlaceholder("Search Amazon.in").fill("iphone 14 pro max");

    //await page.getByRole('button', {name: 'Go'}).click();
    await page.getByRole('button', {name: 'Go', exact: true}).click();












})
