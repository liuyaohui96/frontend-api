
## updated
1. 类型：Function
2. 描述：数据更新导致虚拟DOM被重新渲染(re-renderr)和打补丁(re-patched)。当该生命周期钩子被调用，组件的DOM已经被更新，在这里可以执行依赖于DOM的操作。

大多数情况下，应该避免在该生命周期钩子内改变状态，如果要反映状态的变化，更好是使用计算属性和watcher代替。

注意，update不能保证所有的子组件都被重新渲染，如果需要等待整个视图被重新渲染(re-renddered), 需要在update钩子内使用`vm.$nextTick`

```js
updated: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been re-rendered
  })
}
```

注意，该生命周期钩子在服务器渲染期间不会被调用