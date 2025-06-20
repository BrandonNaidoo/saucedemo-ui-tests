// eslint.config.mjs
import typescript from '@typescript-eslint/eslint-plugin';
import cypress from 'eslint-plugin-cypress';

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      env: {
        browser: true,
        node: true,
        es2021: true,
        'cypress/globals': true,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      cypress,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:cypress/recommended',
      'prettier',
    ],
    rules: {
      // Turn off explicit return types on functions to reduce verbosity
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Warn on unused vars, but ignore those starting with underscore
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // Customize more rules as you like
    },
  },
];
