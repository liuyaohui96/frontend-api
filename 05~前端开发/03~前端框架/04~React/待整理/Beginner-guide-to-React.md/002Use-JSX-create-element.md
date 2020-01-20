```JavaScript
const content='hello world';
const element=<div className='container'>{content}</div>;

ReactDOM.render(element, document.getElementById('root'));


// in {} curry braces, we can writh any JavaScript
// 在{} 里我们可以写任何的javascript语句

// ---------------------
const props={
    className: 'contaner',
    children: 'hello world',
}
const element=<div {...props} />;

// override the props
const element=<div {...props} className='row'/>
// className finally is 'row'
```