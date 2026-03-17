import { test } from "@playwright/test";

test("prokabbadi", async ({ page }) => {
  await page.goto(
    "https://www.prokabaddi.com/schedule-fixtures-results?tab=recent",
  );
  let all = await page
    .locator(
      '//div[@class="fixtures-listing"][1]//h2 | //div[@class="fixtures-listing"][1]//div[@class="element element1"]//p | //div[@class="fixtures-listing"][1]//div[@class="element element2"]//p[@class="team-name"] | //div[@class="fixtures-listing"][1]//div[@class="element element2"]// p[@class="score"] | //div[@class="fixtures-listing"][1]//div[@class="element element3"]//p[@class="match-place"]',
    )
    .all();
  for (let val of all) {
    console.log(await val.textContent());
  }
});
