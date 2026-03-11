import { test, expect } from "@playwright/test";

test("explecit_waits", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  let mxplayer = await page
    .locator('//*[@id="login"]/h2')
    .waitFor({ state: "detached" });

  //   await (
  //     await page.waitForSelector('//*[@id="nav-xshop"]/ul/li[2]/div/a', {
  //       timeout: 2000,
  //     })
  //   ).click();
});

test.only("page_waits", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto(
    "https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",
  );
  console.log(await page.url());
  // let prod1 = await page.locator('//div[@class="nZIRY7"]/div').first().click();
  //   await page.waitForNavigation();
  let [response] = await Promise.all([
    page.waitForNavigation({ waitUntil: "load" }),
    page.locator('//div[@class="nZIRY7"]/div').first().click(),
  ]);

  console.log("New URL:", page.url());

  // console.log(await page2.url());

  let price = await page.locator(
    '//*[@id="slot-list-container"]/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[6]/div/div/div/div/div/div/div/a/div/div[3]/div',
  );
  console.log(await price.textContent());
});
