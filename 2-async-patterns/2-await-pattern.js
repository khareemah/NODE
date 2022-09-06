const { readFile } = require('fs');
const { reject } = require('lodash');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (error, res) => {
      if (error) {
        reject(error);
      } else {
        resolve(res);
      }
    });
  });
};

getText('./content/first.txt')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
