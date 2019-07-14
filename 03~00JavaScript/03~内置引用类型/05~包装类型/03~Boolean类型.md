## Boolean 类型
```js
var falseObject = new Boolean(false); 
var falseValue = false; 

var result = falseObject && true;
alert(result); //true 

alert(typeof falseObject); //object
alert(typeof falseValue); //boolean
alert(falseObject instanceof Boolean); //true
alert(falseValue instanceof Boolean); //false
```