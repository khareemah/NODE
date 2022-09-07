const http = require('http');
const fs = require('fs');
const { readFileSync } = require('fs/promises');

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/big_text.txt', 'utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big_text.txt', 'utf-8');
    fileStream.on('open', () => {
      fileStream.pipe(res);
    });
  })
  .listen(5000);
