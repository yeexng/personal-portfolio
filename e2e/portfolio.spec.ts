import { test, expect } from "@playwright/test";

// 这是一个 "Describe" 块，用来把相关测试分组（就像文件夹一样），让报告更好看
test.describe("Portfolio E2E Tests", () => {
  // 测试用例 1: 检查网站基本功能 (Sanity Check)
  test("Portfolio Sanity Check (Navigation & Links)", async ({ page }) => {
    // 1. 访问你的线上版 Portfolio
    await page.goto("https://samyxng.vercel.app/");

    // 2. 验证：这是我的网站吗？(检查大标题)
    await expect(page.getByText("Sam YX Ng")).toBeVisible();

    // 点击 Projects
    await page.getByRole("link", { name: "Projects" }).click();

    // 3. 验证：核心项目存在
    // 注意：Playwright 对大小写敏感，确保 "NetFlix" vs "Netflix" 和你网站上一致
    await expect(page.getByText("Netflix Clone")).toBeVisible();

    // 4. 验证：导航栏功能正常
    await page.getByRole("link", { name: "Contact" }).click();

    // 确认看到了 Email 地址
    await expect(page.getByText("xuanng96@hotmail.com")).toBeVisible();

    // 5. 截图留念
    await page.screenshot({ path: "portfolio-sanity-check.png" });
  });

  // 测试用例 2: 检查你的个人品牌文案 (Profile Check)
  test("Portfolio Profile Content Check (Keywords)", async ({ page }) => {
    await page.goto("https://samyxng.vercel.app/");

    // 1. 验证你的新身份标签
    // 确保 "Lawyer" 和 "Full-Stack Developer" 关键词出现
    await expect(page.getByText("discipline of a Lawyer")).toBeVisible();
    await expect(page.getByText("Full-Stack Developer")).toBeVisible();

    // 2. 验证核心技能关键词 (Playwright)
    await expect(page.getByText("Playwright")).toBeVisible();

    // 3. (反向验证) 确保旧的 "Project Manager" 彻底消失了
    await expect(page.getByText("Project Manager")).not.toBeVisible();

    // 再次截图，确认文案正确
    await page.screenshot({ path: "portfolio-content-check.png" });
  });
});
