const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('Welcome to our home page');
  } else if (req.url == '/about') {
    res.end('Here is a brief history about us');
  } else {
    res.end(`
  <html>
    <h2>Opps!!!</h2>
  <p>We cant seem to find the page you are looking for</p>
  <a href="/">Go back home</a>
  <html>
  `);
    // res.write('Welcome to our home page');
    // res.end();
  }
});
// 5000 is the port or server  is going to be listening too
server.listen(5000);
