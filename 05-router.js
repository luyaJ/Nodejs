const http = require('http');

const server = http.createServer((req, res) => {

  res.writeHead(200, {"Content-type": "text/html;charset=UTF8"});
  // 得到 url
  const userurl = req.url;

  // substr函数来判断此时的开头
  if(userurl.substr(0, 9) == "/student/") {
    const studentId = userurl.substr(9);
    console.log(studentId);
    if(/^\d{10}$/.test(studentId)) {
      res.end("您要查询学生信息，id为：" + studentId);
    } else {
      res.end("学生学号位数不对");
    }

  } else if(userurl.substr(0, 9) == "/teacher/") {
    const teacherId = userurl.substr(9);
    if(/^\d{6}$/.test(teacherId)) {
      res.end("您要查询老师信息，id为：" + teacherId);
    } else {
    
      res.end("老师学号位数不对");
    }
  }
  res.end("end");
});

server.listen(3000, '127.0.0.1');