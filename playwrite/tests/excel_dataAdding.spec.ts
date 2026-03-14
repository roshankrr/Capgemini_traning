import { test } from "@playwright/test";
import ExcelJS from "exceljs";
import path from "node:path";

test("write excel data", async ({ page }) => {
  let book = new ExcelJS.Workbook();
  let mpath = (pat: string) => {
    return path.join(__dirname, pat);
  };

  let sheet1 = book.getWorksheet("Sheet1");
  let sheet2 = book.getWorksheet("Sheet2");
  sheet2 ? (sheet2.getRow(1).getCell(1).value = "ramesh") : "sheet not present";
  sheet1
    ? (sheet1.getRow(1).getCell(1).value = "rishabh")
    : "sheet not present";
  await book.xlsx.writeFile(mpath("../public/excel.xlsx"));
});

test.only("amazon data", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  await page.locator("input#twotabsearchtextbox").fill("monitor");
  let suggestion = await page
    .locator("//div[@class='left-pane-results-container']/div")
    .all();
  let book = new ExcelJS.Workbook();
  let mpath = (pat: string) => {
    return path.join(__dirname, pat);
  };
  let sheet2 = book.getWorksheet("Sheet2");
  if (!sheet2) {
    sheet2 = book.addWorksheet("Sheet2");
  }

  for (let id = 0; id < suggestion.length; id++) {
    const text = await suggestion[id].textContent();
    console.log(text, id);
    sheet2.getRow(id + 1).getCell(1).value = text;
  }

  await book.xlsx.writeFile(mpath("../public/excel.xlsx"));
});
