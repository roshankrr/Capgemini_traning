import { test } from "@playwright/test";

test("practice", async ({ page }) => {
  await page.goto("https://techbeamers.com/practice-test-login/");
  let username = await page.locator("form #username");
  let password = await page.locator("form #password");
  let submit = await page.locator("//button[@type='submit']");
  await username.fill("testuser");
  await password.fill("password123");
  await submit.click();
  //   let logout = await page.locator(".wp-block-button a");
  //   await logout.click();
});
test("practice2", async ({ page }) => {
  await page.goto("https://techbeamers.com/practice-test-login/");
  6;
  let username = await page.locator("form #username");
  let password = await page.locator("form #password");
  let submit = await page.locator(`//button[@type='submit']`);
  await username.fill("testuser");
  await password.fill("password12083");
  await submit.click();
  //   let logout = await page.locator(".wp-block-button a");
  //   await logout.click();i
});
