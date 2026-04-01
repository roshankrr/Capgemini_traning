import { test, expect } from "@playwright/test";

test("multitab", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://myntra.com");
});
