## 不要直接修改state
```js
// Wrong
this.state.comment = 'Hello';

// Correct
this.setState({comment: 'Hello'});
```
## 更新state可能是异步的
出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用，因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
## 为什么是异步的
1. 假设 state 是同步更新的，将状态提升到父组件，以供多个兄弟组件共享，同步模型中，虽然 this.state 会立即更新，但是 this.props 并不会，在没有重渲染父组件的情况下，我们不能立即更新 this.props
2. 将state的更新延缓到最后批量合并再去渲染对于应用的性能优化是有极大好处的，如果每次的状态改变都去重新渲染真实dom，那么它将带来巨大的性能消耗

3. setState并不是真正意义上的异步操作，它只是模拟了异步的行为。React中会去维护一个标识（isBatchingUpdates），判断是直接更新还是先暂存state进队列。setTimeout以及原生事件都会直接去更新state，因此可以立即得到最新state
4. setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次 setState ， setState 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新



## 向下流动的数据流
父组件和子组件都无法知道某个组件是stateful还是stateless，所以state设置为local和encapsulated，其他组件是无法访问。父组件可以向子组件传递数据（可以是state，可以是props），但是子组件是以props接受数据，数据的来源是不清楚的，这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。