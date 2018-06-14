const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // 格式化地址 {{ name: 'luyaj', age: '22', sex: '女' }}
  res.writeHead(200, {"Content-type": "text/html;charset=UTF8"})
  const queryObj = url.parse(req.url, true).query;
  const name = queryObj.name;
  const age = queryObj.age;
  const sex = queryObj.sex;
  console.log(queryObj);
  res.end("服务器收到了表单请求--" + name + age + sex);
});

server.listen(3000, '127.0.0.1');
