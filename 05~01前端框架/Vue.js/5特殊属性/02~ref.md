
## ref
1. 期望：String
2. 描述：用于给元素或子组件注册引用(register reference)。引用被注册在父组件下的`$ref`对象上

如果在元素上注册，引用指向该元素

如果在子组件上注册，引用是该组件的实例

当元素或子组件上有`v-for`指令存在时，注册的引用是包含DOM 节点或者DOM 实例的数组

注意，ref注册的时间：ref本身是作为render function的结果，在初次渲染并不能访问它们，所以不要在访问它们，因为不存在！，`$refs`不是响应式的，不要尝试使用它为template进行数据绑定
```html
<!-- vm.$refs.p will be the DOM node -->
<p ref="p">hello</p>

<!-- vm.$refs.child will be the child component instance -->
<child-component ref="child"></child-component>
```