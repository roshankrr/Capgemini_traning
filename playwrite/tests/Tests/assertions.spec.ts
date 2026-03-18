import { test, expect } from "@playwright/test";
test.use({ actionTimeout: 5000 });

test("auto-assertions", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  let uname = page.getByRole("textbox", { name: "username" });
  let pass = page.getByRole("textbox", { name: "password" });
  await uname.fill("roshan");
  await expect(uname).toHaveValue("roshan");
  await expect(uname).toHaveValue("roshan");
  await expect(uname).toHaveScreenshot();
});

test.only("non-assertions", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  let uname = page.getByRole("textbox", { name: "username" });
  let pass = page.getByRole("textbox", { name: "password" });

  let label = await page.locator('//*[@id="form"]/div[1]/label');

  await uname.fill("roshan", { timeout: 5000 });
  await expect("roshan").toContain("ros");
  await expect([1, 23, 45, 4, 3, 13, 4]).toContain(23);
  await expect("roshan").not.toContain("rohs");
  await expect(await uname.inputValue()).toContain("ros");
});
