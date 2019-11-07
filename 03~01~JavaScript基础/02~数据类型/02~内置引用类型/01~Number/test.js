let a = new Number('123');
console.log(a instanceof Number); // a的原型链中存在等于 Number 构造函数的原型对象
console.log(a === 123); // false,两个不同的类型

let b = Number('123');
console.log(b === 123); // true, b已经转换为number类型
