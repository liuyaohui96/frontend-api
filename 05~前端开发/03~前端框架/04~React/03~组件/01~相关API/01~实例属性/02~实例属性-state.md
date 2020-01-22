
## state
组件中的 state 表示随时可能发生变化的数据。类组件中通过`this.state`访问state，这是一个对象

 
关于state的注意事项：
* 未用于渲染或数据流的值不必设置为state，可以直接在组件实例上定义   
* 不要直接改变`this.state`，因为后续调用的 setState() 可能会替换掉这种改变
* State 的更新可能是异步的：出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用，因为 this.props 和 this.state 可能会异步更新，所以不要依赖他们的值来更新下一个状态
* State 的更新会被合并。调用 setState() 的时候，React 会把你提供的对象合并到当前的 state