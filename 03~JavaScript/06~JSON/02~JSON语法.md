## JSON语法
JSON 被写为一个key/value，key必须用双引号包围。JSON有三种类型的值
1. 简单值。可以在JSON中表示number，string，boolean和null值，不可以表示undefined
2. 对象。
3. 数组
```json
// === 简单值
// 其中字符串的表示必须是
"name": "liu"

// === 对象
// 对象的属性名任何时候都必须要加双引号
{
  "name": "liu",
   "result": 10
}

// === 数组
[25, "hello"]

[
  {
    "name" : "liu"
  },
  {
    "age" : 25
  }
]
```
> 注意: JSON的value值不能是undefined, function,date
> JSON 的 array中的元素可以是string, number, null， boolean，object, array