import { test, expect } from "@playwright/test";

test("multitab", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto(
    "https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",
  );

  let [page2] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator('//div[@class="nZIRY7"]/div').first().click(),
  ]);

  console.log(page);
  console.log("-----------------------------");

  console.log(page2);
});

test("popups_browser", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1");
  let [page2] = await Promise.all([
    page.waitForEvent("popup"),
    page
      .locator(
        '//div[@class="bg-white shadow-md rounded-lg overflow-hidden"]//button',
      )
      .first()
      .click(),
  ]);
  let price = await page2.locator('//*[@id="root"]/div/div/p[3]');
  console.log(await price.textContent());
});
test.only("downloads", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
  let textarea = await page.locator("#writeArea").fill("Helooooo");

  let rename = await page.locator("#fileName").fill("myfile.txt");

  let [page2] = await Promise.all([
    page.waitForEvent("download"),
    page.locator("#downloadButton").click(),
  ]);
});
