import { type Page, type Locator, expect } from "@playwright/test";

export class PortfolioPage {
  readonly page: Page;
  readonly nameHeader: Locator;
  readonly roleText: Locator;
  readonly navLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    // 定義 Locators (集中管理，以後改版面只要改這裡)
    this.nameHeader = page.getByRole("heading", { name: /Sam YX Ng/i });
    this.roleText = page.getByText(/Quality Analyst \| Aspiring/i);
    this.navLinks = page.locator("nav a");
  }

  async goto() {
    await this.page.goto("https://samyxng.vercel.app/");
    // 等待頁面核心元素出現，確保不是假加載
    await expect(this.nameHeader).toBeVisible();
  }

  async verifyProfileVisible() {
    await expect(this.nameHeader).toBeVisible();
    await expect(this.roleText).toBeVisible();
  }

  async getNavLinksCount() {
    return await this.navLinks.count();
  }
}
