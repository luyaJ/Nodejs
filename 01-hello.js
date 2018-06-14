const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
  res.end("Hello World!");
});

server.listen(3000, "127.0.0.1");