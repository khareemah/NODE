const { readFile } = require('fs');
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('first task completed');
});
console.log('Next Task Please');
console.log('Next Task Please');
