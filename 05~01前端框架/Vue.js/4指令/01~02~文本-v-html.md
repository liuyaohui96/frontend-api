
## v-html
1. 预期：String
2. 描述：更新元素的`innerHTML`, 注意，是作为普通HTML模板插入而不是Vue的编译模板

注意，在网站上动态渲染(dynamically rendering)任意HTML是危险的，因为这容易引起XSS attacks，仅在信任的内容上使用`v-html`, 而不要再用户提供的内容上使用

注意，在单文件组件(single file component) 中， 作用域样式(scoped style） 不能再`v-html`的内容中应用，因为vue 模板编译不对这部分进行处理。解决办法是使用`css modules`或者全局`<stle>`样式，手动设置BEM作用域的。

```js
<div v-html="html"></div>
```