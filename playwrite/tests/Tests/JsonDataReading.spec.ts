import { test } from "@playwright/test";
import ExcelJS from "exceljs";
import path from "node:path";
import fs from "fs";

let mypat = (pat: string) => {
  return path.join(__dirname, pat);
};

test("json data read", async ({ page }) => {
  let data = fs.readFileSync(mypat("../public/data.json"), "utf-8");
  let dat = JSON.parse(data);
  dat.forEach((e: { name: String; age: Number }) => {
    console.log(e.name, e.age);
  });
});

test("login form ", async ({ page }) => {
  let data = fs.readFileSync(mypat("../public/data2.json"), "utf-8");
  let dat = JSON.parse(data);
  await page.goto(dat.url);
  await page.locator("input[name='username']").fill(dat.username);
  await page.locator("input[name='password']").fill(dat.password);
  await page.locator("#submit").click();
});

test.only("multi_file", async ({ page }) => {
  let data = fs.readFileSync(mypat("../public/data2.json"), "utf-8");
  let dat = JSON.parse(data);
  for (let d of dat) {
    let url = d.url;
    let uname = d.username;
    let pass = d.password;
    await page.goto(url);
    console.log(await page.title());

    await page.locator("input[name='username']").fill(uname);
    await page.locator("input[name='password']").fill(pass);
    await page.locator("#submit").click();
  }
});
