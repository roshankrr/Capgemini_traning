import { test, expect } from "@playwright/test";

test("standard_dropdown", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
  //   let opn = await page.locator('//option[@id="opetion4"]');
  let opn = await page.locator("#select3").selectOption({ value: "Canada" });
  await expect(opn).toContain("Canada");
});
test.only("multi_dropdown", async ({ page }) => {
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
