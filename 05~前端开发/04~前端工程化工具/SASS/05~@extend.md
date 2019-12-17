
## @extend
选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式，通过`@extend` 语法实现

混合器主要用于展示性样式的重用, 继承应该是建立在语义化的关系上。当一个元素拥有的类（比如说.seriousError）表明它属于另一个类（比如说.error），这时使用继承再合适不过了

因为继承仅仅是重复选择器，而不会重复属性，所以使用继承往往比混合器生成的css体积更小

建议不要用不要用后代选择器去继承
```js
.button-basic  {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.button-report  {
  @extend .button-basic;
  background-color: red;
}

// 编译结果
.button-basic, .button-report {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.button-report  {
  background-color: red;
}


```