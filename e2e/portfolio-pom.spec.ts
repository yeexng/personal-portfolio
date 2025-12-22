import { test, expect } from "@playwright/test";
import { PortfolioPage } from "./portfolioPage";

test.describe("Portfolio E2E Tests (POM Style)", () => {
  test("Sanity Check using Page Object Model", async ({ page }) => {
    const portfolio = new PortfolioPage(page);
    await portfolio.goto();
    await portfolio.verifyProfileVisible();
  });
});
