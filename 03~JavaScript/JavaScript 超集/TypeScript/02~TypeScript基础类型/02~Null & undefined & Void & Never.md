
## Null & undefined
默认情况下null和undefined值是所有类型的子类型，例如可以把 null和undefined赋值给number类型的变量。

如果指定了`--strictNullChecks`标记，null和undefined只能它们本身的类型，undefined可以赋值给void类型值，但null不可以
```ts
let u: undefined = undefined;
let n: null = null;

// 默认情况下，不指定`--strictNullChecks`标记，null和undefiner可以为所有类型赋值
let num:number = null;
num = undefined;
```

## Void
Void 表示没有任何类型，通常在函数没有返回值时使用。将变量声明为void类型没有任何用处，只能为他赋值为`Null`（仅在`--strictNullChecks`没有设置情况下可以赋值null）和undefined

```js
function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;
unusable = null; // 仅在`--strictNullChecks`没有设置情况下可以赋值null
```

## Never
never 类型表示的是那些永不存在的值的类型，是任何类型的子类型，所以可以将值赋给任何类型。使用场景：
* 抛出异常或永远不会return的函数
* 变量也可能是 never类型，当它们被永不为真的类型保护所约束时

除了never类型本身，不能给never类型赋值，因为不存在可以never类型的子类型或者能够赋值never类型， 即使 any也不可以赋值给never

```js
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```