  ## updated
  * 该钩子在服务器端渲染期间不被调用。
  * 数据更改后调用，导致虚拟DOM重渲染和打补丁
  * 钩子被调用时，组件 DOM 已经更新，可以执行依赖于 DOM 的操作
  * 大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之
  *  updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated

  ```js
  updated: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been re-rendered
  })
  }
  ```