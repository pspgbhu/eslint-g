const commonrc = require('./commonrc');
const plugins = ['eslint', 'eslint-config-airbnb-base', 'eslint-plugin-import'];

const rc =
`{
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "extends": "airbnb-base",
  "plugins": [
    "import"
  ],
  "rules": {
    ${commonrc}
    "no-restricted-syntax": ["off", "BinaryExpression[operator='in']"],
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
    "func-names": 0
  }
}
`;

const ignore =
  ``;

module.exports = { rc, plugins, ignore };
