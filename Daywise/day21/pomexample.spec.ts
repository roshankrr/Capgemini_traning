import { test } from "@playwright/test";
import example from "../pom/example.page";
import path from "node:path";
import fs from "fs";
import endToendAmazon from "../pom/endToendAmazon.page";

let mypat = (pat: string) => {
  return path.join(__dirname, pat);
};

test("pom example", async ({ page }) => {
  let ex = new example(page);
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await ex.unameTF.fill("student");
});

test("pom+json", async ({ page }) => {
  let ex = new example(page);
  let data = fs.readFileSync(mypat("../public/data2.json"), "utf-8");
  let dat = JSON.parse(data);
  for (let d of dat) {
    let url = d.url;
    let uname = d.username;
    let pass = d.password;
    await page.goto(url);
    console.log(await page.title());
    await ex.Login(uname, pass);
  }
});

test.only("amazon-search", async ({ page }) => {
  let data = fs.readFileSync(mypat("../public/endToEnd_amazon.json"), "utf-8");
  let dat = JSON.parse(data);
  await page.goto(dat.url);
  let amz = new endToendAmazon(page);
  await amz.searchbarTF.fill(dat.search);
  await page.keyboard.press("Enter");
  await amz.ramCheckBox.click();
  let [page2] = await Promise.all([
    page.waitForEvent("popup"),
    amz.forthprod.click(),
  ]);
  await amz.selectQuantity("3", page2);
  await amz.buyNow(page2);
});
