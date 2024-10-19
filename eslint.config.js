/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    languageOptions: {
      globals: {
      
        browser: true,
        node: true,
        jest: true, 
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module', 
      },
    },
    rules: {
     
    },
  },
];

module.exports = config;
