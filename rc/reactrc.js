const commonrc = require('./commonrc');
const plugins = [
  'eslint',
  'eslint-config-airbnb-base',
  'eslint-plugin-import',
  'eslint-import-resolver-webpack',
  'eslint-plugin-react'
];

const rc =
`{
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "amd": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "settings": {
    "import/resolver": "webpack"
  },
  "extends": "airbnb-base",
  "rules": {
    ${commonrc}
    "arrow-body-style": 0,
    "comma-dangle": 0,
    "class-methods-use-this": 0,
    "function-paren-newline": 0,
    "global-strict": 0,
    "no-extra-semi": 1,
    "no-underscore-dangle": 0,
    "no-console": 0,
    "no-unused-vars": 1,
    "no-use-before-define": ["error", { "functions": false, "classes": false }],
    "no-trailing-spaces": [1, { "skipBlankLines": true }],
    "no-unreachable": 1,
    "no-alert": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1
    "quotes": [ 1, "single" ],
  }
}
`;

const ignore =
`build/*.js
config/*.js
public/*.js
scripts/*.js
`;

module.exports = { rc, plugins, ignore };
