我的总结
1. 简单文本表单的onChange和onSubmit事件处理
2. 特殊的，textarea文本值使用value设置，而不是用文本节点表示
3. 特殊的，select初始值由value设置，而不是在option里设置selected, 特殊的使用`<select multiple={true} value={['B', 'C']}>`处理select多选
4. 对于多个元素使用一个事件处理函数，可以通过设置`name`属性，处理函数根据`event.target.name`进行选择处理
5. 这仅是简单的表单处理，更深奥的还需要继续学习
# Form

## Controlled Components
In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the `state` property of components, and only updated with `setState()`

the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

## 简单的表单
```JavaScript
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={nameValue: ''};
    }

    handleChange=(event)=>{
        this.setState({nameValue: event.target.value.toUpperCase()});
    }

    handleSubmit= (event) =>{
        alert('Name is '+ this.state.nameValue);
        event.preventDefault();
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <lable for="name">Name</lable>
                <input id="name" type="text" value={this.state.nameValue} onChange={this.handleChange} />
                <input type="submit" value="submit"/>
            </form>
        )
    }
}
ReactDOM.render(<NameForm />, document.getElementById('root'));
```

## the textarea tag
In HTML, a `<textarea>`` element defines its text by its children:
```HTML
<textarea>
  Hello there, this is some text in a text area
</textarea>
```
In React, a `<textarea>` uses a `value` attribute instead
```JavaScript
<textarea value={this.state.value} />

```

## textarea example
In HTML, `<select>` creates a drop-down list.
```Html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

React, instead of using this `selected` attribute to set initial value, uses a value attribute on the root select tag.
```JavaScript
//  note the initial value how to express
<form onSubmit={this.handleSubmit}>
    <label>
        Pick your favorite flavor:
        <select value={this.state.value} onChange={this.handleChange}> 
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
    </label>
    <input type="submit" value="Submit" />
</form>
```

**:exclamation: Note:**  select multiple options below
```JavaScript
<select multiple={true} value={['B', 'C']}>
```

## select example
```JavaScript
class HobbyForm extends React.Component{
    constructor(props){
        super(props);
        this.state={hobbyValue: 'football'};
    }

    handleChange= (event) => {
        this.setState({hobbyValue: event.target.value});
    }

    handleSubmit= (event) => {
        alert('essay is '+this.state.hobbyValue);
        event.preventDefault();
    }

    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
                <lable for="hobby">hobby</lable>
                <select value={this.state.hobbyValue} onChange={this.handleChange}>
                    <option value='basketball'>basketball</option>
                    <option value='football'>football</option>
                    <option value='read book'>read book</option>
                </select>
                <input type="submit" value="submit" />
            </form>
        )
    }

}
ReactDOM.render(<HobbyForm />, document.getElementById('root'));
```


## Handling Multiple Inputs
When you need to handle multiple controlled input elements, you can add a `name` attribute to each element and let the handler function choose what to do based on the value of `event.target.name`

```JavaScript
// ES6自动计算语法
this.setState({
  [name]: value
});

// 相当于
var partialState = {};
partialState[name] = value;
this.setState(partialState);

```

## Alternatives to Controlled Components
It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component.

In these situations, you might want to check out `uncontrolled components`, an alternative technique for implementing input forms.


## Fully-Fledged Solutions
If you’re looking for a complete solution including validation, keeping track of the visited fields, and handling form submission, Formik is one of the popular choices