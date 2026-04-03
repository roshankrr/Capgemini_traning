import { test } from "@playwright/test";
import restFullBookersDataJson from "./authdata.json";

//auth token generate
let baseUrl: string = restFullBookersDataJson.base_url;
let token: string;
let bookingid: number;
test("Auth Token", async ({ request }) => {
  let response = await request.post(`${baseUrl}/auth`, {
    data: {
      username: restFullBookersDataJson.username,
      password: restFullBookersDataJson.password,
    },
    headers: {
      "content-type": "application/json",
    },
  });
  let resJson = await response.json();
  console.log(resJson);
  token = resJson.token;
  console.log(token);
});

//get all booking ids
test("get all booking ids", async ({ request }) => {
  let response = await request.get(`${baseUrl}/booking`, {});
  let resJson = await response.json();
  console.log(resJson);
});

//get booking by id
test("get booking by id", async ({ request }) => {
  let response = await request.get(
    `${baseUrl}/booking/${restFullBookersDataJson.id}`,
  );
  let resJson = await response.json();
  console.log(resJson);
  console.log(bookingid);
  console.log(bookingid);
});

test("post booking", async ({ request }) => {
  let response = await request.post(`${baseUrl}/booking`, {
    data: {
      firstname: restFullBookersDataJson.firstname,
      lastname: restFullBookersDataJson.lastname,
      totalprice: restFullBookersDataJson.totalprice,
      depositpaid: restFullBookersDataJson.depositpaid,
      bookingdates: {
        checkin: restFullBookersDataJson.bookingdates.checkin,
        checkout: restFullBookersDataJson.bookingdates.checkout,
      },
      additionalneeds: restFullBookersDataJson.additionalneeds,
    },
  });
  let resJson = await response.json();
  console.log(resJson);
  bookingid = resJson.bookingid;
});

test("update booking", async ({ request }) => {
  let response = await request.put(`${baseUrl}/booking/${bookingid}`, {
    data: {
      firstname: restFullBookersDataJson.updateDetails.firstname,
      lastname: restFullBookersDataJson.updateDetails.lastname,
      totalprice: restFullBookersDataJson.updateDetails.totalprice,
      depositpaid: restFullBookersDataJson.updateDetails.depositpaid,
      bookingdates: {
        checkin: restFullBookersDataJson.updateDetails.bookingdates.checkin,
        checkout: restFullBookersDataJson.updateDetails.bookingdates.checkout,
      },
      additionalneeds: restFullBookersDataJson.updateDetails.additionalneeds,
    },
    headers: {
      "content-type": "application/json",
      cookie: `token=${token}`,
    },
  });
  let resJson = await response.json();
  console.log(resJson);
});
