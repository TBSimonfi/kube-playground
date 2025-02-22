// eslint.config.js
export default [
    {
      files: ["*.js"],
      rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        // Add more rules as needed
      },
      parserOptions: {
        ecmaVersion: 2020,
      },
      env: {
        browser: true,
        node: true,
      },
    },
  ];
  