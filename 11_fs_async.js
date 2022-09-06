// asynchronous method of fs module

const { readFile, writeFile } = require('fs');
console.log('starting this task');
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result_async.txt',
      `\nHere is the result:\n${first}\n${second}`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('Starting the next one');
