module.exports = {
  "extends": [
    // react hooks recommended rules configuration 
    "plugin:react-hooks/recommended",
    "react-app",
    "prettier",
    "react-app/jest",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "react-hooks",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  }
};
