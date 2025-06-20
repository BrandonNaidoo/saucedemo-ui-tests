import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright/specs',
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    testIdAttribute: 'data-test',
  },
});
