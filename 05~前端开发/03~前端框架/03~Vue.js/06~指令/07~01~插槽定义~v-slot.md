
## v-slot
1. 缩写：#
2. 期望：在函数参数可以生效的javascript表达式（支持解构）
3. 参数：插槽名（可选，默认为 default)
4. 限制
    *  `<template>` !!!
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

<!-- 缩写语法 -->
<base-layout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

## 插槽内容(slot content)
```html
<!-- example -->

<!-- 
组件的使用 
如果<navigation-link>的temaplte不包括slot，该组件开闭合标签的内容都会被丢弃
  -->
<navigation-link url="/profile">
  Your Profile
</navigation-link>

<!-- 组件的定义 -->
<a
  v-bind:href="url"
  class="nav-link"
>
<!-- slot 会 被 替换 -->
  <slot></slot>
</a>
```



## 插槽的后背内容(默认内容)
如果组件使用时，没有插槽内容提供，会使用后背内容(fallback content)作为提供
```html
<!-- 后备内容定义 -->
<button type="submit">
  <slot>Submit</slot>
</button>
```

## 命名插槽
```html
<!-- slot 中没有指定name则默认为default -->
<!-- baselayout 的template如下 -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<!-- 为命名插槽提供内容，可以在<template>上使用v-slot -->
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>

<!-- 也可以v-slot:default 指定默认插槽的内容 -->
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>

<!-- 动态命名插槽 -->
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
```


## 插槽内容的作用域和slot-props
插槽内容仅能访问组件本身定义的属性。

Everything in the parent **template** is compiled in parent scope; everything in the child template is compiled in the child scope.

```html
<!-- <current-user> template -->
<!-- user 是组件实例的user -->
<span>
  <slot>{{ user.lastName }}</slot>
</span>

<!-- user 是组件引用所在作用域的user，即父级作用域user -->
<current-user>
  {{ user.firstName }}
</current-user>


<!-- ==== 在组件引用中使用组件定义中的属性 -->
<!-- 组件引用 -->
<current-user>
  <!-- 通过v-slot:name 获取slot 定义提供的属性 -->
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>

<!-- current-user的组件定义 -->
<span>
  <!-- 将user属性传入到slotProps中 -->
  <slot v-bind:user="user">
    {{ user.lastName }}
  </slot>
</span>


<!-- ====== 解构 slot-props -->
<current-user v-slot="{ user }">
  {{ user.firstName }}
</current-user>

<current-user v-slot="{ user: person }">
  {{ person.firstName }}
</current-user>

<!-- define a fallback, can be used in case a slot prop is undefined -->
<current-user v-slot="{ user = { firstName: 'Guest' } }">
  {{ user.firstName }}
</current-user>
```