// 异步变同步
const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readdir("./album/", (err, files) => {
    const file = [];

    // 迭代器就是强行把异步的函数，变成同步的函数
    (function iterator(i) {
      if(i == files.length) {
        console.log(file);  // [ 'aaa', 'bbb' ]
        return;
      }

      fs.stat("./album/" + files[i], (err, stats) => {
        if(stats.isDirectory()) {
          file.push(files[i]);
        }
        iterator(i + 1);
      });

    })(0);
  });
  
  res.end("end");
});

server.listen(3000, "127.0.0.1");