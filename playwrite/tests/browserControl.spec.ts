import { test } from "@playwright/test";

// test("browser control", async ({ page }) => {
//   let size = page.viewportSize();
//   console.log(size);
//   await page.goto("https://www.google.com");
//   let a = await page.title();
//   let url = page.url();
//   console.log(a, url);
// let time = new Date().getTime();
// let ss = await page.screenshot({ path: `screenshot/google${time}.png` });
//   console.log(ss);

//   //   await page.pause();
// });

test("browser", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://www.google.com");
  let cookie = await context.cookies();
  console.log(cookie);
});
