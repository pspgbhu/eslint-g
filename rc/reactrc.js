const plugins = [
  'eslint',
  'eslint-config-airbnb-base',
  'eslint-plugin-import',
  'eslint-import-resolver-webpack',
  'eslint-plugin-react'
];

rc =
`
module.exports = {
  root: true,
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "import"
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
    "node": true,
  },
  "settings": {
    "import/resolver": "webpack"
  },
  extends: 'airbnb-base',
  // add your custom rules here
  rules: {
    "no-restricted-syntax": ["off", "BinaryExpression[operator='in']"],
    "import/imports-first": 0,
    'import/no-dynamic-require': 0,
    "no-unused-vars": 1,
    "no-console": 0,
    "no-underscore-dangle": 0,
    "arrow-parens": 0,
    "no-param-reassign": 0,
    "padded-blocks": 0,
    "prefer-const": 1,
    "linebreak-style":0,
    "max-len":0,
    "class-methods-use-this": 0,
    "no-shadow": ["error", { "allow": ["err", "error"] }],
    "func-names": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1
  }
};
`;

module.exports = { rc, plugins };
