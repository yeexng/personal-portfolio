# Personal Portfolio - Sam Yee Xuan Ng

This is my personal portfolio website, built with **React** and **TypeScript**, showcasing my professional background as a Quality Analyst and aspiring Automation Engineer.

🚀 **Live Demo:** [https://samyxng.vercel.app/](https://samyxng.vercel.app/)

![Playwright Tests](https://github.com/yeexng/personal-portfolio/actions/workflows/playwright.yml/badge.svg)


## 🛠 Tech Stack

* **Frontend:** React, TypeScript, CSS Modules
* **Animation:** tsparticles (Interactive background)
* **Deployment:** Vercel
* **Test Automation:** Playwright
* **CI/CD:** GitHub Actions
* **Environment:** Docker

---

## 🧪 Testing Strategy

This project implements a robust **E2E automation suite** using Playwright. The goal is to serve as a **deployment confidence gate**, focusing on critical user flows and visual stability rather than 100% regression coverage.

### ✅ Scope
* **Navigation Sanity:** Ensuring all links and routing work as expected.
* **Critical Content Presence:** Verifying name, role, and key portfolio sections load correctly.
* **Visual Stability:** Detecting layout regressions on static elements using Visual Regression Testing.

### 🚫 Out of Scope (Intentionally Not Tested)
* **Internal Component Logic:** Covered by Unit Tests (if applicable).
* **Animations & Particle Effects:** Excluded to prevent flaky tests.
* **Dynamic Background Pixels:** Masked out during visual regression checks to ensure stability.

### 🛡️ Flakiness Mitigation
* **Disable Animations:** CSS/JS animations are disabled during test execution (`animations: 'disabled'`).
* **Dynamic Masking:** The particle background (`#tsparticles`) is masked with a solid color to ensure consistent visual diffs across environments.
* **Dockerized Execution:** Tests run inside a Docker container to eliminate OS-specific rendering inconsistencies.

---

## 💻 Getting Started

### Prerequisites
* Node.js (v18+)
* npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yeexng/personal-portfolio.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
    
### Running the App

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```bash
npm start
```
### Run tests (Headless mode)
``` bash
npx playwright test
```

### Run tests with UI mode (Interactive)
``` bash
npx playwright test --ui
```

### Update Visual Snapshots: If you made intentional design changes, update the baseline screenshots
``` bash
npx playwright test --update-snapshots
```

## ⚙️ CI/CD Pipeline

This repository uses **GitHub Actions** to automatically run the test suite on every Pull Request.
* **Workflow file:** `.github/workflows/playwright.yml`
* **Artifacts:** Playwright HTML reports are generated and uploaded as artifacts for failed runs.
  
---
[LinkedIn](https://www.linkedin.com/in/samyxng) | [Portfolio](https://samyxng.vercel.app/)
