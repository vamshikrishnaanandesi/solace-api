const globals = require('globals');
const tseslint = require('typescript-eslint');
const { defineConfig } = require('eslint/config');
const prettierConfig = require('eslint-config-prettier');

module.exports = defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser },
  },
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    rules: {
      // Add any custom rules here
    },
  },
]);
