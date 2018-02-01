const commonrc = require('./commonrc');
const plugins = ['eslint', 'eslint-config-airbnb-base', 'eslint-plugin-import'];

rc =
`{
  "env": {
      "browser": false,
      "commonjs": true,
      "es6": true,
      "node": true
  },
  "extends": "airbnb-base",
  "rules": {
    ${commonrc}
    "import/imports-first": 0,
    "import/no-dynamic-require": 0,
    "no-unused-vars": 1,
    "no-console": 0,
    "no-underscore-dangle": 0,
    "arrow-parens": 0,
    "no-param-reassign": 0,
    "padded-blocks": 0,
    "prefer-const": 1,
    "linebreak-style":0,
    "max-len":0,
    "no-shadow": ["error", { "allow": ["err", "error"] }],
    "no-use-before-define": 0,
    "func-names": 0,
    "no-multi-assign": 0
  }
}
`;

module.exports = { rc, plugins };
