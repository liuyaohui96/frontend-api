// ===== 使用new 与不使用new构造函数 返回值的区别

// 使用new时，它指的是我们创建的新空对象。
// 但是，如果你不添加new它返回的是指定的返回值，如果没有return，则返回undefined！
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia); // Person { firstName: 'Lydia', lastName: 'Hallie' }
console.log(sarah); // undefined

// =====
function Test() {
  return {};
}
console.log(new Test()); // {}
console.log(Test()); // {}

// =====
function Test2() {
  return 1;
}
console.log(new Test2()); // Test2 {}
console.log(Test2()); // 1
