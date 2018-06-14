const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  if(req.url == "/file1") {
    fs.readFile('./file1.html', (err, data) => {
      res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
      res.end(data);
    });
  } else if(req.url == "/file2") {
    fs.readFile('./test2.html', (err, data) => {
      res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
      res.end(data);
    });
  } else if(req.url == "/1.png") {
    fs.readFile('./1.png', (err, data) => {
      res.writeHead(200, {"Content-type": "image/png"});
      res.end(data);
    });
  } else {
    res.writeHead(404, {"Content-type": "text/html;charset=UTF-8"});
    res.end("OH NO! You Page Is Not Found!");
  }
  
});

server.listen(3000, "127.0.0.1");