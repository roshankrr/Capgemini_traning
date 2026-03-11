import { test, expect } from "@playwright/test";

test("mouse_actions", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0");
  await page
    .locator(
      '//*[@id="demoUI"]/main/section/article/aside/div/aside/div/div/form/div[1]/img[1]',
    )
    .hover();
  await page.mouse.down();
  await page.mouse.up();
});

test("mouse_actions_hold", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0");
  await page.locator('//*[@id="circle"]').hover();
  await page.mouse.down();
  await page.waitForTimeout(2000);
  await page.mouse.up();
});
test("mouse_actions_disabled", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4",
  );
  let btn = await page.locator('//input[@id="submit"]');
  //   await btn.click({ force: true });
  await btn.dispatchEvent("click");
});

test("drag", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2",
  );
  let laptop_charger = await page.getByText("Laptop Charger");
  let mobile_cover = await page.getByText("Mobile Cover");
  let laptop_cover = await page.getByText("Laptop Cover");
  let mobile_charger = await page.getByText("Mobile Charger");
  let mob = await page
    .locator(
      '//section[@class="w-[50%] flex flex-col gap-4 shadow-md rounded-md"]/div[1]',
    )
    .first();
  let lap = await page
    .locator(
      '//section[@class="w-[50%] flex flex-col gap-4 shadow-md rounded-md"]/div[2]',
    )
    .nth(2);
  await laptop_charger.hover();
  await page.mouse.down();
  await lap.hover();
  await page.mouse.up();

  //   laptop_charger.dragTo(lap);
  //   laptop_cover.dragTo(lap);
  //   mobile_charger.dragTo(mob);
  //   mobile_cover.dragTo(mob);
});

test("scroll", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical");
  await page
    .locator('//*[@id="root"]/section/ul/li[6]/section[1]/span')
    .scrollIntoViewIfNeeded();
});
test.only("keyboard_actions", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
  let name = await page.getByRole("textbox", { name: "name" });
  let email = await page.getByRole("textbox", { name: "email" });
  let pass = await page.getByRole("textbox", { name: "password" });
  let btn = await page.getByRole("button", { name: "submit" });
  await name.press("R+o+s+h+a+n");
  await email.press("R+o+s+h+a+n+k+r+r+1+6+@+g+m+a+i+l+.+c+o+m");
  await email.press("Meta+A");
  await email.press("Meta+C");
  await pass.press("Meta+V");
  await pass.press("Enter");
});
