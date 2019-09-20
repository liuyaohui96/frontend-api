
## 类构造器使用new.target
可以在类构造器中使用`new.target`, 来判断类是如何被调用的。

```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}

// new.target is Rectangle
// 使用new调用类，new.target 就是类本身
var obj = new Rectangle(3, 4); // outputs true
```

这个值不总是相同的，如
```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

// new.target is Square
var obj = new Square(3); // outputs false

```

## 使用new.target 创建一个抽象基类
```js
// 意味着抽象基类， new Shape会抛出错误
// abstract base class
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('This class cannot be instantiated directly.');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
}

var x = new Shape(); // throws error

var y = new Rectangle(3, 4); // no error
console.log(y instanceof Shape); // true

```