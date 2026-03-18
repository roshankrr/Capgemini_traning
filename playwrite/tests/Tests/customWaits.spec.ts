import { test } from "@playwright/test";

test("custom waits", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/?m=1");
  let res = await page.waitForFunction(() => {
    let title = document.querySelector("#HTML16 > h2");
    return title?.innerHTML;
  });
  console.log(res);
});
