1. Loading CSS
`yarn add css-loader style-loader -D`
官方文档参考：https://webpack.js.org/guides/asset-management#loading-css
- 添加浏览器前缀  
  `yan add postcss-loader autoprefixer -D`
  - 需要单独设置`postcss.config.js `进行配置
  > Use it after css-loader and style-loader, but before other preprocessor loaders like e.g sass|less|stylus-loader
  - 官方文档参考：https://webpack.js.org/loaders/postcss-loader/#autoprefixing

- 加载sass 文件
  `yarn add sass-loader node-sass -D`
  sass-loader in github: https://github.com/webpack-contrib/sass-loader


1. Loading image & fonts
`yarn add file-loader -D`
loading image 配置文档参考：https://webpack.js.org/guides/asset-management#loading-images

loading fonts 配置文档参考：https://webpack.js.org/guides/asset-management#loading-fonts

file-loader in github: https://github.com/webpack-contrib/file-loader

3. 将小图片转换成base64格式
`yarn add url-loader -D`
url-loader in github: https://github.com/webpack-contrib/url-loader




  
