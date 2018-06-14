const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});

  if(req.url == '/favicon.ico') {
    return;
  }

  // 在同一级下创建 目录 album/aaa 和 album/bbb 返回true
  fs.stat("./album/aaa", (err, stats) => {
    console.log(stats.isDirectory());
  });

  fs.readdir("./album", (err, files) => {
    console.log(files);
  });

  res.end("Hello World!");
});

server.listen(3000, "127.0.0.1");