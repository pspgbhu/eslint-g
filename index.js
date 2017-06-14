const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;
const colors = require('colors');
const { noderc, browserrc } = require('./rc');

const PATH = path.resolve();
const eslintContent = null;

if (argv.n) {
  eslintContent = noderc;

} else if (argv.b) {
  eslintContent = browserrc;

} else {
  eslintContent = noderc;
}


fs.writeFile(PATH + '.eslintrc.js', eslintContent, (e) => {
  console.log('Generator success!'.green);
});
