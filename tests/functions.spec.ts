import {test, expect} from "@playwright/test"
import { CommonFunctions } from "../Helper/CommonFunctions"
test('functions', async({page})=>{

    const obj=new CommonFunctions(page)
    await obj.launchApp();
    await page.waitForTimeout(3000)

    await obj.login('standard_user', 'secret_sauce')
    await page.waitForTimeout(3000)

})