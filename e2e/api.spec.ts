import { test, expect } from "@playwright/test";

test.describe("API Testing with Playwright", () => {
  const baseURL = "https://jsonplaceholder.typicode.com";

  // 1. GET: 讀取資料
  test("GET - Retrieve Posts", async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.id).toBe(1);

    console.log("GET Response:", responseBody);
  });

  // 2. POST: 創建資料
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

  // 👇 這是你要的新部分 👇

  // 3. PUT: 更新資料 (Update)
  test("PUT - Update Existing Post", async ({ request }) => {
    // 準備要更新的資料
    const updatedPost = {
      id: 1, // 指定要更新 ID 為 1 的文章
      title: "You still can't see me",
      body: "But I'm still here",
      userId: 1,
    };

    // 發送 PUT 請求到 /posts/1
    const response = await request.put(`${baseURL}/posts/1`, {
      data: updatedPost,
    });

    // 驗證狀態碼 (更新成功通常是 200)
    expect(response.status()).toBe(200);

    // 驗證回傳的內容是否真的變了
    const responseBody = await response.json();
    expect(responseBody.title).toBe("You still can't see me");
    console.log("PUT Response:", responseBody); // 印出來看看
  });

  // 4. DELETE: 刪除資料 (Delete)
  test("DELETE - Remove Post", async ({ request }) => {
    // 發送 DELETE 請求到 /posts/1
    const response = await request.delete(`${baseURL}/posts/1`);

    // 驗證狀態碼 (刪除成功通常是 200 或 204)
    expect(response.status()).toBe(200);

    // 驗證回傳內容 (JSONPlaceholder 刪除後會回傳空物件 {})
    const responseBody = await response.json();
    console.log("DELETE Response: Successful", responseBody);

    // 檢查回傳是不是空的
    expect(responseBody).toEqual({});
  });
});
