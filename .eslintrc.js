module.exports = {
  extends: [
    // react hooks recommended rules configuration
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "react-app",
    "prettier",
    "react-app/jest",
    "plugin:jest/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "plugin:cypress/recommended",
    "plugin:react-perf/recommended",
    "plugin:jest-react/recommended",
    "plugin:typescript-sort-keys/recommended"
  ],
  plugins: [
    "react",
    "react-hooks",
    "react-perf",
    "@typescript-eslint",
    "typescript-sort-keys",
    "prettier",
    "jest",
    "jest-react",
    "promise",
    "cypress"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  },
  overrides: [
    {
      files: ["**/*.node.js", "**/*.node.ts"],
      extends: ["plugin:node/recommended"]
    }
  ]
};
