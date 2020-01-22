
## 组件的props
当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）转换为单个称为props的对象传递给组件。

Props 对象是只读的：组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props，因为规定所有 React 组件都必须像纯函数一样保护它们的 props 不被更改

## 组件的state
组件的state 表示随时可能发生变化的数据