import { test, expect } from "@playwright/test";

test.describe("API Testing with Playwright", () => {
  const baseURL = "https://jsonplaceholder.typicode.com";

  // 1. GET: Retrieve Data
  test("GET - Retrieve Posts", async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.id).toBe(1);

    console.log("GET Response:", responseBody);
  });

  // 2. POST: Create Data
  test("POST - Create New Post", async ({ request }) => {
    const newPost = {
      title: "You can't see me",
      body: "But I'm here",
      userId: 1,
    };
    const response = await request.post(`${baseURL}/posts/`, {
      data: newPost,
    });
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.title).toBe("You can't see me");
    console.log("POST Response:", responseBody);
  });

  // 3. PUT: Update Data
  test("PUT - Update Existing Post", async ({ request }) => {
    // Prepare update payload
    const updatedPost = {
      id: 1, // Target ID 1
      title: "You still can't see me",
      body: "But I'm still here",
      userId: 1,
    };

    // Send PUT request to /posts/1
    const response = await request.put(`${baseURL}/posts/1`, {
      data: updatedPost,
    });

    // Verify status code (200 OK)
    expect(response.status()).toBe(200);

    // Verify the response body reflects changes
    const responseBody = await response.json();
    expect(responseBody.title).toBe("You still can't see me");
    console.log("PUT Response:", responseBody);
  });

 // 4. DELETE: Remove Data
  test("DELETE - Remove Post", async ({ request }) => {
    // Send DELETE request to /posts/1
    const response = await request.delete(`${baseURL}/posts/1`);

    // Verify status code (typically 200 or 204)
    expect(response.status()).toBe(200);

    // Verify response body (JSONPlaceholder returns empty object {} on delete)
    const responseBody = await response.json();
    console.log("DELETE Response: Successful", responseBody);

    // Ensure response is empty
    expect(responseBody).toEqual({});
  });
});
