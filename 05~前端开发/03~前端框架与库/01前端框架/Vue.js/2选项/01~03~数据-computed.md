


## computed
1. Type: `{ [key: string]: Function | { get: Function, set: Function } }`
2. 计算属性应用场景：模板内表达式对于简单的操作非常方便，如果放太多的逻辑在表达式内，会使得模板难以维护。对于任何复杂的逻辑，都可以放到计算属性中。

## 计算属性的绑定
计算属性的绑定：可以像在模板内绑定普通属性一样，模板内也能绑定计算属性。计算属性会被混入到Vue实例上，所有的getters和setters的this上下文(context)自动绑定到Vue实例上，如果使用箭头函数，this 不会是组件实例，但是仍然可以将实例作为第一个参数作为函数的传递。

## 缓存的计算属性
计算属性是被缓存的，仅当它响应式的依赖改变时计算属性被重新计算。

## 计算属性例子
计算属性默认只有getter，在需要时也可以定义setter
```js
var vm = new Vue({
  data: { a: 1 },
  computed: {
    // get only 仅读取
    aDouble: function () {
      return this.a * 2
    },
    // both get and set 读取和设置
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  }
})
vm.aPlus   // => 2
vm.aPlus = 3
vm.a       // => 2
vm.aDouble // => 4


//=== 使用箭头函数，为了不丢失实例上下文，将vm 作为参数作为传递
computed: {
  aDouble: vm => vm.a * 2
}
```