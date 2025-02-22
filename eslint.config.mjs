// eslint.config.mjs
export default [
  {
    files: ["*.js"],
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      // Add more rules as needed
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
    env: {
      browser: true,
      node: true,
    },
  },
];
