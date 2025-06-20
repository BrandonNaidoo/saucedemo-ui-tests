# saucedemo-ui-tests

Automated UI tests for the SauceDemo application using Cypress and Playwright, with CI pipeline integration for continuous test execution and reporting.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Running Tests](#-running-tests)
- [Project Structure](#-project-structure)
- [Code Quality: ESLint & Prettier](#-code-quality-eslint--prettier)
- [Continuous Integration](#-continuous-integration)
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

### ✅ Run Cypress Tests

```bash
npm run test:cypress
```

---

## 🗂 Project Structure

```
saucedemo-ui-tests/
├── cypress/ # Cypress tests and support files
├── pages/ # Page Object Model (POM) classes
├── enums/ # User roles or domain enums
├── constants/ # Reusable test strings or error messages
├── .vscode/ # Editor settings (e.g., format-on-save)
├── cypress.config.ts # Cypress configuration
├── eslint.config.mjs # ESLint rules (modern format)
├── package.json # Project metadata and scripts
├── README.md # This file
```

---

## 🧹 Code Quality: ESLint & Prettier

This project uses ESLint and Prettier to maintain consistent code style and catch issues.  
Make sure to install the corresponding VS Code extensions for automatic linting and formatting on save.

---

## ⚙️ Continuous Integration

Planned features:

- **GitHub Actions** for running tests

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
