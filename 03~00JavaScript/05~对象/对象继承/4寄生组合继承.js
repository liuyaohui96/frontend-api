/*
在组合继承基础上修改，组合继承会调用了两次构造函数，初始化了两次方法和属性
1. 子类的原型指向一个空的构造函数的实力，这个空的构造函数的原型是父类的原型，
    避免了初始化两次方法和属性
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

(function() {
  function F() {}
  F.prototype = Parent.prototype;
  Child.prototype = new F();
})();

let child = new Child('liu', `liu's parent`);

child.sayName(); // liu liu's parent
child.sayHi(); // Hi liu's parent
child.sayHello(); // hello liu's parent
