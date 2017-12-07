module.exports = {
  "rules": {
    "no-new": 0,
    "no-console": 0,
    'arrow-body-style': 0,
    // "react/prefer-stateless-function": 0,
    "react/no-unescaped-entities": 0,
    "func-names": ["error", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  "parser": "babel-eslint",
  "globals": {
    "window": true,
    "document": true,
  },
  "extends": "airbnb"
};