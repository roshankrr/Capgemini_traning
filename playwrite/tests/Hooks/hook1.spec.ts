import { test } from "@playwright/test";

test.beforeAll("before run", async ({ browser }) => {
  console.log("Hello i will run 1st ");
});

test("test1", async ({ page }) => {
  console.log("I will run parrallely with test2");
});
test("test2", async ({ page }) => {
  console.log("I will run parrallely with test1");
});
