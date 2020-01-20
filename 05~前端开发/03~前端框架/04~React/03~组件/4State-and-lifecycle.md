# State and liftecycle

State is similar to props, but it is private and fully controlled by the component
1. 介绍state
2. 将容器函数转换为容器类
3. 在容器类内定义state
4. 周期方法componentDidMount 和 componentWillUnmount
5. 运用state和周期方法创建Clock类
6. 怎样正确的改变`state`, 实例属性和state属性的更新可能是异步的，所以作为函数去更新，而不是对象更新


## Convert a function to a class

**:exclamation:Note:** Replace props with this.props in the render() body
```JavaScript
function Clock(){
    return(
        <div>
            ...
        </div>
    )
}

// 转换为
class Clock extends React.Component{
    render(){
        return(
            <div>
                ...
            </div>
        )
    }
}

```

## Adding local state state to a class
1. Replace `this.props.date` with `this.state.date` in the render() method:
    ```JavaScript
    class Clock extends React.Component {
    render() {
        return (
        <div>
            <h1>Hello, world!</h1>
            // change to `this.state.date...`
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
    }

    ```
2. Add a class constructor that assigns the initial this.state
    ```JavaScript
    class Clock extends React.Component {
        // `add constructor`
        constructor(props) {
            super(props);
            this.state = {date: new Date()};
        }

        render() {
            return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            );
        }
    }

    ```

## state的运用例子
```JavaScript
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }

    render(){
        return(
            <div>
                <h1>Time</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

function renderClock(){
    ReactDOM.render(
        <Clock />, document.getElementById('root')
    );
}

setInterval(renderClock, 1000);

```

## Adding Lifecycle Methods to a Class
安装和卸载：
We want to `set up a timer` whenever the Clock is rendered to the DOM for the first time. This is called `“mounting” `in React.

We also want to `clear that timer` whenever the DOM produced by the Clock is removed. This is called `“unmounting”` in React.

```JavaScript
class Clock extends React.Component {
    // ...

    // These methods are called “lifecycle methods”.
    // runs after the component output has been rendered to the DOM. 
    // This is a good place to set up a timer
    // 在渲染后执行，设置timer的好地方
    componentDidMount() {

    }

    // 容器移除时执行
    componentWillUnmount() {

    }

}

```

`this.state` has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID)

## 运用state和lifecycle实现时钟
```JavaScript
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }

   componentDidMount(){
       //设置计时器
       this.timerId=setInterval(() => {
          this.tick() 
       }, 1000);
   }

   componentWillUnmount(){
       //删除计时器
       clearInterval(this.timerId);
   }

   // 每秒调用改变state
   tick(){
       this.setState({date: new Date()})
   }

   // 第一次render，或者改变state之后触发render
   render(){
       return(
           <div>
               <h1>Time</h1>
               <h2>{this.state.date.toLocaleTimeString()}</h2>
           </div>
       )
   }

}

ReactDOM.render(<Clock />, document.getElementById('root'));
```
1. `<Clock />` 传递给`ReactDOM.render()`, Clock调用构造函数，然后调用`render`方法
2. 然后调用`componentDidMount()`周期方法去设置计时器每秒调用`tick()`方法
3. `tick()`方法使用`setState()`内置方法改变state
4. state的改变促使再次调用`render`方法
5. 当clock元素在DOM中被溢出，调用`componentWillUnmount()`方法清除计时器


## using state correctly
```JavaScript
// Wrong
this.state.comment = 'Hello';

// Correct
this.setState({comment: 'Hello'});

// -----------------------------------------------------
// Because this.props and this.state may be updated asynchronously
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

// To fix it, use a second form of setState() that accepts a function rather than an object
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

// ---------------------------
// State Updates are Merged
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
}
// 后续的setState()改变指定的属性，原来的依旧保存
```

## The Data Flows Down
This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it(state对于其他容器来说是不可以访问的，所以sate又称为封装和本地)