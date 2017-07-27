module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  rules: {
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "global-require": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
    "max-len": "off",
    "no-underscore-dangle": "off",
    "react/prefer-stateless-function": "off",
    "react/forbid-prop-types": "off"
  }
};
