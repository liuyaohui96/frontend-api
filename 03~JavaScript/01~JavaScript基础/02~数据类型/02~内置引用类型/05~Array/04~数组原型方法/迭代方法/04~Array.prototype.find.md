

## Array.prototype.find
Array.prototype.find() 迭代数组，返回callback返回值第一个为true的数组项

```js
Array.prototype.find(callback(item [, index [, array]])[, thisArg])

// === 例子
let persons = [
  { name: 'liuyaohui', age: 21 },
  { name: 'liuyaohui2', age: 24 }
];

let findResult = persons.find(person => person.age > 23);
console.log(findResult); // { name: 'liuyaohui2', age: 24 }
```