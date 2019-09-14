module: {
  rules: [
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader' // 将 JS 字符串生成为 style 节点
        },
        {
          loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
        },
        {
          loader: 'sass-loader' // 将 Sass 编译成 CSS
        }
      ]
    }
  ];
}

module: {
  rules: [
    {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      use: ['file-loader']
    }
  ];
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
plugins: [new HtmlWebpackPlugin()];

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});

const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [new UglifyJSPlugin()]
});
