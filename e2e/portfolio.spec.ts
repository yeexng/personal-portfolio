import { test, expect } from "@playwright/test";

test("Portfolio Sanity Check", async ({ page }) => {
  // 1. 访问你的线上版 Portfolio
  await page.goto("https://samyxng.vercel.app/");

  // 2. 验证：这是我的网站吗？(检查大标题)
  await expect(page.getByText("Sam YX Ng")).toBeVisible();
  await page.getByRole("link", { name: "Projects" }).click();
  // 3. 验证：我的核心项目 "Netflix Clone" 必须在
  // 这是一个关键检查点，证明你的作品集列表是加载出来的
  await expect(page.getByText("NetFlix Clone")).toBeVisible();

  // 4. 验证：导航栏功能正常
  // 点击 "Contact"
  await page.getByRole("link", { name: "Contact" }).click();
  // 确认页面滚动到了 Contact 部分 (或者看到了 Email 地址)
  await expect(page.getByText("xuanng96@hotmail.com")).toBeVisible();

  // 5. 截图留念
  await page.screenshot({ path: "portfolio-live-check.png" });
});
