import { test } from "@playwright/test";

// test("title", async ({ page }) => {
//   await page.goto("https://portfolio-roshan-threejs.vercel.app/");
//   console.log("hiii");
//   let res = await page.locator("#APjFqb").fill("searching");
//   await page.locator("#APjFqb").press("Enter");
//   await page.waitForTimeout(5000);
// });

// test("browser", async ({ browser }) => {
//   let context = await browser.newContext();
//   let page = (await context.newPage())

// });

test("title", async ({ context }) => {
  let page = await context.newPage();
  await page.goto("https://portfolio-roshan-threejs.vercel.app/");
  console.log("hiii");
  await page.waitForTimeout(10000);
  await page.pause();
});

test("browserss", async ({ browser, browserName }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  let go = await page.goto("https://www.google.com");
  let page2 = await context.newPage();
  await page2.waitForTimeout(5000);
  let go2 = await page2.goto("https://www.amazon.com");
  await page2.waitForTimeout(5000);
});
