import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Store the test ids as strings (no brackets or attribute syntax)
  private usernameInput = 'username';
  private passwordInput = 'password';
  private loginButton = 'login-button';
  private loginLogo = '.login_logo';
  private errorMessageContainer = '.error-message-container';
  private errorMessageHeader = 'error';

  async visit() {
    await this.page.goto('/');
  }

  async enterUsername(username: string) {
    await this.page.getByTestId(this.usernameInput).fill(username);
  }

  async enterPassword(password: string) {
    await this.page.getByTestId(this.passwordInput).fill(password);
  }

  async clickLogin() {
    await this.page.getByTestId(this.loginButton).click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  getLoginLogo() {
    return this.page.locator(this.loginLogo);
  }

  getErrorMessageContainer() {
    return this.page.locator(this.errorMessageContainer);
  }

  getErrorMessageHeader() {
    return this.page.getByTestId(this.errorMessageHeader);
  }
}
