const commonrc = require('./commonrc');

const plugins = [
  "eslint",
  "eslint-config-airbnb-base",
  "eslint-friendly-formatter",
  "eslint-import-resolver-webpack",
  "eslint-loader",
  "eslint-plugin-html",
  "eslint-plugin-import",
]

const rc =
`{
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "browser": true
  },
  "extends": "airbnb-base",
  "plugins": [
    "html"
  ],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "build/webpack.base.conf.js"
      }
    }
  },
  "rules": {
    ${commonrc}
    "import/extensions": ["error", "always", {
      "js": "never",
      "vue": "never"
    }],
    "import/no-extraneous-dependencies": ["error", {
      "optionalDependencies": ["test/unit/index.js"]
    }],
    "no-debugger": 0,
    "no-use-before-define": ["error", { "functions": false }],
    "prefer-const": 1,
    "no-console": 1,
    "no-unused-vars": 0,
    "no-underscore-dangle": 0,
    "arrow-parens": 0,
    "no-param-reassign": 0,
    "no-unused-expressions": 0,
    "padded-blocks": 0,
    "linebreak-style":0,
    "no-restricted-syntax": 0,
    "eqeqeq": 0
  }
}
`

module.exports = { rc, plugins };
