import test from "@playwright/test";

test("popups", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.once("dialog", async (e) => {
    await page.waitForTimeout(3000);
    await e.accept();
    console.log(await e.message());
  });
  let pop1 = await page.locator('//button[text()="Simple Alert"]').click();
  await page.waitForTimeout(3000);

  await page.once("dialog", async (e) => {
    await page.waitForTimeout(3000);
    await e.accept();
    console.log(await e.message());
  });
  let pop2 = await page
    .locator('//button[text()="Confirmation Alert"]')
    .click();

  await page.waitForTimeout(3000);

  await page.once("dialog", async (e) => {
    await page.waitForTimeout(3000);
    console.log(await e.defaultValue());
    await e.accept("Hello");
    console.log(await e.message());
  });
  let pop3 = await page.locator('//button[text()="Prompt Alert"]').click();
  await page.waitForTimeout(3000);
});

test.only("dialogs with once and cond", async ({ page }) => {
  page.on("dialog", async (dialog) => {
    if (dialog.type() == "alert") {
      await page.waitForTimeout(2000);
      await dialog.accept();
    } else if (dialog.type() == "confirm") {
      await page.waitForTimeout(2000);
      await dialog.dismiss();
      console.log(dialog.message());
    } else if (dialog.type() == "prompt") {
      if ((await dialog.defaultValue()) != "Harry Potter") {
        await dialog.accept("TOM");
      } else {
        await page.waitForTimeout(2000);
        await dialog.accept();
      }
    }
  });
  await page.goto("https://testautomationpractice.blogspot.com/");

  let alert1 = await page.locator("#alertBtn").click();

  let confirmation = await page.locator("#confirmBtn").click();

  let prompt1 = await page.locator("#promptBtn").click();
  //page on("dialog", () => {})
  //page.once("event", () => {})
});
