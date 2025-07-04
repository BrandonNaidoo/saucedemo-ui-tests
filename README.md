# saucedemo-ui-tests

Automated UI tests for the SauceDemo application using Cypress and Playwright, with CI pipeline integration for continuous test execution and reporting.

## Build Status

| Service        | Status                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **GitHub**     | [![GitHub Workflow Status](https://github.com/BrandonNaidoo/saucedemo-ui-tests/actions/workflows/run-tests.yml/badge.svg)](https://github.com/BrandonNaidoo/saucedemo-ui-tests/actions/workflows/run-tests.yml)                                        |
| **CircleCI**   | [![CircleCI](https://dl.circleci.com/status-badge/img/circleci/LdsahFmCXeTHzXz4vmYWNf/584bTtEpQZCJ6ncw6t8Jhp/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/LdsahFmCXeTHzXz4vmYWNf/584bTtEpQZCJ6ncw6t8Jhp/tree/main) |
| **SonarCloud** | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=BrandonNaidoo_saucedemo-ui-tests&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=BrandonNaidoo_saucedemo-ui-tests)                                    |

---

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Running Tests](#-running-tests)
- [Project Structure](#-project-structure)
- [Code Quality: ESLint & Prettier](#-code-quality-eslint--prettier)
- [Continuous Integration](#-continuous-integration)
- [OWASP ZAP Security Scans](#-owasp-zap-security-scans)
- [Contributing](#-contributing)
- [License](#-license)

---

## Project Overview

This repository contains end-to-end UI tests for SauceDemo. The tests are implemented using:

- **Cypress** — for fast and reliable browser testing.

---

## Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/BrandonNaidoo/saucedemo-ui-tests.git
cd saucedemo-ui-tests
npm install
```

---

## 🚀 Running Tests

### 🧪 Cypress

- Run Cypress tests in headless mode (default for CI):

```bash
npm run test:cypress
```

- Open Cypress Test Runner (headed mode for local development):

```bash
npm run test:open
```

### 🎭 Playwright

- Run Playwright tests in headed mode (default for local dev):

```bash
npm run test:playwright
```

- Run Playwright tests in headless mode (recommended for CI):

```bash
npm run test:playwright:ci
```

---

## 🗂 Project Structure

```
saucedemo-ui-tests/
├── .circleci/ # CircleCI configuration
├── .github/ # GitHub workflow configuration
├── .vscode/ # Editor settings (e.g., format-on-save)
├── cypress/ # Cypress tests and support files
├── playwright.config.ts # Playwright configuration
├── pages/ # Page Object Model (POM) classes
├── enums/ # User roles or domain enums
├── constants/ # Reusable test strings or error messages
├── cypress.config.ts # Cypress configuration
├── eslint.config.mjs # ESLint rules (modern format)
├── package.json # Project metadata and scripts
├── playwright.config.ts # Playwright configuration
├── README.md # This file
├── sonar-project.properties # SonarCloud project configuration
├── tsconfig.json # TypeScript configuration
```

---

## 🧹 Code Quality: ESLint & Prettier

This project uses ESLint and Prettier to maintain consistent code style and catch issues.  
Make sure to install the corresponding VS Code extensions for automatic linting and formatting on save.

---

## ⚙️ Continuous Integration

- **GitHub Actions** configured to run Cypress tests, Playwright tests, SonarCloud scan and Owasp Zap scan on push, pull request, and scheduled monthly
- **Circle CI** configured to run Cypress tests and Playwright tests on push, pull request, and scheduled monthly

---

## 🔐 OWASP ZAP Security Scans

OWASP ZAP is integrated into the GitHub Actions workflow to perform automated security scans against [saucedemo.com](https://www.saucedemo.com). Results are generated with each pipeline run to help identify common web vulnerabilities.

---

## 🤝 Contributing

At this time, this project is not open to external contributions.

Please feel free to fork the repository for personal use or experimentation, but I am not currently accepting pull requests or feature suggestions.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

Thanks to [Sauce Labs](https://www.saucelabs.com/) for providing a publicly available UI demo site.
