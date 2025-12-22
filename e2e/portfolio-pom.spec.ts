// e2e/portfolio-pom.spec.ts
import { test, expect } from "@playwright/test";
import { PortfolioPage } from "./portfolioPage";

test.describe("Portfolio E2E Tests (POM Style)", () => {
  test("Full Sanity Check (Navigation, Projects & Contact)", async ({
    page,
  }) => {
    // 1. 初始化
    const portfolio = new PortfolioPage(page);

    // 2. 訪問首頁並驗證身份
    await portfolio.goto();
    await portfolio.verifyProfileVisible();

    // 3. 測試導航去 Projects
    await portfolio.navigateToProjects();
    await portfolio.verifyProjectVisible(); // 確認看到 Netflix Clone

    // 4. 測試導航去 Contact
    await portfolio.navigateToContact();
    await portfolio.verifyContactInfoVisible(); // 確認看到 Email
  });
});
