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

} else if (argv.h) {
  console.log('-n node rules');
  console.log('-b browser rules');
  console.log('-r react rules, cannot use yet!!');
  console.log('-v vue rules, cannot use yet!!');

  return;

} else {
  eslintContent = noderc;
}


fs.writeFile(PATH + '/.eslintrc.js', eslintContent, (e) => {
  console.log('Generator .eslintrc.js success!'.green);
  console.log('Installing devDependencies packages'.blue);
});
