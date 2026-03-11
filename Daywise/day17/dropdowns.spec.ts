import { test, expect } from "@playwright/test";

// test.use({ actionTimeout: 300000 });

test("standard_dropdown", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
  //   let opn = await page.locator('//option[@id="opetion4"]');
  let opn = await page.locator("#select3").selectOption({ value: "Canada" });
  await expect(opn).toContain("Canada");
});
test("multi_dropdown", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1",
  );
  //   let opn = await page.locator('//option[@id="opetion4"]');
  let opn = await page
    .locator("#select-multiple-native")
    .selectOption([
      { value: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" },
      { value: "Mens Cotton Jacket" },
      { index: 5 },
    ]);

  let add = await page.getByRole("button", { name: "Add" }).click();
});
test("custom_dropdown", async ({ page }) => {
  await page.goto("https://www.myntra.com/shoes?rawQuery=shoes");
  let sort = await page.locator('//div[@class="sort-sortBy"]').hover();
  let opns = await page.locator('//ul[@class="sort-list"]/li').all();
  for (let val of opns) {
    let txt = await val.textContent();
    if (txt?.includes("Better")) {
      await val.click();
      break;
    }
  }
});

test.only("autosearch", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  let searchbox = await page.locator("#twotabsearchtextbox").first();
  await searchbox.fill("shoes");
  let res = await page
    .locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]')
    .all();
  for (let val of res) {
    let txt = await val.textContent();
    console.log(txt);
  }
});
