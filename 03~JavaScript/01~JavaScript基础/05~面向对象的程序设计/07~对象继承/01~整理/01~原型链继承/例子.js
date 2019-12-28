/* 
原型链上继承的优点是可以复用父类的方法以及父类的原型对象及其原型链上的方法和属性

缺点
1. 在 `Child.prototype = new Parent() 定义的原型对象的方法和属性将被覆盖
2. 无法给父类传递参数
*/
// Person 构造函数
function Parent(name) {
  this.name = name;
  this.sayHi = function() {
    console.log('parent say hi---instance method');
  };
}
// Parent 原型链
Parent.prototype.sayName = function() {
  console.log('parent name', this.name);
};
Parent.prototype.sayHello = function() {
  console.log('parent say hello ---prototype method');
};

function Child(name) {
  this.name = name;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child; // important
Child.prototype.sayName = function() {
  console.log('child name', this.name);
};

let child = new Child('liuyaohiu');
child.sayName(); // child name liuyaohiu
child.sayHello(); // parent say hello---prototype method
child.sayHi(); // parent say hi---instance method
