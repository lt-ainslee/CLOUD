module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", "tmp/**"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-undef": "error"
    }
  }
];
