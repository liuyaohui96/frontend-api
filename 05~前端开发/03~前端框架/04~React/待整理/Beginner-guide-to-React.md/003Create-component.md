## function call 的例子
```JavaScript
// message
const message= (props) => <div>{props.msg}</div>;
const element=(
    <div>
    {message({msg: 'hello world'})}
    {message({msg: 'hello'})}
    </div>
)

ReactDOM.render(element, rootElement);
```

## JSX component
Unfortunately, function calls don't really compose quite as well as JSX does.

For JSX to differentiate whether you're talking about a variable that's in scope or a raw DOM element, you need to capitalize your component（为了不被当作原生DOM元素，对于容器需要首字母大写）
```JavaScript
const element={
     <div>
     // {message({msg: 'hello world'})}
     // 相当于
    {React.createElement(message, {msg: 'hello world'})}
    </div>
}

// 而
<message />
// 相当于
React.createElement('message', null);

const message= props => <div>{props.msg}</div>
//相当于
const message= props => React.createElement('div', null, props.msg);

// 容器
<Message />
//相当于
React.createElement(Message, null);

//容器参数传递,使用JavaScript赋值语法
<Message msg='hello world'>
```
