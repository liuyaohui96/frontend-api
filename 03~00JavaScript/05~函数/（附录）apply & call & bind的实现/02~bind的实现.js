// ======== 方式一
const bind = (fn, context) => (...args) => fn.apply(context, args);

// ======= 方式二
Function.prototype._bind = function(context, ...argArr) {
  let fn = this;
  return function() {
    fn.apply(context, argArr);
  };
};

//  ======== 方式三 考虑到原型链
Function.prototype.bind = function(context, ...rest) {
  let self = this;

  // 为bound函数记忆原型对象
  function Fn() {}
  Fn.prototype = this.prototype;

  let bound = function() {
    //bind传递的参数和函数调用时传递的参数拼接
    return self.apply(context, rest);
  };
  //原型链
  bound.prototype = new Fn();
  return bound;
};

// ================= example test
var name = 'Jack';
function person(age, job, gender) {
  console.log(this.name, age, job, gender);
}
var Yve = { name: 'Yvette' };
person.bind(Yve, 22, 'enginner')('female');
person._bind(Yve, 22, 'enginner')('female');
