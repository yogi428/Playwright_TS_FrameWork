import { Page, Locator } from "@playwright/test";
export class CommonFunctions
{
   page: Page;
    constructor(page: Page)
    {
       this.page=page;
       this.usernameLocator=this.page.getByPlaceholder('Username');
       this.passwordLocator=this.page.getByPlaceholder("Password");
       this.loginButton=this.page.locator("#login-button");
    }

    async launchApp()
    {
        await this.page.goto("https://www.saucedemo.com/")
    }
    async login(username: string, paswword : string)
    {
        await this.getByPlaceholder('Username').fill(username)
        await this.getByPlaceholder("Password").fill(paswword)
        await this.locator("#login-button").click()
    }



}