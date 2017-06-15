#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;
const colors = require('colors');
const { noderc } = require('./rc');

const PATH = path.resolve();
let eslintContent = null;

if (argv.n) {
  eslintContent = noderc;

} else if (argv.b) {
  // eslintContent = browserrc;

} else {
  eslintContent = noderc;
}


fs.writeFile(PATH + '/.eslintrc.js', eslintContent, (e) => {
  console.log('Generator .eslintrc.js success!'.green);
  console.log('Installing devDependencies packages'.blue);
});
