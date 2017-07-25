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
    "class-methods-use-this": "warn",
    "comma-dangle": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "max-len": "warn",
    "no-else-return": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "react/forbid-prop-types": "warn",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "warn"
  }
};
