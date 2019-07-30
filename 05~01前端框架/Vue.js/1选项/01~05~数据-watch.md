## watch
1. 类型： `{ [key: string]: string | Function | Object | Array}`

1. 是一个对象，key是需要watch的表达式，value是相对应的回调函数， value可以是方法名的字符串，或者是对象
2. Vue 实例实例化阶段为watch对象的每个属性调用`$watch()`
3. 不应该使用箭头函数来定义 watch 函数,理由是箭头函数的this绑定了父级作用域的上下文而不会按照期望指向 Vue 实例。

```js
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    }
  },
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // string method name
    b: 'someMethod',
    // the callback will be called whenever any of the watched object properties change regardless of their nested depth
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // the callback will be called immediately after the start of the observation
    d: {
      handler: 'someMethod',
      immediate: true
    },
    e: [
      'handle1',
      function handle2 (val, oldVal) { /* ... */ },
      {
        handler: function handle3 (val, oldVal) { /* ... */ },
        /* ... */
      }
    ],
    // watch vm.e.f's value: {g: 5}
    'e.f': function (val, oldVal) { /* ... */ }
  }
})
vm.a = 2 // => new: 2, old: 1
```
计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器, 需要在**数据变化时执行异步或开销较大的操作**时，这个方式是最有用的