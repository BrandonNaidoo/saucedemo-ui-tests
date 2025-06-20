import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',  // 👈 set your baseUrl here
    env: {
      users: {
        standard_user: { username: 'standard_user', password: 'secret_sauce' },
        locked_out_user: { username: 'locked_out_user', password: 'secret_sauce' },
        incorrect_username_user: { username: 'incorrect_username_user', password: 'secret_sauce' },
        incorrect_password_user: { username: 'standard_user', password: 'incorrect_password' }
      }
    }
  },
});
