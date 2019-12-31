
## JavaScript
JavaScript 是一种， 面向对象，基于原型，动态，命令式和声明式（如函数式编程），轻量级解释型语言

解析：
1. 面向对象与基于原型。参考 面向对象程序设计部分
2. 动态，指可以按需动态修改数据
3. 解释型语言。现代的JavaScript转换器都运用一种叫做即时编译（just-in-time compiling）的技术, 尽管如此，JavaScript仍然被认为是一种解释性语言，因为编译是在代码运行中而非之前发生的。（编译型语言代码需要先转化（编译）成另一种形式才得以运行）
4. 单线程的javascript：JavaScript 传统上是单线程的。即使有多个内核，也只能在单一线程上运行多个任务，此线程称为主线程（main thread）。单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。CPU大多数时候都是空闲的。
    * 单线程的原因：作为作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。如果javascript是多线程的，那么当两个线程同时对dom进行一项操作，例如一个向其添加事件，而另一个删除了这个dom，此时该如何处理呢？

## JavaScript的超集
由于JavaScript的设计具有一些糟糕的部分，给大型项目的维护增加了难度，所以出现了一下JavaScript的超集：
1. coffeeScript，将js代码转换为规范，可读，在严格模式下运行的javascript，随和EcmaScript6+发布，走向没落
2. EcmaScript：JavaScript 的标准是 ECMAScript 。截至 2012 年，所有的现代浏览器都完整的支持  ECMAScript 5.1，旧版本的浏览器至少支持 ECMAScript 3 标准；2015年, 发布了 ECMAScript 的第六版，该版本正式名称为 ECMAScript 2015，但通常被称为 ECMAScript 6 或者 ES6
3. TypeScript：javascript 的一个超集
4. 衍生脚本jSX


