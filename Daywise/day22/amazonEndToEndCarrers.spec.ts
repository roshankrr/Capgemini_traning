import { test } from "@playwright/test";
import carrerData from "../../public/amazonEndToEndCarrers.json";
import { Careers } from "../../pom/endToendAmazon.page";
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

test.only("amazon-carrers", async ({ page }) => {
  const career = new Careers(page);
  await page.goto(carrerData.url);
  await career.CarrersBtn.click();
  await career.StudentOppRoleBtn.click();
  await career.FindOpenUniv.click();
  await career.selectCountry(carrerData.country);
  await career.selectState(carrerData.state);
  await career.selectCity(carrerData.city);
  await career.selectEmpl(carrerData.employmentType);
  await career.selectCateg(carrerData.category);
  await career.selectCarrer(carrerData.carrerArea);
  await career.selectTeam(carrerData.team);
  await career.selectRole(carrerData.roleType);
  let [page2] = await Promise.all([
    page.waitForEvent("popup"),
    await career.SecondJob.nth(1).click(),
  ]);
  await career.applyButton(page2);
  await page2.screenshot({ path: "./screenshot/amazonCareer.png" });
});
