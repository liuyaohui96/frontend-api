
## commonJS
通过require方法同步加载指定的依赖模块，通过module.exports 导出模(块要暴露的接口。Node.js采用该模块化方案

```js
const module = require('./moduleA');

module.exports = moduleA.someObj;
```

优点：
1. 使用commonJS的代码可以在node.js应用中被复用
2. npm发布的第三方模块都采用了CommonJS规范

缺点：无法直接在浏览器中运行，需要使用转换工具转换为浏览器能解析的ES5

