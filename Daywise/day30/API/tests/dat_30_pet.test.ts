import { test } from "@playwright/test";

var petId = 0;

test("create new pet", async ({ request }) => {
  let r1 = await request.post(`https://petstore.swagger.io/v2/pet`, {
    data: {
      id: 123490,
      category: {
        id: 0,
        name: "dog",
      },
      name: "doggie",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "mera doggie",
        },
      ],
      status: "available",
    },
  });

  let res1 = await r1.json();
  console.log(res1.id);
  petId = res1.id;
});

test.skip("get pet by status", async ({ request }) => {
  let r1 = await request.get(
    `https://petstore.swagger.io/v2/pet/findByStatus`,
    {
      params: {
        status: "available",
      },
    },
  );

  let res1 = await r1.json();
  console.log(res1);
});

test("delete the pet by pet id", async ({ request }) => {
  let r1 = await request.delete(`https://petstore.swagger.io/v2/pet/${petId}`);
  let res1 = await r1.json();
  console.log(res1);
});
