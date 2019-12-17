
## render
1. 类型：(createElement: () => VNode) => VNode
2. 描述：string template 的替代方案，可以返回javascript编程的最大能力，该渲染函数接受一个createElement方法作为第一个创建VNode

如果组件是一个函数组件(functional component), render function 也会接受一个另外的`context`参数，因为函数组件是没有组件的，所以需要为没有实例的函数组件提供上下文信息。

render function 优先于 template 选项 或者 el选项指定的挂载元素中提取出来的HTML 作为template