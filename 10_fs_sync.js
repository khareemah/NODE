const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first);
console.log(second);

writeFileSync(
  './content/result_sync.txt',
  `\nHere is the result:\n${first}\n${second}`,
  { flag: 'a' }
);
console.log('done with this task');
console.log('starting the next one');
