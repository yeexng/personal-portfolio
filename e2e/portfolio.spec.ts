import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E Tests", () => {
  // Test Case 1: Verify Profile Content
  test("Portfolio Profile Content Check (Keywords)", async ({ page }) => {
    // Note: If baseURL is set in playwright.config.ts, you can just use page.goto("/")
    await page.goto("https://samyxng.vercel.app/");

    // 1. Verify Identity Keywords
    // Ensuring the "Quality Analyst" persona is visible
    await expect(page.getByText("discipline of a Lawyer")).toBeVisible();
    await expect(page.getByText("Full-Stack Developer")).toBeVisible();

    // 2. Verify Core Skills (Playwright)
    await expect(page.getByText("Playwright")).toBeVisible();

   // 3. Negative Assertion: Ensure old roles (e.g., Project Manager) are not visible
    await expect(page.getByText("Project Manager")).not.toBeVisible();

    // Capture evidence
    await page.screenshot({ path: "portfolio-content-check.png" });
  });
});

// Test Case 2: Mobile Responsiveness Check
test("Mobile Viewport Check", async ({ page }) => {
 // 1. Set viewport to iPhone 12/13 dimensions
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto("https://samyxng.vercel.app/");

  // 2. Verify name visibility on mobile layout
  await expect(page.getByText("Sam YX Ng")).toBeVisible();

  // Test Navigation to Projects section
  await page.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/projects/);

  // Verify content in mobile view
  // Note: Removed { exact: true } to be more robust
  await expect(page.getByText("Playwright", { exact: true })).toBeVisible();

  // 3. Capture mobile view screenshot
  await page.screenshot({ path: "mobile-view-check.png" });
});

// Test Case 3: Visual Regression Test
test("Visual Regression Check - Home Page (Stable)", async ({ page }) => {
  // 1. Visit Home Page
  await page.goto("https://samyxng.vercel.app/");

  // 2. Wait for network idle to ensure assets are loaded
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(2000);

  // Inject CSS to mask dynamic elements (particles, cursor) for stable snapshots
  // This prevents flaky visual tests caused by animations
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

  // Allow time for CSS to apply
  await page.waitForTimeout(500);

  // 3. Visual Assertion
  await expect(page).toHaveScreenshot("home-page-stable.png", {
    maxDiffPixels: 200,
    animations: "disabled",
  });
});
