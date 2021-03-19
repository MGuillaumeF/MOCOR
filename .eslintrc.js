module.exports = {
  "extends": [
    // react hooks recommended rules configuration 
    "plugin:react-hooks/recommended",
    "react-app",
    "react-app/jest"
  ],
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  }
};
