#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;
const colors = require('colors');
const { noderc, browserrc, reactrc } = require('./rc');

const PATH = path.resolve();
let eslintContent = null;
let showHelp = false;

if (argv.n) {
  eslintContent = noderc.rc;
  noderc.install();

} else if (argv.b) {
  eslintContent = browserrc.rc;
  browserrc.install();

} else if (argv.r) {
  eslintContent = reactrc.rc;
  reactrc.install();

} else if (argv.h) {
  console.log('==========================='.blue);
  console.log(' ');
  console.log('     -n   node rules');
  console.log('     -b   browser rules');
  console.log('     -r   react rules');
  // console.log('     -v   vue rules');
  console.log(' ');
  console.log('==========================='.blue);

  showHelp = true;

} else {
  eslintContent = noderc;
  noderc.install();
}

if (!showHelp) {
  fs.writeFile(PATH + '/.eslintrc.js', eslintContent, (e) => {
    console.log('Generator .eslintrc.js success!'.green);
    console.log('Installing devDependencies packages'.blue);
  });
}

