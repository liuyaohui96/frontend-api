var name = 'window'

var object = {
  name: 'object',
  getName() {
    return function() {
      return this.name
    }
  }
}

// 因为 object.getName()返回一个函数
// 该函数的调用是在全局作用域内调用
console.log(object.getName()()) // 浏览器中结果是 widow

// --------------
var name2 = 'window'

var object2 = {
  name2: 'object',
  getName() {
    var that = this
    return function() {
      return that.name2
    }
  }
}

console.log(object2.getName()()) // object
