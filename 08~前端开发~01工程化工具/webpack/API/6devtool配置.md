参考文档：https://webpack.js.org/configuration/devtool/#devtool

```js
devtool:'none' // 在开发者模式下，默认开启sourcemap,将其关闭
devtool:'source-map' // 开启映射打包会变慢
devtool:'inline-source-map'// 不单独生成.map文件，会将生成的映射文件以base64的形式插入到打包后的js文件的底部
devtool:'cheap-inline-source-map'// 代码出错提示不用精确显示第几行的第几个字符出错，只显示第几行出错，会提高一些性能
devtool:'cheap-module-inline-source-map'// 不仅管自己的业务代码出错，也管第三方模块和loader的一些报错
devtool:'eval'// 执行效率最快，性能最好，但是针对比较复杂的代码的情况下，提示内容不全面
devtool: 'cheap-module-eval-source-map'// 在开发环境推荐使用，提示比较全，打包速度比较快
devtool: 'cheap-module-source-map'// 在生产环境中推荐使用，提示效果会好一些
```
