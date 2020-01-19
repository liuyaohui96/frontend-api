
## Enum枚举
Enum枚举 可以为一组数值赋予友好的名字。语法是`enum EnumName {...}`

枚举的用处在于，可以用名字得到数值，用数值得到名字。默认情况下，从0开始为元素编号，但可以手动指定元素的值

```ts
// 定义枚举
enum Color {Red, Green, Blue}
// 相当于以下代码
/*
"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
*/
let c: Color = Color.Green; // c 是1

// === 手动指定元素的值
enum Color {Red = 1, Green, Blue} // Red 是1， Green是2，Blue是3
enum Color {Red = 1, Green = 2, Blue = 4} // Red是1，Green2，Blue是4
```