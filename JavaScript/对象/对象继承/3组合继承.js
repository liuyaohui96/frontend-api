/*
将原型继承+构造继承的组合，叫做组合继承：
可以继承实例属性/方法，也可以继承原型属性/方法
调用了两次父类构造函数，初始化了两次方法和属性
*/

function Parent(name) {
  this.name = name;
  this.sayHi = function() {
    console.log('hi ' + this.name);
  };
}

Parent.prototype.sayHello = function() {
  console.log('hello ' + this.name);
};

function Child(childName, parentName) {
  Parent.call(this, parentName);
  this.childName = childName;
  this.sayName = function() {
    console.log(this.childName, this.name);
  };
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;

let child = new Child('liu', `liu's parent`);

child.sayName(); // liu liu's parent
child.sayHi(); // Hi liu's parent
child.sayHello(); // hello liu's parent
