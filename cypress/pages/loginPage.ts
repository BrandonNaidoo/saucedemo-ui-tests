import { Role } from '../enums/role';

class LoginPage {
  private readonly usernameInput = '[data-test="username"]';
  private readonly passwordInput = '[data-test="password"]';
  private readonly loginButton = '[data-test="login-button"]';
  private readonly loginLogo = '.login_logo';
  private readonly errorMessageContainer = '.error-message-container';
  private readonly errorMessageHeader = '[data-test="error"]';

  public getLoginLogo(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.loginLogo);
  }

  public getErrorMessageContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.errorMessageContainer);
  }

  public getErrorMessageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.errorMessageHeader);
  }

  public visit(): void {
    cy.visit('/');
  }

  public clickLogin(): void {
    cy.get(this.loginButton).click();
  }

  public enterUserName(username: string): void {
    cy.get(this.usernameInput).type(username);
  }

  public enterPassword(password: string): void {
    cy.get(this.passwordInput).type(password);
  }

  public loginAs(role: Role): void {
    const user = Cypress.env('users')[role];
    if (!user) {
      throw new Error(`No credentials found for role: ${role}`);
    }

    this.enterUserName(user.username);
    this.enterPassword(user.password);

    this.clickLogin();
  }

  public login(username: string, password: string): void {
    this.enterUserName(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default LoginPage;
