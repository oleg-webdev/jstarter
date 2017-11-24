module.exports = {
  "rules": {
    "no-new": 0,
    "no-console": 0,
    'arrow-body-style': 0,
    "func-names": [ "error", "never" ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
  "globals": {
    "window": true,
    "document": true,
  },
  "extends": "airbnb"
};