
## delimiters
1. 类型：`Array<string>`
2. 默认: `["{{", "}}"]`
3. 限制：在Vue的完整构建版本，具有浏览器编译才能使用
4. 描述：改变纯文本的插入分隔符

```js
new Vue({
  delimiters: ['${', '}']
})

// Delimiters changed to ES6 template string style
```

## {{}}
`{{}}`是默认的组基本的文本插值