import { test, expect } from "@playwright/test";

// 这是一个 "Describe" 块，用来把相关测试分组（就像文件夹一样），让报告更好看
test.describe("Portfolio E2E Tests", () => {
  // 测试用例 1: 检查你的个人品牌文案 (Profile Check)
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

// 测试用例 2: 移动端适配测试
test("Mobile Viewport Check", async ({ page }) => {
  // 1. 把浏览器窗口变成 iPhone 12/13 的大小
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto("https://samyxng.vercel.app/");

  // 2. 验证：在手机上，你的名字还看得见吗？
  await expect(page.getByText("Sam YX Ng")).toBeVisible();

  // 点击 Projects
  await page.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/projects/);
  await expect(page.getByText("Playwright", { exact: true })).toBeVisible();

  // 3. 截图留念 (这就叫 Visual Testing 的雏形)
  await page.screenshot({ path: "mobile-view-check.png" });
});

test("Visual Regression Check - Home Page (Stable)", async ({ page }) => {
  // 1. 访问首页
  await page.goto("https://samyxng.vercel.app/");

  // 2. 等待加载
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(2000);

  // 🔥【关键修改】直接注入 CSS，强制隐藏粒子背景和打字机光标
  // 这样比 mask 更彻底，直接让动的东西消失。
  await page.addStyleTag({
    content: `
      /* 隐藏星星背景 */
      #tsparticles { 
        display: none !important; 
        visibility: hidden !important;
      }
      
      /* (可选) 如果你有打字机效果的光标在闪，把下面这行也加上 */
      .Typewriter__cursor {
        visibility: hidden !important;
      }
    `,
  });

  // 给一点点时间让 CSS 生效
  await page.waitForTimeout(500);

  // 3. 视觉断言
  await expect(page).toHaveScreenshot("home-page-stable.png", {
    maxDiffPixels: 200,
    // 既然背景已经 display: none 了，就不需要 mask 了，也不需要 huge timeout 了
    animations: "disabled",
  });
});
