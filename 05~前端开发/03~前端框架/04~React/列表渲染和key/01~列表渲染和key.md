
## 列表渲染
可以使用JavaScript中提供的迭代方式，创建多个JSX元素，从而实现列表渲染

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

render(
  return <ul>{listItems}<ul>
)
```

## key
key 帮助 React 识别哪些元素改变了，在列表渲染中需要提供一个确定的key，一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串，通常使用数据中的 id 来作为元素的 key，当元素没有确定 id ，万不得已可以使用元素索引 index 作为 key


如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题，如果选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值