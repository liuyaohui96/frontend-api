## methods
1. 类型：`{ [key: string]: Function }`

特点：
1. methods 将被混入(mixed)到 Vue 实例中，可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用
3. 所有方法中的 this 上下文自动绑定为 Vue 实例（注意，如果使用箭头函数，this会绑定到父级上下文，而不是vue实例）

```js
var vm = new Vue({
  data: { a: 1 },
  methods: {
    plus: function () {
      this.a++
    }
  }
})
vm.plus()
vm.a // 2
```