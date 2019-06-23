/*
Parent.call(this, 父类参数)
优点：可以继承多个父类实例
缺点： 不能继承原型上的属性和方法
*/

function Parent(name) {
  this.name = name;
  this.sayHi = function() {
    console.log('Hi ' + this.name);
  };
}

Parent.prototype.syaHello = function() {
  console.log(this.name);
};

function Child(childName, parentName) {
  Parent.call(this, parentName);
  this.childName = childName;
  this.sayName = function() {
    console.log(this.childName, this.name);
  };
}

let child = new Child('liu', `liu's parent`);
child.sayName(); // liu liu's parent
child.sayHi(); // Hi liu's parent
child.sayHello(); // error
