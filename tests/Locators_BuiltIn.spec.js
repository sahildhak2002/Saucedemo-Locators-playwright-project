import { test, expect } from '@playwright/test';

test('Built-in locators-SauceDemo', async ({ page}) =>{

       await page.goto('https://www.saucedemo.com/')

       await page.getByPlaceholder('username').fill('standard_user')
       
       await page.getByPlaceholder('password').fill('secret_sauce')

       await page.getByRole('button', {name:'login'}).click()

       await expect(page).toHaveURL(/inventory.html/)

       await expect(page.getByText('Products')).toBeVisible()

       await (page.getByRole('button', {name:'Add to cart'})).first().click()

       await page.getByAltText('sauce labs Backpack').click()
       
       
       
    })
