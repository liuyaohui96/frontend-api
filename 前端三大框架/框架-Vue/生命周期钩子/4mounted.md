## mounted
  * el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
  * 该钩子在服务器端渲染期间不被调用
  * mounted 不会承诺所有的子组件也都一起被挂载。如果希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
  ```js
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
    })
  }
  ```