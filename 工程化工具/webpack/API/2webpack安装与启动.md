# 安装
```shell
# 安装过程
yarn init
yarn add yarn add webpack wepack-cli
```

# 启动
```js
// package.json 增加启动快捷方式
"scripts": {
  "build": "webpack"
}

// 或者不同的配置文件启动
// package.json
"scripts": {
  "build": "webpack --config prod.config.js"
}

//增加文件 `./src/index.js`

yarn build
```

# 配置开发服务器
```js
yarn add webpack-dev-server -D
// package.json 增加启动快捷方式
"scripts": {
  "start": "webpack-dev-server"
}
```
在webpack.config.js中的官方配置参考：https://webpack.js.org/configuration/dev-server/#devserver
