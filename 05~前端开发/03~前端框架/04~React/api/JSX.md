JSX 可以生成 React “元素”, 如何将这些“元素”渲染为DOM将在**元素渲染**中介绍。

## JSX简介
Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用
```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

// 等价于
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

//实际上创建了如下的对象
// 注意：这是简化过的结构
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

## 为什么使用 JSX？
React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，所以React 并没有采用将标记与逻辑进行分离到不同文件

## JSX的使用
1.  JSX 中嵌入表达式
  ```js
  const element = <h1>Hello, {name}</h1>;
  ```

2. JSX 也是一个表达式
  JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX，都是可行的。

## JSX的特定属性
```js
// 字符串字面量
const element = <div tabIndex="0"></div>;

// javascript 表达式
const element = <img src={user.avatarUrl}></img>;
```
> JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。

## JSX包含子元素
```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

使用JSX，React DOM 在渲染所有输入内容之前，默认会进行转义，这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击