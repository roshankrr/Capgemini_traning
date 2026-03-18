import { test } from "@playwright/test";

test("amazon_OS", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  let searchbox = await page.locator(
    '//div[@class="nav-search-field "]//input',
  );
  await searchbox.fill("Phones");
  let search = await page.locator('//input[@id="nav-search-submit-button"]');
  await search.click();
  let os = await page.locator(
    '//*[@id="p_n_g-1003517064111/36816641011"]/span/a/div/label/i',
  );
  await os.click();
  await page.waitForTimeout(2000);
});
