/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    languageOptions: {
      globals: {
        // Define your globals here
        browser: true,
        node: true,
        jest: true, // Enables Jest global variables
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module', // Set to 'module' if using ES modules
      },
    },
    rules: {
      // Your custom rules here
    },
  },
];

module.exports = config;
