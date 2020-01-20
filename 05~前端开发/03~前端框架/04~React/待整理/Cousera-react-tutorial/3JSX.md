## JSX
1. the JavaScript extensions
2. the syntactic extension to JavaScript， which express react elements using it HTML like syntax(JavaScript 的语法扩展，允许使用HTML的语法表示React元素)
3. mixture of the UI logic and rendering logic writtin in single file

```JavaScript
// a react element
const element=<h1 className="greeting">hello world</h1>;

// 相当于
const element=React.createElemet('h1', {className: 'greeting'}, 'hello world');

//又相当于
const element={
    type: 'h1'
    props:{
        className: 'greeting',
        children: 'hello world'
    }
}

```

## embedding expression in JSX
```JavaScript
const dish={id:0,...};

return(
    <div key={dish.id}>...</div>
);

```