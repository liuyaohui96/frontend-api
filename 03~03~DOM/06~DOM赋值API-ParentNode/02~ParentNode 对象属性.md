
## ParentNode 对象属性
1. ParentNode.children
2. ParentNode.firstElementChild & ParentNode.lastElementChild

## ParentNode.children 
ParentNode.children 是一个只读属性，返回 一个Node的子elements ，是一个动态更新的 HTMLCollection

```js
// 返回的对象类型为 HTMLCollection
ParentNode.children 
```

## ParentNode.firstElementChild & ParentNode.lastElementChild
1. ParentNode.firstElementChild 返回对象的第一个子元素，如果没有子元素，则返回 null
2. ParentNode.lastElementChild返回对象的最后一个子元素，如果没有子元素，则返回 null