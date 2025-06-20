import LoginPage from '../pages/loginPage';
import { LoginErrors } from '../constants/LoginErrors';
import { Role } from '../enums/role';
import { getUser } from '../Utils/userHelper';

const loginPage = new LoginPage();

describe('Login Page', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Should display the correct elements', () => {
    loginPage.getLoginLogo().should('be.visible').should('have.text', 'Swag Labs');
  });

  it('Should display an error when the username is missing', () => {
    const { password } = getUser(Role.standard_user);
    loginPage.enterPassword(password);
    loginPage.clickLogin();

    loginPage.getErrorMessageContainer().should('be.visible');
    loginPage.getErrorMessageHeader().should('have.text', LoginErrors.MISSING_USERNAME);
  });

  it('Should display an error when the password is missing', () => {
    const { username } = getUser(Role.standard_user);
    loginPage.enterUserName(username);
    loginPage.clickLogin();

    loginPage.getErrorMessageContainer().should('be.visible');
    loginPage.getErrorMessageHeader().should('have.text', LoginErrors.MISSING_PASSWORD);
  });

  it('Should display an error when the username is incorrect', () => {
    const { username, password } = getUser(Role.incorrect_username_user);
    loginPage.login(username, password);

    loginPage.getErrorMessageContainer().should('be.visible');
    loginPage.getErrorMessageHeader().should('have.text', LoginErrors.INVALID_CREDENTIALS);
  });

  it('Should display an error when the password is incorrect', () => {
    const { username, password } = getUser(Role.incorrect_password_user);
    loginPage.login(username, password);

    loginPage.getErrorMessageContainer().should('be.visible');
    loginPage.getErrorMessageHeader().should('have.text', LoginErrors.INVALID_CREDENTIALS);
  });

  it('Should display an error when the user is locked out', () => {
    const { username, password } = getUser(Role.locked_out_user);
    loginPage.login(username, password);

    loginPage.getErrorMessageContainer().should('be.visible');
    loginPage.getErrorMessageHeader().should('have.text', LoginErrors.LOCKED_OUT_USER);
  });
});
