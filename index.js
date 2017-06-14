const fs = require('fs');
const path = require('path');
const PATH = path.resolve();

const CONTENT = `
  
  
  
`;



fs.writeFile(PATH + '.eslint', 'this is a test context!', (e) => {
  console.log(e);
});
