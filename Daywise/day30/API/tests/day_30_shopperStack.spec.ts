import { test } from "@playwright/test";

//variables defined here

var baseurl = "https://www.shoppersstack.com/shopping";
var loginData = {
  email: "mrhalua1606@gmail.com",
  password: "@Abv@2305",
  role: "SHOPPER",
};
var shopperId = 0;
var prod1Id = 0;

var jwtToken = "";
var addressId = 0;
var reviewId = 0;

//login user here

test.describe("login test", async () => {
  test("login", async ({ request }) => {
    let r1 = await request.post(`${baseurl}/users/login`, {
      data: loginData,
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    // console.log(res1);
    jwtToken = res1.data.jwtToken;
    shopperId = res1.data.userId;
  });
});

test.describe("product api", async () => {
  test("getProducts", async ({ request }) => {
    let r1 = await request.get(`${baseurl}/products/alpha`, {
      ignoreHTTPSErrors: true,
    });
    let res1 = await r1.json();
    // console.log("hahahhaa----------->", res1.data[1]);
    prod1Id = res1.data[0].productId;
  });
});

test.describe.skip("wishlist api", async () => {
  //add to wishlist here

  test.skip("add to wishlist", async ({ request }) => {
    console.log(shopperId, prod1Id, "hello", jwtToken);

    let r1 = await request.post(`${baseurl}/shoppers/${shopperId}/wishlist`, {
      data: {
        productId: prod1Id,
        quantity: 1,
      },
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      ignoreHTTPSErrors: true,
    });
    console.log(r1);

    let res1 = await r1.json();
    console.log(res1);
  });

  //get wish list

  test.skip("get user wishlist", async ({ request }) => {
    let r1 = await request.get(`${baseurl}/shoppers/${shopperId}/wishlist`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      ignoreHTTPSErrors: true,
    });
    let res1 = await r1.json();
    console.log(res1);
  });
});

test.describe.skip("cart api", async () => {
  //get cart data

  test("get user cart data", async ({ request }) => {
    let r1 = await request.get(`${baseurl}/shoppers/${shopperId}/carts`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      ignoreHTTPSErrors: true,
    });
    let res1 = await r1.json();
    console.log(res1);
  });

  //add to cart

  test("add to cart", async ({ request }) => {
    let r1 = await request.post(`${baseurl}/shoppers/${shopperId}/carts`, {
      data: {
        productId: prod1Id,
        quantity: 1,
      },
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
  });

  //delete prduct from cart

  test.skip("delete products from cart", async ({ request }) => {
    let r1 = await request.delete(
      `${baseurl}/shoppers/${shopperId}/carts/${prod1Id}`,
      {
        data: {
          productId: prod1Id,
          quantity: 1,
        },
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        ignoreHTTPSErrors: true,
      },
    );

    let res1 = await r1.json();
    console.log(res1);
  });
});

test.describe("review api", async () => {
  test("get reviews", async ({ request }) => {
    let r1 = await request.get(`${baseurl}/reviews/${prod1Id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
  });

  //create a new review of prod
  test("make a  reviews", async ({ request }) => {
    let r1 = await request.post(`${baseurl}/reviews`, {
      params: {
        productId: prod1Id,
      },
      data: {
        description: "THis is my review using api req",
        heading: "My review",
        rating: 4,
        shopperId: shopperId,
        shopperName: "Roshan Kumar",
      },
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
    reviewId = res1.data.reviewId;
  });

  //update review
  test("update your review", async ({ request }) => {
    let r1 = await request.put(`${baseurl}/reviews/${reviewId}`, {
      params: {
        productId: prod1Id,
      },
      data: {
        description: "THis is my review using api req",
        heading: "My review",
        rating: 3,
        shopperId: shopperId,
        shopperName: "Roshan Kumar",
      },
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
  });
});

test.describe.skip("address api", async () => {
  test("get all adderess", async ({ request }) => {
    let r1 = await request.get(`${baseurl}/shoppers/${shopperId}/address`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
    addressId = res1.data[0].addressId;
  });

  //get specific address
  test("get specific adderess", async ({ request }) => {
    let r1 = await request.get(
      `${baseurl}/shoppers/${shopperId}/address/${addressId}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        ignoreHTTPSErrors: true,
      },
    );

    let res1 = await r1.json();
    console.log(res1);
  });

  //create new address
  test("create new address", async ({ request }) => {
    let r1 = await request.get(`${baseurl}/shoppers/${shopperId}/address`, {
      data: {
        addressId: 98765,
        name: "Roshan Kumar",
        type: "Home",
        buildingInfo: "Ramesh kaka ki dukaan",
        streetInfo:
          "near jeevan rekha parkash hospital,Near Haldighati gate, 68/206",
        landmark: "haldighati gate pratap nagar",
        city: "Pune",
        state: "Maharastra",
        country: "India",
        pincode: "432102",
        phone: "7850823847",
      },
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
  });
  test("updateAddress", async ({ request }) => {
    let r1 = await request.put(
      `${baseurl}/shoppers/${shopperId}/address/${addressId}`,
      {
        data: {
          addressId: addressId,
          name: "Gaurav Bhatt",
          type: "Home",
          buildingInfo: "Hno C-34",
          streetInfo: "Gaytri Nagar",
          landmark: "Sanganer Bypass",
          city: "Pune",
          state: "Maharashtra",
          country: "India",
          pincode: "432102",
          phone: "9876543211",
        },
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        ignoreHTTPSErrors: true,
      },
    );

    let res1 = await r1.json();
    console.log(res1);
  });
});

test.describe.skip("Orders", () => {
  test("getOrder", async ({ request }) => {
    let r1 = await request.get(`${baseurl}/shoppers/${shopperId}/orders`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
  });

  test("postOrder", async ({ request }) => {
    let r1 = await request.post(`${baseurl}/shoppers/${shopperId}/orders`, {
      data: {
        address: {
          addressId: addressId,
          name: "Roshan Kumar",
          type: "Home",
          buildingInfo: "Ramesh kaka ki dukaan",
          streetInfo:
            "near jeevan rekha parkash hospital,Near Haldighati gate, 68/206",
          landmark: "haldighati gate pratap nagar",
          city: "Pune",
          state: "Maharastra",
          country: "India",
          pincode: "432102",
          phone: "7850823847",
        },
        paymentMode: "COD",
      },
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
  });
});
