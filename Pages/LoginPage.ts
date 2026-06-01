import { Page, Locator } from "@playwright/test";
export class LoginPage{

      readonly page: Page
      readonly loginLink: Locator
      readonly usernameInput: Locator
      readonly passwordInput: Locator
      readonly loginButton: Locator

      constructor(page : Page){
            this.page=page;
            this.loginLink=page.locator('#login2')
            this.usernameInput = page.locator('#loginusername')
            this.passwordInput = page.locator('#loginpassword')  
            this.loginButton   = page.locator('button', {hasText: 'Log in'})
            //To click <x-details> or button with text 'Details' we can use below locator
            //await page.locator('x-details', { hasText: 'Details' }).click();                   
                       
      }
      async gotoLoginPage(){
            await this.page.goto("https://www.demoblaze.com/")
      }
      async login(username: string, password: string){
            await this.loginLink.click()
            await this.usernameInput.fill(username)
            await this.passwordInput.fill(password)
            await this.loginButton.click()
      }
}