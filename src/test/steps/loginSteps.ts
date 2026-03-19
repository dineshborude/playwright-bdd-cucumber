import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000); // 60 seconds

let browser: Browser;
let page: Page;

Given('user is on the login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
 
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/", {
  waitUntil: "domcontentloaded"
    });
 
});

When('user enters username {string} and password {string}', async function (username, password) {
 
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill(username);

  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill(password);

});

When('clicks on login button', async function () {
  await page.getByRole('button', { name: 'Sign In' }).click();
});

Then('user should be redirected to dashboard', async function () {
  await expect(page).toHaveURL(/angularpractice\/shop/);
  await expect(page.getByText('Shop Name')).toBeVisible();
});

Then('error message should be displayed', async function () {
  const error = page.locator('.alert-danger');

  await expect(page).toHaveURL(/loginpagePractise/);
  await expect(error).toBeVisible();
  await expect(error).toContainText('Incorrect');
});