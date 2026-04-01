import { test } from "@playwright/test";

test("login", async ({ request }) => {
  let r1 = await request.get(`https://petstore.swagger.io/v2/user/login`, {
    params: {
      username: "roshaknrr",
      password: "@Abv@2305",
    },
  });

  let res1 = await r1.json();
  console.log(res1);
});

test("create user", async ({ request }) => {
  let r1 = await request.post(`https://petstore.swagger.io/v2/user`, {
    data: {
      username: "ramesh",
      password: "@Abv@2305",
    },
    headers: {
      username: "roshaknrr",
      password: "@Abv@2305",
    },
  });

  let res1 = await r1.json();
  console.log(res1);
});

test("get user data ", async ({ request }) => {
  let r1 = await request.get(`https://petstore.swagger.io/v2/user/user1`, {
    // data: {
    //   username: "ramesh",
    //   password: "@Abv@2305",
    // },
    // headers: {
    //   username: "roshaknrr",
    //   password: "@Abv@2305",
    // },
  });

  let res1 = await r1.json();
  console.log(res1);
});
