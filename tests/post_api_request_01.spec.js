//Load the Playwright Module
const { test, expect } = require("@playwright/test");
//Write a test
test("Create POST API request using static request body", async ({
  request,
}) => {
  const postAPIResponse = await request.post("/booking", {
    data: {
      firstname: "Sample Playwright",
      lastname: "Test User",
      totalprice: 1000,
      depositpaid: true,
      bookingdates: {
        checkin: "2024-06-12",
        checkout: "2024-06-13",
      },
      additionalneeds: "super bowls",
    },
  });
  //Validate Status Code
  expect(postAPIResponse.ok()).toBeTruthy();
  expect(postAPIResponse.status()).toBe(200);

  const postAPIResponseBody = await postAPIResponse.json();
  console.log(postAPIResponseBody);
});
