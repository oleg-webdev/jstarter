module.exports = {
  "rules": {
    "no-plusplus": 0,
    "max-len": ["error", {
      "code": 120,
      "ignoreUrls": true
    }],
    "no-new": 0,
    "no-console": 0,
    'arrow-body-style': 0,
    "no-case-declarations": 0,
    "import/no-extraneous-dependencies": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/destructuring-assignment": "off",
    "react/no-did-update-set-state": 0,
    "react/no-unescaped-entities": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": 0,
    "func-names": ["error", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

    // Supress clicking on non interractive elements
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
  },
  "parser": "babel-eslint",
  "globals": {
    "window": true,
    "document": true,
    "navigator": true,
    "localStorage": true,
    "sessionStorage": true,
  },
  "plugins": [
    "flowtype"
  ],
  "extends": [
    "plugin:flowtype/recommended",
    "airbnb"
  ],

  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js'
      }
    }
  }
};
