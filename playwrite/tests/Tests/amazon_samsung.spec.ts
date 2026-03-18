import { test } from "@playwright/test";

test("amazon_samsung_phone_price", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  let search = page.locator(`input[id="twotabsearchtextbox"]`);
  let searchbutton = page.locator(`//input[@type="submit" and @value="Go"]`);

  await search.fill("Samsung Phone");
  await searchbutton.click();
  await page.waitForTimeout(1000);
  let firstItem = await page.locator(`//div[@data-asin="B0DM1S54MZ"]`).click();

  let price = page.locator(
    `//*[@id="32776748-9bd2-4342-9237-d6d26967158b"]/div/div/span/div/div[1]/div[2]/div/div/span/a/div/div/span[2]`,
  );
  console.log(await price.textContent());
});
