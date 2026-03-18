import { test, expect } from "@playwright/test";

test("iframe", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/%5C");
  //   let frame = await page.frames();
  let frame1 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  await frame1?.locator("input").fill("Hello");

  let frame2 = await page.frameLocator("frame_3.html");
  await frame2.locator("input").fill("Hello2");

  //   let frame3 = await page.frame({
  //     url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  //   });
  //   let form = await frame3?.frameLocator("iframe");
  await page.waitForTimeout(3000);
  //   frame.forEach(async (e) => {
  //     console.log(await e.title());
  //   });
});

test("form_iframe", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame3 = await page.frameLocator('//frame[@src="frame_3.html"]');
  const insideframe = frame3.frameLocator("iframe");

  await insideframe.locator('//div[@id="i21"]').click();
});
