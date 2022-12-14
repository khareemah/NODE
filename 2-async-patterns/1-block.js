const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home page');
  } else if (req.url === '/about') {
    // BLOCKING CODE
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('About Page');
  } else {
    res.end('Error page');
  }
});

server.listen(5000, () => {
  console.log('listening to port 5000...');
});
