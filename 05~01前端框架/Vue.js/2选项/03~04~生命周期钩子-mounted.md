
## mounted
1. 类型：Function
2. 描述：实例被挂载(mounted)之后调用，el 被新创建的`vm.$el`替换。如果根实例(root-instance)被挂载在文档内元素(in document element)，当mounted调用时，`vm.$el`也会成为文档内元素(in document element)

注意，mounted 不会承诺所有的子组件也会被挂载(mounted)。如果你想等到整个视图被加载，需要在mounted内部中使用`vm.$nextTick`

注意，该生命周期钩子在服务器渲染期间不会被调用


```js
mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
  })
}
```