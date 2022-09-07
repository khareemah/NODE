const { createReadStream } = require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big_text.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./content/big_text.txt', { encoding: 'utf8' })
// const stream = createReadStream('./content/big_text.txt', {
//   highWaterMark: 1000,
//   encoding: 'utf8',
// });
const stream = createReadStream('./content/big_text.txt');

stream.on('data', (result) => {
  console.log(result);
});
stream.on('error', (err) => console.log(err));
