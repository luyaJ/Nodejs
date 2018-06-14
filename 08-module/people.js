function People(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

People.prototype = {
  sayName: function() {
    console.log(this.name + this.age + this.sex);
  }
}

// 此时，People被视为构造函数，可以用new来实例化
module.exports = People;