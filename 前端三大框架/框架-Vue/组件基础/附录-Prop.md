Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性

## 通过 Prop 向子组件传递数据
```js
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
```

## Prop 的大小写
HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名。
  > 如果你使用字符串模板，那么这个限制就不存在了

```js
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})

<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```

## Prop 类型
1. 字符串数组形式列出的 prop:
  ```js
  props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
  ```

2. 以对象形式列出 prop
  ```js
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // or any other constructor
  }

## 传递静态或动态 Prop
```html
<!-- 静态prop -->
<blog-post title="My journey with Vue"></blog-post>

<!-- 通过 v-bind 动态赋值 -->
<blog-post v-bind:title="post.title"></blog-post>
```

## 传入各种值
```html
<!-- 数字 -->
<!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:likes="42"></blog-post>
<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:likes="post.likes"></blog-post>

<!-- boolean值 -->
<!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
<blog-post is-published></blog-post>
<!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:is-published="false"></blog-post>
<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:is-published="post.isPublished"></blog-post>

<!-- 数组 -->
<!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>
<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:comment-ids="post.commentIds"></blog-post>

<!-- 对象 -->
<!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post
  v-bind:author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"
></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:author="post.author"></blog-post>
<!-- 传入一个对象的所有属性 -->
<blog-post v-bind="post"></blog-post>
```

## 单向数据流
所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态,子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

## props验证
```js
 props: {
    // 检测类型
    height: Number,
    // 检测类型 + 其他验证
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function (value) {
        return value >= 0
      }
  }
  ```

## 非 Prop 属性
非prop属性，指传递给组件，但是没有响应的prop定义。显式定义的 prop 适用于向一个子组件传入信息，然而组件库的作者并不总能预见组件会被用于怎样的场景，这也是为什么组件可以接受任意的特性，这个属性被增加到组件的根元素

1. 替换/合并已有的属性
  ```html
  <!-- <bootstrap-date-input> 的模板 -->
  <input type="date" class="form-control">

  <!-- 复用 -->
  <bootstrap-date-input
    data-date-picker="activated"
    class="date-picker-theme-dark"
  ></bootstrap-date-input>
  ```
  对于绝大多数特性来说，从外部提供给组件的值会替换掉组件内部设置好的值。所以如果传入 type="text" 就会替换掉 type="date" 并把它破坏！庆幸的是，class 和 style 特性会稍微智能一些，即两边的值会被合并起来，从而得到最终的值：form-control date-picker-theme-dark

2. 禁用属性继承
  如果你不希望组件的根元素继承特性，你可以在组件的选项中设置 inheritAttrs: false
  ```js
  Vue.component('my-component', {
    inheritAttrs: false,
    // ...
  })
  ```

  > inheritAttrs: false 选项不会影响 style 和 class 的绑定
