
## mixins
1. 类型：`Array<Object>`
2. 描述：这是一个接受混入(mixin)对象的数组。对象中可以包含实例的选项(options), 最终都会在`Vue.extend`内使用相同的逻辑进行合并


```js
// === example
var mixin = {
  created: function () { console.log(1) }
}
var vm = new Vue({
  created: function () { console.log(2) },
  mixins: [mixin]
})
// => 1
// => 2
```