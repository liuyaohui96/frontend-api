
## keep-alive
1. 属性
    * inlcude `String | RegExp` 匹配的名称组件被缓存
    * exclude `String | RegExp` 匹配的名称组件不被缓存
    * max `Number` 缓存组件实例的最大数量

2. 描述：`<keep-alive>`包含动态组件时，`<keep-alive>`会缓存不活动组件实例(inactive component instance)而不是销毁它们，类似`<transition>`。主要用于保留组件状态或避免重新渲染。

`<keep-alive>`是一个抽象组件，本身不会渲染DOM元素，不会父组件链中出现

当组件在`<keep-alive>`里面切换，它的`activated`和`deactivated`生命周期钩子会对应被调用

注意，`<keep-alive>`是设计用来为一个直接子组件被切换的情景。不支持为`v-for`工作，当有很多条件孩子存在，`<keep-alive>`需要在一定时刻只渲染一个孩子

```html
<!-- basic -->
<keep-alive>
  <component :is="view"></component>
</keep-alive>

<!-- multiple conditional children -->
<keep-alive>
  <comp-a v-if="a > 1"></comp-a>
  <comp-b v-else></comp-b>
</keep-alive>

<!-- used together with `<transition>` -->
<transition>
  <keep-alive>
    <component :is="view"></component>
  </keep-alive>
</transition>

<!-- comma-delimited string -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- regex (use `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<keep-alive :max="10">
  <component :is="view"></component>
</keep-alive>
```