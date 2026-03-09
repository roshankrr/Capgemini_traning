import { test } from "@playwright/test";

test("getbyMethods", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  let username = await page.getByTestId("username");
  let password = await page.getByTestId("password");
  let vis = await username.isVisible();
  console.log(vis);
  await username.type("standard_user", { delay: 100 }); //it is depreciated and it type each word one by one
  await password.fill("secret_sauce");
  await page.getByTestId("login-button").click();
});

test.only("shoes", async ({ page }) => {
  await page.goto(
    "https://www.amazon.com/s?k=shoes&crid=3IF5Z6YK4PK32&sprefix=sh%2Caps%2C405&ref=nb_sb_noss_2",
  );

  let prod = await page
    .locator(
      '//a[@class="a-link-normal s-line-clamp-4 s-link-style a-text-normal"]/h2/span',
    )
    .all();
  prod.forEach(async (element) => {
    console.log(await element.textContent());
  });
});
