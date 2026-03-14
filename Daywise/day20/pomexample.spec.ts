import { test } from "@playwright/test";
import example from "../pom/example.page";
import path from "node:path";
import fs from "fs";

let mypat = (pat: string) => {
  return path.join(__dirname, pat);
};

test("pom example", async ({ page }) => {
  let ex = new example(page);
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await ex.unameTF.fill("student");
});

test.only("pom+json", async ({ page }) => {
  let ex = new example(page);
  let data = fs.readFileSync(mypat("../public/data2.json"), "utf-8");
  let dat = JSON.parse(data);
  for (let d of dat) {
    let url = d.url;
    let uname = d.username;
    let pass = d.password;
    await page.goto(url);
    console.log(await page.title());

    await ex.unameTF.fill(uname);
    await ex.passwordTF.fill(pass);
    await ex.submitBtn.click();
  }
});
