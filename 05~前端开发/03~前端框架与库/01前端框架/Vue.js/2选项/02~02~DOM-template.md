
## template
1. 类型： `string`
2. 描述：将一个字符串template作为vue 实例的markup

template会替换指定的挂载(mounted)元素。**指定挂载元素内部的markup都会被忽略**，除非template中使用分发插槽(distribution slots)。

如果字符串值以`#`开始，它会被作为selector，匹配的元素的innerHTML会作为template string；常用技巧是使用`script type="x-template">`来引入template

如果Vue实例具有render funciton, 那么template将会被忽略。

注意，不要使用其他人生成的内容作为template，使用令你信任的Vue template


```html
<!-- 往往不会直接在temple直接书写html字符串，这样会与js代码混合在一起，不便于维护 -->
<script id="tp1" type="x-template">
    <p>hello world</p>
</script>
<script>
var vm = new Vue({
    el: '#app',
    template: '#tp1'
})
</script>

```

## 模板语法
```html
<!-- === 表达式的使用，注意是表达式，而不是语句 -->
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}

<!-- ====== 文本举例 -->
<span>Message: {{ msg }}</span>
<!-- 辅助使用v-once 数据改变不进行改变，进进行一次渲染 -->
<span v-once>This will never change: {{ msg }}</span>

<!-- ====== 原生HTML -->
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

<!-- attribute 属性 -->
<div v-bind:id="dynamicId"></div>

<!-- === 指令 详细查看指令相关内容 -->


```