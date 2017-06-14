const commonrc = require('./commonrc');

const rc = {
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
  }
};

Object.assign(rc.rules, commonrc.rules);

module.exports = rc;
