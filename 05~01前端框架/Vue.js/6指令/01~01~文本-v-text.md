
## v-text
1. 预期： String
2. 描述：更新元素的`textContent`，如果需要更新`textContent`的一部分内容，需要使用插值(interpolations)`{{Mustache}}`

```js
<span v-text="msg"></span>
<!-- same as -->
<span>{{msg}}</span>
```