#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;
const colors = require('colors');
const exec = require('child_process').exec;

const { noderc, browserrc, reactrc } = require('./rc');

const PATH = path.resolve();
let eslintContent = null;
let showHelp = false;
let length = 0;

for (let i in argv) {
  length += 1;
}

if (argv.n) {
  eslintContent = noderc.rc;
  install(noderc.plugins);

} else if (argv.b) {
  eslintContent = browserrc.rc;
  install(browserrc.plugins);

} else if (argv.r) {
  eslintContent = reactrc.rc;
  install(reactrc.plugins);

} else if (argv.h || argv.H || length > 2) {
  console.log(' ');
  console.log('==========================='.blue);
  console.log(' ');
  console.log('     -h -H  show help');
  console.log('     -n     node rules');
  console.log('     -b     browser rules');
  console.log('     -r     react rules');
  // console.log('     -v   vue rules');
  console.log(' ');
  console.log('==========================='.blue);
  console.log(' ');

  showHelp = true;

} else {
  eslintContent = noderc.rc;
  install(noderc.plugins);
}

if (!showHelp) {
  fs.writeFile(PATH + '/.eslintrc.js', eslintContent, (e) => {
    console.log(' ');
    console.log('Generate .eslintrc.js file success!'.green);
    console.log(' ');
    console.log('Installing devDependencies packages by cnpm ...'.blue);
  });
}

function install(plugins) {
  exec('cnpm i -D ' + plugins.join(' '), function(err, stdout, stderr) {
    if (err) {
      console.log(err);
    }

    console.log(stdout);

    if (stderr) {
      console.log(stderr);
    }
  });
}
