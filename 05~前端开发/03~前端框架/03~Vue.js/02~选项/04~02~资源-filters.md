相关联知识： 全局Filter: `Vue.filter()`

**如果使用纯javascript就可以达到目的，就要避免使用filter这样的语法**，过滤器应该用于简单的文本转换，如果有复杂的数据转换，应该使用计算属性

## filters
1. 类型：Object
2. 描述：定义可被Vue实例使用的 hash 过滤器(filters)。过滤器(filter) 用于文本的格式化


在以下两个地方具有应用场景
1. 插值表达式 mustache interpretation
2. v-bind expression
```html
 <!-- ===== 例子 -->
<!-- in mustaches -->
<!-- 管道符号 | -->
{{ message | capitalize }}

<!-- in v-bind -->
<div v-bind:id="rawId | formatId"></div>
```

## 组件内注册本地filters
```js
/*
全局filters和本地filters命名相同，本地filters具有更高的优先级
*/
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

## 链式filters
filters 可以链式使用
```js
/*
message 的值作为参数传递到filterA
filterA的值作为参数传递给filterB
最后filterB的值作为表达式的值
*/
{{ message | filterA | filterB }}
```

## 接受参数的filter
因为filter是function，所以可以接受额外的参数

```js
/*
filterA 定义接受三个参数，message的值作为第一个参数
'arg1'是 第二个参数
arg2表达式的值是 第三个参数
*/
{{ message | filterA('arg1', arg2) }}
```