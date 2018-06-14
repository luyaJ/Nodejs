const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // 得到用户路径
  let pathname = url.parse(req.url).pathname;

  if (pathname == '/') {
    pathname = 'index.html';
  }

  // 拓展名
  let extname = path.extname(pathname);
  console.log(extname);

  // 读取文件
  fs.readFile('./test/' + pathname, (err, data) => {
    if (err) {
      fs.readFile('./test/404.html', (err, data) => {
        res.writeHead(404, {"Content-type": "text/html;charset=UTF8"});
        res.end(data);
      });
      return;
    }
    let mime = getMime(extname);
    res.writeHead(200, {"Content-type": mime});

    res.end(data);
  });

});

server.listen(3000, "127.0.0.1");

function getMime(extname) {
  switch (extname) {
    case '.html':
      return "text/html";
      break;
    case '.png':
      return "image/png";
      break;
    case '.css':
      return "text/css";
      break;
  }
}