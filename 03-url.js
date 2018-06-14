const http = require('http');
const url = require('url');

// http://127.0.0.1:3000/abc?luya
const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;  // /abc
  const query = url.parse(req.url, true).query;  // luya

  console.log(pathname);
  console.log(query);
  res.end();
});

server.listen(3000, "127.0.0.1");