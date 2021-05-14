const fs = require('fs');

// Task: Create a function to generate markdown for README
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README generated!'
      });
    });
  });
};

module.exports = writeFile;