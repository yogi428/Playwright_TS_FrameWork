import{test ,expect} from '@playwright/test';

test('for each loop practice', async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("#twotabsearchtextbox").fill("book");

    await page.waitForSelector("[id*='sac-suggestion-row']", {state : 'visible'});
    const elements= await page.locator("[id*='sac-suggestion-row']").all(); //first().click(); - for 1st row
    console.log("total number of elements are " + elements.length);
    //want to see text of these elements
    const elementsText= await page.locator("[id*='sac-suggestion-row']").allTextContents();
    console.log(elementsText);  //printd in array format

    for(const ele of elements)
        {
            await expect(ele).toContainText("book");
        }


})