
## v-slot
1. 缩写：#
2. 期望：在函数参数可以生效的javascript表达式（支持解构）
3. 参数：插槽名（可选，默认为 default)
4. 限制
    * `<template>`
    * component

5. 描述：表示希望接受内容的插槽（插槽接受上级组件提供的内容，可以使用props属性）

```html
<!-- Named slots -->
<base-layout>
  <template v-slot:header>
    Header content
  </template>

  Default slot content

  <template v-slot:footer>
    Footer content
  </template>
</base-layout>

<!-- Named slot that receives props -->
<infinite-scroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</infinite-scroll>


<!-- Default slot that receive props, with destructuring -->
<mouse-position v-slot="{ x, y }">
  Mouse position: {{ x }}, {{ y }}
</mouse-position>
```