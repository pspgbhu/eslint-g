{
  env: {
    "node": true,
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // add your custom rules here
  rules: {
    "no-restricted-syntax": ["off", "BinaryExpression[operator='in']"],
    "import/imports-first": 0,
    'import/no-dynamic-require': 0,
    "no-unused-vars": 0,
    "no-console": 0,
    "no-underscore-dangle": 0,
    "arrow-parens": 0,
    "no-param-reassign": 0,
    "no-unused-expressions": 0,
    "padded-blocks": 0,
    "prefer-const": 1,
    "linebreak-style":0,
    "max-len":0,
  },
};
