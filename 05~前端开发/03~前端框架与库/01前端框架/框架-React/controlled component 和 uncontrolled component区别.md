https://react.docschina.org/docs/uncontrolled-components.html

在React中，所谓受控组件和非受控组件，是针对表单而言的。
1. 在受控组件中，表单数据由 React 组件处理。
  - 表单元素的修改会实时映射到状态值上
  - 受控组件需要继承React.Component才会有状态
  - 受控组件必须要在表单上使用onChange事件来绑定对应的事件
2. 非受控组件表单数据由 DOM 处理
  - 获取输入框中的值的两种方法
  - 在虚拟DOM节点上使用ref，并使用函数，将函数的参数挂载到实例的属性上
    - 例如 `ref={username=>this.username=username}`
  - 构造函数声明的方式。实例的构造函数constructor这创建一个ref,`React.createRef()`。虚拟DOM节点上声明一个ref属性，并且将创建好的实例的ref赋值给DOM节点的ref属性

## 受控组件 vs 非受控组件