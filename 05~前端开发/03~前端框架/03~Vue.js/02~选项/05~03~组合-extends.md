
## extends
1. 类型：`Object | Function`
2. 描述： 从其他组件进行扩展，而不用使用`Vue.extend()`

```js
var CompA = { ... }

// extend CompA without having to call `Vue.extend` on either
var CompB = {
  extends: CompA,
  ...
}
```