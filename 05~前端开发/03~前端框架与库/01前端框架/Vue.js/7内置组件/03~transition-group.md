
## transtion-group
1. 属性
    * tag `String` 默认是span
    * move-class 覆盖在过渡移动期间的css 
    * 其他在`<transition>`上的除了mode的属性

2. 事件。与在`<transition>`上的事件相同
3. 描述：`<transition-group>`为多个元素或者多个组件应用过滤

`<transiton-group>`默认渲染一个真实的DOM元素，默认是`<span>`，可以通过`tag`属性配置渲染的元素

注意，`<transiton-group>`的子节点必须拥有独一无二的key才能使动画正常工作

`<transiton-group>`支持通过CSS transform实现移动过渡(moving transtion)，当一个孩子的位置在一次更新后发生改变，会自动应用css 类(由name属性生成或者`move-class`属性进行配置)


```html
<transition-group tag="ul" name="slide">
  <li v-for="item in items" :key="item.id">
    {{ item.text }}
  </li>
</transition-group>
```