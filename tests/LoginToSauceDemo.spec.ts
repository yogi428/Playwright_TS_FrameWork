import {test, expect} from '@playwright/test'
test('user should be able to login', async({page})=>{

      const loginpage=new LoginPage(page)
      loginpage.loginpage()





})