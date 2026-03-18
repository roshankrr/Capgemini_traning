import { test } from "@playwright/test";
import { endToEnd_amazon } from "../../pom/endToendAmazon.page";

test("taking reviews", async ({ page }) => {
  const amazon = new endToEnd_amazon(page);
  await page.goto("https://www.amazon.in/");
  await amazon.searchbarTF.fill("laptop");
  await amazon.searchbarTF.press("Enter");

  let [page2] = await Promise.all([
    page.waitForEvent("popup"),
    amazon.forthprod.click(),
  ]);
  await amazon.selectQuantity("3", page2);
  let imglocator = await amazon.reviewImages(page2);
  let images = await imglocator.all();
  for (let img of images) {
    console.log(img);
  }
  //   await amazon.buyNow(page);
  //   await amazon.reviewImg.click();
});
