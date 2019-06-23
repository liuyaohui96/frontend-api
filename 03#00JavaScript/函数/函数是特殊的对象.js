function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
console.log(bark.animal); // dog
// 函数是一种特殊类型的对象。
// 所以属性是可调用的

// ==================================
// 不能像使用常规对象那样向构造函数添加属性。
// 如果要一次向所有对象添加功能，则必须使用原型。
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = () => this.firstName + this.lastName;

// error
// console.log(member.getFullName());

// ===========
