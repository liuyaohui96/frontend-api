# prop type
we learn how you can use the prop-types module to validate a custom React component's prop.

Function components define Proptypes off of a property while Class components define Proptypes off of a static method


```JavaScript
const rootElement=document.getElementById('root');
        
function SayHello(props){
    return(
        <div>
            hello {props.firstName} {props.lastName}!
        </div>
    )
}

const Proptype={
    string(props, propName, componentName){
        if(typeof props[propName]!=='string'){
            return new Error(`hey, you should pass a string for ${propName} in ${componentName} 
            but you pass a ${typeof props[propName]}!`);s
        }
    }
}
SayHello.propTypes={
    firstName: Proptype.string,
    lastName: Proptype.string
}



ReactDOM.render(<SayHello firstName={true} />, rootElement);

```

## React proptypes package
React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property

```JavaScript
function SayHello(){...}
SayHello.propTypes={
    irstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}


// or
class SayHello extends React.Component{
    static proptypes={
        irstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }
    //...
}
```