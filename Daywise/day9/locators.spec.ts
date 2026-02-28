import { test } from "../../playwrite/node_modules/@playwright/test";

test("practice", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  let username = await page.locator("#form #username");
  let password = await page.locator("#form #password");
  let submit = await page.locator("#form #submit");
  await username.fill("student");
  await password.fill("Password123");
  await submit.click();
  let logout = await page.locator(".wp-block-button a");
  await logout.click();
});
