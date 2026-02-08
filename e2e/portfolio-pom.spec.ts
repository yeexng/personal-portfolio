// e2e/portfolio-pom.spec.ts
import { test, expect } from "@playwright/test";
import { PortfolioPage } from "./portfolioPage";

test.describe("Portfolio E2E Tests (POM Style)", () => {
  test("Full Sanity Check (Navigation, Projects & Contact)", async ({
    page,
  }) => {
    // 1. Initialize Page Object
    const portfolio = new PortfolioPage(page);

    // 2. Visit home page and verify identity
    await portfolio.goto();
    await portfolio.verifyProfileVisible();

    // 3. Test Navigation to Projects Section
    await portfolio.navigateToProjects();
    await portfolio.verifyProjectVisible(); // Verify "Netflix Clone" is visible

    // 4. Test Navigation to Contact Section
    await portfolio.navigateToContact();
    await portfolio.verifyContactInfoVisible(); // Verify Email is visible
  });
});
