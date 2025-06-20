import LoginPage from '../pages/loginPage';
import { LoginErrors } from '../constants/LoginErrors';
import { Role } from '../enums/role';
import { getUser } from '../Utils/userHelper';

const loginPage = new LoginPage();

describe('Login Page', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Should display the logo', () => {
    loginPage.getLoginLogo().should('be.visible').should('have.text', 'Swag Labs');
  });

  const testCases = [
    {
      testName: 'username is missing',
      username: '',
      password: getUser(Role.standard_user).password,
      expectedError: LoginErrors.MISSING_USERNAME,
    },
    {
      testName: 'password is missing',
      username: getUser(Role.standard_user).username,
      password: '',
      expectedError: LoginErrors.MISSING_PASSWORD,
    },
    {
      testName: 'username is incorrect',
      username: getUser(Role.incorrect_username_user).username,
      password: getUser(Role.incorrect_username_user).password,
      expectedError: LoginErrors.INVALID_CREDENTIALS,
    },
    {
      testName: 'password is incorrect',
      username: getUser(Role.incorrect_password_user).username,
      password: getUser(Role.incorrect_password_user).password,
      expectedError: LoginErrors.INVALID_CREDENTIALS,
    },
    {
      testName: 'user is locked out',
      username: getUser(Role.locked_out_user).username,
      password: getUser(Role.locked_out_user).password,
      expectedError: LoginErrors.LOCKED_OUT_USER,
    },
  ];

  testCases.forEach(({ testName, username, password, expectedError }) => {
    it(`Should display an error when the ${testName}`, () => {
      if (username) loginPage.enterUserName(username);
      if (password) loginPage.enterPassword(password);
      loginPage.clickLogin();

      loginPage.getErrorMessageHeader().should('have.text', expectedError);
    });
  });
});
