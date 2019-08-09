
## 迭代器throw方法抛出错误
throw 方法指定迭代器抛出一个错误继续执行，如果还有yield语句，将会返回语句表达式的值。
```js
function* createInterator() {
  let first = yield 1;
  try {
    let second = yield first + 2;
  } catch (e) {
    second = 6;
  }
  yield second + 3;
}

let interator = createInterator();
interator.next(); // {value: 1, done: false}
interator.next(2); // {value: 4, done: false}

// 迭代器处理错误后继续执行
interator.throw(new Error('Boom')); // {value: 9, done:false}
interator.next(); // {undefined, done: false}
```