
## component
1. 属性
    * is `string | ComponentDefinition | ComponentConstructor`
    * inline-template `boolean`

渲染元组件作为动态组件，真实的组件取决于`is`属性
```html
<!-- a dynamic component controlled by -->
<!-- the `componentId` property on the vm -->
<component :is="componentId"></component>

<!-- 渲染注册过的组件 或者作为prop传递的组件作为is的参数-->
<!-- can also render registered component or component passed as prop -->
<component :is="$options.components.child"></component>

```