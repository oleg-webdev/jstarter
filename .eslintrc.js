module.exports = {
  "rules": {
    "no-plusplus": 0,
    "max-len": ["error", {
      "code": 120,
      "ignoreUrls": true
    }],
    "no-new": 0,
    "function-paren-newline": 0,
    "no-console": 0,
    'arrow-body-style': 0,
    "no-case-declarations": 0,
    // "react/prefer-stateless-function": 0,
    "react/no-did-update-set-state": 0,
    "react/no-unescaped-entities": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "jsx-a11y/label-has-for": 0,
    "func-names": ["error", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

    // Supress clicking on non interractive elements
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to", "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
  },
  "parser": "babel-eslint",
  "globals": {
    "window": true,
    "document": true,
    "navigator": true,
    "localStorage": true,
    "sessionStorage": true,
  },
  "extends": "airbnb"
};