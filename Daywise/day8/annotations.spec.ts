import { test } from "../../playwrite/node_modules/@playwright/test";

test("title1", async () => {
  console.log("title1");
});
test.skip("title2", async () => {
  console.log("title2");
});
test.fixme("title3", async () => {
  console.log("title3");
});
test.describe("title4", async () => {
  test("2", () => {
    console.log("describe");
  });
  test("3", () => {
    console.log("describe");
  });
});
test("title5", async () => {
  console.log("title5");
});
