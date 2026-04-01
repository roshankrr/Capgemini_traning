import { test, expect } from "@playwright/test";

test("iframe", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/%5C");
  let frame = await page.frames();

  frame.forEach(async (e) => {
    console.log(await e.title());
  });
});
