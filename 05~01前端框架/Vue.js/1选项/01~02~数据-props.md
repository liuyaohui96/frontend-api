## props
1. 类型：`Array<string> | Object`
2. 描述：用于接收来自父组件的数据


## 简单的数组语法
props 可以用简单的数组语法表示
```js
// 字符串数组
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
```

## 对象语法
对象语法可以配置高级选项（例如类型检查)，对象语法的选项有：

1. type：根据构造函数检查
  * 原生构造函数：String, Number, Boolean, Symbol, Array, Object, Function，Date
  * 其他自定义的构造函数

2. default: 如果props没有传入，那么使用这个作为props的值。**对象和数组必须从一个工厂函数**

3. required: 定义props是否必须，如果值是真值(truthy value)，非生产环境会会跑出警告

3. validator: 自定义的验证函数，将props作为函数的唯一参数，如果函数返回假值(falsy value)，
 

```js
props :{
  // Basic type check (`null` and `undefined` values will pass any type validation)
  propA: Number,
  // Multiple possible types
  propB: [String, Number],
  // Required string
  propC: {
    type: String,
    required: true
  },
  // Number with a default value
  propD: {
    type: Number,
    default: 100
  },
  // Object with a default value
  propE: {
    type: Object,
    // Object or array defaults must be returned from
    // a factory function
    default: function() {
      return { message: 'hello' };
    }
  },
  // Custom validator function
  propF: {
    validator: function(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].indexOf(value) !== -1;
    }
  }
}
```


## prop的大小写
因为html中所有的属性都是大小写不敏感的(case-insensitive), 浏览器会将大小字母转换为小写字母。所以prop的驼峰命名需要使用等价的连字符命名代替。
```js
// camelCased 会转换为 kebab-cased (hyphen-delimited)
Vue.component('blog-post', {
  // camelCase in JavaScript
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})

<!-- kebab-case in HTML -->
<blog-post post-title="hello!"></blog-post>
```

## 传递静态或者动态的prop
```html
<!-- 静态的prop传递 -->
<blog-post title="My journey with Vue"></blog-post>

<!-- 动态的prop传递 -->
<blog-post v-bind:title="post.title"></blog-post>


<!-- 可以传递任何类型的值，特殊的，传递一个对象的所有属性，而不是这个对象，可以使用不带参数的v-bind -->
post: {
  id: 1,
  title: 'My Journey with Vue'
}
<blog-post v-bind="post"></blog-post>
// equal to
<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>
```

## 单向数据流
所有props在父子组件之间形成一个单向下行绑定(one-way down binding): 父组件更新，更新流动到子组件，所有子组件的props都会更新，反过来则不行，这样可以避免子组件意外改变父组件的状态，这意味着你不能在组件内更新props，如果更新props，控制台会抛出警告。

```js
// 有两种方法可以模拟修改props:

// === data 保存 props
props: ['initialCounter'],
data: function () {
  return {
    counter: this.initialCounter
  }
}

// === 计算属性
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

## 非prop属性
非prop属性传递到组件，组件却没有对应的prop定义的属性。有以下特性：
1. 因为组件库的作者不能预料到组件会被用于哪种场景，所以**组件可以接受任意的属性，并将它添加到组件的根元素上**。
2. 合并和替换：大多数属性来说，外部提供的值会替换掉内部设置的值。class和style更智能一些，它可以进行合并

```html
<!-- Imagine this is the template for bootstrap-date-input-->
<input type="date" class="form-control">

<!-- 使用 -->
<bootstrap-date-input
  type ="text"
  data-date-picker="activated"
  class="date-picker-theme-dark"
></bootstrap-date-input>

<!-- 
type="text" 替换掉 type="date"
class会进行合并 
-->
```


## 组件跟元素禁用继承
组件根元素禁用继承，可以在组件选项中使用`inheritAttrs: false`
```js
Vue.component('my-component', {
  inheritAttrs: false,
  // ...
})
```
> `$attrs`是实例属性，是一个对象，包含了传递给组件的属性名/属性值
配合`inheritAttrs: false`以及`$attrs`, 可以手动决定属性赋予哪一个元素，编写基础组建经常要使用到

```js
/*
!!!
inheritAttrs: false 选项不会影响class和style的绑定
*/
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
})

//==== 使用
<base-input
  v-model="username"
  required
  placeholder="Enter your username"
></base-input>

```