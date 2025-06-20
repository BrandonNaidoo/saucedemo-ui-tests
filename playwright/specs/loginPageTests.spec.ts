import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { LoginErrors } from '../constants/LoginErrors';
import { Role } from '../enums/Role';

import { getUser } from '../helpers/userHelper';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
  });

  test('Should display the logo', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.getLoginLogo()).toBeVisible();
    await expect(loginPage.getLoginLogo()).toHaveText('Swag Labs');
  });

  const testCases = [
    {
      name: 'username missing',
      username: '',
      password: getUser(Role.standard_user).password,
      expectedError: LoginErrors.MISSING_USERNAME,
    },
    {
      name: 'password missing',
      username: getUser(Role.standard_user).username,
      password: '',
      expectedError: LoginErrors.MISSING_PASSWORD,
    },
    {
      name: 'incorrect username',
      username: getUser(Role.incorrect_username_user).username,
      password: getUser(Role.incorrect_username_user).password,
      expectedError: LoginErrors.INVALID_CREDENTIALS,
    },
    {
      name: 'incorrect password',
      username: getUser(Role.incorrect_password_user).username,
      password: getUser(Role.incorrect_password_user).password,
      expectedError: LoginErrors.INVALID_CREDENTIALS,
    },
    {
      name: 'locked out user',
      username: getUser(Role.locked_out_user).username,
      password: getUser(Role.locked_out_user).password,
      expectedError: LoginErrors.LOCKED_OUT_USER,
    },
  ];

  for (const testCase of testCases) {
    test(`Should display an error when ${testCase.name}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      if (testCase.username !== undefined) {
        await loginPage.enterUsername(testCase.username);
      }

      if (testCase.password !== undefined) {
        await loginPage.enterPassword(testCase.password);
      }

      await loginPage.clickLogin();

      await expect(loginPage.getErrorMessageHeader()).toHaveText(testCase.expectedError);
    });
  }
});
