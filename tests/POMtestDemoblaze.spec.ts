import{test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
test('Login page', async({page})=>{

//Login
const login=new LoginPage(page)
await login.gotoLoginPage()
await login.login('yogi333', 'yogi333')
await page.waitForTimeout(3000)

//Home page


//cart



})