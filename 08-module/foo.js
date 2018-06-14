const msg = "hello world";
const info = "呵呵";

function showInfo() {
  console.log(this);
}

exports.msg = msg;
exports.info = info;
exports.showInfo = showInfo;