Function.prototype.bind = function(context, ...rest) {
  let self = this

  // 为bound函数记忆原型对象
  function Fn() {}
  Fn.prototype = this.prototype

  let bound = function() {
    //bind传递的参数和函数调用时传递的参数拼接
    return self.apply(context, rest)
  }
  //原型链
  bound.prototype = new Fn()
  return bound
}

var name = 'Jack'
function person(age, job, gender) {
  console.log(this.name, age, job, gender)
}
var Yve = { name: 'Yvette' }
let result = person.bind(Yve, 22, 'enginner')('female')
