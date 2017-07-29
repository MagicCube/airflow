module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "import",
    "jsx-a11y",
    "react"
  ],
  rules: {
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "global-require": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "max-len": "warn",
    "no-else-return": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "react/forbid-prop-types": "warn",
    "react/prefer-stateless-function": "off",
    "react/no-unused-prop-types": "warn"
  }
};
