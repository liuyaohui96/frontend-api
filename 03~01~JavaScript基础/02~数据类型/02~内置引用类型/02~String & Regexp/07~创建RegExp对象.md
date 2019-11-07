
## 创建RegExp对象
```js
/*
flag: g|i|m
g 全局匹配，找出所有的匹配项
i 不区分大小写
m 多行模式，到达一行末尾继续下一行的查找
*/

let reg = /pattern/flag

// 构造函数中，对于\需要转义
let reg = new RegExp(pattern[, flag])
```

## 转义元字符
1. `( ) [ ] { }`
2. `^ $`
3. `. + * ?`
4. `\ |`
