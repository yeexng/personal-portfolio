// e2e/portfolioPage.ts
import { type Page, type Locator, expect } from "@playwright/test";

export class PortfolioPage {
  readonly page: Page;
  readonly nameHeader: Locator;
  readonly roleText: Locator;

  // 新增：導航欄連結
  readonly projectsLink: Locator;
  readonly contactLink: Locator;

  // 新增：驗證用的元素
  readonly netflixProject: Locator;
  readonly emailText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameHeader = page.getByRole("heading", { name: /Sam YX Ng/i });
    this.roleText = page.getByText(/Quality Analyst \| Aspiring/i);

    // 1. 定義導航連結
    this.projectsLink = page.getByRole("link", { name: "Projects" });
    this.contactLink = page.getByRole("link", { name: "Contact" });

    // 2. 定義驗證元素
    // 注意：這裡直接複製你原本 spec 裡成功的 locator
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

  // --- 新增的 Actions (動作) ---

  async navigateToProjects() {
    await this.projectsLink.click();
  }

  async navigateToContact() {
    await this.contactLink.click();
  }

  // --- 新增的 Assertions (驗證) ---

  async verifyProjectVisible() {
    await expect(this.netflixProject).toBeVisible();
  }

  async verifyContactInfoVisible() {
    await expect(this.emailText).toBeVisible();
  }
}
