const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('Hello Node\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
