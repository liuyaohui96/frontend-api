// 根据设置的断点分析

var a = 10
var bar = function(x) {
  var b = 5
  foo(x + b)
}

var foo = function(y) {
  var c = 5
  console.log(a + c + y)
}

bar(10)
