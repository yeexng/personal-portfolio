// e2e/portfolioPage.ts
import { type Page, type Locator, expect } from "@playwright/test";

export class PortfolioPage {
  readonly page: Page;
  readonly nameHeader: Locator;
  readonly roleText: Locator;

  // Navigation Links
  readonly projectsLink: Locator;
  readonly contactLink: Locator;

  // Verification Elements
  readonly netflixProject: Locator;
  readonly emailText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameHeader = page.getByRole("heading", { name: /Sam YX Ng/i });
    this.roleText = page.getByText(/Quality Analyst \| Aspiring/i);

    // 1. Define Navigation Links
    this.projectsLink = page.getByRole("link", { name: "Projects" });
    this.contactLink = page.getByRole("link", { name: "Contact" });

    // 2. Define Verification Elements
    this.netflixProject = page.getByText("Netflix Clone");
    this.emailText = page.getByText("xuanng96@hotmail.com");
  }

  async goto() {
    await this.page.goto("https://samyxng.vercel.app/");
    await expect(this.nameHeader).toBeVisible();
  }

  async verifyProfileVisible() {
    await expect(this.nameHeader).toBeVisible();
    await expect(this.roleText).toBeVisible();
  }

  // --- Actions ---

  async navigateToProjects() {
    await this.projectsLink.click();
  }

  async navigateToContact() {
    await this.contactLink.click();
  }

  // --- Assertions ---

  async verifyProjectVisible() {
    await expect(this.netflixProject).toBeVisible();
  }

  async verifyContactInfoVisible() {
    await expect(this.emailText).toBeVisible();
  }
}
