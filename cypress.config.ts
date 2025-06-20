import { defineConfig } from 'cypress';
import webpackPreprocessor from '@cypress/webpack-preprocessor';

const webpackOptions = require('./webpack.config');

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on('file:preprocessor', webpackPreprocessor({ webpackOptions }));
    },
    baseUrl: 'https://www.saucedemo.com/',
    supportFile: 'cypress/support/e2e.ts',
    env: {
      users: {
        standard_user: { username: 'standard_user', password: 'secret_sauce' },
        locked_out_user: { username: 'locked_out_user', password: 'secret_sauce' },
        incorrect_username_user: { username: 'incorrect_username_user', password: 'secret_sauce' },
        incorrect_password_user: { username: 'standard_user', password: 'incorrect_password' },
      },
    },
  },
});
